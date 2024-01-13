<template>
  <Theme/>
  <div class="mt-4 ml-10 mr-8">
    <div class="flex flex-col justify-center items-center mt-4">
      <img class="w-[480px]" src="/pic/construction.svg"/>
      <h1 class="mt-4 text-2xl text-center lg:text-start">404 Not Found</h1>
      <p>お探しのページは移動したか削除された場合があります。</p>
      <router-link to="/" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#09090B] dark:border-gray-700 dark:text-white dark:hover:bg-zinc-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-8">
          ホームに戻る
          <Icon icon="tabler:arrow-right" width="18" height="18"/>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>