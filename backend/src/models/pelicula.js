//titulo, descripcion, director, genero, anio, duracion, imagen

import { Schema, model } from "mongoose";

const PeliculaSchema = new Schema(
  {
    titulo: {
      type: String,
      require: true,
    },

    descripcion: {
      type: String,
    },

    director: {

      type: Date,
      require: true,
    },

    genero: {
      type: String,
    },

    anio: {
      type: Number,
    },

    duracion: {
      type: Number,
      require: true,
    },
    imagen: {
      type: String,

    },

  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Pelicula", PeliculaSchema);