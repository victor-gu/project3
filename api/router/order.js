const db = require("../db");
const filter = require("../utils/filter");
module.exports = {
    register:(app) => {

        //插入商品路由
        app.get("/insgenerateorder", filter, (req, res) => {
            let pramas = req.query;
            console.log(pramas);
            db.mongodb.insert("order", pramas).then((result) => {
                res.send({status:true, data:result});
            })
        })


        // 删除商品路由
        app.get("/delgenerateorder", filter, (req, res) => {
            let id = req.query.id;
            let oid = db.mongodb.objectid(id);
            db.mongodb.delete("order", {"_id":oid}).then((result) => {
                res.send({status:true, data:result});
            })  
        })


        // 查找所有商品,及分页
        app.get("/selgenerateorder", filter, (req, res) => {
            let page = req.query.page;
            let limit = req.query.limit;
            page1 = page ? (page-1)*limit : 0;
            limit1 = limit ? page*limit : 99999;
            db.mongodb.select("order",{}).then((data) => {
                res.send({status:true, count:data.length, data:data.slice(page1, limit1)});
            })
        })
    }
}