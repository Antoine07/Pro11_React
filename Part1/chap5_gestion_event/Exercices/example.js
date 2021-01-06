

 class Counter extends React.Component {
    constructor(props){
        super(props);

        this.sate = {
            count1 : 0,
            count2 : 0
        }
    }

    render(){

        return(
            <p>{this.state.count}</p>
        )
    }
 }

 // deuxième approche fonctionnelle

 function CounterBis(props){

    const [count, setCount] = React.useStat(0);
    const [count2, setCount2] = React.useStat(0);

    return(
        <p>{count}</p>
    )
 }