require('dotenv').config()
const mysql = require('mysql2')
const dotenv = require('dotenv')

const pool = mysql.createPool({
    host: process.env.MYSQL_URI,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


const locations = async () => {
    try {
        const [data] = await pool.execute(`SELECT lati,longi from  rescue_teams`)
        if (data.length > 0) return data
        else return null
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {
    locations
}