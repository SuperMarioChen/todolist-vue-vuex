<template>
  <section>
   <headers></headers>
   <list></list>
   <footers></footers>
  </section>
</template>

<script>
import headers from './components/todo-header';
import list from './components/todo-list';
import footers from './components/todo-footer'



export default {
  name: 'todoapp',
 
  components: {
   headers,
   list,
   footers
  }
}
</script>

<style>

