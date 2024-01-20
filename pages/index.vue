<template>
  <Theme/>
  <div class="flex flex-col lg:flex-row mt-6">
    <div class="md:w-4/12 lg:w-4/12 ml-10 lg:ml-28">
      <NuxtImg width="256" height="256" format="webp" src="/crysta.png" class="w-[120px] lg:w-[180px] border shadow border-gray-200 dark:border-none rounded-full" alt="Crysta1221" />
      <section>
        <h1 class="text-3xl lg:text-4xl ml-2 lg:ml-4 font-bold main mt-8">くりすた</h1>
        <p class="mt-3 text-zinc-500 text-lg ml-2 lg:ml-4">フロントエンド大好き</p>
      </section> 
    </div>
    <div class="mt-4 lg:mt-0 lg:ml-0 mr-8 lg:mr-12 ml-8 xl:ml-8">
      <!-- Card Section -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:mr-8 w-full h-full">
        <a class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-blue-400" href="https://twitter.com/Cr1sta_dev" target="_blank" style="opacity: 1; transform: none;">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl">
            <Icon icon="skill-icons:twitter" width="36" height="36" />
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Twitter</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-16">@Cr1sta_dev</p>
            </section>
          </div>
        </a>
        <div class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#5865f2]" style="opacity: 1; transform: none;">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl">
            <Icon icon="skill-icons:discord" width="38" height="38" />
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Discord</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-16">@crysta1221</p>
            </section>
          </div>
        </div>
        <a class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-gray-500" href="https://github.com/Crysta1221" target="_blank" style="opacity: 1; transform: none;">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl">
            <Icon icon="skill-icons:github-dark" width="38" height="38" />
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Github</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-16">@Crysta1221</p>
            </section>
          </div>
        </a>
        <div class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#eb0029]" style="opacity: 1; transform: none;">
          <div class="w-9 h-9 rounded-lg shadow-sm mb-2  duration-200 mr-3 flex items-center justify-center bg-[#eb0029]">
            <Icon icon="simple-icons:riotgames" class="p-1.5 text-4xl text-white" width="36" height="36"/>
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Riot Games</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-4">Cr1sta#くりすた</p>
            </section>
          </div>
        </div>
        <a class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#55c500]" href="https://qiita.com/Crysta1221" target="_blank" style="opacity: 1; transform: none;">
          <div class="w-9 h-9 rounded-lg shadow-sm mb-2  duration-200 mr-3 flex items-center justify-center bg-[#55c500]">
            <Icon icon="simple-icons:qiita" class="p-1.5 text-4xl text-white" width="36" height="36"/>
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Qiita</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-4">@Crysta1221</p>
            </section>
          </div>
        </a>
        <a class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#b4e900]" href="https://misskey.io/@Crysta1221" target="_blank" style="opacity: 1; transform: none;">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl">
            <Icon icon="skill-icons:misskey-dark" width="38" height="38" />
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Misskey.io</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-16">@Crysta1221</p>
            </section>
          </div>
        </a>
        <div class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#3b8526]" style="opacity: 1; transform: none;">
          <div class="w-9 h-9 rounded-lg shadow-sm mb-2  duration-200 mr-3 flex items-center justify-center bg-[#3b8526]">
            <Icon icon="file-icons:minecraft" class="p-1.5 text-4xl text-black" width="30" height="30"/>
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Minecraft JE</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-4">Crysta1221</p>
            </section>
          </div>
        </div>
        <div class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#2a475e]" style="opacity: 1; transform: none;">
          <div class="w-9 h-9 rounded-lg shadow-sm mb-2  duration-200 mr-3 flex items-center justify-center bg-[#1b2838]">
            <Icon icon="mdi:steam" class="p-1.5 text-4xl text-white" width="36" height="36"/>
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Steam</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-4">Crysta1221</p>
            </section>
          </div>
        </div>
        <div class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#000] dark:hover:border-[#fff]" style="opacity: 1; transform: none;">
          <div class="w-9 h-9 rounded-lg shadow-sm mb-2  duration-200 mr-3 flex items-center justify-center">
            <NuxtImg width="64" height="64" class="rounded" src="/genshin.jpg" alt="Genshin"/>
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Genshin Impact</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-4">UID: 865469313</p>
            </section>
          </div>
        </div>
        <div class="rounded-xl border-2 border-spacing-2 dark:border-[#27272a] bg-card shadow p-3 md:p-5 transition-colors hover:border-[#000] dark:hover:border-[#fff]" style="opacity: 1; transform: none;">
          <div class="w-9 h-9 rounded-lg shadow-sm mb-2  duration-200 mr-3 flex items-center justify-center">
            <NuxtImg width="64" height="64" class="rounded" src="/hsr.webp" alt="HSR"/>
          </div>
          <div class="mt-2 flex flex-col gap-1">
            <p>Honkai Star Rail</p>
            <section class="flex items-center gap-1">
              <p class="text-sm lg:mr-4">UID: 801859382</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer class="lg:bottom-0 lg:ml-12 lg:-mt-6"/>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

