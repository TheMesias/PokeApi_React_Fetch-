import Pokemons from "./components/Pokemons";
import Title from "./components/Title";
const styles = {
  div: {
    margin: '0px', 
    padding: '0',  
    margin: 'auto', 
    textAlign: 'center'
  }, 
  container: {
    backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)", 
  }
}

function App() {
  return (
    <div  style={styles.container}>
      <Title/>
      <div style={styles.div}>
        <Pokemons/>
      </div>
    </div>
  );
}

export default App;
