const db = require("../db");
const filter = require("../utils/filter");
module.exports = {
    register:(app) => {

        //根据用户id对订单进行查询
        app.get("/userOrder", filter, (req, res) => {
            let id = req.query.id;
            // let oid = db.mongodb.objectid(id);
            db.mongodb.select("order", {"user_id":id}).then((result) => {
                res.send({status:true, data:result});
            }) 
        })

        // 加入购物车
        app.get("/insertOrder", filter, (req, res) => {
            let params = req.query;
            db.mongodb.insert("order", params).then((result) => {
                res.send({status:true, data:result});
            }) 
        })

        // 查询所有订单信息
        app.get("/selectOrder",filter, (req, res) => {
            let page = req.query.page;
            let limit = req.query.limit;
            page1 = page ? (page-1)*limit : 0;
            limit1 = limit ? page*limit : 99999;
            db.mongodb.select("order", {}).then((data) => {
                res.send({status:true, count:data.length, data:data.slice(page1, limit1)});
            })
        })
    }
}