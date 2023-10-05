import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="info-container">
        <div className="main-content">
          <h1>Welcome to ClutterBuddies</h1>
          <p>Take a moment to make an account and sign in</p>
        </div>
        <div className="secondary-content">
          <h2>Already Have an Account?</h2>
          <p>Login and Explore Your Activities</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
