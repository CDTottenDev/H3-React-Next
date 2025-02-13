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
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: '✅ Message Sent!',
        description: 'We will get back to you soon.',
        className: 'bg-green-50 text-green-800 border-green-100',
      });
      
      // Reset form after successful submission
      if (event.currentTarget) {
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: '❌ Error',
        description: error instanceof Error ? error.message : 'Failed to send message',
        variant: 'destructive',
        className: 'bg-red-50 text-red-800 border-red-100',
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
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </Button>
  );
}
