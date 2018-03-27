import React,{Component} from 'react' 
import NavComponent from '../nav/NavComponent';
import '../../common/common.css'

import "./CartComponent.scss";

export default class CartComponent extends Component{
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

                <ul className="list">
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <input className="int" type="checkbox" />
                            <img src="./src/img/1.jpg"/>
                        </div>
                        
                        <div className="tit">
                            <p className="des">荣耀移动电源10000mAh快充版（白色）</p>
                            <p className="price">
                                <span className="price1">￥169</span>
                                <span className="num">x1</span>
                            </p>
                        </div>
                    </li>
                </ul>

                <div className="total">
                    <p className="total1">
                        <input type="checkbox"/>
                        <span>全选</span>
                    </p>
                    <div className="right">
                        <p className="total2">总计：<span>￥3266.00</span></p>
                        <p className="total3">结算(3)</p>
                    </div>
                </div>

            </div>
            
            <div className="homeFooter"><NavComponent /></div>
          </div>
        )
    }
}