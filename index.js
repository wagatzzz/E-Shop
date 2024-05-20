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
    
    
    
    
    const exploreButtons = document.getElementsByClassName('explore');
    for (let i = 0; i < exploreButtons.length; i++) {
        exploreButtons[i].addEventListener('click', clickexplorebtn);
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
                img.style.width = '150px'; // 
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
                img.style.width = '150px'; // 
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
                img.style.width = '150px'; // 
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
                img.style.width = '150px'; // 
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
                img.style.width = '150px'; // 
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
    
    
    
    
    // Function to filter products based on search input
    function filterProducts(products, searchText) {
        return products.filter(product => {
            // You can adjust this condition as per your search requirements
            return product.title.toLowerCase().includes(searchText.toLowerCase());
        });
    }
    function getCurrentPage() {
        // Assuming you're extracting the current page from the URL
        const url = window.location.href;
        const currentPageWithExtension = url.substring(url.lastIndexOf("/") + 1);
        const currentPage = currentPageWithExtension.split('.')[0]; // Extract page name without extension
    
        let containerClass; // Define containerClass here
        
        if (currentPage === 'all') {
            containerClass = '.all-product-container';
        } else if (currentPage === 'jewellery') {
            containerClass = '.jewelery';
        } else if (currentPage === 'men') {
            containerClass = '.men';
        }  else if (currentPage === 'women') {
            containerClass = '.women';
        } 
        
        let container; // Define container here
    
        if (containerClass) { // Check if containerClass is defined
            // Select the container after containerClass is assigned a value
            container = document.querySelector(containerClass);
    
            // Check if container exists before manipulating its innerHTML
            if (container) {
                container.innerHTML = ''; // Clear existing product cards
            } else {
                console.error('Container element not found for class:', containerClass);
            }
        } else {
            console.error('Container class not defined for current page:', currentPage);
        }
    
        return { currentPage, container };
    }
    
    
    // Function to display filtered products
    function displayFilteredProducts(filteredProducts, container) {
        filteredProducts.forEach(product => {
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
            img.style.width = '150px'; // 
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
    }
    
    // Function to handle search button click
    function handleSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchText = searchInput.value.trim();
    
        // Check if search input is empty
        if (!searchText) {
            alert('Please enter a search keyword.');
            return; // Exit function early
        }
    
        // Fetch products from API
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => {
                // Filter products based on search text
                const filteredProducts = filterProducts(products, searchText);
    
                // Check if there are no search results
                if (filteredProducts.length === 0) {
                    alert('No products found matching the search criteria.');
                    return; // Exit function early
                }
    
                // Get current page container
                const { container } = getCurrentPage();
    
                // Display filtered products
                displayFilteredProducts(filteredProducts, container); // Pass the container to displayFilteredProducts
            })
            .catch(error => console.error('Error fetching products:', error));
    }
    
    // Attach event listener to search button
    document.getElementById('searchButton').addEventListener('click', handleSearch);
    
    
    
    
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        // Update cart count based on the number of items stored in local storage
        let cartCount = JSON.parse(localStorage.getItem('cartItems'))?.length || 0;
    
        // Get references to all count display elements by class
        const cartCounts = document.getElementsByClassName('cartCount');
    
        // Set initial count display for all elements
        for (let i = 0; i < cartCounts.length; i++) {
            cartCounts[i].textContent = cartCount;
        }
    
        // Get references to all buttons by class
        const addToCartBtns = document.getElementsByClassName('addToCartBtn');
    
        // Add event listener to all buttons
        for (let i = 0; i < addToCartBtns.length; i++) {
            const btn = addToCartBtns[i];
    
            // Add event listener to the button
            btn.addEventListener('click', () => {
                // Get the cart items stored in local storage or initialize as empty array if not present
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
                // Get the product details for the clicked button
                const title = btn.parentElement.querySelector('.productTitle').textContent;
                const price = btn.parentElement.querySelector('.productPrice').textContent;
    
                // Add the new item to the cart items array
                cartItems.push({ title, price });
    
                // Store the updated cart items array in local storage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
                // Update cart count
                cartCount = cartItems.length;
    
                // Update count display for all elements
                for (let j = 0; j < cartCounts.length; j++) {
                    cartCounts[j].textContent = cartCount;
                }
    
                // Optionally, you can also update the cart count in local storage
                localStorage.setItem('cartCount', cartCount);
            });
        }
    
        // Add event listener to the cart icon
        document.getElementById('cartIcon').addEventListener('click', () => {
            // Navigate to cart.html
            window.location.href = 'cart.html';
        });
    
         
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Get references to the "Add to Cart" button and product details
        const addToCartBtn = document.getElementById('addToCartBtn');
        const title = document.getElementById('productTitle').textContent;
        const price = document.getElementById('productPrice').textContent;
    
        // Add event listener to the "Add to Cart" button
        addToCartBtn.addEventListener('click', () => {
            // Get the cart items stored in local storage or initialize as empty array if not present
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
            // Add the new item to the cart items array
            cartItems.push({ title, price });
    
            // Store the updated cart items array in local storage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
            // Update the cart count on the icon
            const cartCount = cartItems.length;
            const cartCounts = document.getElementsByClassName('cartCount');
            for (let i = 0; i < cartCounts.length; i++) {
                cartCounts[i].textContent = cartCount;
            }
    
            // Optionally, you can also update the cart count in local storage
            localStorage.setItem('cartCount', cartCount);
        });
    });
    
    
    document.addEventListener('DOMContentLoaded', function() {
        // Get reference to the container for displaying cart items
        const cartContainer = document.getElementById('cartItems');
    
        // Function to calculate totals
        function calculateTotals(cartItems) {
            let subtotal = 0;
    
            // Calculate subtotal
            cartItems.forEach(item => {
                subtotal += parseFloat(item.price.replace('$', ''));
            });
    
            // Calculate tax
            const taxRate = 0.1; // 10% tax
            const tax = subtotal * taxRate;
    
            // Calculate grand total
            const grandTotal = subtotal + tax;
    
            return { subtotal, tax, grandTotal };
        }
    
        // Function to update totals display
        function updateTotalsDisplay(totals) {
            document.getElementById('totalPrice').textContent = '$' + totals.subtotal.toFixed(2);
            document.getElementById('tax').textContent = '$' + totals.tax.toFixed(2);
            document.getElementById('grandTotal').textContent = '$' + totals.grandTotal.toFixed(2);
        }
    
        // Add event listener to the "-" buttons
        cartContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('removeItemBtn')) {
                // Get the index of the item to be removed
                const index = parseInt(event.target.dataset.index);
    
                // Get the cart items from local storage
                let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
                // Remove the item from the cart items array
                cartItems.splice(index, 1);
    
                // Update the cart items array in local storage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
                // Remove the item from the table
                event.target.closest('tr').remove();
    
                // Update totals display
                const totals = calculateTotals(cartItems);
                updateTotalsDisplay(totals);
    
                // Update cart count in local storage
                const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
                localStorage.setItem('cartCount', Math.max(cartCount - 1, 0));
            }
        });
    
        // Get the cart items stored in local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Iterate over each cart item and generate HTML to display it
        cartItems.forEach((item, index) => {
            // Create HTML elements for each cart item
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="py-4 px-4 border-b border-gray-200">${item.title}</td>
                <td class="py-4 px-4 border-b border-gray-200">${item.price}</td>
                <td class="py-4 px-4 border-b border-gray-200">
                    <button class="bg-red-500 text-white py-1 px-2 rounded-md removeItemBtn" data-index="${index}">-</button>
                </td>
            `;
    
            // Append the cart item HTML to the container
            cartContainer.appendChild(tr);
        });
    
        // Initial calculation and display of totals
        const totals = calculateTotals(cartItems);
        updateTotalsDisplay(totals);
    });
    