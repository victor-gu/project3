import React from "react";
import "./PictureComponent.scss";


export default class CartComponent extends React.Component{


    state = {
        baseImg:"./src/static/img/"
    }
    render(){
        return (
            <div>
                <div className="picture">
                    <img src={this.state.baseImg+"details1.jpg"}/>
                    <img src={this.state.baseImg+"details2.jpg"}/>
                    <img src={this.state.baseImg+"details3.jpg"}/>
                    <img src={this.state.baseImg+"details4.jpg"}/>
                    <img src={this.state.baseImg+"details5.jpg"}/>
                    <img src={this.state.baseImg+"details6.jpg"}/>
                    <img src={this.state.baseImg+"details7.jpg"}/>
                    <img src={this.state.baseImg+"details8.jpg"}/>
                    <img src={this.state.baseImg+"details9.jpg"}/>
                    <img src={this.state.baseImg+"details10.jpg"}/>
                    <img src={this.state.baseImg+"details11.jpg"}/>
                    <img src={this.state.baseImg+"details12.jpg"}/>
                    <img src={this.state.baseImg+"details13.jpg"}/>
                    <img src={this.state.baseImg+"details14.jpg"}/>
                    <img src={this.state.baseImg+"details15.jpg"}/>
                    <img src={this.state.baseImg+"details16.jpg"}/>
                    <img src={this.state.baseImg+"details17.jpg"}/>
                    <img src={this.state.baseImg+"details18.jpg"}/>
                    <img src={this.state.baseImg+"details19.jpg"}/>
                    <img src={this.state.baseImg+"details20.jpg"}/>
                    <img src={this.state.baseImg+"details21.jpg"}/>
                    <img src={this.state.baseImg+"details22.jpg"}/>
                </div>
                <div className="des">
                    <p className="one">特别提醒：</p>
                    <p className="two">※以上页面中的产品图片及屏幕内容仅作示意，实物产品效果（包括但不限于外观、颜色、尺寸）和屏幕显示内容（包括但不限于背景、UI、配图）可能略有差异，请以实物为准。</p>
                    <p className="three">※以上页面中的数据为理论值，均来自<span>华为内部实验室</span>，于特定测试环境下所得（请见各项具体说明），实际使用中可能因产品个体差异、软件版本、使用条件和环境因素不同略有不同，请以实际使用的情况为准。</p>
                    <p className="four">※为提供尽可能准确的产品信息、规格参数、产品特性，<span>华为或荣耀</span>可能实时调整和修订以上页面中的文字表述、图片效果等内容，以求与实际产品性能、规格、指数、零部件等信息相匹配，由于产品批次和生产供应因素实时变化，如遇确有进行上述修改和调整必要的情形，恕不专门通知。</p>
                </div>
            </div>
            )
    }
}