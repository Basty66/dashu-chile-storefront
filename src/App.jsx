import { useEffect, useMemo, useState } from 'react'

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.5 5h2.1l1.4 8.1a1 1 0 0 0 1 .9h8.6a1 1 0 0 0 1-.8L19 7.5H7.1" />
      <circle cx="10" cy="18.2" r="1.4" />
      <circle cx="17" cy="18.2" r="1.4" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.8A8 8 0 0 1 8.2 19l-3.2 1 1-3.1A8 8 0 1 1 20 11.8Z" />
      <path d="M9.2 8.7c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.9 2.1c.1.2.1.4 0 .6l-.4.7c-.1.2-.1.3 0 .5.3.6.8 1.2 1.4 1.7.6.5 1.2.9 1.8 1.1.2.1.4.1.5-.1l.6-.7c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5v.6c0 .3-.1.6-.4.8-.5.4-1.1.6-1.8.5-1.2-.2-2.3-.8-3.4-1.6-1.2-.9-2.2-2-2.8-3.3-.6-1.1-.8-2.2-.6-3.2.1-.5.3-.9.6-1.3Z" />
    </svg>
  )
}

function StarIcon({ filled = true }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.6 14.6 8.9 20.4 9.8 16.2 13.9 17.2 19.7 12 17 6.8 19.7 7.8 13.9 3.6 9.8 9.4 8.9Z"
        fill={filled ? 'currentColor' : 'none'}
      />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'star star--filled' : 'star'}>
          <StarIcon filled={index < rating} />
        </span>
      ))}
    </div>
  )
}

const heroStats = [
  { value: '+300', label: 'clientes satisfechos en Chile' },
  { value: '2 meses', label: 'cabello mas controlado y manejable' },
  { value: '10% OFF', label: 'primera compra por lanzamiento' },
]

const problemPoints = [
  'Cabello rebelde que no se deja peinar.',
  'Frizz persistente incluso despues del secado.',
  'Clientes que salen del salon sin un cambio real.',
]

const solutionPoints = [
  'Alisa y moldea sin dejar el cabello rigido.',
  'Reduce frizz y volumen en minutos.',
  'Deja una textura suave, natural y sedosa.',
  'Ideal para hombres con cabello dificil o grueso.',
]

const plans = [
  {
    id: 'unitario',
    title: 'Compra unitaria',
    price: '$30.990',
    amount: 30990,
    quantity: 1,
    note: 'Ideal para probar el producto o uso personal.',
    tag: 'Entrada',
  },
  {
    id: 'pack-3',
    title: 'Pack 3',
    price: '$85.500',
    amount: 85500,
    quantity: 3,
    subtitle: '$28.500 c/u',
    note: 'La opcion mas vendida para barberos y estilistas.',
    tag: 'Mas vendido',
    featured: true,
  },
  {
    id: 'pack-12',
    title: 'Pack 12',
    price: '$318.000',
    amount: 318000,
    quantity: 12,
    subtitle: '$26.500 c/u',
    note: 'La mejor inversion para stock, academia o distribucion.',
    tag: 'Mejor inversion',
  },
]

const proofCards = [
  {
    title: 'Resultado visible desde la primera aplicacion',
    copy:
      'El MVP queda listo para mostrar prueba de producto, confianza y ticket promedio desde una sola landing.',
  },
  {
    title: 'Narrativa pensada para Instagram y WhatsApp',
    copy:
      'La pagina empuja al contacto directo, reduce friccion y ayuda a cerrar ventas rapido.',
  },
  {
    title: 'Presentacion mas seria para estilistas profesionales',
    copy:
      'El lenguaje visual ahora se acerca a una marca premium de grooming, no a una tienda generica.',
  },
]

const trainingIncludes = [
  'Producto + capacitacion comercial',
  'Acceso exclusivo para aprender aplicacion correcta',
  'Ideal para aumentar ingresos desde barberias y salones',
]

const shippingMethods = ['Chilexpress', 'Starken']
const paymentMethods = ['Mercado Pago', 'Webpay', 'Transferencia']
const trustBadges = ['Checkout WooCommerce ready', 'Stock por pack', 'Carrito MVP funcional']
const fitFor = ['Barberias premium', 'Salones masculinos', 'Venta directa por Instagram']

