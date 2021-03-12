import React from 'react';
import { connect } from 'react-redux';
import { Grid, Header, List } from 'semantic-ui-react';
import TrackerForm from '../TrackerForm';
import TrackerCard from '../TrackerCard';
import { getTrackersData } from '../../actions/trackers';

const Trackers = (props) => {
  const { trackersData, getTrackersData } = props;

  React.useEffect(() => {
    getTrackersData();
  },[getTrackersData])

  const trackersCards = trackersData
    .map(tracker => <TrackerCard key={tracker.id} tracker={tracker}/>)

  return (
    <Grid centered>
      <Grid.Column computer={6} mobile={16}>
        <Grid.Row>
          <Header 
            size='huge' 
            textAlign='center'
            className='logo'>
            tracker
          </Header>
        </Grid.Row>
        <TrackerForm index={trackersData.length + 1}/>
        <Grid.Row 
          as={List} 
          className='card-list'
          divided>
          {trackersCards}
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = state => ({
  trackersData: state.trackers.trackersData
})

const mapDispatchToProps = {
  getTrackersData
}

export default connect(mapStateToProps, mapDispatchToProps)(Trackers);
