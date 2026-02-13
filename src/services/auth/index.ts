import { api } from '@/lib/axios';
import { ENDPOINTS } from '@/lib/endpoints';
import { SignupFormData } from '@/lib/schemas/auth';
import { GoogleLoginReq, LoginReq, LoginRes, Signup } from '@/types/auth';

export const signup = async (signupData: SignupFormData): Promise<Signup> => {
  const res = await api.post(ENDPOINTS.SIGNUP, signupData);
  const { data } = res;
  return data;
};

export const credsLogin = async (loginData: LoginReq): Promise<LoginRes> => {
  const res = await api.post(ENDPOINTS.CREDS_LOGIN, loginData);
  const { data } = res;
  return data;
};

export const googleLogin = async (googleLogin: GoogleLoginReq): Promise<LoginRes> => {
  const res = await api.post(ENDPOINTS.GOOGLE_LOGIN, googleLogin);
  const { data } = res;
  return data;
};
