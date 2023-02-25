<script>
   
  export let params = {};
  const storyId = params.id;
  const getStory = async (id) => {
      // Appel de la requête
      const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/story/" + id);
      // Extraction du json de la réponse
      const result = await response.json();
      //Extraction et retour de la liste
      return result.data;
  }
  
</script>


{#await getStory(storyId)}
    <p>Récupération des histoires</p>
{:then story} 
    <h2>Découvrez l'histoire</h2>
    <ul>
        <li>{story.title}</li>
        <li>{story.content}</li>
       
    </ul>
 {/await}


 <style>
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
</style>
