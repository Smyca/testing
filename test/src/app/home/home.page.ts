import { Component, OnInit } from '@angular/core';
import { ApiRickService } from '../services/api-rick.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   data:any
  constructor(private apiRick:ApiRickService) {}

  ngOnInit(): void {
    this.apiRick.obtenerDatos().subscribe((data)=>{
      this.data=data.results
    }
  )
  }

}
