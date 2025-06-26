import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipePipe } from '../custom-pipe.pipe';
// Define the items interface locally since '@angular/items.model' cannot be found
export interface items {
  
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  availabilityStatus: string;
  stock: number;
  images: string[];
  rating:number;



}

@Component({
  selector: 'app-minicart',
  imports: [CommonModule,HttpClientModule, FormsModule, CustomPipePipe],
  templateUrl: './minicart.component.html',
  styleUrl: './minicart.component.css'
})
export class MinicartComponent {

apiUrl = "http://localhost:3000/items";
items:any = [];
  search: string = '';
  
constructor(private http:HttpClient){
this.getItems();
}
getItems(){
this.http.get(this.apiUrl).subscribe(data => {
  this.items = data;
})
}

cartCount:number = 0;
  addtocart(index:number){
    if (this.items[index].stock >0){
    this.cartCount++;
    this.items[index].stock--;
  }
  else{
    alert("product is unavalible in the stock");
  }
}
}