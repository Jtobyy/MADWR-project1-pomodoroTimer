import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

const WorkTiming = (props) => {
  return (
    <View style={styles.timing}>
    <Text style={styles.titles}>Work Time: </Text>
    <TextInput style={[styles.inputs, styles.input1]} onChangeText={setWorkTimeMin} maxLength={2} keyboardType="numeric" >{props.workTimeMin}</TextInput>
    <TextInput style={[styles.inputs, styles.input2]} onChangeText={setWorkTimeSec} maxLength={2} keyboardType="numeric" >{props.workTimeSec}</TextInput>   
  </View>
  )
}


const BreakTiming = (props) => {
  return (
    <View style={styles.timing}>
    <Text style={styles.titles}>Break Time: </Text>
    <TextInput style={[styles.inputs, styles.input1]} onChangeText={setBreakTimeMin}  maxLength={2} keyboardType="numeric" >{props.breakTimeMin}</TextInput>
    <TextInput style={[styles.inputs, styles.input2]} onChangeText={setBreakTimeSec}  maxLength={2} keyboardType="nummeric">{props.breakTimeSec}</TextInput> 
  </View>
  )
}

class WorkTimer extends React.Component {
  constructor() {
    super()
    this.state = {
      min: this.props.min,
      sec: this.props.sec,
    }
  }
  
  return (
    pass
    )
  }

class BreakTimer extends React.Component {
  constructor() {
    super()
    this.state = {
      min: this.props.min,
      sec: this.props.sec,
    }
  }

    return (
      pass
    )
  }
  
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      workTimeMin: 25,
      workTimeSec: 0,
      breakTimeMin: 5,
      breakTimeSec: 0,
      SP: 'Start',
    }
  }
  
  componentDidMount() {
    this.timer = setInterval(this.incrementCount, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  incrementCount = () => (
    this.setState(function(prevState) {
      return {
        countdown: prevState.countdown + 1
      }
    })
    )
    
    render() {
      return (      
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>My Pomodoro Timer</Text>

            <WorkTimer style={styles.WorkTimer} min={workTimeMin} sec={workTimeSec}/>

            <Text style={styles.countdown}> {this.state.countdown} </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={[styles.buttons, styles.button1]}>{this.state.SP}</Text>
            <Text style={[styles.buttons, styles.button2]}>Reset</Text>
          </View>
          <View style={styles.unitContainer}>
            <Text style={[styles.units, styles.min]}> min: </Text>
            <Text style={[styles.units, styles.sec]}> sec: </Text>
          </View>
          <WorkTiming workTimeMin={this.state.workTimeMin} workTimeSec={this.state.workTimeSec}/>
          <BreakTiming breakTimeMin={this.state.breakTimeMin} breakTimeSec={this.state.breakTimeSec}/>

          <BreakTimer style={styles.BreakTimer} min={breakTimeMin} sec={breakTimeSec}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  timing: {
    flexDirection:'row',
    marginBottom:15,
    
  },
  inputs: {
    borderWidth:1,
    padding:10,
    fontSize:15,
    width:70,
    borderRadius:3.
  },
  input1: {
    marginRight:6,
  },
  input2: {
    marginLeft:6,
  },
  container: {
    flex: 1,
    fontFamily:'cursive',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems:'center',
  },
  title: {
    padding:10,
    fontVariant:['small-caps'],
    fontWeight:'bold',
    fontSize:30,
  },
  countdown: {
    padding:20,
    fontSize:30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttons: {
    padding:10,
    fontSize:30,
    backgroundColor:'skyblue',
    borderWidth:1,
    borderRadius:3,
    marginBottom:30,
    marginTop:10,
  },
  button1: {
    marginRight:20,
  },
  button2: {
    marginLeft:20,
  },
  unitContainer: {
    flexDirection:'row',
    marginLeft:50,
  },
  units: {
    fontSize:20,
    padding:10,
  },
  min: {
    marginLeft:40,
  },
  sec: {
    left:30,
  },
  titles: {
    alignSelf: 'flex-start',
    padding:15,
    fontSize:20,
    fontWeight:'bold',
  },
});
