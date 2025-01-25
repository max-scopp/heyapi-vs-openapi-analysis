import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { getProjectInfo, ProjectInfo } from '../../client-heyapi';

@Component({
  selector: 'app-hey-api-basic',
  template: `
    <h1>{{ projectInfo()?.name }}</h1>
    <p>
      Very simple, bare-metal solution well suited for low-level solutions such
      as working with devextreme.
    </p>

    <ul>
      <li>Promise-based</li>
      <li>Only fires the fetch when requested</li>
      <li>(can be) Reactive, but using an effect</li>
    </ul>
  `,
})
export class HeyApiBasicComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  readonly projectId = computed<string>(
    () => this.#queryParams()?.['projectId'] ?? ''
  );

  projectInfo = signal<ProjectInfo | undefined>(undefined);

  constructor() {
    effect(async () => {
      const projectId = this.projectId();

      const projectsByProjectIdInfo = await getProjectInfo({
        path: {
          projectId,
        },
      });

      this.projectInfo.set(projectsByProjectIdInfo.data);
    });
  }
}
