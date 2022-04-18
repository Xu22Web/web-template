<script setup lang="tsx">
import router from '../router';
import { useMainStore } from '../store'
//  store
const store = useMainStore()
// data
const data = [
    'Vite +',
    'Vue +',
    'Vue Router +',
    'Pinia +',
    'TypeScript +',
    'TailwindCSS +',
    'Naive UI'
]
const go = () => {
    router.push('/404')
}
</script>
<template>
    <div class="w-full h-screen flex-center flex-col">
    <div class="py-2 font-bold text-2xl text-themeColor">Web Template</div>
        <div class="py-2 font-bold">
            <span v-for="(item, index) in data" :key="index" class="text-themeColor px-2 text-2xl">
                {{ item }}
            </span>
        </div>
        <n-image src="/favicon.ico" class="w-50"></n-image>
        <div class="py-10">
            <n-button class="" @click="go" type="info" size="large">跳转 404</n-button>
        </div>
        <n-button @click="() => store.count++">{{ store.count }}</n-button>
    </div>
</template>

<style>
</style>
