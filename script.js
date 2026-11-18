// Translation dictionary for bilingual support (AR / EN)
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-work': 'Work',
        'nav-contact': 'Contact',
        'hero-subtitle': 'Graphic Designer',
        'hero-title': 'Designing Experiences,<br> Not Just Visuals.',
        'hero-desc': 'Creative graphic designer crafting visually compelling narratives with precision and passion. I transform concepts into impactful realities.',
        'hero-btn-work': 'View My Work',
        'hero-btn-contact': "Let's Talk",
        'character-speech': 'Welcome to my portfolio! 👋',
        'about-huge-firstname': 'Abdel<br>rahman',
        'about-huge-lastname': 'Ahmed',
        'about-subtitle': 'Who I Am',
        'about-title': 'Driven by Precision & Passion',
        'about-desc-1': "I am a visual storyteller with a relentless drive for creative excellence. With over a year of hands-on experience, I don't just design; I solve problems visually. My approach fuses artistic intuition with technical mastery, ensuring every pixel serves a purpose.",
        'about-desc-2': 'From strong conceptual foundations to the final polished export, I prioritize client goals and aesthetic harmony above all. I work across multiple disciplines, believing that versatility is key to modern design.',
        'about-skills-title': 'Technical Arsenal',
        'skill-ps': '<i class="fa-solid fa-paintbrush"></i> Photoshop',
        'skill-ai': '<i class="fa-solid fa-vector-square"></i> Illustrator',
        'skill-id': '<i class="fa-solid fa-book-open"></i> InDesign',
        'skill-pr': '<i class="fa-solid fa-video"></i> Premiere Pro',
        'skill-ae': '<i class="fa-solid fa-film"></i> After Effects',
        'skill-ch': '<i class="fa-solid fa-mask"></i> Character Animator',
        'services-subtitle': 'What I Do',
        'services-title': 'Design Solutions',
        'service-1-title': 'Social Media Design',
        'service-1-desc': 'Engaging visuals designed to capture attention and drive audience interaction across all platforms.',
        'service-2-title': 'Visual Identity',
        'service-2-desc': "Cohesive visual systems and post designs that define and elevate your brand's unique voice.",
        'service-3-title': 'Photo Manipulation',
        'service-3-desc': 'High-end retouching, color correction, and surreal composition for professional-grade imagery.',
        'service-4-title': 'Motion Graphics',
        'service-4-desc': 'Bringing static ideas to life with dynamic motion, video editing, and visual storytelling.',
        'portfolio-subtitle': 'My Work',
        'portfolio-title': 'Selected Projects',
        'project-1-title': 'Social Media Campaign',
        'project-1-cat': 'Branding / Social',
        'project-1-desc': 'A strategic social media visual suite designed to maximize engagement and brand consistency.',
        'project-2-title': 'Visual Content Design',
        'project-2-cat': 'Print / Digital',
        'project-2-desc': 'Clean, clear, and consistency-focused designs that establish a strong visual identity.',
        'project-3-title': 'Surreal Manipulation',
        'project-3-cat': 'Art Direction / Editing',
        'project-3-desc': 'Complex photo manipulation showcasing enhanced realism, detail, and artistic flair.',
        'project-4-title': 'Experimental Art',
        'project-4-cat': '3D / Typography',
        'project-4-desc': 'Self-initiated exploration of new styles, ideas, and design techniques.',
        'project-5-title': 'Character Animation',
        'project-5-cat': 'Motion / Rigging',
        'project-5-desc': 'Real-time 2D character puppetry and rigging using Adobe Character Animator for dynamic storytelling.',
        'experience-subtitle': 'Career Path',
        'experience-title': 'Experience',
        'exp-1-date': '2023 - Present',
        'exp-1-title': 'Freelance Graphic Designer',
        'exp-1-desc': 'Delivering tailored design solutions for diverse local clients. I balance precision and efficiency to meet strict deadlines while maintaining high client satisfaction.',
        'exp-2-date': '2022 - 2023',
        'exp-2-title': 'Skill Development',
        'exp-2-desc': 'Intensive self-directed learning and practical application of Adobe Creative Suite, focusing on mastering visual communication principles.',
        'contact-title': "Let's Create Together",
        'contact-desc': 'Ready to elevate your visual identity? I’m currently available for freelance projects.',
        'contact-btn-email': 'Email Me',
        'footer-rights': '© 2026 Abdelrahman Ahmed. All Rights Reserved.',
        'footer-built': 'Designed & Built with',
        'intro-portfolio-badge': 'CREATIVE PORTFOLIO ✦ 2026',
        'intro-designer-name': 'ABDELRAHMAN AHMED',
        'intro-role-1': 'Graphic Designer',
        'intro-role-2': 'Visual Artist',
        'intro-role-3': 'Motion & Branding',
        'intro-enter-btn': 'Explore Portfolio',
        'intro-skip': 'Skip',
        'logo-sub': 'Design'
    },
    ar: {
        'nav-home': 'الرئيسية',
        'nav-about': 'من أنا',
        'nav-services': 'خدماتي',
        'nav-work': 'أعمالي',
        'nav-contact': 'تواصل معي',
        'hero-subtitle': 'مصمم جرافيك',
        'hero-title': 'تصميم تجارب متكاملة،<br>وليس مجرد رسومات بصرية.',
        'hero-desc': 'مصمم جرافيك مبتكر يصيغ قصصًا بصرية مقنعة بدقة وشغف. أحول المفاهيم الإبداعية إلى واقع ملموس ومؤثر.',
        'hero-btn-work': 'عرض أعمالي',
        'hero-btn-contact': 'لنبدأ التحدث',
        'character-speech': 'أهلاً بك في معرض أعمالي! 👋',
        'about-huge-firstname': 'عبدالرحمن',
        'about-huge-lastname': 'أحمد',
        'about-subtitle': 'من أكون',
        'about-title': 'الريادة بالدقة والشغف',
        'about-desc-1': 'أنا راوي قصص بصرية أمتلك رغبة مستمرة في التميز الإبداعي. مع أكثر من عام من الخبرة العملية، أنا لا أصمم فقط، بل أحل المشكلات بصرياً. يدمج أسلوبي الفني الإحساس الفني مع التمكن التقني لضمان أن كل بكسل يؤدي دوره بكفاءة.',
        'about-desc-2': 'من الأسس المفاهيمية القوية إلى التصدير النهائي المصقول، أضع أهداف العميل والتناغم الجمالي فوق كل اعتبار. أعمل في تخصصات متعددة، إيماناً مني بأن التنوع هو مفتاح التصميم الحديث.',
        'about-skills-title': 'الترسانة التقنية',
        'skill-ps': '<i class="fa-solid fa-paintbrush"></i> فوتوشوب',
        'skill-ai': '<i class="fa-solid fa-vector-square"></i> إليستريتور',
        'skill-id': '<i class="fa-solid fa-book-open"></i> إن ديزاين',
        'skill-pr': '<i class="fa-solid fa-video"></i> بريمير برو',
        'skill-ae': '<i class="fa-solid fa-film"></i> أفتر إفكتس',
        'skill-ch': '<i class="fa-solid fa-mask"></i> كاركتر أنيميتور',
        'services-subtitle': 'ماذا أقدم',
        'services-title': 'حلول التصميم',
        'service-1-title': 'تصميمات السوشيال ميديا',
        'service-1-desc': 'تصميمات مرئية جذابة تلفت الانتباه وتزيد من تفاعل الجمهور عبر جميع منصات التواصل الاجتماعي.',
        'service-2-title': 'الهوية البصرية',
        'service-2-desc': 'تطوير أنظمة هوية مرئية متكاملة وتصميمات منشورات تعبر عن شخصية علامتك التجارية المميزة وترفع قيمتها.',
        'service-3-title': 'معالجة الصور والتركيب',
        'service-3-desc': 'تعديل احترافي عالي المستوى، تصحيح الألوان، وتركيب الصور السريالية للوصول إلى جودة صور سينمائية ودعائية.',
        'service-4-title': 'الرسوم المتحركة (موشن)',
        'service-4-desc': 'إحياء الأفكار الثابتة بموشن ديناميكي، تعديل الفيديو والمونتاج، وسرد القصص المرئية المبتكرة.',
        'portfolio-subtitle': 'أعمالي المختارة',
        'portfolio-title': 'مشاريع مميزة',
        'project-1-title': 'حملة تواصل اجتماعي',
        'project-1-cat': 'العلامة التجارية / السوشيال ميديا',
        'project-1-desc': 'مجموعة مرئيات إستراتيجية لحملة تسويقية تهدف إلى زيادة التفاعل وضمان اتساق هوية العلامة التجارية.',
        'project-2-title': 'تصميم محتوى مرئي',
        'project-2-cat': 'مطبوعات / رقمي',
        'project-2-desc': 'تصميمات واضحة وبسيطة تركز على الاتساق وتبني هوية مرئية متينة لعلامتك التجارية.',
        'project-3-title': 'معالجة صور سريالية',
        'project-3-cat': 'التوجيه الفني / التعديل',
        'project-3-desc': 'تركيب ومعالجة صور معقدة تبرز الدقة الفائقة والواقعية واللمسة الفنية الفريدة للمصمم.',
        'project-4-title': 'فن تجريبي',
        'project-4-cat': 'ثلاثي الأبعاد / تايبوجرافي',
        'project-4-desc': 'استكشاف شخصي غير تقليدي لأنماط تصميم جديدة وأفكار وتقنيات حديثة.',
        'project-5-title': 'تحريك الشخصيات 2D',
        'project-5-cat': 'موشن / ريجينج',
        'project-5-desc': 'تحريك فوري للشخصيات الثنائية الأبعاد وتركيب الهياكل العظمية باستخدام Adobe Character Animator.',
        'experience-subtitle': 'المسيرة المهنية',
        'experience-title': 'الخبرة العملية',
        'exp-1-date': '٢٠٢٣ - الآن',
        'exp-1-title': 'مصمم جرافيك مستقل',
        'exp-1-desc': 'تقديم حلول تصميم مخصصة لعملاء محليين متنوعين. أوازن بين الدقة والسرعة لتسليم المشاريع في مواعيدها مع نيل رضا العميل التام.',
        'exp-2-date': '٢٠٢٢ - ٢٠٢٣',
        'exp-2-title': 'تطوير المهارات والتعلّم',
        'exp-2-desc': 'دراسة وتطبيق مكثف لمجموعة Adobe الإبداعية بشكل ذاتي، مع التركيز على إتقان مبادئ الاتصال المرئي السليمة.',
        'contact-title': 'لنصنع شيئاً رائعاً معاً',
        'contact-desc': 'هل أنت جاهز للارتقاء بهويتك البصرية؟ أنا متاح حالياً للمشاريع المستقلة.',
        'contact-btn-email': 'راسلني بريدياً',
        'footer-rights': 'جميع الحقوق محفوظة © ٢٠٢٦ عبدالرحمن أحمد.',
        'footer-built': 'تم التصميم والبرمجة بكل حب',
        'intro-portfolio-badge': 'معرض الأعمال الإبداعي ✦ ٢٠٢٦',
        'intro-designer-name': 'عبدالرحمن أحمد',
        'intro-role-1': 'مصمم جرافيك',
        'intro-role-2': 'فنان بصري',
        'intro-role-3': 'موشن وهوية بصرية',
        'intro-enter-btn': 'استكشف المعرض',
        'intro-skip': 'تخطي',
        'logo-sub': 'تصميم'
    }
};

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky Navbar Background
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const elementsToAnimate = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
elementsToAnimate.forEach(el => observer.observe(el));

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Theme Toggle Logic (Defaults to Cosmic Space Dark Theme)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');

