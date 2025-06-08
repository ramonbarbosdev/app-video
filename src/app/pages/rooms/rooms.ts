import { Component, OnInit } from '@angular/core';

import { Cardroom } from "../../components/cardroom/cardroom";
import { Room } from '../../models/room';
import { ROOMS_MOCK_DATA } from '../../mock/rooms-mock-data';

@Component({
  selector: 'app-rooms',
  imports: [ Cardroom],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms{

  rooms: Room[] = [];

  constructor(){
    console.log('chegou')
  };
  
  

}
