const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('PlayerInfo.db');

let sql = `
drop table team;
`

db.serialize( () => {
  db.run( sql, (error, row) => {
    if(error) {
      console.log('Error: ', error );
      return;
    }
    console.log( "テーブルを削除しました" );
  });
});