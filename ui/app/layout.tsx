import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Sidebar from '@/components/Sidebar';
import { Toaster } from 'sonner';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Perplexica - Chat with the internet',
  description:
    'Perplexica is an AI powered chatbot that is connected to the internet.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={cn('h-full', montserrat.className)}>
        <Sidebar>{children}</Sidebar>
        <Toaster
          toastOptions={{
            unstyled: true,
            classNames: {
              toast:
                'bg-[#111111] text-white rounded-lg p-4 flex flex-row items-center space-x-2',
            },
          }}
        />
      </body>
    </html>
  );
}
