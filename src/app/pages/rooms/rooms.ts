import { Component, inject, OnInit } from '@angular/core';

import { Cardroom } from "../../components/cardroom/cardroom";
import { Room } from '../../models/room';
import { ROOMS_MOCK_DATA } from '../../mock/rooms-mock-data';
import { CommonModule } from '@angular/common';

import { RoomCreate } from "../../components/room-create/room-create";
import { Baseservice } from '../../services/baseservice';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [Cardroom, CommonModule, RoomCreate],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class Rooms implements OnInit {

  objeto: Room[] = [];

  baseService = inject(Baseservice);

  constructor() {
    console.log('chegou');
  }

  ngOnInit(): void {
    console.log('chegou')
    this.objeto = this.baseService.obterTodos('rooms');
    console.log('Dados mockados carregados:', this.objeto);
  }
}
