//Se importa mongoose
import mongoose from "mongoose";
//Se crea un esquema de usuario que tiene un correo electronico, nombre y contraseña
const userSchema = new mongoose.Schema(
  {
    //Se crea el nombre que debe de ser un string requerido y sin espacios adelante y atras
    name: {
      type: String,
      required: true,
      trim: true,
    },
    //Se crea un email que debe de ser string que debe que de ser requerido sin espacios y unico
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    //Se crea el nombre que debe de ser un string requerido y sin espacios
    password: {
      type: String,
      required: true,
    },
  },
  {
    //Se coloca cuando se creo el usuario
    timestamps: true,
  }
);

//Se exporta el esquema de usuario
export default mongoose.model("User", userSchema);
