import styles from './index.module.css';
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function WelcomeSlide() {

  const [flip, setFlip] = useState(false);

  const props = useSpring({ 
    to: { x: 10 }, 
    from: { x: -10 }, 
    reset: true, 
    reverse: flip, 
    config: { duration: 1000 },  
    onRest: () => setFlip(!flip)
  });

  return (
    <>
      <div className={styles.greeting}>
        <h2>Hola, soy Luis👋</h2>
        <h3>Desarrollador front-end</h3>
        <p>Me gusta mantener las cosas simples, como puedes ver.</p>
        <animated.p className={styles.slide} style={props}>⬅Desliza</animated.p>
      </div>
      <img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Tanned" alt="avatar" className={styles.avatar}/>
    </>
  );
}