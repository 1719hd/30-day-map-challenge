export interface RouteMatch {
  year?: number;
  slug?: string;
  isNotFound?: boolean;
}

export class MarathonRouter {
  // Get the correct base path (respects Vite's base config and GitHub Pages subpaths)
  public static getBasePath(): string {
    return import.meta.env.BASE_URL || '/';
  }

  public static parseCurrentPath(): RouteMatch {
    const basePath = MarathonRouter.getBasepathClean();
    let pathname = globalThis.location.pathname;

    // Безопасное удаление префикса репозитория без ошибок со сдвигом индексов
    if (basePath !== '/' && pathname.startsWith(basePath)) {
      pathname = '/' + pathname.slice(basePath.length);
    }

    const segments = pathname.replace(/\/$/, '').split('/').filter(Boolean);

    if (segments.length === 1 && !isNaN(Number(segments[0]))) {
      return { year: Number(segments[0]) };
    }

    if (segments.length === 2 && !isNaN(Number(segments[0]))) {
      return {
        year: Number(segments[0]),
        slug: segments[1],
      };
    }

    if (segments.length === 0) {
      return {};
    }

    return { isNotFound: true };
  }

  private static getBasepathClean(): string {
    return import.meta.env.BASE_URL || '/';
  }

  // Smart back navigation: uses history if available, falls back to home base URL
  public static smartBack(): void {
    if (globalThis.history.length > 1) {
      globalThis.history.back();
    } else {
      globalThis.location.href = MarathonRouter.getBasePath();
    }
  }
}