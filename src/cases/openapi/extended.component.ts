import { Component, signal } from '@angular/core';
import { OpenApiExtendedBreadcrumbComponent } from './extended-components/breadcrumb.component';
import { OpenApiExtendedPanelComponent } from './extended-components/panel.component';

@Component({
  selector: 'app-openapi-extended',
  template: `
    <app-openapi-extended-breadcrumb />

    <hr />

    <button (click)="togglePanel()">Show/Hide Details</button>

    <app-openapi-extended-panel [visible]="panelVisible()" />
  `,
  imports: [OpenApiExtendedBreadcrumbComponent, OpenApiExtendedPanelComponent],
})
export class OpenApiExtendedComponent {
  panelVisible = signal(false);
  togglePanel = () => this.panelVisible.update((oldState) => !oldState);
}
