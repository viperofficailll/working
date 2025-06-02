import { Button } from "./components/Button"; 
import { Card } from "./components/Card";
import { Plusicon } from "./icons/Plusicon";
import { Shareicon } from "./icons/Shareicon";

function App() {
  return (
    <>
      <Button varient="primary" text="Share" onClick={() => {}} size="sm" starticon={<Shareicon></Shareicon>}  />
        <Button varient="secondary" text="Add content" onClick={()=>{}} size="lg" starticon={<Plusicon></Plusicon>}></Button>
        <Card></Card>
     
    </>
  );
}

export default App;
