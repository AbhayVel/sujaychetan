import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalcService } from '../../service/calc.service';

@Component({
  selector: 'smom-edit-reactive-form',
  templateUrl: './edit-reactive-form.component.html',
  styleUrls: ['./edit-reactive-form.component.css']
})
export class EditReactiveFOrmComponent implements OnInit {

  constructor(private ac: ActivatedRoute, private router: Router, private calc: CalcService) { }

  id: string = '';
  action: string = '';
  ngOnInit(): void {
    this.id = this.ac?.snapshot.params?.['id'];
    this.action = this.ac?.snapshot?.params['action']
  }


  change(val: string) {
    this.router.navigate(['product','edit',val,'up'])
  }
}
