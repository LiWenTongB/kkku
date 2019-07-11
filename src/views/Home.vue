<template>
  <div class="home">
    <router-view  />
    <ul class="footer">
      <li>
        <router-link to='/home/take'><i class="fa fa-edge" ></i>外卖</router-link>
      </li>
      <li>
        <router-link to='/home/supermarket'><i class="fa fa-shopping-bag" ></i>超市</router-link>
      </li>
       <li>
        <router-link to='/home/order'><i class="fa fa-bars"></i>订单</router-link>
      </li>
       <li>
        <router-link to='/home/my'><i class="fa fa-user-circle"></i>我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style lang="scss">
.footer{
  position: fixed;
  display: flex;
  bottom: 0;
  width:100%;

  background:#fff;
  li{
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    margin-bottom: 0.15rem;
     
  a{
    display: flex;
     flex-direction: column;
     color: #000;
     font-size: 0.3rem;
    
     i{
       display: inline-block;
       width: 100%;
      font-size: 0.4rem;
      margin-bottom: 0.1rem;
     }

  }
  }

}
 .footer li .router-link-exact-active{
          color:#0089dc;
  }
</style>
