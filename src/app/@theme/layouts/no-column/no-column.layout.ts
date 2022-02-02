import { Component } from '@angular/core';
import { NbAuthService } from '@nebular/auth';
import { takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-no-column-layout',
  styleUrls: ['./no-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-layout-column>
        <nb-card>
        <nb-card-header>
          <nav class="navigation">
            <a href="#" (click)="back()" class="link" aria-label="Back"><i class="icon nb-arrow-thin-left"></i></a>
          </nav>
        </nb-card-header>
        <nb-card-body>
         <div class="content">
         <ng-content select="router-outlet"></ng-content>
         </div>
          
          
        </nb-card-body>
      </nb-card>
     
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class NoColumnLayoutComponent {
  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NbAuthService, protected location: Location) {

    this.subscription = auth.onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
