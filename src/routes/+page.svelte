<script>
  import BouncingDots from "$lib/components/BouncingDots.svelte";
  import ChatCanvas from "$lib/components/ChatCanvas.svelte";

  export let data;
</script>

<main>
  <section class="hero">
    <div class="hero-image">
      
    </div>
  </section>
</main>

<h1>Hello RecipeBot</h1>

<div class='container'>
  <ChatCanvas data={data} />
</div>
<BouncingDots />

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  .hero-image {
    background-image: url('/images/todds-bistro-logo.png');
    background-size: cover;
    background-position: center;
    height: 400px;
    position: relative;
  }
</style>
