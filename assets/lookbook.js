document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const variantId = this.dataset.id;
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{ id: variantId, quantity: 1 }]
      })
    })
    .then(response => response.json())
    .then(data => {
      alert('Product added to cart!');
    })
    .catch(error => console.error('Error:', error));
  });
});