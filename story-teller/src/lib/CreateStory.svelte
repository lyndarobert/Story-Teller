<script>
  import { createEventDispatcher } from 'svelte';
  import { isAuthenticated } from '../auth.js';

  const dispatch = createEventDispatcher();
  let title = '';
  let content = '';
  // let category = '';
  let message = '';

  function handleSubmit() {
    const newStory = {
      title: title,
      content: content,
      // category: category,
      date: new Date().toLocaleString(),
    };
    handleCreate(newStory);
  }

  async function handleCreate(story) {
    const token = localStorage.getItem('token');
    
    if (!isAuthenticated()) {
      message = 'Vous devez être connecté pour publier une histoire.';
      return;
    }
    try {
      const response = await fetch('https://khext1e9.directus.app/items/story', {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(story),
      });
      const data = await response.json();
      console.log('Story published:', data);
      message = 'Votre histoire a été publiée avec succès.';
      // Mettre à jour l'état de l'application pour refléter la nouvelle histoire publiée
    } catch (error) {
      console.error('Error publishing story:', error);
      message = 'Une erreur est survenue lors de la publication de votre histoire.';
      // Gérer les erreurs de publication de l'histoire
    }
  }
</script>

<main>
  <h1>Publier une histoire</h1>
  {#if message}
    <p>{message}</p>
  {/if}
  <form on:submit|preventDefault={handleSubmit}>
    <div class ="form"></div><label>
      Titre:
      <input type="text" bind:value={title} required />
    </label>
    <!-- <label>
      Catégorie:
      <input type="text" bind:value={category} />
    </label> -->
    <label>
      Contenu:
      <textarea bind:value={content} required></textarea>
    </label>
    <button type="submit">Publier</button>
  </form>
</main>



<style>



textarea {
   height: 300px;
   width: 500px;
}

input {
  
   width: 400px;
}

button{
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