<template>
   <section class="main">
        <input class="toggle-all" type="checkbox" v-model="checkedall" />
        <ul class="todo-list">
            <Item v-for="item,index in filterlist" 
                :item="item" 
                :key="item.id"
                @bianji-p="bianjipx"
                :bianjiid="bianjiid"
            ></Item>
            
        </ul>
    </section>
</template>
<script>
    import Item from './item'
    export default{
        data(){
            return {
                bianjiid:-1
            }
        },
        components:{
            Item
        },
        computed:{
            checkedall:{
                get(){
                    return this.$store.getters.ischeckedall//因为ischeckedall用到了每一个选中的状态
                    //点每一个的时候会改变ischeckedall  所以checkedall对应的get也会改变
                },
                set(newval){
                    this.$store.commit('updatacheckedall',{
                        checked:newval//设置的时候把单选都改了
                    })
                }
            },
            filterlist(){
                
                if(this.$store.state.hash === 'all'){
                    return this.$store.state.list;
                }else if(this.$store.state.hash === 'active'){
                    return this.$store.state.list.filter(item => !item.checked)
                }else if(this.$store.state.hash === 'completed'){
                    return this.$store.state.list.filter(item => item.checked)
                }
            }

        },
        
        methods:{
            bianjipx(id){
                this.bianjiid=id.id
            }
        }
    }
    
</script>