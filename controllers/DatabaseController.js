import sqlite3 from 'sqlite3';

let db;

try {
	db = new sqlite3.Database('database.sqlite3', (error) => {
		console.log('CONNECTED TO DB');
	})
} catch (error) {
	console.log(error);
}

export default db;