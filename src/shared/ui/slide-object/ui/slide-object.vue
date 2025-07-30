<script setup>

</script>

<template>
  <div :class="cls['slide']">
    <div :class="cls['slide__plan']">
      <NuxtPicture
        src="/image/plan/plan-card-1.png"
      />
    </div>

    <div :class="cls['slide__body']">
      <div :class="[cls['slide__prop'], cls['slide__prop--square']]">
        <p :class="cls['slide__prop-title']">Площадь</p>
        <p :class="cls['slide__prop-value']">
          <span>132.5</span>
          <span :class="cls['slide__prop-unit']">м²</span>
        </p>
      </div>

      <div :class="cls['slide__features']">
        <div :class="[cls['slide__prop']]">
          <p :class="cls['slide__prop-title']">тип</p>
          <p :class="cls['slide__prop-value']">
            <span>2</span>
            <span :class="cls['slide__prop-unit']">к</span>
          </p>
        </div>

        <div :class="[cls['slide__prop'], cls['slide__prop--floor']]">
          <p :class="cls['slide__prop-title']">Этаж</p>
          <p :class="cls['slide__prop-value']">
            <span>2</span>
            <span :class="cls['slide__prop-unit']">этаж</span>
          </p>
        </div>

        <div :class="[cls['slide__prop'], cls['slide__prop--view']]">
          <p :class="cls['slide__prop-title']">Виды</p>
          <p :class="cls['slide__prop-value']">
            <span :class="cls['slide__prop-icon']">
              <SpriteSymbol name="sea-20" />
            </span>
            <span :class="cls['slide__prop-unit']">вид на море</span>
          </p>
        </div>
      </div>

      <div :class="[cls['slide__prop'], cls['slide__prop--price']]">
        <p :class="cls['slide__prop-title']">стоимость</p>
        <p :class="cls['slide__prop-value']">
          <span>28 795 000</span>
          <span :class="cls['slide__prop-unit']">руб.</span>
        </p>
      </div>
    </div>

    <a href="#" :class="cls['slide__link']">
      <span class="visually-hidden">перейти на страницу объекта</span>
    </a>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
