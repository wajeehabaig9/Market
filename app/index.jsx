import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { withTiming, Easing, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Modal } from 'react-native';
import * as ImagePicker from "expo-image-picker";



const images = [
  'https://res.cloudinary.com/dzngpgki4/image/upload/v1741463022/image_12_fio7fp.png',
  'https://res.cloudinary.com/dzngpgki4/image/upload/v1741463055/image_13_d00kva.png',
  'https://res.cloudinary.com/dzngpgki4/image/upload/v1741463093/image_14_l6g5ws.png',
];
const imageTexts = [
  {
    title: "EXTENSION SERVICES",
    description: "Agricultural extension services",
    icon: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png"
  },
  {
    title: "LIVESTOCK CENSUS",
    description: "Census of Livestock farmers",
    icon: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png"
  },
  {
    title: "SEED NURSERY",
    description: "Building community seed nursery",
    icon: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png"
  }
];
const images1 = [
 
  'https://res.cloudinary.com/dzngpgki4/image/upload/v1741474304/image_24_nph5nz.png',
  'https://res.cloudinary.com/dzngpgki4/image/upload/v1741474289/image_25_ll9vir.png',
  'https://res.cloudinary.com/dzngpgki4/image/upload/v1741474279/image_26_fjsceh.png',
];
const imageTexts1 = [
  {
    title: "IRRIGATION",
    description: "Why take up irrigation farming?",
    icon: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png"
  },
  {
    title: "SEED NURSERIES",
    description: "Success starts with a seed",
    icon: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png"
  },
  {
    title: "GREEN HOUSE",
    description: "Improve your production",
    icon: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png"
  }
];
const items = [
  {
    image: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741476180/image_33_zvtbdv.png",
    title: "Zea M1",
    subtitle: "Maize Seed",
    description: "High-quality maize seeds for better yield.",
  },
  {
    image: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741476183/image_34_zv5coz.png",
    title: "CH1F",
    subtitle: "Chick Marsh",
    description: "Best animal feeds for healthy poultry.",
  },
];
const Welcome = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index

  const translateX = useSharedValue(0); // Shared value for sliding images
  const windowWidth = Dimensions.get('window').width; // Get window width for full-width slides
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Store new image

   const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Update the displayed image
    }
  };


  useEffect(() => {
    // Function to change the image every 1 second
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Update to next image
    }, 3000); // 3000ms or 3 seconds interval

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate the sliding effect of images
    translateX.value = withTiming(-windowWidth * currentIndex, {
      duration: 1000, // Duration of the sliding animation
      easing: Easing.linear, // Smooth transition
    });
  }, [currentIndex]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }], // Apply translateX animation
    };
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "Maize",
    code: "WEDKIL2A",
    tengeruTomatoes: "Tengeru Tomatoes:",
    Aa: "Appearance", // Editable heading
    Ba: "Flavor",      // Editable heading
    Ca: "Yield",       // Editable heading
    Da: "Disease Resistance", // Editable heading
    Ea: "Marketability",     // Editable heading

    appearance:
      "Tengeru tomatoes are medium to large-sized, with smooth, glossy red skins. They are round to slightly flattened in shape.",
    flavor:
      "They have a sweet and tangy flavor, making them ideal for both fresh consumption and cooking.",
    yield:
      "This variety is known for high productivity. It produces a large number of fruits per plant, making it a popular choice among smallholder farmers and commercial growers.",
    diseaseResistance:
      "Tengeru tomatoes are well-suited to Kenya’s diverse growing conditions. They are resistant to common tomato diseases, such as blight and bacterial wilt, which makes them relatively low-maintenance compared to other varieties.",
    marketability:
      "This variety is favored in local markets due to its robust shelf life and resistance to bruising. It is widely used in making sauces, stews, and fresh salads.",


  });

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  
  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <SafeAreaView className="bg-white h-full p-2">
    <ScrollView>
 <View>
 {activeTab === "Communities" && (
        <View>
         <View>
<View className="flex-row items-center justify-between mt-2 mb-3 pr-2">
        <Text className="font-black text-[14px]">COMMUNITIES</Text>
      
      </View>
      <View className="relative mb-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor="#979797"
          className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold"
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png",
          }}
          className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]"
          resizeMode="contain"
        />
      </View>
