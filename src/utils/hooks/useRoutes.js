import { Redirect, Route, Switch } from "react-router-dom"
import { AuthPage } from "../../component/auth/AuthPage"
import { EstimationByStudent } from "../../component/estimation/EstimationByStudent"
import { StudentHome } from "../../component/student/StudentHome"
import { SubjectHome } from "../../component/subject/SubjectHome"

export const useRoutes=(isAuthenticated,role)=>{
   
    if(isAuthenticated && role==='ROLE_TEACHER'){
        return(
          <Switch>
                  <Route path="/subject/:id" exact>
                    <SubjectHome/>
                </Route>
                <Route path="/student" exact>
                    <StudentHome/>
                </Route>
                <Route path="/" exact>
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