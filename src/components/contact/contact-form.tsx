import { ContactFormClient } from './contact-form-client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  return (
    <div className="fixed inset-0 z-50 mt-4 bg-black/50">
      <div className="bg-background mx-auto w-full max-w-4xl rounded-lg p-24 shadow-lg">
        <button onClick={onClose} className="float-right">
          ×
        </button>
        <h2 className="mb-6 text-center text-2xl font-bold">Contact Us</h2>
        <form
          className="grid gap-6 md:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4 md:order-2">
            <div>
              <Input type="text" placeholder="Name" name="name" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                required
              />
            </div>
            <ContactFormClient />
          </div>
          <div className="md:order-1">
            <Textarea
              placeholder="Your message"
              name="message"
              className="h-full min-h-[200px] md:min-h-[300px]"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
