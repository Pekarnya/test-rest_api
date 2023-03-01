<template>
    <div class="sign-up">
      <p>
      Without further ado, sign-up for continue<br>
      And check out the social media page for more information <br>
    </p>
    <iframe id="web3D" allowfullscreen width="400" height="256" loading="lazy" frameborder="0" src="https://p3d.in/e/DODOC+spin+load+nopan+shading,dl,share,fs,ar,spin,link,border,loader-hidden"></iframe>
        <h1>Sign-up</h1>
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
  name: 'SignUp',
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
        .post('/api/v1/users/', formData)
        .then(response => {
          this.$router.push('/login')
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#sign-up {
  box-sizing: content-box;
}

.form-control {
  text-align: center;
  margin-top: 10px;
  margin-inline-start: 43%;
  align-content: center;
  max-width: 15%;
}
.pass-input {
  padding: 0%;
}
.form-label {
  padding-top: 0%;
}
</style>
