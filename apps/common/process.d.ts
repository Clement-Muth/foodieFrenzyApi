declare namespace NodeJS {
  export interface ProcessEnv {
    API_URL: string;
    HOSTNAME: string;
    IS_DEV: string;
    API_KEY: string;
    AUTH_DOMAIN: string;
    DATABASE_URL: string;
    PROJECT_ID: string;
    STORAGE_BUCKET: string;
    MESSAGING_SENDER_ID: string;
    APP_ID: string;
  }
}
