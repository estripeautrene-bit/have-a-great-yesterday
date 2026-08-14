<template>
  <div class="site-wrapper">
    <main id="main-content" tabindex="-1">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.site-wrapper {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  outline: none;
}
</style>
