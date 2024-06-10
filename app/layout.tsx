import '@/app/ui/global.css';
import { sans } from './ui/fonts';
import Footer from './global-components/footer';
import Header from './global-components/header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${sans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
