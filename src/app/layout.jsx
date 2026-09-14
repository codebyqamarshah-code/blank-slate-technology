import ClientProviders from '../components/layout/ClientProviders';
import '../index.css';

export const metadata = {
  title: 'Blank Slate Technology',
  description: 'We design and build digital products, intelligent systems, and technology solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fab icon.png" />
      </head>
      <body suppressHydrationWarning>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