const testimonials = [
  {
    name: 'Carlos M. | Barbero',
    quote:
      'Este producto me permite controlar cabellos que antes no quedaban disciplinados. El resultado se nota rapido y el cliente lo percibe.',
  },
  {
    name: 'Javier R. | Estilista',
    quote:
      'La promesa es clara y profesional. Para mostrar hoy a un cliente, esta landing ya transmite mas confianza y valor.',
  },
  {
    name: 'Equipo Dashu Chile',
    quote:
      'La mezcla de producto, prueba social y capacitacion ayuda a vender mucho mejor que una tienda tradicional.',
  },
]

const reviews = [
  {
    name: 'Nicolas | Providencia',
    role: 'Cliente final',
    rating: 5,
    title: 'Se nota desde la primera aplicacion',
    quote:
      'Mi cabello era muy dificil de bajar y con Dashu quedo mas controlado, sin verse aplastado ni tieso.',
  },
  {
    name: 'Matias | Barber studio',
    role: 'Barbero profesional',
    rating: 5,
    title: 'Me ayuda a vender un servicio mas premium',
    quote:
      'El producto se explica facil, el resultado se ve rapido y el cliente entiende mejor el valor del servicio.',
  },
  {
    name: 'Sebastian | Santiago',
    role: 'Cliente recurrente',
    rating: 4,
    title: 'Mucho menos frizz',
    quote:
      'Lo que mas me gusto es que baja el volumen y deja el pelo manejable por varias semanas.',
  },
]

const whatsappHref =
  'https://wa.me/56978645243?text=Hola%2C%20quiero%20informacion%20sobre%20Dashu%20Chile'

const countdownUnits = [
  { key: 'days', label: 'dias' },
  { key: 'hours', label: 'horas' },
  { key: 'minutes', label: 'min' },
  { key: 'seconds', label: 'seg' },
]

