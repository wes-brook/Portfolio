<script setup>
import Menubar from 'primevue/menubar';
import 'primeicons/primeicons.css';
import { ref } from 'vue';

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
            <template #start>
                <div class="menubar-start">
                    <span class="font-bold text-lg clickable" @click="scrollToTop">
                        WB
                    </span>
                </div>
            </template>
            
            <!-- Right-aligned content -->
            <template #end>
                <div class="menubar-end">
                    <Menubar :model="items" class="menubar"/>
                    <span class="pi pi-sun" style="margin: 0.5rem"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>
.navbar-wrapper {
    max-width: var(--container-max-width); /* Use the container width */
    width: calc(100% - 0em); /* Account for 2rem padding on each side */
    margin: 0 auto; /* Center the navbar */
    z-index: 1000; 
    position: fixed;
    top: 0; 
    left: 0; 
    right: 0;
    box-sizing: border-box; /* Ensure padding doesn’t add extra width */
}

.menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; /* Prevent overflow within the menubar */
    padding: 0 0rem; /* Internal spacing */
    margin: 0; /* Avoid unnecessary margins */
    border-radius: 0;
    border: none;
    background: #ffffff;
    box-sizing: border-box; /* Include padding in the width calculation */
}

.menubar-start {
    flex: 1;
}

.menubar-end {
    display: flex;
    align-items: center;
    border: none;
}

.clickable {
    cursor: pointer;
}

/* Optional: Prevent body scrolling if other content causes overflow */
body {
    overflow-x: hidden;
}
</style>
