import PassFunctionAsProps1 from './PassFunctionAsProps1';
function PassFunctionAsProps2()
{
    function getData()
    {
        alert('this is PassFunctonAsProps2')
    }
    return(
        <div>
           <PassFunctionAsProps1 data={getData}/>
            
        </div>
    )
}export default PassFunctionAsProps2;