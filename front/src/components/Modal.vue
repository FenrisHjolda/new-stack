<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <div name="header">
            
            <button type="button" class="btn-close" @click="close()">x</button>
          </div>
         
        </header>
        <section class="modal-body">
          <div name="body">
            <ul>
                <router-link to="/">
                  <li>Главная</li>
                </router-link>
                <router-link to="/gallery">
                  <li>Галлерея</li>
                </router-link>
                <router-link to="/shop">
                  <li>Товары</li>
                </router-link>
                <router-link to="/about">
                  <li>О нас</li>
                </router-link>
               
            </ul>
          </div>
       
        </section>
        <footer class="modal-footer">
          <div name="footer">
           
             <router-link class="cart" to="/cart">
              <font-awesome-icon icon="shopping-cart" />
              {{ cartCount }} 
            </router-link>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
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
  methods: {
    close: function() {
      this.$emit("close");
    }
  },
  menuItems: {
        type: Array,
        default: () => [
          {
            link: '/',
            name: 'Dashboard',
            tooltip: 'Dashboard',
            icon: 'bx-grid-alt',
          },
          {
            link: '/gallery',
            name: 'Gallery',
            tooltip: 'Categories',
            icon: 'bx bxs-spreadsheet',
          },
          {
            link: '/shop',
            name: 'Order',
            tooltip: 'Order',
            icon: 'bx-cart-alt',
          },
          {
            link: '/',
            name: 'Report us',
            tooltip: 'Messages',
            icon: 'bx-chat',
          },{
            link: '/about',
            name: 'About us',
            tooltip: 'User',
            icon: 'bx-user',
          },
        
  
        ],
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  border-bottom: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
.modal-backdrop {
    
  position: fixed;
  top: 0;
  bottom: 0;
  left: 110;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.modal {  
  color: black;
    margin-left: 63%;
  width: 300px;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  float: right;
}

.cart {
  margin-right: 10rem;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #5b5e5d;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
</style>
