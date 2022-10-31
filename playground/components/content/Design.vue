<template>
  <Section>
    <hr class="mb-10 pt-10 border-t border-muted-200 dark:border-muted-800" />
    <div class="w-full max-w-xl mx-auto text-center mb-16">
      <p class="uppercase font-semibold text-xs text-primary-500 mb-2">
        <span
          class="inline-block py-2 px-3 border-2 border-primary-500 rounded-lg scale-90"
          >Custom Experience</span
        >
      </p>
      <h2 class="font-extrabold text-5xl text-muted-800 dark:text-white">
        You set the rules
      </h2>
    </div>

    <!-- Toast grid -->
    <div class="flex flex-col gap-6 w-full mx-auto pb-12">
      <!-- Row -->
      <div class="flex flex-col md:flex-row justify-center gap-6">
        <div class="w-full md:max-w-[270px]">
          <ToastIconSuccess />
        </div>
      </div>
      <!-- Row -->
      <div class="flex flex-col md:flex-row justify-center gap-6 w-full">
        <div>
          <ToastUserLikeClose />
        </div>
        <div>
          <ToastLabelWarning />
        </div>
      </div>
      <!-- Row -->
      <div
        class="flex flex-col md:flex-row justify-center gap-6 w-full max-w-5xl mx-auto"
      >
        <div>
          <ToastActionButtons />
        </div>
        <div>
          <ToastIconSoloDanger />
        </div>
        <div>
          <ToastLabelInfo />
        </div>
      </div>
      <!-- Row -->
      <div class="flex flex-col md:flex-row justify-center gap-6 w-full">
        <div>
          <ToastUserReplyClose />
        </div>
        <div>
          <ToastLabelSuccess />
        </div>
      </div>
      <!-- Row -->
      <div class="flex flex-col md:flex-row justify-center gap-6">
        <div class="w-full md:max-w-[250px]">
          <ToastIconDanger />
        </div>
      </div>
    </div>
    <!-- Toggle -->
    <div class="w-full pb-16">
      <NuxtLink
        to="/api"
        class="w-full inline-flex justify-center text-sm font-medium underline-offset-2 hover:underline text-primary-500 cursor-pointer"
      >
        Get started with the docs
      </NuxtLink>
    </div>
  </Section>
</template>