import * as actions from '../../actions/evenCounterActions'

const CounterEven = ({ store }) => {

    const incrEven = () => {
        store.dispatch(actions.incrEvenAction())
    }

    const decrEven = () => {
        store.dispatch(actions.decrEvenAction())
    }

    return (
        <>
            <h2>Even Counter:: {store.getState().evenCounter}</h2>
            <hr />
            <button onClick={incrEven}>+</button>
            <button onClick={decrEven}>-</button>
        </>
    )
}
export default CounterEven;