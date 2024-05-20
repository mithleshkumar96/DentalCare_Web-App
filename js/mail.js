<script>
    document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");

    emailForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const to = document.getElementById("to").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const mailtoLink = mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)};

        // Open the user's default email client with the composed email.
        window.location.href = mailtoLink;
    });
});

    </script>
