<template>
  <div class="w-full py-8 px-4 lg:px-6 bg-white dark:bg-muted-1000">
    <div class="w-full max-w-7xl mx-auto">
      <div
        class="flex flex-col xs:gap-y-4 md:flex-row items-center justify-between"
      >
        <div class="w-full flex flex-col md:flex-row items-center gap-2">
          <span
            class="flex items-center gap-1 text-sm text-muted-500 dark:text-muted-400"
          >
            <span>Made with</span>
            <svg class="w-5 h-5 text-rose-500" viewBox="0 0 256 256">
              <path
                fill="currentColor"
                d="M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124Z"
                opacity=".2"
              />
              <path
                fill="currentColor"
                d="M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1Zm-3.9-15ZM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48Z"
              />
            </svg>
            <span>by</span>
          </span>
          <a href="#" class="flex w-28">
            <img
              src="@/assets/img/cssninja.svg"
              class="w-full"
              alt="Css Ninja logo"
            />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <!-- Place this tag where you want the button to render. -->
          <!-- Place this tag where you want the button to render. -->
          <a
            class="github-button"
            href="https://github.com/cssninjaStudio/nuxt-toaster"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star cssninjaStudio/nuxt-toaster on GitHub"
            >Star</a
          >
          <!-- Place this tag where you want the button to render. -->
          <!-- Place this tag where you want the button to render. -->
          <a
            class="github-button"
            href="https://github.com/sponsors/cssninjaStudio"
            data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-icon="octicon-heart"
            data-size="large"
            aria-label="Sponsor @cssninjaStudio on GitHub"
            >Sponsor</a
          >
        </div>
      </div>
    </div>
  </div>
</template>