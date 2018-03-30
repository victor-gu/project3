import React from 'react'

export default class LunboComponent extends React.Component{
    
    render(){
        return(
            <div className="lunbo">
                <ul className="lunbo_img">
                    <li><img src="./src/static/img/lunbo1.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo2.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo3.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo4.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo5.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo6.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo7.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo8.jpg" alt=""/></li>
                    <li><img src="./src/static/img/lunbo1.jpg" alt=""/></li>

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