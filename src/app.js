//Se importa las variables del entorno
import 'dotenv/config'

//Se importan los modulos del sistema
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
//Se importan los modulos del sistema
import authRoutes from './routes/auth.routes.js'

//Se crea una constante de express
const app = express()

//Se usan los modulos que importamos
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())

//Se usan los modulos de la app
app.use('/api',authRoutes)

//Se exporta la constante
export default app
