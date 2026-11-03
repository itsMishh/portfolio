/**
 * Scroll-driven motion for the home page: reveals, section-rule drawing and the
 * side-rail active state. Everything runs off one IntersectionObserver.
 *
 * Nothing here is required to read the page: the CSS that hides un-revealed
 * elements is scoped to `.js`, and reduced-motion users get the end state at once.
 */

const REVEALED = 'is-revealed';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveal every opted-in element and skip the observer entirely. */
function revealAll(elements: Iterable<Element>) {
  for (const el of elements) el.classList.add(REVEALED);
}

function initReveals() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    revealAll(targets);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add(REVEALED);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );

  for (const target of targets) observer.observe(target);
}

/**
 * Fills the side rail's dot for whichever section is currently in view. Uses a
 * band across the upper half of the viewport so the active item changes at a
 * predictable point rather than when a section merely touches the edge.
 */
function initSideRail() {
  const rail = document.querySelector<HTMLElement>('[data-side-rail]');
  const sections = document.querySelectorAll<HTMLElement>('[data-rail-section]');
  if (!rail || !sections.length || !('IntersectionObserver' in window)) return;

  const links = new Map<string, HTMLAnchorElement>();
  for (const link of rail.querySelectorAll('a[href^="#"]')) {
    links.set((link as HTMLAnchorElement).hash.slice(1), link as HTMLAnchorElement);
  }

  const visible = new Set<string>();

  const setActive = () => {
    // Document order wins when two sections straddle the band.
    let active = '';
    for (const section of sections) {
      if (visible.has(section.id)) {
        active = section.id;
        break;
      }
    }
    for (const [id, link] of links) {
      const isActive = id === active;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      setActive();
    },
    { rootMargin: '-10% 0px -55% 0px' },
  );

  for (const section of sections) observer.observe(section);
}

/**
 * Drifts the corner doodle a few pixels with the pointer. Fine pointers only, so
 * touch devices and reduced-motion users never pay for it.
 */
function initDoodleDrift() {
  const doodle = document.querySelector<HTMLElement>('[data-doodle]');
  if (!doodle || prefersReducedMotion()) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const MAX = 6;
  let frame = 0;

  window.addEventListener(
    'pointermove',
    (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const x = (event.clientX / window.innerWidth - 0.5) * 2 * MAX;
        const y = (event.clientY / window.innerHeight - 0.5) * 2 * MAX;
        doodle.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      });
    },
    { passive: true },
  );
}

export function initMotion() {
  initReveals();
  initSideRail();
  initDoodleDrift();
}
