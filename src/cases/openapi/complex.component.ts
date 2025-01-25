import { Component, signal } from '@angular/core';
import { OpenApiBreadcrumbComponent } from './complex-components/breadcrumb.component';
import { OpenApiPanelComponent } from './complex-components/panel.component';

@Component({
  selector: 'app-openapi-complex',
  template: `
    <app-openapi-breadcrumb />

    <hr />

    <button (click)="togglePanel()">Show/Hide Details</button>

    <app-openapi-panel [visible]="panelVisible()" />
  `,
  imports: [OpenApiBreadcrumbComponent, OpenApiPanelComponent],
})
export class OpenApiComplexComponent {
  panelVisible = signal(false);
  togglePanel = () => this.panelVisible.update((oldState) => !oldState);
}
