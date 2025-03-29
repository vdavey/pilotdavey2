document.addEventListener("DOMContentLoaded", function () {
    const contactSection = `
    <section id="contact">
        <div class="inner">
            <section>
                <form method="post" action="https://formspree.io/f/mjkyervg">
                    <div class="fields">
                        <div class="field half">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div class="field half">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div class="field">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send Message" class="primary" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section class="split">
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#" aria-label="Send Email to Pilot Davey">pilotvd@icloud.com</a>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(916) 693-5508</span>
                    </div>
                </section>
                <section>
                    <div class="contact-method">
                        <span class="icon solid alt fa-map-marker-alt"></span>
                        <h3>Location</h3>
                        <span>Daytona Beach, FL<br />United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
    `;

    document.getElementById("contact-container").innerHTML = contactSection;

    // Handle form submission
    const form = document.querySelector("#contact form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            })
            .then(response =>
                response.ok
                    ? (form.innerHTML = "<p>Thank you! Your message has been received.</p>")
                    : Promise.reject()
            )
            .catch(() => alert("Something went wrong. Please try again."));
        });
    }
});
