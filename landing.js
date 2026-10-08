/* The website demo stays entirely in this browser: no orders, input or analytics. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduced) {
    document.body.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold: .07});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  const cards = [...document.querySelectorAll('.tarot')];
  const shuffle = document.querySelector('.shuffle-button');
  const result = document.querySelector('.draw-result');
  if (!shuffle || !result || cards.length !== 3) return;
  const labels = JSON.parse(document.getElementById('demo-copy').textContent);
  const titles = labels.cards;
  let selected = 0;
  let busy = false;
  function reset() {
    if (busy) return;
    busy = true; selected = 0; shuffle.disabled = true;
    const order = titles.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]];
    }
    cards.forEach((card, i) => {
      card.classList.remove('face-up'); card.setAttribute('aria-pressed', 'false');
      card.setAttribute('aria-label', labels.choose + ' ' + (i + 1));
      card.querySelector('.card-front strong').textContent = titles[order[i]][0];
      card.querySelector('.card-front .sigil').textContent = titles[order[i]][1];
      if (!reduced) card.classList.add('shuffle');
      card.disabled = true;
    });
    result.textContent = labels.start;
    setTimeout(() => {
      cards.forEach(card => {card.classList.remove('shuffle'); card.disabled = false;});
      shuffle.disabled = false; busy = false;
    }, reduced ? 0 : 1050);
  }
  cards.forEach(card => card.addEventListener('click', () => {
    if (busy || card.classList.contains('face-up')) return;
    card.classList.add('face-up'); card.setAttribute('aria-pressed', 'true');
    card.setAttribute('aria-label', card.querySelector('.card-front strong').textContent);
    selected += 1;
    result.textContent = selected === 3 ? labels.done : labels.count.replace('{n}', String(selected));
  }));
  shuffle.addEventListener('click', reset);
  reset();
})();
