import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { List, Header, Icon } from 'semantic-ui-react';
import { deleteTracker, stopTracker, startTracker } from '../../actions/trackers';
import { getTimeInterval, getTimeDiff } from '../../services';

const TrackerCard = (props) => {
  const { tracker: { id, name, date, stopDate }, deleteTracker, stopTracker, startTracker } = props;
  const [timerId, setTimerId] = React.useState(null);
  const [timeInterval , setTimeInterval] = React.useState(getTimeInterval(getTimeDiff(date, stopDate)));

  const handleStart = React.useCallback(() => {
      const stopTime = moment().diff(moment(stopDate))
      const startDate = moment(date).valueOf() + stopTime

      startTracker(id, new Date(startDate).toISOString());
  }, [stopDate, startTracker, id, date]);

  const handleStop = React.useCallback(() => {
    clearInterval(timerId);
    setTimerId(null);
    stopTracker(id, new Date().toISOString());
  }, [stopTracker, id, timerId]);

  const handleDelete = React.useCallback(() => {
    if(timerId) {
      clearInterval(timerId);
      setTimerId(null);
    };
    deleteTracker(id);
  }, [id, timerId, deleteTracker]);

  React.useEffect(() => {
    if(!stopDate && !timerId) {
      let timerId = setInterval(() => setTimeInterval(getTimeInterval(getTimeDiff(date, stopDate))), 1000);
      setTimerId(timerId);
    }
  }, [stopDate, timerId, date]);

  return (
    <List.Item 
      className={stopDate
        ? 'card'
        : 'card card-active'}>
      <List.Content 
        verticalAlign='bottom'
        className='card-name'>
        <Header 
          size='small'
          color={stopDate ? 'black' : 'green'}>
          {name}
        </Header>
      </List.Content>
      <List.Content 
        verticalAlign='middle'
        className='card-timer'>
        <Header 
          size='small'
          color={stopDate ? 'black' : 'green'}>
          {timeInterval}
        </Header>
      </List.Content>
      <List.Content 
        className='card-actions'>
        <Icon 
          name={
            stopDate ? 'play circle outline' : 'pause circle outline'
          }
          size='big' 
          color='black'
          onClick={
            stopDate ? handleStart : handleStop
          }
        />
        <Icon 
          name='minus circle' 
          size='big' 
          color='red'
          onClick={handleDelete}
        />
      </List.Content>
    </List.Item>
  );
}

const mapDispatchToProps = {
  deleteTracker,
  stopTracker,
  startTracker
}

export default connect(null, mapDispatchToProps)(TrackerCard);
