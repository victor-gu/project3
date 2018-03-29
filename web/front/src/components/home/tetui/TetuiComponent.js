import React from 'react'

export default class TetuiComponent extends React.Component{
    render(){
        return (
           <div>
                <ul>
                    <li>
                        <div className="tetui_1">
                            <img src="../../../src/components/home/img/c1.jpg"/>
                        </div>
                    </li>
                    <li>
                        <div className="tetui_2">
                            <img src="../../../src/components/home/img/c2.jpg"/>    
                        </div>
                        <div className="tetui_2">

                            <img src="../../../src/components/home/img/c3.jpg"/>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <div className="tetui_2">
                            <img src="../../../src/components/home/img/c4.jpg"/>    
                        </div>
                        <div className="tetui_2">

                            <img src="../../../src/components/home/img/c5.jpg"/>
                        </div>
                    </li>
                    <li>
                        <div className="tetui_2">
                            <img src="../../../src/components/home/img/c6.jpg"/>    
                        </div>
                        <div className="tetui_2">

                            <img src="../../../src/components/home/img/c7.jpg"/>
                        </div>
                    </li>
                </ul>
           </div>
        )
    }

}