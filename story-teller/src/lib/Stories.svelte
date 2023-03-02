<script>
     import { link } from "svelte-spa-router"; 
    import { isAuthenticated } from "../auth";

  // fonction pour récupérer les histoires de l'API
  const getStories = async () => {
        const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/story");
        const json = await response.json();
        console.log(json);
        return json.data;
  }

 

</script>



<div class="stories-container">
  {#await getStories()}
    <p>Chargement de la liste...</p>
  {:then stories} 
    {#each stories as story}
      <section class="stories" aria-labelledby="story-title-{story.id}">
        <div class="story-content">
        <div class="story-card" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="40">
          <h2>{story.title}</h2>
          <!-- <img src="https://khext1e9.directus.app/assets/{story.image}" alt="{story.title}"> -->
          <p>{story.content.slice(0, story.content.split(' ').slice(0, 30).join(' ').length) + "..."}</p>
          <div class="link">
          <a href="/story/{story.id}" class="{story.id}" use:link>Lire l'histoire</a>
          <p>{story.category}</p>
        </div>
        </div>
      </div>
      </section>
    {/each}
  {/await}
</div>





<style>
  .link{
  display: flex;
  justify-content: center;
  border-top: 3px solid black;
  width: 100%;
  }
.stories-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
}
.story-card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: 4px solid black;
  transition: transform .2s;
  padding: 0.5rem;
  width: 300px;
  height: 450px;
  margin: 1rem;
  box-shadow: 12px 12px 2px 1px #f7958e;
}

.story-card:hover{
  transform: scale(1.02);
}

p{
  text-align: center;
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