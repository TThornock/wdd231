const params = new URLSearchParams(window.location.search);

const setTimestamp = params.get("timestamp")
const dateNow = new Date(setTimestamp);

const formatDate = `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()}`;

document.querySelector('#submission-details').innerHTML = `
<ul>Name: ${params.get('firstname')} ${params.get('lastname')}</ul>
<ul>Email: ${params.get('email')}</ul>
<ul>Phone: ${params.get('phone')}</ul>
<ul>Organization: ${params.get('organization')}</ul>
<ul>Date: ${formatDate}</ul>`;
