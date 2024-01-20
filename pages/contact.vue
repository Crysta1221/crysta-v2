<template>
  <Theme/>
  <div class="mt-4 ml-10 mr-8">
    <h1 class="text-2xl lg:text-3xl font-bold lg:ml-12">Contact</h1>
    <p class="text-base mt-4 lg:ml-12 lg:mr-8">CrystaWorldへのお問い合わせはこちらのフォームにて受け付けています。必要事項を入力の上送信してください。</p>
    <div class="mt-4 ml-10 mr-8 bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500" role="alert">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="flex-shrink-0 h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        </div>
        <div class="ms-4">
          <h3 class="text-sm font-semibold">
            フォーム一時停止のお知らせ
          </h3>
          <div class="mt-1 text-sm text-yellow-700 dark:text-yellow-500">
            現在、このお問い合わせフォームに不具合が発生しているため利用できません。重要な連絡等ありましたら、Twitter(@cr1sta_dev)のDMまでお願いします。
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Comment Form -->
  <div class="px-8 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto -mt-4 lg:-mt-16">
    <div class="mx-auto max-w-2xl">
    <!-- Card -->
      <div class="p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-[#09090B] dark:border-gray-700">
        <form @submit.prevent="request">
          <div class="mb-4 sm:mb-8 relative">
            <input type="text" id="hs-floating-input-name" class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#09090B] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2" placeholder="山田太郎">
            <label for="hs-floating-input-name" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500">お名前</label>
          </div>

          <div class="mb-4 sm:mb-8 relative">
            <input type="email" id="hs-floating-input-email" class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#09090B] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2" placeholder="example@email.com">
            <label for="hs-floating-input-email" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500">メールアドレス</label>
          </div>

          <div class="relative">
            <textarea id="hs-floating-textarea" class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#09090B] dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2" placeholder="Something..."></textarea>
            <label for="hs-floating-textarea" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500">お問い合わせ内容</label>
          </div>

          <div class="mt-6 grid">
            <button type="submit" disabled="true" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">送信</button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Comment Form -->
</template>

<script>
const request = () => {
  alert('送信しました。')
}
</script>