<template>
  <Head>
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <Link
      href="https://fonts.googleapis.com/css2?family=Koulen&family=Montserrat:wght@100;300;400;500;600;700;800;900&family=Oleo+Script:wght@400;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Water+Brush&display=swap"
      rel="stylesheet"
    />

    <!-- // Animate.css -->
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  </Head>

  <div>
    <header class="fixed w-screen z-10">
      <!-- Hamburger  -->
      <div
        v-if="!state.loadNav"
        class="flex flex-col w-max h-max gap-1 float-right m-4 cursor-pointer md:hidden"
        @click="displayNav()"
      >
        <div class="w-5 h-[3px] bg-white rounded-sm"></div>
        <div class="w-5 h-[3px] bg-white rounded-sm"></div>
        <div class="w-5 h-[3px] bg-white rounded-sm"></div>
      </div>
      <nav
        :class="{ hidden: !state.loadNav }"
        class="
          relative
          bg-color1
          text-white
          underline
          w-screen
          py-4
          font-poppins
          flex flex-col
          items-center
          justify-center
          gap-7
          animate__animated animate__slideInDown
          md:flex md:w-[50vw] md:float-right md:flex-row md:bg-white md:text-black md:no-underline
        "
      >
        <!-- Cross Button -->
        <div @click="hideNav()" class="absolute top-5 right-5 cursor-pointer md:hidden">
          <div class="w-5 h-0 border-b-2 rotate-45"></div>
          <div class="w-5 h-0 border-b-2 -rotate-45"></div>
        </div>

        <a>Home</a>
        <a>About Me </a>
        <a>Portfolio </a>
        <a>Blog </a>
        <a>Contact </a>
      </nav>
    </header>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const state = reactive({ loadNav: true })
function displayNav() {
  state.loadNav = true
}
function hideNav() {
  state.loadNav = false
}
</script>