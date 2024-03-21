export const ThemeActionTypes = {
  /** 테마 변경 */
  CHANGE_THEME: "CHANGE_THEME",
  /** 기본 시스템 테마 */
  SET_SYSTEM_THEME: "SET_SYSTEM_THEME",
} as const;

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type ChangeThemePayload = {
  theme: string;
};

type SetSystemThemePayload = {
  theme: string;
};

export namespace ThemeManager {
  export interface State {
    systemTheme: string;
    theme: string;
    isLight: boolean;
  }

  type Payload = {
    [ThemeActionTypes.CHANGE_THEME]: ChangeThemePayload;
    [ThemeActionTypes.SET_SYSTEM_THEME]: SetSystemThemePayload;
  };

  export type Action = ActionMap<Payload>[keyof ActionMap<Payload>];
}
