<script>
    let src_footer='footer.png';
</script>

<header>
    <p>hola header</p>   
</header>

<nav>
    <li><a href="/">Home</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/actions">Actions</a></li>
</nav>

<main>
    <slot></slot>
</main>


<footer>
    <p>hola footer</p>
</footer>

<style>
    header{
        background-image: url(header.png);        
    }

    footer {
    background-image: url('footer.png');
    position: fixed;
    bottom:0;
    background-size: cover;
    background-repeat: no-repeat; 
    background-position: center top;
    width: 100%;
    height: 150px;
    margin-left: -1rem;
    padding: 0;
    border: -rem;
    opacity: 0.3;
    }
</style>
