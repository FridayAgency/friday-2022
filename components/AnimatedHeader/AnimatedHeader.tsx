import { useEffect, useRef } from 'react';
import { gsap, Power1, Power4 } from 'gsap';

import styles from './AnimatedHeader.module.scss';
import Link from 'next/link';

/**
 * Animated Header
 * @author Brian Whelan
 *
 * @returns The home page animation animated using Gsap.
 */

export const AnimatedHeader: React.FC = () => {
  const marketingRef = useRef<HTMLSpanElement>(null!);
  const experienceRef = useRef<HTMLSpanElement>(null!);
  const outcomesRef = useRef<HTMLSpanElement>(null!);
  const plusRef = useRef<HTMLSpanElement>(null!);
  const equalsRef = useRef<HTMLSpanElement>(null!);
  const fadeOne = useRef<HTMLParagraphElement>(null!);
  const fadeTwo = useRef<HTMLSpanElement>(null!);
  const fadeThree = useRef<HTMLSpanElement>(null!);
  const fadeFour = useRef<HTMLSpanElement>(null!);
  const fadeFive = useRef<HTMLSpanElement>(null!);
  const fadeSix = useRef<HTMLSpanElement>(null!);
  const fadeSeven = useRef<HTMLSpanElement>(null!);
  const fadeEight = useRef<HTMLSpanElement>(null!);

  const header = useRef<HTMLElement>(null!);
  const arrow = useRef<HTMLDivElement>(null!);

  const handleClick = () => {
    scrollTo({
      top: header.current.offsetHeight - 120,
      behavior: 'smooth',
    });
  };

  /**
   * Set the inital coordinates for the animation for different break points.
   *  Mobile first then Tablet and finally Desktop
   */

  useEffect(() => {
    const marketingCor = {
      start: { x: '-2px', y: '-60px' },
      middle: { x: '0px', y: '-80px' },
    };

    const experienceCor = {
      start: { x: '-1px', y: '30px' },
      middle: { x: '0px', y: '10px' },
    };

    const outcomesCor = {
      start: { x: '-21px', y: '25px' },
      middle: { x: '0px', y: '5px' },
    };

    const plusCor = {
      start: { x: '101px', y: '-260px' },
      middle: { x: '94px', y: '-260px' },
    };
    const equalsCor = {
      start: { x: '103px', y: '-138px' },
      middle: { x: '94px', y: '-138px' },
    };
    if (window.innerWidth > 760 && window.innerWidth < 1200) {
      marketingCor.start.x = '-10px';
      marketingCor.start.y = '-60px';
      marketingCor.middle.x = '-10px';
      marketingCor.middle.y = '-80px';

      experienceCor.start.x = '-10px';
      experienceCor.start.y = '75px';
      experienceCor.middle.x = '-10px';
      experienceCor.middle.y = '55px';

      outcomesCor.start.x = '-50px';
      outcomesCor.start.y = '40px';
      outcomesCor.middle.x = '-50px';
      outcomesCor.middle.y = '20px';

      plusCor.start.x = '240px';
      plusCor.start.y = '-460px';
      plusCor.middle.x = '240px';
      plusCor.middle.y = '-460px';

      equalsCor.start.x = '240px';
      equalsCor.start.y = '-240px';
      equalsCor.middle.x = '240px';
      equalsCor.middle.y = '-240px';
    }

    if (window.innerWidth > 1200) {
      marketingCor.start.x = '-320px';
      marketingCor.start.y = '90px';
      marketingCor.middle.x = '-320px';
      marketingCor.middle.y = '60px';

      experienceCor.start.x = '265px';
      experienceCor.start.y = '30px';
      experienceCor.middle.x = '265px';
      experienceCor.middle.y = '0px';

      outcomesCor.start.x = '485px';
      outcomesCor.start.y = '-150px';
      outcomesCor.middle.x = '485px';
      outcomesCor.middle.y = '-180px';

      plusCor.start.x = '155px';
      plusCor.start.y = '-325px';
      plusCor.middle.x = '155px';
      plusCor.middle.y = '-355px';

      equalsCor.start.x = '560px';
      equalsCor.start.y = '-320px';
      equalsCor.middle.x = '560px';
      equalsCor.middle.y = '-350px';
    }
    gsap.set(marketingRef.current, {
      y: marketingCor.start.y,
      x: marketingCor.start.x,
    });
    gsap.set(plusRef.current, { y: plusCor.start.y, x: plusCor.start.x });
    gsap.set(experienceRef.current, {
      y: experienceCor.start.y,
      x: experienceCor.start.x,
    });
    gsap.set(equalsRef.current, { y: equalsCor.start.y, x: equalsCor.start.x });
    gsap.set(outcomesRef.current, {
      y: outcomesCor.start.y,
      x: outcomesCor.start.x,
    });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(marketingRef.current, {
      y: marketingCor.middle.y,
      opacity: 1,
      duration: 0.2,
      ease: Power1.easeIn,
    })
      .to(
        plusRef.current,
        {
          opacity: 1,
          y: plusCor.middle.y,
          duration: 0.25,
          ease: Power1.easeIn,
        },
        '=+0.4'
      )

      .to(experienceRef.current, {
        opacity: 1,
        y: experienceCor.middle.y,
        duration: 0.25,
      })
      .to(
        equalsRef.current,
        {
          opacity: 1,
          y: equalsCor.middle.y,
          duration: 0.25,
          ease: Power1.easeIn,
        },
        '=+0.4'
      )
      .to(outcomesRef.current, {
        opacity: 1,
        y: outcomesCor.middle.y,
        duration: 0.25,
        ease: Power1.easeIn,
      })
      .to([plusRef.current, equalsRef.current], { opacity: 0, duration: 0.25 }, '=+1')
      .to(
        [marketingRef.current, experienceRef.current, outcomesRef.current],
        { y: 0, x: 0, duration: 2, ease: Power4.easeOut },
        '=+.5'
      )

      .to(fadeOne.current, { opacity: 1, duration: 0.25, ease: Power1.easeIn }, '=+1')
      .to([fadeTwo.current, fadeThree.current], {
        opacity: 1,
        duration: 0.25,
        ease: Power1.easeIn,
      })
      .to([fadeFour.current, fadeFive.current], {
        opacity: 1,
        duration: 0.25,
        ease: Power1.easeIn,
      })
      .to([fadeSix.current, fadeSeven.current], {
        opacity: 1,
        duration: 0.25,
        ease: Power1.easeIn,
      })
      .to(fadeEight.current, {
        opacity: 1,
        duration: 0.25,
        ease: Power1.easeIn,
      });
  }, []);

  return (
    <section ref={header} className={styles.header}>
      <div className={styles.animation}>
        <p ref={fadeOne} className={styles.fade}>
          Friday is a Customer-Obsessed Growth Agency.
        </p>
        <p></p>
        <p>
          <span ref={fadeTwo} className={styles.fade}>
            We unite
          </span>{' '}
          <span ref={marketingRef} className={styles.bold}>
            <Link href="/expertise/digital-marketing/">
              <a>Digital Marketing</a>
            </Link>
          </span>{' '}
          <span ref={fadeThree} className={styles.fade}>
            with the power of
          </span>{' '}
          <span ref={experienceRef} className={styles.bold}>
            <Link href="/expertise/user-experience/">
              <a>User Experience</a>
            </Link>
          </span>{' '}
          <span ref={fadeFour} className={styles.fade}>
            design to
          </span>{' '}
          <span ref={fadeFive} className={styles.fade}>
            accelerate growth through conversion.
          </span>{' '}
          <br />
        </p>
        <p>
          <span ref={fadeSix} className={styles.fade}>
            Delivering
          </span>{' '}
          <span ref={outcomesRef} className={styles.bold}>
            Positive Outcomes
          </span>{' '}
          <span ref={fadeSeven} className={styles.fade}>
            {' '}
            for our clients, our{' '}
          </span>
          <span ref={fadeEight} className={styles.fade}>
            {' '}
            team and our future.
          </span>
        </p>
        <span ref={plusRef} className={styles.plus}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </span>
        <span ref={equalsRef} className={styles.equals}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </span>
      </div>
      <div ref={arrow} className={styles.arrow} onClick={handleClick} />
    </section>
  );
};

export default AnimatedHeader;
