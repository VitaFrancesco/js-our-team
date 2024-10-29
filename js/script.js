const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function createCard (username, userRole, userMail, userImg) {
  //div colonna
  const col = document.createElement('div');
  col.classList.add('col-12', 'col-md-6', 'col-xl-4');
  fragment.appendChild(col);
  // div card
  const card = document.createElement('div');
  card.classList.add('d-flex', 'flex-row', 'height-120px');
  col.appendChild(card);
  //img
  const img = document.createElement('img');
  img.classList.add('img-fluid');
  img.src = userImg;
  card.appendChild(img);
  // card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('text-white', 'bg-dark', 'p-3', 'flex-grow-1');
  card.appendChild(cardBody);
  // testo nella card
  const h5 = document.createElement('h5');
  h5.classList.add('fw-bold');
  h5.innerText = `${username}`;
  cardBody.appendChild(h5);
  
  const p = document.createElement('p');
  p.innerText = `${userRole}`;
  cardBody.appendChild(p);

  const linkMail = document.createElement('a');
  linkMail.classList.add('text-decoration-none');
  linkMail.innerText = `${userMail}`;
  cardBody.appendChild(linkMail);
};

// frammento per aggiungere card oltre quelle iniziali (6)
const fragment = document.createDocumentFragment();
const imgProfessionist = document.querySelectorAll('img');
const nameProfessionist = document.querySelectorAll('h5');
const roleProfessionist = document.querySelectorAll('.role-professionist');
const emailProfessionist = document.querySelectorAll('.text-decoration-none');

const formProfessionist = document.getElementById('addProfessionist');
const inputName = document.getElementById('fullname');
const inputRole = document.getElementById('roleMember');
const inputEmail = document.getElementById('emailMember');
const inputImg = document.getElementById('selectImg');


for (let i = 0; i < teamMembers.length; i++) {

  const  {name, role, email, img : imgObj} = teamMembers[i];

  imgProfessionist[i].src = imgObj;
  nameProfessionist[i].innerText = name;
  roleProfessionist[i].innerText = role;
  emailProfessionist[i].innerText = email;
  
};

formProfessionist.addEventListener('submit', function (event) {
  event.preventDefault();
  // teamMembers.push({ 
  //   name: `${inputName}`,
  //   role: `${inputRole}`,
  //   email: `${inputEmail}`,
  //   img: `${inputImg}`
  // });
  createCard(inputName.value, inputRole.value, inputEmail.value, inputImg.value);
  const ourTeam = document.getElementById('ourTeam');
  ourTeam.appendChild(fragment);
});


console.log(fragment);

// form e passare come paramentri
