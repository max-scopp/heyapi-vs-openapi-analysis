import { inject, Injector, runInInjectionContext } from '@angular/core';

export function boundInjectionContext<
  TResult,
  TArgs extends unknown[],
  TFunc extends (...args: TArgs) => TResult
>(func: TFunc) {
  const injector = inject(Injector);

  return (...args: TArgs) =>
    runInInjectionContext(injector, () => func(...args));
}
