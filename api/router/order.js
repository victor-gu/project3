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


        app.get("/insertOrder", filter, (req, res) => {
            let params = req.query;
            db.mongodb.insert("order", params).then((result) => {
                res.send({status:true, data:result});
            }) 
        })
        
    }
}