</View>
        </View>
      )}

 {activeTab === "Join Community" && (
        <View>
         <View>
<View className="flex-row items-center justify-between mt-2 mb-3 pr-2">
        <Text className="font-black text-[14px]">COMMUNITIES</Text>
      
      </View>
      <View className="relative mb-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor="#979797"
          className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold"
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png",
          }}
          className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]"
          resizeMode="contain"
        />
      </View>
</View>
        </View>
      )}
      {activeTab === "Request Status" && (
        <View>
         <View>
<View className="flex-row items-center justify-between mt-2 mb-3 pr-2">
        <Text className="font-black text-[14px]">COMMUNITIES</Text>
      
      </View>
      <View className="relative mb-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor="#979797"
          className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold"
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png",
          }}
          className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]"
          resizeMode="contain"
        />
      </View>
</View>
        </View>
      )}
 {activeTab === null ? (
        <View>
         <View>
<View className="flex-row items-center justify-between mt-2 mb-3 pr-2">
        <Text className="font-black text-[14px]">COMMUNITIES</Text>
        <View className="relative">
          <Image
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740184543/bell_wetyke.png" }}
            className="w-[22px] h-[22px]"
            resizeMode="contain"
          />
          <View className="absolute -top-2 -right-2 rounded-full w-[14px] h-[14px] items-center justify-center">
            <Text className="text-black font-black text-[8px]">3</Text>
          </View>
        </View>
      </View>
      <View className="relative mb-4">
        <TextInput
          placeholder="Search"
          placeholderTextColor="#979797"
          className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold"
        />
        <Image
          source={{
            uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png",
          }}
          className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]"
          resizeMode="contain"
        />
      </View>
</View>
        </View>
        ) : null}


        {/* Tab Selection */}
        <View className="flex-1 bg-white">
      {/* Tab Selection */}
      <View className="flex-row justify-between mb-4">
        {["Communities", "Join Community", "Request Status"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className="items-center"
          >
            <Text className="font-extrabold text-[11px] leading-[150%] tracking-[0px] text-center font-['Inter']">
              {tab}
            </Text>
            <View
              className={`w-[110px] h-[5px] rounded-[5px] mt-1 ${
                activeTab === tab ? "bg-green-900" : "bg-[#D9D9D9]"
              }`}
            />
          </TouchableOpacity>
        ))}
      </View>
 </View>

      {/* HIDE MAIN PAGE CONTENT WHEN A TAB IS SELECTED */}
      {activeTab === null ? (
        <View>
          <View>
   <Text className="font-black text-[12px] mt-2 mb-4">Whats Going on.</Text>

{/* Carousel Section */}
<View className="relative w-full overflow-hidden">
<Animated.View style={[{ flexDirection: 'row', gap: 5 }, animatedStyle]}>
{images.map((image, index) => (
<View key={index} style={{ width: windowWidth, height: 200 }}>
  <Image
    source={{ uri: image }}
    style={{ width: '100%', height: '100%', borderRadius: 10 }}
    resizeMode="cover"
  />
  <View className="absolute top-2 right-6">
    <Image
      source={{ uri: imageTexts[index].icon }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>
  <View className="absolute bottom-5 left-3">
    <Text className="text-white mb-3 font-bold text-[14px] leading-[100%] font-['Inter']">
      {imageTexts[index].title}
    </Text>
  </View>
  {/* Check if description exists before rendering */}
  {imageTexts[index].description && (
    <Text className="absolute bottom-2 left-3 text-white font-normal text-[12px] leading-[100%] font-['Inter']">
      {imageTexts[index].description}
    </Text>
  )}
</View>
))}
</Animated.View>
</View>

{/* Trending Communities Section */}
<View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-2 mb-2">Trending Communities</Text>

<View className="flex-row items-center space-x-1">
<Text className="font-black text-[#979797] text-[10px]  ">See more</Text>

<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473835/Expand_right_light_vf8wrf.png' }} 
      style={{ width: 13, height: 13}} 
    />
</View>
</View>
{/* Card Section */}
<View className="flex-row space-x-1">
  {/* Card 1 */}
  <View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
    <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741468448/image_16_bhzzsf.png' }} 
      style={{ width: 127, height: 80, borderRadius: 3 }} 
    />
    <Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">Fruit & veg</Text>
    <View className="flex-row justify-between items-center mt-2 space-x-1 ">
      <Text className="text-black font-bold text-[7px]">Namib Farmers</Text>
      <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }} 
      style={{ width: 10, height: 10, borderRadius: 3 }} 
    />
      <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
    </View>
  <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
    <Text className="font-black text-[8px] ">Nyika</Text>
  </View>
  </View>

  {/* Card 2 */}
  <View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
  <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741468447/image_17_yngzvi.png' }} 
      style={{ width: 110, height: 80, borderRadius: 3 }} 
    />
    <Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">Fish</Text>
    <View className="flex-row justify-between items-center mt-2 space-x-1 ">
      <Text className="text-black font-bold text-[7px]">Ohala Farmers</Text>
      <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }} 
      style={{ width: 10, height: 10, borderRadius: 3 }} 
    />
      <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
    </View>
  <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">4,333</Text>
    </View>
    <Text className="font-black text-[8px] ">Tuku</Text>
  </View>
  </View>
    {/* Card 3 */}
    <View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
    <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741468450/image_18_oqny3s.png' }} 
      style={{ width: 110, height: 80, borderRadius: 3 }} 
    />
    <Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">Cattle</Text>
    <View className="flex-row justify-between items-center mt-2 space-x-1 ">
      <Text className="text-black font-bold text-[7px]">Piny farmers</Text>
      <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }} 
      style={{ width: 10, height: 10, borderRadius: 3 }} 
    />
      <Text className="text-black font-bold text-[5px]">4.0(410)</Text>
    </View>
  <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">1714</Text>
    </View>
    <Text className="font-black text-[8px] ">Wilaya</Text>

  </View>
  </View>
