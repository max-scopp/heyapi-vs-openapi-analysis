import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getProjectInfoOptions } from '../../../client-heyapi/@tanstack/angular-query-experimental.gen';

@Component({
  standalone: true,
  selector: 'app-openapi-breadcrumb',
  template: ` <h1>{{ projectInfo.data()?.name }}</h1> `,
})
export class OpenApiBreadcrumbComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  readonly projectId = computed(() =>
    String(this.#queryParams()?.['projectId'])
  );

  projectInfo = injectQuery(() =>
    getProjectInfoOptions({
      path: {
        projectId: this.projectId(),
      },
    })
  );
}
