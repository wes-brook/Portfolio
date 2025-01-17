<script setup>
import Menubar from 'primevue/menubar';
import 'primeicons/primeicons.css'
import { ref } from "vue";

const items = ref([
    {
        label: 'Projects',
   },
    {
        label: 'Resume',
    },
    {
        label: 'Contact',
    },
]);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
};
</script>

<template>
    <div class="navbar-wrapper">
        <Menubar class="menubar">
            <!-- Left-aligned content -->
            <template #start class="menubar-start">
                <span class="font-bold text-lg clickable" @click="scrollToTop">
                    WB
                </span>
            </template>

            <!-- Right-aligned content -->
            <template #end>
                <div class="menubar-end">
                    <Menubar :model="items" class="menubar-end"/>
                    <span class="pi pi-sun" style="margin: 0.5rem"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>
.navbar-wrapper {
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgb(250, 250, 250); 
    z-index: 1000; 
}

.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px; 
    background-color: rgb(250, 250, 250); 
    padding: 0 1rem;
    margin: 0 auto;
    border: none;
}

.menubar-start {
    flex: 1;
}

.menubar-end {
    display: flex;
    align-items: center;
    border: none;
    background-color: rgb(250, 250, 250); 
}

.clickable {
    cursor: pointer;
}
</style>