// Activate dark cosmic space theme by default unless explicitly set to light
if (savedTheme !== 'light') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
} else {
    body.classList.remove('dark-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Language Switcher Toggle Logic
const langToggle = document.getElementById('lang-toggle');

function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}

function applyTranslations(lang) {
    const dict = translations[lang];
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dict[key]) {
            if (dict[key].includes('<') && dict[key].includes('>')) {
                element.innerHTML = dict[key];
            } else {
                element.textContent = dict[key];
            }
        }
    });

    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    langToggle.textContent = (lang === 'ar') ? 'EN' : 'AR';
}

langToggle.addEventListener('click', () => {
    const currentLang = getCurrentLang();
    const newLang = (currentLang === 'en') ? 'ar' : 'en';
    localStorage.setItem('lang', newLang);
    applyTranslations(newLang);
});

// Load saved language on startup
const savedLang = getCurrentLang();
applyTranslations(savedLang);


/* ----------------------------------------------------
   DRAGGABLE ADOBE BADGES LOGIC
   ---------------------------------------------------- */
const badges = document.querySelectorAll('.adobe-badge');
badges.forEach(badge => {
    let isDragging = false;
    let startX, startY;

    badge.addEventListener('mousedown', dragStart);
    badge.addEventListener('touchstart', dragStart, { passive: false });

    function dragStart(e) {
        isDragging = true;
        badge.classList.add('dragging');
        badge.style.animationPlayState = 'paused';

        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

        const rect = badge.getBoundingClientRect();
        startX = clientX - rect.left;
        startY = clientY - rect.top;

        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('touchend', dragEnd);
    }

    function dragMove(e) {
        if (!isDragging) return;
        if (e.type === 'touchmove') e.preventDefault();

        const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

        const parent = badge.parentElement;
        const parentRect = parent.getBoundingClientRect();

        let x = clientX - parentRect.left - startX;
        let y = clientY - parentRect.top - startY;

        badge.style.left = `${x}px`;
        badge.style.top = `${y}px`;
        badge.style.bottom = 'auto';
        badge.style.right = 'auto';
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        badge.classList.remove('dragging');

        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('touchmove', dragMove);
        document.removeEventListener('touchend', dragEnd);
    }
});

