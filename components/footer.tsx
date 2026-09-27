import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { contact } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <p className="eyebrow">Open to opportunities</p>
          <h2>Let’s discuss the next backend challenge.</h2>
          <p>
            I’m interested in software engineering roles focused on secure backend systems,
            distributed workflows, and cloud infrastructure.
          </p>
        </div>

        <div className="footer__actions">
          <a className="button button--primary" href={`mailto:${contact.email}`}>
            <MailIcon /> Email me <ArrowUpRightIcon />
          </a>
          <a className="button button--secondary" href={contact.phoneHref}>
            <PhoneIcon /> {contact.phone}
          </a>
          <a
            className="button button--secondary"
            href={contact.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn <ArrowUpRightIcon />
          </a>
          <a
            className="button button--secondary"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> GitHub <ArrowUpRightIcon />
          </a>
        </div>
      </div>

      <div className="container footer__base">
        <a className="monogram" href="#top" aria-label="Krunal Dhote, back to top">
          KD<span aria-hidden="true">.</span>
        </a>
        <p>Backend Software Engineer · Node.js · NestJS · TypeScript · AWS</p>
        <p>© {new Date().getFullYear()} Krunal Dhote</p>
      </div>
    </footer>
  );
}
