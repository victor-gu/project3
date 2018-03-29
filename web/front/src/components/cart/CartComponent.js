import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent';
import http from "../../utils/httpclient";
import '../../common/common.css'

import "./CartComponent.scss";

export default class CartComponent extends Component{

    state = {
        dataset:[]
    }

    componentWillMount(){
        http.get("userOrder", {id:window.sessionStorage.getItem('userid')}).then((res)=>{
            console.log(res)
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

        console.log(hobby);
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
                if(hobby[i].checked){
                    total += price * num;
                    totalPrice.innerText = total;
                }
            }
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
                                            <input className="int" type="checkbox" />
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
                        <p className="total3">结算(3)</p>
                    </div>
                </div>

            </div>
            
            <div className="homeFooter"><NavComponent /></div>
          </div>
        )
    }
}