import './Pagina7Camadas.css';

const CAMADAS = [
  {
    numero: 7,
    nome: 'Aplicação',
    nomeEn: 'Application',
    cor: '#6366f1',
    descricao: 'É a camada mais próxima do usuário. Aqui rodam os programas e serviços que o usuário utiliza diretamente: navegador, e-mail, mensageiros, APIs. Não é o aplicativo em si, mas a interface e os protocolos que permitem que os aplicativos acessem a rede.',
    funcao: 'Fornecer serviços de rede aos aplicativos do usuário (envio de e-mail, navegação web, transferência de arquivos). Define como os dados são apresentados e como os programas se comunicam pela rede.',
    protocolos: ['HTTP / HTTPS', 'DNS', 'SMTP', 'POP3', 'IMAP', 'FTP', 'SSH', 'Telnet', 'DHCP', 'SNMP', 'NTP'],
    equipamentos: 'Nenhum específico (trabalha no software). Servidores de aplicação, proxies, gateways de aplicação.',
    pdu: 'Dados (Data)',
    exemplos: 'Quando você abre um site, o navegador usa HTTP/HTTPS (camada 7). O cliente de e-mail usa SMTP para enviar e POP/IMAP para receber. O DNS resolve nomes em IP nesta camada.',
    seguranca: 'Firewall de aplicação (WAF), validação de entrada, autenticação e autorização, proteção contra injeção (SQL, XSS), uso de HTTPS em vez de HTTP, APIs seguras (OAuth, tokens).',
  },
  {
    numero: 6,
    nome: 'Apresentação',
    nomeEn: 'Presentation',
    cor: '#8b5cf6',
    descricao: 'Responsável pela formatação, codificação e compressão dos dados para que a camada de aplicação do destino consiga interpretá-los. Traduz entre formatos diferentes (ex.: ASCII, Unicode, JPEG) e pode criptografar/descriptografar na apresentação.',
    funcao: 'Garantir que os dados estejam em um formato compreensível para o sistema receptor: codificação de caracteres, compressão, criptografia (quando feita nesta camada), serialização.',
    protocolos: 'SSL/TLS (parte de codificação/criptografia), JPEG, PNG, MPEG, ASCII, Unicode, MIME.',
    equipamentos: 'Geralmente implementado no sistema operacional ou no próprio aplicativo. Gateways que fazem tradução de protocolo.',
    pdu: 'Dados (Data)',
    exemplos: 'Conversão de texto (UTF-8, Latin-1). Compactação de imagens (JPEG) ou vídeo (MPEG). Criptografia SSL/TLS antes de enviar pela rede.',
    seguranca: 'Uso de TLS para criptografia em trânsito, validação de certificados, evitar protocolos obsoletos (SSLv3). Dados sensíveis devem ser codificados/criptografados antes de trafegar.',
  },
  {
    numero: 5,
    nome: 'Sessão',
    nomeEn: 'Session',
    cor: '#a855f7',
    descricao: 'Controla o diálogo entre duas aplicações: estabelece, mantém e encerra sessões. Sincroniza a comunicação e gerencia troca de dados (quem fala, quando, e recuperação em caso de falha).',
    funcao: 'Gerenciar sessões entre aplicações: estabelecer, manter e encerrar conexões lógicas; diálogo (half-duplex/full-duplex); pontos de sincronização para recuperação; checkpoint e retomada.',
    protocolos: 'NetBIOS, RPC (Remote Procedure Call), SQL, NFS, SDP (Session Description Protocol). Em TCP/IP, muita funcionalidade de sessão está no TCP ou na aplicação.',
    equipamentos: 'Implementado em software (SO e aplicações). Servidores que gerenciam sessões (ex.: servidor de banco de dados, serviços RPC).',
    pdu: 'Dados (Data)',
    exemplos: 'Manter uma sessão de login em um site (cookie/session ID). Chamadas RPC entre serviços. Sincronização em videoconferência.',
    seguranca: 'Controle de tempo de sessão (timeout), invalidação de sessão no logout, tokens de sessão seguros (HTTPS, HttpOnly cookies), proteção contra fixation e hijacking de sessão.',
  },
  {
    numero: 4,
    nome: 'Transporte',
    nomeEn: 'Transport',
    cor: '#d946ef',
    descricao: 'Garante a entrega completa e ordenada dos dados entre origem e destino. Segmenta os dados em partes gerenciáveis, controla fluxo e congestionamento, e pode oferecer confiabilidade (TCP) ou não (UDP).',
    funcao: 'Fornecer comunicação fim-a-fim: segmentação e remontagem, controle de fluxo, confiabilidade (retransmissão no TCP), multiplexação por portas (identificação de serviços).',
    protocolos: 'TCP (orientado à conexão, confiável), UDP (sem conexão, baixa latência), SCTP. Portas lógicas (0–65535) identificam aplicações.',
    equipamentos: 'Implementado no sistema operacional (pilha TCP/IP). Firewalls de camada 4 filtram por porta e protocolo. Load balancers atuam nesta camada.',
    pdu: 'Segmento (TCP) ou Datagrama (UDP)',
    exemplos: 'TCP: navegação web (porta 443), e-mail (25, 587). UDP: DNS (53), VoIP, streaming. A porta identifica o serviço (ex.: 80=HTTP, 443=HTTPS).',
    seguranca: 'TLS/SSL atuam sobre TCP (criptografia e integridade). Firewall filtra por porta (bloquear portas desnecessárias). Evitar serviços em portas padrão expostas sem necessidade.',
  },
  {
    numero: 3,
    nome: 'Rede',
    nomeEn: 'Network',
    cor: '#ec4899',
    descricao: 'Responsável pelo roteamento lógico dos dados entre redes diferentes. Define endereços lógicos (IP), determina o melhor caminho (roteamento) e fragmenta pacotes se necessário. É o “carteiro” que sabe para qual rede enviar.',
    funcao: 'Roteamento e encaminhamento de pacotes entre redes; endereçamento lógico (IP); determinação de caminho (algoritmos de roteamento); fragmentação e remontagem quando necessário.',
    protocolos: 'IP (IPv4, IPv6), ICMP, IGMP, ARP (na fronteira com camada 2), OSPF, BGP, RIP. IPsec (segurança) atua nesta camada.',
    equipamentos: 'Roteadores, firewalls de rede (filtro por IP/porta), camada 3 de switches (L3 switch). Roteadores interconectam redes.',
    pdu: 'Pacote (Packet)',
    exemplos: 'Roteador lê o endereço IP de destino e consulta a tabela de roteamento para enviar o pacote ao próximo salto. IP identifica origem e destino em nível de rede.',
    seguranca: 'Firewall de rede (filtro por IP/porta), IPsec (criptografia e autenticação em camada 3), segmentação de redes (VLANs + roteamento), prevenção de IP spoofing.',
  },
  {
    numero: 2,
    nome: 'Enlace de Dados',
    nomeEn: 'Data Link',
    cor: '#f43f5e',
    descricao: 'Responsável pela transmissão confiável de quadros (frames) entre nós na mesma rede local. Trata de endereços físicos (MAC), controle de acesso ao meio (quem pode transmitir) e detecção/correção de erros no enlace.',
    funcao: 'Montar quadros a partir dos bits da camada física; endereçamento físico (MAC); controle de acesso ao meio (MAC sublayer); detecção de erros (CRC). Divide-se em subcamada LLC e MAC.',
    protocolos: 'Ethernet, Wi-Fi (802.11), PPP, 802.1X (autenticação de rede), ARP. Protocolos de enlace como Ethernet definem formato do frame.',
    equipamentos: 'Switches (camada 2), bridges, placas de rede (NIC). Switch encaminha frames pelo endereço MAC; VLANs segmentam em nível de enlace.',
    pdu: 'Quadro (Frame)',
    exemplos: 'Switch aprende tabela MAC e encaminha o frame apenas para a porta do destino. Ethernet usa endereço MAC de 48 bits. VLANs isolam tráfego logicamente.',
    seguranca: 'Segmentação com VLANs, 802.1X (controle de acesso à rede), proteção contra ARP spoofing, port security em switches. Evitar redes flat sem segmentação.',
  },
  {
    numero: 1,
    nome: 'Física',
    nomeEn: 'Physical',
    cor: '#f97316',
    descricao: 'A camada mais baixa: converte os bits em sinais elétricos, ópticos ou de rádio que trafegam pelo meio. Define conectores, cabos, níveis de tensão, frequências e características do meio de transmissão.',
    funcao: 'Transmissão de bits brutos pelo meio físico; definição de meios (cabo de cobre, fibra óptica, wireless); especificação de conectores, pinos, taxas de transmissão; codificação dos bits em sinais.',
    protocolos: 'Padrões de meio: Ethernet (10/100/1000BASE-T), fibra (1000BASE-LX), Wi-Fi (802.11 a/b/g/n/ac/ax). RS-232, USB (física).',
    equipamentos: 'Cabos (UTP, fibra), conectores (RJ-45), hubs (repetidores), placas de rede (NIC), antenas, repetidores. Não há inteligência de endereço aqui.',
    pdu: 'Bits',
    exemplos: 'O cabo de rede (RJ-45) e a placa de rede transformam bits em pulsos elétricos. Em Wi-Fi, bits viram ondas de rádio. Hub apenas repete o sinal para todas as portas.',
    seguranca: 'Controle de acesso físico (datacenter, armários); proteção de cabos contra corte ou grampo; evitar pontos de rede em áreas públicas; segurança física de equipamentos (hub, switch, roteador).',
  },
];

