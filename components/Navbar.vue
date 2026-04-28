<template>
  <nav class="w-full flex items-center justify-between px-8 py-4 bg-black text-white">
    
    <!-- Logo -->
    <div class="text-xl font-bold">
      CREO
    </div>

    <!-- Links -->
    <div class="flex gap-6 text-sm">
      <NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink>
      <NuxtLink to="/work" class="hover:text-gray-400">Work</NuxtLink>
      <NuxtLink to="/about" class="hover:text-gray-400">About</NuxtLink>
    </div>

  </nav>
</template>