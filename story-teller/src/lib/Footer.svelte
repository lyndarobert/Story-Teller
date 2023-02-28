<script>
    import { onMount } from 'svelte';
  
    let numStories = 0;
    let numUsers = 0;
  
    const updateStats = async () => {
      const storiesResponse = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/story?fields=id");
      const usersResponse = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/user?fields=id");
  
      const storiesJson = await storiesResponse.json();
      const usersJson = await usersResponse.json();
  
      numStories = storiesJson.data?.length;
      numUsers = usersJson.data?.length;
  
      $: stats = [
        {
          text: "Nombre d'histoires",
          value: numStories
        },
        {
          text: "Nombre d'auteurs",
          value: numUsers
        }
      ];
    };
  
    let stats = [];
  
    onMount(updateStats);

  </script>
  
  <section class="stats" aria-labelledby="stats-title">
    <h2 id="stats-title">Rejoignez la communauté</h2>
  
   
      {#each stats as stat}
        
          <h3>{stat.text}</h3>
          <big>{stat.value}</big>
        
      {/each}
    
  </section>
  
  <style>

    .stats {
    text-align: center;
    border-top: 1px solid;
    padding: 5px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
}
 


  </style>
  