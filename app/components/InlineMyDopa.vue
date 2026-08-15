<template>
  <span class="mydopa-mark"><span class="mydopa-mark__my">My</span><span class="mydopa-mark__dopa">Dopa</span><sup class="mydopa-mark__tm">™</sup></span>
</template>

<style scoped>
/*
  InlineMyDopa — typographic treatment for the MyDopa brand name.

  Matches the MyHGY wordmark's Playfair Display / 900+600 weight split,
  establishing the two products as a deliberate typographic family.

  Color intentionally NOT hardcoded — inherits currentColor from the parent.
  This means it works correctly in links (hover states apply to the whole
  mark), on any background, and in any text color context, without the
  two-tone color conflict that a hardcoded split would cause.
*/
.mydopa-mark {
  font-family: 'Playfair Display', Georgia, serif;
  white-space: nowrap;
  display: inline;
  letter-spacing: -0.01em;
}

.mydopa-mark__my   { font-weight: 900; }
.mydopa-mark__dopa { font-weight: 600; }

.mydopa-mark__tm {
  font-size: 0.36em;
  font-weight: 700;
  vertical-align: super;
  line-height: 1;
  margin-left: 0.04em;
}
</style>
