import TryAccounting from "./TryAccounting";
import FeaturesTiles from "./FeaturesTiles"
import "./Section2.css"


const Section2 = () => {
  return (
    <div className="sectionBody">
      <div className="accountingBody">
        <TryAccounting />
      </div>
      <div>
        <FeaturesTiles />
      </div>
    </div>
  )
}


export default Section2;