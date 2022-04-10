import logo from './logo.svg';
import './App.css';
import Hook from "./components/functionComponents/Hook";
import HookClass from "./components/classComponents/HookClass";
import EffectHook from "./components/functionComponents/EffectHook";
import ClassEffect from "./components/classComponents/ClassEffect";

function App() {
    return (
        <div className="App">
            {/*<EffectHook/>*/}
            {/*<Hook/>*/}
            {/*<HookClass/>*/}
            <ClassEffect/>
        </div>
    );
}

export default App;
