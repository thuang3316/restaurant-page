import "./styles.css";
import createHomePage from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

const createPage = function () {
    createHomePage();
    createMenu();
    createAbout();

    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');

    const homePage = document.querySelector('.homePage');
    const menuPage = document.getElementById('menu-grid');
    const aboutPage = document.querySelector('.about');

    homeBtn.addEventListener('click', () => {
        homePage.style.display = 'flex';
        menuPage.style.display = 'none';
        aboutPage.style.display = 'none';
    })

    menuBtn.addEventListener('click', () => {
        homePage.style.display = 'none';
        menuPage.style.display = 'grid';
        aboutPage.style.display = 'none';
    })

    aboutBtn.addEventListener('click', () => {
        homePage.style.display = 'none';
        menuPage.style.display = 'none';
        aboutPage.style.display = 'block';
    })
};

createPage();

