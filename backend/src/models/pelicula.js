//titulo, descripcion, director, genero, anio, duracion, imagen

import { Schema, model } from "mongoose";

const PeliculaSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    lastName: {
      type: String,
    },

    birthday: {
        
      type: Date,
      require: true,
    },

    email: {
      type: String,
    },

    address: {
      type: String,
    },

    password: {
      type: String,
      require: true,
    },
    hireDate: {
      type: String,
    },

    telephone: {
      type: String,
      require: true,
    },

    dui: {
      type: String,
      require: true,
    },
    isVerified: {
      type: Boolean,
    },
    issnumber: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Pelicula", PeliculaSchema);