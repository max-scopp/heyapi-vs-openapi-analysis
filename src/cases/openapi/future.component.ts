import { Component, signal } from '@angular/core';
import { OpenApiFutureBreadcrumbComponent } from './future-components/breadcrumb.component';
import { OpenApiFuturePanelComponent } from './future-components/panel.component';

@Component({
  selector: 'app-openapi-future',
  template: `
    <app-openapi-future-breadcrumb />

    <hr />

    <button (click)="togglePanel()">Show/Hide Details</button>

    <app-openapi-future-panel [visible]="panelVisible()" />
  `,
  imports: [OpenApiFuturePanelComponent, OpenApiFutureBreadcrumbComponent],
})
export class OpenApiFutureComponent {
  panelVisible = signal(false);
  togglePanel = () => this.panelVisible.update((oldState) => !oldState);
}
