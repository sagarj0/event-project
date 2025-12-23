import { api } from '@/lib/axios';
import { ENDPOINTS } from '@/lib/endpoints';
import { SignupFormData } from '@/lib/schemas/auth';
import { Signup } from '@/types/auth';

export const signup = async (signupData: SignupFormData): Promise<Signup> => {
  const res = await api.post(ENDPOINTS.SIGNUP, signupData);
  const { data } = res;
  return data;
};
