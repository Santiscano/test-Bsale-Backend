
import app from './app.js';


const main = () =>{
    app.listen(app.get('port'));
    console.log(`listening on port ${app.get('port')}`);
};
app.on('error',(err) =>{
    console.log('Error:',err);
})

main();