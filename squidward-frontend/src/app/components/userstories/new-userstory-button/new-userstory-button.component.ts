import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-userstory-button',
  templateUrl: './new-userstory-button.component.html',
  styleUrls: ['./new-userstory-button.component.css']
})
export class NewUserstoryButtonComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  openModal(content): void {
    this.modalService.open(content).result.then((result) => {});
  }
}
