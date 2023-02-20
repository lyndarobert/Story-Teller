<script>
  import {push} from 'svelte-spa-router'
  export let reload = false;
  let email = "lyly", pwd = "1234", pseudo = "lyly";

  const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await login();
        localStorage.setItem('token', token);
        // Recharge la page
        if ( reload ) location.reload();
        // ou redirige vers l'accueil après connexion
        else push("/");
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
    }
</script>


<h2 id="title1">Se connecter</h2>

<form on:submit={handleSubmit} aria-label="Informations de connexion">
    <label for="email">Email</label>
    <input required type="email" name="email" id="email" placeholder="ex : m.dupont@monmail.com" bind:value={email}>

    <label for="username">Pseudo</label>
    <input required type="pseudo" name="pseudo" id="pseudo" placeholder="Entrez un pseudo" bind:value={pseudo}>

    <label for="password">Mot de passe</label>
    <input required type="password" name="password" id="password" placeholder="***********" bind:value={pwd}>

    <input type="submit" value="Se connecter">
</form>
