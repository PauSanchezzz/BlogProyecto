const header = document.querySelector("#header");
header.innerHTML = `
    <section class="header-icons-container">
            <section class="icons">
               <a href="/"><img src="assets/whatsapp.png" alt=""></a>
                <a href="/"><img src="assets/instagram.png" alt=""></a>
                <a href="/"><img src="assets/linkedin.png" alt=""></a> 
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
