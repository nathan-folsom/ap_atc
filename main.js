let cartQty = 0;

$('.add').click((ev) => {
    const select = document.getElementById('select');
    if (select.value === '0') {
        // Open dropdown
        select.classList.add('empty');
    } else {
        handleClasses(ev.target);
        handleClasses(document.getElementById('cart'), (cart) => {
            cartQty++;
            cart.innerHTML = cartQty
        });
        handleClasses(document.getElementById('title'));
        select.classList.remove('empty');
    }
});

const handleClasses = (el, animationEndCallback) => {
    el.onanimationend = () => {
        el.classList.remove('animating');
        animationEndCallback && animationEndCallback(el);
    };
    el.classList.add('animating');
};
