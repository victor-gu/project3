const db = require("../db");
const filter = require("../utils/filter");

module.exports = {
    register:(app) => {
        
        // 商品的模糊查询，可以传一个title，不传title代表查询所有，也可以传page和limit来进行分页查询
        app.get("/backproducts", filter, (req, res) => {
            let title = req.query.title;
            let page = req.query.page;
            let limit = req.query.limit;
            page1 = page ? (page-1)*limit : 0;
            limit1 = limit ? page*limit : 99999;
            let pramas = new RegExp(title);
            db.mongodb.select("products",{$or:[{title:pramas},{name:pramas},{category:pramas}]}).then((data) => {
                res.send({status:true, count:data.length, data:data.slice(page1, limit1)});
            })
        })

        // 查找所有管理员信息,及分页
        app.get("/backAdmin", filter, (req, res) => {
            let page = req.query.page;
            let limit = req.query.limit;
            page1 = page ? (page-1)*limit : 0;
            limit1 = limit ? page*limit : 99999;
            db.mongodb.select("admin",{}).then((data) => {
                res.send({status:true, count:data.length, data:data.slice(page1, limit1)});
            })
        })

        // 查找所有用户信息,及分页
        app.get("/backUsers", filter, (req, res) => {
            let page = req.query.page;
            let limit = req.query.limit;
            page1 = page ? (page-1)*limit : 0;
            limit1 = limit ? page*limit : 99999;
            db.mongodb.select("users",{}).then((data) => {
                res.send({status:true, count:data.length, data:data.slice(page1, limit1)});
            })
        })


        // 商品的价格范围查询, 可以传一个start代表价格大于start的商品，可以传一个end代表价格小于end的商品，传入end和start代表价格在start和end之间，不传参数代表查询所有
        app.get("/rangeproducts", filter, (req, res) => {
            let start = req.query.start;
            let end = req.query.end;
            if(start == undefined && end == undefined){
                start = "0";
                end = "999999999999";
            }  else
            if(start == undefined){
                start = "0";
            }
            if(end == undefined){
                end = "999999999999";
            }
            db.mongodb.select("products",{price:{$gte: start, $lte: end}}).then((data) => {
                res.send({status:true, count:data.length, data:data});
            })
        })

        // 添加商品路由
        app.get("/backAddproduct", filter, (req, res) => {
            let pramas = req.query;
            let objMarge = Object.assign({name:"荣耀V10", title:"荣耀V10 全网通高配版 6GB+64GB（魅丽红）", price:"2099", Oprice:"2199", img:"11.jpg", number:24, category:"荣耀手机", hot:""}, pramas);
            db.mongodb.insert("products", objMarge).then((result) => {
                res.send({status:true});
            })
        })

        // 删除商品路由
        app.get("/backDelproduct", filter, (req, res) => {
            let id = req.query.id;
            let oid = db.mongodb.objectid(id);
            db.mongodb.delete("products", {"_id":oid}).then((result) => {
                res.send({status:true, data:result});
            })  
        })

        // 更新商品路由
        app.get("/backUpdproduct", filter, (req, res) => {
            let id = req.query._id;
            let name = req.query.name;
            let title = req.query.title;
            let price = req.query.price;
            let Oprice = req.query.Oprice;
            let img = req.query.img;
            let number = req.query.number;
            let category = req.query.category;
            let hot = req.query.hot;
            let oid = db.mongodb.objectid(id);
            db.mongodb.update("products", oid, {name, title, price, Oprice, img, number, category, hot}).then((result) => {
                res.send({status:true, data:result});
            })  
        })
    }
}