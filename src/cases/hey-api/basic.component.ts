import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { getProjectInfo, ProjectInfo } from '../../client-heyapi';

@Component({
    selector: 'app-hey-api-basic',
    template: ` <h1>{{ projectInfo()?.name }}</h1> `,
    standalone: false
})
export class HeyApiBasicComponent implements OnInit {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  readonly projectId = computed<string>(
    () => this.#queryParams()?.['projectId'] ?? ''
  );

  projectInfo = signal<ProjectInfo | null>(null);

  async ngOnInit() {
    const projectId = this.projectId();

    if (!projectId) {
      throw new Error('Component expects project id');
    }

    const projectsByProjectIdInfo = await getProjectInfo({
      path: {
        projectId,
      },
    });

    if (!projectsByProjectIdInfo.data) {
      throw new Error('Failed to load project infos');
    }

    this.projectInfo.set(projectsByProjectIdInfo.data);
  }
}
