<script>
  import Footer from "./Footer.svelte";
  import { link } from "svelte-spa-router";

  // fonction pour récupérer les histoires de l'API
  const getStories = async () => {
    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/story");
    const json = await response.json();
    return json.data;
  }

  let count = 0;
  
</script>



<h1 id="title1">The Story Teller</h1>

<section class ="intro" aria-label="Introduction">
  <h2>"Plongez dans un univers d'histoires uniques et partagez vos propres récits avec une communauté de passionnés !"</h2>
  
</section>



<div class="stories-container">
  {#await getStories()}
    <p>Chargement de la liste...</p>
  {:then stories} 
    {#each stories as story}
      <section class="stories" aria-labelledby="story-title-{story.id}">
        <div class="story-card" data-aos="fade-left" data-aos-easing="ease-out-back" data-aos-delay="40">
          <h2>{story.title}</h2>
          <p>{story.content.slice(0, story.content.split(' ').slice(0, 30).join(' ').length) + "..."}</p>
          <a href="/story/{story.id}" use:link>Lire l'histoire</a>
          <p>{story.category}</p>
        </div>
        
      </section>
    {/each}
  {/await}

  <div class ="button-container">
  <a href="/stories" use:link>Voir plus d'histoires</a>
  <a href="/register" use:link>Ecrivez la vôtre</a>
</div>
</div>


<Footer />


<style>

h1 {
  text-align: center;
  margin: 2rem;

}

.intro {
  text-align: center;
  margin: 50px;
}

  .stories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 960px;
    margin: 0 auto;
  }

  .stories {
    width: calc(50% - 10px);
    margin-bottom: 20px;
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

  .button-container {
    margin-top: 3rem;
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