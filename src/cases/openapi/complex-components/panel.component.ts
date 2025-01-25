import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { DefaultService } from '../../../client-openapi';

@Component({
  selector: 'app-openapi-panel',
  template: ` <h1>{{ projectInfo()?.name }}</h1> `,
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
export class OpenApiPanelComponent {
  #activatedRoute = inject(ActivatedRoute);
  #queryParams = toSignal(this.#activatedRoute.queryParams);

  visible = input.required();

  #defaultService = inject(DefaultService);

  readonly projectId = computed<string>(
    () => this.#queryParams()?.['projectId'] ?? ''
  );

  projectInfo = toSignal(this.#defaultService.getProjectInfo(this.projectId()));
}
