<script setup lang="ts">
import THEME_CONFIG from './config/theme';
// 主题
const themeOverrides = ref(THEME_CONFIG)
</script>
<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <n-notification-provider>
        <n-message-provider>
          <n-dialog-provider>
            <div class="main_wrap">
              <router-view></router-view>
            </div>
          </n-dialog-provider>
        </n-message-provider>
      </n-notification-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
<style>
</style>
