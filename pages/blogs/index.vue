<template>
  <Theme/>
  <div class="mt-4 ml-10 mr-8">
    <h1 class="text-2xl lg:text-3xl font-bold lg:ml-12">Blogs</h1>
    <p class="text-base mt-4 lg:ml-12 lg:mr-8">主にくりすたの備忘録として残した記事の溜まり場です。</p>
    <div class="flex-col mt-4 lg:ml-12 lg:mr-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in blogs" :key="n._path">
      <!-- Card -->
        <router-link class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" :to="n._path">
          <div class="aspect-w-16 aspect-h-11">
            <NuxtImg class="w-full object-cover rounded-xl" :src="image" format="webp"/>
          </div>
          <div class="my-6">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              {{ n.title }}
            </h3>
            <div class="flex flex-wrap">
              <div v-for="(tag, index) in n.tags" :key="index" class="mt-4">
                <a class="flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-green-200 text-green-800 dark:bg-green-700/30 dark:text-green-500 mr-2"><Icon icon="tabler:tag" class="w-4 h-4"/>{{ tag }}</a>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-x-3 -mt-4">
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="text-base text-gray-600 dark:text-gray-400 flex items-center"><Icon icon="tabler:clock" class="w-5 h-5 mr-1"/> {{ $dayjs(n.date).format('YYYY/MM/DD') }}</p>
              <p class="text-base text-gray-600 dark:text-gray-400 flex items-center"><Icon icon="tabler:user-circle" class="w-5 h-5 mr-1"/> {{ n.author }}</p>
            </div>
          </div>
        </router-link>
      <!-- End Card -->
      </div>
    </div>
  </div>  
</template>

<script setup>
import { Icon } from '@iconify/vue';
const { data: blogs } = await useAsyncData("blogs", () =>
  queryContent("blogs").sort({ date: -1 }).find()
)
const image = blogs.image || '/CrystaWorld.png';
useHead({
  title: "Blogs",
})
</script>