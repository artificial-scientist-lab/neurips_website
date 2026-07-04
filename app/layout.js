import "./globals.css";

export const metadata = {
  title: "Learn2Design Competition",
  description:
    "Learn2Design NeurIPS competition website for gravitational-wave detector design algorithms.",
  icons: {
    icon: "/asl_icon.png",
    shortcut: "/asl_icon.png",
    apple: "/asl_icon.png"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
