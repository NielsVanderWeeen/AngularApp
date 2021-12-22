import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() WDC = "Max Verstappen";
  @Output() newWDCEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewWDC(value: string){
    this.newWDCEvent.emit(value);
  }

}
