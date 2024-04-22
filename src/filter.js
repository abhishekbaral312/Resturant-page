 // Get filter buttons
 const allButton = document.getElementById('all');
 const category1Button = document.getElementById('breakfast');
 const category2Button = document.getElementById('maincourse');
 const category3Button = document.getElementById('drinks');
 const category4Button = document.getElementById('dessert');

 // Get filter sections
 const items = document.querySelectorAll('.filter-sections .all');

 // Initially, display all items
 items.forEach((el) => {
     el.style.display = 'block';
 });

 // Add click event listeners to filter buttons
 allButton.addEventListener('click', () => filterItems('all'));
 category1Button.addEventListener('click', () => filterItems('breakfast'));
 category2Button.addEventListener('click', () => filterItems('maincourse'));
 category3Button.addEventListener('click', () => filterItems('drinks'));
 category4Button.addEventListener('click', () => filterItems('dessert'));

 // Function to handle filtering based on selected button
 function filterItems(category) {
     items.forEach((el) => {
         el.style.display = el.classList.contains(category) ? 'block' : 'none';
     });
    
 }
 
