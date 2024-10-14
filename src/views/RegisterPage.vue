<template>
    <v-app>
      <div class="register-page">
        <v-img
          class="mx-auto my-6"
          max-width="228"
          src="@/assets/logo.png"
        ></v-img>
  
        <v-card
          class="mx-auto pa-12 pb-8"
          elevation="8"
          max-width="448"
          rounded="lg"
        >
          <div class="text-subtitle-1 text-medium-emphasis">Create an Account</div>
  
          <!-- Username Field -->
          <v-text-field
            v-model="username"
            density="compact"
            placeholder="Username"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            :rules="[rules.required]"
          ></v-text-field>
  
          <!-- Password Field -->
          <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            :rules="[rules.required]"
          ></v-text-field>
  
          <!-- Password Confirmation Field -->
          <v-text-field
            v-model="confirmPassword"
            :append-inner-icon="visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visibleConfirm ? 'text' : 'password'"
            density="compact"
            placeholder="Confirm Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visibleConfirm = !visibleConfirm"
            :rules="[rules.required, passwordMatch]"
          ></v-text-field>
  
          <v-btn
            class="mb-8"
            color="blue"
            size="large"
            variant="tonal"
            block
            @click="handleRegister"
          >
            Sign Up
          </v-btn>
  
          <v-card-text class="text-center">
            <a
              class="text-blue text-decoration-none"
              href="/auth/login"
              rel="noopener noreferrer"
            >
              Already have an account? Log In
              <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </v-card>
      </div>
    </v-app>
  </template>
  
  <script>
  import AuthService from '@/services/auth.service.js';
  
  export default {
    name: 'RegisterPage',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
        visible: false,
        visibleConfirm: false,
        rules: {
          required: (value) => !!value || 'Required.',
        },
      };
    },
    methods: {
      passwordMatch(value) {
        return value === this.password || 'Passwords must match.';
      },
      async handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        try {
          const user = {
            username: this.username,
            password: this.password,
          };
          const response = await AuthService.register(user);
          if (response) {
            this.$router.push('/auth/login');
          }
        } catch (error) {
          console.error('Registration failed:', error);
          alert('Registration failed');
        }
      },
    },
  };
  </script>
  

  