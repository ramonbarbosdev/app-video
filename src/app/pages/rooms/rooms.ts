import { Component, OnInit } from '@angular/core';

import { Cardroom } from "../../components/cardroom/cardroom";
import { Room } from '../../models/room';
import { ROOMS_MOCK_DATA } from '../../mock/rooms-mock-data';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective,  } from '@spartan-ng/helm/button';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [Cardroom, CommonModule, HlmButtonDirective] ,
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit {
  // <-- Implemente OnInit

  rooms: Room[] = [];

  constructor() {
    console.log('chegou');
  }

  ngOnInit(): void {
    // <-- Implemente ngOnInit para carregar os dados
    this.rooms = ROOMS_MOCK_DATA;
    console.log('Dados mockados carregados:', this.rooms);
  }
}
