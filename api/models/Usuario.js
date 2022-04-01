const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Usuario = mongoose.model('Usuario', new Schema({
    nombre : String,
    password: String,
    celular: String,
    correo: String,
    sector: String,
    fechNacimiento: Date,
    rol: {type: String, default: 'usuario'}, //admin , emprendedor    
    estado: {type: String, default: '1'},
}))

module.exports = Usuario