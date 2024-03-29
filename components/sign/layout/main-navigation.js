import Link from 'next/link';


function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        
          <div className={classes.logo}>Next Auth</div>
        
      </Link>
      <nav>
        <ul>
        <li>
            <Link href='/auth'>Login</Link>
          </li>
          <li>
            <Link href='/sign-in'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
