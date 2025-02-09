'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'H3excavationandconst@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      });

      toast({
        title: 'Message Sent!',
        description: 'We will get back to you soon.',
      });
    } catch (error: unknown) {
      console.error('Failed to send message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={isSubmitting}
      onClick={(e) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if (form)
          handleSubmit(form as unknown as React.FormEvent<HTMLFormElement>);
      }}
    >
      {isSubmitting ? 'Sending...' : 'Send'}
    </Button>
  );
}
