import React from 'react'
import {Link} from 'react-router'

export default class TetuiComponent extends React.Component{
    render(){
        return (
           <div>
                <ul>
                    <li>
                        <Link to="/tetui">
                            <div className="tetui_1">
                                <img src="../../../src/components/home/img/c1.jpg"/>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/tetui">
                            <div className="tetui_2">
                                <img src="../../../src/components/home/img/c2.jpg"/>    
                            </div>
                        </Link>
                        <Link to="/tetui">
                            <div className="tetui_2">
                                <img src="../../../src/components/home/img/c3.jpg"/>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/tetui">
                            <div className="tetui_2">
                                <img src="../../../src/components/home/img/c4.jpg"/>    
                            </div>
                        </Link>

                        <Link to="/tetui">
                            <div className="tetui_2">
                                <img src="../../../src/components/home/img/c5.jpg"/>
                            </div>
                        </Link>
                    </li>
                    <li>
                         <Link to="/tetui">
                        <div className="tetui_2">
                            <img src="../../../src/components/home/img/c6.jpg"/>    
                        </div>
                        </Link>

                         <Link to="/tetui">
                            <div className="tetui_2">
                                <img src="../../../src/components/home/img/c7.jpg"/>
                            </div>
                        </Link>
                    </li>
                </ul>
           </div>
        )
    }

}