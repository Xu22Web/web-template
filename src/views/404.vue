<template>
	<div class="grid place-items-center h-screen">
		<n-result status="404" title="你访问的页面不存在" description="生活总归带点荒谬!" size="large">
			<template #footer>
				<div class="flex-center">
					<button class="bg-themeColor text-white px-5 py-2 text-base rounded grid-center lg:hover:opacity-90"
						@click="goHome">返回主页</button>
				</div>
			</template>
		</n-result>
	</div>
</template>
<script lang="tsx" setup>
// 路由
const router = useRouter()
// 返回主页
const goHome = () => {
	router.replace('/')
}
</script>
<style lang="less">
</style>
