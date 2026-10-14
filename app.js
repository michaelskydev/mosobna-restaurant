/* ==========================================================================
   Mosobna Bar & Restaurant - Official Interactive Menu & Universal Photo Manager
   ========================================================================== */

// Restaurant Details & Operating Hours Config
const RESTAURANT_DATA = {
  name: "Mosobna Bar & Restaurant",
  address: "6249 Quinpool Rd, Halifax, NS B3L 1A4",
  phone: "902-4209159",
  email: "mosobnabar@gmail.com",
  hours: [
    { day: "Monday", open: "10:30", close: "22:30", display: "10:30 AM – 10:30 PM", dayIdx: 1 },
    { day: "Tuesday", open: "10:30", close: "22:30", display: "10:30 AM – 10:30 PM", dayIdx: 2 },
    { day: "Wednesday", open: "10:30", close: "22:30", display: "10:30 AM – 10:30 PM", dayIdx: 3 },
    { day: "Thursday", open: "10:30", close: "22:30", display: "10:30 AM – 10:30 PM", dayIdx: 4 },
    { day: "Friday", open: "10:30", close: "23:00", display: "10:30 AM – 11:00 PM", dayIdx: 5 },
    { day: "Saturday", open: "10:30", close: "22:30", display: "10:30 AM – 10:30 PM", dayIdx: 6 },
    { day: "Sunday", open: "12:00", close: "22:30", display: "12:00 PM – 10:30 PM", dayIdx: 0 }
  ]
};

