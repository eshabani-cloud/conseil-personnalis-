import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://votreconseil.guide"),
  title: "Accompagnement stratégique du dirigeant | DAYS LEGACY",
  description:
    "Accompagnement stratégique pour dirigeants de PME et entrepreneurs : rémunération, trésorerie d'entreprise, patrimoine personnel et professionnel.",
  keywords: [
    "accompagnement dirigeant",
    "optimisation rémunération dirigeant",
    "trésorerie entreprise",
    "stratégie patrimoniale dirigeant",
    "patrimoine chef d'entreprise",
    "optimisation patrimoniale entrepreneur",
  ],
  openGraph: {
    title: "Accompagnement stratégique du dirigeant | DAYS LEGACY",
    description:
      "Une approche globale pour structurer rémunération, trésorerie d'entreprise et patrimoine personnel et professionnel.",
    url: "https://votreconseil.guide",
    siteName: "DAYS LEGACY",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={sourceSans.variable}>
      <body>
        <a className="skip-link" href="#contenu-principal">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
