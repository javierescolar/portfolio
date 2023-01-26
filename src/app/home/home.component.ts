import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { ThatIAmComponent } from './that-i-am/that-i-am.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ThatIAmComponent,
    GreetingComponent,
    SkillsComponent,
    StartProjectComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
