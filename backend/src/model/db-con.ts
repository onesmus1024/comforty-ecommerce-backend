import { Connection } from 'tedious';
import config from '../config/db-config.js';
import { Request,TYPES, } from 'tedious';
const connection = new Connection(config);

connection.on('connect', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
       
    }
}
);



// connection.connect();
export default connection;

