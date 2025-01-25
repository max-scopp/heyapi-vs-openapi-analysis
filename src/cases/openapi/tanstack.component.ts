import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { DefaultService } from '../../client-openapi';

@Component({
  selector: 'app-openapi-tanstack',
  template: ` <h1>{{ projectInfo.data()?.name }}</h1> `,
})
export class OpenApiTanstackComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  #defaultService = inject(DefaultService);

  readonly projectId = computed<string>(
    () => this.#queryParams()?.['projectId'] ?? ''
  );

  projectInfo = injectQuery(() => ({
    queryKey: ['project', this.projectId()],
    queryFn: () =>
      lastValueFrom(this.#defaultService.getProjectInfo(this.projectId())),
  }));
}
