<template>
  <q-page class="flex flex-center bg-secondary">
    <div>
      <q-card class="" style="width: 300px; height: 380px; color:blue">
        <q-card-section>
          <div class="text-h6 text-center">Login</div>
          <q-separator class="q-my-md" />
          <q-input
            outlined
            rounded
            v-model="email"
            type="email"
            label="Email"
            class="q-mb-md"
          >
            <template v-slot:prepend>
              <q-icon
              color="accent"
              name="email"/>
            </template>
          </q-input>
          <q-input
            v-model="senha"
            outlined
            rounded
            label="Senha"
            :type="!isPwd ? 'password' : 'text'"
            :rules="[
              val =>
                val.length >= 5 || 'Senha precisa ter pelo menos 5 caracteres'
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
            <template v-slot:prepend>
              <q-icon
              color="accent"
              name="lock"/>
            </template>
          </q-input>
          <q-btn
            outlined
            rounded
            color="accent"
            label="Entrar"
            :disable="this.email && this.senha === ''"
            class="full-width q-mb-md"
            @click="login"
          />
          <q-btn
            color="primary"
            label="Esqueci minha senha"
            class="full-width"
            flat
            @click="recuperar"
          />
          <q-btn
            color="primary"
            label="Criar conta"
            class="full-width"
            flat
            @click="cadastro"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      email: '',
      senha: '',
      isPwd: ''
    }
  },
  methods: {
    login () {
      if (
        this.email === window.localStorage.getItem('email', this.email) &&
        this.senha === window.localStorage.getItem('senha', this.senha)
      ) {
        this.$router.push({ name: 'sistema' })
      } else {
        alert('Você não tem permissão para acessar essa area!')
      }
    },
    cadastro () {
      this.$router.push({ name: 'cadastro' })
    },
    recuperar () {
      this.$router.push({ name: 'recuperar' })
    }
  }
}
</script>
