import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent'
import '../../common/common.css'
import './css/SortComponent.css'

export default class SortComponent extends Component{
    baseurl(){
      return './src/components/sort/imgs/'
    }
    tab(e){
      if(e.target.tagName=="LI"){
        for(var i=0;i<e.target.parentNode.children.length;i++){
          if(e.target.parentNode.children[i] === e.target){
              e.target.className = 'sorttab';
            }else{
              e.target.parentNode.children[i].className = '';
            }
        }
      }
    }
    render(){
        return (
            <div id="sort">
                  <div className="sort-head">
                      <input type="text" placeholder="HUAWEI nova 2s 荣耀V10 "/>
                      <i className="icon-qunfengxiaoxitishilingdang iconfont i1"></i>
                      <i className="i2 icon-search iconfont"></i>
                  </div>
                  <div className="sort-body">
                      <div className="sort-left">
                          <ul onClick={this.tab}>
                              <li>为您推荐</li>
                              <li>华为手机</li>
                              <li>荣耀手机</li>
                              <li>笔记本平板</li>
                              <li>智能穿戴</li>
                              <li>智能家居</li>
                              <li>专属配件</li>
                              <li>通用配件</li>
                              <li>生态产品</li>
                          </ul>
                      </div>
                      <div className="sort-right">
                          <div className="box-img">
                              <img src={this.baseurl()+'hot-1.jpg'}/>
                              <img src={this.baseurl()+'hot-2.jpg'}/>
                          </div>
                          <div className="side-bannar">
                              <div className="right-bannar">
                                  <ul>
                                    <li><img src={this.baseurl()+'bannar1.jpg'}/></li>
                                    <li><img src={this.baseurl()+'bannar2.jpg'}/></li>
                                    <li><img src={this.baseurl()+'bannar3.jpg'}/></li>
                                    <li><img src={this.baseurl()+'bannar4.jpg'}/></li>
                                    <li><img src={this.baseurl()+'bannar5.jpg'}/></li>
                                  </ul>
                              </div>
                          </div>
                          
                          <div className="right-title">
                              <h4>
                                  <span>精选手机</span>
                              </h4>
                          </div>
                          <div className="right-body">
                              <ul>
                                  <li><img src={this.baseurl()+'1.jpg'}/><span>荣耀V10</span></li>
                                  <li><img src={this.baseurl()+'2.jpg'}/><span>荣耀V10</span></li>
                                  <li><img src={this.baseurl()+'3.jpg'}/><span>荣耀V10</span></li>
                                  <li><img src={this.baseurl()+'4.jpg'}/><span>荣耀V10</span></li>
                                  <li><img src={this.baseurl()+'5.jpg'}/><span>荣耀V10</span></li>
                                  <li><img src={this.baseurl()+'6.jpg'}/><span>荣耀V10</span></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="homeFooter"><NavComponent /></div>
            </div>
        )
    }
}