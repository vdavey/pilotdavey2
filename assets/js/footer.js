document.addEventListener("DOMContentLoaded", function () {
    const footerContent = `
        <div class="inner">
            <ul class="icons">
                <li><a href="https://www.instagram.com/pilotdavey/" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/vishveshdavey/" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                <li><a href="Referrals.html" class="icon solid fa-handshake"><span class="label">Affiliate Links</span></a></li>
            </ul>
            <ul class="copyright">
                <li>&copy; Pilot Davey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    `;

    // Inject the footer content into the footer container
    document.getElementById("footer").innerHTML = footerContent;
});
