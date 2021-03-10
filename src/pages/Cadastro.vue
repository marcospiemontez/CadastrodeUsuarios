<template>
    <q-page class="flex flex-center bg-secondary">
    <div>
      <q-card class="" style="width: 300px; height: 300px; color:blue">
        <q-card-section>
          <div class="text-h6 row full-width justify-between">
            Cadastre-se
            <q-btn
              flat
              icon-right="logout"
              @click="$router.push({ name: 'login' })"
            />
          </div>
          <q-separator class="q-my-md" />
          <q-input
            rounded
            outlined
            v-model="email"
            type="email"
            label="Crie um email"
            class="q-mb-md">
            <template v-slot:prepend>
              <q-icon
                color="accent"
                name="email"
              />
            </template>
          </q-input>
          <q-input
            rounded
            outlined
            v-model="senha"
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
            <template v-slot:prepend>
              <q-icon
                color="accent"
                name="lock"
              />
            </template>
          </q-input>
          <q-btn
            color="accent"
            outline
            rounded
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
      window.localStorage.setItem('email', this.email)
      window.localStorage.setItem('senha', this.senha)
    }
  }
}
</script>
