import React from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style.js";

function List(props) {
  const { trips } = props;
  return (
    <>
      {trips.length > 0 && (
        <Wrapper>
          <pre>{trips.map((trip) => JSON.stringify(trip, null, 2))}</pre>
        </Wrapper>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  trips: state.trips,
});

export default connect(mapStateToProps, null)(React.memo(List));
