import {Text, View} from 'react-native';
import React, {Component} from 'react';
import NormalComponent from './components/NormalComponent';
import PureComp from './components/PureCom';

export class PureComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '123'};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({title: '123'})
  }, 1000)
  }
  render() {
    console.log('parent component');
    return (
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: '600', textAlign: 'center'}}>
          ParentComponent
        </Text>
        <NormalComponent title={this.state.title}/>
        <PureComp />
      </View>
    );
  }
}

export default PureComponent;
