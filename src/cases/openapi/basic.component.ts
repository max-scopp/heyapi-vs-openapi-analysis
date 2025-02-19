import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { DefaultService } from '../../client-openapi';

@Component({
  selector: 'app-openapi-basic',
  template: `
    <h1>{{ projectInfo()?.name }}</h1>

    <ul>
      <li>Obserables</li>
      <li>No State Management</li>
      <li>
        Not Reactive (can be done, but required manual synchronization - riskier
        than effect)
      </li>
      <li>Might require a bigger mental picture of the Controllers</li>
    </ul>
  `,
})
export class OpenApiBasicComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  #defaultService = inject(DefaultService);

  readonly projectId = computed<string>(
    () => this.#queryParams()?.['projectId'] ?? ''
  );

  projectInfo = toSignal(this.#defaultService.getProjectInfo(this.projectId()));
}
