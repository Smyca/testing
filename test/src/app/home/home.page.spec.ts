import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ApiRickService } from '../services/api-rick.service';
import { Observable, of } from 'rxjs';



const apiServiceMock:{
  obtenerDatos: ()=>Observable<any> //que retorna
}={
  obtenerDatos:()=>  of({})  //como lo retorna //simula observable con of

}



describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers:[{
        provide:ApiRickService, useValue:apiServiceMock
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
