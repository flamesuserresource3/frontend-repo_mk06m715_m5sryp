import { Calendar, Users, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              Nuovo • Piattaforma per Property Manager
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Gestisci immobili, ospiti e team in un unico posto
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              EstateFlow automatizza calendari, comunicazioni e pagamenti per ridurre i tempi di gestione e aumentare le prenotazioni.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Prenota una demo
              </a>
              <a
                href="#vantaggi"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
              >
                Scopri i vantaggi
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-700">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Calendario unificato</dt>
                  <dd className="text-gray-600">Airbnb, Booking.com e sito web</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">CRM ospiti</dt>
                  <dd className="text-gray-600">Messaggi, upsell, automazioni</dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-700">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <dt className="font-semibold text-gray-900">Pagamenti sicuri</dt>
                  <dd className="text-gray-600">Fatture e riconciliazioni</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop"
                alt="Dashboard gestione proprietà"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 -right-6 -top-6 -z-10 bg-gradient-to-tr from-indigo-100/70 via-transparent to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
