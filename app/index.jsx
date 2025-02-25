import { Redirect } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, TouchableNativeFeedbackBase } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChartComponent from "./ChartComponent";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Svg, { Polygon } from "react-native-svg";
const Welcome = () => {

  // State management
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [selectedDisease, setSelectedDisease] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <SafeAreaView className="bg-white h-full p-2">
      <ScrollView>
        {/* Advertisement Section */}
       <View className="flex-row items-center justify-between">
         <Text className="font-black text-[9px] mb-2">STRATEGIC DEVELOPMENT GOAL No 2 (SDGs)</Text>
        <Image
            className="w-[20px] h-[20px] rounded-md mb-1"
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740519247/circle_osquma.png" }}
          />
       </View>
        <View>
        <View>
            <Text className="text-[11px] leading-4 mt-1 text-[#19253C]">
              Agricultural extension services are programs designed to provide education and support to farmers and rural communities. These services aim to improve agricultural productivity, promote sustainable practices, and enhance the overall well-being of rural populations.
            </Text>
          </View>
          <View className="relative mt-2">
            <Image
              className="w-[345px] h-[200px] rounded-md"
              source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246241/image_ddtz7k.png" }}
            />
            <View className="absolute bottom-2 left-2">
              <Text className="text-white font-bold text-[12px]">FARM ENTERPRISE DEVELOPMENT</Text>
              <Text className="text-white text-[12px]">Sustainable farming</Text>
            </View>
          </View>
       
        </View>
        <View>
  <View className="flex-row items-center justify-between">
  <Text className="font-black text-[12px]  mt-2">NNFU Community</Text>
<View className="flex flex-row items-center gap-2">
  <Text className="text-[8px] text-black font-regular">Edit</Text>
<Image
            className="w-[15px] h-[15px] rounded-md mb-1 mt-1"
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740186105/Edit_pzly9j.png" }}
          />
</View>
  </View>
            <Text className="text-[9px] leading-3 mt-1 text-[#19253C]">
            Namibia National Farmers Union (NNFU) aims to increase food production for household security, enhance marketing of farming products to increase household income, increase participation and recognition of women in farming, contribute to environmental protection and sustainable utilization of natural resources.
            </Text>
          </View>
          <View>
  <View className="flex-row items-center justify-between">
  <Text className="font-black text-[12px]  mt-8">SDG Initiative</Text>

  </View>
            <Text className="text-[11px] leading-4 mt-1 text-[#19253C]">
            NNFUs Region Farmers Unions (RFUs) grown 10,000 farmers in Namibia.

            </Text>
            <Text className="text-[11px] leading-4 mt-3 text-[#19253C]">
            Provided Agricultural extension services and resources for sustainable farming, while also opening up markets for Farmers.


            </Text>
          </View>
          <View className="mt-2">
          <View className="flex-row items-center justify-between">
  <Text className="font-black text-[14px]  mt-2">Impact</Text>
<View className="flex flex-row items-center gap-2">
  <Text className="text-[8px] text-black font-regular">Save</Text>
<Image
            className="w-[18px] h-[18px] rounded-md mb-1 mt-1"
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740520403/Import_kg8eyz.png" }}
          />
</View>
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="-mt-1">
                        {/* Button Container */}
                        <View
                            style={{
                                position: 'relative',
                                backgroundColor: '#114918',
                                width: 100,
                                height: 20,
                                marginLeft: 170,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                                marginBottom: 30,  // Increased bottom margin to provide spacing between the button and chart
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>27,680</Text>
                            <Svg
                                height="15"
                                width="25"
                                style={{
                                    position: 'absolute',
                                    bottom: -15,
                                    left: '50%',
                                    transform: [{ translateX: -12.5 }],
                                }}
                            >
                                <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
                            </Svg>
                        </View>

                        {/* Chart Component Container */}
                        <View style={{ width: '100%', height: 220 }} className="-mt-4">
                            <ChartComponent style={{ flex: 1, height: '100%' }} />
                        </View>
                    </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
