'use server';

import { z } from "zod";
import { revalidatePath } from "next/cache";

const demoRequestSchema = z.object({
  email: z.string().email(),
  companyName: z.string().min(2),
  useCase: z.string().min(10),
});

export async function requestDemo(formData: FormData) {
  const email = formData.get('email');
  const companyName = formData.get('companyName');
  const useCase = formData.get('useCase');

  const result = demoRequestSchema.safeParse({
    email,
    companyName,
    useCase,
  });

  if (!result.success) {
    return { error: 'Invalid form data' };
  }

  // Here you would typically:
  // 1. Save to database
  // 2. Send confirmation email
  // 3. Notify sales team
  // For demo purposes, we'll just simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  revalidatePath('/');
  return { success: true };
}

export async function subscribeToUpdates(formData: FormData) {
  'use server';
  
  const email = formData.get('email');
  if (!email || typeof email !== 'string') {
    return { error: 'Invalid email' };
  }

  // Simulate subscription process
  await new Promise(resolve => setTimeout(resolve, 500));

  revalidatePath('/');
  return { success: true };
} 