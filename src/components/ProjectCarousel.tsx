import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  images: string[];
};

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const goPrev = () => {
    instanceRef.current?.prev();
  };

  const goNext = () => {
    instanceRef.current?.next();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => clearInterval(interval); // to clear up
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-60">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Project image ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-0.5 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-0.5 shadow-md"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
