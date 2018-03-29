import React, {Component} from 'react'

export default class SpinnerComponent extends Component {
    render(){
        let html = (
            <div>
                <div className="box-img">
                    <img src={'./src/components/sort/imgs/hot-1.jpg'}/>
                    <img src={'./src/components/sort/imgs/hot-2.jpg'}/>
                </div>
                <div className="side-bannar">
                    <div className="right-bannar">
                        <ul>
                            <li><img src={'./src/components/sort/imgs/bannar1.jpg'}/></li>
                            <li><img src={'./src/components/sort/imgs/bannar2.jpg'}/></li>
                            <li><img src={'./src/components/sort/imgs/bannar3.jpg'}/></li>
                            <li><img src={'./src/components/sort/imgs/bannar4.jpg'}/></li>
                            <li><img src={'./src/components/sort/imgs/bannar5.jpg'}/></li>
                        </ul>
                    </div>
                </div>
             </div>
        )

        return this.props.hot ? html : null;
    }
}