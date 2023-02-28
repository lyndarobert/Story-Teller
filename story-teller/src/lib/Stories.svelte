<script>
     import { link } from "svelte-spa-router"; 
    import { isAuthenticated } from "../auth";

  // fonction pour récupérer les histoires de l'API
  const getStories = async () => {
        const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/story");
        const json = await response.json();
        return json.data;
  }

  // fonction pour rediriger les utilisateurs non connectés vers la page d'enregistrement
  const redirectToRegister = () => {
    if (!isAuthenticated) {
      push('/register');
    }
  }

  

</script>

<div class="stories-container">
  {#await getStories()}
    <p>Chargement de la liste...</p>
  {:then stories} 
    {#each stories as story}
      <section class="stories" aria-labelledby="story-title-{story.id}">
        <div>
          <h2>{story.title}</h2>
          {#if story.content}
            <p>{story.content.slice(0, story.content.split(' ').slice(0, 15).join(' ').length) + "..."}</p>
          {:else}
            <p>Pas de contenu disponible</p>
          {/if}
          <a href="/story/{story.id}" on:click={redirectToRegister} use:link>Lire l'histoire</a>
        </div>
      </section>
    {/each}
  {/await}
</div>






<style>
.stories-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 960px;
  margin: 4rem;
}

.stories {
  width: calc(50% - 10px);
  margin-bottom: 20px;
}

a{
    font-weight: bold;
    text-decoration: none;
    margin: 0.5rem;
    padding: 0.7rem;
    border: none;
    border-radius: 8px;
    background-color: #F97066;
    color: #fff;
    text-align: center;
    transition:  0.3s ease-out;
  }
  
  a:hover{
   cursor: pointer;
   background-color: #f7958e;
   color: #fff;
  }


</style>