import { ref, computed, watch } from 'vue';

export default function useSearch(items, filterProperty) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  watch(enteredSearchTerm, (value) => {
    setTimeout(() => {
      if (value === enteredSearchTerm.value) {
        activeSearchTerm.value = value;
      }
    }, 300);
  });

  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[filterProperty].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  const updateSearch = (value) => (enteredSearchTerm.value = value);

  return { enteredSearchTerm, availableItems, updateSearch };
}
