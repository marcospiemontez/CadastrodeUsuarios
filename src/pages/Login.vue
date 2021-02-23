<template>
  <q-page class="flex flex-center">
    <div>
      <q-card class="" style="width: 300px; height: 380px">
        <q-card-section>

          <div class="text-h6">Login</div>
          <q-separator class="q-my-md" />
          <q-input
            filled
            v-model="email"
            type="email"
            label="Email"
            class="q-mb-md"
          />
          <q-input
            v-model="senha"
            filled
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
          </q-input>
          <q-btn
            color="primary"
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
.border-black {
  border: 1px solid black;
}
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
      if (this.email === 'admin@admin.com' && this.senha === 'marcos') {
        window.localStorage.getItem('email', this.email)
        window.localStorage.getItem('senha', this.senha)
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
