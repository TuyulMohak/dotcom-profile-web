<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-transparent">
      <q-toolbar class="q-mx-sm row justify-center" style="width:100vw">
        <q-list class="row col-10 " style="min-width:300px;max-width: 700px;">
          <q-item>
            <q-avatar>
              <q-img
                src="public\icons\android-chrome-192x192.png"
              />
            </q-avatar>
          </q-item>
          <q-item
            v-for="menu in pageMenu" :key="menu.url"
            clickable v-ripple
            :to="menu.url"
            class="col text-center link gt-xs "
            active-class="active-link"
          >
            <q-item-section class="text-p text-black">{{menu.label}}</q-item-section>
          </q-item>
        </q-list>
        <q-btn flat color="blue-9" size="xl" icon="menu" class="lt-sm" @click="onClick" />
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
