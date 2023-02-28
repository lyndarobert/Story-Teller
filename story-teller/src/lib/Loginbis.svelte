<script>
  import { push } from "svelte-spa-router";
  import { link } from "svelte-spa-router"; 

  export let reload = false;

    let email = "";
    let password= "";
    // let userRole = "8e7da95b-1e59-49b7-bc51-e20b622db3fe";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await login();
    localStorage.setItem("token", token);
    // Recharge la page
    window.location.assign("/stories");
    
    // if (reload) location.reload();
    //ou redirige vers l'accueil après connexion
    //  push("/stories");
  };

  const login = async () => {
    // Appel du endpoint avec la bonne méthode et les données d'identification
    const response = await fetch(
      import.meta.env.VITE_URL_DIRECTUS + "auth/login",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, password}),
      }
    );

    // Vérification de la réponse
    if (!response.ok) {
      throw new Error("Erreur lors de la connexion");
    }
    // Extrait le token et le retourne
    const token = await response.json();
    return token.data.access_token;
  };
  //  fonction pour se déconnecter
  const handleLogout = () => {
    localStorage.removeItem("token");
    push("/");
  };

</script>


<main>
  <div class="login-content">
    <div class="log-form">
      <h2 class="title1">Connexion</h2>
      <form on:submit={handleSubmit} aria-label="Informations de connexion">
        <label for="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="ex : m.dupont@monmail.com"
          bind:value={email}
        />

        <label for="password">Mot de passe</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="***"
          bind:value={password}
        />

        <input class="conexion" type="submit" value="Se connecter" />
      </form>
    </div>
    <img
      class="img-login-page"
      src="src/assets/8741-removebg-preview.png"
      alt="connexion"
      width="500"
    />
  </div>
</main>
