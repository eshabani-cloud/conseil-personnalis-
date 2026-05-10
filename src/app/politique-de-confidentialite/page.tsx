import Link from "next/link";

export default function PolitiqueConfidentialitePage() {
  return (
    <main id="contenu-principal" className="legal-page">
      <div className="container">
        <article>
          <h1>Politique de confidentialité</h1>

          <h2>1. Responsable du traitement</h2>
          <p>
            Les données personnelles collectées sur ce site sont traitées par Edona Shabani, entrepreneur individuel,
            SIREN 842 152 415, domiciliée au 7 place Albert Camus, 95210 Saint-Gratien, France.
          </p>
          <p>Contact : e.shabani@dayslegacy.com</p>

          <h2>2. Données collectées</h2>
          <p>Selon les formulaires utilisés sur le site, peuvent être collectées les données suivantes :</p>
          <ul>
            <li>Nom et prénom.</li>
            <li>Adresse e-mail.</li>
            <li>Numéro de téléphone.</li>
            <li>Toute information communiquée volontairement dans le formulaire ou lors des échanges ultérieurs.</li>
          </ul>

          <h2>3. Finalites des traitements</h2>
          <p>Les données sont collectées pour :</p>
          <ul>
            <li>Recontacter les personnes ayant laissé leurs coordonnées.</li>
            <li>Répondre aux demandes reçues via le site.</li>
            <li>Évaluer la pertinence d&apos;un accompagnement.</li>
            <li>Assurer le suivi des échanges commerciaux.</li>
            <li>
              Le cas échéant, établir des statistiques de fréquentation du site, sous réserve du respect des règles
              applicables aux cookies et traceurs.
            </li>
          </ul>

          <h2>4. Bases legales</h2>
          <p>Le traitement repose :</p>
          <ul>
            <li>Soit sur votre consentement lorsque vous transmettez volontairement vos informations via le formulaire.</li>
            <li>
              Soit sur l&apos;intérêt légitime du responsable du traitement pour répondre à une demande de contact
              professionnelle et assurer le suivi des échanges.
            </li>
          </ul>

          <h2>5. Destinataires des données</h2>
          <p>
            Les données sont destinées à Edona Shabani et, le cas échéant, à ses prestataires techniques strictement
            habilités, dans la limite de ce qui est nécessaire à leur mission : hébergeur, outil de formulaire, CRM,
            outil de prise de rendez-vous, solution d&apos;e-mailing ou de mesure d&apos;audience.
          </p>

          <h2>6. Durée de conservation</h2>
          <p>
            Les données sont conservées pendant la durée nécessaire au traitement de la demande, puis supprimées ou
            archivées selon les obligations applicables.
          </p>
          <ul>
            <li>Demandes de contact / prospects : jusqu&apos;à 3 ans à compter du dernier contact.</li>
            <li>Données nécessaires à la gestion contractuelle ou comptable : selon les durées légales applicables.</li>
          </ul>

          <h2>7. Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et, le cas
            échéant, d&apos;un droit à la portabilité de vos données.
          </p>
          <ul>
            <li>Vous pouvez exercer vos droits à l&apos;adresse suivante : e.shabani@dayslegacy.com.</li>
            <li>En cas de difficulté, vous pouvez également introduire une réclamation auprès de la CNIL.</li>
          </ul>

          <h2>8. Cookies et traceurs</h2>
          <p>
            Le site peut utiliser des cookies ou traceurs techniques nécessaires à son fonctionnement. Les traceurs non
            nécessaires, notamment à des fins de mesure d&apos;audience ou publicitaires, ne sont déposés qu&apos;après recueil
            de votre consentement lorsqu&apos;il est requis.
          </p>

          <h2>9. Sécurité</h2>
          <p>
            Le responsable du traitement met en oeuvre des mesures raisonnables de sécurité pour protéger les données
            personnelles contre la perte, l&apos;altération, l&apos;accès non autorisé ou la divulgation non autorisée.
          </p>

          <h2>10. Information formulaire</h2>
          <p>
            Les informations recueillies sur le formulaire sont enregistrées par Edona Shabani afin de vous recontacter
            et d&apos;échanger sur votre demande. Vous pouvez accéder à vos données, les rectifier, demander leur effacement
            ou exercer vos autres droits en écrivant à e.shabani@dayslegacy.com.
          </p>
          <p>Dernière mise à jour : mai 2026.</p>

          <p>
            <Link href="/">Retour à l&apos;accueil</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
