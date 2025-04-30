const classToggle = (el, ...args) => {
    args.map(e => el.classList.toggle(e))
}

const init = () => {
    document.querySelector('#input')?.focus();
    document.querySelector('.btn-scheme')?.addEventListener('click', () => {
        classToggle(document.querySelector('body'), 'light', 'dark');
    });
}

init();