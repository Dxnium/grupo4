import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'patodonal26', 
    database: 'bd_g4_arq',
});

const checkConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Conexión a la base de datos establecida");
        connection.release();
    } catch (err) {
        console.error("No se pudo conectar a la base de datos: ", err);
    }
};

checkConnection();

export default pool;