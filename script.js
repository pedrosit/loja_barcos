const header = document.getElementsByTagName('header')[0]

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        header.style.opacity = 1
    } else {
        header.style.opacity = 0.7
    }
});