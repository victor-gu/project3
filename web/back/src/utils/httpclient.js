import http from 'superagent'
const baseUrl = "http://10.3.136.81:8080"

export default {
    // socket(_wsurl){
    //  var url = _wsurl && _wsurl.startsWith('ws') ? _wsurl : `${base_wsurl}/${_wsurl}`;
    //  var ws = new WebSocket(url);
    //  return ws;
    // },
    get(_url, _params){
        // console.log(_params)
        var url = _url && _url.startsWith('http') ? _url : `${baseUrl}/${_url}`;
        return new Promise((resolve, reject) => {
            http
            .get(url)
            .query(_params || {})
            .set('Authorization', window.sessionStorage.getItem('lxtoken'))
            .end((error,res)=>{
                // console.log(res.body)
                if(error){
                    reject(error)
                }else{
                    resolve(res.body)
                }
            })
        })
    },
    post(_url, _params){
        var url = _url && _url.startsWith('http') ? _url : `${baseUrl}/${_url}`;
        return new Promise((resolve, reject) => {
            http
            .post(url)
            .send(_params || {},)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set("Authorization", window.sessionStorage.getItem('lxtoken'))
            .end((error,res)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(res.body)
                }
            })
        })
    }
}