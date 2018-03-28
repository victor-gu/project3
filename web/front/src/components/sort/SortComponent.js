import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent'
import '../../common/common.css'
import './css/SortComponent.css'
import http from '../../utils/httpclient'
import SpinnerComponent from '../../spinner/SpinnerComponent'
import HotComponent from './hotComponent'

export default class SortComponent extends Component{
    componentWillMount(){
        this.setState({
            show: true
        })
        http.get('frontApoproducts',{hot:'hot'}).then((res) => {
                this.setState({
                  data: res.data,
                  show:false,
                  hot:true,
                  title:'为您推荐'
              })
        })
    }
    state = {
        data:[],
        show:false,
        hot:false,
        title:''
    }
    li1(e){
        this.refs.hotli.className="sorttab"
        this.setState({
            show: true,
            hot:true,
            title:'为您推荐'
        })
        http.get('frontApoproducts',{hot:'hot'}).then((res) => {
                this.setState({
                  data: res.data,
                  show:false
              })
        })
    }
    tab(e){
      if(e.target.tagName=="LI"){
        for(var i=1;i<e.target.parentNode.children.length;i++){
          if(e.target.parentNode.children[i] === e.target){
              this.refs.hotli.className="";
              e.target.className = 'sorttab';
              this.setState({
                  show: true,
                  hot:false,
                  title:e.target.innerText
              })
              http.get('frontApoproducts',{category:e.target.innerText}).then((res) => {
                    this.setState({
                      data: res.data,
                      show:false
                  })
              })
            }else{
              e.target.parentNode.children[i].className = '';
            }
        }
      }
    }
    render(){
        return (
            <div id="sort">
                  <SpinnerComponent show={this.state.show}/>
                  <div className="sort-head">
                      <input type="text" placeholder="HUAWEI nova 2s 荣耀V10 "/>
                      <i className="icon-qunfengxiaoxitishilingdang iconfont i1"></i>
                      <i className="i2 icon-search iconfont"></i>
                  </div>
                  <div className="sort-body">
                      <div className="sort-left">
                          <ul onClick={this.tab.bind(this)}>
                              <li onClick={this.li1.bind(this)} ref="hotli" className="sorttab">为您推荐</li>
                              <li>华为手机</li>
                              <li>荣耀手机</li>
                              <li>笔记本&平板</li>
                              <li>智能穿戴</li>
                              <li>智能家居</li>
                              <li>专属配件</li>
                              <li>通用配件</li>
                              <li>生态产品</li>
                          </ul>
                      </div>
                      <div className="sort-right">
                          <HotComponent hot={this.state.hot}></HotComponent>
                          <div className="right-title">
                              <h4>
                                  <span>{this.state.title}</span>
                              </h4>
                          </div>
                          <div className="right-body">
                              <ul>
                                  {
                                    this.state.data.map(function(item){
                                        return (
                                          <li key={item._id}>
                                              <img src={'./src/components/sort/imgs/'+item.img}/>
                                              <span>{item.name}</span>
                                          </li>
                                        )
                                    })
                                  }
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="homeFooter"><NavComponent /></div>
            </div>
        )
    }
}