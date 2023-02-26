<script>
  import { push } from 'svelte-spa-router'
  
  
  let email = "", pwd = "", pseudo = "", newPseudo = "", newPwd = "";
  let stories = [];

  const handleSubmit = async (event) => {
    console.log("endpoint: ", import.meta.env.VITE_URL_DIRECTUS + "items/user");
    console.log("body: ", JSON.stringify({
        "email": email,
        "password": pwd,
        "pseudo": pseudo,
        
        
      }));
    event.preventDefault();
    const token = await login();
    localStorage.setItem('token', token);
    push("/");
  }

  const login = async () => {


    // Appel du endpoint avec la bonne méthode et les données d'identification
    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/user", {
  
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        
        "password": pwd,
        "pseudo": pseudo,
        
      })
      
    })
    // Extrait le token et le retourne
    const json = await response.json();
    return json.data.access_token;
    
  }

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   push('/');
  // }


</script>

<h2 class="title1">Gérer mon compte</h2>

<form on:submit={handleSubmit} aria-label="Page de gestion de compte">


    <label for="username">Votre Pseudo Actuel</label>
    <input required type="pseudo" name="pseudo" id="pseudo" placeholder="Entrez un pseudo" bind:value={pseudo}>
    <!-- formulaire pour choisir un nouveau pseudo -->
    <label for="username">Choisissez un nouveau Pseudo</label>
    <input required type="pseudo" name="pseudo" id="pseudo" placeholder="Entrez un pseudo" bind:value={newPseudo}>



    <label for="password">Mot de passe actuel</label>
    <input required type="password" name="password" id="password" placeholder="*******" bind:value={pwd}>
    <!-- formulaire de changement de mot de passe -->
    <label for="password">Nouveau Mot de passe </label>
    <input required type="password" name="password" id="password" placeholder="*******" bind:value={newPwd}>


    <input class="connexion" type="submit" value="Validez les changements">
</form>




<style>
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
  margin: 2rem 0;
}

label{
  margin: 0.5rem;
  color: #F97066;
  font-weight: bold;
}

input{
  margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  border: 1px solid #F97066;
  border-radius: 10px;
  font-size: 1.1rem;
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

@media screen and (max-width:1000px){

  input{
    text-align: left;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #F97066;
    font-size: 1rem;
  }

}

</style>