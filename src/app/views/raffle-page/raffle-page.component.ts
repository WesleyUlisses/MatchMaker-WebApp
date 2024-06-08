import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../../shared/components/header-home/header-home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-raffle-page',
  standalone: true,
  imports: [HeaderHomeComponent, CommonModule],
  templateUrl: './raffle-page.component.html',
  styleUrl: './raffle-page.component.css'
})
export class RafflePageComponent {

}
