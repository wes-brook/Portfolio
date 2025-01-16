<script setup>
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'Projects',
        command: () => {
            router.push('/projects');
        }
    },
    {
        label: 'Resume',
        command: () => {
            router.push('/resume');
        }
    },
    {
        label: 'Contact',
        command: () => {
            router.push('/contact');
        }
    },
    {
        label: 'Dark Mode',
    }
]);
</script>

<template>
    <Menubar class="menubar">
        <!-- Left-aligned content -->
        <template #start class="menubar-start">
            <span 
                class="font-bold text-lg cursor-pointer"
                @click="router.push('/')"
            >
                WB
            </span>
        </template>

        <!-- Right-aligned content -->
        <template #end class="menubar-end"> 
            <Menubar :model="items" />
        </template>
    </Menubar>
</template>

<style scoped>
.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
}

.menubar-start {
    flex: 1;
}

.menubar-end {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}
</style>