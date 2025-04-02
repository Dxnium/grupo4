const sql = require("mssql");

const config = {
    user: "ShopEasyUser", // Change to your actual DB username
    password: "YourStrongP@ssword!", // Ensure this matches your SQL user password
    server: "localhost\MSSQLSERVER01", // Try removing \MSSQLSERVER01 if using the default instance
    database: "ShopEasyDB",
    options: {
        encrypt: false,
        enableArithAbort: true,
        trustServerCertificate: true, // Required for self-signed certificates
    },
    port: 1433, // Default SQL Server port
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log("✅ Database connected successfully!");
    } catch (err) {
        console.error("❌ Database connection failed:", err);
    }
}

module.exports = { connectDB, sql };