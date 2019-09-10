<!--
 * @Author: Meicen
 * @Date: 2019-08-30 15:54:05
 * @LastEditors: Meicen
 * @LastEditTime: 2019-08-30 20:53:35
 -->
<template>
    <div class="wrap">
     <Head></Head>
     <Main></Main>
     <Foot></Foot>
    </div>
</template>
<script>
import Head from './head'
import Main from './main'
import Foot from './foot'
export default {
    props:{

    },
    components:{
      Head,Main,Foot
    },
    data(){
        return {

        }
    },
    computed:{

},
    methods:{

},
    created(){
      
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   .wrap{
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
   }
</style>