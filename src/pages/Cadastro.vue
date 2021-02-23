<template>
  <q-page class="flex flex-center">
    <div>
      <q-card class="" style="width: 300px; height: 300px">
        <q-card-section>
          <div class="text-h6">Cadastre-se</div>
          <q-separator class="q-my-md" />
          <q-input
            filled
            v-model="email"
            type="email"
            label="Crie um email"
            class="q-mb-md"
          />
          <q-input
            v-model="senha"
            filled
            label="Crie uma senha"
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
            label="Criar"
            :disable="this.email && this.senha === ''"
            class="full-width q-mb-md"
            @click="criar"
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
    criar () {
      if (this.email === 'admin@admin.com' && this.senha === 'marcos') {
        window.localStorage.setItem('email', this.email)
        window.localStorage.setItem('senha', this.senha)
        window.location.href = 'autenticado'
      } else {
        alert('Usuário não permitido')
      }
    }
  }
}
</script>
