import { useState } from 'react';

const products = [
  {
    name: 'Smart Lock 2303TY',
    price: '6 490 ₽',
    badge: 'Доступный',
    description:
      'Компактный умный замок для квартиры, офиса или внутренней двери. Удобный вход без постоянной возни с ключами.',
    features: ['Телефон', 'Палец', 'Код', 'Карта', 'Ключ'],
    faceId: false,
    youtube: '#',
  },
  {
    name: 'Smart Lock Z21',
    price: '7 490 ₽',
    badge: 'Практичный',
    description:
      'Надёжный умный замок для повседневного использования. Хороший вариант без переплаты для квартиры или офиса.',
    features: ['Палец', 'Код', 'Карта', 'Ключ', '9 языков'],
    faceId: false,
    youtube: '#',
  },
  {
    name: 'Smart Lock N1TY',
    price: '8 490 ₽',
    badge: 'С телефоном',
    description:
      'Современный замок с приложением Tuya. Отличный вариант, если нужен доступ со смартфона по разумной цене.',
    features: ['Телефон', 'Палец', 'Код', 'Карта', 'Ключ'],
    faceId: false,
    youtube: '#',
  },
  {
    name: 'Smart Lock 2311A',
    price: '8 290 ₽',
    badge: 'Альтернатива',
    description:
      'Сбалансированная модель для квартиры, офиса или аренды.',
    features: ['Телефон', 'Палец', 'Код', 'Карта', 'Ключ'],
    faceId: false,
    youtube: 'https://youtu.be/hziNtHoAhdc',
    images: [
      '/images/2311A-1.jpg',
      '/images/2311A-2.jpg',
      '/images/2311A-3.jpg',
      '/images/2311A-4.jpg',
      '/images/2311A-5.jpg',
      '/images/2311A-6.jpg',
      '/images/2311A-7.jpg',
      '/images/2311A-8.jpg',
      '/images/2311A-9.jpg',
    ],
  },
  {
    name: 'Smart Lock 2404D',
    price: '9 490 ₽',
    badge: 'Универсальный',
    description:
      'Универсальный умный замок для дверей толщиной 35–50 мм. Подходит для квартиры, офиса и аренды. Открывается по отпечатку, коду, карте, ключу и через приложение.',
    features: ['Телефон', 'Палец', 'Код', 'Карта', 'Ключ', '35–50 мм'],
    faceId: false,
    youtube: '#',
    images: [
      '/images/2404D-1.jpg',
      '/images/2404D-2.jpg',
      '/images/2404D-3.jpg',
      '/images/2404D-4.jpg',
      '/images/2404D-5.jpg',
      '/images/2404D-6.jpg',
      '/images/2404D-7.jpg',
    ],
  },
  {
    name: 'Smart Lock 2404E',
    price: '9 990 ₽',
    badge: 'Обновлённый',
    description:
      'Более свежая версия универсального замка для стандартных дверей. Современный вид и полный базовый функционал.',
    features: ['Телефон', 'Палец', 'Код', 'Карта', '35–50 мм'],
    faceId: false,
    youtube: '#',
  },
  {
    name: 'Smart Lock S110WBL',
    price: '10 990 ₽',
    badge: 'Хит продаж',
    description:
      'Одна из самых удачных моделей по соотношению цены и функций. Подходит для квартиры, офиса и аренды.',
    features: ['Телефон', 'Палец', 'Код', 'Карта', 'Экономичный режим'],
    faceId: false,
    youtube: '#',
  },
  {
    name: 'Smart Lock X1',
    price: '11 990 ₽',
    badge: 'Для улицы',
    description:
      'Уличный умный замок с защитой от воды, мороза и солнца. Отличный вариант для калитки, ворот и частного дома.',
    features: ['IPX6', 'Улица', 'Палец', 'Код', 'Карта'],
    faceId: false,
    youtube: '#',
  },
  {
    name: 'Smart Lock K9',
    price: '12 990 ₽',
    badge: 'Face ID',
    description:
      'Продвинутый замок с Face ID, Tuya и голосовыми подсказками. Яркая премиальная модель для квартиры и офиса.',
    features: ['Face ID', 'Телефон', 'Палец', 'Код', 'Карта'],
    faceId: true,
    youtube: '#',
  },
  {
    name: 'Smart Lock RL14',
    price: '13 990 ₽',
    badge: 'Премиум',
    description:
      'Флагманская модель с Face ID, удалённым открытием и временными паролями. Для тех, кто хочет максимум технологий.',
    features: ['Face ID', 'Телефон', 'Палец', 'Код', 'Удалённый доступ'],
    faceId: true,
    youtube: '#',
  },
  {
    name: 'Smart Lock RL11',
    price: '16 990 ₽',
    badge: 'Топ',
    description:
      'Премиальный замок с Face ID, приложением Tuya и голосовыми функциями. Максимальный уровень удобства и вау-эффекта.',
    features: ['Face ID', 'Телефон', 'Палец', 'Код', 'Голосовые подсказки'],
    faceId: true,
    youtube: '#',
  },
];

