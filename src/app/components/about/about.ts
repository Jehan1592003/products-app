import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnDestroy {
  ngOnDestroy(): void {
    console.log('cleanup')
  }
}
