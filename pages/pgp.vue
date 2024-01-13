<template>
  <Theme/>
  <div class="mt-4 ml-10 mr-8">
    <h1 class="text-2xl lg:text-3xl font-bold lg:ml-12">PGP Keys</h1>
    <p class="text-base mt-4 lg:ml-12 lg:mr-8">くりすたが主にGithub等で使用しているPGP Keyです。新しいキーが発行した場合には順次追加していきます。「有効期限切れ」が「<span class="text-red-500">はい</span>」になっているキーは利用できません。</p>
    <div class="flex flex-col mt-4 lg:ml-12 lg:mr-12">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border overflow-hidden dark:border-gray-700">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">PGPキー</th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">発行日</th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">有効期限切れ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium text-gray-800 dark:text-gray-200">5662 B53C 4AA9 5EAB</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">2023/12</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">いいえ</td>
                </tr>   
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
const source = ref('5662 B53C 4AA9 5EAB')
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>
