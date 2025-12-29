function createAbout () {
    const content = document.getElementById('content');

    const aboutContent = document.createElement('div');
    aboutContent.classList.add('about');
    aboutContent.textContent = 'Tucked beneath the glow of neon lights, our Chinese restaurant blends time-honored culinary traditions with a bold, modern atmosphere. Drawing inspiration from classic regional dishes across China, our menu features rich, aromatic flavors—from fiery Sichuan spices to savory Cantonese stir-fries—each prepared with fresh ingredients and careful technique. The space hums with energy, warm hospitality, and the comforting aroma of wok-fired cooking, inviting guests to gather, linger, and enjoy an experience that feels both familiar and excitingly new.';

    content.appendChild(aboutContent);
}

export default createAbout;