const fullname = document.getElementById('author');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const contact_us_form = document.getElementById('homeContactForm');
const selectType = document.getElementById("selectType")
// const correct_response_indicator = document.getElementById('correct_response');
// const error_response_indicator = document.getElementById('error_response');

const SubmitContactForm = (e) =>{
    e.preventDefault();
    // error_response_indicator.style.display="none";
    // correct_response_indicator.style.display="none";
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/contact@mieladigital.com', {
    _subject: "Contact Form Questions/Inquiries",
    Select: selectType.value,
    Name: author.value,
    Email: email.value,
    Subject: subject.value,
    Message: message.value,
    
    })
    .then(response => response.status == 200 ? (console.log("success")): null)
    .catch(error => (console.log(error)));
    contact_us_form.reset();
}