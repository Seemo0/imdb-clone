import Header from '@/components/Header';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Header */}
      <Header />

      <body>{children}</body>
    </html>
  );
}
