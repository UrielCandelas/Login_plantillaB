//Se importa app.js
import app from './app.js'
//Se importa la base de datos
import db from './db.js'

//Se inicializa la base de datos
db()
//Se declara el puerto a utilizar
const PORT = process.env.PORT
//Se inicializa el servidor
app.listen(PORT,()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
})