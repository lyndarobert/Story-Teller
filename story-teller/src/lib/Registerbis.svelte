<script>
  import {push} from 'svelte-spa-router'
 import { link } from "svelte-spa-router";


export let reload = false;

 let pseudo = '';
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

  const exists = await emailExists(email);
  if (exists) {
    errorMessage = "Un utilisateur avec cette adresse email existe déjà.";
    return;
  }

  try {
    // Enregistrement de l'utilisateur
    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/user", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, pseudo }),
    });

    // Recharge la page
    if (reload) location.reload();
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
       role: "49d144e1-3da7-41fc-8b40-b2ae9167c1a4"
     }),
   }
 );
};

const emailExists = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_URL_DIRECTUS}items/user?filter[email][_eq]=${email}`);
  const data = await response.json();
  return data.data.length > 0;
};


</script>

<div class="register-content">
  <div class="register-form">
 <h1 class="title1">Inscription</h1>

 {#if errorMessage}
   <p style="color: red;">{errorMessage}</p>
 {/if}

 <form on:submit={handleSubmit} on:submit={userRole} data-aos="fade-left">
  


   <label for="email">Email:</label>
   <input type="email" bind:value={email} required />

   <label for="pseudo">Pseudo:</label>
   <input type="pseudo" bind:value={pseudo} required />

   <label for="password">Mot de passe:</label>
    <input type="password" bind:value={password} required />

   <label for="confirmpassword">Confirmer le mot de passe:</label>
    <input type="password" bind:value={confirmPassword} required />

   <input class="connexion" type="submit" value="S'inscrire">
 </form>

 </div>
  <img class="register-img" src="src/assets/8741-removebg-preview.png" alt="register" width="500" data-aos="fade-right">
 </div>



<style>
 .register-content{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
}

.title1{
  text-align: center;
  padding: 2rem 0 0.5rem;
  color: #F97066;
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

.connexion{
  border: 1px solid #F97066;
  border-radius: 8px;
  background-color: #F97066;
  color: #fff;
  text-align: center;
  padding: 1rem 4rem;
  transition: all 0.4s;
  font-weight: bold;
  font-size: 1.2rem;
}
.connexion:hover{
    cursor: pointer;
    background-color: #f7958e;
    color: #fff;

}

@media screen and (max-width:1130px){

  .register-content{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

    input{
    text-align: left;
    margin-bottom: 1rem;
    padding: 0.5rem 4rem 0.5rem 0.4rem;
    border: 1px solid #F97066;
}
.register-img{
    display: none;
}

}

</style>