import "@/assets/styles/globals.css";

export const metadata = {
  title: "Facebook",
  keywords: "Social Media",
  description: "Facebook clone",
};

export default async function PublicLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
