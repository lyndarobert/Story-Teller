<script>
  import { createEventDispatcher } from 'svelte';
 

  const dispatch = createEventDispatcher();
  let title = '';
  let content = '';
  let category = '';
  let message = '';

  function handleSubmit() {
    const newStory = {
      title: title,
      content: content,
      category: category,
      date: new Date().toLocaleString(),
    };
    handleCreate(newStory); 
  }

  function handleCreate(story) {
    fetch('https://khext1e9.directus.app/items/story', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
                "content" : content,
                "title": title,
                "category": category
            })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Story published:', data);
      message = 'Votre histoire a été publiée avec succès.';
      // Mmessage pour la nouvelle histoire publiée
    })
    .catch(error => {
      console.error('Error publishing story:', error);
      message = 'Une erreur est survenue lors de la publication de votre histoire.';
      // Gére les erreurs de publication de l'histoire
    });
  }

  


</script>

<div class ="container-create">
  <h2>Partagez votre plume</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <label for="title">Title:</label>
    <input type="text" id="title" bind:value={title} />
    <label for="category">Category:</label>
    <select id="category" bind:value={category}>
      <option value="">--Choisir une catégorie--</option>
      <option value="Roman">Romance</option>
      <option value="Policier">Policier</option>
      <option value="Science-fiction">Science-fiction</option>
      <option value="Fantasy">Fantastique</option>
      <option value="Poésie">Poésie</option>
      <option value="ContesetLégendes">Contes et Légendes</option>
      <option value="Drame">Drame</option>
    </select>
    
    <textarea id="content" bind:value={content}></textarea>
    <button type="submit">Publish</button>
  </form>
  {#if message}
    <p>{message}</p>
  {/if}
</div>



<style>

.container-create {
  display: table-caption;
  flex-direction: column;
  align-items: center;
}

.container-create h2 {
  margin-bottom: 1rem;
}

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