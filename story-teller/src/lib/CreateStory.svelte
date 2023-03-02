
<script>
  import { createEventDispatcher } from 'svelte';
  import { isAuthenticated } from '../auth.js';
  import { link } from "svelte-spa-router";

  const dispatch = createEventDispatcher();
  let title = '';
  let content = '';
  let category = '';
  let status = 'draft';
  let categories = []; // nouvelle variable pour stocker les catégories
  let message = '';
  let isPreviewing = false; // nouvelle variable pour gérer l'affichage de la prévisualisation

  async function loadCategories() {
    try {
      const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + 'items/category');
      const data = await response.json();
      categories = data.data;
      console.log('Categories loaded:', categories);
    } catch (error) {
      console.error('Error loading categories:', error);
      // Gérer les erreurs de chargement des catégories
    }
  }

  loadCategories(); // appel de la fonction pour charger les catégories au démarrage

  function handleSubmit() {
    
    const newStory = {
      title: title,
      content: content,
      category: category,
      status: status,
      date: new Date().toLocaleString(),
    };
    handleCreate(newStory);
  }

  async function handleCreate(story) {
    const token = localStorage.getItem('token');

    // if (!isAuthenticated()) {
    //   message = 'Vous devez être connecté pour publier une histoire.';
    //   return;
    // }
    try {
      const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + 'items/story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(story),
      });
      // window.location.reload();
      const data = await response.json();
      console.log('Story published:', data);
      message = 'Votre histoire a été publiée avec succès.';
    
    } catch (error) {
      console.error('Error publishing story:', error);
      message = 'Une erreur est survenue lors de la publication de votre histoire.';
      
    }
  }
</script>
















<div class="container-create">
  <h2>Partagez votre plume</h2>
  {#if !isAuthenticated()}
  <div>Merci de vous identifier</div>

  <div class ="button-container">
   
    <a href="/register" use:link>Se connecter</a>
  </div>
  {:else}

  <form on:submit|preventDefault={handleSubmit}>
    <div class="form"></div>
    <label>
      Titre:
      <input type="text" bind:value={title} required />
    </label>
    <label>
      Catégorie:
      <select bind:value={category}>
        {#each categories as cat}
        <option value={cat.id}>{cat.name}</option>
        {/each}
      </select>
    </label>
    <label>
      Statut:
      <select bind:value={status}>
        <option value="draft">Brouillon</option>
        <option value="published">Publié</option>
      </select>
    </label>
    <label>
      Contenu:
      <textarea bind:value={content} required></textarea>
    </label>
    <button type="submit">Publier</button>
  </form>
  {#if message}
  <p class="success">{message}</p>
  {:else}
  <p class="error"></p>
{/if}
  {/if}
  
</div>






<style>

  .container-create{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        
    }

    label{
        margin: 0.5rem;
        color: #F97066;
        font-weight: bold;
    }

    input{
        margin-bottom: 1rem;
        padding: 1rem 8rem 1rem 0.8rem;
        border: 1px solid #F97066;
        border-radius: 10px;
    }

    select{
      background-color: #fff;
      color: #F97066;
      border: 2px solid #F97066;
      border-radius: 10px;
      padding: 0.8rem;
      width: 200px;
      margin-bottom: 1rem;
    }

  textarea {
    display: flex;
     height: 150px;
     width: 300px;
     border: 1px solid #f7958e;
     margin-bottom: 1rem;
  }
  
  input {
  
     width: 100px;
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
  }

  button:hover{
    cursor: pointer;
    background-color: #f7958e;
    color: #fff;
  }

  .success{
    color: #fff;
    background-color: green;
    border-radius: 10px;
    padding: 0.8rem;
  }
  
  </style>
