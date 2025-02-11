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
    const data = Object.fromEntries(formData);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      toast({
        title: 'Message Sent!',
        description: 'We will get back to you soon.',
      });
    } catch (error) {
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
