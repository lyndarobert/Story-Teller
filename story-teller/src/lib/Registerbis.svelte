<script>
  import {push} from 'svelte-spa-router'
 import { link } from "svelte-spa-router";


export let reload = false;

 let email = ''
 let password = '';
 let confirmPassword = '';
 let errorMessage = '';


 const handleSubmit = async (event) => {
   event.preventDefault();

   if (password !== confirmPassword) {
     errorMessage = "Les mots de passe ne correspondent pas.";
     return;
   }

   try {
     const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/user", {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email, password }),
     });

       // Recharge la page
       if ( reload ) location.reload();
     // ou redirige vers l'accueil après inscription
       else push("/login");

   } catch (error) {
     console.error(error);
     errorMessage = "Une erreur est survenue lors de l'inscription.";
     alert("Une erreur est survenue lors de l'inscription.")
   };
 };


 const userRole = async () => {
 // Appel du endpoint avec la bonne méthode et les données d'identification
 const response = await fetch(
   import.meta.env.VITE_URL_DIRECTUS + "users",
   {
     method: "POST",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify({ 
       email,
       password,
       role: "8e7da95b-1e59-49b7-bc51-e20b622db3fe"
     }),
   }
 );
}

</script>

<main>
  <h1>Inscription</h1>

  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}

  <form on:submit={handleSubmit} on:submit={userRole}>
    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>

    <label>
      Mot de passe:
      <input type="password" bind:value={password} required />
    </label>

    <label>
      Confirmer le mot de passe:
      <input type="password" bind:value={confirmPassword} required />
    </label>

    <button type="submit">S'inscrire</button>
  </form>
</main>