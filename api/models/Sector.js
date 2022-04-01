const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sector = mongoose.model('Sector', new Schema({
    nombre : String,    
    estado: {type: String, default: '1'},
}))

module.exports = Usuario