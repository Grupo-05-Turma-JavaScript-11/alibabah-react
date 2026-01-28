export default function Home() {
  return (
    <main className="bg-[#FAFAF8] text-[#3B2F2F]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-extrabold text-[#741E2D]">
          Plataforma Alibabah
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[#3B2F2F]/80">
          Um sistema completo para restaurantes árabes gerenciarem cardápio,
          categorias e pedidos de forma simples e organizada.
        </p>

        <div className="mt-6 flex gap-3">
          <button className="px-6 py-3 rounded-md bg-[#741E2D] text-[#FAFAF8] font-semibold hover:brightness-95">
            Ver Cardápio
          </button>
          <button className="px-6 py-3 rounded-md bg-[#FFCB9A] text-[#3B2F2F] font-semibold hover:brightness-95">
            Conhecer o Sistema
          </button>
        </div>
      </section>

      {/* Destaques */}
      <section className="bg-[#F3E9DC]">
        <div className="max-w-7xl mx-auto px-4 py-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Gestão de Categorias",
              desc: "Organize seu cardápio por categorias como Esfihas, Kibes e Shawarmas.",
            },
            {
              title: "Cadastro de Produtos",
              desc: "Controle preços, descrições e opções saudáveis com facilidade.",
            },
            {
              title: "Pedidos Centralizados",
              desc: "Visualize todos os pedidos em um único lugar, em tempo real.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-[#FAFAF8] border border-black/5"
            >
              <h3 className="font-extrabold text-[#741E2D]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#3B2F2F]/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conteúdo para gerar scroll */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold text-[#741E2D]">
          Por que usar o Alibabah?
        </h2>

        <div className="mt-6 space-y-4 max-w-3xl text-[#3B2F2F]/80">
          <p>
            O Alibabah foi pensado para o dia a dia do restaurante árabe,
            facilitando a gestão do cardápio e dos pedidos sem complicações.
          </p>
          <p>
            Com uma interface limpa e objetiva, o sistema ajuda a reduzir erros
            operacionais e melhora a organização da equipe.
          </p>
          <p>
            Ideal para restaurantes que desejam profissionalizar sua operação
            de delivery e atendimento.
          </p>
        </div>

        {/* bloco extra só para testar scroll */}
        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-32 rounded-md bg-[#F3E9DC] border border-black/5 flex items-center justify-center text-sm font-semibold"
            >
              Bloco de conteúdo {i + 1}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
