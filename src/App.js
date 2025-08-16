import {Switch, BrowserRouter, Route} from "react-router-dom";
import Pricing from './components/Pricing';
import Landing from './components/Landing';



export default function App() {
    return <div>

            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/"  component={Landing} />
                </Switch>
            </BrowserRouter>
   
    </div>
}