// Official Menu Dataset
const MENU_ITEMS = [
  // --- MAINS ---
  {
    id: "dish-red-tibs",
    name: "RED TIBS",
    category: "mains",
    price: "$17.25",
    description: "Spicy, beef, stew cooked with berbere, onions, pepper and garlic.",
    image: "images/mosobna/RED TIBS.webp",
    tags: ["Spicy", "Beef", "Mains"]
  },
  {
    id: "dish-white-tibs",
    name: "WHITE TIBS",
    category: "mains",
    price: "$17.30",
    description: "Mild beef stew cooked onions, pepper, tomato, garlic.",
    image: "images/mosobna/WHITE TIBS.webp",
    tags: ["Mild", "Beef", "Mains"]
  },
  {
    id: "dish-meat-ftift",
    name: "MEAT FTIFT",
    category: "mains",
    price: "$17.10",
    description: "Spicy, beef, stew tossed with injera.",
    image: "images/mosobna/menu.jpg",
    tags: ["Spicy", "Beef", "Injera Tossed"]
  },
  {
    id: "dish-qunata-firfir",
    name: "QUNATA FIRFIR",
    category: "mains",
    price: "$17.10",
    description: "Dried beef spicy stew tossed injera.",
    image: "images/mosobna/Qunata Firfir.jpg",
    tags: ["Dried Beef", "Spicy", "Traditional"]
  },
  {
    id: "dish-derho",
    name: "DERHO",
    category: "mains",
    price: "$17.00",
    description: "Slow cooked spicy chicken stew.",
    image: "images/mosobna/menu.jpg",
    tags: ["Chicken", "Spicy", "Slow Cooked"]
  },
  {
    id: "dish-shekla-tibs",
    name: "SHEKLA TIBS*",
    category: "mains",
    price: "$19.50",
    description: "Lamb stir-fry with bell peppers, onions and special Eritrean seasonings.",
    image: "images/mosobna/menu.jpg",
    tags: ["Chef Special", "Lamb", "Clay Skillet"]
  },
  {
    id: "dish-key-wot",
    name: "KEY WOT*",
    category: "mains",
    price: "$17.00",
    description: "Bold and spicy beef stew with a berbere spice blend.",
    image: "images/mosobna/menu.jpg",
    tags: ["Berbere", "Beef Stew", "Spicy"]
  },
  {
    id: "dish-lamb-tibs",
    name: "LAMB TIBS / RED / WHITE",
    category: "mains",
    price: "$18.50",
    description: "Lamb stir-fry with bell peppers, onions and special Eritrean seasonings",
    image: "images/mosobna/Lamb Tibs (Red White).webp",
    tags: ["Lamb", "Red/White"]
  },
  {
    id: "dish-shero",
    name: "SHERO",
    category: "mains",
    price: "$16.00",
    description: "Highly, seasoned, chickpeas cooked with onions, garlic and green chili.",
    image: "images/mosobna/menu.jpg",
    tags: ["Chickpeas", "Vegetarian", "Seasoned"]
  },
  {
    id: "dish-tumtumo",
    name: "TUMTUMO",
    category: "mains",
    price: "$16.00",
    description: "Red lentil stew Spicy, Onions, tomato, garlic green chili.",
    image: "images/mosobna/TUMTUMO.webp",
    tags: ["Red Lentil", "Spicy", "Vegan"]
  },
  {
    id: "dish-veggie-platter",
    name: "VEGGIE PLATTER",
    category: "mains",
    price: "$17.25",
    description: "Combination of spicy red lentil ,split pea cabbage collard green , mixed veggie and salad.",
    image: "images/mosobna/VEGGIE PLATTER.webp",
    tags: ["Combination", "Vegan", "Feast"]
  },
  {
    id: "dish-pasta",
    name: "PASTA",
    category: "mains",
    price: "$16.00",
    description: "Pasta with tomato sauce, meat sauce, vegetables and meat.",
    image: "images/mosobna/menu.jpg",
    tags: ["Pasta", "Meat Sauce"]
  },

  // --- BREAKFAST ---
  {
    id: "dish-kiccha-fitfit",
    name: "KICCHA FITFIT",
    category: "breakfast",
    price: "$16.00",
    description: "Traditional breakfast dish in Eritrea flatbread tossed in a rich, warm mixture of spiced butter, side yogurt",
    image: "images/mosobna/KICCHA FITFIT.webp",
    tags: ["Eritrean Breakfast", "Spiced Butter", "Yogurt"]
  },
  {
    id: "dish-scrambled-eggs",
    name: "SCRAMBLED EGGS",
    category: "breakfast",
    price: "$16.00",
    description: "With tomatoes, onions, mushrooms, green chili and garlic.",
    image: "images/mosobna/SCRAMBLED EGGS.jpg",
    tags: ["Breakfast", "Eggs", "Veggies"]
  },
  {
    id: "dish-shakshuka",
    name: "SHAKSHUKA",
    category: "breakfast",
    price: "$16.00",
    description: "Spicy tomatoes, onions, red pepper, mushrooms, garlic, green chili and two eggs.",
    image: "images/mosobna/SHAKSHUKA.webp",
    tags: ["Spicy", "Two Eggs", "Breakfast"]
  },
  {
    id: "dish-ful",
    name: "FUL",
    category: "breakfast",
    price: "$16.00",
    description: "Fava Beans cooked, served with boiled eggs and fresh tomato cilantro salad",
    image: "images/mosobna/FUL.webp",
    tags: ["Fava Beans", "Boiled Eggs", "Salad"]
  },
  {
    id: "dish-eggs-sandwich",
    name: "EGGS SANDWICH",
    category: "breakfast",
    price: "$8.00",
    description: "Panino Enkulal: bread, butter, garlic, tomato, onions, cucumber, green chili and salad.",
    image: "images/mosobna/EGGS SANDWICH.jpg",
    tags: ["Panino Enkulal", "Sandwich", "Value"]
  },

  // --- HOT DRINKS & COLD DRINKS ---
  {
    id: "drink-shahi",
    name: "SHAHI / TEAPOT",
    category: "drinks",
    price: "$2.00",
    description: "Herbal tea blend with more than five different spices.",
    image: "images/mosobna/SHAHI.jpg",
    tags: ["Hot Tea", "Spiced"]
  },
  {
    id: "drink-buna-jebena",
    name: "BUNA / JEBENA",
    category: "drinks",
    price: "$3.00",
    description: "Traditional Eritrean coffee.",
    image: "images/mosobna/images.jpg",
    tags: ["Traditional Coffee", "Eritrean"]
  },
  {
    id: "drink-coffee-cappuccino",
    name: "COFFEE / CAPPUCCINO",
    category: "drinks",
    price: "$3.50",
    description: "Coffee / Cappuccino.",
    image: "images/mosobna/images (1).jpg",
    tags: ["Coffee", "Cappuccino"]
  },
  {
    id: "drink-bottled-water",
    name: "BOTTLED WATER*",
    category: "drinks",
    price: "$2.00",
    description: "Pure bottled drinking water.",
    image: "images/mosobna/dasani-water-049000026566-64_600.avif",
    tags: ["Bottled Water"]
  },
  {
    id: "drink-smoothie",
    name: "FRESH MANGO RASPBERRY SMOOTHIE",
    category: "drinks",
    price: "$4.50",
    description: "Mango and raspberry blended with lime juice and ice",
    image: "images/mosobna/smoothie.jpg",
    tags: ["Fresh Fruit", "Smoothie"]
  },
  {
    id: "drink-soft-drinks",
    name: "SOFT DRINKS",
    category: "drinks",
    price: "$2.50",
    description: "Selection of cold soft drinks.",
    image: "images/mosobna/soft-drinks-375ml-200041_800x.jpg",
    tags: ["Cold Drink"]
  },

  // --- ALCOHOL ---
  {
    id: "alc-beer",
    name: "BEER",
    category: "alcohol",
    price: "$4.50",
    description: "Chilled bottled beer.",
    image: "images/mosobna/DSC_0720.jpg",
    tags: ["Beer", "Cold Alcohol"]
  },
  {
    id: "alc-wine",
    name: "GLASS OF HOUSE WINE",
    category: "alcohol",
    price: "$5.00",
    description: "Glass of red or white house wine.",
    image: "images/mosobna/cellar-tonic-520ml-red-wine-glass-set-of-6-cellar-him-1020843-18503029850184.webp",
    tags: ["Wine", "Glass"]
  },
  {
    id: "alc-whiskey",
    name: "WHISKEY SHOT",
    category: "alcohol",
    price: "$4.00",
    description: "Premium whiskey shot.",
    image: "images/mosobna/images.webp",
    tags: ["Spirits", "Whiskey"]
  },

  // --- ADD-ONS ---
  {
    id: "addon-injera",
    name: "INJERA",
    category: "addons",
    price: "$2.00",
    description: "Roll of injera flatbread.",
    image: "images/mosobna/injera-sq.jpg",
    tags: ["Add-On", "Flatbread"]
  }
];

