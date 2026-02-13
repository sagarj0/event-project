import { setTokenToCookies } from '@/lib/helper/set-token';
import { ROUTES } from '@/lib/routes';
import { LoginFormData, SignupFormData } from '@/lib/schemas/auth';
import { credsLogin, googleLogin, signup } from '@/services/auth';
import { GoogleLoginReq, LoginRes, Signup } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useGoogleLoginBackend = () => {
  const mutation = useMutation<LoginRes, Error, GoogleLoginReq>({
    mutationFn: googleLogin,
    onSuccess: (data) => {
      console.log('Google login successful:', data);
    },
    onError: (error) => {
      console.error('Google login failed:', error);
    },
  });

  return mutation;
};

export const useSignup = () => {
  const mutation = useMutation<Signup, Error, SignupFormData>({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log('Signup successful:', data);
    },
    onError: (error) => {
      console.error('Signup failed:', error);
    },
  });

  return mutation;
};

export const useCredsLogin = () => {
  const router = useRouter();
  const mutation = useMutation<LoginRes, Error, LoginFormData>({
    mutationFn: (loginData) => {
      const response = credsLogin(loginData);
      return response;
    },
    onSuccess: (data) => {
      const { key: token } = data;
      setTokenToCookies(token);
      router.push(ROUTES.DASHBOARD);
    },
    onError: (error) => {
      console.error('Credentials login failed:', error);
    },
  });

  return mutation;
};
