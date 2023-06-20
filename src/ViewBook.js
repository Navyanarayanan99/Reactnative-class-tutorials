import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'
const ViewBook = () => {
  return (
    <View style={{flex: 1}}>
       <Pdf
                    trustAllCerts={false}
                    // source={{uri : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}}
                    source={require('../assets/TestPDFfile.pdf')}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={{flex: 1}}
                    
                    enablePaging={true}/>
                    
 
    </View>
  )
}

export default ViewBook

const styles = StyleSheet.create({})