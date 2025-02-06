'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { requestDemo } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-6 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(168,85,247,0.4)]"
    >
      <span className="relative z-10 flex items-center gap-2">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Button>
  );
}

export function DemoForm() {
  const [state, formAction] = useFormState(requestDemo, initialState);

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success('Demo request submitted successfully! We\'ll be in touch soon.');
    }
  }, [state]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-md rounded-2xl border border-neutral-800 bg-black/50 p-8 backdrop-blur-xl"
    >
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-200">
            Work Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-12 border-neutral-800 bg-neutral-900/50 placeholder:text-neutral-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium text-neutral-200">
            Company Name
          </label>
          <Input
            id="companyName"
            name="companyName"
            required
            placeholder="Your Company"
            className="h-12 border-neutral-800 bg-neutral-900/50 placeholder:text-neutral-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="useCase" className="text-sm font-medium text-neutral-200">
            Tell us about your use case
          </label>
          <Textarea
            id="useCase"
            name="useCase"
            required
            placeholder="What would you like to achieve with our AI solutions?"
            className="min-h-[100px] border-neutral-800 bg-neutral-900/50 placeholder:text-neutral-500"
          />
        </div>

        <SubmitButton />
      </form>
    </motion.div>
  );
} 