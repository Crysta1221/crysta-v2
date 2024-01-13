<template>
  <div class="flex justify-between h-16 items-center  mr-8 lg:mr-16 mt-6 gap-4">
    <router-link to="/" type="button" class="ml-8 group py-2 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-zinc-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-800">
      <Icon class="block text-black dark:text-white" icon="tabler:home-2" width="20" height="20"/>
    </router-link>
    <div class="flex gap-4">
      <div class="hs-dropdown" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
        <button type="button" class="hs-dropdown-toggle hs-dark-mode group py-2 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-zinc-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-800">
          <Icon class="block text-black dark:text-white" :icon="$colorMode.preference === 'system' ? 'tabler:device-desktop' : ($colorMode.preference === 'light' ? 'tabler:sun-filled' : 'tabler:moon-filled')" width="20" height="20"/>
        </button>
        <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:divide-zinc-800">
          <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300" @click="$colorMode.preference = 'system'">
            <Icon class="block w-4 h-4" icon="tabler:device-desktop" width="28" height="28"/>
            System
          </button>
          <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300" @click="$colorMode.preference = 'light'">
            <Icon class="block w-4 h-4" icon="tabler:sun-filled" width="28" height="28"/>
            Light
          </button>
          <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300" @click="$colorMode.preference = 'dark'">
            <Icon class="w-4 h-4" icon="tabler:moon-filled" width="24" height="24"/>
            Dark
          </button>
        </div>    
      </div>
      <div class="hs-dropdown" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
        <button type="button" class="hs-dropdown-toggle hs-dark-mode group py-2 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-zinc-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-zinc-800">
          <Icon class="block text-black dark:text-white" icon="tabler:menu-2" width="20" height="20"/>
        </button>
        <div id="selectMenu" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-zinc-800 dark:border dark:border-zinc-800 dark:divide-zinc-800">
          <router-link to="/profile" type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300">
            <Icon class="block w-5 h-5" icon="tabler:article" width="36" height="36"/>
            プロフィール
          </router-link>
          <router-link to="/product" type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300">
            <Icon class="block w-5 h-5" icon="tabler:apps" width="36" height="36"/>
            プロダクト
          </router-link>
          <router-link to="/blog" type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300">
            <Icon class="block w-5 h-5" icon="tabler:app-window" width="36" height="36"/>
            ブログ
          </router-link>
          <div class="border border-solid"></div>
          <a href="https://v1.crystaworld1221.com" type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300">
            <Icon class="block w-5 h-5" icon="tabler:archive" width="36" height="36"/>
            v1に移動
          </a>
          <router-link to="/contact" type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800 dark:hover:text-gray-300">
            <Icon class="block w-5 h-5" icon="tabler:mail-share" width="36" height="36"/>
            お問い合わせ
          </router-link>
        </div>
      </div>
    </div>
  </div> 
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<script>
const hidden_page = ref(true);
</script>