import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32 pt-32 lg:py-48">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-orange opacity-10 blur-[120px]"></div>
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-border/40 bg-card px-5 py-2 text-sm font-medium shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange"></span>
            <span className="text-muted-foreground">Dostępni dla nowych projektów</span>
          </div>

          <h1 className="mb-8 text-6xl font-bold leading-[1.1] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            Automatyzacja
            <br />
            <span className="text-orange">
              przyszłości
            </span>
          </h1>

          <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
            Tworzymy nowoczesne rozwiązania automatyzacyjne i oprogramowanie dla
            e-commerce. Zamień procesy manualne w efektywne systemy automatyczne.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              className="h-14 rounded-full bg-orange px-10 text-base font-medium text-white shadow-lg shadow-orange/20 transition-all hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/30"
              asChild
            >
              <Link href="#contact">Rozpocznij projekt</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-border px-10 text-base font-medium transition-all hover:border-orange hover:text-orange"
              asChild
            >
              <Link href="#services">Poznaj nasze usługi</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-32 grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="space-y-3">
              <div className="text-5xl font-bold tracking-tight lg:text-6xl">150+</div>
              <div className="text-base text-muted-foreground">Projektów zrealizowanych</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold tracking-tight lg:text-6xl">98%</div>
              <div className="text-base text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold tracking-tight lg:text-6xl">24/7</div>
              <div className="text-base text-muted-foreground">Wsparcie techniczne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-32 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Nasze usługi
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Kompleksowe rozwiązania dostosowane do potrzeb Twojego biznesu e-commerce
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                <svg
                  className="h-8 w-8 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Automatyzacja procesów</h3>
              <p className="leading-relaxed text-muted-foreground">
                Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu
                o 300%. Integracje z popularnymi platformami e-commerce.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                <svg
                  className="h-8 w-8 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Rozwój oprogramowania</h3>
              <p className="leading-relaxed text-muted-foreground">
                Tworzymy dedykowane aplikacje webowe i mobilne z wykorzystaniem
                najnowszych technologii i sprawdzonych praktyk.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                <svg
                  className="h-8 w-8 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Wsparcie IT</h3>
              <p className="leading-relaxed text-muted-foreground">
                Kompleksowe wsparcie techniczne 24/7. Monitoring, maintenance i
                optymalizacja Twojej infrastruktury IT.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                <svg
                  className="h-8 w-8 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Cloud & Infrastructure</h3>
              <p className="leading-relaxed text-muted-foreground">
                Migracja do chmury, zarządzanie infrastrukturą i optymalizacja kosztów.
                AWS, Azure, Google Cloud.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                <svg
                  className="h-8 w-8 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Analytics & BI</h3>
              <p className="leading-relaxed text-muted-foreground">
                Zaawansowana analityka danych, dashboardy i raporty. Podejmuj decyzje
                oparte na danych rzeczywistych.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-10 transition-all duration-300 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange/10">
                <svg
                  className="h-8 w-8 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Integracje API</h3>
              <p className="leading-relaxed text-muted-foreground">
                Łączymy różne systemy i platformy. Synchronizacja danych, webhooks i
                custom integracje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/20 px-6 py-32 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Dlaczego Automerce?
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                Jesteśmy zespołem ekspertów z wieloletnim doświadczeniem w branży
                e-commerce i automatyzacji procesów biznesowych. Naszą misją jest
                wspieranie firm w cyfrowej transformacji.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      strokeWidth={2}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-bold">Indywidualne podejście</h4>
                    <p className="leading-relaxed text-muted-foreground">
                      Każdy projekt traktujemy jako unikalny, dostosowując rozwiązania
                      do Twoich potrzeb
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      strokeWidth={2}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-bold">Najnowsze technologie</h4>
                    <p className="leading-relaxed text-muted-foreground">
                      Wykorzystujemy sprawdzone, nowoczesne narzędzia i frameworki
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      strokeWidth={2}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-lg font-bold">Transparentna komunikacja</h4>
                    <p className="leading-relaxed text-muted-foreground">
                      Regularny feedback i pełna widoczność postępów projektu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-border/40 bg-card p-8 transition-all hover:border-orange/20">
                <div className="mb-3 text-5xl font-bold tracking-tight text-orange lg:text-6xl">15+</div>
                <div className="text-base font-medium">Lat doświadczenia</div>
              </div>
              <div className="rounded-3xl border border-border/40 bg-card p-8 transition-all hover:border-orange/20">
                <div className="mb-3 text-5xl font-bold tracking-tight text-orange lg:text-6xl">50+</div>
                <div className="text-base font-medium">Specjalistów</div>
              </div>
              <div className="rounded-3xl border border-border/40 bg-card p-8 transition-all hover:border-orange/20">
                <div className="mb-3 text-5xl font-bold tracking-tight text-orange lg:text-6xl">200+</div>
                <div className="text-base font-medium">Wdrożeń</div>
              </div>
              <div className="rounded-3xl border border-border/40 bg-card p-8 transition-all hover:border-orange/20">
                <div className="mb-3 text-5xl font-bold tracking-tight text-orange lg:text-6xl">10M+</div>
                <div className="text-base font-medium">Oszczędności</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="px-6 py-32 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 text-center">
            <h2 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Technologie
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Pracujemy z najpopularniejszymi i najbardziej niezawodnymi narzędziami
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
                className="flex items-center justify-center rounded-2xl border border-border/40 bg-card p-8 transition-all duration-300 hover:border-orange/30 hover:shadow-lg"
              >
                <span className="text-base font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-32 lg:py-48">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Gotowy na{" "}
            <span className="text-orange">
              transformację?
            </span>
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojemu biznesowi
            osiągnąć kolejny poziom efektywności.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              className="h-14 rounded-full bg-orange px-10 text-base font-medium text-white shadow-lg shadow-orange/20 transition-all hover:bg-orange/90 hover:shadow-xl hover:shadow-orange/30"
              asChild
            >
              <a href="mailto:kontakt@automerce.pl">Wyślij wiadomość</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-border px-10 text-base font-medium transition-all hover:border-orange hover:text-orange"
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
