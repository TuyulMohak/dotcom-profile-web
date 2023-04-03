<template>
  <q-layout view="lHh Lpr lff">
    <q-header bordered class="bg-white">
      <q-toolbar class="q-mx-sm row justify-center" style="width:100vw">
        <q-list class="row col-10 " style="min-width:300px;max-width: 700px;">
          <q-item clickable to="/">
            <q-avatar>
              <q-img
                src="\icons\android-chrome-192x192.png"
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
        <q-btn flat color="blue-9" size="xl" icon="menu" class="lt-sm" @click="isDrew = true" />
      </q-toolbar>

      <q-drawer
        v-model="isDrew"
        height="100vh"
        bordered
      >
        <q-scroll-area class="fit q-pa-sm">
          <q-list class="q-gutter-y-md">
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
              class="text-h5 text-left link lt-sm"
              active-class="active-link"
            >
              <q-item-section class="text-p text-black">{{menu.label}}</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="text-white text-right row bg-transparent justify-end">
      <div class="bg-grey-4 col-3 text-black" style="border-radius:15px 0 0 0">© 2023 Muhammad Rivandra, All rights reserved.</div>
    </q-footer>
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
    return {

      pageMenu,
      isDrew: ref(false)
    }
  }
})
</script>
