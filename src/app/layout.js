import "./globals.css";

export const metadata = {
  title: "Portfolio Website",
  description: "Portfolio website for Michael Asare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="">
        {children}
      </body>
    </html>
  );
}
