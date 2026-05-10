import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci pour votre demande | DAYS LEGACY",
  description: "Votre message a bien été reçu. Nous vous recontactons sous 24 à 48 heures.",
  robots: { index: false, follow: true },
};

const calendlyLink = "https://calendly.com/e-shabani-dayslegacy/30min";

export default function MerciPage() {
  return (
    <main id="contenu-principal" className="legal-page">
      <div className="container">
        <article>
          <h1>Merci pour votre demande</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--texte-secondaire)", marginBottom: "1.25rem" }}>
            Votre message a bien été transmis. Nous vous recontactons dans un délai maximum de{" "}
            <strong>48 heures</strong>, en principe sous <strong>24 heures</strong> en jours ouvrés, selon la charge du
            moment.
          </p>
          <p style={{ color: "var(--texte-secondaire)", marginBottom: "1.5rem" }}>
            Si vous préférez ne pas attendre, vous pouvez réserver directement un créneau d&apos;échange de 30 minutes.
          </p>
          <p style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            <Link href="/" className="btn btn-primary" style={{ textDecoration: "none" }}>
              Retour à l&apos;accueil
            </Link>
            <a className="btn btn-secondary" href={calendlyLink} target="_blank" rel="noopener noreferrer">
              Choisir un créneau sur Calendly
            </a>
          </p>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/mentions-legales">Mentions légales</Link>
            {" · "}
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
