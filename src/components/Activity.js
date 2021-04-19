import HIV from '../HIV.jpg';
import Lungs from '../Lungs.png';
import BP from '../BP.jpg';

console.log(HIV)
console.log(Lungs)
console.log(BP)

const Activity = (props) => {
  return (
    <div className="active">
      <h2>Recent Activity</h2>
      <div className="activity">
        <img style={{ backgroundColor: 'white'}} width="30px" height="30px" src={HIV} alt="HIV symbol"/>
        <p>HIV Blood Draw Test</p>
        <p>A100</p>
      </div>
      <div className="activity">
        <img width="30px" height="30px" src={Lungs} alt="Lungs"/>
        <p>TB Radiology XRay</p>
        <p>A30</p>
      </div>
      <div className="activity bp">
        <img style={{ backgroundColor: 'red'}} width="30px" height="30px" src={BP} alt="Blood Pressure"/>
        <p>Blood Pressure Check</p>
        <p>A10</p>
      </div>
    </div>
  )
}

export default Activity
