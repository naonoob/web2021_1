const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('PlayerInfo.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/team", (req, res) => {
    db.serialize( () => {
        db.all("select name from team;", (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            res.render('teamdb', {data:row});
        })
    })
})

app.get("/team/:id",(req,res)=>{
  console.log(req.params.id);
  db.serialize(()=>{
    //そのチームに所属している選手、コーチ一覧をDBからソートするSQL文
    db.all("select  from example where id=" +req.params.id +";", (error,row)=>{
      if(error){
        res.render('show',{mes:"エラーです"});
      }
      res.render('team',{data:row});
    });
  })
})

app.get("/player", (req, res) => {
    db.serialize( () => {
        db.all("select name from player;", (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            res.render('playerdb', {data:row});
        })
    })
})

app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));