export default function createMenu() {
  const container = document.createElement('div');
  container.classList.add('page-section');
  container.innerHTML = `
    <h1>Galactic Menu</h1>
    <p class="menu-intro"><strong>Enjoy the finest cuisine in the galaxy.</strong></p>

    <section class="menu-section">
      <h2>Starters</h2>
      <ul>
        <li><strong>Colo Claw Fish Bites</strong><span> – Luxurious and rare, a delicacy from the Core Worlds.</span></li>
        <li><strong>Meiloorun Fruit Salad</strong><span> – Juicy Lothalian fruits with a spicy citrus dressing.</span></li>
        <li><strong>Floating Naboo Pear</strong><span> – Light, elegant, and served with a touch of theatrics.</span></li>
        <li><strong>Wookiee Waffles</strong><span> – Thick, chewy, and served with Kashyyyk maple syrup.</span></li>
        <li><strong>Droid Oil Chips</strong><span> – Crunchy metal-tone crisps with sizzling spice oil.</span></li>
      </ul>
    </section>

    <section class="menu-section">
      <h2>Main Courses</h2>
      <ul>
        <li><strong>Roasted Porg</strong><span> – Succulent and spit-roasted, a favorite from Ahch-To.</span></li>
        <li><strong>Deep-Fried Nuna Legs</strong><span> – Crispy drumsticks from Naboo’s favorite fowl.</span></li>
        <li><strong>Portion Bread with Synth-Stew</strong><span> – Fluffy and fast-expanding, served with savory stew.</span></li>
        <li><strong>Mandalorian Tacos</strong><span> – Spicy meat wrapped in beskar-soft tortillas, served with flame-grilled heat.</span></li>
        <li><strong>Tatooine Twin-Sun Burgers</strong><span> – Double patty, double heat, seasoned under binary sunset spice.</span></li>
        <li><strong>Hoth Ice-Fried Chicken</strong><span> – Flash-fried chicken with a chilling crunch and snow-pepper glaze.</span></li>
      </ul>
    </section>

    <section class="menu-section">
      <h2>Drinks</h2>
      <ul>
        <li><strong>Thala-Siren Milk</strong><span> – Fresh, green, and loaded with nutrients (Jedi-approved).</span></li>
        <li><strong>Canto Bight Fizz</strong><span> – Bubbly drink served in a crystalline flute, with notes of starfruit and spice.</span></li>
        <li><strong>Carbon Freeze Float</strong><span> – Chilled fizzy drink with carbon-ice, topped with sweet mist.</span></li>
        <li><strong>Dagobah Swamp Shake</strong><span> – Thick moss-colored smoothie with exotic roots and a tangy twist.</span></li>
      </ul>
    </section>

    <section class="menu-section">
      <h2>Desserts</h2>
      <ul>
        <li><strong>Death Star Popcorn</strong><span> – Black truffle popcorn with a galactic crunch and imperial drizzle.</span></li>
        <li><strong>Endor Forest Cake</strong><span> – Layered chocolate and moss-mint sponge, topped with crunchy bark chips.</span></li>
        <li><strong>Beskar Brownies</strong><span> – Dense and shiny, forged with dark chocolate and salted caramel veins.</span></li>
      </ul>
    </section>

    <section class="menu-section">
      <h2>Unusual Specials</h2>
      <ul>
        <li><strong>Jabba’s Paddy Frogs</strong><span> – Live and wriggling... not for the faint of stomach.</span></li>
        <li><strong>Sarlacc Sliders</strong><span> – Mini burgers that bite back—slow-cooked and slightly terrifying.</span></li>
        <li><strong>Mustafarian Lava Soup</strong><span> – Spicy magma broth with red-hot rock pepper chunks.</span></li>
      </ul>
    </section>
  `;

  return container;
}
