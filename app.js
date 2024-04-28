//imports express
import express from 'express'

import cors from 'cors'
//imporamos la conexion a la base de datos
import conectarBD from './configDB/db.js';
// importamos nuestras rtas
import citasRouters from './routers/Routers_Citas.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use('/citas', citasRouters);




try {
    await conectarBD.authenticate();
    console.log('conexion a la base de datos satisfactoria');
    } catch (error) {
    console.error('erro de conexion al conectar la basedatos:', error);
    } 


app.get('/', ( req, res) =>{
    res.send('HOLA MUNDO');
});

app.listen(5000, ()=>{
    console.log('El servidor esta conectado http://localhost:5000/')
});