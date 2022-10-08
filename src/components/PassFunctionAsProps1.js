function PassFunctionAsProps1(props)
{
    return(
        <div>
            <h1>pass function as props1</h1>
          <button onClick={props.data}>show data</button>
        </div>
    )
}export default PassFunctionAsProps1;