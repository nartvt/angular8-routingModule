import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/share/share-data.service';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {

  constructor(
    private shareDataService:ShareDataService
  ) { 
    console.log("Contructor");
  }
  ngOnChanges(){
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.shareDataService.shareListMovie.subscribe((data: any)=> {
      console.log(data);
    });
  }
ngAfterViewInit(){
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log("ngAfterViewInit");
}
  ngOnDestroy(){
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy");
  }
}
