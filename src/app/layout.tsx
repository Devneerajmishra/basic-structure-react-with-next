// RootLayout.js
import Head from './head';
import Header from './component/header';
import Footer from './component/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,

}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
