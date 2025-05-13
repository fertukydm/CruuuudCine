
import { Schema, model } from "mongoose";

const EmpleadosSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },

    correo: {
      type: String,
    },

    telefono: {
      type: String,
      require: true,
    },

    direccion: {
      type: String,
    },

    puesto: {
      type: String,
    },

    contra:{
        type:String,
        require: true,
    },

    fecha_contratacion: {
      type: String,
      require: true,
    },
    salario: {
      type: Number,
    },

    activo: {
      type: Boolean,
      require: true,
    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Empleados", EmpleadosSchema);