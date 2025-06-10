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
  objetos: Room[] = [];
  endpoint = 'rooms';
  baseService = inject(Baseservice);

  constructor() {}

  ngOnInit(): void {
    this.baseService.obterTodos(this.endpoint).subscribe((res) => {
      console.log(res);

      this.objetos = res;
    });
  }

}
