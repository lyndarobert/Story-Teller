<script>
  import { push } from 'svelte-spa-router'
  import { isAuthenticated } from '../auth';
  import { handleLogout } from '../auth';
  
  let email = "", pwd = "", newPseudo = "", newPwd = "";
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!isAuthenticated()) {
      console.log("Vous devez vous connecter pour modifier votre mot de passe.");
      return;
    }

    const token = localStorage.getItem('token');

    const response = await fetch(import.meta.env.VITE_URL_DIRECTUS + "items/user/"+ id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        "email": email,
        "password": pwd,
        "pseudo": newPseudo,
        "new_password": newPwd
      })
    })

    if (response.status === 200) {
      console.log("Mot de passe modifié avec succès !");
      handleLogout();
      push("/login");
    } else {
      console.log("Erreur lors de la modification du mot de passe.");
    }
  }
</script>


<h1>Modifier le mot de passe</h1>

<form on:submit={handleSubmit}>
  <label>
    Adresse e-mail :
    <input type="email" bind:value={email} required>
  </label>
  <label>
    Mot de passe actuel :
    <input type="password" bind:value={pwd} required>
  </label>
  <label>
    Nouveau pseudo :
    <input type="text" bind:value={newPseudo}>
  </label>
  <label>
    Nouveau mot de passe :
    <input type="password" bind:value={newPwd} required>
  </label>
  <button type="submit">Modifier le mot de passe</button>
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