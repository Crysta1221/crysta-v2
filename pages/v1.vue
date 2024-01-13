<template>
  <Theme/>
  <div class="flex flex-col lg:flex-row mt-4">
    <div class="md:w-4/12 lg:w-4/12 ml-8 lg:ml-20">
      <img src="/crysta.png" class="w-[120px] lg:w-[180px] border shadow border-gray-200 dark:border-none rounded-full" alt="Crysta1221" />
      <section class="sr-only lg:not-sr-only">
        <h1 class="text-3xl lg:text-4xl ml-2 lg:ml-4 font-bold main mt-8">くりすた</h1>
        <p class="mt-3 text-zinc-500 text-lg ml-2 lg:ml-4">フロントエンド大好き</p>
      </section> 
    </div>
    <div class="mt-4 lg:mt-0 ml-10 lg:ml-0 mr-8 lg:mr-8 xl:ml-12">
      <h1 class="text-2xl lg:text-3xl">旧CrystaWorldに移動</h1>
      <p class="mt-2">「移動する」ボタンをクリックすると下記のURLに自動で移動します。URLを直接クリックあるいはタップでも移動できます。</p>
      <div class="flex flex-col justify-center items-center">
        <a href="https://crysta1221.github.io" target="_blank" class="text-center text-xl mt-2">https://v1.crystaworld1221.com</a>
        <a href="https://crysta1221.github.io" target="_blank" type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mt-8">
          移動する
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>