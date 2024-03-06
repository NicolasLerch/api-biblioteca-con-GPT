const User = require("../models/userModel");

const userController = {
    getAllUsers : async (req, res) => {
        try{
            const users = await User.find();
            res.status(200).json(users);
        }
        catch(error){
            res.status(500).json({error: "Error al obtener la lista de usuarios"});
        }
    },
    createUser: async (req, res) => {
        try{
            const newUser = await User.create(req.body);
            await newUser.save();
            res.status(201).json(newUser);
        }
        catch(error){
            res.status(500).json({error: "Error al crear el usuario"});
        }
    },
    getUserById: async function (req, res) {
        try{
            const user = await User.findById(req.params.id);
            if(!user){
                return res.status(404).json({error: "Usuario no encontrado"});
            }
            res.status(200).json(user);
        }
        catch(error){
            res.status(500).json({error: "Error al obtener el usuario"});
        }
    },
    updateUser: async (req, res) => {
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if(!user){
                return res.status(404).json({error: "Usuario no encontrado"});
            }
            res.status(200).json(user);
        }
        catch(error){
            res.status(500).json({error: "Error al actualizar el usuario"});
        }
    },
    deleteUser: async (req, res) => {
        try{
            const userId = req.params.id;
            const userRemoved = await User.findByIdAndDelete(userId);
            res.status(200).json({"mensaje":"Usuario eliminado: ", "usuario":userRemoved});
        } catch(error){
            res.status(500).json({error: "Error al eliminar el usuario"});
        }

        
    }
}


module.exports = userController;