</View>
<Text className="font-black text-[12px] mt-2 mb-2">Outlook</Text>
<View className="flex-row ">
{/* Box 1 */}
<View className="w-[140px] h-[57px] bg-[#FAFBFB] rounded-l-lg flex justify-center items-start ">
  <Text className="font-bold text-[6px] leading-[150%] text-left pl-2">
    Sharing best practice
  </Text>
  <Text className="font-bold text-[6px] leading-[150%] text-left pl-2">
  Mobilizing resources for production
  </Text>
  <Text className="font-bold text-[6px] leading-[150%] text-left pl-2">
  Access market
  </Text>
</View>

{/* Box 2 */}
<View className="w-[65px] h-[57px] bg-[#E7EBEB] flex flex-col justify-center items-center relative">
  <Text className="font-bold text-[12px] leading-[150%] text-center">1902</Text>
  <Text className="font-semibold text-[6px] leading-[150%] text-center">
    Enterprise
  </Text>
  <Text className="font-bold text-[6px]  text-right absolute top-0 right-3">
    5.1%
  </Text>
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741470577/Arrow_alt_ltop_alt_zfy4si.png"
    }}
    style={{ width: 10, height: 9, position: "absolute", top: 1, right: 1 }}
  />
</View>



{/* Box 4 */}
<View className="w-[70px] h-[57px] bg-[#CFD7D7] flex flex-col justify-center items-center relative">
  <Text className="font-bold text-[12px] leading-[150%] text-center">120</Text>
  <Text className="font-semibold text-[6px] leading-[150%] text-center">
  Communities
  </Text>
  <Text className="font-bold text-[6px] leading-[150%] text-right absolute top-0 right-3                                                                                                      ">
    3.2%
  </Text>
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741470577/Arrow_alt_ltop_alt_zfy4si.png"
    }}
    style={{ width: 10, height: 9, position: "absolute", top: 1, right: 1 }}
  />
