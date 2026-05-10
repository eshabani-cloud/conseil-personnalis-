import Link from "next/link";

export default function GestionCookiesPage() {
  return (
    <main id="contenu-principal" className="legal-page">
      <div className="container">
        <article>
          <h1>Gestion des cookies</h1>
          <p>
            Nous utilisons des cookies et autres traceurs pour faire fonctionner le site et, sous réserve de votre
            accord, mesurer son audience et améliorer nos actions publicitaires.
          </p>

          <h2>Cookies nécessaires</h2>
          <p>
            Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent notamment l&apos;affichage des
            pages, la sécurité et la mémorisation de certains choix techniques.
          </p>

          <h2>Mesure d&apos;audience et publicité</h2>
          <p>
            Des traceurs de mesure d&apos;audience ou publicitaires pourront être ajoutés ultérieurement, notamment dans le
            cadre de campagnes Google Ads. Ils ne devront être activés qu&apos;après recueil de votre consentement lorsque
            celui-ci est requis.
          </p>

          <h2>Modifier votre choix</h2>
          <p>
            Vous pouvez accepter ou refuser les cookies depuis le bandeau affiché lors de votre première visite. Une
            solution de gestion plus avancée pourra être ajoutée lors de l&apos;intégration des outils Google Ads ou
            analytics définitifs.
          </p>

          <p>
            <Link href="/">Retour à l&apos;accueil</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
