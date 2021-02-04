import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class BookService {
    constructor (
        @InjectModel(Book)
        private bookModel: typeof Book
    ) {

    }

    async getAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async getSpecific(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async create(book: Book) {
        this.bookModel.create(book);
    }

    async change(id: number, book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id
            }
        });
    }

    async delete(id: number) {
        const book: Book = await this.getSpecific(id);
        book.destroy();
    }
}