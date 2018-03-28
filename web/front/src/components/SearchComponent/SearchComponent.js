import React, {Component} from 'react' 
import {Link} from 'react-router'
import http from '../../utils/httpclient.js'


import './SearchComponet.css'
import './lzf_iconfont2/iconfont.css'

export default class SearchComponet extends Component{
    
    state = {
        proParams: '',
            
        HotDataset : ['荣耀畅玩7C', 'HUAWEI nova 3e', '荣耀v10', 'HUAWEI Mate 10', '荣耀9青春版', '生态产品', '荣耀手环', '华为智能体脂秤', '荣耀畅玩7X'],

        inputeventdata : [], 

        ajaxdataset : []
    }

    getval(){
        this.setState({
            proParams: this.refs.productsTitle.value
        }, ()=>{
            this.state.proParams = this.state.proParams
            if(this.state.proParams !== ''){
                http.post('http://localhost:8080/projectfuzzy', {name: this.state.proParams}).then((res)=>{
                    // console.log(res);
                    this.setState({
                        inputeventdata: res.data,
                        HotDataset : []
                    })
                })
            }else{
                this.setState({
                    inputeventdata : [],
                    HotDataset : ['荣耀畅玩7C', 'HUAWEI nova 3e', '荣耀v10', 'HUAWEI Mate 10', '荣耀9青春版', '生态产品', '荣耀手环', '华为智能体脂秤', '荣耀畅玩7X']
                })
            }
        })
    }

    //功能：点击热门推荐的关键字和搜索框自动推荐的关键字---然后以此作为关键字发起ajax请求
    getsuggest(event){
        // console.log(event.target)
        this.setState({
            proParams: event.target.innerText
        }, ()=>{
            this.refs.productsTitle.value = this.state.proParams
            this.setState({
                inputeventdata:[]
            })
        })
    }
    

    render(){
        let hotcontent;
        let hothtml = (
            <div>
                <h3>热门搜索</h3>
                <ul  onClick={this.getsuggest.bind(this)}>                 
                    {
                        this.state.HotDataset.map((item)=>{
                            return (
                                <li key={Math.random()}><span>{item}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
        //这里判断用户是否在输入框输入了数据，没有输入默认显示热门信息，否则清空热门内容
        this.state.proParams == '' ? hotcontent = hothtml :  hotcontent =  null;

        
        let inputeventcontent;
        let inputeventhtml = (
            <ul   onClick={this.getsuggest.bind(this)}>
                {
                    this.state.inputeventdata.map((item)=>{
                        return (
                            <li key={Math.random()}>{item.name}</li>
                        )
                    })
                }
            </ul>
        )
        let inputnullhtml = (
            <ul>
                <li>没有找到商品哦</li>
            </ul>
        )

        inputeventcontent = this.state.inputeventdata.length > 0 ? inputeventhtml : null;



        return (
            <div className="lzf_search_wholebody" >

                <div className="lzf_search_box">
                    <i className="iconfont lzf_left">&#xe602;</i>
                    <div className="inputvalbox">
                        <i className="iconfont lzf_big">&#xe60b;</i>
                        <input placeholder = "HUAWEI nova 2s 荣耀V10" type="text" onChange={this.getval.bind(this)} ref="productsTitle"/>
                        <i></i>
                    </div>
                    <div className="lzf_search_click">搜索</div>
                </div>

                <div className="hotsearchbox clearfix" > 
                    {hotcontent}
                </div>

                <div className="inputeventdata">
                    {inputeventcontent}
                </div>



            </div>
        )
    }
}