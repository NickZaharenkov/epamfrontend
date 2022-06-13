export function setModule() {
    let btn = document.createElement('button');
    btn.setAttribute('id', 'theme');
    btn.innerText = 'Change theme';
    document.body.appendChild(btn);

    let name = prompt('Enter your name');
    let brightTheme = true;

    theme.addEventListener('click', () => {
        document.body.classList.toggle('darkTheme');
        brightTheme = !brightTheme;
        localStorage.setItem(name, brightTheme);
    })

    if (localStorage.hasOwnProperty(name)) {
        if (localStorage.getItem(name) === 'false') {
            document.body.classList.add('darkTheme');
        }
    }

    if (document.body.classList.contains('darkTheme')) {
        brightTheme = false;
        console.log('Changed to dark theme');
    }
}