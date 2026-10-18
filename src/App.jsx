import React, { useMemo, useState } from 'react';

const ORDER_EMAIL = 'hello@glorybreadandbeans.com';

const menuItems = [
  {
    id: 'beans',
    name: 'The Loaded Beans Bowl',
    category: 'Beans',
    description: 'Slow-cooked, rich and ready for your favorite toppings.',
    price: 2500,
    image:
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'A hearty bowl of freshly prepared beans',
    sizes: [
      { name: '½ Litre', price: 2500 },
      { name: '1 Litre', price: 4500 },
      { name: '2 Litres', price: 8500 },
    ],
    addOns: [
      { name: 'Boiled egg', price: 500 },
      { name: 'Fresh fish', price: 1500 },
      { name: 'Beef', price: 1200 },
      { name: 'Turkey', price: 2000 },
      { name: 'Ponmo', price: 700 },
      { name: 'Fried plantain', price: 800 },
    ],
    badge: 'Build your bowl',
  },
  {
    id: 'bread',
    name: 'Glory Bread',
    category: 'Fresh bread',
    description: 'Soft, golden, freshly baked and made for scooping.',
    price: 1200,
    image:
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Freshly baked golden bread',
    sizes: [
      { name: 'Mini loaf', price: 1200 },
      { name: 'Regular loaf', price: 2000 },
      { name: 'Family loaf', price: 3500 },
    ],
    badge: 'Baked with love',
  },
  {
    id: 'zobo',
    name: 'Chilled Zobo',
    category: 'Local drinks',
    description: 'A refreshing hibiscus cooler. Best served extra cold.',
    price: 700,
    image:
      'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'A bright, refreshing red fruit drink',
    sizes: [
      { name: 'Small · 350ml', price: 700 },
      { name: 'Regular · 500ml', price: 1000 },
      { name: 'Big bottle · 1L', price: 1800 },
    ],
    badge: 'Keep it cool',
  },
];

const money = (amount) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'arrow') {
    return (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }
  if (name === 'bag') {
    return (
      <svg {...common}>
        <path d="M5 8h14l1 13H4L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </svg>
    );
  }
  if (name === 'plus') {
    return (
      <svg {...common}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }
  if (name === 'close') {
    return (
      <svg {...common}>
        <path d="m18 6-12 12M6 6l12 12" />
      </svg>
    );
  }
  if (name === 'spark') {
    return (
      <svg {...common}>
        <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
        <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      </svg>
    );
  }
  return null;
}

function Header({ cartCount, onOpenCart }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Glory Bread and Beans home">
        <span className="brand-mark">G<span>.</span></span>
        <span className="brand-name">glory<span>bread & beans</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#menu">Our menu</a>
        <a href="#story">Our promise</a>
        <a href="#contact">Find us</a>
      </nav>
      <button className="cart-button" onClick={onOpenCart} aria-label={`Open cart, ${cartCount} items`}>
        <Icon name="bag" size={19} />
        <span className="cart-label">Your order</span>
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}

function Hero({ onOrder }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> MADE WITH HEART, SERVED WITH GENEROSITY</div>
        <h1>Good food.<br />Good people.<br /><span>Full bellies.</span></h1>
        <p className="hero-description">
          A generous bowl of beans, warm Glory Bread, and a cold glass of zobo. The kind of comfort that brings everyone to the table.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#menu">Explore our menu <Icon name="arrow" size={18} /></a>
          <span className="hero-note"><span className="note-star">✳</span> Cooked fresh, every day</span>
        </div>
        <div className="hero-promise">
          <span className="promise-line" />
          <span>Our watchword</span>
          <strong>“Operation Feed the Nation”</strong>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90"
            alt="A beautiful, generous bowl of comforting food"
          />
          <div className="image-overlay" />
          <div className="hero-photo-tag"><span>✳</span> A whole lot of goodness</div>
        </div>
        <div className="floating-sticker">
          <span className="sticker-top">BIG LOVE</span>
          <span className="sticker-center">BIG<br />PORTIONS</span>
          <span className="sticker-bottom">EVERY TIME</span>
        </div>
        <div className="hero-index">01 <span /> 03</div>
      </div>
    </section>
  );
}

