import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionalService } from '../services/functional.service';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {

  myForm: FormGroup;
  department: any;
  hospitalN: any;
  hosp: any;

  constructor(private functionalService: FunctionalService, private fb: FormBuilder, private route: ActivatedRoute) {

      this.myForm = new FormGroup({
     'department': new FormControl('' ,[Validators.required])
     
      })
  }

  ngOnInit() {
    // this.functionalService.hospitalByName(this.hospitalN)
    // .subscribe((res:Array<any>)=> {
    // console.log(res);
    // this.hosp=res[0].name;
    // console.log(this.hosp);
    
    this.addForm();
  // })

}

 
  addForm() {
   
    this.myForm =  this.fb.group({    
      department : [' '],
      image: this.fb.group({
        name: [''],
        type: [''],
        picByte: ['']
      })
  })
  }

  SaveData()    
  {    
    console.log(this.myForm.value); 
    this.functionalService.addDept(this.myForm.value)
    .subscribe(res=>{
      console.log(res)
      
    });
  }   
}
