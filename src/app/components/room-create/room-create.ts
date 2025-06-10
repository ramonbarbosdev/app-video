import { Component, EventEmitter, Output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCross } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { HlmIconDirective } from '@spartan-ng/helm/icon';
// import { HlmInputDirective } from '@spartan-ng/helm/input';
// import { HlmLabelDirective } from '@spartan-ng/helm/label';
import {
  BrnSheetContentDirective,
  BrnSheetTriggerDirective,
} from '@spartan-ng/brain/sheet';
import {
  HlmSheetComponent,
  HlmSheetContentComponent,
  HlmSheetDescriptionDirective,
  HlmSheetFooterComponent,
  HlmSheetHeaderComponent,
  HlmSheetTitleDirective,
} from '@spartan-ng/helm/sheet';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../models/room';
import { Button } from "../../component/button/button";
import { InputText } from "../../component/input-text/input-text";
import { SelectSample } from "../../component/select-sample/select-sample";

@Component({
  selector: 'app-room-create',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    Button,
    InputText,
    SelectSample,
  ],
  providers: [provideIcons({ lucideCross })],
  templateUrl: './room-create.html',
  styleUrl: './room-create.scss',
})
export class RoomCreate {
  public objeto: Room = new Room();
  nm_titulo = 'Cadastrar Conta';
  endpoint = '';

  public options = ['01', '02', '03', '04', '05'].map((value) => ({
    value,
    label: `Capacidade ${value}`,
  }));

  onSave() {
    console.log(this.objeto);
  }
}
