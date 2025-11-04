import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border border-border/40 bg-muted/50 px-4 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            Dostępni dla nowych projektów
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Automatyzacja
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              przyszłości
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Tworzymy nowoczesne rozwiązania automatyzacyjne i oprogramowanie dla
            e-commerce. Zamień procesy manualne w efektywne systemy automatyczne.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-foreground px-8 py-6 text-lg text-background hover:bg-foreground/90"
              asChild
            >
              <Link href="#contact">Rozpocznij projekt</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg"
              asChild
            >
              <Link href="#services">Poznaj nasze usługi</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-4xl font-bold">150+</div>
              <div className="mt-2 text-sm text-muted-foreground">Projektów zrealizowanych</div>
            </div>
            <div>
              <div className="text-4xl font-bold">98%</div>
              <div className="mt-2 text-sm text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-4xl font-bold">24/7</div>
              <div className="mt-2 text-sm text-muted-foreground">Wsparcie techniczne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Nasze usługi
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Kompleksowe rozwiązania dostosowane do potrzeb Twojego biznesu e-commerce
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Automatyzacja procesów</h3>
              <p className="text-muted-foreground">
                Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu
                o 300%. Integracje z popularnymi platformami e-commerce.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/10">
                <svg
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Rozwój oprogramowania</h3>
              <p className="text-muted-foreground">
                Tworzymy dedykowane aplikacje webowe i mobilne z wykorzystaniem
                najnowszych technologii i sprawdzonych praktyk.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-600/10">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Wsparcie IT</h3>
              <p className="text-muted-foreground">
                Kompleksowe wsparcie techniczne 24/7. Monitoring, maintenance i
                optymalizacja Twojej infrastruktury IT.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600/10">
                <svg
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Cloud & Infrastructure</h3>
              <p className="text-muted-foreground">
                Migracja do chmury, zarządzanie infrastrukturą i optymalizacja kosztów.
                AWS, Azure, Google Cloud.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-600/10">
                <svg
                  className="h-6 w-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Analytics & BI</h3>
              <p className="text-muted-foreground">
                Zaawansowana analityka danych, dashboardy i raporty. Podejmuj decyzje
                oparte na danych rzeczywistych.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600/10">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Integracje API</h3>
              <p className="text-muted-foreground">
                Łączymy różne systemy i platformy. Synchronizacja danych, webhooks i
                custom integracje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-muted/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Dlaczego Automerce?
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Jesteśmy zespołem ekspertów z wieloletnim doświadczeniem w branży
                e-commerce i automatyzacji procesów biznesowych. Naszą misją jest
                wspieranie firm w cyfrowej transformacji.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-600 p-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Indywidualne podejście</h3>
                    <p className="text-sm text-muted-foreground">
                      Każdy projekt traktujemy jako unikalny, dostosowując rozwiązania
                      do Twoich potrzeb
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-600 p-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Najnowsze technologie</h3>
                    <p className="text-sm text-muted-foreground">
                      Wykorzystujemy sprawdzone, nowoczesne narzędzia i frameworki
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-green-600 p-1">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Transparentna komunikacja</h3>
                    <p className="text-sm text-muted-foreground">
                      Regularny feedback i pełna widoczność postępów projektu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border/40 bg-card p-6">
                <div className="mb-2 text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm font-medium">Lat doświadczenia</div>
              </div>
              <div className="rounded-2xl border border-border/40 bg-card p-6">
                <div className="mb-2 text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm font-medium">Specjalistów</div>
              </div>
              <div className="rounded-2xl border border-border/40 bg-card p-6">
                <div className="mb-2 text-3xl font-bold text-green-600">200+</div>
                <div className="text-sm font-medium">Wdrożeń</div>
              </div>
              <div className="rounded-2xl border border-border/40 bg-card p-6">
                <div className="mb-2 text-3xl font-bold text-orange-600">10M+</div>
                <div className="text-sm font-medium">Oszczędności</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technologie
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Pracujemy z najpopularniejszymi i najbardziej niezawodnymi narzędziami
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "Kubernetes",
              "PostgreSQL",
              "MongoDB",
              "GraphQL",
              "REST API",
            ].map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center rounded-xl border border-border/40 bg-card p-6 transition-all hover:border-border hover:shadow-lg"
              >
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Gotowy na{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transformację?
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojemu biznesowi
            osiągnąć kolejny poziom efektywności.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-foreground px-8 py-6 text-lg text-background hover:bg-foreground/90"
              asChild
            >
              <a href="mailto:kontakt@automerce.pl">Wyślij wiadomość</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:+48123456789">Zadzwoń do nas</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
