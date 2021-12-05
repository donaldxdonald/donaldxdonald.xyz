<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';
const { t } = useI18n() 

</script>

<template>
  <nav>
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      {{ t('button.home') }}
    </router-link>
    <router-link class="icon-btn mx-2" to="/blog" :title="t('button.blog')">
      {{ t('button.blog') }}
    </router-link>
    <button class="icon icon-btn !outline-none mx-2" :title="t('button.toggle_dark')" @click="toggleDark">
      <carbon-sun v-if="isDark"/>
      <carbon-moon v-else/>
    </button>
    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/donaldxdonald" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template>

<style scoped>
.icon {
  vertical-align: middle;
}
</style>