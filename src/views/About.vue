<template>
  <div class="about">
    <el-table :data="tableData">
      <el-table-column prop="id" label="Id">
        <template slot-scope="scope">
          <div>{{scope.row.id}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
    </el-table>
    <div>{{resData}}</div>
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl ="http://localhost:3000/api/courses"
export default {
  name: 'about',
  data() {
    return {
      tableData:[],
      id:'',
      name: ''
    }
  },
  methods:{
    getData(){
      axios.get(baseUrl).then(res =>{
        for(var i=0; i< res.data.length; i++){
          this.tableData.push({
            id: res.data[i].id,
            name: res.data[i].name
          })
          console.log('RES>',res.data);
        }
      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>
