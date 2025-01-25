import { Component, effect, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  #router = inject(Router);
  #activatedRoute = inject(ActivatedRoute);

  projectId = signal(1);

  constructor() {
    effect(() => {
      const id = this.projectId();

      this.#router.navigate([], {
        relativeTo: this.#activatedRoute,
        queryParams: {
          projectId: id,
        },
        queryParamsHandling: 'merge',
      });
    });
  }

  randomizeProjectId = () => {
    const projectIds = [1, 2, 3, 4];
    this.projectId.update((oldId) => {
      const currentIndex = projectIds.indexOf(oldId);
      const nextIndex = (currentIndex + 1) % projectIds.length;
      return projectIds[nextIndex];
    });
  };
}
