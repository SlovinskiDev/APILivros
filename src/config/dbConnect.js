import mongoose from "mongoose";

mongoose.connect("mongodb+srv://svk:xpto75yi@alura.3ikxzyn.mongodb.net/alura-node?");

let db = mongoose.connection;

export default db;