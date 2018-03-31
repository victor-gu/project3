import React from 'react'

import './carousel.css'
export default class CarouselComponent extends React.Component{
    componentDidMount(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                autoplay:2000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable:true, 
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplayDisableOnInteraction:false,
            }) 
    }
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="./src/static/img/lunbo1.jpg"  /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo2.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo3.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo4.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo5.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo6.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo7.jpg" /></div>
                    <div className="swiper-slide"><img src="./src/static/img/lunbo8.jpg" /></div>
                </div>
                <div className="swiper-pagination"></div>

            </div>
        )
    }
}