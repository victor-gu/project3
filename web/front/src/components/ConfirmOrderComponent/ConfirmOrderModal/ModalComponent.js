import React, {Component} from 'react'

import './ModalComponent.css'

class ModalComponent extends Component{
    // componentWillMount(){
    //     if(this.props.config.type == 'datagrid'){
    //         this.props.getDatasource(this.props.config);

    //     }
    // }
    render(){
        // 默认要加载的内容为空
        let content = null;

        //动态加载指定的内容，注意HTMl结构里面不能进行逻辑运算
        if(this.props.config.type == 'datagrid'){
            content = <DatagridComponent  config={this.props.config}/>
            
        }else{
            content = <p>modal content</p>
        }

        let html = (
            <div className="Marco-modal">
                <div className="Marco-modalBody">
                    <div className="Marco-modalHeader">
                        <h5>Modal Header</h5>
                        <span className="Marco-modalClose">&times;</span>
                    </div>
                    <div className="Marco-modalMain">

                       {content}

                    </div>

                    <div className="Marco-modalBtn">
                        <button className="btn btnSecondary">取消</button>
                        <button className="btn btnPrimary">保存</button>
                    </div>
                </div>
                <div className="Marco-modalShade"></div>
            </div>
        )
        return this.props.show ? html : null;
    }
}

export default ModalComponent;
