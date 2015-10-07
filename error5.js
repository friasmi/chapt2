function getConnection(callback) {
    var connection;
    try {
        //Lets assume that connection failed
        throw new Error('connection failed');

        //Notify callback that connection failed
        callback(null, connection);
    }
    catch (error) {
        //Notify callback about error
        callback(error, null);
    }
}

//Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error: ', error.message);
    }
    else {
        console.log('Connection succeeded: ', connection);
    }
});