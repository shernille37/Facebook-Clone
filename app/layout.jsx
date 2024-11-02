import "@/app/assets/styles/globals.css";

export const metadata = {
  title: "Facebook",
  keywords: "Social Media",
  description: "Facebook clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
