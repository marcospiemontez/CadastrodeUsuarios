<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-secondary">
      <!--cabeçalho-->
      <!-- Barra -->
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="$router.push({ name: 'login' })"
          icon="logout"
        />
        <q-toolbar-title> </q-toolbar-title>
        <q-btn color="accent" label="Entrar" />
      </q-toolbar>
    </q-header>
    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
