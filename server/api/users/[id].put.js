import sqlite3 from "sqlite3";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const res = await new Promise((resolve, reject) => {
        const db = new sqlite3.Database('database/db.sqlite'); 
        db.run('UPDATE users SET username = ? , password = ? , role = ? WHERE id = ?', [body.username, body.password, body.role, event.context.params.id], (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve('Updated');
            }
        }
        );
    });    
    return res; 
}
);
