<template>
    <header class="header" >
        <h1>todos</h1>
        <input class="new-todo" placeholder="请输入内容" v-model="value" 
        @keydown.13="addtodo"/>
    </header>
</template>
<script>
    export default{
        data(){
            return {
                value:""
            }
        },
        methods:{
            addtodo(){
                
                this.$store.commit("addtodox",{
                    title:this.value,
                    id:Date.now(),
                    checked:false
                })
                this.value=''
            }
        }
    }
</script>