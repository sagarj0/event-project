import { STORAGE_KEYS } from '../constants';

export const setTokenToCookies = (token: string) => {
  document.cookie = `${STORAGE_KEYS.AUTH_TOKEN_COOKIE}=${token}; path=/; max-age=${
    7 * 24 * 60 * 60
  }; secure; samesite=strict`;
};
