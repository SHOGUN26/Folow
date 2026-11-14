// Durée du défilement en millisecondes : augmente pour plus de lenteur, diminue pour plus de vivacité
const DURATION = 1000;

// Démarre doucement, accélère au milieu, ralentit à l'arrivée
function easeInOutCubic(progress: number): number {
  return progress < 0.5
    ? 4 * progress ** 3
    : 1 - (-2 * progress + 2) ** 3 / 2;
}

// sectionId = null : retour tout en haut de la page
export function scrollToSection(sectionId: string | null): void {
  const target = sectionId ? document.getElementById(sectionId) : null;
  const start = window.scrollY;
  const end = target ? target.getBoundingClientRect().top + start : 0;
  const distance = end - start;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, end);
    return;
  }

  const startTime = performance.now();

  function step(now: number): void {
    const progress = Math.min((now - startTime) / DURATION, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}