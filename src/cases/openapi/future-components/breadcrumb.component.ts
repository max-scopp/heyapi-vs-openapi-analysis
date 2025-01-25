import { Component, computed, inject } from '@angular/core';
import { ProjectInfoService } from './project-info.service';

@Component({
  selector: 'app-openapi-future-breadcrumb',
  template: ` <h1>{{ projectInfo()?.name }}</h1> `,
})
export class OpenApiFutureBreadcrumbComponent {
  #projectInfoService = inject(ProjectInfoService);

  projectInfo = computed(() => this.#projectInfoService.projectInfo.value());
}