/* ----------------------------------------------------
   INTERACTIVE AVATAR: 3D PARALLAX & SPEECH BUBBLE
   ---------------------------------------------------- */
const characterCard = document.getElementById('character-card');
const heroVisual = document.getElementById('hero-character-stage');
const characterBubble = document.getElementById('character-bubble');
const characterSpeechText = document.getElementById('character-speech-text');

if (characterCard && heroVisual) {
    // 3D Parallax Tilt Effect
    let bounds;
    function rotateToMouse(e) {
        bounds = heroVisual.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2
        };

        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
        const maxDist = Math.max(bounds.width, bounds.height);
        
        // Tilt limits
        const tiltX = (center.y / (bounds.height / 2)) * -14;
        const tiltY = (center.x / (bounds.width / 2)) * 14;

        characterCard.style.transform = `
            perspective(1000px)
            rotateX(${tiltX}deg)
            rotateY(${tiltY}deg)
            scale3d(1.02, 1.02, 1.02)
        `;
    }

    heroVisual.addEventListener('mousemove', rotateToMouse);
    heroVisual.addEventListener('mouseleave', () => {
        characterCard.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale3d(1, 1, 1)
        `;
    });

    // Character Speech Dialogues
    const dialoguePool = {
        ar: [
            "أهلاً بك في معرض أعمالي! 👋",
            "جاهز نحول أفكارك لتصميمات إبداعية؟ 🚀",
            "جرب تسحب أيقونات أدوبي اللي بتطير حولي! ✨",
            "Photoshop & Illustrator هما ملعبي المفضل! 🎨",
            "كل بيكسل هنا معمول بشغف ودقة! 💡"
        ],
        en: [
            "Welcome to my creative portfolio! 👋",
            "Ready to bring your ideas to life? 🚀",
            "Try dragging the Adobe badges floating around! ✨",
            "Photoshop & Illustrator are my creative playground! 🎨",
            "Every pixel is crafted with precision & passion! 💡"
        ]
    };

    let dialogueIndex = 0;
    let bubbleTimeout = null;

    characterCard.addEventListener('click', (e) => {
        // Prevent speech bubble trigger if user was dragging a badge
        if (e.target.classList.contains('adobe-badge')) return;

        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const list = dialoguePool[currentLang] || dialoguePool.en;

        dialogueIndex = (dialogueIndex + 1) % list.length;
        if (characterSpeechText) {
            characterSpeechText.textContent = list[dialogueIndex];
        }

        if (characterBubble) {
            characterBubble.classList.add('active');
            clearTimeout(bubbleTimeout);
            bubbleTimeout = setTimeout(() => {
                characterBubble.classList.remove('active');
            }, 3500);
        }
    });
}

/* ----------------------------------------------------
   ADAPTIVE 3D SPACE & CONSTELLATION ENGINE
   - Calm, comfortable, eye-friendly motion (no dizzying streaks)
   - 95%+ pure soft white stars in Dark Mode
   - Distinct, creative constellation & floating particles in Light Mode
   ---------------------------------------------------- */
(function initSpaceCanvas() {
    const canvas = document.getElementById('space-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 3D Perspective & Motion Settings (Calm & soothing)
    const FOV = 260;
    const MAX_DEPTH = 1600;
    const STAR_COUNT = 200;
    const baseSpeed = 0.42; // Calm, gentle drifting (was 2.4!)
    let currentSpeed = baseSpeed;
    let targetSpeed = baseSpeed;

    // Smooth, gentle camera parallax
    let cx = width / 2;
    let cy = height / 2;
    let targetCX = width / 2;
    let targetCY = height / 2;

    // Mostly Pure White Star Palette (Eye-Friendly)
    const starColorsDark = [
        { r: 255, g: 255, b: 255 }, // Pure soft white
        { r: 255, g: 255, b: 255 },
        { r: 255, g: 255, b: 255 },
        { r: 255, g: 255, b: 255 },
        { r: 245, g: 248, b: 255 }  // Subtle cool crystal white
    ];

    class Star {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = (Math.random() - 0.5) * width * 3.2;
            this.y = (Math.random() - 0.5) * height * 3.2;
            this.z = initial ? Math.random() * MAX_DEPTH + 10 : MAX_DEPTH;
            this.baseSize = Math.random() * 1.2 + 0.8;
            this.color = starColorsDark[Math.floor(Math.random() * starColorsDark.length)];
            this.twinkleSpeed = Math.random() * 0.02 + 0.008; // Slower, softer twinkling
            this.twinklePhase = Math.random() * Math.PI * 2;
            
            // Light Mode floating velocities
            this.lx = (Math.random() - 0.5) * 0.5;
            this.ly = (Math.random() - 0.5) * 0.5;
            this.posX = Math.random() * width;
            this.posY = Math.random() * height;
        }

        updateDark(speed) {
            this.z -= speed;
            this.twinklePhase += this.twinkleSpeed;

            if (this.z <= 1) {
                this.reset(false);
            }
        }

        drawDark() {
            if (this.z <= 1) return;

            // 3D Perspective Projection
            const k = FOV / this.z;
            const sx = this.x * k + cx;
            const sy = this.y * k + cy;

            if (sx < -30 || sx > width + 30 || sy < -30 || sy > height + 30) {
                return;
            }

            const depthRatio = 1 - this.z / MAX_DEPTH;
            const twinkle = 0.85 + 0.15 * Math.sin(this.twinklePhase);
            // Eye-friendly, soft opacity (no harsh glares)
            const alpha = Math.min(0.85, Math.max(0.2, depthRatio * 1.1 * twinkle));
            const size = Math.max(0.7, depthRatio * this.baseSize * 2.2);

            // Clean, soft circular star (No harsh radial streaks!)
            ctx.beginPath();
            ctx.arc(sx, sy, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`;
            ctx.fill();

            // Very subtle, gentle soft aura for close stars
            if (depthRatio > 0.65) {
                ctx.beginPath();
                ctx.arc(sx, sy, size * 2.2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.12})`;
                ctx.fill();
            }
        }

        // Light Mode: Creative Constellation / Floating Designer Particles
        updateLight() {
            this.posX += this.lx;
            this.posY += this.ly;

            if (this.posX < 0) this.posX = width;
            if (this.posX > width) this.posX = 0;
            if (this.posY < 0) this.posY = height;
            if (this.posY > height) this.posY = 0;
        }

        drawLight() {
            ctx.beginPath();
            ctx.arc(this.posX, this.posY, this.baseSize * 1.1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(99, 102, 241, 0.35)'; // Soft creative indigo
            ctx.fill();
        }
    }

    // Gentle, Elegant Shooting Star (Dark Mode only)
    class Meteor {
        constructor() {
            this.reset();
        }

        reset() {
            this.active = false;
            this.x = 0;
            this.y = 0;
            this.length = 0;
            this.speed = 0;
            this.angle = 0;
            this.opacity = 0;
            this.decay = 0;
        }

        spawn() {
            this.active = true;
            this.x = Math.random() * width * 0.7;
            this.y = Math.random() * height * 0.3;
            this.length = Math.random() * 80 + 60; // Shorter, softer trail
            this.speed = Math.random() * 8 + 9;    // Gentle, smooth speed
            this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2;
            this.opacity = 0.8;
            this.decay = Math.random() * 0.008 + 0.008; // Fades out gently
            this.width = 1.2;
        }

        update() {
            if (!this.active) return;
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;
            this.opacity -= this.decay;

            if (this.opacity <= 0 || this.x > width + 50 || this.y > height + 50) {
                this.active = false;
            }
        }

        draw() {
            if (!this.active || this.opacity <= 0) return;
            const tailX = this.x - Math.cos(this.angle) * this.length;
            const tailY = this.y - Math.sin(this.angle) * this.length;

            const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
            grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            grad.addColorStop(1, `rgba(255, 255, 255, ${this.opacity * 0.7})`);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(this.x, this.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = this.width;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.restore();
        }
    }

    const stars = Array.from({ length: STAR_COUNT }, () => new Star());
    const meteors = [new Meteor()];
    let lastMeteorTime = Date.now();

    // Very subtle, peaceful cosmic nebulae in Dark Mode
    function drawNebulaeDark() {
        const time = Date.now() * 0.0002;
        const neb1X = width * 0.3 + Math.sin(time) * 40;
        const neb1Y = height * 0.35 + Math.cos(time * 0.7) * 30;
        const grad1 = ctx.createRadialGradient(neb1X, neb1Y, 10, neb1X, neb1Y, width * 0.55);
        grad1.addColorStop(0, 'rgba(124, 58, 237, 0.045)');
        grad1.addColorStop(0.6, 'rgba(79, 70, 229, 0.02)');
        grad1.addColorStop(1, 'rgba(4, 5, 10, 0)');

        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, width, height);
    }

    // Connect close constellation particles in Light Mode
    function drawConstellationLines() {
        const maxDist = 85;
        ctx.lineWidth = 0.6;
        for (let i = 0; i < stars.length; i += 2) {
            for (let j = i + 1; j < stars.length; j += 2) {
                const dx = stars[i].posX - stars[j].posX;
                const dy = stars[i].posY - stars[j].posY;
                const dist = Math.hypot(dx, dy);
                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.12;
                    ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(stars[i].posX, stars[i].posY);
                    ctx.lineTo(stars[j].posX, stars[j].posY);
                    ctx.stroke();
                }
            }
        }
    }

    // Subtle 3D Mouse Parallax (Reduced to be calm and gentle)
    window.addEventListener('mousemove', (e) => {
        const offsetX = (e.clientX - width / 2) / (width / 2);
        const offsetY = (e.clientY - height / 2) / (height / 2);
        targetCX = width / 2 + offsetX * 35; // Gentle 35px offset
        targetCY = height / 2 + offsetY * 25;
    });

    window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            const offsetX = (touch.clientX - width / 2) / (width / 2);
            const offsetY = (touch.clientY - height / 2) / (height / 2);
            targetCX = width / 2 + offsetX * 20;
            targetCY = height / 2 + offsetY * 15;
        }
    }, { passive: true });

    // Calm Scroll Effect (Very subtle boost, no dizzying jump)
    let lastScrollY = window.scrollY;
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        const delta = Math.abs(window.scrollY - lastScrollY);
        lastScrollY = window.scrollY;
        targetSpeed = baseSpeed + Math.min(delta * 0.03, 0.45);

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            targetSpeed = baseSpeed;
        }, 150);
    }, { passive: true });

    // Responsive Canvas Resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        cx = width / 2;
        cy = height / 2;
        targetCX = cx;
        targetCY = cy;
    });

    // Main Animation Loop
    function animate() {
        const isDark = document.body.classList.contains('dark-mode');

        if (isDark) {
            // === DARK MODE: Serene, Deep Cosmos with Gentle Pure White Stars ===
            ctx.fillStyle = '#04050a';
            ctx.fillRect(0, 0, width, height);

            // Subtle background nebula
            drawNebulaeDark();

            // Smooth camera easing
            cx += (targetCX - cx) * 0.04;
            cy += (targetCY - cy) * 0.04;
            currentSpeed += (targetSpeed - currentSpeed) * 0.05;

            // Render calm white 3D stars
            for (let i = 0; i < stars.length; i++) {
                stars[i].updateDark(currentSpeed);
                stars[i].drawDark();
            }

            // Rare, graceful shooting star
            const now = Date.now();
            if (now - lastMeteorTime > 12000 + Math.random() * 8000) {
                const idleMeteor = meteors.find(m => !m.active);
                if (idleMeteor) {
                    idleMeteor.spawn();
                    lastMeteorTime = now;
                }
            }

            for (let i = 0; i < meteors.length; i++) {
                meteors[i].update();
                meteors[i].draw();
            }
        } else {
            // === LIGHT MODE: Clean, Creative Floating Constellation & Stardust ===
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0, 0, width, height);

            // Connect nearby nodes with delicate lines
            drawConstellationLines();

            // Draw floating creative particles
            for (let i = 0; i < stars.length; i++) {
                stars[i].updateLight();
                stars[i].drawLight();
            }
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
})();

/* ====================================================
   3D CINEMATIC INTRO & CREATIVE INFINITY ANIMATION
   ==================================================== */
(function init3DIntroAndLogo() {
    const introOverlay = document.getElementById('shaparo-3d-intro');
    const canvas = document.getElementById('intro-3d-canvas');
    if (!introOverlay || !canvas) return;

    const ctx = canvas.getContext('2d');
    const introStage = document.getElementById('intro-stage');
    const enterBtn = document.getElementById('intro-enter-btn');
    const skipBtn = document.getElementById('intro-skip-btn');
    const skipRingFill = document.getElementById('skip-ring-fill');
    const navbarInfinityBadge = document.getElementById('navbar-infinity-badge');
    const introReplayBtn = document.getElementById('intro-replay-btn');
    const brandLogo = document.getElementById('brand-logo');

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animId = null;
    let isIntroActive = true;
    let introStartTime = Date.now();
    const INTRO_DURATION_MS = 2700; // 2.7 seconds auto showcase (reduced by 1.5s)

    // Lock body scroll during intro
    document.body.style.overflow = 'hidden';

    // 3D Engine Variables
    let rotX = 0.2;
    let rotY = 0;
    let rotZ = 0.1;
    let targetRotX = 0;
    let targetRotY = 0;

    // Mouse coordinates relative to center (-1 to +1)
    let mouseNormX = 0;
    let mouseNormY = 0;

    function resizeCanvas() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
    resizeCanvas();

    // Mouse & Touch 3D Tilt interaction
    window.addEventListener('mousemove', (e) => {
        if (!isIntroActive) return;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        mouseNormX = (e.clientX - cx) / cx;
        mouseNormY = (e.clientY - cy) / cy;

        targetRotY = mouseNormX * 0.45;
        targetRotX = -mouseNormY * 0.35;

        if (introStage) {
            introStage.style.transform = `perspective(1200px) rotateX(${-mouseNormY * 12}deg) rotateY(${mouseNormX * 16}deg)`;
        }
    });

    window.addEventListener('touchmove', (e) => {
        if (!isIntroActive || !e.touches[0]) return;
        const touch = e.touches[0];
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        mouseNormX = (touch.clientX - cx) / cx;
        mouseNormY = (touch.clientY - cy) / cy;
        targetRotY = mouseNormX * 0.4;
        targetRotX = -mouseNormY * 0.3;
        if (introStage) {
            introStage.style.transform = `perspective(1200px) rotateX(${-mouseNormY * 10}deg) rotateY(${mouseNormX * 12}deg)`;
        }
    }, { passive: true });

    // 3D Stardust Particle Constellation
    const NUM_PARTICLES = 65;
    const particles = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * 260 + 40;
        const sinPhi = Math.sin(phi);
        particles.push({
            x: r * sinPhi * Math.cos(theta),
            y: r * sinPhi * Math.sin(theta) * 0.55,
            z: r * Math.cos(phi),
            size: Math.random() * 2.2 + 0.8,
            color: Math.random() > 0.4 ? '#38bdf8' : (Math.random() > 0.5 ? '#c084fc' : '#ffffff'),
            alpha: Math.random() * 0.7 + 0.3,
            pulseSpeed: Math.random() * 0.03 + 0.015,
            pulsePhase: Math.random() * Math.PI * 2
        });
    }

    // Comets / Photons racing the 3D infinity path
    const comets = [
        { t: 0, speed: 0.016, color: '#38bdf8', size: 5, trail: [] },
        { t: Math.PI, speed: 0.016, color: '#c084fc', size: 4.5, trail: [] },
        { t: Math.PI * 0.5, speed: -0.012, color: '#ffffff', size: 3.5, trail: [] }
    ];

    // Shockwave Rings at (0, 0, 0)
    const shockwaves = [];
    function spawnShockwave() {
        shockwaves.push({
            radius: 5,
            maxRadius: 180,
            alpha: 0.8,
            speed: 3.5
        });
    }
    let lastShockwaveTime = 0;

    // 3D Rotation Transform helper
    function rotate3D(x, y, z, rx, ry, rz) {
        // Rotate X
        const cosX = Math.cos(rx), sinX = Math.sin(rx);
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;

        // Rotate Y
        const cosY = Math.cos(ry), sinY = Math.sin(ry);
        const x2 = x * cosY + z1 * sinY;
        const z2 = -x * sinY + z1 * cosY;

        // Rotate Z
        const cosZ = Math.cos(rz), sinZ = Math.sin(rz);
        const x3 = x2 * cosZ - y1 * sinZ;
        const y3 = x2 * sinZ + y1 * cosZ;

        return { x: x3, y: y3, z: z2 };
    }

    // Parametric Infinity Curve Point in 3D
    function getInfinityPoint(t, a, b, c) {
        // Parametric Lemniscate of Gerono in 3D
        const x = a * Math.sin(t);
        const y = (b * 0.5) * Math.sin(2 * t);
        const z = c * Math.cos(t);
        return { x, y, z };
    }

    // Main 3D Render Loop
    function render3D() {
        if (!isIntroActive) return;

        const w = window.innerWidth;
        const h = window.innerHeight;
        const cx = w / 2;
        const cy = h / 2;

        ctx.clearRect(0, 0, w, h);

        // Responsive Curve Scale
        const scaleA = Math.min(w * 0.28, 230);
        const scaleB = Math.min(w * 0.26, 210);
        const scaleC = Math.min(w * 0.12, 110);

        // Smooth rotation easing
        rotY += (targetRotY - rotY) * 0.05 + 0.007;
        rotX += (targetRotX - rotX) * 0.05 + 0.003;
        rotZ += 0.002;

        const fov = 420;

        // 1. Draw 3D Stardust Particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.pulsePhase += p.pulseSpeed;
            const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulsePhase));

            const rotated = rotate3D(p.x, p.y, p.z, rotX * 0.6, rotY * 0.8, rotZ * 0.5);
            const pScale = fov / (fov + rotated.z);
            if (pScale > 0) {
                const sx = cx + rotated.x * pScale;
                const sy = cy + rotated.y * pScale;
                const sz = p.size * pScale;

                ctx.beginPath();
                ctx.arc(sx, sy, sz, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = Math.max(0, Math.min(currentAlpha * (0.3 + pScale * 0.7), 1));
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 8 * pScale;
                ctx.fill();
            }
        }
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // 2. Draw 3D Infinity Ribbon Structure
        const NUM_SEGMENTS = 160;
        const ribbonPoints = [];

        for (let i = 0; i <= NUM_SEGMENTS; i++) {
            const t = (i / NUM_SEGMENTS) * Math.PI * 2;
            const pt = getInfinityPoint(t, scaleA, scaleB, scaleC);
            const rot = rotate3D(pt.x, pt.y, pt.z, rotX, rotY, rotZ);

            const projScale = fov / (fov + rot.z);
            const sx = cx + rot.x * projScale;
            const sy = cy + rot.y * projScale;

            ribbonPoints.push({
                sx, sy, z: rot.z, scale: projScale, t
            });
        }

        // Draw Continuous Glowing Curve with Depth Sorting
        for (let i = 0; i < ribbonPoints.length - 1; i++) {
            const p1 = ribbonPoints[i];
            const p2 = ribbonPoints[i + 1];

            const avgZ = (p1.z + p2.z) / 2;
            const depthFactor = (avgZ + scaleC) / (scaleC * 2 + 1); // 0 (back) to 1 (front)
            const alpha = 0.25 + depthFactor * 0.7;
            const lineWidth = (1.5 + depthFactor * 3.5) * p1.scale;

            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);

            // Shifting gradient color along curve
            const hue = 190 + (p1.t / (Math.PI * 2)) * 120; // Cyan (190) to Violet/Magenta (310)
            ctx.strokeStyle = `hsla(${hue}, 95%, 65%, ${alpha})`;
            ctx.lineWidth = lineWidth;
            ctx.shadowColor = `hsla(${hue}, 95%, 60%, 0.8)`;
            ctx.shadowBlur = (6 + depthFactor * 14) * p1.scale;
            ctx.stroke();
        }
        ctx.shadowBlur = 0;

        // 3. Draw Traveling Photons / Comets & Trails
        const now = Date.now();
        comets.forEach(comet => {
            comet.t = (comet.t + comet.speed + Math.PI * 2) % (Math.PI * 2);

            const pt = getInfinityPoint(comet.t, scaleA, scaleB, scaleC);
            const rot = rotate3D(pt.x, pt.y, pt.z, rotX, rotY, rotZ);
            const pScale = fov / (fov + rot.z);
            const sx = cx + rot.x * pScale;
            const sy = cy + rot.y * pScale;

            // Spawn shockwave when near center crossover
            if (Math.abs(pt.x) < 18 && Math.abs(pt.y) < 18 && now - lastShockwaveTime > 550) {
                spawnShockwave();
                lastShockwaveTime = now;
            }

            // Save trail
            comet.trail.push({ sx, sy, pScale, alpha: 1 });
            if (comet.trail.length > 18) comet.trail.shift();

            // Draw comet trail
            for (let j = 0; j < comet.trail.length; j++) {
                const tr = comet.trail[j];
                tr.alpha *= 0.88;
                const trailSize = (comet.size * 0.6) * (j / comet.trail.length) * tr.pScale;

                ctx.beginPath();
                ctx.arc(tr.sx, tr.sy, Math.max(1, trailSize), 0, Math.PI * 2);
                ctx.fillStyle = comet.color;
                ctx.globalAlpha = tr.alpha * 0.6;
                ctx.fill();
            }

            // Draw comet head with intense radial aura
            const headSize = comet.size * pScale;
            const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, headSize * 3);
            grad.addColorStop(0, '#ffffff');
            grad.addColorStop(0.3, comet.color);
            grad.addColorStop(1, 'transparent');

            ctx.beginPath();
            ctx.arc(sx, sy, headSize * 3, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.globalAlpha = 0.9;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(sx, sy, headSize, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.globalAlpha = 1;
            ctx.shadowColor = comet.color;
            ctx.shadowBlur = 15;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        // 4. Draw Center Shockwaves
        for (let k = shockwaves.length - 1; k >= 0; k--) {
            const sw = shockwaves[k];
            sw.radius += sw.speed;
            sw.alpha *= 0.94;

            if (sw.alpha < 0.02 || sw.radius > sw.maxRadius) {
                shockwaves.splice(k, 1);
                continue;
            }

            ctx.save();
            ctx.beginPath();
            ctx.ellipse(cx, cy, sw.radius * 1.4, sw.radius * 0.7, rotZ, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${sw.alpha * 0.7})`;
            ctx.lineWidth = 2;
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 10;
            ctx.stroke();
            ctx.restore();
        }

        // 5. Update Skip Progress Ring
        const elapsed = Date.now() - introStartTime;
        const progress = Math.min(elapsed / INTRO_DURATION_MS, 1);
        if (skipRingFill) {
            const offset = 100 - (progress * 100);
            skipRingFill.style.strokeDashoffset = offset;
        }

        // Auto Transition Check
        if (elapsed >= INTRO_DURATION_MS) {
            finishIntro();
            return;
        }

        animId = requestAnimationFrame(render3D);
    }

    // Finish & Transition to Main Website
    let isTransitioning = false;
    function finishIntro() {
        if (isTransitioning || !isIntroActive) return;
        isTransitioning = true;

        introOverlay.classList.add('intro-closing');

        // Trigger ignition burst on Navbar Infinity Logo
        if (navbarInfinityBadge) {
            navbarInfinityBadge.classList.remove('logo-ignited');
            void navbarInfinityBadge.offsetWidth; // trigger reflow
            navbarInfinityBadge.classList.add('logo-ignited');
        }

        // Complete closing after animation
        setTimeout(() => {
            isIntroActive = false;
            cancelAnimationFrame(animId);
            introOverlay.style.display = 'none';
            document.body.style.overflow = '';
            isTransitioning = false;
        }, 650);
    }

    // Replay Function (Public API)
    window.playIntro3D = function () {
        if (isIntroActive) return;
        isIntroActive = true;
        isTransitioning = false;
        introStartTime = Date.now();

        document.body.style.overflow = 'hidden';
        introOverlay.style.display = 'flex';
        introOverlay.classList.remove('intro-closing');

        if (introStage) {
            introStage.style.transform = 'none';
        }

        // Restart animation loop
        resizeCanvas();
        animId = requestAnimationFrame(render3D);
    };

    // Event Listeners
    if (enterBtn) {
        enterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            finishIntro();
        });
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            finishIntro();
        });
    }

    // Keyboard controls (Esc or Space to skip)
    window.addEventListener('keydown', (e) => {
        if (isIntroActive && (e.key === 'Escape' || e.key === ' ')) {
            finishIntro();
        }
    });

    // Replay Button in Navbar
    if (introReplayBtn) {
        introReplayBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (mobileMenu && navMenu) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
            window.playIntro3D();
        });
    }

    // Clicking Navbar Brand Logo to Replay 3D Intro
    if (brandLogo) {
        brandLogo.addEventListener('click', (e) => {
            // If already at top of home, replay 3D intro
            if (window.scrollY < 100) {
                e.preventDefault();
                window.playIntro3D();
            }
        });
    }

    // Start 3D Render Loop
    animId = requestAnimationFrame(render3D);
})();

