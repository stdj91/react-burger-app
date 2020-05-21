import React, { Component } from 'react';
import Aux from '../../hoc/AuxProblem'
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    render () {
        return (
           <Aux>
               <Burger />
               <div>Build</div>
           </Aux>
        );
    }

}

export default BurgerBuilder;