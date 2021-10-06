import { Component } from "react";

const styles = {
    h2: {
        textAlign: 'center', 
        padding: '.9rem', 
        textTransform: 'Uppercase', 
        fontSize: '2.5rem', 
        color: '#fff'
    }
}
class Title extends Component {
    render() {
        return (
             <h2 style={styles.h2}>Pokemon API</h2>
        );
    }
}

export default Title 