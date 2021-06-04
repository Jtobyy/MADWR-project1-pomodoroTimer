import React from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';

  
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      workTimeMinstart: 25,
      workTimeSecstart: 0,
      breakTimeMinstart: 5,
      breakTimeSecstart: 0,
      workTimeMin: 25,
      workTimeSec: 0,
      breakTimeMin: 5,
      breakTimeSec: 0,
      SP: 'Start',
      status: 'Work'
    }
  }
  
  decrementWorkCount = () => { 
    if(this.state.workTimeSec == 0 && this.state.workTiimeMin != 0) {
      return (
        this.setState(function(prevState) {
          return {
            workTimeMin: prevState.workTimeMin - 1,
            workTimeSec: 60,
          }
        })
      )
    }
    else if(this.state.workTimeSec == 0 && this.state.workTimeMin == 0) {
      return (
        this.decrementBreakCount
      )
    }
    else {
      return (
          this.setState(function(prevState) {
            return {
              workTimeSec: prevState.workTimeSec - 1
            }
          })
          )
    } 
  }

  decrementBreakCount = () => {
    if(this.state.breakTimeSec == 0 && this.state.breakTiimeMin != 0) {
      return (
        this.setState(function(prevState) {
          return {
            breakTimeMin: prevState.breakTimeMin - 1,
            breakTimeSec: 60,
          }
        })
      )
    }
    else if(this.state.breakTimeSec == 0 && this.state.breakTimeMin == 0) {
      if (this.state.workTimeMinstart != 0 || this.state.workTimeSecstart != 0) {
        this.setState(prevState => (
          {
            workTimeMin: prevState.workTimeMinstart,
            workTimeSec: prevState.workTimeSecstart
          }
        ))
        return (
          this.decrementWorkCount
        )
      }
    }
    else {
      return (
          this.setState(function(prevState) {
            return {
              breakTimeSec: prevState.breakTimeSec - 1
            }
          })
          )
    } 
  }
  
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  funcStartOrPause = () => {
    if(this.state.SP == 'Start') {
      this.timer = setInterval(this.decrementWorkCount, 1000)
      this.setState ( prevState => ({ SP: 'Pause' }))
    }
    else{
      clearInterval(this.timer)
      this.setState ( prevState => ({ SP: 'Start' }))
    }
  }
  
    render() {
      return (      
        <View style={styles.container} >
          <View style={styles.header} >
            <Text style={styles.title}>My Pomodoro Timer</Text>

            {/* <WorkTimer style={styles.WorkTimer} min={this.state.workTimeMin} sec={this.state.workTimeSec}/> */}

            <Text style={styles.workCountdown}> {this.state.workTimeMin} : {this.state.workTimeSec} </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Text style={[styles.buttons, styles.button1]} onPress={this.funcStartOrPause}>{this.state.SP}</Text>
            <Text style={[styles.buttons, styles.button2]}>Reset</Text>
          </View>

          <View style={styles.unitContainer}>
            <Text style={[styles.units, styles.min]}> min: </Text>
            <Text style={[styles.units, styles.sec]}> sec: </Text>
          </View>

          <View style={styles.timing} pointerEvents='box-none'>
            <Text style={styles.titles}>Work Time: </Text>
            <TextInput style={[styles.inputs, styles.input1]} onChangeText={(text) => (this.setState({workTimeMinstart:text }))} maxLength={2} keyboardType="numeric" >{this.state.workTimeMinstart}</TextInput>
            <TextInput style={[styles.inputs, styles.input2]} onChangeText={(text) => (this.setState({workTimeSecstart:text }))} maxLength={2} keyboardType="numeric" >{this.state.workTimeSecstart}</TextInput>   
          </View>

          <View style={styles.timing} pointerEvents='box-none'>
            <Text style={styles.titles}>Break Time: </Text>
            <TextInput style={[styles.inputs, styles.input1]} onChangeText={(text) => (this.setState({breakTimeMinstart:text }))}  maxLength={2} keyboardType="numeric" >{this.state.breakTimeMinstart}</TextInput>
            <TextInput style={[styles.inputs, styles.input2]} onChangeText={(text) => (this.setState({breakTimeSecstart:text }))}  maxLength={2} keyboardType="numeric">{this.state.breakTimeSecstart}</TextInput> 
          </View>

          {/* <BreakTimer style={styles.BreakTimer} min={this.state.breakTimeMin} sec={this.state.breakTimeSec}/> */}
          <Text style={styles.breakCountdown}> {this.state.breakTimeMin} : {this.state.breakTimeSec} </Text>

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
  workCountdown: {
    padding:20,
    fontSize:30,
  },
  breakCountdown: {
    padding:20,
    fontSize:20,
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
