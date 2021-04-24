const Activity = (props) => {
  return (
    <div className="act">
      <h2>Recent Activity</h2>
      <div className="active">
        <div className="activity">
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
        </div>
        <div className="activity">
          <p>1/1/21</p>
          <p>Sent</p>
          <p>N100.00</p>
        </div>
        <div className="activity">
          <p>2/2/21</p>
          <p>Received</p>
          <p>N200.00</p>
        </div>
        <div className="activity">
          <p>3/3/21</p>
          <p>Sent</p>
          <p>N300.00</p>
        </div>
      </div>
    </div>
  )
}

export default Activity
