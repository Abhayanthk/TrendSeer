export function getFeaturedProperties() {
      return [
        {
          id: 1,
          title: 'Luxury Penthouse with Panoramic Views',
          price: 2500000,
          location: 'Downtown, New York',
          bedrooms: 3,
          bathrooms: 3.5,
          area: 2800,
          type: 'Penthouse',
          images: [
            'https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 2,
          title: 'Modern Beachfront Villa',
          price: 3800000,
          location: 'Malibu, California',
          bedrooms: 5,
          bathrooms: 4,
          area: 4200,
          type: 'Villa',
          images: [
            'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 3,
          title: 'Elegant City Apartment',
          price: 985000,
          location: 'Chicago, Illinois',
          bedrooms: 2,
          bathrooms: 2,
          area: 1500,
          type: 'Apartment',
          images: [
            'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 4,
          title: 'Contemporary Hillside Mansion',
          price: 4200000,
          location: 'Beverly Hills, California',
          bedrooms: 6,
          bathrooms: 7,
          area: 6500,
          type: 'House',
          images: [
            'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 5,
          title: 'Urban Loft with City Views',
          price: 780000,
          location: 'Seattle, Washington',
          bedrooms: 1,
          bathrooms: 1.5,
          area: 1100,
          type: 'Loft',
          images: [
            'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 6,
          title: 'Waterfront Estate with Private Dock',
          price: 5900000,
          location: 'Miami Beach, Florida',
          bedrooms: 5,
          bathrooms: 6,
          area: 6800,
          type: 'Estate',
          images: [
            'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        }
      ];
    }
    
    export function getAllProperties(filters = {}) {
      const properties = [
        ...getFeaturedProperties(),
        {
          id: 7,
          title: 'Mountain View Cabin',
          price: 650000,
          location: 'Aspen, Colorado',
          bedrooms: 3,
          bathrooms: 2,
          area: 2100,
          type: 'House',
          images: [
            'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 8,
          title: 'Historic Townhouse',
          price: 1250000,
          location: 'Boston, Massachusetts',
          bedrooms: 4,
          bathrooms: 3.5,
          area: 3200,
          type: 'Townhouse',
          images: [
            'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        },
        {
          id: 9,
          title: 'Desert Oasis with Pool',
          price: 1700000,
          location: 'Scottsdale, Arizona',
          bedrooms: 4,
          bathrooms: 3,
          area: 3500,
          type: 'House',
          images: [
            'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          ]
        }
      ];
    
      let filteredProperties = [...properties];
    
      // Apply filters
      if (filters.location) {
        filteredProperties = filteredProperties.filter(property =>
          property.location.toLowerCase().includes(filters.location.toLowerCase())
        );
      }
    
      if (filters.minPrice) {
        filteredProperties = filteredProperties.filter(property =>
          property.price >= parseInt(filters.minPrice)
        );
      }
    
      if (filters.maxPrice) {
        filteredProperties = filteredProperties.filter(property =>
          property.price <= parseInt(filters.maxPrice)
        );
      }
    
      if (filters.bedrooms) {
        filteredProperties = filteredProperties.filter(property =>
          property.bedrooms >= parseInt(filters.bedrooms)
        );
      }
    
      if (filters.type) {
        filteredProperties = filteredProperties.filter(property =>
          property.type.toLowerCase() === filters.type.toLowerCase()
        );
      }
    
      return filteredProperties;
    }
    
    export function getPropertyById(id) {
      const allProperties = [...getFeaturedProperties(), ...getAllProperties()];
      return allProperties.find(property => property.id === parseInt(id));
    }