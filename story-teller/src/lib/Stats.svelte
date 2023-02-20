<script>
  const stat_values = [
      {
          "text": "Nombre d'histoires",
          "value": "603"
      },
      {
          "text": "Nombre d'auteurs",
          "value": "245"
      },
    
  ]
  </script>
  
  <section class="stats" aria-labelledby="stats-title">
      <h2 id="stats-title">Quelques chiffres</h2>
      <ul>
          {#each stat_values as stat}
          <li>
              <h3>{stat.text}</h3>
              <big>{stat.value}</big>
          </li>
          {/each}
      </ul>
  </section>
  