<template>
  <Theme/>
  <div class="flex flex-col lg:flex-row mt-4 mr-8 lg:mr-0">
    <div class="lg:w-8/12 ml-10 lg:ml-16">
      <router-link class="inline-flex items-center gap-x-1.5 text-base text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mb-6" to="/blogs">
        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        ブログ一覧へ
      </router-link>
      <ContentDoc v-slot="{ doc: blogs }">
        <div class="flex flex-wrap mb-2">
          <a class="flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-200 text-blue-800 dark:bg-blue-700/30 dark:text-blue-500 mr-2"><Icon icon="tabler:folder" class="w-4 h-4"/>{{ blogs.category }}</a>
        </div>
        <h1 class="text-2xl lg:text-3xl font-bold">{{ blogs.title }}</h1>
        <div class="flex flex-wrap gap-4 mt-4">
          <p class="text-base text-gray-600 dark:text-gray-400 flex items-center"><Icon icon="tabler:clock" class="w-5 h-5 mr-1"/> {{ $dayjs(blogs.date).format('YYYY/MM/DD') }}</p>
          <p class="text-base text-gray-600 dark:text-gray-400 flex items-center"><Icon icon="tabler:user-circle" class="w-5 h-5 mr-1"/> {{ blogs.author }}</p>
        </div>
        <div class="flex flex-wrap">
          <div v-for="(tag, index) in blogs.tags" :key="index" class="mt-4">
            <a :href="`/tags/${tag}`" class="flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-green-200 text-green-800 dark:bg-green-700/30 dark:text-green-500 mr-2"><Icon icon="tabler:tag" class="w-4 h-4"/>{{ tag }}</a>
          </div>
        </div>
        <div><NuxtImg :src="image" class="mt-4 w-full dark:text-white" format="webp"/></div>
      </ContentDoc>
      <div class="mt-8">
        <ContentRenderer :value="blogs" class="markdown-body"/>
      </div>
    </div>
    <div class="w-full lg:w-3/12 mt-4 lg:mt-0 ml-10 lg:ml-8 mr-8 lg:mr-4 xl:ml-12">
      <h1 class="text-xl">最新の記事</h1>
      <div class="flex flex-col sm:flex-row lg:flex-col lg:mr-8 mt-4 mr-10 gap-3 lg:gap-5">
        <div v-for="n in newer" :key="n._path">
          <router-link :to="n._path" class="flex flex-wrap flex-col border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <NuxtImg :src="image" class="rounded-lg"/>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white mt-4">
              {{ n.title }}
            </h3>
            <div class="flex items-center gap-x-2 mt-4">
              <div class="flex flex-wrap gap-4">
                <p class="text-base text-gray-600 dark:text-gray-400 flex items-center"><Icon icon="tabler:clock" class="w-5 h-5 mr-1"/> {{ $dayjs(n.date).format('YYYY/MM/DD') }}</p>
                <p class="text-base text-gray-600 dark:text-gray-400 flex items-center"><Icon icon="tabler:user-circle" class="w-5 h-5 mr-1"/> {{ n.author }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const route = useRoute()
const blogs = await queryContent(route.path).findOne()
const { data: newer } = await useAsyncData("blogs", () =>
  queryContent("blogs").sort({ date: -1 }).limit(4).find()
)
const meta = {
  title: blogs.title,
  image: blogs.image
}

const image = blogs.image || '/CrystaWorld.png'
useHead(meta)
</script>