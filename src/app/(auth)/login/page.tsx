import { Metadata } from 'next';
import LoginForm from './login-form';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Log in to your account. Welcome back! Please enter your details to access your KOI Event Tracker account.',
};

export default function LoginPage() {
  return <LoginForm />;
}
