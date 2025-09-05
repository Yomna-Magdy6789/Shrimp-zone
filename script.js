// Check if we are on the menu page
const menuItemsContainer = document.getElementById('menu-items-container');

if (menuItemsContainer) {
    // Function to fetch menu items from JSON Server
    const fetchMenuItems = async () => {
        try {
            // The URL for our JSON Server endpoint
            const response = await fetch('db.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const menuItems = data.menu_items;
            renderMenuItems(menuItems);
        } catch (error) {
            console.error('Error fetching menu items:', error);
            menuItemsContainer.innerHTML = '<p>حدث خطأ أثناء تحميل القائمة. الرجاء المحاولة مرة أخرى لاحقاً.</p>';
        }
    };

    // Function to render menu items on the page
    const renderMenuItems = (items) => {
        menuItemsContainer.innerHTML = ''; // Clear previous content

        items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            
            menuItemDiv.innerHTML = `
                <img src="${item.image_url}" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <span class="item-price">${item.price}</span>
                </div>
            `;
            menuItemsContainer.appendChild(menuItemDiv);
        });
    };

    // Call the function when the page loads
    fetchMenuItems();

}
