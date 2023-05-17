import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {
charac: any[] = [];
constructor(private http: HttpClient){}

ngOnInit(){
  this.http.get<any>('assets/database.json').subscribe(data =>{
    this.charac = data.charac;
  })
}
}
