import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Michael Asare",
  description: "Portfolio website for Michael Asare",
  icons: {
    icon: "/logo-image.jpg"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
