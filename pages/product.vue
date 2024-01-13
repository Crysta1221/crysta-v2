<template>
  <Theme/>
  <div class="mt-4 ml-10 mr-8">
    <h1 class="text-2xl lg:text-3xl font-bold lg:ml-12">Products</h1>
    <p class="text-base mt-4 lg:ml-12 lg:mr-8">現在リリースしているアプリケーション一覧です。サポート外のプロダクトはLegacyの項目に追加されています。</p>
    <div class="flex flex-col mt-4 lg:ml-12 lg:mr-12">
      <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="border overflow-hidden dark:border-gray-700">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">プロダクト名</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">種類</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">対応デバイス</th>
                    <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">最終更新日</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td colspan="4" class="px-6 py-4 whitespace-normal text-sm font-medium text-gray-800 dark:text-gray-200 text-center">現在公開されているアプリケーションはありません。</td>
                    <!--
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">サンプル</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">アプリケーション</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"><span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">Windows</span></td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">2024/01/11</td>
                    -->
                  </tr>   
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>  
  </div>
</template>