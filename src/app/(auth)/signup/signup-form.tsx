'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupFormData } from '@/lib/schemas/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from '@/components/icons';

export default function SignupForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <>
      <div className="flex flex-col gap-3 text-center w-full">
        <h1 className="font-bold text-2xl leading-8">Create an account</h1>
        <p className="font-normal text-base leading-6 text-muted-foreground">Start your journey with us today.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium leading-5 text-secondary">Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium leading-5 text-secondary">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium leading-5 text-secondary">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium leading-5 text-secondary">Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </Form>

      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 h-px bg-border" />
        <p className="text-sm font-medium leading-5 text-muted-foreground">OR</p>
        <div className="flex-1 h-px bg-border" />
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full  border border-border font-medium text-sm leading-5 px-4 py-2.5 rounded-lg flex items-center justify-center gap-3 h-auto"
      >
        <GoogleIcon />
        Continue with Google
      </Button>

      <div className="flex items-center justify-center gap-1 text-sm">
        <span className="text-secondary leading-5">Already have an account?</span>
        <Link href="/login" className="font-semibold text-primary underline hover:no-underline leading-5">
          Log in
        </Link>
      </div>
    </>
  );
}
