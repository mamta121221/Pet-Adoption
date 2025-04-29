import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PetServiceService } from '../service/pet-service.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-pet-details',
  imports: [HeaderComponent],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent {
  public petDetails!: any;

  constructor(public petService: PetServiceService,
    private router: Router,
    private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.petService.petDetilsObservable.subscribe(details => {
      this.petDetails = details;
    })
  }

  adoptPet() {
    this.snackbarService.showSuccessMessage(`You have successfully adopted ${this.petDetails.name}`);
    this.router.navigateByUrl('/home');
  }

  cancel() {
    this.router.navigateByUrl('/home');
  }

}
