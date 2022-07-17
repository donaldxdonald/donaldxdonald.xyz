<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Frontmatter } from '~/types'
import { formatDate } from '~/utils/utils'

defineProps<{
  frontmatter: Frontmatter
}>()

const content = ref<HTMLDivElement>()

const router = useRouter()

onMounted(() => {
  const navigate = () => {
    if (!location.hash) {
      return
    }

    document.querySelector(decodeURIComponent(location.hash))
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  const handleAnchorClicked = (
    event: MouseEvent & {target: HTMLElement},
  ) => {
    const link = event.target.closest('a')
    if (
      !event.defaultPrevented &&
      link &&
      event.button === 0 &&
      link.target !== '_blank' &&
      link.rel !== 'external' &&
      !link.download &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    ) {
      const url = new URL(link.href)
      if (url.origin !== window.location.origin) {
        return
      }

      event.preventDefault()
      const { pathname, hash } = url
      if (hash && (!pathname || pathname === location.pathname)) {
        window.history.replaceState({}, '', hash)
        navigate()
      } else {
        router.push({ path: pathname, hash })
      }
    }
  }

  useEventListener(window, 'hashchange', navigate)
  useEventListener(content.value, 'click', handleAnchorClicked, { passive: false })

  setTimeout(() => {
    navigate()
  }, 500)
})

</script>

<template>
  <div
    v-if="frontmatter.display ?? frontmatter.title"
    class="prose mx-auto mt-16 mb-8"
    :class="frontmatter.display ? 'main-layout': 'prose-layout'"
  >
    <div class="w-full text-center my-8">
      <a
        class="link title-text"
        href="/"
      >Donald</a>
      <span class="title-text cursor-default font-mono"> x </span>
      <a
        class="link title-text"
        href="/posts"
      >Posts</a>
    </div>
    <h1>
      {{ frontmatter.display ?? frontmatter.title }}
    </h1>
    <p
      v-if="frontmatter.date"
      class="text-slate-600 font-mono border-b border-dashed border-theme pb-5 text-sm"
    >
      {{ formatDate(frontmatter.date, 'YYYY/MM/DD HH:mm') }}
    </p>
  </div>
  <article
    ref="content"
    class="prose m-auto pb-32"
    :class="frontmatter.display ? 'main-layout': 'prose-layout'"
  >
    <slot />
  </article>
</template>

<style scoped>
.link {
  @apply cursor-pointer font-italic text-theme;
}

.title-text {
  @apply font-bold text-xl;
}
</style>