const advantages = [
  'Открытие по Face ID, телефону, коду, отпечатку или ключу',
  'Помощь с выбором под конкретную дверь и толщину полотна',
  'Есть решения для квартиры, офиса, аренды, калитки и частного дома',
  'Быстрая консультация и связь через WhatsApp',
];

const faqs = [
  {
    q: 'Можно ли поставить такой замок на улицу?',
    a: 'Не все модели подходят для улицы. Для калитки, ворот или частного дома лучше смотреть специальные уличные варианты, например Smart Lock X1 с защитой IPX6.',
  },
  {
    q: 'Есть ли модели с Face ID?',
    a: 'Да. В линейке есть модели с распознаванием лица: Smart Lock K9, RL11 и RL14.',
  },
  {
    q: 'Подойдёт ли замок на мою дверь?',
    a: 'Нужно смотреть толщину двери, тип полотна и направление открывания. Для части моделей важен диапазон толщины 35–50 мм. Мы подскажем по фото и размерам.',
  },
];

export default function App() {
  const [selectedImages, setSelectedImages] = useState({});
  const [fullscreenViewer, setFullscreenViewer] = useState(null);

  const getCurrentImage = (product) => {
    if (!product.images || product.images.length === 0) return null;
    const selectedIndex = selectedImages[product.name] ?? 0;
    return product.images[selectedIndex];
  };

  const setProductImage = (productName, index) => {
    setSelectedImages((prev) => ({
      ...prev,
      [productName]: index,
    }));
  };

  const openFullscreen = (product) => {
    if (!product.images || product.images.length === 0) return;
    const currentIndex = selectedImages[product.name] ?? 0;
    setFullscreenViewer({
      productName: product.name,
      images: product.images,
      index: currentIndex,
    });
  };

  const changeFullscreenImage = (direction) => {
    setFullscreenViewer((prev) => {
      if (!prev || !prev.images.length) return prev;

      const total = prev.images.length;
      const nextIndex =
        direction === 'next'
          ? (prev.index + 1) % total
          : (prev.index - 1 + total) % total;

      return {
        ...prev,
        index: nextIndex,
      };
    });
  };

  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="tag">Умные замки с Face ID, кодом, отпечатком и доступом через телефон</div>
            <h1>Умные замки без ключей — от доступных моделей до Face ID флагманов</h1>
            <p>
              Подберём замок для квартиры, офиса, аренды, калитки или частного дома. Есть модели с Face ID,
              удалённым открытием и защитой для улицы.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#catalog">Смотреть каталог</a>
              <a
                className="btn btn-secondary"
                href="https://wa.me/79081391892"
                target="_blank"
                rel="noreferrer"
              >
                Написать в WhatsApp
              </a>
            </div>
            <div className="stats">
              <div className="card stat-card">Открытие по Face ID, пальцу, коду и телефону</div>
              <div className="card stat-card">Есть модели для квартиры, офиса, аренды и улицы</div>
            </div>
          </div>

          <div className="hero-card">
            <div className="topline">
              <span className="badge face">Face ID и удалённый доступ</span>
              <span className="small">Премиум модели</span>
            </div>
            <div className="hero-mock">
              <div className="mock-image">Smart Lock RL14 / K9</div>
              <h3 style={{ marginTop: 18 }}>Face ID, удалённое открытие и временные коды</h3>
              <p>Современный внешний вид для квартиры, офиса и апартаментов.</p>
              <div className="chip-row">
                <span className="chip">Face ID</span>
                <span className="chip">Приложение</span>
                <span className="chip">Код</span>
                <span className="chip">Палец</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="catalog">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Каталог</h2>
              <p>Реальные модели, цены и логика подбора под разные задачи.</p>
            </div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.name} className="card product-card">
                <div className="topline">
                  <span className={`badge ${product.faceId ? 'face' : ''}`}>
                    {product.faceId ? '🔥 ' : ''}{product.badge}
                  </span>
                  <span className="price">{product.price}</span>
                </div>

                <div className="product-name-box" style={{ padding: 0, overflow: 'hidden' }}>
                  {product.images && product.images.length > 0 ? (
                    <div style={{ padding: '12px' }}>
                      <div style={{ position: 'relative', marginBottom: '10px' }}>
                        <img
                          src={getCurrentImage(product)}
                          alt={product.name}
                          onClick={() => openFullscreen(product)}
                          style={{
                            width: '100%',
                            height: '240px',
                            objectFit: 'cover',
                            display: 'block',
                            borderRadius: '14px',
                            cursor: 'zoom-in',
                          }}
                        />

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const current = selectedImages[product.name] ?? 0;
                            const total = product.images.length;
                            setProductImage(product.name, (current - 1 + total) % total);
                          }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '10px',
                            transform: 'translateY(-50%)',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.25)',
                            background: 'rgba(0,0,0,0.45)',
                            color: '#fff',
                            fontSize: '24px',
                            cursor: 'pointer',
                            lineHeight: 1,
                          }}
                        >
                          ‹
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const current = selectedImages[product.name] ?? 0;
                            const total = product.images.length;
                            setProductImage(product.name, (current + 1) % total);
                          }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.25)',
                            background: 'rgba(0,0,0,0.45)',
                            color: '#fff',
                            fontSize: '24px',
                            cursor: 'pointer',
                            lineHeight: 1,
                          }}
                        >
                          ›
                        </button>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(4, 1fr)',
                          gap: '8px',
                        }}
                      >
                        {product.images.map((image, index) => {
                          const isActive = (selectedImages[product.name] ?? 0) === index;

                          return (
                            <button
                              key={image}
                              type="button"
                              onClick={() => setProductImage(product.name, index)}
                              style={{
                                border: isActive ? '2px solid #ffffff' : '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '10px',
                                padding: 0,
                                overflow: 'hidden',
                                cursor: 'pointer',
                                background: 'transparent',
                                opacity: isActive ? 1 : 0.75,
                              }}
                            >
                              <img
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                                style={{
                                  width: '100%',
                                  height: '58px',
                                  objectFit: 'cover',
                                  display: 'block',
                                }}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        minHeight: '220px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        textAlign: 'center',
                      }}
                    >
                      {product.name}
                    </div>
                  )}
                </div>

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className="feature-list">
                  {product.features.map((feature) => (
                    <div key={feature} className="feature-pill">{feature}</div>
                  ))}
                </div>

                <div className="card-actions">
                  <a
                    href={product.youtube}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Смотреть видео
                  </a>
                  <a
                    href={`https://wa.me/79081391892?text=${encodeURIComponent(`Здравствуйте! Интересует ${product.name}`)}`}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section strip">
        <div className="container two-col">
          <div>
            <h2>Почему берут у нас</h2>
            <div className="faq-list">
              {advantages.map((item) => (
                <div key={item} className="feature-item">{item}</div>
              ))}
            </div>
          </div>

          <div className="form-card">
            <h3>Быстрая заявка</h3>
            <p>Отправьте фото двери и напишите, что для вас важно: код, палец, Face ID, улица или квартира.</p>
            <div className="form-grid">
              <input placeholder="Ваше имя" />
              <input placeholder="Телефон или WhatsApp" />
              <textarea placeholder="Например: нужна модель для квартиры, дверь 90 мм, нужен палец + код" />
              <a
                className="btn btn-primary"
                href="https://wa.me/79081391892"
                target="_blank"
                rel="noreferrer"
              >
                Отправить заявку в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Частые вопросы</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-row">
          <div>
            <div style={{ fontWeight: 700 }}>R&amp;K Store — умные замки</div>
            <div className="small">Подбор и продажа умных замков под вашу задачу</div>
          </div>
          <div>
            <div><a href="tel:+79081391892">+7 (908) 139-18-92</a></div>
            <div className="small">
              <a href="https://wa.me/79081391892" target="_blank" rel="noreferrer">
                WhatsApp для консультации
              </a>
            </div>
          </div>
        </div>
      </footer>

      {fullscreenViewer && (
        <div
          onClick={() => setFullscreenViewer(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenViewer(null);
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              changeFullscreenImage('prev');
            }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
            }}
          >
            ‹
          </button>

          <img
            src={fullscreenViewer.images[fullscreenViewer.index]}
            alt={`${fullscreenViewer.productName} fullscreen`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '12px',
              display: 'block',
            }}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              changeFullscreenImage('next');
            }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: '28px',
              cursor: 'pointer',
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
