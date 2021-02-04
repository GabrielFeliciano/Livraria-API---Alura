import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from './book.model';
import { BookService } from "./book.service";

@Controller('book')
export class BookController {
    constructor(private booksService: BookService) {

    }

    @Get()
    async getAll(): Promise<Book[]> {
        return this.booksService.getAll();
    }

    @Get(':id')
    async getSpecific(@Param() params): Promise<Book> {
        return this.booksService.getSpecific(params.id);
    }

    @Post()
    async create(@Body() book: Book) {
        this.booksService.create(book);
    }

    @Put(':id')
    async change(@Param() params, @Body() book: Book): Promise<[number, Book[]]> {
        return this.booksService.change(params.id, book);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.booksService.delete(params.id);
    }
}