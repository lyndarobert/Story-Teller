<!-- <script>
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
       role: "938f0498-f544-458c-9388-99142ef7cbd2"
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

  <a href="/login" use:link>Vous avez deja un compte ?</a>
  

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

        a {
          display: flex;
          justify-content: flex-end;
        }
    
        .conexion{
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
    
        .conexion:hover{
            cursor: pointer;
            background-color: #f7958e;
            color: #fff;
    
        }
    
        @media screen and (max-width:1000px){
    
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
    
    </style> -->