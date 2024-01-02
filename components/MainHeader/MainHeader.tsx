import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from '@/components/MainHeader/main-header.module.css';
import MainHeaderBackground from './MainHeaderBackground';
import NavLink from './NavLink';

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
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
