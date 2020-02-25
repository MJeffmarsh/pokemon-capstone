import React from 'react';
import Nav from '../Nav/Nav';
import './Home.css';

function Home() {
  return (
    <>
      <Nav />

      <div className='main'>
        <header role='banner'>
          <h1>Build-A-Mon</h1>
        </header>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Build-A-Mon, where you can create your very own custom
            Pokemon and make battle teams!
          </p>
        </section>

        <section>
          <h2>Create Custom Pokemon</h2>
          <p>
            Create custom Pokemon from the ground up! Give your Pokemon unique
            names and specify the size, abilities, and its description!{' '}
          </p>
        </section>

        <section>
          <h2>Build Teams</h2>
          <p>
            Put your custom Pokemon into teams of up to 6 and make multiple team
            loadouts just like in the games!
          </p>
        </section>

        <section>
          <h3>The possibilities are only limited to your imagination!</h3>
        </section>
      </div>
    </>
  );
}

export default Home;
