/**
 * Clicking a skill chip highlights the experience bullets and project cards
 * tagged with that skill and dims the rest.
 *
 * The script only maintains two attributes — `data-filtering` on the root and
 * `data-match` on the hits — and CSS does the dimming, so the state is visible
 * in devtools and the styling stays in one place.
 */

export function initSkillFilter() {
  const root = document.querySelector<HTMLElement>('[data-filter-root]');
  const chips = document.querySelectorAll<HTMLButtonElement>('.skill-chip');
  if (!root || !chips.length) return;

  const taggables = document.querySelectorAll<HTMLElement>('[data-tags]');
  const status = document.querySelector<HTMLElement>('[data-filter-status]');
  const jump = document.querySelector<HTMLButtonElement>('[data-filter-jump]');
  const clearButton = document.querySelector<HTMLButtonElement>('[data-filter-clear]');

  let active: string | null = null;
  let firstMatch: HTMLElement | null = null;

  const tagsOf = (el: HTMLElement) => (el.dataset.tags ?? '').split('|');

  const apply = () => {
    let matches = 0;
    firstMatch = null;

    for (const el of taggables) {
      const isMatch = active !== null && tagsOf(el).includes(active);
      if (isMatch) {
        el.setAttribute('data-match', '');
        if (!firstMatch) firstMatch = el;
        matches += 1;
      } else {
        el.removeAttribute('data-match');
      }
    }

    for (const chip of chips) {
      chip.setAttribute('aria-pressed', String(chip.dataset.skill === active));
    }

    if (active === null) {
      root.removeAttribute('data-filtering');
    } else {
      root.setAttribute('data-filtering', '');
    }

    if (status) {
      status.textContent =
        active === null
          ? ''
          : matches === 0
            ? `Nothing tagged ${active} yet.`
            : `Highlighting ${matches} ${matches === 1 ? 'item' : 'items'} tagged ${active}.`;
    }
    clearButton?.toggleAttribute('hidden', active === null);
    // The chips sit below Experience, so most matches are off-screen above:
    // without this the only visible change is other content dimming.
    jump?.toggleAttribute('hidden', active === null || matches === 0);
  };

  for (const chip of chips) {
    chip.addEventListener('click', () => {
      const skill = chip.dataset.skill ?? null;
      active = active === skill ? null : skill;
      apply();
    });
  }

  jump?.addEventListener('click', () => {
    firstMatch?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'center',
    });
  });

  clearButton?.addEventListener('click', () => {
    active = null;
    apply();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && active !== null) {
      active = null;
      apply();
    }
  });
}
