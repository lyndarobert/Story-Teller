<script>
  import Logo from '../assets/Logothestoryteller.png';
  import MenuBurger from '../assets/menu.png'
  import Close from '../assets/close.svg'
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
          "text": "S'enregistrer",
          "url": "/register"
      },
      {
          "label": "Formulaire de gestion de compte",
          "text": "Mon compte",
          "url": "/myaccount"
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
          "url": "/"
      },
  ];
   
    let showMenu = false;
  
    function toggleMenu() {
    showMenu = !showMenu;
    console.log(1);
  }
    </script>
    
    <div class= "header-content">
        <div class="modal_menu_burger">
            <button class="toggle-menu-button" on:click={toggleMenu}><img src="{MenuBurger}" alt="menu-burger" width="40px"></button>
          </div>
          <div class="logo">
              <img src="{Logo}" alt="Logo du site" width="200">
          </div>
          <div class="modal_menu_burger-second">
            <img src="{MenuBurger}" alt="menu-burger" width="40px">
          </div>
              <nav id="menu2" class = {`links ${showMenu ? 'class-open' : 'class-close'}`} role="menu" aria-label="header navigation">
                <div class="modal_menu_burger">
                    <button class="toggle-menu-button" on:click={toggleMenu}><img src="{Close}" alt="menu-burger" width="40px"></button>
                  </div>
                {#each nav_links as nav}
                      <a role="menuitem" aria-label="{nav.label}" class="{nav.class}" href="{nav.url}" on:click={toggleMenu} use:link>{nav.text}</a>
    
                {/each}
            </nav>
        </div>
  
      <style>
        .header-content{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        a{
          font-weight: bold;
          text-decoration: none;
          margin: 0.5rem;
          padding: 0.7rem;
          border: none;
          border-radius: 8px;
          background-color: #F97066;
          color: #fff;
          text-align: center;
          transition:  0.3s ease-out;
        }
        
        a:hover{
         cursor: pointer;
         background-color: #f7958e;
         color: #fff;
        }
        
        .toggle-menu-button{
            border: none;
            background-color: rgba(255, 0, 0, 0);
        }
        .toggle-menu-button:hover{
            cursor: pointer;
        }
        
        @media screen and (max-width:1023px){
                .class-close{
                    display: none;
                }
        
                .class-open{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  position: fixed;
                  top: 0;
                  bottom: 1;
                  right: 0;
                  width: 30%;
                  height: 100%;
                  background-color: #fec5bb;
                  padding:10px;
                }
        
        
                a{
                    width: 10rem;
                    z-index: 1;
                }
        
                header{
                    display: flex;
                    flex-direction: row-reverse;
                }
        
                .logo{
                    display: flex;
                    justify-content: center;
                    width: 100vw;
                }
                .modal_menu_burger{
                    padding: 0 1rem;
                }
                .modal_menu_burger-second{
                    padding: 0 1rem;
                    opacity: 0;
                }
            }
        @media screen and (max-width:700px){
                .class-close{
                    display: none;
                }
        
                .class-open{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  position: fixed;
                  top: 0;
                  bottom: 1;
                  right: 0;
                  width: 45%;
                  height: 100%;
                  background-color: #fec5bb;
                  padding:10px;
                }
        
        
                a{
                    width: 10rem;
                    z-index: 1;
                }
        
                header{
                    display: flex;
                    flex-direction: row-reverse;
                }
        
                .logo{
                    display: flex;
                    justify-content: center;
                    width: 100vw;
                }
                .modal_menu_burger{
                    padding: 0 1rem;
                }
                .modal_menu_burger-second{
                    padding: 0 1rem;
                    opacity: 0;
                }
            }
        
        @media screen and (min-width:1024px){
            .modal_menu_burger{
                display: none;
            }
            .modal_menu_burger-second{
                display: none;
            }
        }
        
            </style>