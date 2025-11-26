
const dialogBox = document.querySelector("#dialogBoxMember");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBoxMember div");


const membershipDetails = {
  openButton1: {
    title: "NP Membership Benefits",
    text: "No fee, community events, networking."
  },
  openButton2: {
    title: "Bronze Membership Benefits",
    text: "Basic directory listing and event invitations."
  },
  openButton3: {
    title: "Silver Membership Benefits",
    text: "Promotional opportunities and networking perks."
  },
  openButton4: {
    title: "Gold Membership Benefits",
    text: "Premium visibility, sponsorships, and exclusive benefits."
  }
};


Object.entries(membershipDetails).forEach(([buttonId, content]) => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    dialogBoxText.innerHTML = `<h3>${content.title}</h3><p>${content.text}</p>`;
    dialogBox.showModal();
  });
});


closeButton.addEventListener("click", () => {
    dialogBox.close();
});



const form = document.querySelector('.join-form');
const timeStamp = document.querySelector('#timestamp');

form.addEventListener('submit', () => {
  const now = new Date();
  timeStamp.value = now.toISOString();
});



