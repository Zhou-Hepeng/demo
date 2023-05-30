<template>
  <div>
    <header>Header</header>
    
    <section>
      <aside>
        <img src="/m-img/logo.png" alt="">
      </aside>  
      <a href="123">这个是链接</a>
      <main>
        <div class="container">
          <div class="row">
            <div class="col-4" v-for="item in 25" :key="item">
            <div class="box"><img :src="`https://dummyimage.com/150x120/9d2315/fff`" alt=""></div>            
            </div>            
          </div>          
        <div class="container">        
          <div class="row">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="item in 25" :key="item">
              <div class="box"><img :src="`https://dummyimage.com/150x120/9d2315/fff`" alt=""></div>          
            </div>                          
          </div>        
        </div> 
          <div class="container">       
          <div class="row">             
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="item in 25" :key="item">
              <div class="box"><img :src="`https://dummyimage.com/150x120/9d2315/fff`" alt=""></div>
            </div>
          </div>
        </div>  
        </div>  
      </main> 
    </section>

    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  } 
}
</script>

<style>
/*
*  css reset
*/
*{
  margin:0;
  padding:0;
}

ul,li{
  list-style: none;
}
a{
  color:#3d3d3d;
  text-decoration: none; /**去掉a链接的下划线 */
}



header, footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  padding: 20px 0;  
}

aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  padding: 100px 0;  
}   

main {
  background-color: #E9EEF3;
  color: #333; 
  padding: 60px 0;  
}

.container {
  width: 100%; 
  margin: 0 auto;
  padding: 0 20px; 
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-4 {
  width: 33%;
}

.col-6 {
  width: 50%; 
}

.col-12 {
  width: 100%;  
}

@media (min-width: 576px) { 
  .col-sm-4 {
    width: 33%;   
  }
  
  .col-sm-6 {
    width: 50%;   
  }  
}

@media (min-width: 768px) { 
  .col-md-3 {
    width: 25%;
  }
  
  .col-md-4 {
    width: 33%; 
  } 
}

@media (min-width: 992px) { 
  .col-lg-2 {
    width: 16.66%;
  }
  
  .col-lg-3 {
    width: 25%;   
  } 
}

.box {
  border: 1px solid #999;
  padding: 20px; 
}
</style>