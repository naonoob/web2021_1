const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('PlayerInfo.db');

let sql2 = [
  `insert into player ("name","twitter","link","team","post") values ("Laz","https://twitter.com/lazvell","https://lazvell.com/","3","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Dep","https://twitter.com/Dep_ow","https://www.twitch.tv/dep_ow","3","1");`,
  `insert into player ("name","twitter","link","team","post") values ("SugarZ3ro","https://twitter.com/SugarZ3roVL","https://www.twitch.tv/sugarz3ro","3","1");`,
  `insert into player ("name","twitter","link","team","post") values ("hiroronn","https://twitter.com/hiroronnsann","https://www.twitch.tv/hiroronnsann","3","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Yuran","https://twitter.com/YURANjp","https://www.twitch.tv/yuran_jp","3","1");`,
  `insert into player ("name","twitter","link","team","post") values ("neth","https://twitter.com/neth_vz","https://www.twitch.tv/neth3","4","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Meiy","https://twitter.com/meiyfps","https://www.twitch.tv/meiy_vl","4","1");`,
  `insert into player ("name","twitter","link","team","post") values ("POPOGACHI","https://twitter.com/popoG_C","https://www.twitch.tv/popogachi7","4","1");`,
  `insert into player ("name","twitter","link","team","post") values ("makiba","https://twitter.com/makibacs","https://www.twitch.tv/makiba7","4","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Yoshiii","https://twitter.com/YoshiiVLR","https://www.twitch.tv/yoshivlr","5","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Allen","https://twitter.com/Allen_vlr","https://www.twitch.tv/allen_vlr","5","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Lumo","https://twitter.com/lumoxgod","https://www.twitch.tv/lumo1337","5","1");`,
  `insert into player ("name","twitter","link","team","post") values ("MrTenzouEz","https://twitter.com/metenzou","http://www.youtube.com/@mrtenzouez2501","5","1");`,
  `insert into player ("name","twitter","link","team","post") values ("Tempura","https://twitter.com/Tempura55","https://www.twitch.tv/tempurafps","5","1");`
  ]

for( let sql of sql2 ) {
db.serialize( () => {
  db.run( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "データを追加しました" );
  });
});
};