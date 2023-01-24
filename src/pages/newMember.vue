<template>
    <div>
        <form class="form-data">
            <div class="mb-3">
              <label for="name" class="form-label">Имя</label>
              <input type="text" class="form-control" id="name" v-model="name">
              </div>
            <div class="mb-3">
              <label for="lastname" class="form-label">Фамилия</label>
              <input type="text" class="form-control" id="lastname" v-model="lastname">
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Никнейм</label>
                <input type="text" class="form-control" id="username" v-model="username">
                </div>
            <div class="mb-3">
            <label for="date" class="form-label">Дата рождения</label>
            <input type="text" class="form-control" id="date" v-model="date_of_birth">
            </div>
         
          </form>
          <button type="submit" class="btn btn-primary" @click="createMember">Добавить</button>
        </div>
   
</template>
<script>
import axios from 'axios'
import APIURL from '../main'
// import {$notify} from 'vue-notification'
export default {
    data(){
        return {
            name: '',
            lastname:'',
            username:'',
            date_of_birth:''
        }
    },
    methods:{
        createMember() {
            const member = {
            name: this.name,
            lastname: this.lastname,
            username: this.username,
            date_of_birth: this.date_of_birth
            }
    axios.post(`${APIURL}addMember`, member).then(response => {
        this.$notify({
            title: 'Success',
            text: 'Your data was submitted successfully',
            type: 'success'
        })
    }).catch (error => {
        this.$notify({
            title: 'Error',
            text: 'An error occurred while submitting your data',
            type: 'error'
        });
    })
},
    }
}
</script>
<style lang="">
    
</style>