import React from 'react'
import ReactDOM from "react-dom"
import { Carousel } from 'element-react';


export default class LunboComponent extends React.Component{
    componentDidMount(){
        
    }
    render() {

    return (
        <div className="demo-1 small">
          <div className="block">
            <Carousel trigger="click" height="5.333333rem" arrow="always">
              {
                this.props.config.map((item, index) => {
                  return (
                    <Carousel.Item key={index}>
                        <img src={item}/>
                    </Carousel.Item>
                  )
                })
              }
            </Carousel>
          </div>
        </div>
  )
}
}