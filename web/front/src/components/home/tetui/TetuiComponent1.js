import React from 'react'
import {Link} from 'react-router'

export default class TetuiComponent1 extends React.Component{
    render(){
        return(
            <div className="tlist">
                    <div className="tlist_header">
                        <Link to="/">
                            <img src="../../../../src/components/home/img/OPR1.jpg"/>
                        </Link>
                    </div>
                <div className="tlistnav">
                    <img src="../../../../src/components/home/img/OPR2.jpg" />
                    <img src="../../../../src/components/home/img/OPR3.jpg" />
                    <img src="../../../../src/components/home/img/OPR4.jpg" />

                </div>
            </div>
        )
    }
}