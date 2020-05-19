import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
abc:Array<any>=[]
closeResult = '';
  constructor(private router:Router,private patientSerivce: PatientService,private modalService: NgbModal) { }

  ngOnInit() {

    this.patientSerivce.fetchAllHospital()
    .subscribe((res:Array<any>)=> 
    { 
      this.abc=res;
      console.log(res);
      console.log("res pulled...");
      // console.log(this.abc[0][1])
    })
  }
route(){
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
}
