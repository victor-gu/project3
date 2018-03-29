import React, {Component} from 'react' 
import {Link,hashHistory,browserHistory} from 'react-router'
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

    // 模糊搜索获取信息功能
    getval(){
        this.setState({
            proParams: this.refs.productsTitle.value
        }, ()=>{
            this.state.proParams = this.state.proParams
            if(this.state.proParams !== ''){
                http.get('backproducts', {title: this.state.proParams}).then((res)=>{
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
        this.setState({
            proParams: event.target.innerText
        }, ()=>{
            this.refs.productsTitle.value = this.state.proParams
        })
    }

    //清空搜索框里面的关键字
    clearsuggest(){
        this.setState({
            proParams : ''
        }, ()=>{
            this.refs.productsTitle.value = this.state.proParams
            this.setState({
                ajaxdataset : [],
                inputeventdata:[],
                HotDataset : ['荣耀畅玩7C', 'HUAWEI nova 3e', '荣耀v10', 'HUAWEI Mate 10', '荣耀9青春版', '生态产品', '荣耀手环', '华为智能体脂秤', '荣耀畅玩7X']
            })
        })
    }

    //fuzzy搜索
    realsearch(){
        var currentkeyword = this.refs.productsTitle.value;
       
        if(this.state.proParams !== ''){
            http.get('backproducts', {title: currentkeyword}).then((res)=>{
                // console.log(res);
                this.setState({
                    ajaxdataset : res.data,
                    inputeventdata: [],
                    HotDataset : []
                })
            })
        }    
    }

    gotodet(id){
        // console.log(id);
        var path = '/goods/' + id; 
        hashHistory.push(path);
    }




    //----------------------------------------------------------------
    render(){
        let baseurl = 'src/static/img/'
        let hotcontent;
        let hothtml = (
            <div>
                <h3>热门搜索关键字</h3>
                <ul>                 
                    {
                        this.state.HotDataset.map((item)=>{
                            return (
                                <li key={Math.random()}  onClick={this.getsuggest.bind(this)}><span>{item}</span></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
        if(this.state.proParams == '' && this.state.HotDataset.length > 0 && this.state.ajaxdataset.length == 0){           
            hotcontent = hothtml
        }else{
            hotcontent =  null;
        }
        //-------------------------------------------------------------------

        
        let inputeventcontent;
        let inputeventhtml = (
            <ul >
                {
                    this.state.inputeventdata.map((item)=>{
                        // console.log(item);
                        return (
                            <li key={item._id} onClick={this.gotodet.bind(this,item._id)}>{item.name}</li>
                        )
                    })
                }
            </ul>
        )

        inputeventcontent = this.state.inputeventdata.length > 0 ? inputeventhtml : null;
        //-------------------------------------------------------------------

        let searchcontent;
        let searchhtml = (
            <ul>
                {
                    this.state.ajaxdataset.map((item)=>{
                        return (
                            <li key={item._id} onClick={this.gotodet.bind(this,item._id)}><div className="search_prolist"><img src={baseurl + item.img}/><div className="msglist"><span className="proname">{item.name}</span><span>￥{item.price}</span></div></div></li>
                        )
                    })
                }
            </ul>
        )
        let searchnull = (
            <ul>
                {
                    <li className="noneproducts">{"对不起查找不到相关产品"}</li>
                }
            </ul>
        )
        if(this.state.ajaxdataset.length > 0 && this.state.inputeventdata.length == 0){
            searchcontent = searchhtml;
        }else if(this.state.ajaxdataset.length == 0 && this.state.HotDataset.length == 0 && this.state.inputeventdata.length == 0){
            searchcontent = searchnull;
        }
        //----------------------------------------------------------------------


        return (
            <div className="lzf_search_wholebody" >

                <div className="lzf_search_box">
                    <Link to = "/"><i className="iconfont lzf_left">&#xe602;</i></Link>
                    <div className="inputvalbox">
                        <i className="iconfont lzf_big">&#xe60b;</i>
                        <input placeholder = "HUAWEI nova 2s 荣耀V10" type="text" onChange={this.getval.bind(this)} ref="productsTitle"/>
                        <i className = "clearitem" onClick={this.clearsuggest.bind(this)}>x</i>
                    </div>
                    <div className="lzf_search_click" onClick={this.realsearch.bind(this)}>搜索</div>
                </div>

                <div className="search_mainbox">
                    <div className="hotsearchbox" > 
                        {hotcontent}
                    </div>

                    <div className="inputeventdata">
                        {inputeventcontent}
                    </div>

                     <div className="searchbox">
                        {searchcontent}
                    </div>
                </div>
                
            </div>
        )
    }
}