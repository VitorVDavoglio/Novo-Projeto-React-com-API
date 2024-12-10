import mysql from 'mysql';

const dbConfig = mysql.createPool({
	connectionLimit: 10,
	host: 'XXX.XXX.XXX.XX',
    user: 'XXXXXXXXX',
    password: 'XXXXXXXXXXXXX',
    database: 'XXXXXXXX'
});

export { dbConfig };