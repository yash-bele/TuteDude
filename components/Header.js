const Header = () => {
  return (
    <>
      <section className='navbar'>
        <img src='/logo.svg' alt='logo'></img>
        <div>
          <a href='#'>My Assignment</a>
          <a href='#'>Chat with Mentor</a>
          <img src='/profile.svg' alt='profile' />
          <p>ProfileName</p>
          <img src='/chevron-light.svg' alt='chevron'></img>
          <img src='/chevron-dark.svg' alt='chevron'></img>
        </div>
      </section>
      <section className='info'>
        <p>UI/UX &gt; Refer & Earn &gt; Friends Referred</p>
        <div>
          <img src='/arrow.svg' alt='arrow' />
          <p>go back</p>
        </div>
        <div>
          <div>
            <p>Your Referral Code</p>
            <div>
              <p>EDCH54</p>
            </div>
          </div>
          <div>
            <p>Wallet Balance</p>
            <p>₹ 500</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