function MenuCard({ item, onAdd }) {
  const [sizeName, setSizeName] = useState(item.sizes[0].name);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const selectedSize = item.sizes.find((size) => size.name === sizeName);
  const selectedAddOnTotal = selectedAddOns.reduce((sum, addon) => sum + addon.price, 0);
  const totalPrice = selectedSize.price + selectedAddOnTotal;

  function toggleAddOn(addon) {
    setSelectedAddOns((current) =>
      current.some((selected) => selected.name === addon.name)
        ? current.filter((selected) => selected.name !== addon.name)
        : [...current, addon],
    );
  }

  return (
    <article className={`menu-card menu-card-${item.id}`}>
      <div className="menu-image-wrap">
        <img src={item.image} alt={item.imageAlt} className="menu-image" loading="lazy" />
        <span className="menu-badge">{item.badge}</span>
        <span className="menu-category">{item.category}</span>
      </div>
      <div className="menu-content">
        <div className="menu-heading">
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <span className="menu-price">{money(totalPrice)}</span>
        </div>
        <label className="size-label" htmlFor={`size-${item.id}`}>Choose your size</label>
        <select
          id={`size-${item.id}`}
          className="size-select"
          value={sizeName}
          onChange={(event) => setSizeName(event.target.value)}
        >
          {item.sizes.map((size) => (
            <option key={size.name} value={size.name}>{size.name} — {money(size.price)}</option>
          ))}
        </select>
        {item.addOns && (
          <div className="addons">
            <span className="addons-title">Make it a feast <span>+ add-ons</span></span>
            <div className="addon-list">
              {item.addOns.map((addon) => {
                const isSelected = selectedAddOns.some((selected) => selected.name === addon.name);
                return (
                  <button
                    className={`addon-chip${isSelected ? ' addon-chip-selected' : ''}`}
                    key={addon.name}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleAddOn(addon)}
                  >
                    {addon.name} <b>+{money(addon.price)}</b>
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <button className="add-button" onClick={() => onAdd(item, selectedSize, selectedAddOns)}>
          <span>Add to order</span><span>{money(totalPrice)}</span><Icon name="plus" size={17} />
        </button>
      </div>
    </article>
  );
}

function MenuSection({ onAdd }) {
  return (
    <section className="menu-section section-wrap" id="menu">
      <div className="section-heading">
        <div>
          <div className="eyebrow section-eyebrow"><span className="eyebrow-dot" /> STRAIGHT FROM OUR KITCHEN</div>
          <h2>Come hungry.<br /><span>Leave happy.</span></h2>
        </div>
        <p>Hearty portions, honest ingredients, and a little extra love in every order. Make your bowl your own.</p>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => <MenuCard item={item} onAdd={onAdd} key={item.id} />)}
      </div>
      <p className="menu-footnote"><Icon name="spark" size={17} /> Beans are sold by the litre. The more you share, the better it gets.</p>
    </section>
  );
}

function PromiseSection() {
  const promises = [
    { number: '01', title: 'Real, filling food', text: 'Proper portions and good ingredients. We believe nobody should leave our table hungry.' },
    { number: '02', title: 'Made fresh daily', text: 'Our beans simmer slow, our bread comes out golden, and every zobo is chilled just right.' },
    { number: '03', title: 'Made for sharing', text: 'From a quick lunch to feeding your whole crew, there is always enough to go around.' },
  ];
  return (
    <section className="promise-section" id="story">
      <div className="promise-inner section-wrap">
        <div className="promise-topline">
          <div className="eyebrow"><span className="eyebrow-dot" /> A PROMISE IN EVERY PLATE</div>
          <span className="promise-star">✳</span>
        </div>
        <div className="promise-main">
          <h2>Operation<br /><span>Feed the Nation.</span></h2>
          <div className="promise-right">
            <p>It's more than a watchword. It's the way we cook, the way we serve, and the way we show up for our community.</p>
            <a href="#menu" className="text-link">Find your new favorite <Icon name="arrow" size={17} /></a>
          </div>
        </div>
        <div className="promise-grid">
          {promises.map((promise) => (
            <div className="promise-card" key={promise.number}>
              <span className="promise-number">{promise.number}</span>
              <h3>{promise.title}</h3>
              <p>{promise.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ onOrder }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top section-wrap">
        <div className="footer-callout">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR PEOPLE ARE GETTING HUNGRY</div>
          <h2>Make room<br />for <span>one more.</span></h2>
          <button className="button button-cream" onClick={onOrder}>Order something good <Icon name="arrow" size={18} /></button>
        </div>
        <div className="footer-side">
          <div className="footer-mark">G<span>.</span></div>
          <p>Big-hearted food for the whole community. Always made fresh, always made to share.</p>
          <a className="footer-email" href={`mailto:${ORDER_EMAIL}`}>{ORDER_EMAIL}</a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 Glory Bread & Beans</span>
        <span>Our watchword: <strong>Operation Feed the Nation</strong></span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

function CartDrawer({ items, onClose, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="drawer-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-header">
          <div><span className="eyebrow"><span className="eyebrow-dot" /> GOOD CHOICES</span><h2 id="cart-title">Your order</h2></div>
          <button className="close-button" onClick={onClose} aria-label="Close cart"><Icon name="close" size={21} /></button>
        </div>
        {items.length === 0 ? (
          <div className="empty-cart"><span className="empty-bag"><Icon name="bag" size={30} /></span><h3>Your bag is feeling lonely.</h3><p>Let’s fix that with something delicious.</p><button className="button button-dark" onClick={onClose}>Explore the menu <Icon name="arrow" size={17} /></button></div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.cartId}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-copy">
                    <strong>{item.name}</strong>
                    <span>{item.size}</span>
                    {item.addOns.length > 0 && <span>+ {item.addOns.join(', ')}</span>}
                    <b>{money(item.price)}</b>
                  </div>
                  <button className="remove-item" onClick={() => onRemove(item.cartId)} aria-label={`Remove ${item.name}`}><Icon name="close" size={17} /></button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-total"><span>Subtotal</span><strong>{money(total)}</strong></div>
              <p>Delivery is arranged when you place your order.</p>
              <a className="button button-dark checkout-button" href={`mailto:${ORDER_EMAIL}?subject=${encodeURIComponent('My Glory Bread & Beans order')}&body=${encodeURIComponent(`Hello! I would like to order:\n${items.map((item) => `- ${item.name} (${item.size})${item.addOns.length > 0 ? ` + ${item.addOns.join(', ')}` : ''} — ${money(item.price)}`).join('\n')}\n\nSubtotal: ${money(total)}`)}`}>
                Place your order <Icon name="arrow" size={18} />
              </a>
            </div>
          </>
        )}
        <span className="drawer-motto">Operation Feed the Nation ✳</span>
      </aside>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartCount = useMemo(() => cart.length, [cart]);

  function addToCart(item, size, addOns) {
    setCart((current) => [
      ...current,
      {
        cartId: `${item.id}-${Date.now()}-${Math.random()}`,
        name: item.name,
        size: size.name,
        price: size.price + addOns.reduce((sum, addon) => sum + addon.price, 0),
        image: item.image,
        addOns: addOns.map((addon) => addon.name),
      },
    ]);
    setCartOpen(true);
  }

  function removeFromCart(cartId) {
    setCart((current) => current.filter((item) => item.cartId !== cartId));
  }

  return (
    <>
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <div className="ticker" aria-label="Our watchword: Operation Feed the Nation">
          <div className="ticker-track" aria-hidden="true">
            {[0, 1, 2, 3].map((item) => (
              <span className="ticker-group" key={item}>OPERATION FEED THE NATION <span>✳</span> BIG LOVE, BIG PORTIONS <span>✳</span> MADE FRESH FOR YOU <span>✳</span></span>
            ))}
          </div>
        </div>
        <MenuSection onAdd={addToCart} />
        <PromiseSection />
      </main>
      <Footer onOrder={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} />
      {isCartOpen && <CartDrawer items={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} />}
    </>
  );
}
