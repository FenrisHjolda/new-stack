<template>
  <div id="app">
    <MevnHeader :categories="categories" :cartCount="cartCount" />
    <SidebarMenu/>
    <div class="container">
      <div class="row">
        
        <div class="col-lg-9 margin-s">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import SidebarMenu from "@/components/Sidebar-menu.vue"
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    SidebarMenu: ( ) => import('@/components/Sidebar-menu.vue'),
    MevnHeader: () => import('@/components/layouts/Header'),
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories',
    }),
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cartCount',
    }),
  },
}
</script>

<style lang="scss">
body {
  padding-top: 56px;
}
.margin-s {
  margin-top: 95px;
}
// body,
// html {
//   padding: 0;
//   margin: 0;
// }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
