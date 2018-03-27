import React from 'react'
export default class LunboComponent extends React.Component{
    render() {
  return (
    <div className="demo-1 small">
      <div className="block">
        <span className="demonstration">默认 Hover 指示器触发</span>
        <Carousel height="150px">
          {
            [1,2,3,4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </div>
      <div className="block">
        <span className="demonstration">Click 指示器触发</span>
        <Carousel trigger="click" height="150px">
          {
            [1,2,3,4].map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <h3>{item}</h3>
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