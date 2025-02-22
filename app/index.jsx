import { Redirect } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, TouchableNativeFeedbackBase } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <Text className="font-black text-[12px] mb-2">ADVERTISEMENT</Text>

        <View>
          <Image
            className="w-[345px] h-[200px] rounded-md"
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246241/image_ddtz7k.png" }}
          />
          <View>
            <Text className="font-black text-[14px] mt-3">EXTENSION SERVICES</Text>
            <Text className="text-[8px] italic">Expertise of agricultural extension services worker</Text>
            <Text className="text-[11px] leading-4 mt-2 text-[#19253C]">
              Agricultural extension services are programs designed to provide education and support to farmers and rural communities. These services aim to improve agricultural productivity, promote sustainable practices, and enhance the overall well-being of rural populations.
            </Text>
          </View>
        </View>

        {/* Communication Section */}
        <View className="mt-4">
          <Text className="font-black text-[12px] text-black">COMMUNICATION</Text>
          <Text className="text-[6px] italic text-black mb-1">Advertisement or communication</Text>

          <View className="flex-row justify-between">
            {/* Disease Dropdown */}
            <View className="relative">
              <View className="flex-row items-center">
                <TouchableOpacity onPress={toggleDropdown}>
                  <Text className="font-bold text-[14px] text-black mr-2">
                    {selectedDisease || "Disease"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleDropdown}>
                  <Image
                    source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/Arrow_drop_down_1_prrcid.png" }}
                    className="w-4 h-4"
                  />
                </TouchableOpacity>
              </View>

              <Text className="text-[8px] italic text-black mb-2">Select type of problem</Text>

              {dropdownOpen && (
                <View className="absolute bg-white border border-[#D9D9D9] rounded-md mt-12 w-[220px] z-10">
                  {["Infection", "Infection", "Infection"].map((disease, index) => (
                    <TouchableOpacity key={index} onPress={() => { setSelectedDisease(disease); toggleDropdown(); }}>
                      <Text className="text-black p-2">{disease}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            {/* Search Input */}
            <View className="flex-row items-center">
              <View className="relative w-[200px] h-[35px]">
                <TextInput
                  className="pl-2 pr-1 text-[7px] font-semibold text-left border border-[#D1D5DB] rounded-[8px]"
                  placeholderTextColor="#A1A1A1"
                  value={inputText}
                  onChangeText={setInputText}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />

                <View className={`absolute left-3 top-[60%] transform -translate-y-[10px] flex-row items-center ${inputText || isFocused ? 'opacity-0' : 'opacity-100'}`}>
                  <Text className="font-semibold text-[6px] text-[#979797]">Search</Text>
                  <Text className="font-black text-[6px] text-[#19253C]">{' Crop- eg capsicum  / Livestock'}</Text>
                </View>

                <Image
                  source={require('../assets/images/search.png')}
                  className="absolute right-5 top-[45%] transform -translate-y-[10px] w-[18px] h-[20px]"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Disease Details Section */}
        <View className="mt-2">
          <Text className="font-bold text-[12px] text-[#19253C]">Maize :</Text>
          <Text className="font-normal text-[12px]">Bacterial leaf spot.</Text>
          <Text className="text-[11px] font-normal mt-2 leading-4 text-[#19253C]">
            Maize bacterial leaf spot is a common disease affecting pepper plants, caused by the bacterium Xanthomonas campestris pv. vesicatoria. It thrives in hot, humid conditions and can cause significant damage to the leaves and fruits of pepper plants.
          </Text>

          <Text className="font-bold text-[12px] text-[#19253C] mt-2">Symptoms</Text>
          <Text className="text-[11px] font-normal mt-2 leading-4 text-[#19253C]">
            Small, water-soaked spots on leaves that turn brown or black. Lesions on stems, petioles, and fruits. Wilting and stunted growth in severe cases.
          </Text>

          {/* Disease Images */}
          <View className="mt-5 flex-row justify-between">
            {[...Array(3)].map((_, index) => (
              <Image
                key={index}
                className="w-[110px] h-[63px] rounded-md"
                source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246241/image_ddtz7k.png" }}
              />
            ))}
          </View>

          {/* Management Section */}
          <View>
            <Text className="font-bold text-[12px] text-[#19253C] mt-2">Management</Text>
            <Text className="text-[10px] font-normal mt-2 leading-4 text-[#19253C]">
              Remove affected parts: Prune and dispose of infected leaves and fruits to prevent the spread. Use disease-resistant varieties: Planting resistant varieties can help reduce the incidence of the disease. Proper spacing: Ensure good air circulation by spacing plants adequately. Avoid overhead watering: Water at the base of the plant to keep foliage dry. Sanitation: Clean tools and hands to avoid spreading the bacteria.
            </Text>
          </View>
          <View className="mt-5 flex-row">
            <View>
              <Image
                className="w-[145px] h-[100px] "
                source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246240/image_1_yvke7x.png" }}
              />
            </View>
            <View>
              <View className="bg-[#F3F5F5] w-[200px] h-[100px] p-2">
                <Text className="text-[8px] font-black ">Benefits</Text>
                <Text className="text-[8px] font-normal mt-2" >Good for 1 Hectre</Text>
                <Text className="text-[8px] font-normal mt-2" >Quick Action</Text>
                <Text className="text-[8px] font-normal mt-2 " >100ml Per 16 Litres value for money</Text>
              </View>
              <View className="flex-row mt-1">
                {/* First Button */}
                <TouchableOpacity className="w-[120px] h-[26px] border-b  border-b-[1px]  border-[#979797] rounded-bl-[2px] items-start justify-center p-1">
                  <Text className="text-[8px] font-bold">  CapKil-1</Text>
                </TouchableOpacity>

                {/* Second Button */}
                <TouchableOpacity className="w-[79px] h-[26px] border-b border-[#979797] border-b-[1px] bg-[#155528] rounded-br-[2px] items-center justify-center p-1">
                  <Text className="text-[8px] font-bold text-white">USD 18</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>

        </View>

        {/* Review Section */}

        <View className="flex-row justify-between items-center mt-2 w-[320px]">
          {/* Left Section */}
          <View className="flex-row items-center">
            <Text className="font-[Inter] font-normal text-[12px] leading-[21px] text-right mr-1">
              Reviews
            </Text>
            <View className="flex-row items-center">
              {/* Star Rating */}
              <View className="flex-row">
                {[...Array(4)].map((_, index) => (
                  <Image
                    key={index}
                    source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Replace with the URL or local path of the filled star image
                    style={{ width: 13, height: 13 }}
                  />
                ))}
                <Image
                  source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Replace with the URL or local path of the unfilled star image
                  style={{ width: 13, height: 13 }}
                />
              </View>
              <Text className="font-[Inter] font-semibold text-[8px] mt-1 text-right text-[#19253C] ml-1">
                4.1(188)
              </Text>
            </View>
          </View>

          {/* Right Section */}
          <Text className="font-[Inter] font-medium text-[8px] leading-[15px] text-[#979797]">
            Click to buy
          </Text>
        </View>
        {/* cards */}
        <View>
          <Text className="text-[14px] font-black mt-5">PRODUCTS / SERVICES</Text>
          <View className="flex-row justify-between">
            <View className="mt-1">
              <View>
                <Image
                  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246240/image_7_guttoe.png" }}
                  width={165}
                  className="rounded-md"
                  height={100}
                />
                <View className="w-[165px] flex-row justify-between">
                  <Text className="w-[85px]  text-[10px] p-1 font-bold rounded-bl-[2px] rounded-tl-[2px] border-b-[1px] border-[#979797] ">CapKil-1</Text>
                  <Text className="bg-[#EDF0EF] text-[10px] w-[80px] text-center p-1 font-bold rounded-br-[3px] border-b-[1px] border-[#979797] ">USD 18</Text>
                </View>
              </View>
            </View>
            <View className="mt-1">
              <View>
                <Image
                  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246240/image_9_ihxsiq.png" }}
                  width={165}
                  className="rounded-md"
                  height={100}
                />
                <View className="w-[165px] flex-row justify-between">
                  <Text className="w-[85px]  text-[10px] p-1 font-bold rounded-bl-[2px] rounded-tl-[2px] border-b-[1px] border-[#979797]  text-center">CapKil-2</Text>
                  <Text className="bg-[#EDF0EF] text-[10px] w-[80px] text-center p-1 font-bold rounded-br-[3px] border-b-[1px] border-[#979797] ">USD 18</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row justify-between mt-1" >
            <View className="mt-1">
              <View>
                <Image
                  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246240/image_10_de5fpb.png" }}
                  width={165}
                  className="rounded-md"
                  height={100}
                />
                <View className="w-[165px] flex-row justify-between">
                  <Text className="w-[85px]  text-[10px] p-1 font-bold rounded-bl-[2px] rounded-tl-[2px] border-b-[1px] border-[#979797] ">Grow IT-1</Text>
                  <Text className="bg-[#EDF0EF] text-[10px] w-[80px] text-center p-1 font-bold rounded-br-[3px] border-b-[1px] border-[#979797] ">USD 18</Text>
                </View>
              </View>
            </View>
            <View className="mt-1">
              <View>
                <Image
                  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246240/image_11_gcczbv.png" }}
                  width={165}
                  className="rounded-md"
                  height={100}
                />
                <View className="w-[165px] flex-row justify-between">
                  <Text className="w-[85px]  text-[10px] p-1 font-bold rounded-bl-[2px] rounded-tl-[2px] border-b-[1px] border-[#979797] text-center">CapKil-3</Text>
                  <Text className="bg-[#EDF0EF] text-[10px] w-[80px] text-center p-1 font-bold rounded-br-[3px] border-b-[1px] border-[#979797] ">USD 18</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row justify-end space-x-5 items-center mt-5 mb-5">
          <Text className="text-[10px] font-light">Talk to advertiser</Text>
          <Image source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740246239/Rectangle_34630705_ijnnbd.png" }} className="w-5 h-5" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
