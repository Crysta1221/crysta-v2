# Nuxtを使う
## Header2
### Header3
#### Header4
##### Header 5
みなさん、こんばんは<br>
`This is a Inline Code`

```vue{1}{2-5}[index.vue]
<template>
  <div class="max-sm">
    <h1> This is a Code Block. </h1>
  </div>
</template>
```

````md [index.md]
```ts
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(),
  { code: '', language: null, filename: null, highlights: () => [] }
);
```
````

<details>
<summary>Detail Block</summary>

```py [print.py]
print("test")
```

</details>
