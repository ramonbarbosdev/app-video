import { Component, OnInit } from '@angular/core';

import { Cardroom } from "../../components/cardroom/cardroom";
import { Room } from '../../models/room';
import { ROOMS_MOCK_DATA } from '../../mock/rooms-mock-data';
import { CommonModule } from '@angular/common';

import { RoomCreate } from "../../components/room-create/room-create";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    Cardroom,
    CommonModule,

    RoomCreate
],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit {

  rooms: Room[] = [];

  constructor() {
    console.log('chegou');
  }

  ngOnInit(): void {
    this.rooms = ROOMS_MOCK_DATA;
    console.log('Dados mockados carregados:', this.rooms);
  }
}
