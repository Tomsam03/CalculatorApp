import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CalculatorApp = () => {
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleSymbolPress = (value) => {
    // CODE HERE
    const c = expression[expression.length - 1];
    if(c != '+' && c != '-' && c != '*' && c != '/' && expression.length != 0){
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const handleDelete = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  return (

    <View style={styles.container}>
      <ScrollView style={styles.expressionContainer}>
        <Text style={styles.expression}>{expression}</Text>
      </ScrollView>
      
      <View style={styles.calculator}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={handleEvaluate}>
            <Text>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text>C</Text>
          </TouchableOpacity>
        </View>



        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleSymbolPress('+')}>
            <Text>+</Text>
          </TouchableOpacity>   
        </View>

        <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleSymbolPress('-')}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleSymbolPress('*')}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.zeroButton} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleSymbolPress('/')}>
            <Text >/</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#0f0f0f',
    paddingTop: 50,
    flexWrap: 'no-wrap',
  },

  expressionContainer: {
    maxHeight: 600, 
  },

  calculator: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 50,
  },

  row: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#8f8d8d",
    borderWidth: 2,
    borderColor: '#8f8d8d',
    padding: 15,
    marginHorizontal: 1,
  },

  zeroButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#8f8d8d",
    borderWidth: 2,
    borderColor: '#8f8d8d',
    padding: 15,
    paddingHorizontal: 111,
    marginHorizontal: 1,
  },

  expression: {
    fontSize: 24,
    marginBottom: 100,
    color: "#dbdbdb",
    verticalAlign: "top",
    padding: 15,
  },

  buttonText: {
    fontSize: 20,
  }
});

export default CalculatorApp;
