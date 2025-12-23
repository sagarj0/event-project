import { STORAGE_KEYS } from '@/lib/constants';
import axios, { AxiosInstance } from 'axios';

class AxiosHelper {
  private axiosInstance: AxiosInstance;
  private abortControllers: Set<AbortController> = new Set();

  constructor() {
    this.axiosInstance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '' });
    this.initializeInterceptors();
  }

  private createAbortSignal(): AbortSignal {
    const controller = new AbortController();
    this.abortControllers.add(controller);
    return controller.signal;
  }

  public abortAllSignals() {
    this.abortControllers.forEach((controller) => controller.abort());
    this.abortControllers.clear();
  }

  private getTokenFromCookies() {
    if (typeof window === 'undefined') return null;

    // Use standard document.cookie instead of experimental cookieStore
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith(`${STORAGE_KEYS.AUTH_TOKEN_COOKIE}=`));

    return tokenCookie ? tokenCookie.split('=')[1] : null;
  }

  private handleUnauthorized() {
    if (typeof window === 'undefined') return;

    // Clear the cookie using the same approach as getTokenFromCookies
    document.cookie = `${STORAGE_KEYS.AUTH_TOKEN_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload();
  }

  private readonly initializeInterceptors = () => {
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        const token = this.getTokenFromCookies();

        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Token ${token}`;
        }

        if (!config.signal) config.signal = this.createAbortSignal();
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          if (error.response.status === 401) this.handleUnauthorized();
        } else if (error.request) console.warn('Network error:', error.message);
        else console.error('Request setup error:', error.message);

        return Promise.reject(error);
      }
    );
  };

  get = (url: string, params?: any) => this.axiosInstance.get(url, { params });
  post = (url: string, data?: any) => this.axiosInstance.post(url, data);
  put = (url: string, data: any) => this.axiosInstance.put(url, data);
  patch = (url: string, data: any) => this.axiosInstance.patch(url, data);
  delete = (url: string, params?: any) => this.axiosInstance.delete(url, { params });
}

export const api = new AxiosHelper();
