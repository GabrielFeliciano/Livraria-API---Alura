import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { ProdutosService } from "./book.service";

@Controller('book')
export class ProdutosController {
    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    getAll(): Book[] {
        return this.produtosService.getAll();
    }

    @Get(':id')
    get(@Param() params): Book {
        return this.produtosService.get(params.id);
    }

    @Post()
    create(@Body() produto: Book) {
        this.produtosService.create(produto);
    }

    @Put()
    alterar(@Body() produto: Book): Book {
        return this.produtosService.change(produto);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtosService.delete(params.id);
    }
}