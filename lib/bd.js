import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'patodonal26',
    database: 'bd_g4_arq',
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("No se pudo conectar a la base de datos: ", err);
        return;
    }
    console.log("Conexión a la base de datos establecida");
    connection.release();
});


export default pool;