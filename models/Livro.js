const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    autor: {
      type: String,
      required: true,
      trim: true,
    },
    ano: {
      type: Number,
      required: true,
    },
    genero: {
      type: String,
      trim: true,
    },
    descricao: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Livro', livroSchema);
