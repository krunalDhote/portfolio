import { contact } from "@/lib/portfolio";
import { ArrowDownIcon } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
] as const;

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Krunal Dhote, back to top">
          KD<span aria-hidden="true">.</span>
        </a>

        <div className="nav__links" aria-label="Page sections">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav__resume" href={contact.resume} download>
          Resume <ArrowDownIcon />
        </a>

        <MobileNav />
      </nav>
    </header>
  );
}
