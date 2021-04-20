import React from "react";
import AppHeader from "./AppHeader";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <div className="styleRow">
        <div>
          <MarketSchedule />
        </div>
        <div>
          <SeasonalProduce />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
