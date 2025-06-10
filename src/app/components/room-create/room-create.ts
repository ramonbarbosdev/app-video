import { Component, EventEmitter, Output } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCross } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
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
import { Room } from '../../models/room';
import { Button } from "../../component/button/button";
import { InputText } from "../../component/input-text/input-text";
import { SelectSample } from "../../component/select-sample/select-sample";
import { toast } from 'ngx-sonner';
import { Toast } from '../../component/toast/toast';

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
    Toast
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

  showToast() {
    toast('Salvo com sucesso', {
      description: 'A nova sala foi criada, aproveite!',
      action: {
        label: 'Ok',
        onClick: () => {},
      },
    });
  }
  onSave() {
    this.showToast();
    console.log(this.objeto);
  }
}
