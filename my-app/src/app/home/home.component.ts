import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { ApiService } from '../api.service';

@Component({ templateUrl: 'home.component.html',
styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit{
    new: News[] = [];
    reviews:string[] = [];
    public displayedColumns = ['title', 'subtitle', 'text', 'img', 'alt'];
    public dataSource = new MatTableDataSource<News>();
    constructor(private newApiService: ApiService){

    }

    ngOnInit(){
        this.getNews();
    }

    getNews(){
        this.newApiService.getNews()
        .subscribe((res)=>{
            this.dataSource.data = res;
            this.new = res;
        })
    } 

    getReview(val:string){
        console.log(val);
        this.reviews.push(val);
    }
}


export interface News {
    title:string;
    subtitle:string;
    text:string;
    img:string;
    alt:string;
  } 
