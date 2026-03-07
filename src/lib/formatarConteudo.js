/**
 * Converte conteúdo estilo markdown simples em HTML seguro para exibição.
 * Usado pela apostila, guia de segurança e detalhe de estudo.
 */
export function formatarConteudo(texto) {
  if (!texto) return '';
  let html = texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/^---$/gm, '<hr/>');
  html = html.replace(/\n/g, '<br/>');
  return html;
}

/**
 * Retorna o conteúdo do capítulo ou texto fallback se estiver vazio.
 * Usado pela apostila e pelo guia de segurança.
 */
export function conteudoOuFallback(cap) {
  if (cap?.conteudo && String(cap.conteudo).trim()) return cap.conteudo;
  return cap?.titulo ? `# ${cap.titulo}\n\nConteúdo em elaboração.` : '';
}
