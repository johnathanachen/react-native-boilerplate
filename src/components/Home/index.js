import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from '../../redux/actions'

let styles = StyleSheet.create({
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

class Home extends React.Component {
    render() {
      const { people, isFetching } = this.props.people;

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
          <TouchableHighlight style={styles.button} onPress={() => this.props.getPeople()}>
            <Text style={styles.buttonText}>Load People</Text>
          </TouchableHighlight>
          {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <View key={i} >
              <Text>Name: {person.name}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View>
          })
        ) : null
      }
        </View>
      );
    }
}

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
