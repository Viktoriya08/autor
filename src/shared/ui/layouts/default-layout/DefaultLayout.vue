<template>
  <div class="page">
    <div class="page__core">
      <slot name="header"></slot>
      <slot />
    </div>
    <slot name="footer"></slot>
    <div id="header-menu"></div>
    <div id="modals"></div>
  </div>
</template>
