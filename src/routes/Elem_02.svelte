<div class="container">
    <h1>Welcome to SvelteKit</h1>

    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>

    <div class="img">
        <h1 class="link"><a href="elem_02_db">Hola</a></h1>
    </div>
</div>

<style>
    .container {
        grid-row-start: 1;
        grid-row-end: 1;
        grid-column-start: 3;
        grid-column-end: 6;

        border: 2px solid #fff;
    }
    
    .img {
        background-image: url(central_sup.png);
        background-size: cover; /* Asegura que la imagen cubra todo el espacio */
        background-blend-mode: darken;
        display: flex; /* Habilita flexbox */
        justify-content: center; /* Centra horizontalmente */
        align-items: center; /* Centra verticalmente */
        height: 200px; /* Altura del contenedor (ajusta según sea necesario) */
    }
   
</style>
