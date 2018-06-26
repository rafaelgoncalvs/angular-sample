import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
    
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http
            .get<IProduct[]>(this._productUrl)
            .catch(this.handError);
    }

    handError(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}