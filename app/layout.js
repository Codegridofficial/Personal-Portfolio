import "../styles/globals.css";
import Logo from '../public/Logo.png';

export const metadata = {
  title: "Personal portfolio",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
