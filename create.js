const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('PlayerInfo.db');

let schema = `
create table team(
  id integer primary key autoincrement,
  name text not null,
  twitter text
);
`

db.serialize( () => {
	db.run( schema, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "テーブルを作成しました" );
	});
});
