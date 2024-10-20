document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;

    const formData = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        termsAccepted: termsAccepted
    };

    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    this.reset();

    displaySubmissions();
});

function displaySubmissions() {
    const submissionsTableBody = document.getElementById('submissionsTableBody');
    submissionsTableBody.innerHTML = '';

    const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    
    submissions.forEach(submission => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${submission.name}</td>
            <td>${submission.email}</td>
            <td>${submission.password}</td>
            <td>${submission.dob}</td>
            <td>${submission.termsAccepted}</td>
        `;
        submissionsTableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', displaySubmissions);