// State Management
let activeCategory = "all";
let searchQuery = "";
let customImages = {};
let currentUploadTargetId = null;

try {
  customImages = JSON.parse(localStorage.getItem("mosobna_custom_images") || "{}");
} catch(err) {
  console.warn("Could not read custom images from localStorage:", err);
  customImages = {};
}

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderHoursList();
  renderMenuGrid();
  setupEventListeners();
  applyCustomImagesToExistingCards();
  initGlobalFilePicker();
});

// Initialize Global File Input
function initGlobalFilePicker() {
  let picker = document.getElementById("global-file-picker");
  if (!picker) {
    picker = document.createElement("input");
    picker.type = "file";
    picker.id = "global-file-picker";
    picker.accept = "image/*";
    picker.style.display = "none";
    document.body.appendChild(picker);
  }

  picker.addEventListener("change", function(e) {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file || !currentUploadTargetId) return;

    showToast("Processing photo...");

    compressAndResizeImage(file, 900, 675, 0.82, function(compressedBase64) {
      try {
        customImages[currentUploadTargetId] = compressedBase64;
        localStorage.setItem("mosobna_custom_images", JSON.stringify(customImages));

        // Update DOM element directly
        const card = document.getElementById(currentUploadTargetId);
        if (card) {
          const imgEl = card.querySelector(".card-img-wrapper img");
          if (imgEl) imgEl.src = compressedBase64;
        }

        renderMenuGrid();
        showToast("Photo updated successfully!");
      } catch(err) {
        console.error("Storage error:", err);
        showToast("Photo updated on screen!");
      }
    });
  });
}

// Programmatically trigger photo upload for any card ID
function triggerPhotoUpload(itemId) {
  currentUploadTargetId = itemId;
  const picker = document.getElementById("global-file-picker");
  if (picker) {
    picker.value = ""; // Reset value so re-selecting same file triggers change event
    picker.click();
  }
}

