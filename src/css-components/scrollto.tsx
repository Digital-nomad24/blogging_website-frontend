// Section1.tsx
import React, {  ReactElement } from 'react';

interface Section1Props {
  scrollToRef: React.RefObject<HTMLDivElement>;
}

const Section1: React.FC<Section1Props> = ({ scrollToRef }): ReactElement => {
  const scrollToSection = (): void => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <button onClick={scrollToSection}>New Blog</button>
    </div>
  );
};

export default Section1;
