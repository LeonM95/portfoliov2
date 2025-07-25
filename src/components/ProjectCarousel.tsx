import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type ProjectCarouselProps = {
  images: string[];
};

export default function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider h-48">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img
            src={src}
            alt={`Project image ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
