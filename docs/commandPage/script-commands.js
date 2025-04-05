function checkScreenAndRemove() {
    const mediaQuery765 = window.matchMedia("(max-width: 765px)");
    const mediaQuery766 = window.matchMedia("(min-width: 766px)");
    const parent = document.getElementById('header-menu-view');
    const headerImg = document.getElementById('header-img');
    const imgLink = document.getElementById('header-link-img');

    if (mediaQuery765.matches) {
        headerImg.src = '../../images/extended-logo.png';
        headerImg.style.width = '100px'
        headerImg.style.height = '50px'
        imgLink.style.width = '100px';
        imgLink.style.height = '50px'
        parent.innerHTML = `<div class="onlymobile-header" id="onlymobile-header">
                                <div class="container-menu">
                                    <button class="hamburger-btn" id="hamburger"><img class="hamburger-img" src="../../images/hamburger.png" alt="hamburger"></button>
                                </div>
                            </div>`;
    }
    
    if (mediaQuery766.matches) {
        headerImg.src = '../../images/logo.png';
        headerImg.style.width = '45px';
        headerImg.style.height = '45px';
        imgLink.style.width = '45px';
        imgLink.style.width = '45px';
        parent.innerHTML = `<div class="container-navbar" id="container-navbar">
                                <nav class="navbar">
                                    <ul class="navigation">
                                        <li class="header-nav-list"><a class="header-link-nav" href="../../index.html">Home</a></li>
                                        <li class="header-nav-list"><a class="header-link-nav" href="../mixingPage/mixingGuide.html">Mixing Guide</a></li>
                                        <li class="header-nav-list"><a class="header-link-nav" href="./commandsGuide.html">Commands Guide</a></li>
                                    </ul>
                                </nav>
                            </div>`;
    }
}

// Vérifie au chargement
checkScreenAndRemove();

// Vérifie aussi quand on redimensionne
window.addEventListener("resize", checkScreenAndRemove);