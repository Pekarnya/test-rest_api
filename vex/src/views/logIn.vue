<template>
    <div class="login">
        <h1>log-in</h1>
        <form @submit.prevent="submitForm" id="sign-up">
          <input type="email" name="username" v-model="username">
          <input type="password" name="password" v-model="password">
          <button type="submit button" class="btn btn-dark" id="signup-btn">Sign-up</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LogIn',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm (e) {
      const formData = {
        username: this.username,
        password: this.password
      }

      axios
        .post('api/v1/token/login', formData)
        .then(response => {
          console.log(response)
          console.log(response.data.username)

          const token = response.data.auth_token

          this.$store.commit('setToken', token)

          axios.defaults.headers.common.Authorization = 'Token' + token

          localStorage.setItem('token', token)

          this.$router.push('/main_page')
        })

        .catch(error => {
          console.log(error)
        }
        )
    }
  }
}

</script>
