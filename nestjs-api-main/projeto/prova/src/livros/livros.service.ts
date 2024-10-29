import { Injectable } from '@nestjs/common';
import { LivroInterface } from './DTO/livros.interface';
import { Livro } from './DTO/livros.dto';

@Injectable()
export class LivrosService {
  private readonly livros: LivroInterface[] = [];

  private findId(id: number): number {
    let indice: number;
    this.livros.forEach(function (livro: LivroInterface, index: number) {
      if (livro.id === id) {
        indice = index;
      }
    });

    return indice;
  }

  criarLivro(infoLivro: Livro) {
    let lastId: number;

    const addId = (matrixLivros: LivroInterface[]): number => {
      if (matrixLivros.length > 0) {
        lastId = matrixLivros[matrixLivros.length - 1].id + 1;
        return lastId;
      } else {
        return (lastId = 1);
      }
    };

    const novoLivro = {
      id: addId(this.livros),
      ...infoLivro,
    };

    this.livros.push(novoLivro);
  }

  listarTudo() {
    return this.livros;
  }

  listarId(id: number): LivroInterface {
    return this.livros[this.findId(id)];
  }

  editarLivro(id: number, infoLivro: Livro): LivroInterface {
    const indice = this.findId(id);
    const livro = { id: id, ...infoLivro };
    this.livros.splice(indice, 1, livro);
    return this.livros[indice];
  }

  eliminarLivro(id: number) {
    const indice = this.findId(id);
    this.livros.splice(indice, 1);
  }
}
