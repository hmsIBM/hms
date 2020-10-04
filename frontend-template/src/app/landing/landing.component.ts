import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UploadFileService } from '../upload/upload-file.service';
import { FileUpload } from '../upload/fileupload';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {
  selectedFiles: FileList;
 b:string
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
abc:Array<any>=[]
closeResult = '';
signupForm: FormGroup;
invalidNamesArr: string[] = ['Hello', 'Angular'];
showMessage : boolean = false;
editMode : boolean = false;
@ViewChild('closebutton',null) closebutton;
  constructor(private router:Router,private patientSerivce: PatientService,private modalService: NgbModal,private uploadService: UploadFileService) { }

  ngOnInit() {
    console.log("Hello bois")
localStorage.clear();
    this.patientSerivce.fetchAllHospital()
    .subscribe((res1:Array<any>)=> 
    { 
      this.abc=res1;
      console.log(res1);
      console.log("res1 pulled...");
      // console.log(this.abc[0][1])
    })
    this.signupForm = new FormGroup({
      id:new FormControl,
      name: new FormControl(null, [Validators.required, this.invalidNameValidation.bind(this)]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      contactNo: new FormControl(null,[Validators.required]),
      image:new FormGroup({
        url:new FormControl
      
      })
    
    });
  }
  onSubmit() {
    console.log(this.uploadService.a)
    this.signupForm.get('image').get('url').setValue(this.uploadService.a)
    let a
    a=this.signupForm.value
    console.log(this.signupForm);
  
    console.log(this.signupForm.value);
    this.patientSerivce.sendAppointment(this.signupForm.value).subscribe((res:any)=>{
      console.log(res)
      if(res.status == 201){
        this.showMessage = true;
        this.abc.push(this.signupForm.value);
    console.log(this.abc)
  this.ngOnInit();
      }
      
      
    });
   
    this.closebutton.nativeElement.click();
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  
  upload() {
    
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
  
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    this.b=this.uploadService.a
    
    console.log(this.uploadService.a)
  
  }
route(v:any){
   localStorage.clear();
    localStorage.setItem('name',v);

  this.router.navigate(['/dashboard'])
 
}
scroll(el: HTMLElement) {
  el.scrollIntoView({behavior:"smooth"});
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
invalidNameValidation(control: AbstractControl): {[key: string]: boolean} {
  if (this.invalidNamesArr.indexOf(control.value) >= 0) {
    return {invalidName: true};
  }
  return null;
}

deletedoctor(dd:number)
{   console.log(dd);
    console.log("delete function started")
    this.patientSerivce.deletehospital(dd)
    .subscribe((res:any)=>
  {
    console.log(res);
    if(res.status == 200){
     // this.showMessage = true;
      this.abc = this.abc.filter((abc)=> abc.id!=dd)
    }
    this.showMessage=true;
  
  });
  //this.lists = this.lists.filter((lists)=> lists.id!=aid)
}
}
