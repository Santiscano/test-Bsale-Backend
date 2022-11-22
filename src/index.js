import app from './app.js'
// import { handleDisconnect } from './database/database'


const main = () =>{
    app.listen(app.get('port'));
    console.log(`listening on port ${app.get('port')}`);
};
app.on('error',(err) =>{
    console.log('Error:',err);
    // if(err.code === 'PROTOCOL_CONNECTION_LOST') {   
    //     handleDisconnect();                         
    // } else {                                      
    //     throw err;                                  
    // }
})

main();