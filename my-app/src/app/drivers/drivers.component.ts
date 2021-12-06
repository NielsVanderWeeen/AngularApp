import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { ApiService } from '../api.service';

@Component({ templateUrl: 'drivers.component.html',
styleUrls: ['./drivers.component.css']})
export class DriversComponent implements OnInit{
    drivers: Driver[] = [];
    public displayedColumns = ['firstname', 'lastname', 'team', 'number'];
    public dataSource = new MatTableDataSource<Driver>();
    constructor(private driverApiService: ApiService){

    }

    ngOnInit(){
        this.getDriversInformation();
    }

    getDriversInformation(){
        this.driverApiService.getDriversInformation()
        .subscribe((res)=>{
            console.log(res);
            this.dataSource.data = res;
            this.drivers = res;
        })
    } 
}

export interface Driver {
    firstName:string;
    lastName:string;
    team:string;
    number:string;
    img:string;
  } 