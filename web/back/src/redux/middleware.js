import http from '../utils/httpclient'
import * as constants from '../components/datagrid/datagridconstants'

export default function(api){
    return function(dispatch){
        //dispatch
        return function(action){
            let {type, types, url, data, method = 'get', name,pageDefault = 0} = action;
            // console.log(JSON.stringify(action));
            if(!url){
                //手动调用 reducer
               return dispatch(action)
            }

            dispatch({type: constants.Requesting})
           
            http[method](url, data).then((res) => {
                // console.log(res);
                if(res.status){
                    let _action = {
                        type: constants.Requested,
                        name,
                        result: res.data,
                        count:res.count,
                        pageDefault
                    }
                    dispatch(_action)
                }else{
                    // 路由跳转
                    // console.log(121212);
                    dispatch({
                        type:constants.RequestError,
                        error: res.error
                    });
                }
            }).catch((error) => {
                dispatch({type: constants.RequestError})
            })
        }
    }
}