import { Component } from '@angular/core';
import { HlmToasterComponent } from '@spartan-ng/helm/sonner';

@Component({
  selector: 'app-toast',
    imports: [HlmToasterComponent],
  templateUrl: './toast.html',
  styleUrl: './toast.scss'
})
export class Toast {

}
