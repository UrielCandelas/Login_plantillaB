//Se importa mongoose
import mongoose from 'mongoose';

//Se declara la URL de la base de datos
const URI = process.env.MONGO_URI
//Se crea la conexion a la base de datos
const db = async()=>{
    try {
        await mongoose.connect(URI)
        console.log(`>> Conexion exitosa a la base de datos`)
    } catch (error) {
        console.error(error.message);
    }
}
//Se exporta la constante db
export default db