<template>
  <q-layout view="lHh Lpr lff" >
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple to="/" active-class="my-menu-link" exact>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>

              <q-item clickable v-ripple to="/Practica" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="font_download" />
              </q-item-section>

              <q-item-section>
                Practica
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/Pet" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Mascotas
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Form" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Formulario
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Formmpet" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Registrar Mascotas
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        
        

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const drawer = ref(false)

    return {
     drawer
    }
  }
}
</script>

<style lang="scss">
.my-menu-link{
color: white;
  background: #F2C037;
}
  
</style>