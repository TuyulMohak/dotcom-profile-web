<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-transparent">
      <q-toolbar class="row justify-center" style="width:100vw">
        <q-avatar>
          <q-img
            src="public\icons\android-chrome-192x192.png"
          />
        </q-avatar>
        <q-list class="col-12 row " style="min-width:350px;max-width: 600px;">
          <q-item>

          </q-item>
          <q-item
            v-for="menu in pageMenu" :key="menu.url"
            clickable v-ripple
            :to="menu.url"
            class="col text-center link"
            active-class="active-link"
          >
            <q-item-section class="text-p text-black">{{menu.label}}</q-item-section>
          </q-item>
        </q-list>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const pageMenu = [
  {
    label: 'Home',
    url: '/home'
  },
  {
    label: 'About Us',
    url: '/about-us'
  },
  {
    label: 'Our Members',
    url: '/our-members'
  },
  {
    label: 'Contact Us',
    url: '/contact-us'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      pageMenu
    }
  }
})
</script>

<style>
.link {
  color: black;
}

link:hover{
  color:blue;
  text-decoration: underline
}
.active-link{
  text-decoration: underline;
  font-weight: bold;
  text-decoration-thickness: 20%;
  color: lightskyblue;
}
</style>
