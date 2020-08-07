<template>
  <div class="home">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="Id" ></el-table-column>
        <el-table-column width="180" prop="firstname" label="FirstName" ></el-table-column>
        <el-table-column prop="lastname" label="LastName" ></el-table-column>
        <el-table-column  prop="email" label="Email"></el-table-column>
      </el-table>
      
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      tableData:[],
      id:'',
      firstname:'',
      lastname:'',
      email:''
    }
  },
  methods: {
    getData(){
      axios.get("http://localhost:3000/getUsers").then(res => {
        for(let i=0; i< res.data.length ;i++){
          this.tableData.push({
            id: res.data[i].id,
            firstname: res.data[i].firstname,
            lastname :res.data[i].lastname,
            email: res.data[i].email
          })
          console.log("HI=>>>",res.data);
        }
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>
