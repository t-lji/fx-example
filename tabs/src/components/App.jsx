import React from "react";
// https://fluentsite.z22.web.core.windows.net/quick-start
import { Provider, teamsTheme, Loader } from "@fluentui/react-northstar";
import { HashRouter as Router, Route } from "react-router-dom";
import { useTeamsFx } from "./util/useTeamsFx";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import "./App.css";
import TabConfig from "./TabConfig";
import UI from "./FluentUI"
import TeamsFx from "./TeamsFx"
import TeamsToolkit from "./TeamsToolkit"

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { theme, loading } = useTeamsFx();
  return (
    <Provider theme={theme || teamsTheme} styles={{ backgroundColor: "#eeeeee" }}>
      <Router>
        {loading ? (
          <Loader style={{ margin: 100 }} />
        ) : (
          <>
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/termsofuse" component={TermsOfUse} />
            <Route exact path="/config" component={TabConfig} />
            <Route exact path="/ui" component={ UI } />
            <Route exact path="/fx" component={ TeamsFx } />
            <Route exact path="/toolkit" component={ TeamsToolkit } />
          </>
        )}
      </Router>
    </Provider>
  );
}
