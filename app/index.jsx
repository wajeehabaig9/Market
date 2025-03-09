import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';



const Welcome = () => {
  const [activeTab, setActiveTab] = useState('crop');
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741551495/image_48_tvv5b8.png',
      title: 'Dallan Farm',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741551494/image_49_mcy05r.png',
      title: 'MotorB Inc.',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  const cards1 = [
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741558570/image_62_jtmkxn.png',
      title: 'Dallan Farm',
      subtitle: 'High Value crops',
      return: '15-30%',
      rating: '4.0(39)',
    },
    {
      imageUrl: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741551494/image_49_mcy05r.png',
      title: 'MotorB Inc.',
      subtitle: 'Deliveries business',
      return: '15-30%',
      rating: '4.0(39)',
    },
    // Add more cards as needed
  ];
  useEffect(() => {
    // Set an interval to change the index every 1 second (1000ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clear the interval on cleanup
  }, [cards.length]);

  useEffect(() => {
    // Animate to the new card position when the current index changes
    Animated.timing(scrollX, {
      toValue: currentIndex * -110, // Negative value to scroll left
      duration: 500, // Smooth transition duration
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  return (
    <SafeAreaView className="bg-white h-full p-2">
      <ScrollView>
        <View>
          <View className="flex-row items-center justify-between mt-2 mb-3 pr-2">
            <Text className="font-black text-[14px]">COMMUNITIES</Text>
            <View className="relative">
              <Image source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740184543/bell_wetyke.png' }} className="w-[22px] h-[22px]" resizeMode="contain" />
              <View className="absolute -top-2 -right-2 rounded-full w-[14px] h-[14px] items-center justify-center">
                <Text className="text-black font-black text-[8px]">3</Text>
              </View>
            </View>
          </View>
          <Text className="font-black text-[12px]">CONTRACT FARMING</Text>
          <View className="flex-row flex-wrap justify-between mt-3">
            <TouchableOpacity className="w-[48%]" onPress={() => setActiveTab('crop')}>
              <Text className="font-black text-[12px]">CROP</Text>
              <View className={`h-1 rounded-lg ${activeTab === 'crop' ? 'bg-[#155528]' : 'bg-neutral-100'}`} />
            </TouchableOpacity>
            <TouchableOpacity className="w-[48%]" onPress={() => setActiveTab('livestock')}>
              <Text className="font-black text-[12px]">LIVESTOCK</Text>
              <View className={`h-1 rounded-lg ${activeTab === 'livestock' ? 'bg-[#155528]' : 'bg-neutral-100'}`} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row space-x-2 mt-4">
          {['Seed', 'Processing', 'Value crop', 'Buy Farm'].map((label, index) => (
            <View key={index} className="relative">
              <TouchableOpacity className="w-[80px] h-[30px] bg-white border-b-2 border-[#979797] rounded-b-sm flex items-start p-1 justify-center">
                <Text className="font-inter font-semibold text-[8px] leading-[150%] text-black text-left">{label}</Text>
              </TouchableOpacity>
              <View className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-b-md" />
              {index === 0 ? (
                <View className="absolute bottom-0 left-0 w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-l-sm" />
              ) : (
                <View className="absolute bottom-0 left-[-1px] w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-l-sm" />
              )}
              {index === 3 ? (
                <View className="absolute bottom-0 right-0 w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-r-sm" />
              ) : (
                <View className="absolute bottom-0 right-[-1px] w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-r-sm" />
              )}
            </View>
          ))}
        </View>
        <View className="relative mb-4 mt-4">
          <TextInput placeholder="Search" placeholderTextColor="#979797" className="w-full border border-[#D9D9D9] rounded-md px-4 py-2 text-[#979797] font-semibold" />
          <Image source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740247697/search_1_ne6xig.png' }} className="absolute right-3 top-2 -translate-y-1/2 w-[26px] h-[31px]" resizeMode="contain" />
        </View>
        {activeTab === 'crop' && <ScrollView>
          <View>
          <View>
          <Text className="font-black text-[12px] mb-2">Whats Going on.</Text>

<View className="relative w-full h-[200px] ">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741551212/image_47_k3dvgf.png" }}
    className="w-full h-full rounded-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-2">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>
  <View className="absolute bottom-5 left-3">
    <Text className="text-white mb-3 font-bold text-[14px] leading-[100%] font-['Inter']">
    WHAT IS IN A SEED? 
    </Text>
  </View>
 
    <Text className="absolute bottom-2 left-3 text-white font-normal text-[12px] leading-[100%] font-['Inter']">
    Why should you invest in seed propergation?
    </Text>
 
</View>

  </View>  
  <View>
          <Text className="font-black text-[12px] mb-2 mt-4">INVESTMENT OPPORTUNITIES</Text>

          <View className="flex-1 justify-center items-start">
  <Animated.View
    className="flex-row space-x-2"
    style={{
      transform: [{ translateX: scrollX }],
      width: 220 * cards.length, // Width of the whole container based on the number of cards
    }}
  >
    {cards.map((card, index) => (
      <View key={index} className="w-[220px]  ">
        <Image
          source={{ uri: card.imageUrl }}
          className="w-[220px] h-[100px] rounded-tl-lg rounded-tr-lg"
          resizeMode="cover"
        />
        <View className="w-[220px] h-[65px] bg-[#EDF0EF] p-1.5 rounded-bl-lg rounded-br-lg">
          <View className="flex-row justify-between items-center">
            <Text className="text-[12px] font-black">{card.title}</Text>
            <Text className="text-[10px] font-normal">{card.subtitle}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Text className="text-[10px] font-normal">Return/Year  </Text>
              <Text className="text-[10px] font-black">{card.return}</Text>
            </View>
            <View className="items-end">
              <Text className="text-[10px] font-black">{card.title}</Text>
              <View className="flex-row items-center space-x-1">
                <Image
                  source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
                  className="w-[10px] h-[10px]"
                />
                <Text className="text-black font-semibold text-[8px]">{card.rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    ))}
  </Animated.View>
</View>
<View>
<Text className="font-black text-[12px]  mt-4">YOUR INVESTMENTS</Text>

<View className="w-full h-[121px] rounded-[5px] bg-[#155528] mt-2 flex-row justify-between">
  {/* Left Section */}
  <View className="w-[180px] p-4 flex flex-col justify-start">
    <Text className="text-white font-inter font-extrabold text-[10px]">
      Holding Value
    </Text>
    <Text className="text-white font-inter font-bold text-[10px] text-right -mt-2 ">
      ↑ 30.0%
    </Text>
    <Text className="text-white font-inter font-bold text-[18px] -mt-2">
      $42,600
    </Text>
  </View>

  {/* Vertical Divider */}
  <View className="w-[2px] h-[100px] bg-[#979797] mt-3" />

  {/* Right Section */}
  <View className="w-[174px] p-4 flex flex-col justify-end">
    <Text className="text-white font-inter font-semibold text-[10px]">
      Invested Value
    </Text>
    <Text className="text-white font-inter font-semibold text-[18px] mt-1">
      $20,000
    </Text>
  </View>
</View>
</View>

  </View>
  <View>

<View className="relative w-full h-[140px] mt-4">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741555574/image_51_dkdtcp.png" }}
    className="w-full h-full rounded-t-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-2">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>

 
</View>
<View className="w-full h-[90px] bg-[#EDF0EF] rounded-b-lg flex-row justify-between items-center p-2"> 
<View >
  <Text className="font-black text-[14px]">
    Get help from an expert
  </Text>
  <Text className="font-normal text-[10px]">
  Learn about business opportunities
  </Text>
  <TouchableOpacity className=" mt-1 bg-[#155528] w-[200px] h-[20px] font-black text-white text-[10px] rounded-md">
    <Text className="text-center text-white font-black text-[10px]">Ask now</Text>
  </TouchableOpacity>
</View>
<Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741555573/image_50_imdjqc.png" }}
    className="w-[50px] h-[50px]  "
    resizeMode="cover"
  />
</View>
  </View> 

  <View>
  <View className="flex flex-row space-x-2 mt-4">
          {['  Popular Investments', '  Your Investments'].map((label, index) => (
            <View key={index} className="relative">
              <TouchableOpacity className="w-[167px] h-[30px] bg-white border-b-2 border-[#979797] rounded-b-sm flex items-start p-1 justify-center">
                <Text className="font-inter font-bold text-[10px] leading-[150%] text-black text-left">{label}</Text>
              </TouchableOpacity>
              <View className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-b-md" />
              {index === 0 ? (
                <View className="absolute bottom-0 left-0 w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-l-sm" />
              ) : (
                <View className="absolute bottom-0 left-[-1px] w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-l-sm" />
              )}
              {index === 3 ? (
                <View className="absolute bottom-0 right-0 w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-r-sm" />
              ) : (
                <View className="absolute bottom-0 right-[-1px] w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-r-sm" />
              )}
            </View>
          ))}
        </View>
  </View>

  <View className="mt-4">
  <View className="flex flex-row items-center justify-between">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741556063/image_52_zmtutv.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-14  text-center text-white font-inter font-bold text-[12px]">
    Seed
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 18.3%</Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
  <View className="flex flex-row items-center justify-between mt-1">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557755/image_56_ao1gwb.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-14  text-center text-white font-inter font-bold text-[12px]">
  Value
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 28.1%</Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
  <View className="flex flex-row items-center justify-between mt-1">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557755/image_57_mqrdr7.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-3  text-center text-white font-inter font-bold text-[12px]">
  Food Processing
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 25.2% </Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
  <View className="flex flex-row items-center justify-between mt-1">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557755/image_58_d9kzhd.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-4  text-center text-white font-inter font-bold text-[12px]">
  Mobile Kitchen
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 30.0% </Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
</View>

<View>
<Text className="font-black text-[12px] mt-2 mb-2">BUSINESS NEWS</Text>

<View className="relative w-full h-[140px] ">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741558030/image_59_ae6dav.png" }}
    className="w-full h-full rounded-t-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-2">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>

 
</View>
<View className="w-full h-[90px] bg-[#EDF0EF] rounded-b-lg flex-row justify-between items-center p-2"> 
<View >
  <Text className="font-black text-[14px]">
  Potato blight
  </Text>
  <Text className="font-normal text-[10px]">
  Outbreak of potato blight in lower region
  </Text>
  <TouchableOpacity className=" mt-1 bg-[#155528] w-[200px] h-[20px] font-black text-white text-[10px] rounded-md">
    <Text className="text-center text-white font-black text-[10px]">Read more</Text>
  </TouchableOpacity>
</View>
<Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741558029/image_60_itaesa.png" }}
    className="w-[30px] h-[30px]  "
    resizeMode="cover"
  />
</View>
  </View> 
  <View className="w-full h-[100px] rounded-b-lg rounded-md border-b border-[#979797] bg-[#FAFBFB] mt-2 p-3">
<View className="flex-row justify-between items-center">
<Text className="text-[10px] font-bold">
SDG No 9
</Text>
<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741476428/image_36_jfc44e.png' }} 
      style={{ width: 23, height: 23}} 
    />
</View>
<View className="w-[320px]">
<Text className="text-[10px] font-normal mt-1">
Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation
</Text>
</View>
</View>
  <View>
    </View>     
          </View>
          </ScrollView>}
        {activeTab === 'livestock' && <ScrollView>
          <View>
          <View>
          <Text className="font-black text-[12px] mb-2">Whats Going on.</Text>

<View className="relative w-full h-[200px] ">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741558497/image_61_su9odf.png" }}
    className="w-full h-full rounded-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-2">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>
  <View className="absolute bottom-5 left-3">
    <Text className="text-white mb-3 font-bold text-[14px] leading-[100%] font-['Inter']">
    WHAT IS IN A SEED? 
    </Text>
  </View>
 
    <Text className="absolute bottom-2 left-3 text-white font-normal text-[12px] leading-[100%] font-['Inter']">
    Why should you invest in seed propergation?
    </Text>
 
</View>

  </View>  
  <View>
          <Text className="font-black text-[12px] mb-2 mt-4">INVESTMENT OPPORTUNITIES</Text>

          <View className="flex-1 justify-center items-start">
  <Animated.View
    className="flex-row space-x-2"
    style={{
      transform: [{ translateX: scrollX }],
      width: 220 * cards.length, // Width of the whole container based on the number of cards
    }}
  >
    {cards1.map((card, index) => (
      <View key={index} className="w-[220px]  ">
        <Image
          source={{ uri: card.imageUrl }}
          className="w-[220px] h-[100px] rounded-tl-lg rounded-tr-lg"
          resizeMode="cover"
        />
        <View className="w-[220px] h-[65px] bg-[#EDF0EF] p-1.5 rounded-bl-lg rounded-br-lg">
          <View className="flex-row justify-between items-center">
            <Text className="text-[12px] font-black">{card.title}</Text>
            <Text className="text-[10px] font-normal">{card.subtitle}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Text className="text-[10px] font-normal">Return/Year  </Text>
              <Text className="text-[10px] font-black">{card.return}</Text>
            </View>
            <View className="items-end">
              <Text className="text-[10px] font-black">{card.title}</Text>
              <View className="flex-row items-center space-x-1">
                <Image
                  source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png' }}
                  className="w-[10px] h-[10px]"
                />
                <Text className="text-black font-semibold text-[8px]">{card.rating}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    ))}
  </Animated.View>
</View>
<View>
<Text className="font-black text-[12px]  mt-4">YOUR INVESTMENTS</Text>

<View className="w-full h-[121px] rounded-[5px] bg-[#155528] mt-2 flex-row justify-between">
  {/* Left Section */}
  <View className="w-[180px] p-4 flex flex-col justify-start">
    <Text className="text-white font-inter font-extrabold text-[10px]">
      Holding Value
    </Text>
    <Text className="text-white font-inter font-bold text-[10px] text-right -mt-2 ">
      ↑ 30.0%
    </Text>
    <Text className="text-white font-inter font-bold text-[18px] -mt-2">
      $42,600
    </Text>
  </View>

  {/* Vertical Divider */}
  <View className="w-[2px] h-[100px] bg-[#979797] mt-3" />

  {/* Right Section */}
  <View className="w-[174px] p-4 flex flex-col justify-end">
    <Text className="text-white font-inter font-semibold text-[10px]">
      Invested Value
    </Text>
    <Text className="text-white font-inter font-semibold text-[18px] mt-1">
      $20,000
    </Text>
  </View>
</View>
</View>

  </View>
  <View>

<View className="relative w-full h-[140px] mt-4">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741558702/image_63_puiizd.png" }}
    className="w-full h-full rounded-t-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-2">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>

 
</View>
<View className="w-full h-[90px] bg-[#EDF0EF] rounded-b-lg flex-row justify-between items-center p-2"> 
<View >
  <Text className="font-black text-[14px]">
    Get help from an expert
  </Text>
  <Text className="font-normal text-[10px]">
  Learn about business opportunities
  </Text>
  <TouchableOpacity className=" mt-1 bg-[#155528] w-[200px] h-[20px] font-black text-white text-[10px] rounded-md">
    <Text className="text-center text-white font-black text-[10px]">Ask now</Text>
  </TouchableOpacity>
</View>
<Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741555573/image_50_imdjqc.png" }}
    className="w-[50px] h-[50px]  "
    resizeMode="cover"
  />
</View>
  </View> 

  <View>
  <View className="flex flex-row space-x-2 mt-4">
          {['  Popular Investments', '  Your Investments'].map((label, index) => (
            <View key={index} className="relative">
              <TouchableOpacity className="w-[167px] h-[30px] bg-white border-b-2 border-[#979797] rounded-b-sm flex items-start p-1 justify-center">
                <Text className="font-inter font-bold text-[10px] leading-[150%] text-black text-left">{label}</Text>
              </TouchableOpacity>
              <View className="absolute bottom-[-3px] left-0 w-full h-[3px] bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-b-md" />
              {index === 0 ? (
                <View className="absolute bottom-0 left-0 w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-l-sm" />
              ) : (
                <View className="absolute bottom-0 left-[-1px] w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-l-sm" />
              )}
              {index === 3 ? (
                <View className="absolute bottom-0 right-0 w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-r-sm" />
              ) : (
                <View className="absolute bottom-0 right-[-1px] w-[1px] h-full bg-black/10 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-r-sm" />
              )}
            </View>
          ))}
        </View>
  </View>

  <View className="mt-4">
  <View className="flex flex-row items-center justify-between">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741558779/image_64_fwprmn.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-14  text-center text-white font-inter font-bold text-[12px]">
    Seed
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 18.3%</Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
  <View className="flex flex-row items-center justify-between mt-1">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741558775/image_65_wfzah0.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-14  text-center text-white font-inter font-bold text-[12px]">
  Value
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 28.1%</Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
  <View className="flex flex-row items-center justify-between mt-1">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741558774/image_66_j1mywj.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-3  text-center text-white font-inter font-bold text-[12px]">
  Food Processing
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 25.2% </Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
  <View className="flex flex-row items-center justify-between mt-1">
  <View className="relative">
  <Image
    source={{
      uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557755/image_58_d9kzhd.png",
    }}
    className="w-[140px] h-[100px] rounded-l-lg"
    resizeMode="cover"
  />
  {/* Text in the center */}
  <Text className="absolute bottom-2 left-4  text-center text-white font-inter font-bold text-[12px]">
  Mobile Kitchen
  </Text>
</View>


    <View className="bg-[#F3F5F5] w-[203px] h-[100px] p-2">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258720/star-3_pvzrkr.png",
              }}
              className="w-[13px] h-[13px]"
            />
          ))}
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740258745/star-4_fw4gmj.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">4.3 (355)</Text>
        </View>
        <Text className="ml-2 text-[8px] text-[#155528] font-black">↑ 30.0% </Text>
      </View>

      {/* Investment section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557084/image_53_ab7ceq.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Investment</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Expected Returns section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_54_m6wmnp.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Expected returns</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">USD 200 </Text>
      </View>

      {/* Time section */}
      <View className="flex-row items-center justify-between mt-2">
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741557083/image_55_wyzfee.png",
            }}
            className="w-[13px] h-[13px]"
          />
          <Text className="ml-2 text-[8px] font-bold">Time</Text>
        </View>
        <Text className="ml-2 text-[8px] text-black font-black">12 Weeks </Text>
      </View>
    </View>
  </View>
