import React from 'react'

export default class JxComponent extends React.Component{
    render(){
        var a = 28;
        return (
            <div className="Jxproduct">
                <ul>
                    {
                        this.props.jingxuan.map((item,index)=>{
                            a--;
                            if(a>=0){
                                if (item.hot=="hot") {
                                    return (
                                        <li key={item._id}>
                                            <p className="imgp">
                                                <img src="./src/components/home/img/1495546164782.jpg" />
                                            </p>
                                            
                                            <h6>{item.name}</h6>
                                            <p className="Jxp">{item.title}</p>
                                            <p className="money"><span>￥</span><span>{item.price}</span></p>
                                        </li> 
                                    )
                                }
                                
                            }
                        })
                    } 
                </ul>
            </div>
        )
    }

}