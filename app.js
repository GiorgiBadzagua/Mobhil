
 let nav = document.querySelector('nav');
 let ul = document.querySelector('nav ul')
 let under = document.querySelector('.underline');
 nav.addEventListener('mousemove', function (e) {

     if (ul.getBoundingClientRect().left < e.clientX)
         under.style.left = e.clientX + 'px'
 });


 let dropdowns = document.querySelectorAll('.lagndropdown');

dropdowns.forEach(lagndropdown => {
    let select = lagndropdown.querySelector('.select');
    let caret = lagndropdown.querySelector('.caret');
    let langs = lagndropdown.querySelector('.langs');
    let options = lagndropdown.querySelector('.langs li');
    let selected = lagndropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        langs.classList.toggle('langs-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            langs.classList.remove('langs-open');
            option.forEach(option => {
                option.clasList.remove('active');
            }
            );
            option.clasList.add('active');
        });
    });


});
















