import { Metadata } from 'next';
import SignupForm from './signup-form';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create your account. Join KOI Event Tracker to manage your events efficiently.',
};

export default function SignupPage() {
  return <SignupForm />;
}
