<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Frontmatter } from '~/types'
import { formatDate } from '~/utils/utils'
import DonaldxHeader from './DonaldxHeader.vue'

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
    class="mx-auto"
    :class="frontmatter.display ? 'main-layout': 'prose-layout'"
  >
    <DonaldxHeader />
    <div
      v-if="frontmatter.display ?? frontmatter.title"
      class="prose w-full mb-8"
    >
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
      class="prose pb-32 w-full"
    >
      <slot />
    </article>
  </div>
</template>
