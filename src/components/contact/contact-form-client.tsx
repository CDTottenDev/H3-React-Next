'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to your server
    // For demonstration, we'll just wait for a second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Form submitted successfully!');
  };

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={isSubmitting}
      onClick={handleSubmit}
    >
      {isSubmitting ? 'Sending...' : 'Send'}
    </Button>
  );
}
