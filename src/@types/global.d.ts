declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_ID: string;
      NEXT_PUBLIC_GOOGLE_MAP_API: string;
    }
  }

  interface Window {
    google: {
      maps: any;
    };
  }
}

export {};
