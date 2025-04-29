import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-page-not-found',
  imports: [HeaderComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}

  