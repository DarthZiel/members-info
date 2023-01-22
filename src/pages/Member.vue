<template>
   <div>
      <form class="form-data">
          <div class="mb-3">
            <label for="name" class="form-label">Имя</label>
            <input type="text" class="form-control" id="name" v-model="member.name">
            </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Фамилия</label>
            <input type="text" class="form-control" id="lastname" v-model="member.lastname">
          </div>
          <div class="mb-3">
              <label for="username" class="form-label">Никнейм</label>
              <input type="text" class="form-control" id="username" v-model="member.username">
              </div>
          <div class="mb-3">
          <label for="date" class="form-label">Дата рождения</label>
          <input type="text" class="form-control" id="date" v-model="member.date_of_birth">
        
          </div>
          <button type="button" class="btn btn-primary" @click="updateMember">Update</button>
        </form>
       
  </div>
</template>
<script>
import axios from "axios";
export default {
   data(){
        return {
            member: []
        }
    },
    created(){
      this.getById();
    },
    methods:{

      getById(){
        axios
        .get(`http://127.0.0.1:8000/member/${this.$route.params.id}`)
        .then(response => (this.member = response.data))
        console.log(this.member) 
      },
       updateMember(){
            try {
              axios.patch(`http://127.0.0.1:8000/editMember/${this.$route.params.id}`,
                 {
                  name: this.member.name,
                  lastname: this.member.lastname,
                  username: this.member.username,
                  date_of_birth: this.member.date_of_birth
                 });
                 this.$router.push('/');
                
            } catch (error) {
                console.log(error);
            }
        } ,
   
    }}
</script>
<style>
    
</style>