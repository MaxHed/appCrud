import sqlite3 from "sqlite3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const res = await new Promise((resolve, reject) => {
        const db = new sqlite3.Database('database/db.sqlite'); 
        db.run('INSERT INTO users (username, password, role) VALUES (?,?,?)', [ body.username , body.password, body.role ] , (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('Inserted');
            }
        }
        );
    });    
    return res; 
}
);
