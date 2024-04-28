import express from 'express';
// importamos nuestro controlador
import {getAllCitas, getCitas, agregarCitas, modificarCitas, eliminarCitas} from '../controllers/CitasControllers.js'

const router = express.Router();

// rutas de los metodos CRUD
router.get('/', getAllCitas);
router.get('/:id', getCitas);
router.post('/', agregarCitas);
router.put('/:id', modificarCitas);
router.delete('/:id', eliminarCitas);


export default router; 