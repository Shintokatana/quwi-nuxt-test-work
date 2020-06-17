<template>
  <div class="login-page">
    <form @submit.prevent="login">
      <span class="form-title">Login</span>
      <div class="form-body">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="Email" required>
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" placeholder="Password" required>
        <input type="submit" value="Login">
      </div>
      {{ error }}
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/')
      } catch (error) {
        this.error = 'Email or Password incorrect, please try again'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    form {
      width: 400px;
      margin: 0 auto;
      background-color: #eee;
      border: 1px solid rgba(204, 204, 204, 0.5);
      padding: 25px;

      @media (max-width: 767px) {
        width: auto;
      }

      label {
        display: none;
      }

      input {
        padding: 8px 5px;
        width: 100%;
        margin-bottom: 8px;
        border-radius: 4px;
        border: none;

        &:focus {
          outline: none;
        }

        &[type="submit"] {
          background: #395378;
          border-radius: 4px;
          text-transform: uppercase;
          color: white;
          margin-top: 20px;
          padding: 10px 25px;
          width: auto;
          transition: .4s ease opacity;
          cursor: pointer;

          &:hover {
            opacity: .7;
          }
        }
      }

      .form-body {
        padding-top: 10px;
      }

      .form-title {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
</style>
