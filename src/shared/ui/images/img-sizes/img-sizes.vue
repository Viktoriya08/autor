<script setup lang="ts">
  const props = defineProps<{
    publicPath: string
    sizes: string
    alt?: string
    img: {
      [key: string]: string[]
    }
    width?: string
    height?: string
    loading?: 'eager' | 'lazy' | undefined
  }>()

  const src = (() => {
    let srcJpg = ''
    let srcWebp = ''
    let src = ''

    for(const key in props.img) {
      if (props.img[key][0]) {
        srcJpg = `${srcJpg} ${props.publicPath}${props.img[key][0]} ${key}w,`
        src = `${props.publicPath}${props.img[key][0]}`
      }

      if (props.img[key][1]) {
        srcWebp = `${srcWebp} ${props.publicPath}${props.img[key][1]} ${key}w,`
      }
    }

    return {
      srcJpg: srcJpg,
      srcWebp: srcWebp,
      src: src
    }
  })()
</script>

<template>
  <picture >
    <source :srcset="src.srcWebp" :sizes="sizes">
    <source :srcset="src.srcJpg" :sizes="sizes">
    <img
      :src="src.src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
    >
  </picture>
</template>
