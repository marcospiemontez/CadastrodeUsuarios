<template>
  <q-page class="flex flex-center bg-secondary">
    <div>
      <q-card class="" style="width: 300px; height: 300px; color:blue">
        <q-card-section>
          <div class="text-h6 row justify-left">
            Recuperar senha
          </div>
          <q-separator class="q-my-md" />
          <q-input
            outlined
            rounded
            v-model="email"
            type="email"
            label="Digite seu email"
            class="q-mb-md"
          />
          <q-btn
            outlined
            rounded
            color="accent"
            label="Recuperar senha"
            :disable="this.email"
            class="full-width q-mb-md"
            @click="recuperar"
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
  name: 'recuperadoo',
  data () {
    return {
      email: '',
      senha: '',
      isPwd: '',
      recuperou: ''
    }
  },
  methods: {
    recuperar () {
      if (this.email === 'admin@admin.com') {
        window.localStorage.getItem('email', this.email)
        this.$router.push({ name: 'login' })
        alert('Sua senha foi enviada para seu email')
      } else {
        alert('Você não tem permissão para acessar essa area!')
      }
    }
  }
}
</script>
