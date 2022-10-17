import mysql from "mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection,
    // handleDisconnect
};


// connection.connection.hub.disconnected(function() {
//     setTimeout(function() {
//         $.connection.hub.start();
//     }, 5000); // Restart connection after 5 seconds.
//  });
