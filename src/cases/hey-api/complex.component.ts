import { Component, signal } from '@angular/core';
import { HeyApiBreadcrumbComponent } from './complex-components/breadcrumb.component';
import { HeyApiPanelComponent } from './complex-components/panel.component';

@Component({
  selector: 'app-hey-api-complex',
  template: `
    <app-hey-api-breadcrumb />

    <hr />

    <button (click)="togglePanel()">Show/Hide Details</button>

    <app-hey-api-panel [visible]="panelVisible()" />

    <p>
      Everything above the most basic fetch is covered, fully integrated with
      ready-to-use (about to be) non-experimental features using the highly
      promoted declarative and reactive apis. Comes with everything you need,
      ever.
    </p>

    <a
      href="https://github.com/TanStack/query/discussions/6293#discussioncomment-11382960"
      target="_blank"
      >Re: TanStack Query Angular</a
    >

    <ul>
      <li>Promise-based</li>
      <li>Simple Usage</li>
      <li>No Glue Code</li>
      <li>Loosely coupled component</li>
      <li>Full State Management</li>
      <li>Proper no-fuzz, strongly typed error handling</li>
      <li>Reactive</li>
      <li>Data Sharing</li>
    </ul>
  `,
  imports: [HeyApiBreadcrumbComponent, HeyApiPanelComponent],
})
export class HeyApiComplexComponent {
  panelVisible = signal(false);
  togglePanel = () => this.panelVisible.update((oldState) => !oldState);
}
