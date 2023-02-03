import { Component, OnInit } from '@angular/core';
import { TituloDoSite } from '../titulo-do-site';
import { TituloDoSiteService } from '../titulo-do-site.service';

@Component({
  selector: 'app-titulo-do-site',
  templateUrl: './titulo-do-site.component.html',
  styleUrls: ['./titulo-do-site.component.css']
})
export class TituloDoSiteComponent implements OnInit{

  public tituloDoSite: TituloDoSite[] | undefined;

  constructor(private tituloDoSiteService: TituloDoSiteService){  }

  ngOnInit(): void {
    this.tituloDoSiteService.getUsers().subscribe((data: TituloDoSite[])=>{
      console.log(data);
      this.tituloDoSite = data;      
    })
  }

}
