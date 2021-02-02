import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class ProdutosService {
    books: Book[] = [
        new Book("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Book("LIV02", "Livro Iniciando com Flutter", 39.90),
        new Book("LIV03", "Inteligência artificial como serviço", 29.90),
    ];

    getAll(): Book[] {
        return this.books;
    }

    get(id: number): Book {
        return this.books[0];
    }

    create(produto: Book) {
        this.books.push(produto);
    }

    change(produto: Book): Book {
        return produto;
    }

    delete(id: number) {
        this.books.pop();
    }
}