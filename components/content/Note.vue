<script setup>
defineProps(['type'])
</script>

<template>
  <div :class="[type]">
    <p class="font-bold uppercase">{{ type }}</p>
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<style scoped lang="scss">
.warn {
  @apply bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500;
}

.info {
  @apply bg-green-100 border border-green-200 text-sm text-green-800 rounded-lg p-4 dark:bg-green-800/10 dark:border-green-900 dark:text-green-500;
}

.alert {
  @apply bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500;
}
</style>