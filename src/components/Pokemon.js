import { Component } from "react";

const styles = {
    figure: {
        border: "1px solid #000", 
        width: '200px', 
        height: '200px', 
        margin: 'auto', 
        marginTop: '10px', 
        borderRadius: '5px', 
        backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"
    }, 
    name: {
        fontSize: '1.3rem', 
        textTransform: 'Uppercase',
        padding: '1rem' 
    }, 
    p: {
        fontWeight: 'bolder'
    }
    
}
class Pokemon extends Component{
    render(){
        let {name, avatar, weight} = this.props
        return(
            <figure style={styles.figure}>
                <img src={avatar} alt={name}/>
                <figcaption style={styles.name}>{name}</figcaption>
                <p style={styles.p}>Weight:  {weight}</p>
            </figure>
        )
    }
}

export default Pokemon