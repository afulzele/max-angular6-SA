import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataSS:DataStorageService) { }

  ngOnInit() {
  }

  onSave(){
    this.dataSS.storeData().subscribe(
      (response:Response)=>{
        console.log(response);
      }
    );
  }

  onGet(){
    this.dataSS.getStoredData();
  }

}
