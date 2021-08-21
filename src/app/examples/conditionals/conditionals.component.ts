import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HTTPService } from 'src/app/services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-conditionals',
  templateUrl: './conditionals.component.html',
  styleUrls: ['./conditionals.component.scss']
})
export class ConditionalsComponent implements OnInit, AfterViewInit {

  ifCondition = false;
  switchCondition = 0;
  forList = [];

  constructor(private httpService: HTTPService) { }

  displayedColumns: string[] = ['nombre', 'edad', 'genero'];
  dataSource = null;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.httpService.retrieveData("").subscribe((result) => {
      console.log(result)
      this.forList = result.data

      this.dataSource = new MatTableDataSource(result.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
