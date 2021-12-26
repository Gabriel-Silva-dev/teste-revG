import { Bancos } from './../../models/placeholder.model';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {

  bancos: any;
  codigo: any;
  buscaCod: any;
  constructor(private crudService: CrudService) { 
    this.getter();
    this.searchCodigo();
  }

  ngOnInit(): void {}

  getter(){
    this.crudService.getBancos().subscribe((data: Bancos)=> {
      this.bancos = data;
    })
  }

//TESTANDO 
  searchCodigo(){
    this.crudService.getBanco(this.codigo).subscribe((data)=>{
      this.buscaCod = data;
      console.log(data);
    })
  }

}