document.addEventListener('DOMContentLoaded', function() {
    //responsiveness of web-pages
    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const exitBtn = document.getElementById('exit-btn');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuToggle.classList.toggle('hidden');
    });
    
    exitBtn.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.classList.toggle('hidden');
    });
    // click login button to open login page
    function openLoginPage() {
        window.location.href = 'login.html';
    }
      
    document.getElementById('loginButton').addEventListener('click', openLoginPage);
    
    // click explore button to open all items page
    function clickexplorebtn() {
        window.location.href = 'all.html';
    }
    // access store API
  // popular items in women's category
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
      const container = document.querySelector('.product-container');

      // Filter products belonging to the "women's clothing" category
      const womenClothingProducts = products.filter(product => product.category === "women's clothing");

      // Limiting to the first 4 products
      womenClothingProducts.slice(0, 4).forEach(product => {
          const card = document.createElement('div');
          card.className = 'card bg-white shadow-md rounded-md p-4';

          // Add click event listener to each card
         card.addEventListener('click', () => {
         // Redirect to item.html with product information as query parameters
         window.location.href = `item.html?title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}&ratingCount=${encodeURIComponent(product.rating.rate)}&count=${encodeURIComponent(product.rating.count)}`;
      });
          
          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col';

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = 'Product Image';
          img.className = 'rounded-md mb-4';
          img.style.width = '150px';
          img.style.height = '150px'; 
          
          const title = document.createElement('h2');
          title.textContent = product.title;
          title.className = 'text-lg font-semibold mb-2';
          title.style.overflow = 'hidden';
          title.style.textOverflow = 'ellipsis';
          title.style.display = '-webkit-box';
          title.style.webkitLineClamp = '2'; // Show only 2 lines
          title.style.webkitBoxOrient = 'vertical';

          const description = document.createElement('p');
          description.textContent = product.description;
          description.className = 'text-sm text-gray-600 mb-2';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
          description.style.display = '-webkit-box';
          description.style.webkitLineClamp = '4'; // Show only 4 lines
          description.style.webkitBoxOrient = 'vertical';

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.className = 'text-lg text-gray-800';

          innerDiv.appendChild(img);
          innerDiv.appendChild(title);
          innerDiv.appendChild(description);
          innerDiv.appendChild(price);

          card.appendChild(innerDiv);
          container.appendChild(card);
      });
  })
  .catch(error => console.error('Error fetching products:', error));

  //new items
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
      const container2 = document.querySelector('.new-collection');

      // Limiting to the first 8 products
      products.slice(0, 8).forEach(product => {
          const card = document.createElement('div');
          card.className = 'card bg-white shadow-md rounded-md p-4';

           // Add click event listener to each card
         card.addEventListener('click', () => {
          // Redirect to item.html with product information as query parameters
          window.location.href = `item.html?title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}&ratingCount=${encodeURIComponent(product.rating.rate)}&count=${encodeURIComponent(product.rating.count)}`;
       });
          
          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col';

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = 'Product Image';
          img.className = 'rounded-md mb-4';
          img.style.width = '150px'; 
          img.style.height = '150px';
          
          const title = document.createElement('h2');
          title.textContent = product.title;
          title.className = 'text-lg font-semibold mb-2';
          title.style.overflow = 'hidden';
          title.style.textOverflow = 'ellipsis';
          title.style.display = '-webkit-box';
          title.style.webkitLineClamp = '2'; // Show only 2 lines
          title.style.webkitBoxOrient = 'vertical';

          const description = document.createElement('p');
          description.textContent = product.description;
          description.className = 'text-sm text-gray-600 mb-2';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
          description.style.display = '-webkit-box';
          description.style.webkitLineClamp = '4'; // Show only 4 lines
          description.style.webkitBoxOrient = 'vertical';

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.className = 'text-lg text-gray-800';

          innerDiv.appendChild(img);
          innerDiv.appendChild(title);
          innerDiv.appendChild(description);
          innerDiv.appendChild(price);

          card.appendChild(innerDiv);
          container2.appendChild(card);
      });
  })
  .catch(error => console.error('Error fetching products:', error));

  // women's category page
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
      const container3 = document.querySelector('.women');

      // Filter products belonging to the "women's clothing" category
      const womenClothingProducts = products.filter(product => product.category === "women's clothing");

      // Iterate over all products in the "women's clothing" category
      womenClothingProducts.forEach(product => {
          const card = document.createElement('div');
          card.className = 'card bg-white shadow-md rounded-md p-4';

           // Add click event listener to each card
         card.addEventListener('click', () => {
          // Redirect to item.html with product information as query parameters
          window.location.href = `item.html?title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}&ratingCount=${encodeURIComponent(product.rating.rate)}&count=${encodeURIComponent(product.rating.count)}`;
       });

          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col';

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = 'Product Image';
          img.className = 'rounded-md mb-4';
          img.style.width = '150px'; 
          img.style.height = '150px'; 

          const title = document.createElement('h2');
          title.textContent = product.title;
          title.className = 'text-lg font-semibold mb-2';
          title.style.overflow = 'hidden';
          title.style.textOverflow = 'ellipsis';
          title.style.display = '-webkit-box';
          title.style.webkitLineClamp = '2'; // Show only 2 lines
          title.style.webkitBoxOrient = 'vertical';

          const description = document.createElement('p');
          description.textContent = product.description;
          description.className = 'text-sm text-gray-600 mb-2';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
          description.style.display = '-webkit-box';
          description.style.webkitLineClamp = '4'; // Show only 4 lines
          description.style.webkitBoxOrient = 'vertical';

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.className = 'text-lg text-gray-800';

          innerDiv.appendChild(img);
          innerDiv.appendChild(title);
          innerDiv.appendChild(description);
          innerDiv.appendChild(price);

          card.appendChild(innerDiv);
          container3.appendChild(card);
      });
  })
  .catch(error => console.error('Error fetching products:', error));


  //men's category
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
      const container4 = document.querySelector('.men');

      // Filter products belonging to the "women's clothing" category
      const womenClothingProducts = products.filter(product => product.category === "men's clothing");

      // Iterate over all products in the "women's clothing" category
      womenClothingProducts.forEach(product => {
          const card = document.createElement('div');
          card.className = 'card bg-white shadow-md rounded-md p-4';

            // Add click event listener to each card
         card.addEventListener('click', () => {
         // Redirect to item.html with product information as query parameters
         window.location.href = `item.html?title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}&ratingCount=${encodeURIComponent(product.rating.rate)}&count=${encodeURIComponent(product.rating.count)}`;
      });
          
          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col';

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = 'Product Image';
          img.className = 'rounded-md mb-4';
          img.style.width = '150px'; 
          img.style.height = '150px'; 

          const title = document.createElement('h2');
          title.textContent = product.title;
          title.className = 'text-lg font-semibold mb-2';
          title.style.overflow = 'hidden';
          title.style.textOverflow = 'ellipsis';
          title.style.display = '-webkit-box';
          title.style.webkitLineClamp = '2'; // Show only 2 lines
          title.style.webkitBoxOrient = 'vertical';

          const description = document.createElement('p');
          description.textContent = product.description;
          description.className = 'text-sm text-gray-600 mb-2';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
          description.style.display = '-webkit-box';
          description.style.webkitLineClamp = '4'; // Show only 4 lines
          description.style.webkitBoxOrient = 'vertical';

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.className = 'text-lg text-gray-800';

          innerDiv.appendChild(img);
          innerDiv.appendChild(title);
          innerDiv.appendChild(description);
          innerDiv.appendChild(price);

          card.appendChild(innerDiv);
          container4.appendChild(card);
      });
  })
  .catch(error => console.error('Error fetching products:', error));


  //jewellery category
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
      const container5 = document.querySelector('.jewelery');

      // Filter products belonging to the "women's clothing" category
      const jeweleryProducts = products.filter(product => product.category === "jewelery");

      // Iterate over all products in the "women's clothing" category
      jeweleryProducts.forEach(product => {
          const card = document.createElement('div');
          card.className = 'card bg-white shadow-md rounded-md p-4';

            // Add click event listener to each card
         card.addEventListener('click', () => {
          // Redirect to item.html with product information as query parameters
          window.location.href = `item.html?title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}&ratingCount=${encodeURIComponent(product.rating.rate)}&count=${encodeURIComponent(product.rating.count)}`;
       });
          
          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col';

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = 'Product Image';
          img.className = 'rounded-md mb-4';
          img.style.width = '150px'; 
          img.style.height = '150px'; 
          
          const title = document.createElement('h2');
          title.textContent = product.title;
          title.className = 'text-lg font-semibold mb-2';
          title.style.overflow = 'hidden';
          title.style.textOverflow = 'ellipsis';
          title.style.display = '-webkit-box';
          title.style.webkitLineClamp = '2'; // Show only 2 lines
          title.style.webkitBoxOrient = 'vertical';

          const description = document.createElement('p');
          description.textContent = product.description;
          description.className = 'text-sm text-gray-600 mb-2';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
          description.style.display = '-webkit-box';
          description.style.webkitLineClamp = '4'; // Show only 4 lines
          description.style.webkitBoxOrient = 'vertical';

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.className = 'text-lg text-gray-800';

          innerDiv.appendChild(img);
          innerDiv.appendChild(title);
          innerDiv.appendChild(description);
          innerDiv.appendChild(price);

          card.appendChild(innerDiv);
          container5.appendChild(card);
      });
  })
  .catch(error => console.error('Error fetching products:', error));

