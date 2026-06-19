const Livro = require('../models/Livro');

// GET /api/livros — listar todos
const listarLivros = async (req, res) => {
  try {
    const livros = await Livro.find().sort({ createdAt: -1 });
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar livros', error });
  }
};

// GET /api/livros/:id — buscar por ID
const buscarLivro = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar livro', error });
  }
};

// POST /api/livros — criar
const criarLivro = async (req, res) => {
  try {
    const { titulo, autor, ano, genero, descricao } = req.body;

    if (!titulo || !autor || !ano) {
      return res
        .status(400)
        .json({ mensagem: 'Título, autor e ano são obrigatórios' });
    }

    const livro = new Livro({ titulo, autor, ano, genero, descricao });
    await livro.save();

    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao criar livro', error });
  }
};

// PUT /api/livros/:id — atualizar
const atualizarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    res.json(livro);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao atualizar livro', error });
  }
};

// DELETE /api/livros/:id — deletar
const deletarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) {
      return res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
    res.json({ mensagem: 'Livro removido com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar livro', error });
  }
};

module.exports = {
  listarLivros,
  buscarLivro,
  criarLivro,
  atualizarLivro,
  deletarLivro,
};
