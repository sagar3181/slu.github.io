document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Set initial dark mode state
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener('change', toggleDarkMode);

    // Function to toggle image flip
    function flipImage() {
        const image = document.querySelector('.images');
        image.classList.toggle('flipped');
    }

    // Your existing script for modal
    function openMainModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'flex';
    }

    function closeModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close');

    function openServiceModal(index) {
        modalViews[index].classList.add('active-modal');
    }

    function closeServiceModal() {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        });
    }

    modalBtns.forEach((mb, i) => {
        mb.addEventListener('click', () => {
            openServiceModal(i);
        });
    });

    modalClose.forEach((mc) => {
        mc.addEventListener('click', () => {
            closeServiceModal();
        });
    });

    // Event listener for image flip
    const image = document.querySelector('.images');
    image.addEventListener('click', flipImage);

    // Event listener for opening the main modal
    const mainImage = document.querySelector('.main .images');
    mainImage.addEventListener('click', openMainModal);
});

function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("name_field").value = name;
    document.getElementById("email_field").value = email;
    document.getElementById("message_field").value = message;

    document.getElementById("contactForm").submit();
}
