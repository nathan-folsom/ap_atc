let cartQty = 0;

$('.add').click((ev) => {
    const select = document.getElementById('select');
    if (select.value === '0') {
        // Open dropdown
    } else {
        handleClasses(ev.target);
        handleClasses(document.getElementById('cart'), (cart) => {
            cartQty++;
            cart.innerHTML = cartQty
        });
        handleClasses(document.getElementById('title'));
    }
});

const handleClasses = (el, animationEndCallback) => {
    el.onanimationend = () => {
        el.classList.remove('animating');
        animationEndCallback && animationEndCallback(el);
    };
    el.classList.add('animating');
};
