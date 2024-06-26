import Footer from './Footer';
import Greeting from './Greetings';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Greeting name="John" message="Let's learn React together!" />
      <Footer />
    </div>
  );
}

export default App;