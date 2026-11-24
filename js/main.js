/* ============ CONFIGURAÇÃO: edite aqui links, textos e condições ============ */
const CONFIG = {
  links: {
    form: "https://docs.google.com/forms/d/e/1FAIpQLScxu19SUr6DkrU0psE0GOBjLX-xjP9yJOhct5E1S0Nf59SO4w/viewform",
    wa:   "https://wa.me/554391115160?text=" + encodeURIComponent("Olá! Quero saber mais sobre ser revendedora Sam The Hope."), // WhatsApp oficial (DDI+DDD+número)
    ig:   "https://www.instagram.com/samthehopejoias/"  // perfil oficial
  },
  text: {
    heroTitle: "Sua oportunidade de empreender com beleza, liberdade e propósito!",
    heroText:  "Faça parte da Sam The Hope! Seja uma de nossas revendedoras e descubra uma maneira prática de conquistar sua independência financeira, trabalhando com semijoias e contando com o apoio de uma marca que acredita no seu potencial.",
    howLead:   "Um modelo simples, sem investimento inicial: as peças são 100% consignadas e você conta com o apoio da marca desde o primeiro passo.",
    howNote:   "As condições específicas do consignado (prazos, acerto e regras) são apresentadas pela equipe da Sam The Hope no contato após o cadastro."
  },
  steps: [  // condições detalhadas: editar aqui
    ["Cadastro", "Você preenche o formulário para demonstrar interesse em fazer parte da nossa equipe."],
    ["Aprovação", "A equipe da Sam The Hope entra em contato para orientar sobre os próximos passos e as condições de participação."],
    ["Recebimento das peças", "Depois da capacitação, você recebe a maleta com as semijoias para apresentar e vender aos seus clientes."],
    ["Realização das vendas", "Você apresenta as peças, conquista clientes e realiza suas vendas, com material de apoio da marca."],
    ["Acerto e prestação de contas", "Ao final do período combinado, você acerta as peças vendidas e devolve as que não foram comercializadas, conforme as regras do consignado."]
  ],
  benefits: [ // [ícone, título, texto]
    ["✦", "Sem investimento inicial", "As peças são 100% consignadas: você começa sem precisar comprar o mostruário."],
    ["❖", "Capacitação e treinamento", "Capacitação antes da entrega das maletas e treinamento mensal com a nossa equipe (é preciso estar disposta a participar)."],
    ["◈", "Garantia de 1 ano", "Todas as peças têm garantia de 1 ano, para você vender com segurança e confiança."],
    ["❂", "Comissões de até 40%", "Você é remunerada por comissão sobre as vendas realizadas. Os resultados variam conforme o seu empenho."],
    ["✧", "Premiações", "Premiações mensais, semestrais e anuais para reconhecer o seu trabalho."],
    ["❀", "Material de apoio", "Certificado de garantia, sacolinhas, embalagens para presente e outros materiais para valorizar sua venda."]
  ],
  faq: [
    ["O que é trabalhar com consignado?", "É vender semijoias da Sam The Hope sem comprá-las antecipadamente: você recebe as peças para apresentar aos seus clientes e, ao final do período combinado, faz o acerto das vendidas e devolve as demais."],
    ["Preciso comprar as semijoias antecipadamente?", "Não. As peças são 100% consignadas."],
    ["Como faço para me tornar uma revendedora?", "Preencha o formulário de cadastro. Depois, a equipe da Sam The Hope entra em contato para orientar os próximos passos."],
    ["Existe algum investimento inicial?", "Não há nenhum investimento inicial, pois as peças são 100% consignadas."],
    ["Como funciona o pagamento das peças vendidas?", "As condições de acerto são explicadas pela equipe da Sam The Hope. Fale conosco pelo WhatsApp para esclarecer os detalhes."],
    ["O que acontece com as peças que não forem vendidas?", "As peças não vendidas são devolvidas no acerto, conforme as regras do consignado. A equipe pode explicar os detalhes pelo WhatsApp."],
    ["Posso revender para amigos, familiares e pelas redes sociais?", "A equipe da Sam The Hope poderá esclarecer essa questão pelo WhatsApp."],
    ["Existe uma quantidade mínima de vendas?", "A equipe da Sam The Hope poderá esclarecer essa questão pelo WhatsApp."],
    ["Como funciona o suporte da Sam The Hope?", "Você conta com capacitação antes da entrega das maletas, treinamento mensal com a equipe, garantia de 1 ano nas peças e material de apoio para as vendas."],
    ["Como posso entrar em contato com a marca?", "Pelo WhatsApp ou pelo Instagram, nos botões da seção de contato."]
  ],
  /* Imagens dos espaços com data-slot -> arquivo na pasta images/.
     Deixe src "" para manter o espaço vazio.
     As demais imagens (logotipo, institucional, kit, mostruário e premiações) são tags <img> diretas no index.html. */
  images: {
    "hero": { src: "images/hero.jpg", alt: "Revendedora Sam The Hope apresentando a maleta de semijoias" }
  }
};
/* =========================================================================== */
const $ = (s, r=document) => r.querySelector(s);
document.querySelectorAll("[data-link]").forEach(a => a.href = CONFIG.links[a.dataset.link]);
document.querySelectorAll("[data-t]").forEach(el => el.textContent = CONFIG.text[el.dataset.t]);
document.querySelectorAll('[data-link="form"]').forEach(a => { a.target = "_blank"; a.rel = "noopener"; });
$("#year").textContent = new Date().getFullYear();

$("#steps").innerHTML = CONFIG.steps.map(([t,d]) =>
  `<div class="step reveal"><h3>${t}</h3><p>${d}</p></div>`).join("");
$("#cards").innerHTML = CONFIG.benefits.map(([i,t,d]) =>
  `<div class="card reveal"><div class="ic" aria-hidden="true"><span>${i}</span></div><h3>${t}</h3><p>${d}</p></div>`).join("");
$("#faq-list").innerHTML = CONFIG.faq.map(([q,a]) =>
  `<details class="reveal"><summary>${q}</summary><p>${a}</p></details>`).join("");

const btn = $("#menuBtn"), menu = $("#menu");
btn.addEventListener("click", () => { const o = menu.classList.toggle("open"); btn.setAttribute("aria-expanded", o); });
menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Carrega as imagens definidas em CONFIG.images nos espaços (data-slot) */
document.querySelectorAll("[data-slot]").forEach(slot => {
  const cfg = CONFIG.images[slot.dataset.slot];
  if (!cfg || !cfg.src) return;
  const img = new Image();
  img.alt = cfg.alt || "";
  img.decoding = "async";
  if (slot.dataset.slot !== "hero") img.loading = "lazy";
  img.onload = () => { slot.classList.add("has-img"); slot.prepend(img); };
  img.src = cfg.src; // se o arquivo não existir, o espaço continua vazio
});

/* Celular: mostra a barra fixa "Quero me cadastrar" depois que o início sai da tela
   e a esconde quando a seção final de cadastro está visível */
const bar = $("#mBar"), heroEl = $("#inicio"), ctaEl = $(".cta");
if (bar && "IntersectionObserver" in window) {
  let pastHero = false, ctaVisible = false;
  const update = () => document.body.classList.toggle("show-bar", pastHero && !ctaVisible);
  new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting && e.boundingClientRect.top < 0; update(); }).observe(heroEl);
  new IntersectionObserver(([e]) => { ctaVisible = e.isIntersecting; update(); }).observe(ctaEl);
}
