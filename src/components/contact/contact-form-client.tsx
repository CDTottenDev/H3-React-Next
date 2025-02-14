'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      <button type="submit" className="hidden" aria-hidden="true" />
    </>
  );
}
