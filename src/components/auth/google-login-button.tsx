'use client';

import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from '@/components/icons';

interface GoogleLoginButtonProps {
  onSuccess?: (credentialResponse: { access_token: string }) => void;
  onError?: () => void;
}

export function GoogleLoginButton({ onSuccess, onError }: GoogleLoginButtonProps) {
  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log('Google login success:', response);
      // You can send the access_token to your backend for verification
      // or use it to fetch user info from Google
      onSuccess?.(response);
    },
    onError: () => {
      console.error('Google login failed');
      onError?.();
    },
  });

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => login()}
      className="w-full border border-border font-medium text-sm leading-5 px-4 py-2.5 rounded-lg flex items-center justify-center gap-3 h-auto"
    >
      <GoogleIcon />
      Continue with Google
    </Button>
  );
}
