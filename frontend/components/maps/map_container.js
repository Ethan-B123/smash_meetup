import { connect } from 'react-redux';
import Map from "./map";

const mapStateToProps = ({ entities }) => {
  return ({
    nearbyEvents: entities.nearby_events,
    nearbyPlayers: entities.players
  })
}

export default connect(
  mapStateToProps,
  null
)(Map);
