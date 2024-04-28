// importamps el modelo 
import Citas from "../models/Citas.js";

// metodos o funciones CRUD

export const getAllCitas = async (req, res) =>{
    try {
        
        const citas  = await Citas.findAll();
        res.json(citas);

    } catch (error) {
        res.json({ msg: error.message})
        
    }
}

// funcion o metdood para mostrar una cita 

export const getCitas = async (req,res) =>{
    try {
        const citas = await Citas.findAll({
            where: {id: req.params.id}
        });
        res.json(citas[0]);
        
    } catch (error) {
        res.json({ msg: error.message})
        
    }
}
// funcion o metdood para agregar una cita
export const agregarCitas = async (req,res) =>{
    try {
        await Citas.create(req.body);
        res.json ({ msg: "se agrego una cita"})
        
    } catch (error) {
        res.json({ msg: error.message})
        
    }
} 

// funtcion modificar cita

export const modificarCitas = async(req,res) =>{
    try {
        await Citas.update(req.body, {
            where:{id: req.params.id}
        })
        res.json({msg: " se modifico una cita"})
    } catch (error) {
        res.json({ msg: error.message})
        
    }
}

// funtcion eliminar cita
export const eliminarCitas = async(req,res) =>{
    try {
        await Citas.destroy({
            where:{ id: req.params.id}
        })
        res.json({msg: " se elimino una cita"})
    } catch (error) {
        res.json({ msg: error.message})
        
    }
}
