import sqlite3 from "sqlite3";

export default defineEventHandler(async (event) => {
    const db = new sqlite3.Database('database/db.sqlite');
    const result = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM users Where users.id = ' + event.context.params.id, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return result;
}
);