import {
  modulosApostila,
  getCapitulosByModulo,
  getCapituloById,
} from '../data/apostilaSeguranca';
import { formatarConteudo, conteudoOuFallback } from '../lib/formatarConteudo';
import './PaginaGuiaSeguranca.css';

const INTRO_GUIA = `Este guia reúne, em um único lugar, os principais temas de **segurança da informação** e **cibernética**: governança, identidade e acesso, criptografia, nuvem, segurança de aplicações, resposta a incidentes, threat intelligence, segurança física e OT, red team e pentest, e liderança em segurança (CISO).

Todo o conteúdo é gerado a partir do material do curso e da apostila — sem uso de banco de dados externo — para você estudar, consultar e revisar de forma contínua. Use o índice abaixo para ir direto a cada módulo.`;

export default function PaginaGuiaSeguranca() {
  return (
    <div className="guia-seguranca">
      <header className="guia-seguranca__hero">
        <span className="guia-seguranca__badge" aria-hidden>Guia unificado</span>
        <h1 className="guia-seguranca__titulo">
          Guia de Segurança da Informação
        </h1>
        <p className="guia-seguranca__subtitulo">
          Todo o conteúdo essencial em um único lugar — para estudo e consulta
        </p>
        <div
          className="guia-seguranca__intro"
          dangerouslySetInnerHTML={{
            __html: formatarConteudo(INTRO_GUIA),
          }}
        />
      </header>

      <nav className="guia-seguranca__indice" aria-label="Índice do guia">
        <h2 className="guia-seguranca__indice-titulo">Índice</h2>
        <ul className="guia-seguranca__indice-lista">
          {modulosApostila.map((mod) => (
            <li key={mod.id}>
              <a
                href={`#guia-modulo-${mod.id}`}
                className="guia-seguranca__indice-link"
                style={{ '--mod-cor': mod.cor }}
              >
                <span className="guia-seguranca__indice-icone" aria-hidden>{mod.icone}</span>
                {mod.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="guia-seguranca__conteudo">
        {modulosApostila.map((mod) => {
          const capitulos = getCapitulosByModulo(mod.id);
          return (
            <section
              key={mod.id}
              id={`guia-modulo-${mod.id}`}
              className="guia-seguranca__modulo"
              style={{ borderLeftColor: mod.cor }}
            >
              <h2 className="guia-seguranca__modulo-titulo">
                <span className="guia-seguranca__modulo-icone" aria-hidden>{mod.icone}</span>
                {mod.nome}
              </h2>
              {capitulos.map((cap) => {
                const capObj = getCapituloById(cap.id);
                const conteudo = conteudoOuFallback(capObj);
                return (
                  <article
                    key={cap.id}
                    className="guia-seguranca__capitulo"
                    id={`guia-cap-${cap.id}`}
                  >
                    <h3 className="guia-seguranca__capitulo-titulo">{cap.titulo}</h3>
                    <div
                      className="guia-seguranca__capitulo-body"
                      dangerouslySetInnerHTML={{ __html: formatarConteudo(conteudo) }}
                    />
                  </article>
                );
              })}
            </section>
          );
        })}
      </main>

      <footer className="guia-seguranca__footer">
        <a href="#guia-modulo-gov" className="guia-seguranca__footer-link">
          ↑ Voltar ao topo
        </a>
        <p className="guia-seguranca__footer-note">
          Conteúdo gerado a partir da apostila e do curso — sem banco de dados externo.
        </p>
      </footer>
    </div>
  );
}
