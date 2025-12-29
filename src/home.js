import homePageImg from "../homepage.jpeg";

function createHomePage () {
    const content = document.getElementById('content');

    const homePage = document.createElement('div');
    homePage.classList.add('homePage');

    content.appendChild(homePage);
    const heading = document.createElement('h1');

    heading.textContent = "Welcome to Spicy Hunan Restaurant!";
    homePage.appendChild(heading);

    const image = document.createElement('img');
    image.src = homePageImg;

    homePage.appendChild(image);

    const text = document.createElement('p');
    text.textContent = "Have you ever felt that you need something really spicy in life? Then you've come to the right place. We offer super delicious Hunan cuisine that ranges from super spicy to ultra spicy. Give yourself a try!";

    homePage.appendChild(text);

    // create opening hour table
    const openingHours = [
        { day: "Monday",    hours: "10:00 AM – 10:00 PM" },
        { day: "Tuesday",   hours: "10:00 AM – 10:00 PM" },
        { day: "Wednesday", hours: "10:00 AM – 10:00 PM" },
        { day: "Thursday",  hours: "10:00 AM – 11:00 PM" },
        { day: "Friday",    hours: "10:00 AM – 12:00 AM" },
        { day: "Saturday",  hours: "12:00 PM – 12:00 AM" },
        { day: "Sunday",    hours: "Closed" }
    ];

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";

    // Table header
    const headerRow = document.createElement("tr");
    ["Day", "Opening Hours"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.style.padding = "12px";
        th.style.borderBottom = "2px solid #00f6ff";
        th.style.textAlign = "left";
        table.appendChild(headerRow);
        headerRow.appendChild(th);
    });

    // Table rows
    openingHours.forEach(item => {
        const row = document.createElement("tr");

        const dayCell = document.createElement("td");
        dayCell.textContent = item.day;

        const hoursCell = document.createElement("td");
        hoursCell.textContent = item.hours;

        [dayCell, hoursCell].forEach(cell => {
        cell.style.padding = "10px";
        cell.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        });

        row.appendChild(dayCell);
        row.appendChild(hoursCell);
        table.appendChild(row);
    });

    homePage.appendChild(table);
}

export default createHomePage;