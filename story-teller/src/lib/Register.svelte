<!-- <script>
    import {push} from 'svelte-spa-router'
    import { link } from "svelte-spa-router";
    import { isAuthenticated } from '../auth';
    import {handleLogout} from '../auth';


    export let reload = false;
    let email = "", pwd = "", confirmPwd = "", pseudo = "";
    
  
    const handleSubmit = async (event) => {
          event.preventDefault();

          if (pwd !== confirmPwd) {
              alert("Les mots de passe ne correspondent pas.");
              return;
          }
          
          const token = await register();
  
          localStorage.setItem("token", token);
          console.log(token);
          // Recharge la page
          if ( reload ) location.reload();
          // ou redirige vers l'accueil après inscription
          else push("/login");
      }
  
      const register = async () => {
          // Appel du endpoint avec la bonne méthode et les données d'inscription
          const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/user", {
              method: "POST",
      headers: {
        "Content-Type": "application/json",
  
      },
      body: JSON.stringify({
        "email": email,
        "password": pwd,
        "pseudo": pseudo,
      }),
    });
  
    // Vérifie si la réponse est OK et renvoie true si c'est le cas
  if (response.ok) {
    const json = await response.json();
    return json.access_token

    throw new Error(json.error.message);
  }
  };

  // fonction qui verifie que l'user est deja enregistré avec cette adresse mail :

  const checkIfUserExists = async (email) => {
  const response = await fetch(`${import.meta.env.VITE_URL_DIRECTUS}items/user?email=${email}`);
  const json = await response.json();
  return json.data.length > 0;
}
  
     
  </script>



  
  <div class="register-content">
    <div class="register-form">
      <h2 class="title1">S'inscrire</h2>
      <form on:submit={handleSubmit} aria-label="Informations de connexion">
        <label for="email">Email</label>
        <input required type="email" name="email" id="email" placeholder="ex : m.dupont@monmail.com" bind:value={email}>
  
        <label for="username">Pseudo</label>
        <input required type="pseudo" name="pseudo" id="pseudo" placeholder="Entrez un pseudo" bind:value={pseudo}>
  
        <label for="password">Mot de passe</label>
        <input required type="password" name="password" id="password" placeholder="***********" bind:value={pwd}>
  
        <label for="password">Confirmer Mot de passe</label>
        <input required type="password" name="password" id="password" placeholder="***********" bind:value={confirmPwd}>
  
        <input class="conexion" type="submit" value="S'inscrire">
      </form>
    </div>
  
    <img class="register-img" src="src/assets/8741-removebg-preview.png" alt="register" width="500">
  </div>

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