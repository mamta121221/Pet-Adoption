import { ChangeDetectionStrategy, Component, NgZone, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PetServiceService } from '../service/pet-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { PetModels } from '../models/pet-models';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';
import { Router, RouterOutlet, } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MatCardModule, MatGridListModule, NgFor, MatSelectModule, MatPaginator],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  constructor(public petService: PetServiceService,
    private router: Router,
    private zone: NgZone) { }
  public petListArray: PetModels[] = [];
  isListEnabled: boolean = false;
  @ViewChild('paginator')
  paginator!: MatPaginator;
  page = 0;
  size = 10;
  data: PetModels[] = [];
  ngOnInit() {
    this.getPetList('dog');
    this.getData({ pageIndex: this.page, pageSize: this.size });
  }
  getPetList(pet: string) {
    this.petListArray = (pet === 'dog') ? this.petService.dogList : this.petService.catList;
  }

  onOptionsSelected(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.isListEnabled = value === "1";
  }

  getData(obj: { pageIndex: number; pageSize: number; }) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.data = this.petListArray.filter(() => {
      index++;
      return (index > startingIndex && index <= endingIndex) ? true : false;
    });
  }

  getPetDetails(petDetails: PetModels) {
    this.petService.emitPetDetails(petDetails);
    this.router.navigateByUrl('/petDetails');
  }

}
