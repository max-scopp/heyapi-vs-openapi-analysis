import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProjectInfo } from '../../client-heyapi';
import { DefaultService } from '../../client-openapi';

@Component({
  selector: 'app-openapi-basic',
  template: ` <h1>{{ projectInfo()?.name }}</h1> `,
})
export class OpenApiBasicComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  #defaultService = inject(DefaultService);

  readonly projectId = computed<string>(
    () => this.#queryParams()?.['projectId'] ?? ''
  );

  projectInfo = signal<ProjectInfo | null>(null);

  constructor() {
    effect(() => {
      this.#defaultService
        .getProjectInfo(this.projectId())
        .subscribe((response) => {
          this.projectInfo.set(response);
        });
    });
  }
}
