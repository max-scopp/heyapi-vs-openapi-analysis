import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getProjectInfoOptions } from '../../../client-heyapi/@tanstack/angular-query-experimental.gen';

@Component({
  standalone: true,
  selector: 'app-hey-api-panel',
  template: ` <h1>{{ projectInfo.data()?.name }}</h1> `,
  styles: [
    `
      :host {
        display: none;

        position: absolute;

        top: 0;
        right: 0;

        width: 300px;
        height: 100%;

        background: hsla(0deg 100% 100% / 12%);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 5px hsla(0deg 100% 0% / 24%);
      }

      :host(.visible) {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  host: {
    '[class.visible]': 'visible()',
  },
})
export class HeyApiPanelComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  visible = input.required();

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
