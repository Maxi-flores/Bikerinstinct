import "./globals.css";

export const metadata = {
  title: "Bikerinstinct V2",
  description: "Premium motorcycle lifestyle storefront for rider-built leather and custom gear.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
