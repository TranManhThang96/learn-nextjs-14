import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from '@/components/MainHeader/main-header.module.css';
import MainHeaderBackground from './MainHeaderBackground';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          {/* <img src={logoImg.src} alt="A plate with food on it" /> */}
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>

            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}