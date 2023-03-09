'use strict'
const Users = require('../Models/Users');

class UsersControllers{
    constructor(){
        Object.preventExtensions(this);
    }
    getAll = async(req, resp) => {
        let data;

        await Users.fetch((callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }
    /* getOne = async (req, resp) =>{
        let data;
        let {Correo, Password } = req.body;
        let users = {
            Correo:Correo,
            Password:Password
        };

        await Users.fetchOne(users,(callback)=>{
            data = callback;
            resp.status(200).json(data);
        });
    }*/

   insert = async (req, resp) => {
        console.log(req.body.nombre);
        let{ id_usuario, nombre, apellido_p, apellido_m, email, password, id_tipo_usuario } = req.body;
        let users = {
            id_usuario:id_usuario,
            nombre:nombre,
            apellido_p:apellido_p,
            apellido_m:apellido_m,
            email:email,
            password:password,
            id_tipo_usuario:id_tipo_usuario
        };
        
        let data = await Users.insert(users, (callback)=>{
            resp.status(200).json(callback);
        });
        return;
    }

    update = async(req, resp) =>{
        let { id_usuario, nombre, apellido_p, apellido_m, email, password, id_tipo_usuario } = req.body;
        let users = {
            id_usuario:id_usuario,
            nombre:nombre,
            apellido_p:apellido_p,
            apellido_m:apellido_m,
            email:email,
            password:password,
            id_tipo_usuario:id_tipo_usuario
        };
        let data = await Users.update(users, (callback)=>{
            resp.status(200).json(callback);
        });
        return;
    }

    delete = async(req, resp) => {
        let {id_usuario} = req.body;
        let users = {
            id_usuario: id_usuario
        }
        let data = await Users.delete(users, (callback)=>{
            resp.status(200).json(callback);
        });
        return;
    }
}

module.exports = UsersControllers;