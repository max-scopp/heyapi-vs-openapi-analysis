import { Component, computed, inject } from '@angular/core';
import { ProjectInfoService } from './project-info.service';

@Component({
  standalone: true,
  selector: 'app-openapi-extended-breadcrumb',
  template: ` <h1>{{ projectInfo()?.name }}</h1> `,
})
export class OpenApiExtendedBreadcrumbComponent {
  #projectInfoService = inject(ProjectInfoService);

  projectInfo = computed(() => this.#projectInfoService.projectInfo());
}