export default function Pagina7Camadas() {
  return (
    <div className="camadas7">
      <header className="camadas7__hero">
        <h1 className="camadas7__titulo">As 7 Camadas do Modelo OSI</h1>
        <p className="camadas7__subtitulo">
          O modelo OSI (Open Systems Interconnection) descreve como os dados trafegam em uma rede de computadores, da aplicação até o meio físico. Entender cada camada é fundamental para redes, troubleshooting e segurança da informação.
        </p>
        <div className="camadas7__intro">
          <h2>O que é o modelo OSI?</h2>
          <p>
            Criado pela ISO (International Organization for Standardization) na década de 1980, o modelo OSI divide a comunicação em rede em <strong>sete camadas</strong>. Cada camada tem uma função específica e se comunica com a camada imediatamente superior e inferior. Os dados descem do aplicativo (camada 7) até o cabo (camada 1) na origem e sobem na mesma ordem no destino. Esse modelo é usado como referência para ensino e para entender onde atuam protocolos e equipamentos; na prática, a pilha TCP/IP agrupa algumas dessas funções de forma um pouco diferente, mas o conceito das camadas permanece.
          </p>
          <p>
            <strong>Ordem de envio (origem):</strong> 7 → 6 → 5 → 4 → 3 → 2 → 1. <strong>Ordem de recebimento (destino):</strong> 1 → 2 → 3 → 4 → 5 → 6 → 7. Cada camada adiciona (ou no destino, remove) suas próprias informações de controle (cabeçalhos).
          </p>
        </div>
      </header>

      <main className="camadas7__main">
        <div className="camadas7__esquema" aria-hidden="true">
          <p className="camadas7__esquema-titulo">Visão geral (de cima para baixo)</p>
          <ol className="camadas7__esquema-lista">
            {[...CAMADAS].reverse().map((c) => (
              <li key={c.numero} className="camadas7__esquema-item" style={{ borderLeftColor: c.cor }}>
                <span className="camadas7__esquema-num">Camada {c.numero}</span>
                <span className="camadas7__esquema-nome">{c.nome}</span>
              </li>
            ))}
          </ol>
        </div>

        {CAMADAS.map((camada) => (
          <article
            key={camada.numero}
            className="camadas7__card"
            style={{ '--camada-cor': camada.cor }}
            id={`camada-${camada.numero}`}
          >
            <header className="camadas7__card-header">
              <span className="camadas7__card-badge" style={{ backgroundColor: camada.cor }}>
                Camada {camada.numero}
              </span>
              <h2 className="camadas7__card-titulo">
                {camada.nome}
                <span className="camadas7__card-titulo-en">({camada.nomeEn})</span>
              </h2>
              <p className="camadas7__card-pdu">
                <strong>PDU:</strong> {camada.pdu}
              </p>
            </header>
            <div className="camadas7__card-body">
              <section className="camadas7__bloco">
                <h3>O que é e para que serve</h3>
                <p>{camada.descricao}</p>
                <p>{camada.funcao}</p>
              </section>
              <section className="camadas7__bloco">
                <h3>Protocolos e tecnologias</h3>
                <p>{typeof camada.protocolos === 'string' ? camada.protocolos : camada.protocolos.join(', ')}</p>
              </section>
              <section className="camadas7__bloco">
                <h3>Equipamentos</h3>
                <p>{camada.equipamentos}</p>
              </section>
              <section className="camadas7__bloco">
                <h3>Exemplos práticos</h3>
                <p>{camada.exemplos}</p>
              </section>
              <section className="camadas7__bloco camadas7__bloco--seguranca">
                <h3>Segurança nesta camada</h3>
                <p>{camada.seguranca}</p>
              </section>
            </div>
          </article>
        ))}
      </main>

      <footer className="camadas7__footer">
        <h2>Resumo para segurança</h2>
        <p>
          Em <strong>defesa em profundidade</strong>, controles em várias camadas garantem que a falha de uma não comprometa todo o sistema: segurança física (1), VLANs e 802.1X (2), firewall e IPsec (3), TLS e filtro por porta (4), gestão de sessão segura (5), criptografia e codificação (6), WAF e autenticação de aplicação (7). Conhecer as 7 camadas ajuda a posicionar firewalls, IDS/IPS, criptografia e políticas de forma correta.
        </p>
      </footer>
    </div>
  );
}