</View>

<View>
<Text className="font-black text-[12px] mt-2 mb-2">BUSINESS NEWS</Text>

<View className="relative w-full h-[140px] ">
  <Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741558773/image_67_xbagip.png" }}
    className="w-full h-full rounded-t-lg"
    resizeMode="cover"
  />
  <View className="absolute top-2 right-2">
    <Image
      source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1741463133/image_15_jsbzvj.png" }}
      className="w-[20px] h-[20px]"
      resizeMode="contain"
    />
  </View>

 
</View>
<View className="w-full h-[90px] bg-[#EDF0EF] rounded-b-lg flex-row justify-between items-center p-2"> 
<View className="flex-1">
  <Text className="font-black text-[14px]">
  Mastitis 
  </Text>
  <Text className="font-medium text-[9px] ">
  Mastitis is swelling and redness, called inflammation, of breast tissue.
  </Text>
  <TouchableOpacity className=" mt-1 bg-[#155528] w-[200px] h-[20px] font-black text-white text-[10px] rounded-md">
    <Text className="text-center text-white font-black text-[10px]">Read more</Text>
  </TouchableOpacity>
</View>
<Image
    source={{ uri:"https://res.cloudinary.com/dzngpgki4/image/upload/v1741558029/image_60_itaesa.png" }}
    className="w-[30px] h-[30px] mr-1 "
    resizeMode="cover"
  />
</View>
  </View> 
  <View className="w-full h-[100px] rounded-b-lg rounded-md border-b border-[#979797] bg-[#FAFBFB] mt-2 p-3">
<View className="flex-row justify-between items-center">
<Text className="text-[10px] font-bold">
SDG No 9
</Text>
<Image 
      source={{ uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1741476428/image_36_jfc44e.png' }} 
      style={{ width: 23, height: 23}} 
    />
</View>
<View className="w-[300px]">
<Text className="text-[10px] font-normal mt-1">
Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation
</Text>
</View>
</View>
  <View>
    </View>     
          </View>
          </ScrollView>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
