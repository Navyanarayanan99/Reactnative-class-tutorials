import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Flatlist = () => {
    const [product, setProduct] = useState([
        {title: 'Post 1', isBlocked: false},
        {title: 'Post 2', isBlocked: true},
        {title: 'Post 3', isBlocked: false},
        {title: 'Post 4', isBlocked: false},
        {title: 'Post 5', isBlocked: false},
        {title: 'Post 6', isBlocked: false}])
    return (
        <View style={styles.container}>
            <View style={{marginTop: 50}}>
            <FlatList
                data={product}
                numColumns={2}
                renderItem={({ item, index }) => {
                    return (
                      <View style={{width: '50%', justifyContent: 'center', alignItems: 'center', height: 120, marginTop: 20, marginBottom: 20}}>
                        <View style={styles.itemView}></View>
                      </View>
                    )
                }} />
            </View>
        </View>
    )
}

export default Flatlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemView: {
        width: '90%',
       padding: 20,
        backgroundColor: '#fff',
        marginLeft: 10,
        elevation: 5,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 10,
        height: 100,
    }
})



// import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// const Flatlist = () => {
//     const [product, setProduct] = useState([
//         {data : [1, 1, 1, 1, 1, 1], isSelected: false},
//         {data : [1, 1, 1, 1, 1, 1], isSelected: false},
//     ])
    
//     const select=(index) => {
//         let tempData= product;
//         tempData.map((item, ind) => {
//             if(index == ind ){
//               item.isSelected = !item.isSelected;
//             }else {
//               item.isSelected = false;
//             }
//         })
//         let temp= []
//         tempData.map(item => {
//             temp.push(item)
//         });
//         setProduct(temp)
//     }
//     return (
//         <View style={styles.container}>
//             <View style={{marginTop: 50}}>
//             <FlatList
//                 data={product}
//                 renderItem={({ item, index }) => {
//                     return (
//                         <TouchableOpacity style={styles.itemView} onPress={() => select(index)}> 
//                             <Text style={{fontSize: 20, fontWeight: '700', color: 'red'}}>{'item'+ (index + 1)}</Text>
//                             {item.isSelected && (
//                             <FlatList 
//                               data={item.data}
//                               renderItem={({item, index}) => {
//                                 return (
//                                     <View style={{margin: 18}}>
//                                         <Text style={{fontSize:  18, fontWeight: '700', color: 'blue' }}>{'sub item' + (index + 1)}</Text>
//                                     </View>
//                                 );
//                               }}
//                             />
//                         )}
//                         {item.isSelected ? (
//                         <Image source={require('../assets/upload.png')} style={{width: 24, height: 24 , position: 'absolute', top: 20, right: 20}}/>
//                         ) : (
//                             <Image source={require('../assets/down.png')} style={{width: 24, height: 24 , position: 'absolute', top: 20, right: 20}}/>

//                         )}
//                         </TouchableOpacity>

                        
//                     );
//                 }} />
//             </View>
//         </View>
//     )
// }

// export default Flatlist

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     },
//     itemView: {
//         width: '90%',
//        padding: 20,
//         backgroundColor: '#fff',
//         marginLeft: 10,
//         elevation: 5,
//         borderRadius: 10,
//         alignSelf: 'center',
//         marginBottom: 10
//     }
// })




// import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
// import React, { useState, useEffect } from 'react'

// const Flatlist = () => {
//     const [product, setProduct] = useState([])
//     useEffect(() => {
//         getData();
//     }, []);
//     const getData = () => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json);
//                 setProduct(json);
//             });
//     };
//     return (
//         <View style={styles.container}>
//             <View style={{marginTop: 50}}>
//             <FlatList
//             horizontal
//                 data={product}
//                 renderItem={({ item, index }) => {
//                     return <View style={{ width: 200, height: 230, backgroundColor: '#fff', marginLeft: 10, elevation: 5 , borderRadius: 10 }}>
//                         <Image source={{ uri: item.image }} style={{ width: 100, height: 100 , alignSelf: 'center' }} />
//                         <View style={{paddingLeft: 20, paddingRight: 10, }}>
//                             <Text>{item.title.length>30 ? item.title.substring(0,30)+'...' : item.title}</Text>
//                             <Text>{item.description.length > 30 ? item.description.substring(0,30)+ '...' : item.description}</Text>
//                             <Text style={{fontSize:20, fontWeight: '600', color: 'green', marginTop: 10}}>{item.price}</Text>
//                         </View>
//                     </View>
              
//                 }} />
//             </View>
//         </View>
//     )
// }

// export default Flatlist

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// })