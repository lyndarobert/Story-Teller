<script>
  import logo from '../assets/Logothestoryteller.png';
  import {link} from 'svelte-spa-router'
  const nav_links = [
      {
          "label": "Page d'accueil du site",
          "text": "Accueil",
          "url": "/"
      },
      {
          "label": "Formulaire de connexion au site",
          "text": "Se connecter",
          "url": "/login"
      },
      {
          "label": "Formulaire d'inscription au site",
          "text": "S'enregistrer'",
          "url": "/register"
      },
      {
          "label": "Page des histoires",
          "text": "Histoires",
          "url": "/stories"
      },
      {
          "label": "Page de création d'une histoire",
          "text": "Ecrire une histoire",
          "url": "/createstory"
      },
      {
          "label": "Page de déconnexion",
          "text": "Se déconnecter",
          "url": "/*"
      },
  ];
  </script>
  
  
  <nav aria-label="header navigation">
      <a href="/" class="logo" title="The story teller" aria-label="accueil du site">
          <img src="{logo}" alt="Logo du site">
      </a>
  
      <ul id="menu2" class="links" role="menu" aria-labelledby="menubutton">
        {#each nav_links as nav}
          <li role="none">
              <a role="menuitem" aria-label="{nav.label}" href="{nav.url}" use:link>{nav.text}</a>
          </li>
        {/each}
      </ul>
  
      <button type="button"
          id="menubutton"
          aria-haspopup="true"
          aria-controls="menu2">
          <i class="fa-solid fa-bars"></i>
      </button>
  </nav>
  