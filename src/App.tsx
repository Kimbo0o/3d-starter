import { Leva } from "leva";
import "./App.css";

import Experience from "./components/Experience";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Leva hidden={!window.location.search.includes("debug")} />
      <Suspense
        fallback={
          <div className="flex w-full h-full items-center justify-center bg-gray-900">
            <Spinner />
          </div>
        }
      >
        <Experience />
      </Suspense>
    </div>
  );
}

export default App;
