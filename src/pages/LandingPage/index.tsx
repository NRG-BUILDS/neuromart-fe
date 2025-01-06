import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main>
      <h1>Landing page goes here, over to yoy chief ✈</h1>
      <Link to={'/dashboard'} className="underline font-medium">
        Goto Dashboard
      </Link>
    </main>
  );
};

export default LandingPage;
