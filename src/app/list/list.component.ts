import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private route : Router,private router:ActivatedRoute ) { }
   data:any;
   form()
   {  
    this.route.navigate(['/Form'])
   }
  ngOnInit(): void {
    this.router.queryParams.subscribe((params)=>{console.log(params);
    this.data=JSON.parse(params.data)})
  }
  

}
