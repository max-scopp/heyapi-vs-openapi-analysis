import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { DefaultService, ProjectInfo } from '../../../client-openapi';

@Injectable({
  providedIn: 'root',
})
export class ProjectInfoService {
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
