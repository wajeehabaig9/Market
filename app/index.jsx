import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, inputText, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';



const Welcome = () => {
  const [activeTab, setActiveTab] = useState('crop');
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const cards = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636283/image_g1eelp.png',
      title: 'Capsicum',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636280/image-1_jwgzv0.png',
      title: 'Avocado',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards1 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636280/image-2_xxt7ze.png',
      title: 'Potatoes',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636281/image-3_z5f2mg.png',
      title: 'Beans',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards2 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636283/image-5_iemamb.png',
      title: 'Cabbage',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636281/image-6_cvuxo4.png',
      title: 'Onions',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards3 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636283/image-7_bbncle.png',
      title: 'Tomatoes',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741636281/image-8_ijurhz.png',
      title: 'Maize',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards4 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637342/image-1_zkhsbc.png',
      title: 'Ducks',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637339/image-2_mtd8ab.png',
      title: 'Eggs',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards5 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637339/image-3_qzlxpw.png',
      title: 'Rabbit',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637338/image-4_gq6iud.png',
      title: 'Milking Equipment',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards6 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637341/image-6_sarfke.png',
      title: 'Chicken',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637340/image-7_cisb70.png',
      title: 'Sheep',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards7 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637345/image-8_yftn0d.png',
      title: 'Goats',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741637343/image-9_bbphql.png',
      title: 'Tilapia',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  return (
    <SafeAreaView className="bg-white h-full p-2">
      <ScrollView>
        <View>
          <View className="flex-row  justify-between mt-2 mb-2 pr-4">
          <Text className="font-black text-[12px]">MARKET</Text>
          
          </View>
          <View className="relative">
  <View className="flex-row flex-wrap justify-between">
    {/* Crop Tab */}
    <TouchableOpacity className="w-[48%]" onPress={() => setActiveTab('crop')}>
      <Text className="font-black text-[12px]">CROP</Text>
      <View className={`h-1 rounded-lg ${activeTab === 'crop' ? 'bg-[#155528]' : 'bg-neutral-100'}`} />
    </TouchableOpacity>

    {/* Livestock Tab */}
    <TouchableOpacity className="w-[48%]" onPress={() => setActiveTab('livestock')}>
      <Text className="font-black text-[12px]">LIVESTOCK</Text>
      <View className={`h-1 rounded-lg ${activeTab === 'livestock' ? 'bg-[#155528]' : 'bg-neutral-100'}`} />
    </TouchableOpacity>
  </View>

  {/* Shopping Cart - Positioned Separately on the Right */}
  <View className="absolute right-3 -top-4">
    <Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741634428/add_shopping_cart_aweu1w.png' }} 
      className="w-[30px] h-[30px]" 
      resizeMode="contain" 
    />
    <View className="absolute -top-2 -right-3 bg-[#5E9932] w-[20px] h-[20px] items-center justify-center rounded-full">
      <Text className="text-white font-black text-[10px]">5</Text>
    </View>
  </View>
</View>

        </View>
        
        <View className="relative w-full h-[45px] mt-2">
                <TextInput
                  className="pl-2 pr-1 text-[7px] font-semibold text-left border border-[#D1D5DB] rounded-[8px]"
                  placeholderTextColor="#A1A1A1"
                  value={inputText}
                  onChangeText={setInputText}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />

                <View className={`absolute left-3 top-[40%] transform -translate-y-[10px] flex-row items-center ${inputText || isFocused ? 'opacity-0' : 'opacity-100'}`}>
                  <Text className="font-semibold text-[10px] text-[#979797]">Search </Text>
                  <Text className="font-black text-[10px] text-[#19253C]">{'Crop or Livestock'}</Text>
                </View>

                <Image
                  source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png" }}
                  className="absolute right-5 top-[45%] transform -translate-y-[10px] w-[18px] h-[20px]"
                />
              </View>
              {activeTab === 'crop' && (
  <ScrollView>
    {/* Crop / Livestock Section */}
    <View>
      <Text className="font-normal text-[6px] mb-2">Click icon to select crop / Livestock</Text>

      {/* Crop Image */}
      <View className="relative w-full h-[200px]">
        <Image
          source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741636319/image_68_krg9zy.png" }}
          className="w-full h-full rounded-lg"
          resizeMode="cover"
        />
      </View>
    </View>

    {/* PRODUCE RECOMENDED FOR YOU*/}
    <View>
      <Text className="font-black text-[12px] mb-2 mt-4">MARKET DAY SPECIAL</Text>

      {/* Cards Section */}
      <View className="flex flex-row gap-x-2">
        {cards.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Second Row of Cards */}
      <View className="flex flex-row gap-x-2 mt-2">
        {cards1.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Crop Image 2 */}
      <View>
        <View className="relative w-full h-[200px]">
          <Image
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741636282/image-4_fok3bq.png" }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
    
    <View>
      <Text className="font-black text-[12px] mb-2 mt-4">PRODUCE RECOMENDED FOR YOU</Text>

      {/* Cards Section */}
      <View className="flex flex-row gap-x-2">
        {cards2.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Second Row of Cards */}
      <View className="flex flex-row gap-x-2 mt-2">
        {cards3.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

     
    </View>
  </ScrollView>
)}

        {activeTab === 'livestock' &&  <ScrollView>
    {/* Crop / Livestock Section */}
    <View>
      <Text className="font-normal text-[6px] mb-2">Click icon to select crop / Livestock</Text>

      {/* Crop Image */}
      <View className="relative w-full h-[200px]">
        <Image
          source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741637353/image_rwgxi8.png" }}
          className="w-full h-full rounded-lg"
          resizeMode="cover"
        />
      </View>
    </View>

    {/* PRODUCE RECOMENDED FOR YOU*/}
    <View>
      <Text className="font-black text-[12px] mb-2 mt-4">MARKET DAY SPECIAL</Text>

      {/* Cards Section */}
      <View className="flex flex-row gap-x-2">
        {cards4.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[7px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Second Row of Cards */}
      <View className="flex flex-row gap-x-2 mt-2">
        {cards5.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[7px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-[1px]">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Crop Image 2 */}
      <View>
        <View className="relative w-full h-[200px]">
          <Image
            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741637352/image-5_begqfe.png" }}
            className="w-full h-full rounded-lg"
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
    
    <View>
      <Text className="font-black text-[12px] mb-2 mt-4">PRODUCE RECOMENDED FOR YOU</Text>

      {/* Cards Section */}
      <View className="flex flex-row gap-x-2">
        {cards6.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[7px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Second Row of Cards */}
      <View className="flex flex-row gap-x-2 mt-2">
        {cards6.map((card, index) => (
          <View key={index} className="w-[165px]">
            {/* Card Image */}
            <Image
              source={{ uri: card.imageUrl }}
              className="w-[165px] h-[100px] rounded-md rounded-tr-lg"
              resizeMode="cover"
            />

            {/* Card Content */}
            <View className="w-[165px] h-[65px] p-1.5">
              {/* Card Title and Rating */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[7px] font-black">{card.title}</Text>
                <View className="flex-row items-center">
                  {/* Star Rating */}
                  <View className="flex-row">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}  // Filled star image
                        style={{ width: 8, height: 8 }}
                      />
                    ))}
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png' }}  // Empty star image
                      style={{ width: 8, height: 8 }}
                    />
                  </View>
                  <Text className="font-[Inter] font-bold text-[6px] mt-1 text-right text-[#19253C] ml-1">
                    4.1(53)
                  </Text>
                </View>
              </View>

              {/* Card Description */}
              <View>
                <Text className="text-[8px] font-normal">Minimum Order Quantity (10)</Text>
              </View>

              {/* Card Footer */}
              <View className="flex-row justify-between items-center">
                <Text className="text-[8px] font-normal">Dallan Farm</Text>
                <TouchableOpacity className="w-[85px] h-[14px] text-white font-bold text-[6px] bg-[#155528] rounded-md items-center justify-center">
                  <Text className="text-center text-white font-bold text-[6px]">USD 5</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

     
    </View>
  </ScrollView>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
