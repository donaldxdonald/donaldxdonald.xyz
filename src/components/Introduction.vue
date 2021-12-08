<script setup lang="ts">
import { contrastTextColor } from '~/utils/utils'
import {Contact,Keyword} from './common.type'
  let paragraph: string[][] = reactive([])

  const props = defineProps({
    bgColor: {
      type: String,
      default: '#fff'
    }
  })

  const bgc = ref('#fff')

  const textColor: string = computed(() => {
    let color = '#333'
    if (bgc.value !== '') {
      color = contrastTextColor(bgc.value)
    }
    return color
  })

  const contactList: Contact[] = reactive([
    {
      icon: 'mdi-github',
      text: '@donaldxdonald',
      link: 'https://github.com/donaldxdonald'
    },
    {
      icon: 'mdi-email-outline',
      text: 'mzhlovefama@hotmail.com',
      link: 'mailto:mzhlovefama@hotmail.com'
    }
  ])
  const hobbies: Record<string, Keyword> = reactive({
    programming: {
      text: 'programming',
      link: 'http://article.donaldxdonald.xyz'
    },
    film: {
      text: 'film',
      link: '#'
    },
    music: {
      text: 'music',
      link: '#'
    },
    photo: {
      text: 'photography',
      link: '#'
    }
  })

  const generatePara = () => {
    const para1 = 'My name is'
    const para2 = "You can call me 莫志豪 in Chinese. This website is a display of what I've"
    const para3 = 'Sharing'
    const para4 = 'experience seems an interesting thing to me. What makes me chill is absolutely'
    const para5 = 'and'
    const para6 = 'especially literary film. Moreover,'
    const para7 = 'and video games are my nicotine. Just keep taking'
    paragraph.push(para1.split(' '))
    paragraph.push(para2.split(' '))
    paragraph.push(para3.split(' '))
    paragraph.push(para4.split(' '))
    paragraph.push(para5.split(' '))
    paragraph.push(para6.split(' '))
    paragraph.push(para7.split(' '))
    
  }
  onMounted(() => generatePara())
</script>

<template>
  <div class="intro-container flex flex-col justify-center items-center" :style="{ color: textColor }">
    <div class="main-title w-100 text-2xl mb-20">DonaldxDonald</div>
    <div class="context-wrap bg-pink-100 w-90 lg:w-50 md:w-70 sm:w-80">
      <div align="left">
        <span class="opening">Hello guys!</span>
      </div>
      <div>
        <span v-for="(text, index) in paragraph[0]" :key="index + text" class="content-block">{{
          index === paragraph[0].length - 1 ? text : `${text} `
        }}</span>
        <span> Donald Mok. </span>
        <span v-for="(text, index) in paragraph[1]" :key="text + index" class="content-block">{{
          index === paragraph[1].length - 1 ? text : `${text} `
        }}</span>
        <span> made. </span>
        <span v-for="(text, index) in paragraph[2]" :key="index + text" class="content-block">{{
          index === paragraph[2].length - 1 ? text : `${text} `
        }}</span>
        <a
          class="intro-kw"
          :style="{ color: textColor }"
          :href="hobbies.programming.link"
        >
          {{ hobbies.programming.text }}
        </a>
        <span v-for="(text, index) in paragraph[3]" :key="index + text" class="content-block">{{
          index === paragraph[3].length - 1 ? text : `${text} `
        }}</span>
        <a class="intro-kw" :style="{ color: textColor }" :href="hobbies.photo.link">
          {{ hobbies.photo.text }}
        </a>
        <span v-for="(text, index) in paragraph[4]" :key="index + text" class="content-block">{{
          index === paragraph[4].length - 1 ? text : `${text} `
        }}</span>
        <a class="intro-kw" :style="{ color: textColor }" :href="hobbies.film.link">
          {{ hobbies.film.text }}
        </a>
        <span v-for="(text, index) in paragraph[5]" :key="index + text" class="content-block">{{
          index === paragraph[5].length - 1 ? text : `${text} `
        }}</span>
        <a class="intro-kw" :style="{ color: textColor }" :href="hobbies.music.link">
          {{ hobbies.music.text }}
        </a>
        <span v-for="(text, index) in paragraph[6]" :key="index + text" class="content-block">{{
          index === paragraph[6].length - 1 ? text : `${text} `
        }}</span>
        <span> notes. </span>
      </div>
      <!-- <div class="contact-list">
        <div
          v-for="(item, index) in contactList"
          :key="index + item.text"
          class="list-item dp-flex ai-center"
        >
          <v-icon :color="textColor">{{ item.icon }}</v-icon>
          <a class="ml-2 fz-xxl primary--text" :href="item.link">{{ item.text }}</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style>
.intro-container {
  margin-top: 8vh;
}
.main-title {
  font-family: 'Agency FB','Microsoft YaHei','sans-serif';
}
.opening {
  font-family: 'Futura LT Medium', 'serif';
}

.context-wrap {
  text-align: justify;
  font-size: 1.5625rem;
  line-height: 1.5625rem * 2;
  word-spacing: .5rem;
}
    .context-wrap:hover, .context-wrap:focus > .block {
        background-color: #000;
        color: #000;
    }
</style>