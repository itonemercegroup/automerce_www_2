import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-md bg-orange" />
              <span className="text-xl font-bold">Automerce</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Nowoczesna firma zajmująca się automatyzacjami, tworzeniem i wdrażaniem
              oprogramowania oraz wsparciem IT dla sektora e-commerce.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold">Firma</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Usługi
                </Link>
              </li>
              <li>
                <Link
                  href="#technology"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Technologie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Kontakt</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:kontakt@automerce.pl"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  kontakt@automerce.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Automerce. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
