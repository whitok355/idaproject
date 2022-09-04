<template>
        <div class="b-good">
            <btnDel @click="removeGood()"/>
            <img class="b-good__img" :src="getLink" alt="#">
            <div class="b-content">
                <h4 class="b-content__title">{{good.name}}</h4>
                <p class="b-content__discr">{{good.discr}}</p>
                <h3 class="b-content__price"> {{good.price}} руб.</h3>
            </div>
        </div>
</template>
<script>
import btnDel from './btnDel'

export default {
    name: 'good',
    components: { btnDel },
    props:{
        good: {
            type: Object,
        }
    },
    methods:{
        removeGood(){
            this.$emit('removeGood', this.good)
        }
    },
    computed:{
        getLink(){
            return require('@/assets/img/Rectangle31.png');
        }
    }
}
</script>
<style lang='sass' scoped>
.b-good
    height: 423px
    width: 332px
    margin-top: 16px
    position: relative
    margin-right: 15px
.b-good:hover .b-btnDel
    display: flex
.b-good:hover
    cursor: url(~@/assets/img/cursor.svg), auto
.b-good__img
    max-width: inherit
.b-content
    height: 100%
    margin-top: 16px
    padding: 16px
    overflow-y: auto
.b-content__discr
    margin-top: 16px
    word-wrap: break-word
.b-content__price
    margin-top: 16px
.b-btnDel
    position: absolute
    top: -10px
    right: -10px
</style>