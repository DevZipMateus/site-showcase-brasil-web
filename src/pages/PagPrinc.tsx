
import React from 'react';
import { ExternalLink, Code, Globe, Briefcase, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Site {
  name: string;
  description: string;
  url: string;
}

interface Category {
  title: string;
  sites: Site[];
}

interface SectionWithCategories {
  title: string;
  categories: Record<string, Category>;
}

interface SectionWithSites {
  title: string;
  sites: Site[];
}

type PortfolioSection = SectionWithCategories | SectionWithSites;

const portfolioData: Record<string, PortfolioSection> = {
  commerce: {
    title: "🛒 Comércio",
    categories: {
      technology: {
        title: "📱 Tecnologia / Acessórios",
        sites: [
          { name: "lojadovini.com.br", description: "Produtos Apple", url: "https://lojadovini.com.br" },
          { name: "goldensupra.com.br", description: "Peças automotivas", url: "https://goldensupra.com.br" },
          { name: "tradeimports.com.br", description: "Importados e autopeças", url: "https://tradeimports.com.br" }
        ]
      },
      construction: {
        title: "🧰 Construção / Materiais",
        sites: [
          { name: "lojadogesseiropa.com", description: "Gesso e drywall", url: "https://lojadogesseiropa.com" },
          { name: "ajkacos.com.br", description: "Aços e metais", url: "https://ajkacos.com.br" },
          { name: "epismoria.com.br", description: "EPI", url: "https://epismoria.com.br" },
          { name: "miguelmarcenaria.com.br", description: "Marcenaria", url: "https://miguelmarcenaria.com.br" },
          { name: "duparamadeiras.com.br", description: "Madeiras", url: "https://duparamadeiras.com.br" }
        ]
      }
    }
  },
  gifts: {
    title: "🎁 Presentes / Personalizados",
    sites: [
      { name: "victoriaspresentes.com.br", description: "Cestas e cosméticos", url: "https://victoriaspresentes.com.br" },
      { name: "fotografpersonalizados.com.br", description: "Produtos com fotos", url: "https://fotografpersonalizados.com.br" },
      { name: "appreciatti.com.br", description: "Velas artesanais", url: "https://appreciatti.com.br" }
    ]
  },
  clothing: {
    title: "👕 Roupas / Uniformes",
    sites: [
      { name: "l3uniformes.com.br", description: "Uniformes profissionais", url: "https://l3uniformes.com.br" },
      { name: "trbconceito.com.br", description: "Uniformes corporativos", url: "https://trbconceito.com.br" },
      { name: "laviniareis.com.br", description: "Moda feminina", url: "https://laviniareis.com.br" },
      { name: "modascardoso.com.br", description: "Moda casual", url: "https://modascardoso.com.br" }
    ]
  },
  accessories: {
    title: "🧢 Acessórios / Moda Country",
    sites: [
      { name: "amboneecia.com.br", description: "Bonés country", url: "https://amboneecia.com.br" }
    ]
  },
  collectibles: {
    title: "🧸 Colecionáveis / Hobby",
    sites: [
      { name: "malagoliscolecionaveis.com.br", description: "Gibis e miniaturas", url: "https://malagoliscolecionaveis.com.br" }
    ]
  },
  petshop: {
    title: "🐶 Petshop",
    sites: [
      { name: "petpatinhas.com.br", description: "Petshop", url: "https://petpatinhas.com.br" },
      { name: "cdpet.com.br", description: "Produtos pet", url: "https://cdpet.com.br" }
    ]
  },
  business: {
    title: "🏢 Serviços Empresariais",
    categories: {
      accounting: {
        title: "💼 Contabilidade / Gestão Financeira",
        sites: [
          { name: "comandocontabilidade.com.br", description: "Contabilidade", url: "https://comandocontabilidade.com.br" },
          { name: "contabilima.net.br", description: "Contabilidade", url: "https://contabilima.net.br" },
          { name: "abreubpofinanceiro.com.br", description: "BPO Financeiro", url: "https://abreubpofinanceiro.com.br" },
          { name: "jobbpofinanceiro.com.br", description: "BPO Financeiro", url: "https://jobbpofinanceiro.com.br" },
          { name: "bpofinanceirofg.com.br", description: "BPO Financeiro", url: "https://bpofinanceirofg.com.br" },
          { name: "improvece.com.br", description: "Consultoria", url: "https://improvece.com.br" },
          { name: "contabilidadesimplesmei.com.br", description: "Contabilidade MEI", url: "https://contabilidadesimplesmei.com.br" }
        ]
      },
      consulting: {
        title: "🧠 Consultoria e Organização",
        sites: [
          { name: "organizaempresa.com.br", description: "Organização empresarial", url: "https://organizaempresa.com.br" }
        ]
      },
      associations: {
        title: "🏛️ Associações / Instituições",
        sites: [
          { name: "aciallapa.com.br", description: "Associação Comercial", url: "https://aciallapa.com.br" }
        ]
      }
    }
  },
  industry: {
    title: "🏭 Indústria / Produção",
    categories: {
      packaging: {
        title: "📦 Embalagens / Materiais",
        sites: [
          { name: "jlkembalagens.com.br", description: "Embalagens", url: "https://jlkembalagens.com.br" },
          { name: "dlfibras.com.br", description: "Fibras", url: "https://dlfibras.com.br" },
          { name: "sfgcorreias.com.br", description: "Correias", url: "https://sfgcorreias.com.br" },
          { name: "recpoltermoplasticos.com.br", description: "Termoplásticos", url: "https://recpoltermoplasticos.com.br" }
        ]
      },
      agriculture: {
        title: "🌿 Setor Agrícola",
        sites: [
          { name: "rafaterra.com.br", description: "Agricultura", url: "https://rafaterra.com.br" }
        ]
      }
    }
  },
  security: {
    title: "🔒 Segurança e Tecnologia",
    categories: {
      electronic: {
        title: "🛡️ Segurança Eletrônica",
        sites: [
          { name: "masteralarmes.com", description: "Alarmes", url: "https://masteralarmes.com" },
          { name: "gsistematech.com.br", description: "Sistemas de segurança", url: "https://gsistematech.com.br" }
        ]
      },
      it: {
        title: "💻 TI / Automação",
        sites: [
          { name: "sertinfo.com.br", description: "Tecnologia da informação", url: "https://sertinfo.com.br" },
          { name: "inforshift.com.br", description: "Sistemas de TI", url: "https://inforshift.com.br" },
          { name: "melhoressolucoes.com.br", description: "Soluções em TI", url: "https://melhoressolucoes.com.br" }
        ]
      },
      solar: {
        title: "☀️ Energia Solar",
        sites: [
          { name: "wlenergiasolar.com.br", description: "Energia solar", url: "https://wlenergiasolar.com.br" },
          { name: "energiasolarsolares.com.br", description: "Energia solar", url: "https://energiasolarsolares.com.br" }
        ]
      }
    }
  },
  construction: {
    title: "🧱 Casa e Construção",
    sites: [
      { name: "innovavidracaria.com.br", description: "Vidraçaria", url: "https://innovavidracaria.com.br" },
      { name: "arealconstrucao.com.br", description: "Construção", url: "https://arealconstrucao.com.br" },
      { name: "rrcmconstrutora.com.br", description: "Construtora", url: "https://rrcmconstrutora.com.br" },
      { name: "renovasulhigienizacao.com.br", description: "Higienização", url: "https://renovasulhigienizacao.com.br" },
      { name: "limpezatopmais.com.br", description: "Limpeza", url: "https://limpezatopmais.com.br" }
    ]
  },
  food: {
    title: "🍽️ Alimentação / Gastronomia",
    sites: [
      { name: "deliciasdasheila.com.br", description: "Doces personalizados", url: "https://deliciasdasheila.com.br" },
      { name: "rdbebidasesalgados.com.br", description: "Bebidas e salgados", url: "https://rdbebidasesalgados.com.br" }
    ]
  },
  tourism: {
    title: "🧳 Turismo e Transporte",
    sites: [
      { name: "topvansturismos.com.br", description: "Turismo", url: "https://topvansturismos.com.br" },
      { name: "pousadacma.com.br", description: "Pousada", url: "https://pousadacma.com.br" }
    ]
  }
};

const SiteCard = ({ site }: { site: Site }) => {
  const handlePurchase = () => {
    // Redirect to contact page with site name as model parameter
    window.location.href = `contato.php?modelo=${encodeURIComponent(site.name)}`;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {site.name}
            </h4>
            <p className="text-sm text-gray-600 mt-1">{site.description}</p>
          </div>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 p-2 text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        </div>
        
        <Button 
          onClick={handlePurchase}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Quero este modelo
        </Button>
      </CardContent>
    </Card>
  );
};

const CategorySection = ({ title, sites }: { title: string; sites: Site[] }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      {title}
      <Badge variant="secondary" className="text-xs">
        {sites.length} {sites.length === 1 ? 'site' : 'sites'}
      </Badge>
    </h3>
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {sites.map((site, index) => (
        <SiteCard key={index} site={site} />
      ))}
    </div>
  </div>
);

const PagPrinc = () => {
  const totalSites = Object.values(portfolioData).reduce((total: number, section: PortfolioSection): number => {
    if ('sites' in section) {
      return total + section.sites.length;
    }
    if ('categories' in section) {
      const categoryTotal = Object.values(section.categories).reduce((catTotal: number, category: Category): number => 
        catTotal + category.sites.length, 0
      );
      return total + categoryTotal;
    }
    return total;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Code className="w-12 h-12 text-blue-400" />
              <Globe className="w-12 h-12 text-green-400" />
              <Briefcase className="w-12 h-12 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Portfólio de Desenvolvimento Web
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Soluções digitais completas para diversos segmentos de mercado
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="outline" className="text-white border-white/30 bg-white/10">
                <Globe className="w-4 h-4 mr-2" />
                {totalSites}+ Sites Desenvolvidos
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10">
                <Briefcase className="w-4 h-4 mr-2" />
                10+ Segmentos de Mercado
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10">
                <Code className="w-4 h-4 mr-2" />
                E-commerce & Serviços
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {Object.entries(portfolioData).map(([key, section]: [string, PortfolioSection]) => (
            <section key={key} className="mb-16">
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">
                  {section.title}
                </h2>
                
                {'categories' in section ? (
                  Object.entries(section.categories).map(([catKey, category]: [string, Category]) => (
                    <CategorySection
                      key={catKey}
                      title={category.title}
                      sites={category.sites}
                    />
                  ))
                ) : (
                  <CategorySection title="" sites={section.sites} />
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-blue-400" />
              <Globe className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Transformando Ideias em Realidade Digital</h3>
            <p className="text-slate-400 mb-6">
              Especializado no desenvolvimento de soluções web personalizadas para diversos segmentos de mercado.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-500">
              <div>E-commerce</div>
              <div>Serviços Empresariais</div>
              <div>Sites Corporativos</div>
              <div>Sistemas Web</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PagPrinc;
