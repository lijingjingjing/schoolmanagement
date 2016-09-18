var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.html');
});

router.post('/login', function (req, res, next) {
    var n = req.body.name;
    var pw = req.body.password;
    var tp = req.body.type;

    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('schoolmanagement.db');

     var handle = function(stmt){
         stmt.get(function(error,row){
             if(typeof(row) == "undefined"){
                 res.status(400);
                 res.send("error");
             }else{
                 res.send({
                     'id': row['id'],
                     'login_name': row['login_name']
                 });
             }
         });
     };

    db.serialize(function () {
        if(tp == "student"){
            var stmt = db.prepare("SELECT * FROM students WHERE login_name=? AND password=?",n,pw);
            handle(stmt);
        }else{
            var stmt = db.prepare("SELECT * FROM teachers WHERE login_name=? AND password=?",n,pw);
            handle(stmt);
        }

        stmt.finalize();
    });

});

module.exports = router;
