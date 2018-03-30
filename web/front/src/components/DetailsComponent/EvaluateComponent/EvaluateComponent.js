import React from "react";
import "./EvaluateComponent.scss";


export default class CartComponent extends React.Component{
    state = {
        baseImg:"./src/static/img/"
    }
    render(){
        return (
            <div className="evaluate">
                <div className="items">
                    <p>好评度 <span>97%</span></p>
                    <ul>
                        <li>系统流畅</li>
                        <li>手感舒适</li>
                        <li>物流快速</li>
                        <li>反应灵敏</li>
                    </ul>
                    <ul>
                        <li>智能贴心</li>
                        <li>拍照惊艳</li>
                    </ul>
                </div>

                <div className="quto">
                    <ul>
                        <li>最热门</li>
                        <li>最新</li>
                        <li>有图片</li>
                    </ul>
                    <div className="user">
                        <div className="left">
                            <img className="like" src={this.state.baseImg+"details26.png"}/>
                            <p>18680*****@***</p>
                        </div>
                        <img className="star" src={this.state.baseImg+"details27.png"}/>
                    </div>
                    <p className="com">很不错，是华为的老粉了，一家人用华为已有6.7年了，上个月自己在实体店买了nova2s这个月又在商城给老公买了V10，正在体验中。</p>
                    <div className="pic">
                        <img src={this.state.baseImg+"details23.jpg"}/>
                        <img src={this.state.baseImg+"details24.jpg"}/>
                        <img src={this.state.baseImg+"details25.jpg"}/>
                        <img src={this.state.baseImg+"details28.jpg"}/>
                    </div>
                </div>
            </div>
            )
    }
}