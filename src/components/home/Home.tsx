import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const recomendacoes = [
  {
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    texto: "Pratos leves e equilibrados para hoje",
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947",
    texto: "Combinações ricas em sabor e saúde",
  },
  {
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    texto: "Proteínas nobres com especiarias do Oriente",
  },
];

const maisVendidos = [
  {
    nome: "Shawarma Tradicional",
    img: "https://ik.imagekit.io/u4gg4wcjv/Shawarma%20Tradicional.png",
    desc: "Clássico pão folha recheado com carnes selecionadas e tempero árabe.",
  },
  {
    nome: "Kebab Artesanal",
    img: "https://ik.imagekit.io/u4gg4wcjv/Kebab%20Artesanal.png",
    desc: "Suculentos espetos grelhados na brasa com especiarias da casa.",
  },
  {
    nome: "Falafel Crocante",
    img: "https://ik.imagekit.io/u4gg4wcjv/Falafel%20Crocante.png",
    desc: "Bolinhos dourados de grão-de-bico com molho tahine.",
  },
];

/* ================== HERO ================== */

const HeroInstitucional: React.FC = () => {
  return (
    <section className="relative bg-[#7A1E2D] overflow-hidden">
      {/* textura + luz */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-black/30" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#F3E9DC] mb-6 transition-all duration-500 ease-in-out cursor-default hover:text-[#D4AF37] hover:scale-110 inline-block origin-left">
            Alibabah
          </h1>

          <p className="text-[#FFCB9A] text-xl md:text-2xl max-w-xl mb-12">
            Sabores do Oriente entregues com tradição, riqueza e sofisticação.
          </p>

          <div className="flex gap-5">
            <Link
              to="/sobre"
              className="px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3B2F2F] transition"
            >
              Saiba +
            </Link>

            <Link
              to="/cardapio"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFCB9A] to-[#D4AF37] text-[#3B2F2F] font-bold shadow-xl hover:scale-105 transition"
            >
              Cardápio
            </Link>
          </div>
        </div>

        {/* LOGO LIMPO + PREMIUM */}
        <div className="relative flex justify-center md:justify-end">
          {/* glow suave */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#D4AF37]/20 blur-[120px]" />

          <img
            src="https://ik.imagekit.io/u4gg4wcjv/logoAlibabah.png"
            alt="Logo Alibabah"
            className="
              w-64 h-64 md:w-80 md:h-80
              rounded-full
              border-4 border-[#D4AF37]
              p-3
              bg-[#741E2D]
              shadow-[0_0_18px_rgba(212,175,55,0.6)]
              transition-all duration-300 ease-out
              hover:scale-110
              hover:shadow-[0_0_35px_rgba(212,175,55,0.9)]"
          />
        </div>
      </div>
    </section>
  );
};

/* ================== BANNER SAUDÁVEL ================== */

function BannerRecomendacoes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % recomendacoes.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[280px] overflow-hidden">
      {recomendacoes.map((item, i) => (
        <img
          key={i}
          src={item.img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          alt="Recomendação"
        />
      ))}

      <div className="absolute inset-0 bg-[#D4AF37]/85" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-extrabold text-[#3B2F2F] mb-4">
          Sugestões Saudáveis
        </h2>
        <p className="text-xl font-medium text-[#3B2F2F] max-w-3xl italic">
          “{recomendacoes[index].texto}”
        </p>
      </div>
    </section>
  );
}

/* ================== MAIS VENDIDOS ================== */

function MaisVendidos() {
  return (
    <section className="bg-[#F3E9DC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-[#3B2F2F] mb-16">
          Mais Vendidos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {maisVendidos.map((item) => (
            <div
              key={item.nome}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src={item.img}
                alt={item.nome}
                className="h-64 w-full object-cover object-bottom"
              />

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-[#3B2F2F]">
                  {item.nome}
                </h3>
                <p className="text-gray-500 mb-6">{item.desc}</p>

                <Link
                  to="/cardapio"
                  className="inline-block px-8 py-3 rounded-full bg-[#D4AF37] text-[#3B2F2F] font-bold hover:bg-[#7A1E2D] hover:text-[#F3E9DC] transition"
                >
                  Fazer Pedido
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== HOME ================== */

export function Home() {
  return (
    <main className="bg-[#F3E9DC]">
      <HeroInstitucional />
      <BannerRecomendacoes />
      <MaisVendidos />
    </main>
  );
}