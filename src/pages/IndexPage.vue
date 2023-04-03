<template>
  <q-page class="row justify-center items-center q-gutter-md" style="height:90vh">
    <section class="col-5 q-gutter-md">
      <div class="text-subtitle2 row">
        Dotcom HMTI FT Unand
      </div>
      <div class="text-h2 text-bold row">
        Empowering <lightBlueGrad>Industrial Engineers</lightBlueGrad> with IT Excellence&nbsp;<div class="text-h2">🌌</div>
      </div>
      <div class="text-p row">
        Dotcom is a sub-organization of HMTI FT Unand, dedicated to creating a space for industrial engineering students to connect, share knowledge, and learn about new technology together.
      </div>
      <div class="row">
        <q-btn outline color="primary" label="More About Us" to="/about-us" />
      </div>
    </section>
    <section class="col-5">
      <q-img
        src="public\images\logo_dotcom.png"
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

LightBlueGrad{
  background: -webkit-linear-gradient(0deg, var(--medium-blue), var(--light-blue));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
DarkBlueGrad{
  background: -webkit-linear-gradient(0deg, var(--dark-blue), var(--medium-blue));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
