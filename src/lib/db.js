// db.js
import mysql from 'mysql';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'edes', 
  password: '4100',
  database: 'Prueba_borrar'
});

export async function query(q, values=[]) {
  return new Promise((resolve, reject) => {
    pool.query(q, values, (err, results) => {
      if (err) reject(err)
      else resolve(results)
    })
  });
}