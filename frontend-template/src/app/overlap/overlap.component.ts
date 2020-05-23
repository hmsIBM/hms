import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FunctionalService } from '../services/functional.service';
// import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-overlap',
  templateUrl: './overlap.component.html',
  styleUrls: ['./overlap.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverlapComponent implements OnInit {
  showMessage : boolean = false;
  showMessage1 : boolean = false;
  showMessage2 : boolean = false;
  editMode : boolean = false;
  @ViewChild('closebutton',null) closebutton;
  invalidNamesArr: string[] = ['Hello', 'Angular'];
  signupForm: FormGroup;
  a:any
  bb:string=''
  aa:string=''
  b:Array<any>=[]
  closeResult = '';
  model: NgbDateStruct;
  today = this.calendar.getToday();
  department: Array<any>=[]
  
  time = { hour: 13, minute: 30 };
  meridian = true;
  lists: Array<any>
  constructor(private route: ActivatedRoute,private router: Router,private modalService: NgbModal, private calendar: NgbCalendar, private fuctionalService: FunctionalService,private patientService: PatientService) {

  }

  ngOnInit() {
    this.fuctionalService.findAppointment()
    .subscribe((res: Array<any>) => {
      console.log(res);
      this.lists = res;
    })
    this.patientService.fetchAllPatient()
    .subscribe((res: Array<any>) => {
      this.a = res;
      console.log(res);
      console.log("res pulled...");
     console.log(this.a);
     
    })
    
   
    
    this.signupForm = new FormGroup({
      id:new FormControl,
      name: new FormControl(null, [Validators.required, this.invalidNameValidation.bind(this)]),
      emailId: new FormControl(null, [Validators.email, Validators.required]),
      appointmentDate: new FormControl(null,[Validators.required]),
      appointmentTime: new FormControl(null),      
      contactNumber: new FormControl(null,[Validators.required]),
      departmentName:new FormControl(this.bb),
      doctorName:new FormControl(this.bb),
      disease:new FormControl(null,[Validators.required])
      
   

});

  }
  app(){
    console.log("appointment lelu")
   
    // this.router.navigate(['/overlap',null]);
    this.signupForm.controls['id'].setValue(null);
    this.signupForm.controls['name'].setValue(null);
    this.signupForm.controls['emailId'].setValue(null);
    this.signupForm.controls['appointmentDate'].setValue(null);
    this.signupForm.controls['appointmentTime'].setValue(null);
    this.signupForm.controls['contactNumber'].setValue(null);
    this.signupForm.controls['departmentName'].setValue(null);
    this.signupForm.controls['doctorName'].setValue(null);
    this.signupForm.controls['disease'].setValue(null);
    this.editMode = false;
  }
  updatetheForm(){

    console.log("hello update bhai");
    let a
    a=this.signupForm.get('appointmentDate').value
    console.log(a.year)
    let date:string
    date=a.year+"-"+a.month+"-"+a.day
    console.log(date)
    this.signupForm.get('appointmentDate').setValue(date)
    let time
    time=this.signupForm.get('appointmentTime').value
    let timer:string
    timer=time.hour+":"+time.minute+":"+"00"
    console.log(timer)
    this.signupForm.get('appointmentTime').setValue(timer)
    this.fuctionalService.updateAppointment(this.signupForm.get('id').value,this.signupForm.value)
    .subscribe(res=>{
      console.log(res)
      if(res.status == 202){
        this.showMessage2 = true;
      }
      this.ngOnInit();
    });
    this.closebutton.nativeElement.click();
   }
  invalidNameValidation(control: AbstractControl): {[key: string]: boolean} {
    if (this.invalidNamesArr.indexOf(control.value) >= 0) {
      return {invalidName: true};
    }
    return null;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  toggleMeridian() {
    this.meridian = !this.meridian;
  }
  onSubmit() {
    let a
    a=this.signupForm.get('appointmentDate').value
    console.log(a.year)
    let date:string
    date=a.year+"-"+a.month+"-"+a.day
    console.log(date)
    this.signupForm.get('appointmentDate').setValue(date)
    let time
    time=this.signupForm.get('appointmentTime').value
    let timer:string
    timer=time.hour+":"+time.minute+":"+"00"
    console.log(timer)
    this.signupForm.get('appointmentTime').setValue(timer)
    console.log(this.signupForm);
    console.log(this.signupForm.get('name').value);
    console.log(this.signupForm.value);
    
    this.fuctionalService.sendAppointment(this.signupForm.value).subscribe(res=>{
      console.log(res)
      if(res.status == 201){
        this.showMessage1 = true;
      }
      this.ngOnInit();
    });
    this.router.navigate(['/overlap',this.signupForm.value])
    this.lists.push(this.signupForm.value)
    this.ngOnInit();
    
this.router.onSameUrlNavigation ='reload'
this.closebutton.nativeElement.click();

  }
  
  on(Depart:string){
    
    this.b=[]
    console.log("hellllllllllllllo")
    this.bb=Depart
    this.signupForm.get('departmentName').setValue(Depart)
// this.signupForm.user_Department.value=this.bb
for (let entry of this.a.department) { 

  console.log(entry);
  if(entry.departmentName==Depart)
{
 for (let entry1 of entry.doctor) { 

    console.log(entry1)

     this.b.push(entry1);  
  }
       }
       
      }
  }  


  hello(Depart:string){
    this.aa=Depart
    this.signupForm.get('doctorName').setValue(Depart)
    console.log("hiiiiiiii");
    
  }
  output(a:any){
    console.log("hello")
    console.log(a)
    this.router.navigate(['/overlap',a])
    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('id'));
    if(params.get('id') != null){
       this.editMode = true;
    }
      this.signupForm.controls['id'].setValue(params.get('id'));
      this.signupForm.controls['name'].setValue(params.get('name'));
      this.signupForm.controls['emailId'].setValue(params.get('emailId'));
      this.signupForm.controls['appointmentDate'].setValue(params.get('appointmentDate'));
      this.signupForm.controls['appointmentTime'].setValue(params.get('appointmentTime'));
      this.signupForm.controls['contactNumber'].setValue(params.get('contactNumber'));
      this.signupForm.controls['departmentName'].setValue(params.get('departmentName'));
      this.signupForm.controls['doctorName'].setValue(params.get('doctorName'));
      this.signupForm.controls['disease'].setValue(params.get('disease'));
      this.bb=this.signupForm.get('departmentName').value
      this.aa=this.signupForm.get('doctorName').value
      let a
    a=this.signupForm.get('appointmentDate').value
      // this.model= {
      //   "year": a.year,
      //   "month": a.month,
      //   "day": a.day
      // }
      
    });


  }

  delete(aid:number){
    this.fuctionalService.deleteAppointment(aid)
    .subscribe((res:any)=> {
      console.log(res);
     if(res.status == 200){
       this.showMessage = true;
       this.lists = this.lists.filter((lists)=> lists.id!=aid)
     }
    })

  }
  
  
}
