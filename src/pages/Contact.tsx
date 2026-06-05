import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Head as Helmet } from 'vite-react-ssg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import CanonicalLink from '@/components/CanonicalLink';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name ist erforderlich' }).max(100),
  email: z.string().trim().email({ message: 'Ungültige E-Mail-Adresse' }).max(255),
  message: z.string().trim().min(1, { message: 'Nachricht ist erforderlich' }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);
    try {
      contactSchema.parse(formData);
      toast({ title: 'Nachricht gesendet!', description: 'Danke für Ihre Nachricht. Wir melden uns bald.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <>
      <Helmet>
        <title>Kontakt – Lineal.online | Lineal online für Handy</title>
        <meta name="description" content="Kontaktieren Sie das Team von Lineal.online – dem kostenlosen Lineal online und Maßband für Handy, Tablet und PC." />
        <html lang="de" />
      </Helmet>
      <CanonicalLink />

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="container flex-1 py-8">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Kontakt</h1>
            <p className="mb-6 text-gray-700">
              Haben Sie eine Frage oder einen Vorschlag? Wir freuen uns auf Ihre Nachricht – füllen Sie einfach
              das Formular aus.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Name *</label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange}
                  className={errors.name ? 'border-red-500' : ''} placeholder="Ihr Name" maxLength={100} />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">E-Mail *</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''} placeholder="ihre@email.de" maxLength={255} />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Nachricht *</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange}
                  className={errors.message ? 'border-red-500' : ''} placeholder="Schreiben Sie Ihre Nachricht..."
                  rows={6} maxLength={1000} />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Senden...' : 'Nachricht senden'}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t">
              <h2 className="text-lg font-semibold mb-3 text-ruler-primary">Andere Kontaktmöglichkeiten</h2>
              <p className="text-gray-700">
                E-Mail: <a href="mailto:info@lineal.onl" className="text-ruler-primary hover:underline">info@lineal.onl</a>
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
