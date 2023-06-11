const header = document.querySelector("#header");
header.innerHTML = `
    <section class="header-icons-container">
            <section class="icons">
               <a href="https://github.com/PauSanchezzz" target="_blank"><img class="image-git" src="assets/github.png" alt=""></a>
                <a  href="https://platzi.com/p/pau_06/" target="_blank"><img class="image-platzi" src="assets/platzii.png" alt=""></a>
                <a href="https://www.linkedin.com/in/paula-andrea-sanchez-torres/"target="_blank"><img src="assets/linkedin.png" alt=""></a> 
            </section>
        </section>
    <nav>
        <section class="nav-logo-container">
            <a class="item-left" href="index.html"><img src="assets/Logo.png" alt="Logo del blog"></a>
       </section>
        <section class="profile-link"> 
            <a class="item-right" href="perfil.html">Sobre Mi</a>
        </section>
    </nav>`;
