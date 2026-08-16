<template>
  <span class="myprogress-mark"><span class="myprogress-mark__my">My</span><span class="myprogress-mark__progress">Progress</span></span>
</template>

<style scoped>
/*
  InlineMyProgress — typographic treatment for the MyProgress feature name.

  Matches the InlineMyDopa / InlineWordmark Playfair Display weight split,
  establishing a consistent typographic family across the product suite.

  Color intentionally NOT hardcoded — inherits currentColor from the parent.
*/
.myprogress-mark {
  font-family: 'Playfair Display', Georgia, serif;
  white-space: nowrap;
  display: inline;
  letter-spacing: -0.01em;
}

.myprogress-mark__my       { font-weight: 900; }
.myprogress-mark__progress { font-weight: 600; }
</style>
