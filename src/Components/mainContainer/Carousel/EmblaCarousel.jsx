import { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex, searchByIndex } from "./media/index.js";
import "./emblaCarousel.css";

const EmblaCarousel = ({ slides, searchValue }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    // Function to automatically scroll to the next slide
    const autoScroll = () => {
      if (!embla) return;
      scrollNext();
    };

    // Set interval for automatic scrolling
    const intervalId = setInterval(autoScroll, 2000); // Adjust the interval time here (in milliseconds)

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [embla, scrollNext]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div
                className="embla__slide__inner"
                onClick={() => {
                  searchValue(searchByIndex(index));
                }}
              >
                <img
                  className="embla__slide__img"
                  src={mediaByIndex(index)}
                  alt="A cool cat."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
