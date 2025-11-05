import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Simulate success UI without backend
    setSent(true);
  };

  return (
    <section id="contatti" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Parla con un esperto</h2>
            <p className="mt-3 text-gray-600">
              Raccontaci delle tue strutture: ti mostreremo come ridurre i costi operativi e aumentare l'occupazione.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:hello@estateflow.app" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                  <Mail className="h-5 w-5" />
                </span>
                hello@estateflow.app
              </a>
              <a href="tel:+390200000000" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                  <Phone className="h-5 w-5" />
                </span>
                +39 02 0000 0000
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">Perché sceglierci</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
                <li>Onboarding in 48 ore e migrazione gratuita</li>
                <li>Assistenza italiana 7/7</li>
                <li>API e integrazioni aperte</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input required type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cognome</label>
                    <input required type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Numero di proprietà</label>
                  <select className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                    <option>1-5</option>
                    <option>6-20</option>
                    <option>21-50</option>
                    <option>51+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Messaggio</label>
                  <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Raccontaci del tuo business..." />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Invia richiesta
                </button>
                <p className="text-xs text-gray-500">Invio simulato per la demo — nessun dato verrà trasmesso.</p>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto h-12 w-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  ✓
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Richiesta inviata!</h3>
                <p className="mt-2 text-gray-600">Ti contatteremo entro 24 ore per fissare una demo personalizzata.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
