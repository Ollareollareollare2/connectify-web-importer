
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.product-item');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  const products = [
    {
      title: "Minimal Timepiece",
      description: "The essence of time distilled into a pure form. Clean lines and thoughtful details create a timeless accessory.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      color: "bg-neutral-100"
    },
    {
      title: "Sound Essence",
      description: "Premium audio refined to its essential elements. A seamless blend of stunning aesthetics and exceptional sound.",
      image: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      color: "bg-blue-50"
    },
    {
      title: "Elemental Light",
      description: "Illuminate your space with elegance. A lighting solution that combines form and function in perfect harmony.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
      color: "bg-amber-50"
    }
  ];

  return (
    <section id="products" className="section" ref={showcaseRef}>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs md:text-sm font-medium mb-4">
          Our Products
        </span>
        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-balance">
          Beautifully crafted essentials
        </h2>
        <p className="text-foreground/80 text-lg text-balance">
          Products that enrich your everyday experience through thoughtful design and exceptional quality.
        </p>
      </div>
      
      <div className="product-nav mb-12 flex justify-center gap-4">
        {products.map((product, index) => (
          <button
            key={index}
            onClick={() => setActiveProduct(index)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeProduct === index 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {product.title}
          </button>
        ))}
      </div>
      
      <div className="relative overflow-hidden rounded-3xl">
        {products.map((product, index) => (
          <div
            key={index}
            className={cn(
              "product-item absolute inset-0 transition-all duration-700 opacity-0 translate-y-10",
              activeProduct === index ? "z-10 relative opacity-100 translate-y-0" : "pointer-events-none"
            )}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={cn("p-12 md:p-16 flex flex-col justify-center", product.color)}>
                <h3 className="text-2xl md:text-3xl font-medium mb-4">{product.title}</h3>
                <p className="text-foreground/80 mb-8">{product.description}</p>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary font-medium"
                  >
                    <span>Explore product</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="h-80 lg:h-auto relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
