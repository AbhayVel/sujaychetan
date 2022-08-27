import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { CalcService } from '../../service/calc.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'smom-edit-reactive-form',
  templateUrl: './edit-reactive-form.component.html',
  styleUrls: ['./edit-reactive-form.component.css']
})
export class EditReactiveFOrmComponent implements OnInit {

  constructor(private ac: ActivatedRoute, private router: Router, private calc: CalcService,

    private ps: ProductService

  ) { }

  myFormGroup!: FormGroup;
  product: any = null;
  id: string = '';
  action: string = '';
  ngOnInit(): void {

    //this.id = this.ac?.snapshot.params?.['id'];
    //this.ps.getById(+this.id).subscribe((p) => {
    //  this.product = p;
    //  this.setFormGroup(p);
    //})


    this.ac?.params.subscribe((p) => {
      this.id = this.ac?.snapshot.params?.['id'];
      this.ps.getById(+this.id).subscribe((p) => {
        this.product = p;
        this.setFormGroup(p);
      })
    })
  }


  setFormGroup(product: Product) {
    this.myFormGroup = new FormGroup({
      id: new FormControl(product.id, [Validators.required])    ,
      productName: new FormControl(product.productName, []),
    })
  }

  save() {
    if (this.myFormGroup.invalid) {
      return;
    }
    const obj = Object.assign({}, { ...this.product }, { ...this.myFormGroup.value })

    this.ps.save(obj).subscribe((r) => {
      alert("I am saved");
      this.router.navigate(['product']);
    }, (err) => {
      alert(err);
    })
  }


  change(val: string) {
    this.router.navigate(['product','edit',val,'up'])
  }
}
