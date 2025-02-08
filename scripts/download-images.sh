#!/bin/bash

# Create the public directory if it doesn't exist
mkdir -p public

# Download hero image
curl -o public/hero-property.jpg "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"

# Download property images
curl -o public/property-1.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
curl -o public/property-2.jpg "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
curl -o public/property-3.jpg "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop" 