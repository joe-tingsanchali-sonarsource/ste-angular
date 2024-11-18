import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-example';

  doStuff() {
    alert('I did stuff');
  }

  doOtherStuff() {
    alert('I did other stuff');
  }

  // Example issue: High cyclomatic complexity
  complexFunction(value: number) {
    if (value > 0) {
      if (value > 10) {
        console.log('Value is greater than 10');
      } else {
        console.log('Value is between 1 and 10');
      }
    } else {
      if (value < -10) {
        console.log('Value is less than -10');
      } else {
        console.log('Value is between 0 and -10');
      }
    }
  }

  // Example issue: Use of eval
  executeCode(code: string) {
    eval(code); // This should trigger a SonarQube warning
  }
}
