/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  readonly VITE_MODO: string;
  readonly VITE_NOME: string;
  readonly VITE_NOME_CURTO: string;
  readonly VITE_SIDEBAR_MAX_WIDTH: string;
  readonly VITE_FIREBASE_APIKEY: string;
  readonly VITE_FIREBASE_AUTHDOMAIN: string;
  readonly VITE_FIREBASE_DATABASEURL: string;
  readonly VITE_FIREBASE_PROJECTID: string;
  readonly VITE_FIREBASE_STORAGEBUCKET: string;
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string;
  readonly VITE_FIREBASE_APPID: string;
  readonly VITE_FIREBASE_MEASUREMENTID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
