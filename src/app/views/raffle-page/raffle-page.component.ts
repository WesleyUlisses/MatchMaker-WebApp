import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../../shared/components/header-home/header-home.component';
import { CommonModule } from '@angular/common';
import { RaffleContainerComponent } from '../../shared/components/raffle-container/raffle-container.component';

@Component({
  selector: 'app-raffle-page',
  standalone: true,
  imports: [HeaderHomeComponent, CommonModule, RaffleContainerComponent],
  templateUrl: './raffle-page.component.html',
  styleUrl: './raffle-page.component.css'
})
export class RafflePageComponent {
  
}
