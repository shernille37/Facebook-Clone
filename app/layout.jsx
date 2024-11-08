import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

import { AuthStoreProvider } from "@/providers/AuthStateProvider";

export const metadata = {
  title: "Facebook",
  keywords: "Social Media",
  description: "Facebook clone",
};

export default function RootLayout({ children }) {
  return (
    <>
      <AuthStoreProvider>
        <html lang="en">
          <body>
            <main>{children}</main>
          </body>
        </html>
      </AuthStoreProvider>
    </>
  );
}
