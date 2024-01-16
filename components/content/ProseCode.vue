<template>
  <div class="p-4 rounded-lg bg-[#24292E] dark:bg-[#161B22] border-gray-700 mt-4 mb-4">
    <div class="mb-8 text-gray-300 flex items-center justify-between text-sm -mt-1.5">
      <div class="flex items-center">
        <template v-if="languageIcon">
          <Icon :icon="languageIcon" class="ml-2 mr-3 text-base" />
        </template>
        <template v-else>
          <Icon icon="bi:file-earmark-text" class="ml-2 mr-3 text-base" />
        </template>
        <div class="font-mono mt-0.5 text-white">
          {{ filename }}
        </div>
      </div>
      <div class="flex justify-end mr-1">
        <button @click="copy(code);copied=true;" aria-label="Copy" class="bg-transparent text-white text-sm font-light px-1 w-8 h-8 rounded transition-all duration-200 ease-in-out flex justify-center items-center hover:bg-gray-700">
          <template v-if="!copied">
            <Icon icon="tabler:copy" width="16" height="16"/>
          </template>
          <template v-else>
            <Icon icon="tabler:check" width="16" height="16"/>
          </template>
        </button>
      </div>
    </div>

    <div class="flex border mb-6 -mt-6 border-gray-300 dark:border-gray-600"/>
    <div class="mx-2 mb-2 -mt-4">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useClipboard } from "@vueuse/core";

const { copy, copied ,text } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: () => [] }
);

const languageMap: Record<string, { icon: string; }> = {
  vue: {
    icon: 'logos:vue',
  },
  js: {
    icon: 'logos:javascript',
  },
  html: {
    icon: 'logos:html-5',
  },
  markdown: {
    icon: 'fa6-brands:markdown',
  },
  md: {
    icon: 'fa6-brands:markdown',
  },
  docker: {
    icon: 'logos:docker-icon',
  },
  dockerfile: {
    icon: 'logos:docker-icon',
  },
  yml: {
    icon: 'file-icons:yaml-alt4',
  },
  mcfunction: {
    icon: 'mdi:minecraft',
  },
  py: {
    icon: 'logos:python',
  }
};

const filenameMap: Record<string, { icon: string; }> = {
  'package.json': {
    icon: 'logos:npm-icon',
  },
  'tsconfig.json': {
    icon: 'logos:typescript-icon',
  },
  'nuxt.config.js': {
    icon: 'logos:nuxt-icon',
  },
  'nuxt.config.ts': {
    icon: 'logos:nuxt-icon',
  },
  '.gitignore': {
    icon: 'logos:git-icon',
  },
  'tailwind.config.js': {
    icon: 'logos:tailwindcss-icon'
  }
  // 他のファイル名とアイコンのマッピング
};

const languageIcon = computed(() => {
  if (props.filename && filenameMap[props.filename]) {
    return filenameMap[props.filename].icon;
  }
  return props.language ? languageMap[props.language]?.icon : null;
});

</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      copied: false,
    }
  }
});
</script>

<style scoped>
:slotted(pre) {
  margin-top: -1.2rem;
  margin-bottom: -1.2rem;
  overflow-x: auto;
  padding: 1rem;
  line-height: 1.625;
  margin-left: -0.4rem;
  counter-reset: lines 0;
  position:relative;
}

:slotted(pre code) {
  flex-direction: column;
}

:slotted(pre code .line::before) {
  text-align: right;
  counter-increment: lines;
  content: counter(lines); /* スペースを囲んで挿入 */
  margin-right: 1.7rem;
  color: rgba(155, 166, 171, 0.4);
  display: inline-block;
  width: 1.8rem;
  border-left: 1px solid #ddd; /* 縦の区切り線を追加 */
  padding-left: 0.5rem;
  margin-left: -1.5rem;
}

:slotted(pre code .highlight) {
  background-color: #56695c;
  display: block;
  margin-right: -1em;
  padding-right: 1em;
}

::slotted li {
  text-align: right;
}
</style>