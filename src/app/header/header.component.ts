import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu = {};
  user: any;
  // @ts-ignore

  constructor() { }

  ngOnInit(): void {
  }

  print(key): void{
    console.log('key');
  }

}

////////

