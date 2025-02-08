#!/bin/bash

# Create the necessary directories
mkdir -p public/images/properties

# Download property images
curl -o public/images/properties/property-1.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/properties/property-2.jpg "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
curl -o public/images/properties/property-3.jpg "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/properties/property-4.jpg "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/properties/property-5.jpg "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
curl -o public/images/properties/property-6.jpg "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"

# Download placeholder image
curl -o public/images/properties/placeholder-property.jpg "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop" 