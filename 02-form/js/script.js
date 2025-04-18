const isValidEmail = (email) => {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
};

const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};

const validateField = (fieldEl) => {
    if (!fieldEl) return;

    const fieldType = fieldEl.getAttribute('type');
    const fieldValue = fieldEl.value;
    const invalidEmail = fieldType === 'email' && isValidEmail(fieldValue) === false;
    const invalidUrl = fieldType === 'url' && isValidUrl(fieldValue) === false;

    fieldEl?.parentNode?.parentNode?.classList?.toggle('has-error', !fieldValue || invalidEmail || invalidUrl);
}

const updateFormFieldState = (form) => {
    if (!form) return;

    const data = new FormData(form);

    for (const [key, value] of data) {
        const fieldEl = form.querySelector(`[name="${key}"]`);
        validateField(fieldEl);
    }
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const button = form?.querySelector('button[type="submit"]');
    button?.classList?.add('is-loading');

    setTimeout(() => {
        updateFormFieldState(form);
        button?.classList?.remove('is-loading');
    }, 500);
};

const initializeEvents = () => {
    const form = document.querySelector('.form');
    if (form) form.addEventListener('submit', handleFormSubmit);

    const formFields = document.querySelectorAll('.form-field input');
    if (formFields) {
        formFields.forEach(function(field) {
            field.addEventListener('input', (e) => {
                validateField(e.target);
            })
        });
    }
};

initializeEvents();