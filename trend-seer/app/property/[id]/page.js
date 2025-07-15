import { getAllProperties, getPropertyById } from '../../data/sampleProperties';
import PropertyDetail from './propertyDetail';

export async function generateStaticParams() {
  const properties = getAllProperties();
  
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

export default async function PropertyDetailPage({ params }) {
  const resolvedParams = await params;
  const property = getPropertyById(parseInt(resolvedParams.id));
  
  if (property) {
    // Add extra details for the property detail page
    property.images = [
      property.images[0],
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3935325/pexels-photo-3935325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ];
    
    // Add additional details
    property.description = "This stunning property offers luxurious living with breathtaking views. Featuring high-end finishes and spacious rooms, this home combines modern design with comfortable living. The floor-to-ceiling windows fill the space with natural light and offer spectacular panoramic views of the surrounding area.";
    
    property.features = [
      'Gourmet kitchen with high-end appliances',
      'Floor-to-ceiling windows with panoramic views',
      'Smart home technology throughout',
      'Private balcony/terrace',
      'Hardwood floors',
      'Walk-in closets',
      'Central air conditioning',
      'In-unit laundry',
      'Fitness center access',
      'Secured parking garage'
    ];
    
    property.agent = {
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      phone: '(555) 123-4567',
      email: 'sarah.j@propertypro.com',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    };
    
    property.yearBuilt = 2020;
    property.parking = 'Garage - 2 spaces';
    property.heating = 'Central';
    property.cooling = 'Central';
    property.lotSize = '0.25 acres';
    property.amenities = [
      'Swimming Pool',
      'Fitness Center',
      'Concierge Service',
      'Rooftop Terrace',
      'Pet-Friendly',
      'Parking Garage',
      'Security System',
      'High-Speed Internet',
      'Air Conditioning',
      'Balcony/Patio'
    ];
    property.garage = '2 Car Garage';
    property.status = 'for sale';
    property.createdAt = '2023-10-15';
    property.owner = {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 987-6543'
    };
  }
  
  return <PropertyDetail property={property} />;
}