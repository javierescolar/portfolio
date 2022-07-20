import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThatIAmComponent } from './that-i-am/that-i-am.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ThatIAmComponent, GreetingComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
