import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main id="contenu-principal" className="legal-page">
      <div className="container">
        <article>
          <h1>Mentions légales</h1>

          <h2>Editeur du site</h2>
          <p>Edona Shabani, entrepreneur individuel (EI)</p>
          <p>SIREN : 842 152 415</p>
          <p>SIRET : 842 152 415 00019</p>
          <p>Adresse : 7 place Albert Camus, 95210 Saint-Gratien, France</p>
          <p>TVA non applicable - article 293 B du CGI</p>

          <h2>Contact</h2>
          <ul>
            <li>Téléphone : 06 09 72 42 89</li>
            <li>Email : e.shabani@dayslegacy.com</li>
          </ul>

          <h2>Directrice de la publication</h2>
          <p>Edona Shabani</p>

          <h2>Hébergement du site</h2>
          <p>
            Le site <strong>votreconseil.guide</strong> est hébergé par{" "}
            <strong>Vercel Inc.</strong>, société de droit américain.
          </p>
          <p>
            <strong>Adresse du siège social :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          </p>
          <p>
            <strong>Site web :</strong>{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            {" — "}
            <strong>Assistance :</strong>{" "}
            <a href="https://vercel.com/help" target="_blank" rel="noopener noreferrer">
              vercel.com/help
            </a>
            .
          </p>
          <p>
            Les contenus sont servis via l&apos;infrastructure de déploiement et de diffusion de Vercel. Pour plus de
            détails sur les emplacements et la sécurité :{" "}
            <a href="https://vercel.com/docs/security" target="_blank" rel="noopener noreferrer">
              documentation Vercel — sécurité
            </a>
            .
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments présents sur ce site, notamment les textes, visuels, graphismes, logos, icônes,
            structure et mise en page, est protégé par le droit de la propriété intellectuelle. Toute reproduction,
            représentation, adaptation, diffusion ou exploitation, totale ou partielle, sans autorisation préalable
            écrite, est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations diffusées sur ce site sont fournies à titre informatif. Elles ne constituent ni un conseil
            juridique, ni un conseil fiscal, ni un conseil financier personnalisé, ni une garantie de résultat. L&apos;éditrice
            du site s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations publiées, sans pouvoir le
            garantir de manière permanente.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question concernant le site ou son contenu, vous pouvez écrire à : e.shabani@dayslegacy.com
          </p>

          <p>
            <Link href="/">Retour à l&apos;accueil</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
