import { Component, output } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  imports: [MatPaginator],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss'
})
export class Paginator {

  changePage = output<PageEvent>();

  pageIndex = 0;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent){
    this.pageEvent = e;
    this.pageIndex = e.pageIndex;

    this.changePage.emit(e);
  }
}
