import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-raffle-container',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './raffle-container.component.html',
  styleUrl: './raffle-container.component.css'
})

export class RaffleContainerComponent {


  [x: string]: any;
  participants = [ ];
  selectedOption: string = 'teams';
  selectedQuantity: any;
  teams: string[] = [];
  quantityOfTeams: any = [
    { value: 2, label: '2 times' },
    { value: 3, label: '3 times' },
    { value: 4, label: '4 times' },
    { value: 5, label: '5 times' },
    { value: 6, label: '6 times' },
    { value: 7, label: '7 times' },
    { value: 8, label: '8 times' },
    { value: 9, label: '9 times' },
    { value: 10, label: '10 times' },
    { value: 11, label: '11 times' },
    { value: 12, label: '12 times' },
    { value: 13, label: '13 times' },
    { value: 14, label: '14 times' },
    { value: 15, label: '15 times' },
    { value: 16, label: '16 times' },
    { value: 17, label: '17 times' },
    { value: 18, label: '18 times' },
    { value: 19, label: '19 times' },
    { value: 20, label: '20 times' },
    { value: 21, label: '21 times' },
    { value: 22, label: '22 times' },
    { value: 23, label: '23 times' },
    { value: 24, label: '24 times' },
    { value: 25, label: '25 times' },
    { value: 26, label: '26 times' },
    { value: 27, label: '27 times' },
    { value: 28, label: '28 times' },
    { value: 29, label: '29 times' },
    { value: 30, label: '30 times' },
    { value: 31, label: '31 times' },
    { value: 32, label: '32 times' }
  ];

  quantityPerTeam: any = [
    { value: 2, label: '2 Jogadores' },
    { value: 3, label: '3 Jogadores' },
    { value: 4, label: '4 Jogadores' },
    { value: 5, label: '5 Jogadores' },
    { value: 6, label: '6 Jogadores' },
    { value: 7, label: '7 Jogadores' },
    { value: 8, label: '8 Jogadores' },
    { value: 9, label: '9 Jogadores' },
    { value: 10, label: '10 Jogadores' },
    { value: 11, label: '11 Jogadores' },
  ];


  constructor() {
    this.teams = this.participants;
  }

  raggleTeams() {
    this.teams = this.shuffle(this.participants);
  }

  raffleGroups() {
    this.teams = this.shuffle(this.participants);
  }

  shuffle(array: any[]) {
    let currentIndex = array.length;
    let randomIndex;
    let temporaryValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  raffleTeams() {
    throw new Error('Method not implemented.');
  }

  onRadioChange(value: string) {
    this.selectedOption = value;
    this.selectedQuantity = null; // Resetando a seleção ao mudar de rádio
  }
}
