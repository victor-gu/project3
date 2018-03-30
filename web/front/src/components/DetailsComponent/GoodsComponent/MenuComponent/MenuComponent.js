import React from "react";
import "./MenuComponent.scss";

export default class MenuComponent extends React.Component{
    state = {
        baseImg:"./src/static/img/"
    }
    render(){
        var html = <div className="Menu">
                    <div className="top">
                        <p>选择</p>
                        <i onClick={this.props.hide}>&times;</i>
                    </div>
                    <ul className="center">
                        <li>
                            <img src={this.state.baseImg+"details30.jpg"}/>
                            <div className="title">
                                <p className="one">天际通 1GB全球上网流量</p>
                                <p className="two">天际通 1GB全球上网流量</p>
                            </div>
                        </li>
                    </ul>
                    <div className="bottom" onClick={this.props.hide}>确认</div>
                    </div>
        return this.props.show ? html : null;
    }
}