import { useRef } from "react";
import useScrollAnimation from "../Animations/useScrollAnimation";
import "./H-Bannar.css";

export default function Banner() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

  // Hero section elements animation (triggered smoothly right away)
  useScrollAnimation(heroRef, {
    selector: 'h1, p, .learn-more-btn',
    y: 40,
    duration: 1.2,
    stagger: 0.2,
    start: 'top 95%'
  });

  // Gallery cards progressive scroll-trigger animation
  useScrollAnimation(galleryRef, {
    selector: '.gallery-card',
    y: 60,
    duration: 1.2,
    stagger: 0.25,
    start: 'top 80%'
  });

  return (
    <main className="banner-main-container">
      
      {/* Hero / Main Banner Section */}
      <section className="hero-section">
        <div className="hero-content" ref={heroRef}>
          <h1>Lorem<br />Ipsum Dolor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Sed in gravida dolor, et tempor tortor. Duis a nisi<br />
            augue cursus faucibus.
          </p>
          <button className="learn-more-btn">LEARN MORE</button>
        </div>
      </section>

      {/* Gallery Cards Section */}
      <section className="gallery-section">
        <h3 className="gallery-heading">Gallery</h3>
        <div className="gallery-grid" ref={galleryRef}>
          
          <div className="gallery-card">
            <div className="card-image-box">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" 
                alt="Interior Design 1" 
              />
            </div>
            <p className="card-caption">Lorem Ipsum Dolor.</p>
          </div>

          <div className="gallery-card">
            <div className="card-image-box">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                alt="Interior Design 2" 
              />
            </div>
            <p className="card-caption">Lorem Ipsum Dolor.</p>
          </div>

          <div className="gallery-card">
            <div className="card-image-box">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80" 
                alt="Interior Design 3" 
              />
            </div>
            <p className="card-caption">Lorem Ipsum Dolor.</p>
          </div>

        </div>
      </section>

    </main>
  );
}