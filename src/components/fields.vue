<template>
    <form class="b-form" @submit.prevent="onSubmit">
        <div class="b-field">
            <label class="b-label" name='name'>Наименование товара<span class='b-point'></span></label>
            <input @input="checker" v-model="value.name" class="b-input" name='name' placeholder="Введите наименование товара">
            <div :class='errors.name.boolean? "b-err" : "b-hidden"'>Поле является обязательным</div>
        </div>
        <div class="b-field">
            <label class="b-label" name='link'>Ссылка на изображение<span class='b-point'></span></label>
            <input @input="checker" v-model="value.link" class="b-input" name='link' placeholder="Введите ссылку">
            <div :class='errors.link.boolean? "b-err": "b-hidden"'>Поле является обязательным</div>
        </div>
        <div class="b-field">
            <label class="b-label" name='discr'>Описание товара</label>
            <textarea wrap="CR+LF" v-model="value.discr" class="b-input b-area" name='discr' placeholder="Описание товара"></textarea>
        </div>
        <div class="b-field">
            <label class="b-label" name='name'>Цена товара<span class='b-point'></span></label>
            <input @input="checker" v-model="value.price" class="b-input" name='link' placeholder="Цена товара">
            <div :class='errors.price.boolean? "b-err": "b-hidden"'>Поле является обязательным</div>
        </div>
        <btn :disabled="btn"/>
    </form>
</template>
<script>
import btn from './btn'

export default {
    name: 'field',
    components: { btn },
    data(){
        return{
            value:{
                name: undefined,
                link: undefined,
                discr: undefined,
                price: undefined,
            },
            errors:{
                name: {
                    boolean: false,
                },
                link: {
                    boolean: false,
                },
                price: {
                    boolean: false,
                }
            },
            btn: true,
        }
    },
    methods:{
        onSubmit(){
            if(this.checker()){
                let newGood = {name: this.value.name, discr: this.value.discr, price: this.value.price, link: this.value.link};
                this.$emit('putGood', newGood)

            }
        },
        checker(){
            let res;
            this.errors.name.boolean = this.validatorName;  
            this.errors.link.boolean = this.validatorLink;
            this.errors.price.boolean = this.validatorPrice;
            if( this.errors.name.boolean === false && this.errors.link.boolean === false && this.errors.price.boolean === false){
                res = true;
                this.btn = false;
            } else{
                res =false
            }
            return res
        }
    },
    computed: {
        validatorName(){
            let re = /^[а-яА-ЯёЁa-zA-Z]+$/;
            return !(re.test(this.value.name));
        },
        validatorLink(){
            let re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
            return !(re.test(this.value.link));
        },
        validatorPrice(){
            let re = /^[0-9]+\.?[0-9]+$/;
            return !(re.test(this.value.price));
        },
        numberFormat(){
            return new Intl.NumberFormat('ru-RU').format(this.value.price);
        }
    }
}
</script>
<style lang="sass" scoped>
.b-form
    display: flex
    flex-direction: column
.b-field
    display: flex
    flex-direction: column
.b-btn-container
    margin-top: 24px
.b-label
    margin-top: 12px
    position: relative
.b-point
    width: 4px
    height: 4px
    background: $supportColor
    border-radius: 4px
    position: absolute
.b-input
    border: none
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1)
    border-radius: 4px
    padding: 10px 16px
.b-area
    height: 108px
.b-err
    color: $supportColor
    font-weight: 400
    font-size: 8px
    line-height: 10px
    letter-spacing: -0.02em
    margin-top: 4px
.b-btn
    margin-top: 24px
.b-hidden
    display: none
@include bigTablet
    .b-form 
        min-width: 332px
        margin: 0 auto
@include screen
    .b-form
        height: 440px
        padding: 24px
        box-sizing: border-box
        margin: 0
</style>