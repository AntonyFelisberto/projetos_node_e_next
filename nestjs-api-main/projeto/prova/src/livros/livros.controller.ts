import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './DTO/livros.dto';
import { LivrosService } from './livros.service';
import { LivroInterface } from './DTO/livros.interface';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  buscarLivros(): LivroInterface[] {
    return this.livrosService.listarTudo();
  }

  @Get(':id')
  infoLivro(@Param('id') id: string): LivroInterface {
    return this.livrosService.listarId(parseInt(id));
  }

  @Post()
  criarLivro(@Body() infoLivro: Livro) {
    return this.livrosService.criarLivro(infoLivro);
  }

  @Put(':id')
  editarLivros(
    @Param('id') id: string,
    @Body() atualizacaoLivro: Livro,
  ): LivroInterface {
    return this.livrosService.editarLivro(parseInt(id), atualizacaoLivro);
  }

  @Delete(':id')
  eliminarLivro(@Param('id') id: string): string {
    this.livrosService.eliminarLivro(parseInt(id));
    return `o livro de id numero ${id} foi excluido`;
  }
}
