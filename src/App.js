import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import StudentClass from './components/StudentClass'
import GetInput from './components/GetInput';
import Toggle from './components/Toggle';
import BasicForm from './components/BasicForm';
import Profile from './components/Profile';
import TerneryOperator from './components/TerneryOperator';
import BasicFormValidation from './components/BasicFormValidation';
import PassFunctionAsProps2 from './components/PassFunctionAsProps2';
import ConstructorLifeCycleMethod from './components/LifeCycle/ConstructorLifeCycleMethod';
import RenderLifecycleMethod from './components/LifeCycle/RenderLifecycleMethod';
import DidmountLifecycleMthods from './components/LifeCycle/DidmountLifecycleMethod'
import DidUpdate from './components/LifeCycle/DidUpdate';
import ShouldComponenetUpdate from './components/LifeCycle/ShouldComponenetUpdate';
import UseState from './components/Hooks/UseState';
import UseEffect from './components/Hooks/UseEffect';
import UseEffect1 from './components/Hooks/UseEffect1';
//import UseEffectProps from './components/Hooks/UseEffectProps';
import Bootstrap from './components/bootstrap/Bootsrap';
import Style from './components/style/Style';
import ArrayInTable from './components/array/ArrayInTable';
import ArrayList from './components/array/ArrayList';
//import FirstPage from './components/FirstPage';
import ReUse from './components/reUseComponenet/ReUse';
import TempratureControl from './components/Projects/TempratureControl';
import PostMethod from './components/fetchApi/PostMethod';
import UseEffectIQ from './components/Intrview prepration/UseEffectIQ';

function App() {
  function updateData()
  {
    setData("jagdale")
  }
  const[data,setData]=useState('amit');
  return (
    <div className='App'>
      <h1>{data}</h1> 
      <button onClick={()=>setData("akash")}>update data</button>
      <Student name="amit"></Student>
      <Student name="akash" email="aksh@123"></Student>
      <div>
        <h1>using props in class</h1>
        <StudentClass name="amit"/>
      </div>
      <GetInput/>
      <Toggle/>
      <BasicForm/>
      <Profile/>
      <TerneryOperator/>
      <BasicFormValidation/>
      <PassFunctionAsProps2/>
      <ConstructorLifeCycleMethod/>
      <RenderLifecycleMethod/>
      <DidmountLifecycleMthods/>
      <DidUpdate/>
      <ShouldComponenetUpdate/>
      <h1>Hooks in Reactjs</h1>
      <UseState></UseState>
      <UseEffect/><UseEffect1/>
      <Bootstrap/>
      <Style/>
      <h1>Array && Map</h1>
      <ArrayInTable/>
      <ArrayList/>
      <ReUse/>
      <PostMethod/>
      <h1>InterviewPractice</h1>
      <UseEffectIQ Style={{backgroundColor:"skyblue"}}/>
  






      <div align="center">
        <h1>Prjects</h1>
        <TempratureControl/>
      </div>
      
</div>
  );
}

export default App;
