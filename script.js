window.addEventListener("load", (event) => {
    document.getElementById('submit_btn').addEventListener('click', e => {
        e.preventDefault()
        alert("Trying to send message")
        var emailjs = require('emailjs-com');
        
        var templateParams = {
            to_name: 'andrew.adidsaputra1@gmail.com',
            from_name: document.getElementById('').value,
            message: document.getElementById('').value,
        };

        emailjs.send('service_id', 'template_id', templateParams, 'user_id')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

    })
});