import { LoaderType } from './../../model/loader-type.enum';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {

  @Input() loaderType: LoaderType;
  constructor() { }

  ngOnInit() {
  }
}
