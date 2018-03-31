import React from 'react'
import './LunboComponent.css'

export default class LunboComponent extends React.Component{
    componentDidMount(){
        // console.log(this.refs.lbimg)
        var lbUL = this.refs.lbimg ; 
        var lbLI = lbUL.childNodes;
        var len = lbLI[0].offsetWidth;
        var left = lbUL.clientLeft ;
        console.log(left)
        var timer;
        var i = 0;
        timer = setInterval(function(){
            i++;
            left -= len;
            if (i>=9) {
                left = 0;
                i= 0 ;
            };
            lbUL.style.left = left
        console.log(lbUL.style.left)
        }, 1000)
        console.log(left)

    }
    componentWillMount(){
        // console.log(this.refs.lbimg)
        // var lbUL = this.refs.lbimg ; 
        // var lbLI = lbUL.childNodes;
        // var len = lbLI[0].offsetWidth;
        // var left = lbUL.offsetLeft ;
        // console.log(lbUL)
        // var timer;
        // var i = 0;
        // timer = setInterval(function(){
        //     i++;
        //     left -= len;
        //     if (i>=9) {
        //         left = 0;
        //         i= 0 ;
        //     };
        // }, 1000)
        // console.log(this.refs.lbimg)
    }
    render(){
        return(
            <div className="lunbo">
                <ul className="lunbo_ul" ref='lbimg'>
                    <li><img src="./src/static/img/lunbo1.jpg" /></li>
                    <li><img src="./src/static/img/lunbo2.jpg" /></li>
                    <li><img src="./src/static/img/lunbo3.jpg" /></li>
                    <li><img src="./src/static/img/lunbo4.jpg" /></li>
                    <li><img src="./src/static/img/lunbo5.jpg" /></li>
                    <li><img src="./src/static/img/lunbo6.jpg" /></li>
                    <li><img src="./src/static/img/lunbo7.jpg" /></li>
                    <li><img src="./src/static/img/lunbo8.jpg" /></li>
                    <li><img src="./src/static/img/lunbo1.jpg" /></li>
                </ul>
                <ul className="lunbo_banner">
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
                <div className="lunbo_btnRef lunbo_btn"></div>
                <div className="lunbo_btnRig lunbo_btn"></div>
            </div>
        )
    }
}