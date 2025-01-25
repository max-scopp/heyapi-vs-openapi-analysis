import { Component, computed, inject, input } from '@angular/core';
import { ProjectInfoService } from './project-info.service';

@Component({
  standalone: true,
  selector: 'app-openapi-future-panel',
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
export class OpenApiFuturePanelComponent {
  visible = input.required();

  #projectInfoService = inject(ProjectInfoService);

  projectInfo = computed(() => this.#projectInfoService.projectInfo.value());
}
