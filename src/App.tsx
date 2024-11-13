import { useState } from "react";
import AppLayout from "@layouts/AppLayout/AppLayout.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppLayout>
      <span>Test</span>
      <span>Test</span>
    </AppLayout>
  );
}

export default App;
