 // Optional: Add dynamic interactions
 document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('button');
    searchButton.addEventListener('click', () => {
        alert('Search functionality will be implemented soon!');
    });
});
// Property Data
const properties = [
    {
        name: "Selway Apartments",
        address: "25-40 31st St, Queens, NY",
        image: "https://storage.googleapis.com/a1aa/image/PxFS6aaylzpQKVAfDFICuTKuxrvfcuAn1gO0RFlOSmuoS24TA.jpg",
        type: "FOR SALE",
        beds: 3,
        baths: 1,
        garage: 1,
        sqft: 1200,
        price: 3900
    },
    {
        name: "Arlo Apartment",
        address: "510-594 E 7th St, NY",
        image: "https://storage.googleapis.com/a1aa/image/MrXWwVeImWU0BqjuEh1lC61s6ZyzcWoLAbBMsbnx62oRJb8JA.jpg",
        type: "FOR RENT",
        beds: 4,
        baths: 2,
        garage: 1,
        sqft: 2500,
        price: 1500
    },
    {
        name: "Gorgeous Villa Bay",
        address: "4111 14th St, NY",
        image: "https://storage.googleapis.com/a1aa/image/4ojnWA4ptkIuL1CdMeeFgBtJbnfWWKU8DcTHJF6KP17MlsxnA.jpg",
        type: "FOR RENT",
        beds: 3,
        baths: 2,
        garage: 1,
        sqft: 2200,
        price: 4000
    },
    {
        name: "North Dillard Street",
        address: "1239 7th Ave, NY",
        image: "https://storage.googleapis.com/a1aa/image/QXFH5Mmn0cLXINK27LjQfmgDVIDzSfy3Qj1KoceWS2fUKZjPB.jpg",
        type: "FOR RENT",
        beds: 2,
        baths: 1,
        garage: 1,
        sqft: 1800,
        price: 800
    }
];

function createPropertyCards() {
    const container = document.getElementById('propertyContainer');
    const pagination = document.getElementById('pagination');
    
    properties.forEach((property, index) => {
        const card = document.createElement('div');
        card.classList.add(
            'property-card', 
            'rounded-2xl', 
            'overflow-hidden', 
            'transform', 
            'transition'
        );

        card.innerHTML = `
            <div class="relative property-image">
                <img 
                    src="${property.image}" 
                    alt="${property.name}" 
                    class="w-full h-56 object-cover"
                >
                <div class="absolute top-4 left-4 feature-tag text-xs font-semibold px-3 py-2 rounded-full">
                    FEATURED
                </div>
                <div class="absolute top-4 right-4 bg-white bg-opacity-80 text-blue-600 text-xs font-semibold px-3 py-2 rounded-full">
                    ${property.type}
                </div>
            </div>
            <div class="p-6">
                <h2 class="text-2xl font-semibold text-blue-800 mb-2">
                    ${property.name}
                </h2>
                <p class="text-blue-600 text-sm mb-4">
                    ${property.address}
                </p>
                <div class="grid grid-cols-2 gap-2 mb-4 text-blue-700">
                    <div class="flex items-center text-sm">
                        <i class="fas fa-bed mr-2"></i>${property.beds} beds
                    </div>
                    <div class="flex items-center text-sm">
                        <i class="fas fa-bath mr-2"></i>${property.baths} baths
                    </div>
                    <div class="flex items-center text-sm">
                        <i class="fas fa-warehouse mr-2"></i>${property.garage} Garage
                    </div>
                    <div class="flex items-center text-sm">
                        <i class="fas fa-ruler-combined mr-2"></i>${property.sqft} sqft
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <span class="gradient-text text-2xl font-bold">
                        ${property.type === 'FOR SALE' ? '$' + property.price : '$' + property.price + '/mo'}
                    </span>
                    <div class="flex items-center text-blue-600 text-lg">
                        <i class="fas fa-heart mr-4 hover:text-red-500 cursor-pointer transition"></i>
                        <i class="fas fa-share-alt hover:text-blue-500 cursor-pointer transition"></i>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);

        // Create pagination dots
        const dot = document.createElement('div');
        dot.classList.add(
            'pagination-dot', 
            'w-3', 
            'h-3', 
            'rounded-full'
        );
        
        if (index === 0) {
            dot.classList.add('active');
        }

        pagination.appendChild(dot);
    });
}

// Initialize cards on page load
document.addEventListener('DOMContentLoaded', createPropertyCards);
document.addEventListener('DOMContentLoaded', () => {
    const cardAnimations = document.querySelectorAll('.card-animation');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 200);
            }
        });
    }, observerOptions);

    cardAnimations.forEach(card => {
        cardObserver.observe(card);
    });

    // GSAP Scrolling Animation
    gsap.utils.toArray('.card-animation').forEach((card, index) => {
        gsap.fromTo(card, 
            { 
                opacity: 0, 
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1, 
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power3.out"
            }
        );
    });
});
// Optional JavaScript for additional interactivity
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('animate-pulse');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('animate-pulse');
    });
});