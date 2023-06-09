import { SessionCard } from "./SessionCard";

export function HowItWorks() {
   return (
      <section className="text-center">
         <div>
            <h1 className="font-title font-bold text-h2">Como funciona</h1>
            <p className="text-b2 text-gray-700">Sem burocracia, faça seu pedido de maneira fácil e rápida.</p>
         </div>

         <div className="mt-8 flex justify-center gap-8">
            <SessionCard
               icon="access"
               title="Acesse o catálogo"
               content="Acesse o catálogo pelo celular, table ou computador."
            />
            <SessionCard
               icon="add"
               title="Adicione na sacolinha"
               content="Veja os produtos e adicione na sacolinha."
            />
            <SessionCard
               icon="send"
               title="Envie o seu pedido"
               content="Sem burocracia! Vá até sua sacolinha e envie seu pedido direto para gente."
            />
         </div>
      </section>
   )
}