</View>
    {/* Box 3 */}
    <View className="w-[70px] h-[57px]  bg-[#9FAFAF] rounded-r-lg flex justify-center items-center">
    <Text className="font-bold text-[12px] leading-[150%] text-center">$75M</Text>
  <Text className="font-semibold text-[6px] leading-[150%] text-center">
  Revenue
  </Text>
  <Text className="font-bold text-[6px] leading-[150%] text-right absolute top-0 right-3                                                                                                     ">
    7.9%
  </Text>
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741470577/Arrow_alt_ltop_alt_zfy4si.png"
    }}
    style={{ width: 10, height: 9, position: "absolute", top: 1, right: 1 }}
  />
</View>
</View>
<Text className="font-black text-[12px] mt-2 mb-2">Farming Tips</Text>
<View className="mt-1 flex-row">
{/* Left Side: Image */}
<View className="w-[180px] h-[100px] bg-white rounded-[3px]">
<Image
source={{
  uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741472624/image_20_i4egj9.png',
}}
style={{ width: '100%', height: '100%', borderRadius: 3 }}
resizeMode="cover"
/>
</View>

{/* Right Side: Text */}
<View className="ml-[2%] flex flex-col justify-start">
<Text className="font-black text-[10px] leading-[150%] w-[160px] tracking-normal">
Agriculture matters to the future of development
</Text>

{/* Description Text */}
<Text className="mt-[1%] text-[10px]  w-[166px] tracking-normal">
Agriculture plays a crucial role in development for several key reasons,
especially in developing...
</Text>
</View>
</View>
{/* Trending Communities Section */}
<View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Best Practice</Text>
<View className="flex-row items-center space-x-1">
<Text className="font-black text-[#979797] text-[10px]  ">See more</Text>

<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473835/Expand_right_light_vf8wrf.png' }} 
      style={{ width: 13, height: 13}} 
    />
</View>
</View>
{/* Card Section */}
<View className="flex-row space-x-1">
  {/* Card 1 */}
  <View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
    <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473309/image_21_aqk9bj.png' }} 
      style={{ width: 127, height: 80, borderRadius: 3 }} 
    />
    <Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">Namib Farmers</Text>
    <View className="flex-row justify-between items-center mt-2 space-x-1 ">
      <Text className="text-normal font-normal text-[6px]">Food Fortification  </Text>
 <View className="flex-row items-center ">
 <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }} 
      style={{ width: 10, height: 10, borderRadius: 3 }} 
    />
      <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
 </View>
    </View>
 
  </View>

  {/* Card 2 */}
  <View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">

     <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473310/image_22_xqcbjw.png' }} 
      style={{ width: 110, height: 80, borderRadius: 3 }} 
    />
    <Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">Ohala  Farmers</Text>
    <View className="flex-row justify-between items-center mt-2 space-x-1 ">
      <Text className="text-normal font-normal text-[6px]">Seed Bank  </Text>
 <View className="flex-row items-center ">
 <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }} 
      style={{ width: 10, height: 10, borderRadius: 3 }} 
    />
      <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
 </View>
    </View>
  </View>
    {/* Card 3 */}
    <View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
    <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473309/image_23_kqkdjr.png' }} 
      style={{ width: 110, height: 80, borderRadius: 3 }} 
    />
    <Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">Piny Farmers</Text>
    <View className="flex-row justify-between items-center mt-2 space-x-1 ">
      <Text className="text-normal font-normal text-[6px]">Environment  </Text>
 <View className="flex-row items-center ">
 <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }} 
      style={{ width: 10, height: 10, borderRadius: 3 }} 
    />
      <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
 </View>
    </View>

  </View>
</View>
<Text className="font-black text-[12px] mt-2 mb-4">Technologies and Innovations</Text>

