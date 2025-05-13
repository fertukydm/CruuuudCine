//nombre, correo, telefono, direccion, activo

import { Schema, model } from "mongoose";

const ClienteSchema = new Schema(
  {
    nombre: {
      type: String,
      require: true,
    },

    correo: {
      type: String,
    },

    telefono: {
      type: Date,
      require: true,
      min: 0,
    },

    direccion: {
        type: String,
        require: true,
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

export default model("Cliente", ClienteSchema);