import { Component, signal } from '@angular/core';
import { HeyApiBreadcrumbComponent } from './complex-components/breadcrumb.component';
import { HeyApiPanelComponent } from './complex-components/panel.component';

@Component({
  standalone: true,
  selector: 'app-hey-api-complex',
  template: `
    <app-hey-api-breadcrumb />

    <hr />

    <button (click)="togglePanel()">Show/Hide Details</button>

    <app-hey-api-panel [visible]="panelVisible()" />
  `,
  imports: [HeyApiBreadcrumbComponent, HeyApiPanelComponent],
})
export class HeyApiComplexComponent {
  panelVisible = signal(false);
  togglePanel = () => this.panelVisible.update((oldState) => !oldState);
}
