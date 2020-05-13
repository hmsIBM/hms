import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { FunctionalService } from '../services/functional.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablesComponent implements OnInit {
  myForm: FormGroup;
  closeResult = '';
  model: NgbDateStruct;
  today = this.calendar.getToday();
  time = {hour: 13, minute: 30};
  meridian = true;
  lists:Array<any>
  constructor(private modalService: NgbModal,private calendar: NgbCalendar,private fuctionalService: FunctionalService) {
    this.myForm = new FormGroup({
      'id': new FormControl('' ,[Validators.required]),
      'name': new FormControl('' ,[Validators.required]),
      // 'salary': new FormControl('', Validators.min(10000))
    'email' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
  })
  }

  ngOnInit() {
    this.fuctionalService.findAppointment()
    .subscribe((res:Array<any>)=> {
      console.log(res);
      this.lists = res;
      
    })
    console.log(this.lists);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
onSubmit()
{}
}
