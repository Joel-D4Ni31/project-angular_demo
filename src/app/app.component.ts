import { Component } from '@angular/core';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'angular-demo';
  img: string = 'https://images.pexels.com/photos/3034737/pexels-photo-3034737.jpeg?auto=compress&cs=tinysrgb&w=600'
  btn: boolean = true; //habilitar con false
  name: string = "";
  o_nombre: string ="Alexis";
  o_edad: number = 22;
  persona = {
    nombre: "Joel",
    edad: 35
  }
  persons: any[] = [
    {
      nombre: "Joel",
      edad: 35
    }
  ]
  
  nombres: string[] = [
    "Joel",
    "Daniel"
  ];
  numeros: number[] = [
    1,
    2
  ]
  p_name: string = "";
  p_price: number = 0;
  p_image: string = "";
  products: Product[] = [{
    name: "parquet",
    price: 28,
    image: "https://media.istockphoto.com/photos/sample-of-wood-chipboard-wooden-laminate-veneer-material-for-interior-picture-id1135678299?b=1&k=20&m=1135678299&s=612x612&w=0&h=JVmRpRls_0Pq9f5GT2EPtmWXbzlLMXGlKX6L4YOuKU8="
  }];
  
  cambioParametro(): void{
    this.btn = !this.btn;
  }
  edadAdd(): void{
    this.persona.edad += 1;
  }
  onScroll(event: Event): void{
    const elemento = event.target as HTMLElement;
    console.log(elemento.scrollTop);
  }
  changeName(event: Event): void{
    const elemento = event.target as HTMLInputElement;
    this.persona.nombre = elemento.value;
  }
  addName(): void{
    this.nombres.push(this.name);
    this.name="";
  }
  deleteName(position: number): void{
    this.nombres.splice(position);
  }
  addPerson(): void{
    const newPerson ={
      nombre: this.o_nombre,
      edad: this.o_edad
    }
    this.persons.push(newPerson);
    this.o_nombre="";
    this.o_edad=0;
  }
  deletePerson(position: number): void{
    this.persons.splice(position);
  }
  addProduct(): void{
    const newProduct ={
      name: this.p_name,
      price: this.p_price,
      image: this.p_image
    }
    this.products.push(newProduct);
    this.p_name = "";
    this.p_price = 0;
    this.p_image = "";
  }
}

// const user: string | number = 3;
// console.log(typeof(user));
// console.log(user);