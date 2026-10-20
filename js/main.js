const header = document.querySelector('.header');
const burger = header.querySelector('.header__burger');
const menu = header.querySelector('.menu');

function setMenuOpen(open) {
  menu.hidden = !open;
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  header.classList.toggle('header--open', open);
  document.body.classList.toggle('is-locked', open);
}

burger.addEventListener('click', () => setMenuOpen(menu.hidden));
menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menu.hidden) {
    setMenuOpen(false);
    burger.focus();
  }
});

const pad = (number) => String(number).padStart(2, '0');

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const track = slider.querySelector('.slider__track');
  const slides = [...track.children];
  const current = slider.querySelector('.slider__current');
  const thumbs = [...slider.querySelectorAll('.slider__thumb')];
  const thumbsList = slider.querySelector('.slider__thumbs');
  let index = 0;

  function goTo(next) {
    index = (next + slides.length) % slides.length;
    track.style.setProperty('--index', index);
    current.textContent = pad(index + 1);
    slides.forEach((slide, i) => slide.setAttribute('aria-hidden', i !== index));
    thumbs.forEach((thumb, i) => thumb.setAttribute('aria-current', i === index));
    if (thumbsList) thumbsList.scrollTo({ left: thumbs[index].offsetLeft - thumbsList.offsetLeft, behavior: 'smooth' });
  }

  slider.querySelector('.slider__total').textContent = pad(slides.length);
  slider.querySelectorAll('[data-slider-prev]').forEach((button) => button.addEventListener('click', () => goTo(index - 1)));
  slider.querySelectorAll('[data-slider-next]').forEach((button) => button.addEventListener('click', () => goTo(index + 1)));
  thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => goTo(i)));
  goTo(0);
});

const tabs = [...document.querySelectorAll('.tabs__tab')];

function selectTab(selected) {
  tabs.forEach((tab) => {
    const active = tab === selected;
    tab.setAttribute('aria-selected', active);
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
}

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    const next = tabs[(i + step + tabs.length) % tabs.length];
    selectTab(next);
    next.focus();
  });
});
