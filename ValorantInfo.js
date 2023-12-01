const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('PlayerInfo.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render('toppage');
});

app.get("/team", (req, res) => {
    db.serialize( () => {
        db.all("select name,id from team;", (error, row) => {
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
    db.all("select player.id as playerid,team.name as teamname,player.name as playername from player inner join team on player.team = team.id where team.id = " +req.params.id +";", (error,row)=>{
      if(error){
        res.render('show',{mes:"エラーです"});
      }
      res.render('team',{data:row});
    });
  })
})

app.get("/player", (req, res) => {
    db.serialize( () => {
        db.all("select id,name from player;", (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            res.render('playerdb', {data:row});
        })
    })
})

app.get("/player/:id",(req,res)=>{
  console.log(req.params.id);
  db.serialize(()=>{
    //その選手の詳細表示用ページ
    db.all("select player.twitter as playertwitter,link,team.id as teamid,player.name as playername,team.name as teamname,post.name as postname from player inner join team on player.team = team.id inner join post on player.post = post.id where player.id=" +req.params.id +";", (error,row)=>{
      if(error){
        res.render('show',{mes:"エラーです"});
      }
      res.render('player',{data:row});
    });
  })
})
app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));