import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgServiceService } from 'src/app/app-Services/img-service.service';
import { MatDialogComponent } from 'src/app/include/utilities/popup/mat-dialog/mat-dialog.component';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  heading:any;
  data:any=[]
  public searchFilter: any = '';
  pagination:boolean =false
  p:any = 1;
  total:any=[];
  constructor(private _service: ImgServiceService ,private http :HttpClient) { }

  ngOnInit(): void {}       
username: string = '';
giphy:any=[];
link = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";
clickme() {
  this.total=[];
  this._service.getImage(this.username).subscribe((res)=>{
    this.giphy = res.data;
    setTimeout(() => {
      this.giphy.forEach((e:any) => {
        this.total.push(e.images.original);
        this.pagination = true;
        });
    }, 1000);
  })
}

}
