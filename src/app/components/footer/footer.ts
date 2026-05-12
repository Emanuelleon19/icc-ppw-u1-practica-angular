import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, SlicePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class AppFooterComponent {
  readonly curso = 'programación y plataformas web';
  readonly autor = 'EMANUEL LEON';
  readonly fecha = new Date();
  readonly costo = 1500;
  readonly descripcion = 'Desarrollo de aplicaciones web modernas con Angular';
}