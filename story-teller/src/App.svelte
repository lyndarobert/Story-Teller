<script>
  import Router from 'svelte-spa-router';
  
  import Menu from "./lib/Menu.svelte";
  import Home from './lib/Home.svelte';
  import Space from './lib/Space.svelte';
  import Spaces from "./lib/Spaces.svelte";
  import Login from './lib/Login.svelte';
  const routes = {
    '/': Home,
    '/login': Login,
    '/stories': Stories,
    '/story/:id': Story,
    '/createstory': CreateStory
  };
</script>

<header>
  <Menu />
  <div class="bandeau"></div>
</header>

<main aria-labelledby="title1">
  <Router {routes} />
</main>