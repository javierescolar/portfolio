import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-that-i-am',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './that-i-am.component.html',
  styleUrls: ['./that-i-am.component.scss']
})
export class ThatIAmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
