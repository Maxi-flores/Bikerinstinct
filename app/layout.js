import "./globals.css";

export const metadata = {
  title: "Bikerinstinct V2",
  description: "Premium rim kits and custom motorcycle styling storefront."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
