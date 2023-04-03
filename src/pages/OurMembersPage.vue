<template>
  <q-page class="row justify-center items-center text-center q-pa-xl q-my-md">
    <section class="col-8-md col-sm-10 col-xs-11 column justify-center">
      <div class="gt-xs text-h1 text-bold q-mb-lg light-blue-underline">Our Members</div>
      <div class="lt-sm text-h2 text-bold q-mb-lg light-blue-underline">Our Members</div>
      <div class="q-mb-md text-center row justify-center">
        <div class="col-md-8 col-sm-10 col-xs-11">
          <div class="text-p">Here you'll find a list of <strong>passionate industrial engineering students</strong> dedicated to enhancing IT skills and data management. Connect, collaborate, and grow with like-minded members who are driving positive change in the field. Let's innovate together!</div>
        </div>
      </div>
      <div>
        <q-list class="row justify-center">
          <q-card flat bordered v-for="person in personList" :key="person.name" class="col-md-3 col-sm-4 col-xs-12 q-pa-md q-ma-sm">
            <q-img :src="person.photoUrl" img-class="blue-img"/>
            <q-card-section>
              <div class="text-h6">{{person.name}}</div>
              <div class="text-subtitle2">{{person.position}}</div>
            </q-card-section>
            <q-card-section class="q-gutter-x-md">
              <q-btn v-if="person.linkedinUrl != null" outline round size="md" color="primary" icon="mdi-linkedin" :href="person.linkedinUrl" target="_blank"/>
              <q-btn v-if="person.email != null" outline round size="md" color="orange" icon="mdi-email" :href="'mailto:'+person.email" target="_blank"/>
              <q-btn v-if="person.personalWebUrl != null" outline round size="md" color="primary" icon="mdi-web" :href="person.personalWebUrl" target="_blank"/>
            </q-card-section>
          </q-card>
        </q-list>
      </div>
    </section>
  </q-page>
</template>

<script>

const personList = [
  {
    name: 'Muhammad Rivandra',
    photoUrl: '/images/00_andra.png',
    position: 'Chairman',
    email: 'rivandra0@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/muhammad-rivandra-ie-frontend/',
    personalWebUrl: 'https://muhammad-rivandra.netlify.app/#/'
  },
  {
    name: 'Farhan Nafily',
    photoUrl: '/images/nafily.png',
    position: 'Member',
    email: null,
    linkedinUrl: 'https://www.linkedin.com/in/farhannafily/',
    personalWebUrl: null
  },
  {
    name: 'Fathoni Albi',
    photoUrl: '/images/raisei.png',
    position: 'Member',
    email: null,
    linkedinUrl: 'https://www.linkedin.com/in/fathoni-albi-7a35b0155/',
    personalWebUrl: null
  },
  {
    name: 'Febryan Alhamdi',
    photoUrl: '/images/ryan.png',
    position: 'Member',
    email: null,
    linkedinUrl: 'https://www.linkedin.com/in/febryan-alhamdi-7208bb1a5/',
    personalWebUrl: null
  },
  {
    name: 'Irfandi Novembri',
    photoUrl: '/images/irfandi.png',
    position: 'Member',
    email: null,
    linkedinUrl: 'https://www.linkedin.com/in/irfandi-novembri/',
    personalWebUrl: null
  }
]

export default {
  // name: 'PageName',
  setup () {
    return {
      personList
    }
  }
}
</script>

<style>

</style>
