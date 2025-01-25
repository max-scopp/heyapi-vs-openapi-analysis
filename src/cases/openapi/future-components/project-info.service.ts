import { computed, inject, Injectable, resource } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { DefaultService } from '../../../client-openapi';

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

  projectInfo = resource({
    request: () => this.projectId(),
    loader: () =>
      firstValueFrom(this.#defaultService.getProjectInfo(this.projectId())),
  });
}
