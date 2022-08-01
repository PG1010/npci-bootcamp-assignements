import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../common/category';
import { Product } from '../common/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagementserviceService {

  prourl = 'http://localhost:8080/api/pro';
  caturl = 'http://localhost:8080/api/cat';

  constructor( private httpClient : HttpClient) { }
  getAllProducts(): Observable<Product[]>{
    console.log(this.httpClient.get<getProductResopnce>(this.prourl).pipe(map(Response => Response._embedded.products)));
    
    return this.httpClient.get<getProductResopnce>(this.prourl).pipe(map(Response => Response._embedded.products))
  }
  
  getAllCategories(): Observable<Category[]>{
    console.log(this.httpClient.get<getCategoryResopnce>(this.caturl).pipe(map(Response => Response._embedded.categories)));
    
    return this.httpClient.get<getCategoryResopnce>(this.caturl).pipe(map(Response => Response._embedded.categories))
  }
}

interface getProductResopnce{
  _embedded:{
    products : Product[];
  }
}

interface getCategoryResopnce{
  _embedded:{
    categories : Category[];
  }
}