const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="currentyear">${today.getFullYear()}</span>`;


let oLastModif = new Date(document.lastModified);


const span = document.getElementById("lastModified");
span.textContent = oLastModif;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const gridSelctor = document.querySelector('#grid-view');
const listSelctor = document.querySelector('#list-view');


gridSelctor.addEventListener('click', () => {
    cards.classList.add('grid-view');
    cards.classList.remove('list-view');
});

listSelctor.addEventListener('click', () => {
    cards.classList.add('list-view');
    cards.classList.remove('grid-view');
});


const cards = document.querySelector('#cards')

async function loadMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.companies);
}

loadMembers();


function displayMembers(companies) {
    companies.forEach((company) => {
        let card = document.createElement('section');
        card.classList.add('member-card');

        let name = document.createElement('h2');
        let icon = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let webUrl = document.createElement('a');
        let memberLevel = document.createElement('p');



        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phone_number}`;
        
        if (company.member_level === "3") {
            memberLevel.textContent = 'Member status: GOLD';
        } 
        else if (company.member_level === "2") {
            memberLevel.textContent = 'Member status: SILVER';
        } 
        else    {
            memberLevel.textContent = 'Member';
        } 
        
        webUrl.setAttribute('href', company.web_url);
        webUrl.textContent = company.web_url;
        webUrl.setAttribute('target', '_blank');
        
        
        icon.setAttribute('src', company.icon_file);
        icon.setAttribute('alt', `Icon of ${company.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '90');
        icon.setAttribute('height', '90');


        card.appendChild(name);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(webUrl);
        card.appendChild(memberLevel);

        cards.appendChild(card);
    });
}