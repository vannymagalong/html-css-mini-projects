// Toggle mobile navigation 
function toggleMobileNavigation(forceClose=false) {
    const headerEl = document.querySelector('.header');
    if (!headerEl) return;
    
    if (forceClose === true) {
        headerEl.classList?.remove('nav-open');
    } else {
        headerEl.classList.toggle('nav-open');
    }
}

// Toggle mobile navigation 
function handleToggleMobileNavigation() {
    const btnNavEl = document.querySelector('.btn-mobile-nav');
    if (btnNavEl) btnNavEl.addEventListener('click', toggleMobileNavigation)
}

handleToggleMobileNavigation();

// Scroll to section
function scrollToSection(href) {
    if (!href) return;

    if (href === '#') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        if (sectionEl) sectionEl.scrollIntoView({ behavior: 'smooth' }); 
        toggleMobileNavigation(true);
    }
}

// Scroll to section
function handleClickScrollToSection() {
    const allLinks = document.querySelectorAll('a:link');

    if (!allLinks) return;

    allLinks.forEach(function(link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(e.target.getAttribute('href'));
        })
    });
}

handleClickScrollToSection();

// Update Copyright year
function updateCopyrightYear() {
    const yearEl = document.querySelectorAll('.year');

    if (!yearEl.length) return;

    const date = new Date();
    const currentYear = date.getFullYear();
    yearEl.forEach(function(element) {
        element.textContent = currentYear;
    });
}

updateCopyrightYear();


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }

  checkFlexGap();
  