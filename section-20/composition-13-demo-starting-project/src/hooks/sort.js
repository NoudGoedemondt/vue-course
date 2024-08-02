import { ref, computed } from 'vue';

export default function useSort(availableItems) {
  const sorting = ref(null);

  const displayedUsers = computed(() => {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  const sort = (mode) => (sorting.value = mode);

  return { displayedUsers, sort, sorting };
}
