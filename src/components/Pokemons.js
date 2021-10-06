import { Component } from "react";
import Pokemon from './Pokemon'

const styles = {
    
}

export default class Pokemons extends Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/" //url API 
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            json.results.forEach(el => {
                fetch(el.url)
                .then((res) => res.json())
                .then((json) => {
                    let pokemon = {
                        id: json.id, 
                        name: json.name, 
                        avatar: json.sprites.front_default, 
                        weight: json.weight  
                    }
                    
                    let pokemons = [...this.state.pokemons, pokemon]
                    this.setState({pokemons})
                })

            })
        })
    } 
    render() {
        return (
             <>
                 {this.state.pokemons.length === 0 ? 
                    (
                        <h3>Loading...</h3>
                    ) : 
                    (
                        this.state.pokemons.map(el => (
                            <Pokemon key={el.id} name={el.name} avatar={el.avatar} weight={el.weight}/>
                        ))
                    )
                }
             </>
        );
    }
} 
