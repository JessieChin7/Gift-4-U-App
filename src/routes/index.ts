import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../pages/game/Game";

const Routes = () => (
    <Router>
    <Switch>
    <Route path= "/game" component = { Game } />
        </Switch>
        < /Router>
);

export default Routes;
