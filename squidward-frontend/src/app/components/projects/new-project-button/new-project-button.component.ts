import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-project-button',
  templateUrl: './new-project-button.component.html',
  styleUrls: ['./new-project-button.component.css']
})
export class NewProjectButtonComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  openModal(content): void {
    this.modalService.open(content).result.then((result) => {});
  }
}
