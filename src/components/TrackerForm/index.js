import React from 'react';
import { connect } from 'react-redux';
import { Grid, Input, Icon } from 'semantic-ui-react';
import { addTracker } from '../../actions/trackers';

const TrackerForm = (props) => {
  const { index, addTracker } = props;
  const [name, setName] = React.useState('');

  const handleChange = (e) => setName(e.target.value)

  const onSubmit = (e) => {
    const trackerId = Date.now();
    const trackerName = name ? name : `No name tracker #${index}`;
    const trackerDate = new Date().toISOString();
    const tracker = { 
            id: trackerId,
            name: trackerName,
            date: trackerDate,
            stopDate: null  
          };
          
    addTracker(tracker);
    setName('');
    e.preventDefault();
  }

  return (
    <Grid.Row as='form' onSubmit={onSubmit}>
      <Input
        name='name'
        fluid 
        value={name} 
        onChange={handleChange}
        size='large'
        placeholder='Enter tracker name...' 
        className='form'
        icon>
        <input />
        <Icon 
          link
          name='play circle'
          size='big' 
          color='green'
          onClick={onSubmit} 
        />
      </Input>
    </Grid.Row>
  );
}

const mapDispatchToProps = {
  addTracker
}

export default connect(null, mapDispatchToProps)(TrackerForm);
