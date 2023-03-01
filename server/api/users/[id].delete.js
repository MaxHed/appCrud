import sqlite3  from "sqlite3";
const db = new sqlite3.Database('database/db.sqlite');

export default defineEventHandler(async (event) => {
    const res = await new Promise((resolve, reject) => {
                // delete where id = event.node.params.id
                db.run('DELETE FROM users WHERE id = ?', [event.context.params.id], (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve('Deleted');
                    }
                });
            });
    return res;
}

);

