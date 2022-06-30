import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainNavigation from "./Components/Layout/MainNavigation";
import ListOfTeachers from "./pages/ListOfTeachers";
import MainPage from "./pages/MainPage";
import ListOfStudents from "./pages/ListOfStudents";

function App() {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route path="/" exact={true}>
          <h1>Main Page</h1>
          <MainPage />
        </Route>
        <Route path="/teachers">
          <h1>Teachers</h1>
          <ListOfTeachers />
        </Route>

        <Route path="/students">
          <h1>Students</h1>
          <ListOfStudents />
        </Route>

        <Route path="/login">
          <h1>Login</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
