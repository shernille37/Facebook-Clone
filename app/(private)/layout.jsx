import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

import { AuthStoreProvider } from "@/providers/AuthStateProvider";
import AuthWrapper from "@/components/AuthWrapper";

export const metadata = {
  title: "Facebook",
  keywords: "Social Media",
  description: "Facebook clone",
};
export default async function RootLayout({ children }) {
  return (
    <>
      <AuthStoreProvider>
        <html lang="en">
          <body>
            <AuthWrapper>
              <Navbar />
              <main>{children}</main>
            </AuthWrapper>
          </body>
        </html>
      </AuthStoreProvider>
    </>
  );
}
