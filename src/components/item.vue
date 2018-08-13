<template>
    <li :class="{completed:item.cheched,editing:bianjiid===item.id}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="checkedone" />
            <label 
                @dblclick="bianji"
            >{{item.title}}</label>
            <button class="destroy" 
            @click="delone"></button>
        </div>
        <input 
            class="edit" 
            ref="input"
            v-model="value"
            @keydown.13="xiugai"
            @keydown.esc="canceledit"
            @blur="xiugai"
        />
    </li>
</template>
<script>
 export default{
     data(){
         return {
             value:this.item.title,
         }
     },
     props:{//data还有props中的属性都放在实例上
         item:{
             type:Object,
             default(){
                 return {}
             }
         },
         bianjiid:{
             type:Number,
             default(){
                 return -1
             }
         }
     },
     methods:{
         delone(){
             console.log("del")
             this.$store.commit('delonex',{
                 id:this.item.id
             })
         },
         bianji(){
             this.$emit('bianji-p',{
                 id:this.item.id
             })
             this.$nextTick(()=>{//vue里面并不是每次数据改变都会触发更新dom，
             //而是将这些操作都缓存在一个队列，
             //在一个事件循环结束之后，刷新队列，统一执行dom更新操作
             //所以此处一定要将DOM操作的JS代码放进Vue.nextTick()的回调函数中。
             //而与之对应的mounted钩子函数，该钩子函数执行时所有的DOM挂载和渲染都已完成，
             //此时该钩子函数进行任何DOM操作都不会有个问题。 
                 this.$refs.input.focus()
             })
             
         },
         xiugai(){
             
             this.$store.commit('xiugaip',{
                 
                 id:this.item.id,
                 title:this.value
             })
             this.$emit('bianji-p',{
                 id:-1
             })
         },
         canceledit(){
             this.$store.commit('xiugaip',{
                 
                 id:this.item.id,
                 title:this.item.title,
             })
             this.$emit('bianji-p',{
                 id:-1
             })
         }
     },
     computed:{
         checkedone:{
             get(){
                 return this.item.checked
             },
             set(newvalue){
                 this.$store.commit('updataonechecked',{
                     id:this.item.id,
                     checked:newvalue
                 })
             }

         }
     }

 }
</script>