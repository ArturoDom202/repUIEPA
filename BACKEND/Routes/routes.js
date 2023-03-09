'use strict'
const express = require('express');
//const upload = require('../Controllers/upload');
//const uploadimg = require('../Controllers/uploadimg');

class Router {
    #router;
   // #contentController;
    #usersController;
    //#homeController
    //#categoryController;

    constructor() {
        this.#router = express.Router();
        Object.preventExtensions(this);
    }
    attachControllers = async(usersController) =>{
        this.#usersController = usersController;
    }
    prepareRouting = async() => {
        this.#router.get('/users' , this.#usersController.getAll);
        this.#router.post('/users' , this.#usersController.insert);
        this.#router.patch('/users' , this.#usersController.update);
        this.#router.delete('/users' , this.#usersController.delete);
    }

    getRouter = () => {
        return this.#router;
    }
}
module.exports = Router;