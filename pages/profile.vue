<template>
  <Theme/>
  <div class="flex flex-col lg:flex-row mt-4 lg:sticky lg:top-0">
    <div class="md:w-4/12 lg:w-4/12 ml-8 lg:ml-20">
      <img src="/crysta.png" class="w-[120px] lg:w-[180px] border shadow border-gray-200 dark:border-none rounded-full" alt="Crysta1221" />
      <section>
        <h1 class="text-2xl lg:text-3xl ml-2 lg:ml-4 font-bold main mt-8">くりすた</h1>
        <p class="mt-3 text-zinc-500 text-base ml-2 lg:ml-4">フロントエンド大好き</p>
      </section> 
    </div>
    <div class="mt-8 lg:mt-0 ml-8 lg:ml-0 mr-8 lg:mr-16 xl:ml-12 lg:w-full">
      <h2 class="text-3xl font-bold">Profile</h2>
      <div class="flex flex-col mt-4">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle flex-grow">
            <div class="overflow-hidden">
              <div class="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-[#09090B] ">
                  <tbody class="divide-y dark:divide-gray-700">
                    <tr>
                      <td class="px-6 py-4 whitespace-normal text-sm font-bold text-gray-800 dark:text-gray-200">年齢</td>
                      <td class="px-6 py-4 whitespace-normal text-sm text-gray-800 dark:text-gray-200">17</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-normal text-sm font-bold text-gray-800 dark:text-gray-200">PGP キー</td>
                      <td class="px-6 py-4 whitespace-normal text-sm text-gray-800 dark:text-gray-200 font-mono">5662 B53C 4AA9 5EAB</td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 whitespace-normal text-sm font-bold text-gray-800 dark:text-gray-200">資格</td>
                      <td class="px-6 py-4 whitespace-normal text-sm text-gray-800 dark:text-gray-200">ICT プロフィシエンシー検定試験 2級</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-3xl font-bold mt-8">Skills</h2>
      <h3 class="text-xl font-bold mt-4 text-green-600">Main Language</h3>
      <div class="mt-4 flex gap-2 flex-wrap">
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-800/30 dark:text-orange-500">
          <Icon icon="skill-icons:html" class="h-6 w-6"/>
          HTML
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
          <Icon icon="skill-icons:javascript" class="h-6 w-6"/>
          JavaScript
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-800/30 dark:text-cyan-500">
          <Icon icon="skill-icons:typescript" class="h-6 w-6"/>
          TypeScript
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500">
          <Icon icon="skill-icons:vuejs-light" class="h-6 w-6"/>
          Vue.js
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-800/30 dark:text-emerald-500">
          <Icon icon="skill-icons:nuxtjs-light" class="h-6 w-6"/>
          Nuxt3
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-500/30 dark:text-zinc-400">
          <Icon icon="skill-icons:expressjs-light" class="h-6 w-6"/>
          Express
        </span>
      </div>
      <h3 class="text-xl font-bold mt-4 text-blue-600">Dev Environment</h3>
      <div class="mt-4 flex gap-2 flex-wrap mb-4">
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-cyan-100 text-cyan-800 dark:bg-cyan-800/30 dark:text-cyan-500">
          <Icon icon="skill-icons:docker" class="h-6 w-6"/>
          Docker
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
          <Icon icon="skill-icons:vscode-light" class="h-6 w-6"/>
          VSCode
        </span>
        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-sm font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
          <Icon icon="skill-icons:git" class="h-6 w-6"/>
          git
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
