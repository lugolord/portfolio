import styles from './index.module.css';
import React, { useState } from 'react';
import wallpaper from '../../assets/wallpaper.jpg';
import { useSpring, animated } from 'react-spring';

export default function Header() {

  const [flip, setFlip] = useState(false);

  const props = useSpring({ 
    to: { y: 10 }, 
    from: { y: -10 }, 
    reset: true, 
    reverse: flip, 
    config: { duration: 1000 },  
    onRest: () => setFlip(!flip)
  });

  return (
    <header id='home'>
      <nav className={styles.navbar}>
        <a href="#projects">Proyectos</a>
        <a href="#studies">Estudios</a>
      </nav>
      <div className={styles.wallpaper} style={{ backgroundImage: `url(${wallpaper})`}}>
        <animated.p style={props}>⬇Scroll</animated.p>
      </div>
    </header>
  );

}
