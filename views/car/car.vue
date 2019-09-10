<!--
 * @Author: Meicen
 * @Date: 2019-08-30 20:06:17
 * @LastEditors: Meicen
 * @LastEditTime: 2019-09-02 20:16:52
 -->
<template>
    <div>
     <div v-for="item in carList" :key="item.id">
        <div class="left">
               <img :src=item.pic alt="">
           </div>
           <div class="right">
               <h3>{{item.name}}</h3>
               <p>已售 {{item.buyCount}}</p>
               <p>单价: <span class="red">{{item.price}}</span> </p>
               <button @click="sub(item.id)">-</button><span class="con">{{item.count}}</span><button @click="add(item.id)">+</button>
           </div>
          
     </div>
      <div class="price">
               <span>总数{{total}}</span>
               <span>总价{{totalPre}}</span>
           </div>
    </div>
</template>
<script>
export default {
    props:{
   
    },
    components:{

    },
    data(){
        return {
         //传递的carList储存到data里
         carList:this.$route.query.carList
        }
    },
    //计算属性
    computed:{
        //reduce计算总数
total(){
    return this.carList.reduce((pre,cur)=>{
      return pre+cur.count
 },0)
    },
    //reduce计算总价
    totalPre(){
    return this.carList.reduce((pre,cur)=>{
      return pre+cur.count * cur.price
    },0)
    }
    },
    methods:{
        //点击减1数量
    sub(id){
        //循环遍历判断点击的哪一项的减号
        this.carList.filter(item=>{
        //判断如果id相等且点击项的count属性大于1
            if(item.id===id&&item.count>1){
        //点击项count属性减1
                item.count--
            }
        })
    },
    add(id){
        //循环遍历判断点击的哪一项的加号
        this.carList.filter(item=>{
            //判断如果每一项的id匹配加号
            if(item.id===id){
            //点击项count属性加1
                item.count++
            }
        })
    }
    
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   .right button{
    display: inline-block;
    width: 70px;
    height: 30px;
    color: red;
   }
    .right .con{
        color: blue
  }
  .price{
      position: fixed;
      top: 0;
      right: 0;
      background: black;
      color: white;
  }
</style>