<View className="relative w-full overflow-hidden">
<Animated.View style={[{ flexDirection: 'row', gap: 5 }, animatedStyle]}>
{images1.map((image, index) => (
<View key={index} style={{ width: windowWidth, height: 200 }}>
  <Image
    source={{ uri: image }}
    style={{ width: '100%', height: '100%', borderRadius: 10 }}
    resizeMode="cover"
  />
  <View className="absolute top-2 right-6">
    <Image
      source={{ uri: imageTexts1[index].icon }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>
  <View className="absolute bottom-5 left-3">
    <Text className="text-white mb-3 font-bold text-[14px] leading-[100%] font-['Inter']">
      {imageTexts1[index].title}
    </Text>
  </View>
  {/* Check if description exists before rendering */}
  {imageTexts[index].description && (
    <Text className="absolute bottom-2 left-3 text-white font-normal text-[12px] leading-[100%] font-['Inter']">
      {imageTexts1[index].description}
    </Text>
  )}
</View>
))}
</Animated.View>
</View>

<View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Partners supporting farmers</Text>
<View className="flex-row items-center space-x-1">
<Text className="font-black text-[#979797] text-[10px]  ">See more</Text>

<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473835/Expand_right_light_vf8wrf.png' }} 
      style={{ width: 13, height: 13}} 
    />
</View>
</View>
{/* Card Section */}
<View className="flex-row space-x-1">
{/* Card 1 */}
<View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
<Image
source={{
  uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741475142/image_30_lxgq1k.png',
}}
className="w-[127px] h-[80px] rounded-sm"
/>
<Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">
Farm Chem
</Text>
<View className="absolute top-0 right-0 p-1">
<Image
  source={{
    uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741474969/image_27_zpijfk.png',
  }}
  className="w-[15px] h-[15px] rounded-sm"
/>
</View>
<View className="flex-row justify-between items-center mt-2 space-x-1">
<Text className="text-normal font-normal text-[6px]">Farm Inputs</Text>
<View className="flex-row items-center">
  <Image
    source={{
      uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png',
    }}
    className="w-[10px] h-[10px] rounded-sm"
  />
  <Text className="text-black font-bold text-[5px]">4.1(53)</Text>
</View>
</View>
</View>

{/* Card 2 */}
<View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
<Image
source={{
  uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741475139/image_31_xlqwl9.png',
}}
className="w-[110px] h-[80px] rounded-sm"
/>
<Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">
Farm Machinery
</Text>
<View className="absolute top-0 right-0 p-1">
<Image
  source={{
    uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741474969/image_28_bbes98.png',
  }}
  className="w-[15px] h-[15px] rounded-sm"
/>
</View>
<View className="flex-row justify-between items-center mt-2 space-x-1">
<Text className="text-normal font-normal text-[6px]">Tractors</Text>
<View className="flex-row items-center">
  <Image
    source={{
      uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png',
    }}
    className="w-[10px] h-[10px] rounded-sm"
  />
  <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
</View>
</View>
</View>

{/* Card 3 */}
<View className="bg-white p-1 rounded-lg shadow-lg w-[110px]">
<Image
source={{
  uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741475141/image_32_engp0t.png',
}}
className="w-[110px] h-[80px] rounded-sm"
/>
<Text className="text-white absolute top-[60px] left-[10px] font-bold text-[10px]">
</Text>
<View className="absolute top-0 right-0 p-1">
<Image
  source={{
    uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741474969/image_29_cboubj.png',
  }}
  className="w-[15px] h-[15px] rounded-sm"
/>
</View>
<View className="flex-row justify-between items-center mt-2 space-x-1">
<Text className="text-normal font-normal text-[6px]">Vet Services</Text>
<View className="flex-row items-center">
<Image
    source={{
      uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png',
    }}
    className="w-[10px] h-[10px] rounded-sm"
  />
  <Text className="text-black font-bold text-[5px]">4.3(653)</Text>
</View>
</View>
</View>
</View>
<View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Specials</Text>
<View className="flex-row items-center space-x-1">
<Text className="font-black text-[#979797] text-[10px]  ">See more</Text>

<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741473835/Expand_right_light_vf8wrf.png' }} 
      style={{ width: 13, height: 13}} 
    />
</View>
</View>
{/* Card Section */}
<View>
  {/* Cards */}
  <View className="flex-row space-x-1">
    {items.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true); // Open modal when card is clicked
        }}
      >
        <View className="bg-white p-1 rounded-lg shadow-lg w-[165px]">
          <Image
            source={{
              uri: item.image,
            }}
            className="w-[165px] h-[110px] rounded-sm"
          />
          
          {/* Title and Subtitle */}
          <View className="absolute top-[90px] left-[10px] flex-row space-x-1">
            <Text className="text-white font-bold text-[10px]">
              {item.title} |
            </Text>
            <Text className="text-[#C4C4C4] font-bold text-[10px]">
              {item.subtitle}
            </Text>
          </View>

          {/* Icon in Top Right */}
          <View className="absolute top-2 right-0 p-1">
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741476176/image_35_rgcboh.png',
              }}
              className="w-[25px] h-[25px] rounded-sm"
            />
          </View>

          {/* Category and Rating */}
          <View className="flex-row justify-between items-center mt-2 space-x-1">
            <Text className="text-normal font-normal text-[6px]">{item.category}</Text>
            <View className="flex-row items-center">
              <Image
                source={{
                  uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png',
                }}
                className="w-[10px] h-[10px] rounded-sm"
              />
              <Text className="text-black font-bold text-[5px]">4.1(53)</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>

  {/* Full Screen Modal */}
  <Modal
      animationType="none"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      {selectedItem && (
        <ScrollView>
          <View className="p-2 bg-white flex-1">
            {/* Heading */}
            <Text className="font-black text-[12px] mt-4 mb-2">FARMING TIPS</Text>

            {/* Image Container */}
            <View className="relative">
              <Image
                source={{
                  uri: selectedImage || selectedItem.image,
                }}
                className="w-full h-[220px] rounded-md"
              />

              {/* "Insert" Button (Top Right) */}
              <TouchableOpacity
                onPress={pickImage}
                className="absolute top-2 right-2 px-2 py-1"
              >
                <Text className="text-[6px] font-medium text-right text-white">Insert</Text>
              </TouchableOpacity>

              {/* Text Overlay (Not Editable) */}
              <View className="absolute bottom-0 p-2 rounded-md">
                <Text className="font-bold text-[14px] leading-[100%] text-white">
                  SEED NURSERY
                </Text>
                <Text className="font-normal text-[12px] leading-[100%] text-white">
                  Building community seed nursery
                </Text>
              </View>
            </View>

            {/* Editable Fields */}
            <View className="mt-4">
              <View>
                <View className="flex-row justify-between items-center">
                  {isEditing ? (
                    <TextInput
                      className="font-black text-[10px] mt-4 mb-2"
                      value={formData.title}
                      onChangeText={(text) => handleInputChange("title", text)}
                    />
                  ) : (
                    <Text className="font-black text-[10px] mt-4 mb-2">{formData.title}</Text>
                  )}
                  <Text className="font-normal text-[10px]">{formData.code}</Text>
                </View>

                <View className="flex-row justify-between items-center mt-3">
                  {isEditing ? (
                    <TextInput
                      className="font-black text-[10px] bg-[#F3F5F5] w-[150px] p-1 h-[32px]"
                      value={formData.tengeruTomatoes}
                      onChangeText={(text) => handleInputChange("tengeruTomatoes", text)}
                    />
                  ) : (
                    <Text className="font-black text-[10px] bg-[#F3F5F5] w-[150px] p-1 h-[32px]">
                      {formData.tengeruTomatoes}
                    </Text>
                  )}

                  <TouchableOpacity onPress={() => setIsEditing(true)} className="flex-row items-center space-x-1">
                    <Text className="font-semibold text-[10px] text-[#979797]">Edit</Text>
                    <Image
                      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741533171/image_46_tzj5u6.png" }}
                      className="w-[14px] h-[14px] rounded-sm"
                    />
                  </TouchableOpacity>
                </View>

                {/* Editable Text Sections */}
               
    {/* Editable Sections: Headings and Descriptions */}
    {[
        { key: "Aa", descriptionKey: "appearance" },
        { key: "Ba", descriptionKey: "flavor" },
        { key: "Ca", descriptionKey: "yield" },
        { key: "Da", descriptionKey: "diseaseResistance" },
        { key: "Ea", descriptionKey: "marketability" },
      ].map(({ key, descriptionKey }) => (
        <View key={key} className="flex-row items-start mt-3">
          {/* Editable Heading */}
          {isEditing ? (
            <TextInput
              className="font-black text-[8px] bg-[#F3F5F5] w-[150px] p-1 h-[32px] capitalize"
              value={formData[key]}
              onChangeText={(text) => handleInputChange(key, text)}
            />
          ) : (
            <Text className="font-black text-[8px] bg-[#F3F5F5] w-[150px] p-1 h-[32px] capitalize">
              {formData[key]}:
            </Text>
          )}

          {/* Editable Description */}
          {isEditing ? (
            <TextInput
              className="font-normal text-[8px] bg-[#F3F5F5] w-[190px] p-2 h-[100px] leading-[120%]"
              multiline
              value={formData[descriptionKey]}
              onChangeText={(text) => handleInputChange(descriptionKey, text)}
              style={{ textAlignVertical: "top" }}
            />
          ) : (
            <Text className="font-normal text-[8px] bg-[#F3F5F5] w-[190px] p-2 h-[100px] leading-[120%] text-left">
              {formData[descriptionKey]}
            </Text>
          )}
        </View>
      ))} 
      


              </View>

              {/* Save Button (Always Visible) */}
              <View className="flex-row justify-between items-center mt-4">
                <TouchableOpacity className="bg-[#155528] w-[100px] p-[1px] rounded-md">
                  <Text className="font-semibold text-[10px] text-white text-center">USD 5 / Kg</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSave} className="flex-row items-center space-x-1">
                  <Text className="font-semibold text-[10px] text-[#979797]">Save</Text>
                  <Image
                    source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740520403/Import_kg8eyz.png" }}
                    className="w-[14px] h-[14px] rounded-sm"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Modal>

</View>

<View className="w-full h-[100px] rounded-b-lg rounded-md border-b border-[#979797] bg-[#FAFBFB] mt-2 p-3">
<View className="flex-row justify-between items-center">
<Text className="text-[10px] font-bold">
SDG No 17
</Text>
<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741476428/image_36_jfc44e.png' }} 
      style={{ width: 23, height: 23}} 
    />
</View>
<View className="w-[320px]">
<Text className="text-[10px] font-normal mt-1">
Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development
</Text>
</View>
</View>
   </View>
        </View>
      ) : null}

      {/* SHOW ONLY SELECTED TAB CONTENT */}
      {activeTab === "Communities" && (
        <View>
<View>
<View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Communities</Text>

</View>
{/* Card Section */}
<View className="flex-row space-x-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741511123/image_38_qa7c8c.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">NNFU | <Text className="text-gray-400">South</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741511122/image_37_qflsdr.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">KUNDI  |<Text className="text-gray-400">Central</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>
  </View>
</View>
<View className="flex-row space-x-2 mt-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741511123/image_39_qjranl.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">KWETU   |<Text className="text-gray-400"> North</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741511122/image_40_fr2sat.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">RSDA  |<Text className="text-gray-400"> West</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.0(39)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>
  </View>
</View>
<View>
<Text className="font-black text-[12px] mt-4 mb-2">Notice board</Text>

<View className="relative w-full h-[200px] ">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741512708/image_41_akj9zs.png" }}
    className="w-full h-full rounded-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-6">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>
  <View className="absolute bottom-5 left-3">
    <Text className="text-white mb-3 font-bold text-[14px] leading-[100%] font-['Inter']">
    4K CLUB
    </Text>
  </View>
 
    <Text className="absolute bottom-2 left-3 text-white font-normal text-[12px] leading-[100%] font-['Inter']">
   Making farming cool
    </Text>
 
</View>

  </View>
  <View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Popular Communities</Text>

</View>
{/* Card Section */}
<View className="flex-row space-x-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513044/image_42_my1jo3.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">JAMII  | <Text className="text-gray-400"> East</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">340</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513041/image_43_m4r5rf.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">UMUNTHU  |<Text className="text-gray-400"> South</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">48</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>
  </View>
</View>
<View className="flex-row space-x-2 mt-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513041/image_44_trmdmb.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">JAMII  | <Text className="text-gray-400"> East</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">340</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513041/image_45_dcza0v.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <Text className="text-black font-bold text-[8px]">UMUNTHU  |<Text className="text-gray-400"> South</Text></Text>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">48</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Member</Text>
</TouchableOpacity>
  </View>
</View>
</View>
        </View>
      )}

      {activeTab === "Join Community" && (
        <View>
   <View>
<View>
<View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Communities</Text>

</View>
{/* Card Section */}
<View className="flex-row space-x-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513320/image_bdzwop.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
<View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">NNFU | </Text>
<Text className="text-gray-400 font-bold text-[8px]"> South</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513309/image-1_s8i98o.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row justify-between items-center mt-1">
<View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">KUNDI  |</Text>
<Text className="text-gray-400 font-bold text-[8px]"> Central</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>
</TouchableOpacity>
  </View>
</View>
<View className="flex-row space-x-2 mt-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513306/image-2_p5jslo.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">KWETU |</Text>
<Text className="text-gray-400 font-bold text-[8px]"> North</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>

</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513307/image-3_s5kkdj.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">RSDA  |</Text>
<Text className="text-gray-400 font-bold text-[8px]"> West</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.0(39)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">12,001</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>

</TouchableOpacity>
  </View>
</View>
<View>
<Text className="font-black text-[12px] mt-4 mb-2">Notice board</Text>

<View className="relative w-full h-[200px] ">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741513310/image-5_vrklix.png" }}
    className="w-full h-full rounded-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-6">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>
  <View className="absolute bottom-5 left-3">
    <Text className="text-white mb-3 font-bold text-[14px] leading-[100%] font-['Inter']">
    NNFU COMMUNITY
    </Text>
  </View>
 
    <Text className="absolute bottom-2 left-3 text-white font-normal text-[12px] leading-[100%] font-['Inter']">
    Supporting farmers grow productivity
    </Text>
 
</View>

  </View>
  <View className="flex-row justify-between items-center">
<Text className="font-black text-[12px] mt-4 mb-2">Popular Communities</Text>

</View>
{/* Card Section */}
<View className="flex-row space-x-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513044/image_42_my1jo3.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">JAMII  | </Text>
<Text className="text-gray-400 font-bold text-[8px]"> East</Text>
</View>
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">340</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513307/image-6_ajxknb.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">UMUNTHU  | </Text>
<Text className="text-gray-400 font-bold text-[8px]"> South</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">48</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>
</TouchableOpacity>
  </View>
</View>
<View className="flex-row space-x-2 mt-2">
  {/* Card 1 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513310/image-7_tasecp.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
    <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">SAWIF | </Text>
<Text className="text-gray-400 font-bold text-[8px]"> Tswane</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">340</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>
</TouchableOpacity>

  </View>

  {/* Card 2 */}
  <View className="bg-white  rounded-lg shadow-lg w-[165px]">
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741513309/image-8_rlxk5n.png' }}
      className="w-[165px] h-[90px] rounded-md"
    />
   <View className="mt-1">
      <View className="flex-row justify-between items-center mt-1">
      <View className="flex-row items-center">
<Text className="text-black font-bold text-[8px]">UMUNE  |</Text>
<Text className="text-gray-400 font-bold text-[8px]">  Central</Text>
</View>

        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
            className="w-[10px] h-[10px]"
          />
          <Text className="text-black font-bold text-[6px]">4.1(53)</Text>
        </View>
      </View>
     
    </View>
    <View className="flex-row justify-between items-center ">
  <View className="flex-row items-center  ">
      <Text className="font-normal text-[6px]">Farmers:</Text>
      <Text className="font-black text-[6px]">48</Text>
    </View>
  </View>
  <TouchableOpacity className="w-[165px] h-[20px] mt-1 bg-[#E7EBEB] rounded-b-md justify-center items-center">
  <Text className="text-black font-semibold text-[8px] leading-[15px] tracking-[0px]">Join</Text>
</TouchableOpacity>
  </View>
</View>
</View>
        </View>
        </View>
      )}

      {activeTab === "Request Status" && (
        <View>
          <Text className="font-bold text-lg">Request Status Content</Text>
          <Text>This is the content for the Request Status tab.</Text>
        </View>
      )}
    </View>


     
   
    </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
