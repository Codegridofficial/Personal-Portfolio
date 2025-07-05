import "../styles/globals.css";

export const metadata = {
  title: "Personal portfolio"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
