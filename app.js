const workboxUses = ['Pre-caching', 'Runtime-caching', 'Request Routing', 'Background Sync', 'Offline Support'];

const cards = document.querySelectorAll('ul > li');

const showQuote = ({ target: { innerText }, target  }) => {
    const liElement = workboxUses[Number(innerText) - 1];
    target.style.fontSize = '30px';
    target.innerText = liElement;
}

const removeQuote = ({ target: { innerText }, target  }) => {
    const liElement = Number(workboxUses.indexOf(innerText)) + 1;
    target.style.fontSize = '4rem';
    target.innerText = liElement;
}


cards.forEach(each => each.addEventListener('mouseover', showQuote));
cards.forEach(each => each.addEventListener('mouseout', removeQuote));