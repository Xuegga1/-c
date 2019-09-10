<!--
 * @Author: Meicen
 * @Date: 2019-08-30 15:55:18
 * @LastEditors: Meicen
 * @LastEditTime: 2019-09-02 20:09:38
 -->
<template>
    <div class="foot">
       <p class="xuanze"> 
       <span @click="priceTop()">价格升序</span>
       <span @click="priceDown()">价格降序</span>
       <span @click="sortTop()">销量升序</span>
       <span @click="sortDown()">销量降序</span>
       </p>
           <Item
           :list='list'
           :handLink='link'
           >
        </Item>       
    </div>
    
</template>
<script>
import axios from 'axios'
import Item from '../../components/item'
export default {
    props:{

    },
    components:{
     Item
    },
    data(){
        return {
           list:[],
           //详情列表
           detailList:[]
        }
    },
    computed:{

    },
    methods:{
        //sort价格升序排列
         priceTop(){
         this.list.sort((priceA,priceB)=>{
             return priceA.price - priceB.price
         })},
         //sort价格降序排列
         priceDown(){
         this.list.sort((priceA,priceB)=>{
             return priceB.price - priceA.price
         })},
         //sort销量升序
         sortTop(){
         this.list.sort((buyCountA,buyCountB)=>{
             return buyCountA.buyCount - buyCountB.buyCount
         })
         },
         //sort销量降序
         sortDown(){
         this.list.sort((buyCountA,buyCountB)=>{
             return buyCountB.buyCount - buyCountA.buyCount
         })
         },
         //子传父 跳转详情  id在Item组件里的  link方法传的 item.id
         link(id){
          this.$router.push({path:'/detail/'+id})
         }
    },
    created(){
     axios.get('/list').then(res=>{
        this.list= res.data.data.goodList
     })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   .foot{
       flex: 1;
       overflow: auto;
       .xuanze{
           width: 90%;
           height: 40px;
           border-bottom: 1px solid #ccc;
           margin: 0 auto;
           span{
               text-align: center;
               line-height: 40px;
               margin-left: 15px;
               color: #ccc;
           }
       }
      
   }
</style>