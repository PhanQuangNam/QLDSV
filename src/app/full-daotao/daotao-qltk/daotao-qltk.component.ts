import { Component, OnInit } from '@angular/core';
import { data } from "../../mockdata";

@Component({
  selector: 'app-daotao-qltk',
  templateUrl: './daotao-qltk.component.html',
  styleUrls: ['./daotao-qltk.component.css']
})
export class DaotaoQLTKComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = data ;
}
