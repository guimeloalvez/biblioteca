import { db } from "../database/knex.js";
import type { CreateLivro } from "../types/livros.js";

class LivroRepository {
  async create(dados: CreateLivro) {
    const [livroCriado] = await db("livro").insert(dados).returning("*");
    return livroCriado;
  }
  async getAll() {
    const livros = await db("livro").select("*").returning("*");
    return livros;
  }
  async getById(id: string) {
    const [livro] = await db("livro").where({ id }).select("*").returning("*");
    return livro;
  }
  async update(id: string, dados: CreateLivro) {
    const [livroAtualizado] = await db("livro")
      .where({ id })
      .update(dados)
      .returning("*");
    return livroAtualizado;
  }
  async delete(id: string) {
    const [livroDeletado] = await db("livro")
      .where({ id })
      .del()
      .returning("*");
    return {
      livro_deletado: {
        status: "Ok",
        message: "Livro deletado com sucesso",
        livroDeletado,
      },
    };
  }
}

export const livroRepository = new LivroRepository();