function getTimeLeft() {
  const launchDeadline = new Date('2026-04-10T23:59:59-04:00')
  const difference = launchDeadline.getTime() - Date.now()

  if (difference <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const [activeReview, setActiveReview] = useState(0)
  const [cartItems, setCartItems] = useState([
    {
      ...plans[1],
      cartQuantity: 1,
    },
  ])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const reviewInterval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length)
    }, 4200)

    return () => window.clearInterval(reviewInterval)
  }, [])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.cartQuantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.amount * item.cartQuantity, 0),
    [cartItems],
  )

  const shippingLabel = subtotal >= 70000 ? 'Gratis' : '$4.990'
  const total = subtotal + (subtotal >= 70000 ? 0 : 4990)

  const addToCart = (plan) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === plan.id)

      if (existingItem) {
        return current.map((item) =>
          item.id === plan.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item,
        )
      }

      return [...current, { ...plan, cartQuantity: 1 }]
    })
  }

  const changeQuantity = (planId, nextQuantity) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === planId
            ? { ...item, cartQuantity: Math.max(1, nextQuantity) }
            : item,
        )
        .filter((item) => item.cartQuantity > 0),
    )
  }

  const checkoutHref = `${whatsappHref}%0AQuiero%20cotizar%20estos%20packs:%0A${encodeURIComponent(
    cartItems.map((item) => `${item.title} x${item.cartQuantity}`).join('\n'),
  )}`

  const currentReview = reviews[activeReview]

  return (
    <div className="page-shell">
      <header className="site-header">
        <a href="#inicio" className="brand">
          <img src="/images/dashu-logo-men.png" alt="Dashu For Men" />
          <div>
            <strong>Dashu Chile</strong>
            <span>Premium grooming performance</span>
          </div>
        </a>

        <nav className="site-nav">
          <a href="#producto">Producto</a>
          <a href="#precios">Precios</a>
          <a href="#resultados">Resultados</a>
          <a href="#tomas">Tomas Morales</a>
          <a href="#curso">Curso</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="nav-tools">
          <a className="cart-pill" href="#carrito">
            <CartIcon />
            <span className="cart-pill__label">Carrito</span>
            <span>{cartCount}</span>
          </a>
          <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            <span className="nav-cta__label">WhatsApp</span>
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Dashu Down Permanent Protein</span>
            <h1>Control total para cabellos rebeldes</h1>
            <p className="hero-lead">
              Alisa, moldea y elimina el frizz en minutos con una propuesta
              pensada para hombres, barberos y estilistas que necesitan una
              solucion real para cabello dificil.
            </p>

            <div className="hero-actions">
              <a className="button button--ghost" href="#producto">
                Ver producto
              </a>
              <a className="button button--primary" href="#precios">
                Comprar ahora
              </a>
              <a className="button button--secondary" href="#resultados">
                Ver resultados
              </a>
            </div>

            <div className="hero-stats">
              {heroStats.map((item) => (
                <article key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>

            <div className="hero-meta">
              {fitFor.map((item) => (
                <span key={item} className="meta-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-media">
            <div className="offer-banner">
              <div className="offer-copy">
                <span>Oferta limitada</span>
                <strong>Precio lanzamiento activo ahora</strong>
              </div>
              <div className="countdown">
                {countdownUnits.map((unit) => (
                  <div key={unit.key} className="countdown-card">
                    <strong key={timeLeft[unit.key]} className="countdown-value">
                      {timeLeft[unit.key]}
                    </strong>
                    <span>{unit.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-stage">
              <img
                className="product-stage__main"
                src="/images/dashu-product-dark.png"
                alt="Dashu Protein Down Cream"
              />
              <div className="floating-card floating-card--promo">
                <span>Envio gratis</span>
                <strong>sobre $70.000</strong>
              </div>
              <div className="floating-card floating-card--review">
                <span>Producto destacado</span>
                <strong>Resultado natural, no rigido</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="commerce-grid">
          <article className="buy-panel">
            <div className="section-heading section-heading--compact">
              <div>
                <span className="eyebrow">Compra rapida</span>
                <h2>Prepara la compra como quedara en WooCommerce</h2>
              </div>
              <p>
                Este MVP ya te deja mostrar packs, carrito, subtotal, envio y
                un CTA de cierre. Despues podemos conectar la misma logica a
                productos y checkout reales en WordPress.
              </p>
            </div>

            <div className="pricing-grid pricing-grid--dense">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  className={plan.featured ? 'price-card price-card--featured' : 'price-card'}
                >
                  <span className="price-tag">{plan.tag}</span>
                  <h3>{plan.title}</h3>
                  <strong>{plan.price}</strong>
                  {plan.subtitle ? <em>{plan.subtitle}</em> : null}
                  <p>{plan.note}</p>
                  <div className="price-meta">
                    <span>{plan.quantity} unidades</span>
                    <span>SKU MVP</span>
                  </div>
                  <button
                    type="button"
                    className={plan.featured ? 'button button--dark' : 'button button--primary'}
                    onClick={() => addToCart(plan)}
                  >
                    Agregar al carrito
                  </button>
                </article>
              ))}
            </div>

            <div className="trust-row">
              {trustBadges.map((item) => (
                <span key={item} className="info-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>

          <aside id="carrito" className="cart-panel reveal-card">
            <span className="eyebrow">Carrito MVP</span>
            <h2>Resumen de compra</h2>
            <p>
              Bloque pensado para convertirse luego en mini cart o cart page de
              WooCommerce sin rehacer la experiencia visual.
            </p>

            <div className="cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item__copy">
                    <strong>{item.title}</strong>
                    <span>{item.price}</span>
                  </div>
                  <div className="qty-control">
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, item.cartQuantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.cartQuantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, item.cartQuantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>${subtotal.toLocaleString('es-CL')}</strong>
              </div>
              <div>
                <span>Envio</span>
                <strong>{shippingLabel}</strong>
              </div>
              <div className="cart-summary__total">
                <span>Total estimado</span>
                <strong>${total.toLocaleString('es-CL')}</strong>
              </div>
            </div>

            <a className="button button--primary" href={checkoutHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Finalizar por WhatsApp
            </a>
            <button type="button" className="button button--secondary">
              Reservado para checkout WooCommerce
            </button>
          </aside>
        </section>

        <section className="problem-strip">
          <p>Tu cabello no se deja peinar?</p>
          <p>Tus clientes salen igual que entraron?</p>
          <p>Dashu Chile trae una solucion profesional para cabellos dificiles.</p>
        </section>

        <section className="section-grid section-grid--solution">
          <article className="panel panel--dark">
            <span className="eyebrow eyebrow--dark">La solucion</span>
            <h2>El producto que si funciona</h2>
            <p>
              Dashu Down Permanent Protein fue pensado para controlar, moldear y
              dejar el cabello mas manejable hasta por 2 meses, con un acabado
              natural y premium.
            </p>

            <div className="check-grid">
              {solutionPoints.map((point) => (
                <div key={point} className="check-card">
                  <span className="check-icon">+</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel--light panel--problem">
            <span className="eyebrow">Problema real</span>
            <h2>Cuando el cabello no coopera, el servicio pierde valor</h2>
            <div className="problem-list">
              {problemPoints.map((point) => (
                <div key={point} className="problem-item">
                  <span></span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <img
              className="panel-product"
              src="/images/dashu-product-light.png"
              alt="Packaging Dashu Chile"
            />
          </article>
        </section>

        <section id="producto" className="section-grid section-grid--product">
          <article className="panel panel--editorial">
            <span className="eyebrow">Producto estrella</span>
            <h2>Dashu Down Permanent Protein</h2>
            <p>
              Resultado visible desde la primera aplicacion. Efecto natural,
              cabello suave y una promesa clara para hombres con cabello dificil.
            </p>

            <div className="benefit-row">
              <div>
                <strong>Primera aplicacion</strong>
                <span>mejora visible y control inmediato</span>
              </div>
              <div>
                <strong>Textura premium</strong>
                <span>acabado sedoso y manejable</span>
              </div>
              <div>
                <strong>Uso profesional</strong>
                <span>ideal para barberias y salones</span>
              </div>
            </div>
          </article>

          <article className="panel panel--photo">
            <img
              src="/images/dashu-product-light.png"
              alt="Producto Dashu Chile en exhibicion"
            />
          </article>
        </section>

        <section id="precios" className="pricing-section">
          <div className="section-heading">
            <span className="eyebrow">Precios comerciales</span>
            <h2>Escala tu compra segun el volumen que necesitas</h2>
            <p>
              MVP listo para mostrar hoy con estructura clara de conversion y
              descuentos faciles de comunicar desde redes o WhatsApp.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article
                key={`${plan.id}-secondary`}
                className={plan.featured ? 'price-card price-card--featured' : 'price-card'}
              >
                <span className="price-tag">{plan.tag}</span>
                <h3>{plan.title}</h3>
                <strong>{plan.price}</strong>
                {plan.subtitle ? <em>{plan.subtitle}</em> : null}
                <p>{plan.note}</p>
                <button
                  type="button"
                  className={plan.featured ? 'button button--dark' : 'button button--primary'}
                  onClick={() => addToCart(plan)}
                >
                  Agregar este pack
                </button>
              </article>
            ))}
          </div>

          <div className="offer-row">
            <div className="offer-box">
              <span>10% OFF primera compra</span>
            </div>
            <div className="offer-box">
              <span>Envio gratis sobre $70.000</span>
            </div>
            <div className="offer-box">
              <span>Oferta limitada para lanzamiento</span>
            </div>
          </div>
        </section>

        <section id="resultados" className="results-section">
          <div className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Prueba social</span>
              <h2>Resultados reales en Chile</h2>
            </div>
            <p>
              Esta seccion ya deja listo el espacio para antes y despues, videos
              reales y testimonios de barberos. Para el MVP de hoy, la pagina ya
              transmite confianza y direccion comercial.
            </p>
          </div>

          <div className="results-grid">
            <article className="proof-stage">
              <img
                src="/images/dashu-product-dark.png"
                alt="Presentacion premium del producto Dashu"
              />
              <div className="proof-overlay">
                <strong>+300 clientes satisfechos</strong>
                <span>Espacio listo para sumar antes/despues y videos reales</span>
              </div>
            </article>

            <div className="proof-cards">
              {proofCards.map((card) => (
                <article key={card.title} className="proof-card">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="testimonial-card">
                <p>{testimonial.quote}</p>
                <footer>{testimonial.name}</footer>
              </blockquote>
            ))}
          </div>

          <div className="review-strip">
            <article className="review-summary">
              <span className="eyebrow">Resenas</span>
              <h3>4.9/5 valoracion promedio</h3>
              <p>
                Comentarios listos para mostrar confianza, cerrar objeciones y
                reforzar que el producto funciona en casos reales.
              </p>
              <div className="rating-row">
                <strong>326</strong>
                <span>opiniones verificadas</span>
              </div>
            </article>

            <div className="review-carousel">
              <div className="review-carousel__stage">
                <article key={currentReview.name} className="review-item review-item--active">
                  <StarRating rating={currentReview.rating} />
                  <h3>{currentReview.title}</h3>
                  <p>{currentReview.quote}</p>
                  <footer>
                    <strong>{currentReview.name}</strong>
                    <span>{currentReview.role}</span>
                  </footer>
                </article>
              </div>

              <div className="review-carousel__controls">
                <div className="review-dots">
                  {reviews.map((review, index) => (
                    <button
                      key={review.name}
                      type="button"
                      aria-label={`Ver resena ${index + 1}`}
                      className={
                        index === activeReview
                          ? 'review-dot review-dot--active'
                          : 'review-dot'
                      }
                      onClick={() => setActiveReview(index)}
                    />
                  ))}
                </div>

                <div className="review-mini-list">
                  {reviews.map((review, index) => (
                    <button
                      key={`${review.name}-mini`}
                      type="button"
                      className={
                        index === activeReview
                          ? 'review-mini-card review-mini-card--active'
                          : 'review-mini-card'
                      }
                      onClick={() => setActiveReview(index)}
                    >
                      <strong>{review.name}</strong>
                      <span>{review.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tomas" className="founder-section">
          <article className="founder-card founder-card--profile">
            <div className="founder-media">
              <img
                src="/images/tomas-morales-ceo.png"
                alt="Tomas Morales, CEO y fundador"
              />
              <div className="founder-overlay">
                <span>CEO Y FUNDADOR</span>
              </div>
            </div>

            <div className="founder-caption">
              <h3>Tomas Morales</h3>
              <p>Director formativo y lider comercial de Dashu Chile</p>
            </div>
          </article>

          <article className="founder-card founder-card--story">
            <span className="eyebrow">Autoridad de marca</span>
            <h2>La cara del curso y la persona detras de la propuesta comercial</h2>
            <p>
              Tomas Morales lidera la parte educativa y comercial de Dashu
              Chile. Este bloque ordena mejor la pagina porque conecta el
              producto con una figura real de confianza, ideal para vender
              formacion, soporte y acompanamiento profesional.
            </p>

            <div className="founder-points">
              <div>
                <strong>Capacitacion guiada</strong>
                <span>Aprende aplicacion, discurso de venta y diferenciacion.</span>
              </div>
              <div>
                <strong>Respaldo profesional</strong>
                <span>Un rostro visible transmite mas confianza que una tienda fria.</span>
              </div>
              <div>
                <strong>Posicionamiento premium</strong>
                <span>Refuerza que Dashu Chile no solo vende producto, tambien metodo.</span>
              </div>
            </div>

            <a className="button button--primary" href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Hablar con Tomas Morales
            </a>
          </article>
        </section>

        <section id="curso" className="course-section">
          <article className="course-copy">
            <span className="eyebrow eyebrow--dark">Capacitacion</span>
            <h2>Aprende a dominar el cabello dificil y aumenta tus ingresos</h2>
            <p>
              Crea una segunda fuente de venta con capacitacion, producto y
              acceso exclusivo para profesionales que quieren ofrecer un servicio
              mas rentable y diferenciador.
            </p>

            <div className="course-list">
              {trainingIncludes.map((item) => (
                <div key={item} className="course-item">
                  <span className="course-dot"></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <a className="button button--primary" href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              Hablar por WhatsApp
            </a>
          </article>

          <article className="course-card">
            <img src="/images/dashu-logo-black.png" alt="Dashu" />
            <strong>Programa comercial Dashu Chile</strong>
            <p>
              Venta de producto + formacion + soporte comercial para barberos y
              estilistas.
            </p>
          </article>
        </section>

        <section className="ops-section">
          <article className="ops-card">
            <span className="eyebrow">Envios</span>
            <h3>Despachamos a todo Chile de forma rapida y segura</h3>
            <div className="pill-row">
              {shippingMethods.map((method) => (
                <span key={method} className="info-pill">
                  {method}
                </span>
              ))}
            </div>
          </article>

          <article className="ops-card">
            <span className="eyebrow">Pagos</span>
            <h3>Paga con total seguridad</h3>
            <div className="pill-row">
              {paymentMethods.map((method) => (
                <span key={method} className="info-pill">
                  {method}
                </span>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer id="contacto" className="site-footer">
        <div className="footer-brand">
          <img src="/images/dashu-logo-men.png" alt="Dashu Chile" />
          <p>
            Una landing premium, sobria y enfocada en conversion para mostrar
            hoy como MVP.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <strong>Contacto</strong>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp: +56 9 7864 5243
            </a>
            <a href="https://instagram.com/dashu.cl" target="_blank" rel="noreferrer">
              Instagram: @dashu.cl
            </a>
            <a href="mailto:dashuoficialchile@gmail.com">
              dashuoficialchile@gmail.com
            </a>
          </div>

          <div>
            <strong>Dominio sugerido</strong>
            <span>dashuchile.cl</span>
            <span>dashuoficial.cl</span>
            <span>dashu.cl</span>
          </div>

          <div>
            <strong>Paginas legales</strong>
            <span>Politicas de envio</span>
            <span>Terminos y condiciones</span>
            <span>Politica de privacidad</span>
          </div>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer">
        <WhatsAppIcon />
        WhatsApp directo
      </a>
    </div>
  )
}

export default App