// Apply any saved custom uploaded images to static or rendered cards
function applyCustomImagesToExistingCards() {
  Object.keys(customImages).forEach(itemId => {
    const card = document.getElementById(itemId);
    if (card && customImages[itemId]) {
      const imgEl = card.querySelector(".card-img-wrapper img");
      if (imgEl) imgEl.src = customImages[itemId];
    }
  });
}

// Render Operating Hours List
function renderHoursList() {
  const hoursContainer = document.getElementById("hours-list-container");
  if (!hoursContainer) return;

  const currentDayIdx = new Date().getDay();

  hoursContainer.innerHTML = RESTAURANT_DATA.hours.map(item => {
    const isToday = item.dayIdx === currentDayIdx;
    return `
      <li class="hours-item ${isToday ? 'today' : ''}">
        <span class="hours-day">
          ${item.day} ${isToday ? '<span style="font-size: 0.75rem; color: var(--amber-gold); margin-left: 6px;">(Today)</span>' : ''}
        </span>
        <span class="hours-time">${item.display}</span>
      </li>
    `;
  }).join("");
}

// Render Menu Cards
function renderMenuGrid() {
  const gridElement = document.getElementById("menu-grid");
  if (!gridElement) return;

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filteredItems.length === 0) {
    gridElement.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No dishes found matching your search.</p>
        <button onclick="resetMenuFilters()" class="btn-outline" style="margin-top: 1rem;">Reset Filters</button>
      </div>
    `;
    return;
  }

  gridElement.innerHTML = filteredItems.map(item => {
    const hasCustomImg = !!customImages[item.id];
    const imgSrc = hasCustomImg ? customImages[item.id] : item.image;

    return `
      <article class="menu-card" id="${item.id}">
        <div class="card-img-wrapper">
          <img src="${imgSrc}" alt="${item.name}" loading="lazy" id="img-${item.id}">
          <span class="card-badge">${getCategoryName(item.category)}</span>
          
          <div style="position: absolute; bottom: 10px; right: 10px; display: flex; gap: 6px; z-index: 25;">
            ${hasCustomImg ? `
              <button class="img-upload-btn" onclick="resetSingleImage('${item.id}')" title="Revert to default dish photo" style="background: rgba(239, 68, 68, 0.85); color: #fff;">
                Reset
              </button>
            ` : ''}
            <button class="img-upload-btn" onclick="triggerPhotoUpload('${item.id}')" title="Click to upload your custom photo for ${item.name}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
              ${hasCustomImg ? 'Change' : 'Upload Photo'}
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-header">
            <h3 class="card-title">${item.name}</h3>
            <span class="card-price">${item.price}</span>
          </div>
          <p class="card-description">${item.description}</p>
          <div class="card-tags">
            ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function getCategoryName(cat) {
  switch (cat) {
    case 'mains': return 'Mains';
    case 'breakfast': return 'Breakfast';
    case 'drinks': return 'Hot & Cold Drinks';
    case 'alcohol': return 'Alcohol';
    case 'addons': return 'Add-Ons';
    default: return 'Specialty';
  }
}

// Resizes and compresses uploaded image using Canvas to avoid LocalStorage quota limits
function compressAndResizeImage(file, maxWidth, maxHeight, quality, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
      callback(compressedDataUrl);
    };
    img.onerror = function() {
      showToast("Error reading image file.");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function resetSingleImage(itemId) {
  delete customImages[itemId];
  try {
    localStorage.setItem("mosobna_custom_images", JSON.stringify(customImages));
  } catch(e) {}
  renderMenuGrid();
  showToast("Photo reset to default.");
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: rgba(224, 96, 32, 0.95);
      color: #fff;
      padding: 12px 24px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 0.9rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      z-index: 9999;
      transition: all 0.3s ease;
      backdrop-filter: blur(8px);
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 2500);
}

// Setup Event Listeners
function setupEventListeners() {
  // Category tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      tabBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      activeCategory = e.target.dataset.category;
      renderMenuGrid();
    });
  });

  // Search input
  const searchInput = document.getElementById("menu-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMenuGrid();
    });
  }
}

function resetMenuFilters() {
  activeCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("menu-search-input");
  if (searchInput) searchInput.value = "";
  
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(b => {
    b.classList.toggle("active", b.dataset.category === "all");
  });

  renderMenuGrid();
}
