import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { BudgetsService } from "../services/budgets.service";

@Component({
  selector: 'app-budgets-page',
  templateUrl: './budgets.component.html',
  imports: [NgIf, RouterLink, AsyncPipe, RouterLinkActive],
  standalone: true
})
export class BudgetsComponent implements OnInit {
  isUser: boolean = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly budgetsService: BudgetsService
  ) {}

  ngOnInit() {
    
    this.budgetsService
      .get()
      .subscribe((response) => {
        console.log(response)
      });
  }
}
