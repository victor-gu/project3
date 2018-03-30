import React from 'react'
import {Link} from 'react-router'

export default class ContentNavComponent1 extends React.Component{
    render(){
        return(
            <div className="cnav">
                    <div className="cnav_header">
                        <Link to="/">
                            <img src="./src/static/img//cnav_h.jpg"/>
                        </Link>
                    </div>
                <div className="cnav">
                    <img src="./src/static/img/cnav_h2.jpg" />
                </div>
            </div>
        )
    }
}