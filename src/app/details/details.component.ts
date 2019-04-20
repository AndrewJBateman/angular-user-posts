import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: any;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      (data : any) => this.user$ = data
    )
  }

}