//all products
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
      const container = document.querySelector('.all-product-container');

      // Filter products excluding the "electronics" category
      const nonElectronicsProducts = products.filter(product => product.category !== "electronics");

      // Iterate over all non-electronics products
      nonElectronicsProducts.forEach(product => {
          const card = document.createElement('div');
          card.className = 'card bg-white shadow-md rounded-md p-4';

           // Add click event listener to each card
         card.addEventListener('click', () => {
          // Redirect to item.html with product information as query parameters
          window.location.href = `item.html?title=${encodeURIComponent(product.title)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(product.category)}&ratingCount=${encodeURIComponent(product.rating.rate)}&count=${encodeURIComponent(product.rating.count)}`;
       });
          
          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col';

          const img = document.createElement('img');
          img.src = product.image;
          img.alt = 'Product Image';
          img.className = 'rounded-md mb-4';
          img.style.width = '150px';
          img.style.height = '150px'; 
          
          const title = document.createElement('h2');
          title.textContent = product.title;
          title.className = 'text-lg font-semibold mb-2';
          title.style.overflow = 'hidden';
          title.style.textOverflow = 'ellipsis';
          title.style.display = '-webkit-box';
          title.style.webkitLineClamp = '2'; // Show only 2 lines
          title.style.webkitBoxOrient = 'vertical';

          const description = document.createElement('p');
          description.textContent = product.description;
          description.className = 'text-sm text-gray-600 mb-2';
          description.style.overflow = 'hidden';
          description.style.textOverflow = 'ellipsis';
          description.style.display = '-webkit-box';
          description.style.webkitLineClamp = '4'; // Show only 4 lines
          description.style.webkitBoxOrient = 'vertical';

          const price = document.createElement('p');
          price.textContent = `$${product.price}`;
          price.className = 'text-lg text-gray-800';

          innerDiv.appendChild(img);
          innerDiv.appendChild(title);
          innerDiv.appendChild(description);
          innerDiv.appendChild(price);

          card.appendChild(innerDiv);
          container.appendChild(card);
      });
  })
  .catch(error => console.error('Error fetching products:', error));
});