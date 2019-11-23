import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-examing',
  templateUrl: './examing.component.html',
  styleUrls: ['./examing.component.scss']
})
export class ExamingComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  id:number;

  back() {
    this.router.navigate(['/home']);
  }
}
