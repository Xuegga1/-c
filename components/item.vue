<!--
 * @Author: Meicen
 * @Date: 2019-08-30 20:14:24
 * @LastEditors: Meicen
 * @LastEditTime: 2019-09-03 08:22:27
 -->
<template>
<div class="right">
     <div class="box" v-for="(item,index) in list" :key="index" @click="link(item.id)">
        <div class="left">
               <img :src=item.pic alt="">
           </div>
           <div class="right">
               <h3>{{item.name}}</h3>
               <p>已售 {{item.buyCount}}</p>
               <p>单价: <span class="red">{{item.price}}</span> 
               <button @click.stop="add(item.id)" class="btn">加入购物车</button></p>
           </div>
       </div>
        <div class="dialog" @click="goCar">
        购物车
       </div>
       </div>
</template>
<script>
export default {
    //接受props传过来的 list 和 handLink
    props:['list',"handLink"],
    components:{
   
    },
    data(){
        return {
        //购物车列表
           carList:[],
        //计数器
           count:0
        }
    },
    computed:{

    },
    methods:{
    //根据id添加
  add(id){
      //循环遍历  list里的id   和点击项的id是否匹配
      this.list.filter(item=>{
          //如果匹配
          if(item.id===id){
            // item.count = 1
            //给点击加入购物车的数据里添加count属性  且初始值为1
            this.$set(item,'count',1)
            //把点击筛选加入的item添加到购物车
            this.carList.push(item)
          }
      })
    },
    //跳转到购物车  用query传参把carList传到购物车路由
      goCar(){
        this.$router.push({path:"/car",query:{carList:this.carList}})
    },
    //子传父  把子组件的id  通过handLink传到父组件
      link(id){
        this.handLink(id)
      }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
 .box{
           margin: 15px;
           width: 90%;
           height: 100px;
           display: flex;
       }
       .left{
           flex: 3;
           img{
               width: 100%;
               height: 100%;
           }
       }
.right{
    flex:7;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
           h3{
               margin-top: 5px;
               

           }
           p{
               margin-top: 10px;
               color: #ccc;
           }
           .red{
               color: red;
           }
           .btn{
               width: 100px;
               margin-left: 40px;
               background: red;
               color: #fff;
               border: 0;
           }
       }
       .dialog{
           width: 50px;
           height: 50px;
           position: absolute;
           background: blue;
           right: 0;
           bottom: 30px;
           border-radius: 50%;
           text-align: center;
           line-height: 50px;
           color: white;
       }

</style>