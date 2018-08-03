import { Component, OnInit } from '@angular/core';

import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataSS:DataStorageService, private authService:AuthService) { }

  ngOnInit() {
  }

  onSave(){
    this.dataSS.storeData().subscribe(
      (response:Response)=>{
        // console.log(response);
      }
    );
  }

  onLogout(){
    this.authService.toLogout();
  }

  onGet(){
    this.dataSS.getStoredData();
  }

}
