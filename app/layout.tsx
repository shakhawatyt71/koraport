import "./globals.css";

export const metadata = {
  title: "Kora Port",
  description: "Premium Men's Fashion in Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=GTM-TWPPQPTG'+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TWPPQPTG');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* ✅ GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWPPQPTG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        import { CartProvider } from "@/context/CartContext";

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">KORA PORT</div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/products">Shop</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Kora Port. All rights reserved.
    </footer>
  );
}
