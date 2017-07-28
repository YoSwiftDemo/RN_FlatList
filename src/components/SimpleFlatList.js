
import React,{
  Component}from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,}from 'react-native'
 let Item_Height = 100;

export default class SimpleFlatList extends Component{
  myFlatList;
  myRenderItem =(item)=>{
    let txt = '第' + item.index + '个' + ' title=' + item.item.title;
    let bgColor = item.index % 2 == 0 ? 'red' : 'blue';
    return <Text
      style = {[styles.item,{backgroundColor:bgColor},{height:Item_Height},styles.txt]}
      >
      {txt}
    </Text>
  }
  myHeader =()=>{
    return <Text
      style = {[styles.txt,{backgroundColor:'black'}]}>
      头部
    </Text>
  }
  myFooter=  ()=>{
    return <Text
      style = {[styles.txt,{backgroundColor:'green'}]}
      >
      尾部
    </Text>
  }
  mySeparator = ()=>{
    return<View
         style = {[styles.txt,styles.separator]}
    />
  }
  render (){
    let data = [];
    return (
      <View
        style = {styles.container}
        >
        <Button
          title = '滚动到指定位置'
          onPress = {
            ()=>{
              this.myFlatList.scrollToEnd();
              //this.myFlatList.scrollToIndex({viewPosition:0,index:8});
            //  this.myFlatList.scrollToSet({animated:true,offset:2000});
            }
          }
          >
        </Button>
         <View>
           <FlatList
             ref = {
               (flatList)=>{
                 this.myFlatList = flatList
               }
             }
            ListHeaderComponent = {this.myHeader}
            ListFooterComponent = {this.myFooter}
            ItemSepatatorComponent = {this.mySeparator}
            renderItem = { this.myRenderItem}
            //numColumns = {3}
            //columnWrapperStyle={{borderWidth:2,borderColor:'black',paddingLeft:20}}
            //horizontal={true}

             //getItemLayout={(data,index)=>(
             //{length: ITEM_HEIGHT, offset: (ITEM_HEIGHT+2) * index, index}
             //)}

             //onEndReachedThreshold={5}
             //onEndReached={(info)=>{
             //console.warn(info.distanceFromEnd);
             //}}

             //onViewableItemsChanged={(info)=>{
             //console.warn(info);
             //}}
             data={data}
             >
           </FlatList>
         </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:
  {
    flex:1,
  },
  item:
  {
    flex:1,
    height:100,
  },
  txt:
  {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
  },
  separator:
  {
  backgroundColor:'red',
  },
})
