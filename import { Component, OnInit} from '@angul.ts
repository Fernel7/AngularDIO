import { Component, OnInit} from '@angular/core' ;
import { BooksService } from '../componentes/product-list.component.service';
import {BookService} from './product-list.component.service';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent Implements OnInit {

    livros: any;
    bookservice: BooksService

    constructor ( BookService : BooksService) {

        this.BookService = BookService;
    
    }

    ngOnInit(): void {

        this.livros = this.bookService.getBook().subscribe((data -> {

            this.livros = data;
            console.log(this.livros);
            
        }))
    }

}