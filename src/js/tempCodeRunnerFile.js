goodsBtn.forEach(function(btn, i) {
    btn.addEventListener('click', ()=> {
        let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');

        trigger.remove();

        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);

        cartWrapper.appendChild(item);
        if (empty) {
            empty.remove();
        }
    });
});