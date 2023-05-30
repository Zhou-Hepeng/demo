<template>
  <div>
    345
    <span @click="getUser">这个是个按钮</span>
    <p></p>
    <div></div>

    <div>姓名：{{ userInfo.name }}, 年龄：{{ userInfo.age }}</div>
    <div>信息1：{{ info.inf1 }}, 信息2：{{ info.inf2 }}</div>



    <div v-for="(list, index) in arr1" :key="index">
      <div v-for="classList in list" :key="classList.id">
        班级：{{ classList.class }}
        <div v-for="item in classList.users" :key="item.id"> 姓名：{{ item.name }}</div>
      </div>
    </div>




  <el-button>{{inputValue}}</el-button>

  <el-input v-model="inputValue" placeholder="请输入内容"></el-input>



  <hello-wrod :msg="inputValue" />

  </div>

</template>

<script>

    // let arr = [{name:'',age:18},{name:'',age:20}]

    // let arr1 = 

  import {getUserList, getInfo} from '../api/index'
  import HelloWrod from '../components/HelloWorld.vue'
  console.log(getUserList, 'getUserList')

  export default({
    components: {
      HelloWrod
    },
    data(){
      return {
        inputValue:'',
        userInfo:{
          name:'',
          age:'',
        },
        userList: [],

        info:{
          inf1:"",
          inf2:"",
        },
        arr1:[
          [
            {
              id:1,
              class:'1班',
              users: [{name:'张三'},{name:'李四'}]
            }
          ],
          [
            {
              id:2,
              class:'2班',
              users: [{name:'王五'},{name:'赵六'},{name:'周日'}]
            }
          ]
        ]
      }
    },
    // 不需要记住，了解一下，他的功能mounte都能
    created(){
      console.log(+new Date,'1')
    },
    mounted () {
      console.log(+new Date,'2')
      this.getUser()
    },
    methods: {
      async getUser(){
        // const data = await getUserList()
        // this.userList = data
        this.userInfo = { name:'张三',age:18}
        // console.log(data,'请求数据')
      },
      async getName(){

      },
      async getInfo1(){
        const data = await getInfo({id: this.userInfo.id})
        this.info = data.info //后端返回{inf1: 信息1，inf2: 信息2}
        console.log(this.info, "信息")
      }
    }
  })

</script>


<style>

</style>