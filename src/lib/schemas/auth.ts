import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  rememberMe: z.boolean().default(false).optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const signupSchema = z
  .object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    re_password: z.string().min(8, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords don't match",
    path: ['re_password'],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
