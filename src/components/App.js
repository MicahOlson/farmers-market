import React from "react";
import AppHeader from "./AppHeader";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <div className="row">
        <div className="column">
          <MarketSchedule />
        </div>
        <div className="column">
          <SeasonalProduce />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
