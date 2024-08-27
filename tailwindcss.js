//1. install for vite project
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p

//2. postcss.config.js ayarını yap ???gerek var mı hala
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

//3. tailwind.config.js ayarını yap
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

//4. tailwind directivelerini index.css'e ekle
/*
@tailwind base;
@tailwind components;
@tailwind utilities;
*/

//5. tailwind class'larını kullan
/*
5.1 Normal kullanım:
<h1 class="text-3xl font-bold underline">

5.2 arbitrary value'lar ile kullanım
<p class="bg-[#50d71e]">

5.3 @apply directive ile kullanım: (css dosyamızda)
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

5.4 theme'de custom ayarlar oluşturma
tailwind.config.js'de:
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  }
}
<p class="bg-regal-blue">
*/
