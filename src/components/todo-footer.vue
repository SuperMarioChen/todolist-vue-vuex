<template>
   <footer class="footer">
        <span class="todo-count">
            <strong>{{weixuan}}</strong>
            <span>条未选中</span>
        </span>
        <ul class="filters">
            <li><a href="#/all" :class="{selected:$store.state.hash==='all'}">All</a></li> 
            <li><a href="#/active" :class="{selected:$store.state.hash==='active'}">Active</a></li> 
            <li><a href="#/completed" :class="{selected:$store.state.hash==='completed'}">Completed</a></li>
        </ul>
    </footer>
</template>
<script>
   export default{
       computed:{
           weixuan(){
               return this.$store.state.list.filter((item)=>{
                   return !item.checked
               }).length
           }
       },
       mounted(){  // 挂载完成之后的钩子函数
            window.addEventListener('hashchange',()=>{
                let hash=window.location.hash.slice(2)
                this.$store.commit('hashchanged',{
                    hash:hash
                })
            })
            
        }
   }
</script>