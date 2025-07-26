export default function createContact() {
  const container = document.createElement('div');
  container.classList.add('page-section', 'contact-page');
  container.innerHTML = `
    <h1>Contact the Cantina</h1>
    <p class="contact-intro">
      Questions? Comments? Send a holo-transmission across the galaxy!
    </p>

    <section class="contact-details">
      <h2>Galactic Headquarters</h2>
      <p><strong>Sector:</strong> Outer Rim, Tatooine, Mos Eisley Cantina</p>
      <p><strong>Docking Bay:</strong> 94</p>
      <p><strong>Emergency Frequency:</strong> 1138-COM-LINK</p>
    </section>

    <section class="contact-hours">
      <h2>Standard Galactic Hours</h2>
      <ul>
        <li>Monday–Friday: 0800 – 1800 SGT</li>
        <li>Saturday: 1000 – 1600 SGT</li>
        <li>Sunday: Closed (for droid maintenance)</li>
      </ul>
    </section>
  `;

  return container;
}
