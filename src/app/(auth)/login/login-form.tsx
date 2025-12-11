'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '@/lib/schemas/auth';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { GoogleIcon } from '@/components/icons';

export default function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <>
      <div className="flex flex-col gap-3 text-center w-full">
        <h1 className="font-bold text-2xl leading-8">Log in to your account</h1>
        <p className="font-normal text-base leading-6 text-muted-foreground">
          Welcome back! Please enter your details.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
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

          {/* Password Field */}
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

          <div className="flex items-center justify-between">
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-border rounded"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-medium leading-5 text-secondary cursor-pointer">
                    Remember Me
                  </FormLabel>
                </FormItem>
              )}
            />
            <Link href="/forgot-password" className="text-sm  text-destructive underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit">Login</Button>
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
        <span className="text-secondary leading-5">Don&apos;t have an account?</span>
        <Link href="/signup" className="font-semibold text-primary underline hover:no-underline leading-5">
          Sign up
        </Link>
      </div>
    </>
  );
}
