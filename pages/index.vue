<template>
<div>

  <section class="w-screen min-h-screen flex flex-col md:flex-row">
    <div class="bg-color1 h-[50vh] overflow-hidden md:h-screen md:w-[50vw] flex justify-center items-end">
      <img class="object-contain w-[95vw] max-w-sm max-h-max" src="~/assets/img/Me4.png" alt="Myself" />
    </div>
    <div class="bg-white w-screen flex flex-col justify-center items-center py-8 md:w-[50vw] md:justify-evenly">
      <span class="text-6xl w-full text-center font-black leading-tight"
        >Hey! I'm <span class="text-color1"> Yubraj Bhandari</span></span
      >
      <div class="bg-color1 text-white text-center self-center w-full p-2 my-4 md:[clip-path:polygon(10%_0%,90%_0%,100%_100%,0%_100%);] md:w-[45vw]">
        Exploring Computers, Maths, Astronomy.
      </div>
      <div class="text-2xl text-color1 rounded-full border-[1px] border-color1 w-10 h-10 text-center my-5 animate-bounceslow cursor-pointer ">&#8595</div>
    </div>
    <!-- <Nav /> -->
  </section>

  <section class="w-screen min-h-screen flex flex-col items-center relative pt-10 my-10 md:pt-24 md:grid grid-cols-2 grid-rows-[100px_max-content] justify-items-center md:items-start">
    <span class="absolute font-black text-7xl text-color1 opacity-40 top-0 left-0 md:text-9xl md:left-10 ">About</span>
    <div class="text-color1 text-2xl font-bold md:text-4xl ">Lorem ipsum dolor sit amet.</div>
    <div class="w-[95vw] relative py-10 max-w-md row-start-1 row-span-2 col-start-2">
        <div class="bg-color1 w-48 h-48 absolute -z-10 bottom-0 left-0"></div>
        <img class="w-[calc(100%-40px)] float-right shadow-2xl" src="~/assets/img/Me5.jpg" alt="Me">
    </div>
    <div class="w-full text-center my-5 max-w-md flex flex-col items-center gap-10">
      <p>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non accusamus tempora facilis nostrum aliquam, ut, recusandae minima laudantium praesentium libero ratione nobis suscipit, ipsum possimus inventore et nihil ea.
      </p>
      <div class="text-white py-3 px-5 bg-color1 max-w-max"> Download CV </div>
      </div>
  </section>

  <section class="w-screen min-h-screen relative pt-20 my-10 md:pt-32 ">
    <span class="absolute font-black text-7xl text-color1 opacity-40 top-0 right-0 md:text-9xl md:right-10">Blog</span> 
    <div class="bg-color1 w-full min-h-[400px] flex flex-wrap justify-center items-center">
      <span class="text-white font-bold text-2xl">Nothing Published yet 😋</span>
    </div>
  </section>
  <section class="w-screen min-h-max relative pt-10 md:pt-20 ">
    <span class="absolute font-black text-7xl text-color1 opacity-40 top-0 left-0 md:text-9xl md:left-10">Contact</span> 
    <div class="text-color1 text-2xl font-bold py-2 px-4 md:ml-20"> Lets get Connected and share some ideas </div>  
    <div class="flex flex-wrap w-[90vw] justify-center items-center gap-5 py-16">
      <a href="#"><img class="w-16" src="~/assets/icons/facebook.png" alt=""></a>
      <a href="#"><img class="w-16" src="~/assets/icons/instagram(1).png" alt=""></a>
      <a href="#"><img class="w-16" src="~/assets/icons/linkedin.png" alt=""></a>
      <a href="#"><img class="w-16" src="~/assets/icons/messenger.png" alt=""></a>
      <a href="#"><img class="w-16" src="~/assets/icons/twitter.png" alt=""></a>
      <a href="#"><img class="w-16" src="~/assets/icons/whatsapp1.png" alt=""></a>
    </div>
    </section>
    <footer class="w-screen bg-color1 py-5 my-0 flex flex-col justify-center align-center gap-5">
      <div class="text-sm font-bold text-white text-center">Created with ❤️ by <a class="border-b-[1px]" href="#">Yubraj</a></div> 
    </footer>

</div>
</template>