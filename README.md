# Landing page – Sam The Hope

Site de captação de revendedoras de semijoias (modelo de consignação). Feito com HTML, CSS e JavaScript puros, sem dependências nem etapa de build: basta abrir o `index.html`.

## Estrutura

```
sam-the-hope/
├── index.html        Estrutura e seções da página
├── css/
│   └── style.css     Estilos e paleta de cores (variáveis no topo)
├── js/
│   └── main.js       Configuração (links, textos, FAQ) e interações
├── images/           Logo e fotografias
└── README.md
```

## Como editar

Tudo o que muda com frequência fica no objeto `CONFIG`, no início de `js/main.js`.

### 1. Links (obrigatório antes de publicar)

```js
links: {
  form: "https://forms.google.com/",   // Google Forms oficial
  wa:   "https://wa.me/5500000000000?text=...",  // DDI + DDD + número, só dígitos
  ig:   "https://www.instagram.com/"   // perfil oficial
}
```

O link do formulário é usado em todos os botões "Quero me cadastrar". O do WhatsApp, no botão da seção de contato, no rodapé e no botão flutuante.

### 2. Textos

- `text`: título e texto do início, texto e aviso da seção "Como funciona". O propósito da marca fica no HTML.
- `steps`: as 5 etapas do consignado `["Título", "Descrição"]`.
- `benefits`: cartões de vantagens `["símbolo", "Título", "Descrição"]`.
- `faq`: perguntas e respostas. As respostas provisórias ("a equipe poderá esclarecer pelo WhatsApp") devem ser trocadas quando as regras do consignado estiverem definidas.

### 3. Imagens

A imagem principal (Hero) é definida em `CONFIG.images` no `main.js`:

```js
"hero": { src: "images/hero.jpg", alt: "Descrição da imagem" },
```

As demais são tags `<img>` diretas no `index.html` (basta trocar o arquivo em `images/` mantendo o nome, ou alterar o `src`):

| Arquivo | Onde aparece |
|---|---|
| `logo.png` | Cabeçalho e rodapé |
| `institucional.jpg` | "Nossos valores e nosso propósito" |
| `mostruario.jpeg`, `kit_consultoras.jpeg` | "O que você recebe" |
| `premio_1000_vendas.jpeg`, `premio_2000_vendas.png`, `premio_5000_vendas.jpeg` | "Premiações por vendas" (no celular viram carrossel deslizante) |
| `premiacoes.jpeg` | Destaque "Premiações do evento" |

Dicas: use JPG ou WebP com até cerca de 1600 px no lado maior (idealmente abaixo de 300 KB) e preencha sempre o texto alternativo (`alt`).

### 4. Cores

Variáveis no topo de `css/style.css` (`:root`), extraídas do logotipo e da identidade da marca:

| Variável | Uso |
|---|---|
| `--bg`, `--surface` | Fundos (branco esverdeado e verde-água claro) |
| `--mint`, `--tiffany` | Verde-água do logotipo e da maleta |
| `--brown` | Títulos (verde-azulado escuro) |
| `--gold`, `--gold-d` | Dourado dos detalhes |
| `--text`, `--muted` | Textos |

Os botões dourados e as seções escuras (chamada final e rodapé) têm cores próprias no mesmo arquivo.

## Como publicar

Envie a pasta inteira, mantendo a estrutura, para qualquer hospedagem de site estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages ou hospedagem comum via FTP). Para testar localmente, dê dois cliques no `index.html`.

## Recursos incluídos

Responsivo (celular, tablet e computador), menu móvel, rolagem suave, FAQ em acordeão, animações ao rolar (respeitam "reduzir movimento"), efeitos de hover, botão flutuante de WhatsApp, imagens com carregamento otimizado, SEO básico (título, descrição e HTML semântico) e modo escuro automático.

## Antes de publicar

- [ ] Trocar os 3 links em `CONFIG.links`.
- [ ] Revisar `steps` e `faq` com as condições reais do consignado.
- [ ] Conferir o texto institucional e as imagens antes de publicar.
- [ ] Opcional: adicionar `og:image` ao `<head>` do `index.html` para prévia ao compartilhar o link.
