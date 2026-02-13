import { cookies } from 'next/headers';
import { STORAGE_KEYS } from '../constants';

export const getTokenFromCookies = async (): Promise<string | null> => {
  const isServer = typeof window === 'undefined';
  if (isServer) return (await cookies()).get(STORAGE_KEYS.AUTH_TOKEN_COOKIE)?.value || null;
  const match = document.cookie.match(new RegExp('(^| )' + STORAGE_KEYS.AUTH_TOKEN_COOKIE + '=([^;]+)'));
  return match ? match[2] : null;
};
