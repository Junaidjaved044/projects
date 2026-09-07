import { useState } from "react";

import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Result from "./pages/Result";

function App() {
  const [page, setPage] = useState("home");

  const [image, setImage] = useState<string | null>(null);

  const goToScan = () => {
    setPage("scan");
  };

  const goToHome = () => {
    setPage("home");
  };

  const goToResult = (selectedImage: string) => {
    setImage(selectedImage);
    setPage("result");
  };

  return (
    <>
      {page === "home" && (
        <Home
          onScan={goToScan}
          onHome={goToHome}
        />
      )}

      {page === "scan" && (
        <Scan
          onAnalyze={goToResult}
          onHome={goToHome}
        />
      )}

      {page === "result" && (
        <Result
          image={image}
          onBack={goToHome}
          onScanAgain={goToScan}
          onHome={goToHome}
        />
      )}
    </>
  );
}

export default App;