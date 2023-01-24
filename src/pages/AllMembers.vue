<template>
    <div>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                  <th scope="col">Имя</th>
                  <th scope="col">Фамилия</th>
                  <th scope="col">Никнейм</th>
                  <th scope="col">Дата рождения</th>
                  <th scope="col">Удалить</th>
                 
                </tr>
              </thead>
              <tbody>
                <tr v-for="member in members"  :key="member.id">
                  <th scope="row" > <router-link :to="{name: 'member',  params:{id:member.id}}"> <p>{{member.name}}</p></router-link></th>
                 
                  <td ><p>{{member.lastname}}</p></td>
                  <td><p>{{member.username}}</p></td>
                  <td><p>{{member.date_of_birth}}</p></td>
                  <td><button @click="deleteMember(member.id)">Удалить</button></td>
                </tr>
              </tbody>
          </table>
        
    </div>
   
 
</template>
<script>
import axios from "axios"
import APIURL from "../main"
export default {
    data () {
    return {
        members: []
    }
  },
    
    methods: {
      getDetailInfo (member) {
        try{ this.$router.push(`${APIURL}${member.id}`)}
        catch(error){
          this.$notify({
            title: 'Error',
            text: 'Your data was submitted successfully'
        });
        }
       
      },
      deleteMember(id){
      axios.delete(`${APIURL}deleteMember/${id}`).then(
        response => {
          this.$notify({
            title: 'Success',
            text: 'участник удален',
            type: 'success'
        })
        }
      );
    }
    },  
    mounted () {
      axios
        .get(`${APIURL}members`)
        .then(response => (this.members = response.data))
        console.log(this.members) 
    }
}

</script>
<style>
    
</style>

