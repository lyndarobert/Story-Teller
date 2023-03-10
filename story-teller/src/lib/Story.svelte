

<script>
  export let params;
  const id = params.id;

  const getStory = async () => {
    // Appel de la requêtes
    const response = await fetch(
      import.meta.env.VITE_URL_DIRECTUS +
        `items/story/?fields=*.*&filter[id][_eq]=${id}`
    );
    // Extraction du json de la réponse
    const json = await response.json();
    return json.data;
  };
</script>

{#await getStory()}
  <p>Récupération de l'histoire en cours...</p>
{:then story}
  {#each story as story}
    <section class="stories" aria-labelledby="story-title-{story.id}">
      <div
        class="story-card"
        data-aos="fade-left"
        data-aos-easing="ease-out-back"
        data-aos-delay="40"
      >
        <h2 class="story-title">{story?.title}</h2>

        {#if story?.image?.id}
          <img
            src="https:/khext1e9.directus.app/assets/{story.image.id}"
            alt={story.title}
            class="thumbnail"
          />
        {:else}
          <img
            src="https://khext1e9.directus.app/assets/6358aa4f-dc57-460a-84ac-38d5b77aba79"
            alt={story.title}
            class="thumbnail"
          />
        {/if}

        <p>{story.content}</p>
        <div class="line" />

        <div class="line" />
        <div class="category">
        {#if story?.category?.name}
          <p>{story.category.name}</p>
        {:else}
          <p>No Category</p>
        {/if}
      </div>
      </div>
    </section>
  {/each}
{/await}

<style>
  #title1 {
    margin: 4rem;
    color: #ff8906;
  }

  .thumbnail {
    width: 100px;
    height: auto;
  }

  .subtitle {
    font-size: 2rem;
    color: #fffffe;
    padding: 2rem;
    border-bottom: #fffffe solid 1px;
  }

  .line {
    border-bottom: 3px solid #e2a55e;
    width: 100%;
  }

  h1 {
    text-align: center;
    margin: 2rem;
    color: #fffffe;
  }

  .story-title {
    color: #ff8906;
    text-align: justify;
    font-size: 2rem;
  }

  p {
    margin: 1.2rem;
    color: black;
    text-align: center;
    line-height: 2rem;
    text-align: justify;
  }

  .intro {
    text-align: center;
    margin: 50px;
  }

  .stories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem;
  }

  .story-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background-color: #fffffe;
    border: 3px solid #ff8906;
    transition: transform 0.2s;
    padding: 0.5rem;
    width: 600px;
    max-height: max-content;
    text-align: justify;
    padding: 20px;
    margin-top: 50px;
  }

  .story-card:hover {
    transform: scale(1.02);
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    margin: 0.5rem;
    padding: 0.7rem;
    border: none;
    border-radius: 8px;
    background-color: #ff8906;
    color: #fff;
    text-align: center;
    transition: 0.3s ease-out;
  }

  a:hover {
    cursor: pointer;
    background-color: #e2a55e;
    color: #fff;
  }
</style> 