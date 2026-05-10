"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const calendlyLink = "https://calendly.com/e-shabani-dayslegacy/30min";

type FormState = "idle" | "loading" | "error";
type CookieChoice = "accepted" | "refused" | null;

export default function Home() {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>("idle");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieChoice, setCookieChoice] = useState<CookieChoice | undefined>(undefined);

  useEffect(() => {
    const raw = localStorage.getItem("cookie-consent");
    if (raw === "accepted" || raw === "refused") {
      setCookieChoice(raw);
    } else {
      setCookieChoice(null);
    }
  }, []);

  const scrollToContact = () => {
    setMenuOpen(false);
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/e.shabani@dayslegacy.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      form.reset();
      router.push("/merci");
    } catch {
      setFormState("error");
    }
  };

  const navLinkClass = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="DAYS LEGACY — Accueil">
            <span className="brand-logo-wrap">
              <Image src="/logo-dsl.svg" alt="" width={86} height={56} priority />
            </span>
            <span className="brand-text">
              <span>Accompagnement stratégique personnalisé</span>
              <span style={{ color: "var(--bleu-france-fonce)" }}>via DAYS LEGACY</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Navigation principale">
            <a href="#accompagnement" onClick={navLinkClass}>
              Accompagnement
            </a>
            <a href="#methode" onClick={navLinkClass}>
              Méthode
            </a>
            <a href="#faq" onClick={navLinkClass}>
              FAQ
            </a>
            <a href="#contact" onClick={navLinkClass}>
              Contact
            </a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "auto" }}>
            <button type="button" className="btn btn-primary" onClick={scrollToContact}>
              Prendre rendez-vous
            </button>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? "Fermer" : "Menu"}
            </button>
          </div>
        </div>

        <nav
          id="menu-mobile"
          className={`mobile-nav container ${menuOpen ? "is-open" : ""}`}
          aria-label="Navigation mobile"
        >
          <a href="#accompagnement" onClick={navLinkClass}>
            Accompagnement
          </a>
          <a href="#methode" onClick={navLinkClass}>
            Méthode
          </a>
          <a href="#faq" onClick={navLinkClass}>
            FAQ
          </a>
          <a href="#contact" onClick={navLinkClass}>
            Contact
          </a>
          <button type="button" className="btn btn-secondary" style={{ marginTop: "0.35rem" }} onClick={scrollToContact}>
            Envoyer une demande
          </button>
        </nav>
      </header>

      <main id="contenu-principal">
        <section className="hero" aria-labelledby="titre-hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Accompagnement stratégique du dirigeant</p>
              <h1 id="titre-hero">
                Dirigeant de PME ou entrepreneur rentable, fortement imposé, vous voulez optimiser votre rémunération,
                votre trésorerie d&apos;entreprise et structurer votre patrimoine personnel et professionnel.
              </h1>
              <p className="lead">
                Un accompagnement stratégique global pour vous aider à mieux organiser vos décisions patrimoniales,
                financières, immobilières et fiscales, avec une lecture claire de votre situation.
              </p>
              <div className="hero-cta">
                <button type="button" className="btn btn-primary" onClick={scrollToContact}>
                  Identifier mes optimisations potentielles
                </button>
                <a className="btn btn-secondary" href={calendlyLink} target="_blank" rel="noopener noreferrer">
                  Je préfère choisir un créneau maintenant
                </a>
              </div>
            </div>
            <aside className="panel" aria-labelledby="encadre-potentiel">
              <h2 id="encadre-potentiel">Voir si des optimisations concrètes existent</h2>
              <ul>
                <li>Rémunération du dirigeant, fiscalité et arbitrages personnels.</li>
                <li>Trésorerie d&apos;entreprise disponible et stratégie d&apos;utilisation.</li>
                <li>Cohérence entre patrimoine privé, professionnel et immobilier.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Trois sujets qui peuvent coûter cher au dirigeant</h2>
            <div className="cards">
              <article className="card">
                <h3>Réduire les pertes liées à une mauvaise structuration</h3>
                <p>
                  Un dirigeant peut gagner beaucoup d&apos;argent et pourtant en perdre une partie à cause d&apos;une
                  rémunération mal pensée, d&apos;une fiscalité mal anticipée ou d&apos;un patrimoine personnel et
                  professionnel mal structuré.
                </p>
              </article>
              <article className="card">
                <h3>Mieux utiliser la trésorerie d&apos;entreprise disponible</h3>
                <p>
                  Pour éviter de laisser dormir de la trésorerie sans stratégie claire, sans objectif précis et sans
                  cohérence avec vos enjeux personnels ou professionnels.
                </p>
              </article>
              <article className="card">
                <h3>Éviter les décisions patrimoniales coûteuses</h3>
                <p>
                  Grâce à une vision globale de votre situation et un accompagnement stratégique sur vos décisions
                  patrimoniales, financières et immobilières.
                </p>
              </article>
            </div>
            <div className="cta-strip">
              <p>
                Laissez vos coordonnées pour être recontacté et évaluer si des pistes concrètes peuvent être identifiées
                sur votre rémunération, votre trésorerie ou votre organisation patrimoniale.
              </p>
              <button type="button" className="btn btn-primary" onClick={scrollToContact}>
                Voir si ma situation peut être optimisée
              </button>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="accompagnement">
          <div className="container">
            <h2>Exemples d&apos;accompagnement</h2>
            <div className="cards">
              <article className="card">
                <h3>Prendre des décisions en connaissance de cause</h3>
                <p>
                  Avant d&apos;acheter, de conserver ou d&apos;arbitrer un bien, nous vous aidons à mesurer la rentabilité,
                  la fiscalité, l&apos;impact sur votre trésorerie et la cohérence avec votre situation patrimoniale globale.
                </p>
              </article>
              <article className="card">
                <h3>Anticiper la transmission de votre patrimoine</h3>
                <p>
                  Une succession peut vite devenir lourde à gérer si rien n&apos;a été préparé. Nous vous aidons à
                  anticiper les enjeux, les coûts potentiels et les leviers d&apos;organisation pour protéger votre patrimoine.
                </p>
              </article>
              <article className="card">
                <h3>Mieux comprendre vos actifs financiers</h3>
                <p>
                  Allocation, objectifs, horizon, risque, fiscalité, complément de revenus : nous vous aidons à prendre
                  des décisions d&apos;investissement plus structurées et mieux adaptées à votre situation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="methode">
          <div className="container">
            <h2>Des analyses rapides pour éclairer vos décisions</h2>
            <p className="section-intro">
              L&apos;objectif est de rester concret : identifier rapidement les sujets à potentiel, puis décider seulement
              ensuite si un accompagnement plus approfondi mérite d&apos;être engagé.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Audit dirigeant express 48 h</h3>
                <p>
                  Une première lecture de votre rémunération, de votre trésorerie d&apos;entreprise et de vos arbitrages
                  patrimoniaux pour repérer les points qui méritent une analyse plus poussée.
                </p>
              </article>
              <article className="card">
                <h3>Étude successorale express 48 h</h3>
                <p>
                  Une approche synthétique pour comprendre les enjeux de transmission, les risques d&apos;organisation et les
                  leviers à étudier avec les bons interlocuteurs.
                </p>
              </article>
              <article className="card">
                <h3>Lecture stratégique globale</h3>
                <p>
                  Une vision d&apos;ensemble pour relier fiscalité, immobilier, actifs financiers, société et patrimoine
                  personnel sans multiplier les décisions isolées.
                </p>
              </article>
            </div>
            <div className="cta-strip">
              <p>Une première analyse peut suffire à révéler des incohérences, des frais ou des arbitrages à revoir.</p>
              <button type="button" className="btn btn-primary" onClick={scrollToContact}>
                Demander une première lecture de ma situation
              </button>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container">
            <div className="reassurance">
              <h2>Une approche globale, une lecture chiffrée</h2>
              <p>
                L&apos;objectif n&apos;est pas de vendre une solution isolée, mais de clarifier les décisions qui structurent votre
                rémunération, votre trésorerie d&apos;entreprise et votre patrimoine. Les sujets juridiques et fiscaux peuvent
                être coordonnés avec des partenaires compétents lorsque votre situation le nécessite.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <h2>Questions fréquentes</h2>
            <div className="faq">
              <details>
                <summary>À qui s&apos;adresse cet accompagnement ?</summary>
                <p>
                  Aux dirigeants de PME, entrepreneurs et indépendants <strong>déjà rentables</strong>, fortement sollicités sur
                  le plan fiscal et patrimonial, qui souhaitent <strong>mieux structurer</strong> leurs arbitrages (rémunération,
                  trésorerie, patrimoine personnel et professionnel).
                </p>
              </details>
              <details>
                <summary>Le premier échange est-il engageant ?</summary>
                <p>
                  Non. Il permet de <strong>poser le cadre</strong>, de comprendre votre contexte et de vérifier si un accompagnement
                  plus approfondi <strong>a du sens</strong> pour votre situation.
                </p>
              </details>
              <details>
                <summary>Quels sujets peuvent être abordés ?</summary>
                <p>
                  Les grands thèmes : <strong>rémunération du dirigeant</strong>, <strong>fiscalité et arbitrages</strong>,{" "}
                  <strong>trésorerie d&apos;entreprise</strong>, <strong>immobilier</strong>, <strong>actifs financiers</strong> et{" "}
                  <strong>transmission / organisation successorale</strong> — avec une lecture stratégique et transversale, sans
                  remplacer les expertises ponctuelles lorsque c&apos;est nécessaire.
                </p>
              </details>
              <details>
                <summary>Est-ce un conseil juridique ou fiscal personnalisé ?</summary>
                <p>
                  Non : l&apos;accompagnement proposé est un <strong>cadrage stratégique</strong> et une aide à la décision. Les sujets
                  juridiques ou fiscaux qui exigent une compétence réglementée peuvent être <strong>traités ou coordonnés</strong> avec
                  des <strong>partenaires</strong> adaptés à votre dossier.
                </p>
              </details>
              <details>
                <summary>Comment prendre rendez-vous ?</summary>
                <p>
                  Deux possibilités : remplir le <strong>formulaire de contact</strong> ci-dessous pour être rappelée, ou{" "}
                  <strong>réserver directement un créneau de 30 minutes</strong> via Calendly :{" "}
                  <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                    ouvrir le calendrier
                  </a>
                  .
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="contact">
          <div className="container contact-wrap">
            <div>
              <h2>Prendre rendez-vous</h2>
              <p>
                Laissez vos coordonnées pour être recontacté et voir si des optimisations concrètes peuvent être identifiées
                sur votre situation.
              </p>
              <p className="small-note">
                Si vous êtes déjà prêt, vous pouvez aussi réserver directement votre créneau (30 min).
              </p>
              <a className="btn btn-secondary" href={calendlyLink} target="_blank" rel="noopener noreferrer">
                Je préfère choisir un créneau maintenant
              </a>
            </div>
            <div className="panel">
              <form onSubmit={submitForm} className="contact-form">
                  <input type="hidden" name="_subject" value="Nouvelle demande — accompagnement dirigeant DAYS LEGACY" />
                  <p style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--texte)" }}>Formulaire de contact</p>
                  <label>
                    Prénom
                    <input name="prenom" type="text" autoComplete="given-name" required />
                  </label>
                  <label>
                    Nom
                    <input name="nom" type="text" autoComplete="family-name" required />
                  </label>
                  <label>
                    Numéro de téléphone
                    <input name="telephone" type="tel" autoComplete="tel" required />
                  </label>
                  <label>
                    E-mail
                    <span className="label-hint">facultatif, recommandé pour vous recontacter par écrit</span>
                    <input name="email" type="email" autoComplete="email" />
                  </label>
                  <label>
                    Objectif principal
                    <select name="objectif" required defaultValue="">
                      <option value="" disabled>
                        Sélectionnez votre besoin
                      </option>
                      <option value="Optimiser la trésorerie d'entreprise">Optimiser la trésorerie d&apos;entreprise</option>
                      <option value="Rémunération et fiscalité du dirigeant">Rémunération et fiscalité du dirigeant</option>
                      <option value="Patrimoine et immobilier">Patrimoine et immobilier</option>
                      <option value="Transmission / succession">Transmission / succession</option>
                      <option value="Vision globale / premier échange">Vision globale / premier échange</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea name="message" rows={5} placeholder="Votre contexte, vos attentes, vos priorités..." required />
                  </label>
                  <label className="form-checkbox">
                    <input name="consentement_rgpd" type="checkbox" value="oui" required />
                    <span>
                      J&apos;accepte que mes données soient utilisées pour me recontacter au sujet de ma demande. J&apos;ai pris
                      connaissance de la{" "}
                      <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
                    </span>
                  </label>
                  <button className="btn btn-primary" type="submit" disabled={formState === "loading"}>
                    {formState === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
                  </button>
                  {formState === "error" ? (
                    <p className="form-error">
                      Une erreur est survenue. Vous pouvez réessayer ou réserver directement un créneau sur Calendly.
                    </p>
                  ) : null}
                  <p className="form-legal-note">
                    Les informations recueillies sur ce formulaire sont enregistrées par Edona Shabani afin de vous recontacter
                    et d&apos;échanger sur votre demande. Vous pouvez accéder à vos données, les rectifier, demander leur effacement
                    ou exercer vos autres droits en écrivant à{" "}
                    <a href="mailto:e.shabani@dayslegacy.com">e.shabani@dayslegacy.com</a>. Pour en savoir plus, consultez notre{" "}
                    <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
                  </p>
                </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-logo-wrap" style={{ display: "inline-block" }}>
              <Image src="/logo-dsl.svg" alt="" width={72} height={47} />
            </div>
            <p className="footer-tagline" style={{ marginTop: "0.75rem", fontWeight: 700, color: "#fff" }}>
              DAYS LEGACY
            </p>
            <p className="footer-tagline">Accompagnement stratégique du dirigeant</p>
            <p className="footer-tagline">Via DAYS LEGACY</p>
            <p className="footer-tagline">E-mail : e.shabani@dayslegacy.com</p>
            <p className="footer-tagline">Téléphone : 06 09 72 42 89</p>
          </div>
          <div className="footer-links">
            <h3>Informations</h3>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/gestion-des-cookies">Gestion des cookies</Link>
          </div>
        </div>
      </footer>

      {cookieChoice === null ? (
        <div className="cookie-banner" role="dialog" aria-label="Gestion des cookies">
          <div>
            <strong>Gestion des cookies</strong>
            <p>
              Nous utilisons des cookies et autres traceurs pour faire fonctionner le site et, sous réserve de votre accord,
              mesurer son audience et améliorer nos actions publicitaires. Vous pouvez accepter, refuser ou personnaliser vos
              choix à tout moment via la page{" "}
              <Link href="/gestion-des-cookies">Gestion des cookies</Link>.
            </p>
          </div>
          <div className="cookie-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                localStorage.setItem("cookie-consent", "refused");
                setCookieChoice("refused");
              }}
            >
              Refuser
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                localStorage.setItem("cookie-consent", "accepted");
                setCookieChoice("accepted");
              }}
            >
              Accepter
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
