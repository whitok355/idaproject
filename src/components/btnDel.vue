<template>
    <div class="b-btnDel">
        <cart/>
    </div>
</template>
<script>
import cart from './svg/cart';

export default {
    name: 'btnDel',
    components: { cart }
}
</script>
<style lang='sass' scoped>
.b-btnDel
    display: none
    justify-content: center
    align-items: center
    width: 32px
    height: 32px
    border-radius: 10px
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1)
    background: $supportColor
</style>