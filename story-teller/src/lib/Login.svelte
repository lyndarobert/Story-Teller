<script>
    import {push} from 'svelte-spa-router'
    import { isAuthenticated } from '../auth';
    import {handleLogout} from '../auth';
    import { link } from "svelte-spa-router";


     export let reload = false;
     let pseudo = "abcd" , pwd = "abcd", email = "abcd@gmail.com";
     const handleSubmit = async (event) => {
   
         event.preventDefault();
         
         const token = await login();
         console.log (token);
        localStorage.setItem('token', token);
         // Recharge la page
         if ( reload ) location.reload();
         // ou redirige vers l'accueil après connexion
         else push("/myaccount");
         
     }
     const login = async () => {
         // Appel du endpoint avec la bonne méthode et les données d'identification
         const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "auth/login", {
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify({
                  "email": email,
                  "password": pwd,
                  "pseudo": pseudo,
             })
         })
         // Extrait le token et le retourne
         const json = await response.json();
         return json.data.access_token;
         console.log("json");
     }
     
   

     
   </script>

 
 <div class="login-content">
     <div class="log-form">
 <h2 class="title1">Connexion</h2>
 <form on:submit={handleSubmit} aria-label="Informations de connexion">
     <label for="email">Email</label>
         <input required type="email" name="email" id="email" placeholder="ex : m.dupont@monmail.com" bind:value={email}>
    
     <label for="username">Pseudo</label>
     <input required type="pseudo" name="pseudo" id="pseudo" placeholder="Entrez un pseudo" bind:value={pseudo}>
 
     <label for="password">Mot de passe</label>
     <input required type="password" name="password" id="password" placeholder="***********" bind:value={pwd}>
 
     <input class="conexion" type="submit" value="Se connecter">
 </form>
 </div>
 <img class="img-login-page" src="src/assets/8741-removebg-preview.png" alt="conexion" width="500">
 </div>
 
 
 
 <style>
 
     .login-content{
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
     
         .img-login-page{
             display: none;
             }
     
         }
     
     </style>