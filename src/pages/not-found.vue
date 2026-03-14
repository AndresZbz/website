<script setup lang="ts">
import Card from '../components/Card.vue';

</script>

<template>
    <Card class="message" title="Whoops">
        <p>Theres nothing to look here. For now.</p>
    </Card>
</template>

<style>
.message {
    width: 100%;
    max-width: 700px;
    min-height: 200px;


    display: flex;
    flex-direction: column;
    justify-content: center; /* vertical */
    align-items: center;     /* horizontal */

    text-align: center;
}
</style>