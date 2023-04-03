<template>
  <q-page class="row justify-center items-center q-px-md q-gutter-y-md" style="height:90vh">
    <section class="col-md-5 col-sm-8 col-xs-10 q-gutter-y-md ">
      <div class="text-subtitle1 row">
        Dotcom HMTI FT Unand
      </div>
      <div class="gt-xs text-h2 text-bold row title">
        Empowering <strong>Industrial Engineers</strong> with IT Excellence <span position="ab" class="text-p">🌌</span>
      </div>
      <div class="lt-sm text-h3 text-bold row title" style="line-height:3.3rem">
        Empowering <strong>Industrial Engineers</strong> with IT Excellence <span position="ab" class="text-p">🌌</span>
      </div>
      <div class="text-p row">
        Dotcom is a sub-organization of HMTI FT Unand, dedicated to creating a space for industrial engineering students to connect, share knowledge, and learn about new technology together.
      </div>
      <div class="row q-pt-sm">
        <q-btn outline color="primary" label="More About Us" to="/about-us" />
      </div>
    </section>
    <section class="col-5 gt-sm">
      <q-img
        src="\images\logo_dotcom.png"
      />
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
/* dark blue #0452B0 */
/* medium blue #59D9E3 */
/* dark blue #001839*/
.title{
  line-height: 4rem;
}

</style>
