import { Component } from '@angular/core';

import { Cardroom } from "../../components/cardroom/cardroom";

@Component({
  selector: 'app-rooms',
  imports: [ Cardroom],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {

}
