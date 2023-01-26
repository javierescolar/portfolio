import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { ThatIAmComponent } from './that-i-am/that-i-am.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ThatIAmComponent, GreetingComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let count = 0;
    setInterval(() => {
      count++;
      console.log(count);
    }, 2000);
  }
}
