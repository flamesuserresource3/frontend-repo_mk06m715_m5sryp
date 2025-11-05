import { CalendarCheck2, Building2, MessagesSquare, DoorOpen } from 'lucide-react';

const features = [
  {
    icon: CalendarCheck2,
    title: 'Channel manager',
    desc: 'Sincronizza disponibilità, prezzi e restrizioni su Airbnb, Booking.com e il tuo sito.',
  },
  {
    icon: Building2,
    title: 'Manutenzione e pulizie',
    desc: 'Crea ticket, assegna task al team e monitora lo stato degli interventi in tempo reale.',
  },
  {
    icon: MessagesSquare,
    title: 'Messaggistica smart',
    desc: 'Template automatici, traduzioni e risposte rapide per ridurre i tempi di risposta.',
  },
  {
    icon: DoorOpen,
    title: 'Self check-in',
    desc: 'Integrazioni con smart lock e invio istruzioni automatico agli ospiti.',
  },
];

export default function Features() {
  return (
    <section id="vantaggi" className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Strumenti pensati per Property Manager</h2>
          <p className="mt-3 text-gray-600">Tutto ciò che ti serve per far crescere il tuo business, in un'unica piattaforma.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex rounded-lg bg-indigo-600/10 p-2 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
