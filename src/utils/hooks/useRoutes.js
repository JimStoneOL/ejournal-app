import { Redirect, Route, Switch } from "react-router-dom"
import { AuthPage } from "../../component/auth/AuthPage"
import { EstimationByStudent } from "../../component/estimation/EstimationByStudent"
import { StudentHome } from "../../component/student/StudentHome"
import { SubjectHome } from "../../component/subject/SubjectHome"
import { About } from "../component/About"

export const useRoutes=(isAuthenticated,role)=>{
   
    if(isAuthenticated){
        return(
          <Switch>
             <Route path="/" exact>
                    <StudentHome/>
                </Route>
                  <Route path="/subject" exact>
                    <SubjectHome/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/estimation/:id" exact>
                    <EstimationByStudent/>
                </Route>
                <Redirect to="/" />
        </Switch>
        )
    }
 else{
        return(
            <Switch>
            <Route path="/" exact>
              <AuthPage/>  
            </Route>
            <Redirect to="/" />
        </Switch>
        )
}
}