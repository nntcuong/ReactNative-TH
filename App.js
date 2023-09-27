import React ,{useState}from 'react';
import {SafeAreaView,StyleSheet,Modal,SectionList,StatusBar,Pressable, View,Text,TextInput,Button,Alert,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback, Image} from 'react-native';
function Hoa() {
    const DATA = [
        {
          title: 'Hoa Quà tặng',
          data: [{
            "mahoa": 1,
            "tenhoa": "Đón xuân",
            "dongia": 15000,
            "hinh": require('./assets/images/cuc_9.jpg'),
            "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
          }, {
            "mahoa": 2,
            "tenhoa": "Hồn nhiên",
            "dongia": 60000,
            "hinh": require('./assets/images/cuc_2.jpg'),
            "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
          }, {
            "mahoa": 3,
        
            "tenhoa": "Tím thuỷ chung",
            "dongia": 45000,
            "hinh": require('./assets/images/cuc_3.jpg'),
            "mota": "Hoa cúc tím"
          }, {
            "mahoa": 4,
            "tenhoa": "Nét duyên tím hoa cà",
            "dongia": 40000,
            "hinh": require('./assets/images/cuc_4.jpg'),
            "mota": "Hoa cúc màu tím nhạt"
          }, {
            "mahoa": 5,
            "tenhoa": "Cùng khoe sắc",
            "dongia": 70000,
            "hinh": require('./assets/images/cuc_5.jpg'),
            "mota": "Hoa cúc các màu: trắng, vàng, cam"
          }, {
            "mahoa": 6,
        
            "tenhoa": "Trắng thơ ngây",
            "dongia": 65000,
            "hinh": require('./assets/images/cuc_6.jpg'),
            "mota": "Hoa cúc trắng"
          }],
        },
        {
          title: 'Hoa Hồng',
          data: [{
            "mahoa": 7,
            "tenhoa": "Dây tơ hồng",
            "dongia": 250000,
            "hinh": require('./assets/images/cuoi_1.jpg'),
            "mota": "Hoa hồng màu hồng đậm, hoa hồng xanh, các loại lá măng"
          }, {
            "mahoa": 8,
            "tenhoa": "Cầu thuỷ tinh",
            "dongia": 220000,
            "hinh": require('./assets/images/cuoi_2.jpg'),
            "mota": "Hoa hồng và hoa thuỷ tiên trắng"
          }, {
            "mahoa": 9,
            "tenhoa": "Duyên thầm",
            "dongia": 260000,
            "hinh": require('./assets/images/cuoi_3.jpg'),
            "mota": "Hoa cúc trắng, baby, lá măng"
          }, {
            "mahoa": 10,
            "tenhoa": "Ðâm chồi nảy lộc",
            "dongia": 180000,
            "hinh": require('./assets/images/cuoi_4.jpg'),
            "mota": "Hoa hồng trắng và các loại lá măng"
          }, {
            "mahoa": 11,
            "tenhoa": "Hoà quyện",
            "dongia": 270000,
            "hinh": require('./assets/images/cuoi_5.jpg'),
            "mota": "Hoa hồng trắng, lá thuỷ tùng"
          }, {
            "mahoa": 12,
            "tenhoa": "Nồng nàn",
            "dongia": 210000,
            "hinh": require('./assets/images/cuoi_6.jpg'),
            "mota": "Hoa hồng đỏ, lá thuỷ tùng, lá măng"
          }],
        },
        {
          title: 'Hoa Tình Yêu',
          data: [{
            "mahoa": 13,
            "tenhoa": "Together",
            "dongia": 120000,
            "hinh": require('./assets/images/hoa1.jpg'),
            "mota": "Hồng xác pháo, cúc tím"
          }, {
            "mahoa": 14,
            "tenhoa": "Long trip",
            "dongia": 85000,
            "hinh": require('./assets/images/hoa2.jpg'),
            "mota": "Hoa hồng đỏ, lá kim thuỷ tùng"
          }, {
            "mahoa": 15,
            "tenhoa": "Beautiful life",
            "dongia": 100000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hoa hồng đỏ, lá măng, lá đệm"
          }, {
            "mahoa": 16,
            "tenhoa": "Morning Sun",
            "dongia": 75000,
            "hinh": require('./assets/images/dau.jpg'),
            "mota": "Hoa hồng vàng"
          }, {
            "mahoa": 17,
            "tenhoa": "Pretty Bloom",
            "dongia": 65000,
            "hinh": require('./assets/images/cuoi_5.jpg'),
            "mota": "Hoa hồng trắng và lá thông"
          }, {
            "mahoa": 18,
        
            "tenhoa": "Red Rose",
            "dongia": 45000,
            "hinh": require('./assets/images/cuoi_7.jpg'),
            "mota": "Hoa hồng đỏ và lá măng"
          }],
        },
        {
          title: 'Hoa Cưới',
          data: [{
            "mahoa": 19,
            "tenhoa": "Vấn vuơng",
            "dongia": 150000,
            "hinh": require('./assets/images/dau.jpg'),
            "mota": "Hoa hồng đỏ, hồng đậm, cúc đỏ, các loại lá"
          }, {
            "mahoa": 20,
            "tenhoa": "Nắng nhẹ nhàng",
            "dongia": 50000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hoa cúc xanh, hoa lys vàng, lá đệm"
          }, {
            "mahoa": 21,
            "tenhoa": "Thanh tao",
            "dongia": 120000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hoa thủy tiên, cúa trắng, cúc dại tím, các loại lá đệm"
          }, {
            "mahoa": 22,
        
            "tenhoa": "Tinh khiết",
            "dongia": 110000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hồng trắng và salem"
          }, {
            "mahoa": 23,
        
            "tenhoa": "Mùa xuân chín",
            "dongia": 150000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hồmg cam, cúc xanh, thuỷ tiên và các loại lá"
          }, {
            "mahoa": 24,
        
            "tenhoa": "Rực rở nắng vàng",
            "dongia": 75000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hồng vàng và cúc vàng"
          }, {
            "mahoa": 25,
        
            "tenhoa": "Love Candy",
            "dongia": 95000,
            "hinh": require('./assets/images/dan.jpg'),
            "mota": "Hoa hồng trắng tinh khôi xen với hoa hồng màu hồng nhạt, điểm thêm baby trắng và lá măng"
          }],
        },
      ];const[hoa,chonhoa]=useState({
        "mahoa": 5,
        "tenhoa": "Cùng khoe sắc",
        "dongia": 70000,
        "hinh": require('./assets/images/dan.jpg'),
        "mota": "Hoa cúc các màu: trắng, vàng, cam"
      });
      const [modalVisible, setModalVisible] = useState(false);
      const chon=(hoachon)=>
      {
      chonhoa(hoachon);
      setModalVisible(true);
      }
    return(
      <SafeAreaView style={styles.container}>
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{hoa.tenhoa}</Text>
                <Image source={hoa.hinh} /> 
                <Text style={styles.modalText}>{hoa.mota}</Text>
                <Text style={styles.modalText}>Giá Bán :{hoa.dongia} vnđ</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Đóng</Text>
                </Pressable>
              </View>
              
            </View>
          </Modal>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.mahoa+index }
          renderItem={({item}) => (
           <TouchableHighlight onPress={()=>{chon(item)}}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.tenhoa}</Text>
              <Image source={item.hinh} />  
              
          
            </View>
         </TouchableHighlight>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
          }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
      },
      header: {
        fontSize: 32,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
    });
export default Hoa