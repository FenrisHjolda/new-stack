<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">placeholder</router-link>
      <button @click="showModal"
        class="navbar-toggler btn-modal"
        type="button"       
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      
        <span class="navbar-toggler-icon"></span>
       
      </button>
      <Modal v-show="isModalVisible" @close="closeModal"/>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          
          <li class="nav_link">
            <router-link class="nav-link" to="/cart">
              <font-awesome-icon icon="shopping-cart" />
              {{ cartCount }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: 'MevnHeader',
  components: {
    Modal:Modal,
  } ,
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    cartCount: {
      type: Number,
      default: 0,
    },
  },
  
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }

}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;
  padding-inline-start: 0;

  &_link {
    margin-right: 10px;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        color: olive;
      }
    }
  }
}



</style>
