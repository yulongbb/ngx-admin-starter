import { Component, OnDestroy, Input } from '@angular/core';
import { NbLayoutDirectionService, NbLayoutDirection, NbThemeService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-theme-switcher',
  template: `
    <ngx-switcher
      [firstValue]="themes.LIGHT"
      [secondValue]="themes.DARK"
      [firstValueLabel]="'sun-outline'"
      [secondValueLabel]="'moon-outline'"
      [value]="currentTheme"
      (valueChange)="toggleDirection($event)"
      [vertical]="vertical">
    </ngx-switcher>
  `,
})
export class ThemeSwitcherComponent implements OnDestroy {

  protected destroy$ = new Subject<void>();

  themes = {
    LIGHT: 'default',
    DARK: 'dark',
  }

  currentTheme = 'default';

  @Input() vertical: boolean = false;

  constructor(private themeService: NbThemeService,) {
    this.currentTheme = this.themeService.currentTheme;
    
    this.themeService.onThemeChange()
    .pipe(
      map(({ name }) => name),
      takeUntil(this.destroy$),
    )
    .subscribe(themeName => this.currentTheme = themeName);
  }

  toggleDirection(newTheme) {
    this.themeService.changeTheme(newTheme);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
