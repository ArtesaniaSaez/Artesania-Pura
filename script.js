document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Inicializar Swiper
    const productSwipers = document.querySelectorAll('.product-swiper');
    productSwipers.forEach(swiperContainer => {
        new Swiper(swiperContainer, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 3000,
            },
        });
    });

    // Navegación móvil
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Alternar Nav
            nav.classList.toggle('nav-active');

            // Animar Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Animación Burger
            burger.classList.toggle('toggle');
        });
    };

    navSlide();

    // Desplazamiento suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajustar para el encabezado fijo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Envío de formulario
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ATeléfono: ${phone}%0AMensaje: ${message}`;
            window.open(`https://wa.me/51962117252?text=${whatsappMessage}`, '_blank');
            
            contactForm.reset();
            alert('Gracias por su mensaje. Nos pondremos en contacto con usted pronto.');
        });
    }

    // Botón de solicitud de cotización
    const quoteButton = document.querySelector('.cta-button');
    if (quoteButton) {
        quoteButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://wa.me/51962117252?text=Hola, me gustaría solicitar una cotización para tejas artesanales', '_blank');
        });
    }

    // Efecto parallax para la sección hero
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Efecto de desplazamiento para el encabezado
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Funcionalidad del modal
    const modal = document.getElementById('product-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImages = document.getElementById('modal-images');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.getElementsByClassName('close')[0];

    const productDetails = {
        'teja-andina': {
            title: 'Teja Andina Artesanal',
            images: [
                'https://tejasjara.pe/wp-content/uploads/2021/11/TEJA-ANDINA-DE-ARCILLA-1.jpg',
                'https://tejasjara.pe/wp-content/uploads/2021/11/TEJA-ANDINA-DE-ARCILLA-1.jpg',
                'https://tejasjara.pe/wp-content/uploads/2021/11/TEJA-ANDINA-DE-ARCILLA-1.jpg'
            ],
            description: 'Nuestra Teja Andina Artesanal es el resultado de generaciones de experiencia en el arte de la alfarería. Cada pieza es c uidadosamente moldeada a mano, utilizando arcilla de la más alta calidad de los Andes peruanos. Con medidas de 45cm x 20cm, estas tejas ofrecen una excelente resistencia a la intemperie y una durabilidad excepcional. Su diseño clásico y versátil se adapta perfectamente tanto a construcciones tradicionales como a proyectos arquitectónicos modernos, añadiendo un toque de autenticidad y belleza a cualquier techo, Todo pedido se hace a la medida del cliente.',
            measurements: {
                length: '45 cm',
                width: '20 cm',
                thickness: '1.5 cm',
                weight: '2.5 kg',
                coverage: '10 unidades/m²'
            }
        },
        'pastelon': {
            title: 'Pastelón Rústico',
            images: [
                'https://tejasjara.pe/wp-content/uploads/2021/11/pastelonproducto.jpg',
                'https://tejasjara.pe/wp-content/uploads/2021/11/pastelonproducto.jpg',
                'https://tejasjara.pe/wp-content/uploads/2021/11/pastelonproducto.jpg'
            ],
            description: 'Nuestro Pastelón Rústico es una obra maestra de la artesanía tradicional peruana. Cada pieza de 40cm x 40cm es meticulosamente elaborada a mano, lo que le confiere un carácter único y una textura inigualable. Estos pastelones no solo proporcionan un excelente aislamiento térmico y acústico, sino que también añaden un toque de elegancia rústica a cualquier espacio. Ideal para patios, terrazas y áreas exteriores, nuestro Pastelón Rústico combina la belleza atemporal de la artesanía con la funcionalidad moderna, todo pedido se hace a la medida del cliente.',
            measurements: {
                length: '40 cm',
                width: '40 cm',
                thickness: '2 cm',
                weight: '4 kg',
                coverage: '6.25 unidades/m²'
            }
        },
        'teja-plana-pastelero': {
            title: 'Teja Española Artesanal',
            images: [
                'https://plastimadera.com/wp-content/uploads/2023/02/TEJA-FLAT-RENDER.webp',
                'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/440416017_2530145160525890_2691714484747497712_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=454cf4&_nc_ohc=Xi-IeL9iWTkQ7kNvgE8oKYn&_nc_ht=scontent-lim1-1.xx&_nc_gid=AYIHCBsVtBLirbRC45FV-nf&oh=00_AYBJ28040q2buLXjhKAwLIujKtB-BzaBLGs8BmmIvYv_CA&oe=670DF2C4',
                'https://plastimadera.com/wp-content/uploads/2023/02/TEJA-FLAT-RENDER.webp'
            ],
            description: 'Teja Plana y Pastelero para techos de arcilla pura para decorar tu hogar, todo tipo de pedido se hace a medida del cliente.',
            measurements: {
                length: '35 cm',
                width: '22 cm',
                thickness: '1.8 cm',
                weight: '3 kg',
                coverage: '11 unidades/m²'
            }
            
        }
    };

    document.querySelectorAll('.product-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const product = e.target.dataset.product;
            const details = productDetails[product];
            
            modalTitle.textContent = details.title;
            modalImages.innerHTML = '';
            details.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = details.title;
                modalImages.appendChild(img);
            });
            
            const measurementsHtml = `
                <h3>Medidas:</h3>
                <ul>
                    <li>Largo: ${details.measurements.length}</li>
                    <li>Ancho: ${details.measurements.width}</li>
                    <li>Espesor: ${details.measurements.thickness}</li>
                    <li>Peso: ${details.measurements.weight}</li>
                    <li>Rendimiento: ${details.measurements.coverage}</li>
                </ul>
            `;
            
            modalDescription.innerHTML = `${details.description}<br><br>${measurementsHtml}`;
            
            modal.style.display = 'block';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        });
    });

    closeBtn.onclick = () => {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    };

    // Efecto hover para imágenes de productos
    const productImages = document.querySelectorAll('.product-card img');
    productImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Animación de aparición para elementos al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});