<script>
  import Router from 'svelte-spa-router';
  
  import Menu from "./lib/Menu.svelte";
  import Home from './lib/Home.svelte';
  // import Login from './lib/Login.svelte';
  import Loginbis from './lib/Loginbis.svelte';
  import Story from './lib/Story.svelte';
  import Stories from "./lib/Stories.svelte";
  import CreateStory from './lib/CreateStory.svelte';
  // import Register from './lib/Register.svelte';
  import MyAccount from './lib/MyAccount.svelte';
  import Registerbis from './lib/Registerbis.svelte';
  
  const routes = {
    '/': Home,
    '/login': Loginbis,
    '/register': Registerbis,
    '/stories': Stories,
    '/story/:id': Story,
    '/createstory': CreateStory,
    '/myaccount': MyAccount,
  };

</script>

<header>
  <Menu />
  <div class="bandeau"></div>
</header>

<main aria-labelledby="title1">
  <Router {routes} />
</main>