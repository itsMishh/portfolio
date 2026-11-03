/**
 * Types out the closing comment lines of the hero code block once, the first
 * time they scroll into view, then leaves them alone.
 *
 * The real text is in the markup, so the lines are present for search engines
 * and for anyone without scripts; this only blanks and re-types them.
 */

const SPEED_MS = 22;
const LINE_PAUSE_MS = 260;

export function initTyping() {
  const lines = [...document.querySelectorAll<HTMLElement>('[data-typed]')];
  const caret = document.querySelector<HTMLElement>('[data-caret]');
  if (!lines.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    caret?.classList.add('is-done');
    return;
  }

  // Hold the layout: the lines keep their height while their text is cleared.
  for (const line of lines) line.textContent = '';
  caret?.classList.add('is-typing');

  const type = async () => {
    for (const line of lines) {
      const text = line.dataset.text ?? '';
      for (let i = 1; i <= text.length; i += 1) {
        line.textContent = text.slice(0, i);
        await new Promise((resolve) => setTimeout(resolve, SPEED_MS));
      }
      await new Promise((resolve) => setTimeout(resolve, LINE_PAUSE_MS));
    }
    caret?.classList.remove('is-typing');
    caret?.classList.add('is-done');
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.disconnect();
        void type();
      }
    },
    { threshold: 0.4 },
  );

  observer.observe(lines[0]);
}
