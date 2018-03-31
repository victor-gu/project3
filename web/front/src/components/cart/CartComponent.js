import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent';
import http from "../../utils/httpclient";
import '../../common/common.css'


import {Link,hashHistory,browserHistory} from 'react-router'

import "./CartComponent.scss";

export default class CartComponent extends Component{

    state = {
        dataset:[]
    }

    componentWillMount(){
        http.get("userCart", {id:window.sessionStorage.getItem('userid')}).then((res)=>{
            // console.log(res)
            if(res.status == true){
                this.setState({
                    dataset:res.data
                })
            }else{
                this.props.router.push({pathname:"/login"})
            }
        })
    }

    componentDidUpdate(){
        var all = document.querySelector(".all");
        var hobby = document.querySelectorAll(".list li .left input");
        var totalPrice = document.querySelector(".totalPrice");

        // console.log(hobby);
        all.onclick = function(){
            for(var i=0;i<hobby.length;i++){
                hobby[i].checked = all.checked;
                count()
            }
        }
        for(var i=0;i<hobby.length;i++){
            hobby[i].onclick = function(){
                all.checked = isCheckAll();
                count()
            }
        }

        function count(){
            var total = 0;
            for(var i=0; i<hobby.length; i++){
                var price = hobby[i].parentElement.parentElement.children[1].children[1].children[0].children[0].innerText*1;
                var num = hobby[i].parentElement.parentElement.children[1].children[1].children[1].children[0].innerText*1;
                // totalPrice.innerText = 0;
                if(hobby[i].checked){
                    total += price * num;
                    totalPrice.innerText = total;
                }
                if(notCheckAll()){
                    totalPrice.innerText = 0;
                }
            }
        }

        function notCheckAll(){
            var res = true;
            for(var i=0;i<hobby.length;i++){
                if(hobby[i].checked){
                    res = false;
                    break;
                }
            }
            return res;
        }
        
        function isCheckAll(){
            var res = true;
            for(var i=0;i<hobby.length;i++){
                if(!hobby[i].checked){
                    res = false;
                    break;
                }
            }
            return res;
        }
    }

    settle(){
        var hobby = document.querySelectorAll(".list li .left input");
        var arr = [];
        var obj = this.state.dataset;
        for(var i=0; i<hobby.length; i++){
            if(hobby[i].checked){
                for(var j=0; j<obj.length; j++){
                    if(obj[j]._id == hobby[i].dataset.id){
                        arr.push(obj[j])
                    }
                }
            }
        }

        // 先在订单表中查找用户订单并且是为付款的，如果有了订单则更新订单数据，如果没有订单则插入订单
        http.get("userOrder", {userid:window.sessionStorage.getItem('userid'), status:0}).then((res)=>{
            // console.log(res)
            if(res.data.length==0){
                http.get("insertOrder", {userid:window.sessionStorage.getItem('userid'), status:0, products:JSON.stringify(arr)}).then((res)=>{
                    // console.log(res);
                })
            }else{
                http.get("UpdOrder", {userid:window.sessionStorage.getItem('userid'), condition:0, status:0, products:JSON.stringify(arr)}).then((res)=>{
                    // console.log(res);
                })
            }
        })
        this.props.router.push({pathname:"/confirmOrder"})
    }

    render(){
        
        return (
          <div  className="home">
            <div className="homeHeader"></div>

            <div className="homeContent">
                <div className="top">
                    <p className="hint">购物车</p>
                    <p className="edit">
                        <span className="one">领劵</span>
                        <span>编辑</span>
                    </p>
                </div>

                <ul className="list" ref="chex">
                   
                    {
                        this.state.dataset.map(function(item){
                            return (
                                    <li key={Math.random()*1000}>
                                        <div className="left">
                                            <input className="int" data-id={item._id} type="checkbox" />
                                            <img src={"./src/static/img/"+item.img}/>
                                        </div>
                                        
                                        <div className="tit">
                                            <p className="des">{item.title}</p>
                                            <p className="price">
                                            <span className="price1">￥<i>{item.price}</i></span>
                                            <span className="num">x<i>{item.number}</i></span>
                                            </p>
                                        </div>
                                    </li>
                                )
                        })
                    }
                </ul>

                <div className="total">
                    <p className="total1">
                        <input type="checkbox" className="all"/>
                        <span>全选</span>
                    </p>
                    <div className="right">
                        <p className="total2">总计：￥<span className="totalPrice">0</span></p>
                        <p className="total3" onClick={this.settle.bind(this)}>结算</p>
                    </div>
                </div>

            </div>
            
            <div className="homeFooter"><NavComponent /></div>
          </div>
        )
    }
}