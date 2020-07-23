<template>
    <section class="real-app">

        <input type="text"
               class="add-input"
               autofocus="autofocus"
               placeholder="接下来要做什么？"
               @keyup.enter="addTodo"
        >
        <Item :todo="todo"
                v-for="(todo,i) in filterTodos"
                :key="i"
                @del="deleteTodo"
                @update ="updateTodo"
        
        ></Item>
        <Tabs :filter="filter" :todos="todos" @shift="changeFilter" @clearAllCompleted="clearAllCompleted"></Tabs>
    </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id=Date.now().toString()
console.log(id);
    export default {
        components: {
            Item,
            Tabs
        },
       data () {
           return {
              todos:[],
              filter:'all'
           }
       } ,
       created () {
         this.showTodos()  
       },
       computed: {
           filterTodos(){
               console.log("zhoumin");
               if(this.filter ==='all'){
                   
                   console.log("zhoumin");
                   return this.todos
               }else{
                   const completed = this.filter === 'completed'
                    console.log(this.filter);
                    return this.todos.filter(todo=>completed===todo.completed)
               }
               
            }
       },
       methods: {
           showTodos(){
               this.todos = JSON.parse(localStorage.getItem('todos')||'[]')
           },
           addTodo(e){
               if(e.target.value!=''){
                   this.todos.unshift({
                   id: id++,
                   content:e.target.value.trim(),
                   completed: false
                    })
                    e.target.value=''
                    this.filter = 'all'
                    //保存到本地
                    localStorage.setItem('todos',JSON.stringify(this.todos))
               }
               

           },
           deleteTodo(id){
               this.todos.splice(this.todos.findIndex(todo=>{
                   todo.id === id
               }),1)
               localStorage.setItem('todos',JSON.stringify(this.todos))
           },
           changeFilter(state){
               
               this.filter = state
               console.log("zhoumin2"+this.filter);
               
           },
           updateTodo(todo){
               var todos = JSON.parse(localStorage.getItem('todos'))
               todos.some(item=>{
                   if (item.id==todo.id){
                       item.completed = todo.completed
                   }
               })
               localStorage.setItem('todos',JSON.stringify(todos))
           },
           clearAllCompleted(){
               this.todos= this.todos.filter(todo=>!todo.completed)
              localStorage.setItem('todos',JSON.stringify(this.todos)) 
           }
           
       },
    }
</script>

<style lang="stylus" scoped>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    -webkit-font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)

</style>