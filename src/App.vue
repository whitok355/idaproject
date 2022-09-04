<template>
  <div class="b-wrapper">
    <div class="b-top">
        <h2>Добавление товара</h2>
        <div class="b-filter">
          <div id="min" @click="sortMin" :class="filters.min ? 'b-selected' : 'b-no-select'" class="b-filter__param">Цена min</div>
          <div id="max" @click="sortMax" :class="filters.max ? 'b-selected' : 'b-no-select'" class="b-filter__param">Цена max</div>
          <div id="name" @click="sortName" :class="filters.name ? 'b-selected' : 'b-no-select'" class="b-filter__param">Наименование</div>
        </div>
    </div>
    <main class="b-main">
      <fields @putGood="putGood"/>
      <div class="b-goods">
        <good v-for="(good, id) in storageGoods" :good="good" :key="id" @removeGood="removeGood"/>
      </div>
    </main>
  </div>
</template>

<script>
import fields from './components/fields';
import good from './components/good';

export default {
  name: 'App',
  components: { fields, good},
  data(){
    return{
      goods:[
        {
          name: 'Iphone',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          link: '~@/assets/img/Rectangle31.png',
          id: 0,
        },
                {
          name: 'TV',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 20000,
          link: './assets/img/Rectangle31.png',
          id: 1,
        },
                {
          name: 'XBox',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 30000,
          link: './assets/img/Rectangle31.png',
          id: 2,
        },
                {
          name: 'Notebook',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 40000,
          link: './assets/img/Rectangle31.png',
          id: 3,
        },
                {
          name: 'Tablet',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 50000,
          link: './assets/img/Rectangle31.png',
          id: 4,
        },
                {
          name: 'Lamp',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 900,
          link: './assets/img/Rectangle31.png',
          id: 5,
        },
                {
          name: 'Table',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 5000,
          link: './assets/img/Rectangle31.png',
          id: 6,
        },
                {
          name: 'Paint',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 340,
          link: './assets/img/Rectangle31.png',
          id: 7,
        },
                {
          name: 'Mouse',
          discr: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 230,
          link: './assets/img/Rectangle31.png',
          id: 8,
        },

      ],
      storageGoods: [],
      filters:{
        min: false,
        max: false,
        name: false,
      }
    }
  },
  mounted(){
      if(!localStorage.goods){
        localStorage.goods = JSON.stringify(this.goods)
        this.storageGoods = this.getGoodsStorage();
      } else{
        this.storageGoods = this.getGoodsStorage();
      }
  },
  methods:{
    putGood(good){
      good.id = this.goods.length;
      this.setItemsStorage(good)
    },
    removeGood(good){
      let arr = this.getGoodsStorage();
      let findGood = arr.find(el => el.id === good.id);
      arr.splice(arr.indexOf(findGood), 1);
      this.storageGoods = arr;
      localStorage.goods = JSON.stringify(arr);

    },
    setItemsStorage(good){
      let arr = this.getGoodsStorage();
      arr.push(good);
      this.storageGoods = arr;
      localStorage.goods = JSON.stringify(arr);
    },
    getGoodsStorage(){
      return JSON.parse(localStorage.goods)
    },
    sortMin(e){
      this.storageGoods.sort((prev, next)=> prev.price - next.price);
      this.chancgeStyle(e)
    },
    sortMax(e){
      this.chancgeStyle(e)
      this.storageGoods.sort((prev, next)=> next.price - prev.price);
    },
    sortName(e){
      this.chancgeStyle(e)
      this.storageGoods.sort((prev, next) => prev.name.localeCompare(next.name));

    },
    chancgeStyle(e){
      for(let i in this.filters){
        this.filters[i] = false
      }
      this.filters[e.target.id] = !this.filters[e.target.id]
    }
  },
}
</script>

<style lang='sass'>
*
  padding: 0
  margin: 0
  font-family: 'Source Sans Pro', sans-serif
.b-wrapper
  padding: 16px
.b-main
  margin-top: 16px
.b-goods
    display: flex
    flex-wrap: wrap
    justify-content: center
.b-filter
  display: flex
  justify-content: space-between
  margin-top: 24px
.b-filter__param
  border-radius: 10px
  font-weight: 600
  font-size: 12px
  line-height: 15px
  letter-spacing: -0.02em
  padding: 5px 10px
  color: $inputColor
.b-filter__param:not(:last-child)
  margin-right: 24px
.b-filter__param:target
    cursor: url(~@/assets/img/cursor.svg), auto
.b-selected
  background: grey
.b-no-select
  background: $btnColor
@include tablet
  .b-goods
    justify-content: space-between
@include bigTablet
  .b-wrapper h2
    text-align: center
@include screen
  .b-wrapper
    max-height: 100vh
  .b-top
    display: flex
    align-items: center
    justify-content: space-between
  .b-main
    display: flex
  .b-wrapper h2
    text-align: left
  .b-fields
    padding: 24px
</style>
