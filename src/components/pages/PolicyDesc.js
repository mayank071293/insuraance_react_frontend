var moment = require('moment'); 
const PolicyDesc = (props) => {
  return props.policy_id !== "" &&(
    <div className="container mt-2 mb-3 border rounded">
      <div className="row bg-primary rounded">
        <div className="col text-light text-center"><b>Policy Information</b></div>
      </div>
      <div className="row">
        <div className="col"><b>Policy ID : </b>{props.policy_id}</div>
        <div className="col"><b>Date of Purchase: </b>{ moment(props.date_of_purchase).format('YYYY-MM-DD')}</div>
        <div className="col"><b>Premium : </b>{props.premium}</div>
        <div className="col"><b>Comprehensive:</b>{props.comprehensive === 1 ? "Yes" :"No"}</div>
      </div>
      <div className="row bg-primary rounded">
        <div className="col text-light text-center"><b>Liability Information</b></div>
      </div>
      <div className="row">
        <div className="col"><b>Bodily injury liability:</b>{props.bodily_injury_liability  === 1 ? "Yes" :"No"}</div>
        <div className="col"><b>Personal injury Protection:</b>{props.personal_injury_protection  === 1 ? "Yes" :"No"}</div>
        <div className="col"><b>Property damage liability:</b> {props.property_damage_liability  === 1 ? "Yes" :"No"}</div>
        <div className="col"><b>Collision:</b>{props.collision}</div>
      </div>
      <div className="row bg-primary rounded">
        <div className="col text-light text-center"><b>Vehicle Information</b></div>
      </div>
      <div className="row">
        <div className="col"><b>Fuel:</b>{props.fuel}</div>
        <div className="col"><b>Vehicle Segment:</b>{props.vehicle_segment}</div>
      </div>
    </div>
  );
};
export default PolicyDesc;
// moment().format('YYYY-MM-DD');