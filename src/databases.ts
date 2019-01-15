import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.databse);

pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB in connect');
});

export default pool;