export default function createHome() {
  const container = document.createElement('div');
  container.classList.add('page-section');
  container.innerHTML = `
    <section class="hero">
      <h1>Imperial Cantina</h1>
      <p class="tagline">Galactic flavors, no ID required.</p>
    </section>

    <section class="intro">
      <p>
        Welcome to the <strong>Imperial Cantina</strong> — the Outer Rim’s finest stop 
        for smugglers, stormtroopers, and star pilots alike. Recharge from hyperspace 
        with handcrafted meals, exotic drinks, and no questions asked.
      </p>
      <p>
        Whether you're refueling or hiding from the Empire, our booths are open.
        Just don’t shoot first.
      </p>
    </section>
  `;

  return container;
}
