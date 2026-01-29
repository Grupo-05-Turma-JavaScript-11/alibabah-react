import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import React from "react";

const recomendacoes = [
  {
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    texto: "Pratos leves e equilibrados para hoje",
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    texto: "Combinações ricas em sabor e saúde",
  },
  {
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    texto: "Proteínas nobres com especiarias do Oriente",
  },
];

const maisVendidos = [
  {
    nome: "Shawarma Tradicional",
    img: "https://ik.imagekit.io/u4gg4wcjv/Shawarma%20Tradicional.png?w=400&q=80",
    desc: "Clássico pão folha recheado com carnes selecionadas e tempero árabe.",
  },
  {
    nome: "Kebab Artesanal",
    img: "https://ik.imagekit.io/u4gg4wcjv/Kebab%20Artesanal.png?w=400&q=80",
    desc: "Suculentos espetos grelhados na brasa com especiarias da casa.",
  },
  {
    nome: "Falafel Crocante",
    img: "https://ik.imagekit.io/u4gg4wcjv/Falafel%20Crocante.png?w=400&q=80",
    desc: "Bolinhos dourados de grão-de-bico com molho tahine.",
  },
];

/* ================== banner ================== */

const HomeBanner: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const logoSizes = {
    container: "w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px]",
    image: "w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80"
  };

  return (
    <section className="relative bg-[#7A1E2D] overflow-hidden" aria-label="Hero Section">
      {/* Partículas e gradiente */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/15 via-transparent to-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-28 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Conteúdo de texto */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#F3E9DC] transition-all duration-500 cursor-default hover:text-yellow-600 hover:scale-105 inline-block origin-left animate-slide-in-left">
            Alibabah
          </h1>
          
          <p className="text-[#FFCB9A] text-lg sm:text-xl lg:text-2xl max-w-xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-left animation-delay-200">
            Sabores do Oriente  Médios entregues com tradição, riqueza e sofisticação.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center lg:justify-start animate-slide-in-left animation-delay-400">
            <Link
              to="/sobre"
              className="group relative px-6 sm:px-8 py-3 rounded-full border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-[#3B2F2F] transition-all duration-300 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Saiba +</span>
              <div className="absolute inset-0 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              to="/produtos"
              className="group relative px-8 sm:px-10 py-3 rounded-full bg-gradient-to-r from-yellow-600 via-orange-300 to-yellow-600 text-[#3B2F2F] font-bold shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Cardápio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-700 via-orange-400 to-yellow-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>
        </div>

        {/* Logo com efeitos */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0" ref={logoRef}>
          {/* Anéis animados */}
          <div className={`absolute ${logoSizes.container} rounded-full border-4 border-yellow-600/20 animate-pulse`} />
          <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full border-4 border-yellow-600/30 animate-pulse animation-delay-500" />
          <div className="absolute w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] lg:w-[340px] lg:h-[340px] rounded-full border-4 border-yellow-600/40 animate-pulse animation-delay-1000" />
          
          {/* Glow e container 3D */}
          <div 
            className={`absolute ${logoSizes.container} rounded-full bg-yellow-600/25 blur-[80px] lg:blur-[120px] transition-all duration-300`}
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          />
          
          <div 
            className="relative transition-all duration-300"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="relative group">
              <div className={`absolute inset-0 ${logoSizes.image} rounded-full bg-gradient-to-r from-yellow-600 via-orange-300 to-yellow-600 p-1 animate-spin-slow`}>
                <div className="w-full h-full rounded-full bg-[#741E2D]" />
              </div>

              {/* logo do alibabah */}
              <img
                src="https://ik.imagekit.io/u4gg4wcjv/logoAlibabah.png?w=400&q=80"
                alt="Logo Alibabah - Restaurante Árabe"
                className={`relative ${logoSizes.image} rounded-full border-4 border-yellow-600 p-2 sm:p-3 bg-[#741E2D] shadow-[0_0_20px_rgba(212,175,55,0.6)] lg:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.9)] lg:group-hover:shadow-[0_0_50px_rgba(212,175,55,0.9)] group-hover:rotate-6`}
                loading="eager"
              />
              
              <div className={`absolute inset-0 ${logoSizes.image} rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          </div>

          {/* Partículas flutuantes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full animate-float"
              style={{
                left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 35}%`,
                top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 35}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================== BANNER SAUDÁVEL ================== */

function BannerRecomendacoes() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % recomendacoes.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden group" aria-label="Recomendações Saudáveis">
      {/* Imagens com transição */}
      {recomendacoes.map((item, i) => (
        <img
          key={i}
          src={item.img}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          alt={`Recomendação: ${item.texto}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Overlay e conteúdo */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 via-yellow-600/85 to-yellow-600/90" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3B2F2F] mb-3 sm:mb-4 transition-all duration-500 ${
          isTransitioning ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        }`}>
          Sugestões Saudáveis
        </h2>
        
        <p className={`text-base sm:text-lg lg:text-xl font-medium text-[#3B2F2F] max-w-2xl lg:max-w-3xl italic transition-all duration-500 delay-100 px-2 ${
          isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}>
          "{recomendacoes[index].texto}"
        </p>

        {/* Indicadores */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {recomendacoes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 sm:w-8 bg-[#3B2F2F]" : "bg-[#3B2F2F]/50 hover:bg-[#3B2F2F]/70"
              }`}
              aria-label={`Ir para recomendação ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== MAIS VENDIDOS ================== */

function MaisVendidos() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="bg-[#F3E9DC] py-16 sm:py-20 lg:py-24 px-4 sm:px-6" aria-label="Mais Vendidos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2F2F] mb-4 animate-fade-in-up">
            Mais Vendidos
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-600 mx-auto rounded-full animate-slide-in-width" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {maisVendidos.map((item, index) => (
            <div
              key={item.nome}
              className={`group bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-xl sm:hover:shadow-2xl animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(item.nome)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-yellow-600/10 to-[#7A1E2D]/10">
                <img
                  src={item.img}
                  alt={item.nome}
                  className={`w-full h-full object-cover object-bottom transition-all duration-700 ${
                    hoveredCard === item.nome ? "scale-110 rotate-2" : "scale-100 rotate-0"
                  }`}
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredCard === item.nome ? "opacity-100" : "opacity-0"
                }`} />
              </div>

              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#3B2F2F] group-hover:text-yellow-600 transition-colors duration-300">
                  {item.nome}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed line-clamp-3">{item.desc}</p>

                <Link
                  to="/produtos"
                  className="group/btn relative inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-yellow-600 text-[#3B2F2F] font-bold hover:bg-[#7A1E2D] hover:text-[#F3E9DC] transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10">Fazer Pedido</span>
                  <div className="absolute inset-0 rounded-full bg-[#7A1E2D] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== HOME COMPONENT ================== */

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F3E9DC] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-yellow-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main>
      <HomeBanner />
      <BannerRecomendacoes />
      <MaisVendidos />
    </main>
  );
}

export default Home;