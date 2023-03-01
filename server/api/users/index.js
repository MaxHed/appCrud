import sqlite3  from "sqlite3";
// import createdb from database/createdb.sql


let createDbSql ='CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL, role TEXT NOT NULL)'



export default defineEventHandler(async () => {
    const db = new sqlite3.Database('database/db.sqlite');
    await new Promise((resolve, reject) => {
        db.run(createDbSql, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
                console.log('Database created');
            }

        }
        );
        
    });
    const result = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
    return result;
}
);