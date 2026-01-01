import Script from "next/script";

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* HubSpot Tracking Script */}
      {/* 
        HubSpot tracking script
        - Contactページ限定
        - hubspotutk を取得するため
        */}
      <Script
        id="hubspot-tracking"
        strategy="afterInteractive"
        src={`https://js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
      />
      {children}
    </>
  );
}
