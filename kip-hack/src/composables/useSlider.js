import { computed, ref } from 'vue';

const pad = (number) => String(number).padStart(2, '0');

export function useSlider(count) {
  const index = ref(0);

  function goTo(next) {
    index.value = (next + count) % count;
  }

  return {
    index,
    goTo,
    prev: () => goTo(index.value - 1),
    next: () => goTo(index.value + 1),
    current: computed(() => pad(index.value + 1)),
    total: pad(count),
    trackStyle: computed(() => ({ '--index': index.value })),
  };
}
