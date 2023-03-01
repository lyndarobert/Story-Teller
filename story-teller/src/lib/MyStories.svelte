<!-- <script>
  import { link } from "svelte-spa-router"; 
   import { onMount } from 'svelte';
  let stories = [];

  async function getStories() {
    const response = await fetch(`${import.meta.env.VITE_URL_DIRECTUS}/auth/authenticate`,  {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'mardi@gmail.com', password: 'mardi' })
    });
    const { access_token: accessToken } = await response.json();

    const storiesResponse = await fetch(`${import.meta.env.VITE_URL_DIRECTUS}/items/story?filter[user]=current`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const { data } = await storiesResponse.json();
    console.log(data);

;    stories = data;
  }

  getStories();
</script>

<ul>
  {#each stories as story}
    <li>{story.title}</li>
  {/each}
</ul> -->
