<template>
  <div class="site-wrapper">
    <TheHeader />
    <main id="main-content" tabindex="-1" class="site-main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.site-wrapper {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

/* Offset fixed header — value comes from --header-height in tokens.css */
.site-main {
  flex: 1;
  padding-top: var(--header-height);
  outline: none;
}
</style>
