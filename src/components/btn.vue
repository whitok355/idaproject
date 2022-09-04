<template>
    <button class="b-btn">Добавить товар</button>
</template>
<script>
export default {
    name: 'btn',
}
</script>
<style lang='sass' scoped>
.b-btn
    background: $btnColor
    border-radius: 10px
    padding: 10px 0
    font-weight: 600
    font-size: 12px
    line-height: 15px
    letter-spacing: -0.02em
    color: $inputColor
    border: none
.b-btn:hover
    cursor: url(~@/assets/img/cursor.svg), auto
</style>