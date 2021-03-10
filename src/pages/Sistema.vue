<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="tabela" label="Tabela" />
        <q-tab name="dados" label="Dados" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="tabela" class="full-width">
          <q-markup-table dark class="bg-secondary">
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-right">Email</th>
                <th class="text-right">Idade</th>
                <th class="text-right">CEP</th>
                <th class="text-right">Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(usuario, index) in usuarios" :key="usuario">
                <td class="text-left">{{ usuario.nome }}</td>
                <td class="text-right">{{ usuario.email }}</td>
                <td class="text-right">{{ usuario.idade }}</td>
                <td class="text-right">{{ usuario.endereco.cep }}</td>
                <td class="text-right">
                  <q-btn
                    dense
                    round
                    color="red"
                    icon="clear"
                    @click="remove(index)"
                  />
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-tab-panel>

        <q-tab-panel class="flex flex-center" name="dados">
          <q-card flat class="full-width">
            <div class="flex flex-center text-h6 center" style="color:blue">
              Adicione os produtos
            </div>
            <q-card-section class="q-gutter-sm">
              <q-input
                rounded
                outlined
                type="text"
                v-model="user.nome"
                label="Nome"
              />
              <q-input
                rounded
                outlined
                type="email"
                v-model="user.email"
                label="Email"
              />
              <q-input
                rounded
                outlined
                type="number"
                v-model="user.idade"
                label="Idade"
              />
              <q-input
                rounded
                outlined
                type="number"
                v-model="user.endereco.cep"
                label="CEP"
              />
              <div class="q-pa-md q-gutter-sm flex flex-center">
                <q-btn
                  color="accent"
                  label="Cadastrar"
                  class="full width q-mb-md"
                  @click="cadastrar"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      tab: 'tabela',
      user: {
        nome: '',
        email: '',
        sexo: '',
        idade: '',
        endereco: {
          cep: ''
        }
      },
      usuarios: []
    }
  },

  methods: {
    cadastrar () {
      this.usuarios.push(this.user)
      this.clear()
      // window.localStorage.setItem('usuario', JSON.stringify(this.usuario))
    },
    remove (index) {
      this.usuarios.splice(index, 1)
    },
    clear () {
      this.user = {
        nome: '',
        email: '',
        sexo: '',
        idade: '',
        endereco: {
          cep: ''
        }
      }
    }
  }
}
</script>
