<template>
        <a-layout style="height: 100vh;">
    <a-layout-header>Header</a-layout-header>
    <a-layout-content style="height: 100%;">
            <a-row gutter="0" style="height: 100%;">
            <a-col :span="12">
                <NuxtLink to="/accommodations">Accommodations</NuxtLink>
            </a-col>
            <a-col :span="12">
                <NuxtLink to="/plane-tickets">Plane Tickets</NuxtLink>
            </a-col>
        </a-row>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>

        
</template>

<script>
export default {
    name: 'HelloWorld',
}
</script>

<style scoped>
</style>
