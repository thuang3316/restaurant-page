function createMenu() {
    const content = document.getElementById('content');

    const dishes = [
        {
        name: "Kung Pao Chicken",
        description: "Stir-fried chicken with peanuts, dried chili peppers, and Sichuan peppercorns.",
        price: "$12.99"
        },
        {
        name: "Mapo Tofu",
        description: "Soft tofu in a spicy, savory sauce with minced pork and chili bean paste.",
        price: "$10.99"
        },
        {
        name: "Peking Duck",
        description: "Crispy roasted duck served with pancakes, scallions, and hoisin sauce.",
        price: "$24.99"
        },
        {
        name: "Chow Mein",
        description: "Wok-fried noodles with vegetables and your choice of meat.",
        price: "$11.99"
        }
    ];

    
    const grid = document.createElement('div');
    grid.id = 'menu-grid'
    content.appendChild(grid)

    dishes.forEach(dish => {
        const card = document.createElement("div");
        card.className = "menu-card";

        const title = document.createElement("h3");
        title.textContent = dish.name;

        const desc = document.createElement("p");
        desc.textContent = dish.description;

        const price = document.createElement("span");
        price.textContent = dish.price;

        card.append(title, desc, price);
        grid.appendChild(card);
    });
}

export default createMenu;