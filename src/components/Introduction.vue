<script setup lang="ts">
import { computed, reactive } from 'vue'
import { Contact, Keyword } from '~/types'
import { INTRO } from '~/utils/constant'
import { contrastTextColor } from '~/utils/utils'

const paragraph: string[] = reactive(INTRO.MAIN_CONTENT.split(' '))

type EmitType = {
  (e: 'hovering', value: string): void
  (e: 'leaving'): void
}

const props = defineProps({
  bgColor: {
    type: String,
    default: '#eee',
  },
})

const emit = defineEmits<EmitType>()

const onHoverKw = (content: string): void => {
  emit('hovering', content)
}

const textColor = computed(() => {
  let color = '#333'
  if (props.bgColor !== '') {
    color = contrastTextColor(props.bgColor)
  }

  return color
})

const contactList: Contact[] = reactive([
  {
    icon: 'mdi-github',
    text: '@donaldxdonald',
    link: 'https://github.com/donaldxdonald',
  },
  {
    icon: 'mdi-email-outline',
    text: 'donaldxdonald@duck.com',
    link: 'mailto:donaldxdonald@duck.com',
  },
])

const keywords: Record<number, Keyword> = reactive({
  3: {
    text: 'Donald',
    link: '/blog',
  },
  4: {
    text: 'Mok',
    link: '/blog',
  },
  20: {
    text: 'made',
    link: '/blog',
  },
  22: {
    text: 'programming',
    link: '/blog',
  },
  36: {
    text: 'photo',
    link: '/blog',
  },
  38: {
    text: 'film',
    link: '/blog',
  },
  43: {
    text: 'music',
    link: '/blog',
  },
  51: {
    text: 'blog',
    link: '/blog',
  },
  55: {
    text: 'weekly',
    link: '/weekly',
  },
})
</script>

<template>
  <div
    class="mt-20 flex flex-col justify-center items-center"
    :style="{ color: textColor }"
  >
    <div class="font-title hover:font-mono hover:italic cursor-default text-4xl leading-normal mb-10">
      DonaldxDonald
    </div>
    <div class="context-wrap max-w-sm main-layout font-sans">
      <div align="left">
        <span class="font-bold">Hello guys!</span>
      </div>
      <span>
        <span
          v-for="(content, index) in paragraph"
          :key="index"
        >
          <span
            v-if="keywords[index]"
            class="intro-kw"
          >
            <a
              v-if="keywords[index].link"
              :href="keywords[index].link"
              @mouseover="onHoverKw(keywords[index].text)"
              @mouseleave="emit('leaving')"
            >{{ ` ${content} ` }}</a>
            <span v-else>{{ ` ${content} ` }}</span>
          </span>
          <span
            v-else
            class="content-block"
          >{{ keywords[index + 1] ? content : `${content} ` }}</span>
        </span>
      </span>
      <div class="mt-10 text-md">
        <div
          v-for="(item, index) in contactList"
          :key="index + item.text"
          class="flex items-center"
        >
          <mdi-github
            v-if="index === 0"
            :color="textColor"
          />
          <mdi-email-outline
            v-else
            :color="textColor"
          />
          <a
            class="ml-2 text-xxl dark:text-slate-800 text-theme"
            :href="item.link"
          >{{ item.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.context-wrap {
  @apply  text-lg text-justify leading-loose;
  word-spacing: .5rem;
}
.context-wrap:hover  .content-block {
  background-color: #000;
  color: #000;
}

.intro-kw {
  text-shadow: 0 5px 7px rgb(125 75 222);
}
</style>
