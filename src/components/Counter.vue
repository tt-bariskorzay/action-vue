<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">Sayaç: {{ count }}</button>
</template>
