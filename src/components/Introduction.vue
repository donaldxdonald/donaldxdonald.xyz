<script setup lang="ts">
import { reactive, computed } from 'vue'
import { Contact, Keyword } from './common.type'
import { INTRO } from '~/utils/constant'
import { contrastTextColor } from '~/utils/utils'

const paragraph: string[] = reactive(INTRO.MAIN_CONTENT.split(' '))

const props = defineProps({
  bgColor: {
    type: String,
    default: '#eee',
  },
})

const emit = defineEmits<{
  (e: 'hovering', value: string): void
  (e: 'leaving'): void
}>()

const onHoverKw = (content: string): void => {
  emit('hovering', content)
}

const textColor = computed(() => {
  let color = '#333'
  if (props.bgColor !== '') { color = contrastTextColor(props.bgColor) }

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
    text: 'mzhlovefama@hotmail.com',
    link: 'mailto:mzhlovefama@hotmail.com',
  },
])

const keywords: Record<number, Keyword> = reactive({
  3: {
    text: 'Donald',
  },
  4: {
    text: 'Mok',
  },
  20: {
    text: 'made',
  },
  22: {
    text: 'programming',
    link: 'http://article.donaldxdonald.xyz',
  },
  36: {
    text: 'photo',
    link: '#',
  },
  38: {
    text: 'film',
    link: '#',
  },
  43: {
    text: 'music',
    link: '#',
  },
  53: {
    text: 'notes',
  },
})
</script>

<template>
  <div class="mt-1/25 flex flex-col justify-center items-center" :style="{ color: textColor }">
    <div class="font-title w-100 text-4xl leading-normal mb-10">
      DonaldxDonald
    </div>
    <div class="context-wrap">
      <div align="left">
        <span class="font-highlight font-bold">Hello guys!</span>
      </div>
      <span>
        <span v-for="(content, index) in paragraph" :key="index">
          <span
            v-if="keywords[index]" class="intro-kw"
          >
            <a
              v-if="keywords[index].link" :href="keywords[index].link"
              @mouseover="onHoverKw(keywords[index].text)"
              @mouseleave="emit('leaving')"
            >{{ ` ${content} ` }}</a>
            <span v-else>{{ ` ${content} ` }}</span>
          </span>
          <span v-else class="content-block">{{ keywords[index + 1] ? content : `${content} ` }}</span>
        </span>
      </span>
      <div class="mt-10 text-md">
        <div
          v-for="(item, index) in contactList"
          :key="index + item.text"
          class="flex items-center"
        >
          <mdi-github v-if="index === 0" :color="textColor" />
          <mdi-email-outline v-else :color="textColor" />
          <a class="ml-2 text-xxl dark:text-dark-400 text-blue-400" :href="item.link">{{ item.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.context-wrap {
  @apply  text-lg text-justify leading-loose w-4/5 xl:w-1/4 lg:w-2/5 md:w-2/5 sm:w-3/5;
  word-spacing: .5rem;
}
.context-wrap:hover  .content-block {
  background-color: #000;
  color: #000;
}
</style>
