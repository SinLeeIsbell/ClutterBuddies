import "./LandingPage.css";


const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
}

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <div className="info-container">
        <div className="main-content">
          <h1>Welcome to ClutterBuddies</h1>
          <p className="wrappingText">Sign up, sign in, and invite your clutter buddy
          via username.</p>
        </div>
        <div className="secondary-content">
          <h2>Already Have an Account?</h2>
          <p className="bottom">Invite Your Clutter Buddy!</p>
          <button>Invite Clutter Buddy</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
