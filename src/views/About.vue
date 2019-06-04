<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  get count() {
    return Number(localStorage.getItem('count'));
  }

  private created() {
    const c = localStorage.getItem('count');
    const count = c === null ? 0 : Number(c);
    localStorage.setItem('count', String(count + 1));
  }
}
</script>
