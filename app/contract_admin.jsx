import { Redirect } from "expo-router";
import { Text, Image } from "react-native";
import ChartComponent from "./ChartComponent";
import Svg, { Polygon } from 'react-native-svg';
import { View, ScrollView, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

import { useState } from "react"; // Importing useState for handling ID menu toggle
import { useRouter } from "expo-router"; // Import

const ContractAdmin = () => {
    const router = useRouter(); // Initialize router
    const [isFocused, setIsFocused] = useState(false);
    const [inputText, setInputText] = useState('');

    const navigation = useNavigation();

    const handlePress = (item) => {
        navigation.navigate('ItemDetails', { item });
    };
    const [activeTab, setActiveTab] = useState("farmer");


    return (
        <SafeAreaView className="bg-white h-full p-2">
            <ScrollView>

                <Text className="font-black text-[12px] mb-2">
                    CONTRACT FARMING
                </Text>
                <View className="" />

                <View className="flex-row flex-wrap justify-between mt-3">
                    <TouchableOpacity
                        className="w-[48%]"
                        onPress={() => router.push("/")}
                    >
                        <Text className="font-black text-[12px]">FARMER</Text>
                        <View className={`h-1 rounded-lg ${activeTab === "farmer" ? "bg-neutral-100" : "bg-neutral-100"}`} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[48%]"
                    >
                        <Text className="font-black text-[12px]">CONTRACT ADMIN</Text>
                        <View className={`h-1 rounded-lg ${activeTab === "farmer" ? "bg-green-900" : "bg-neutral-100"}`} />
                    </TouchableOpacity>
                </View>

                <Text className="font-black text-[13px] mb-2 mt-4">PRODUCE</Text>
                <View className="flex-row flex-wrap justify-between">
                    {/* Left Box 1 - Capsicum */}
                    <TouchableOpacity
                        onPress={() => router.push("/contract_adminspage2")}
                        className="w-[48%] h-[119px] bg-[#EDF0EF] rounded-sm p-4 mb-4"
                    >
                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740217823/capsicum_cp4vxc.png" }}
                            className="w-[72px] h-[72px] mx-auto"
                        />
                        <Text className="text-center font-black text-[10px] leading-[21px]">
                            <Text className="text-gray-500">Capsicum</Text> |
                            <Text className="text-black"> 212,000t</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* Left Box 2 - Maize */}
                    <TouchableOpacity
                        onPress={() => router.push("/contract_adminspage1")}
                        className="w-[48%] h-[119px] bg-[#EDF0EF] rounded-sm p-4 mb-4"
                    >
                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740217874/corn_znkrvd.png" }}
                            className="w-[72px] h-[72px] mx-auto"
                        />
                        <Text className="text-center font-black text-[10px] leading-[21px]">
                            <Text className="text-gray-500">Maize</Text> |
                            <Text className="text-black"> 212,000t</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* Right Box 1 - Cabbages */}
                    <TouchableOpacity
                        onPress={() => handlePress('Cabbages')}
                        className="w-[48%] h-[119px] bg-[#EDF0EF] rounded-sm p-4 mb-4"
                    >
                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740217910/cabbage_oxq4h3.png" }}
                            className="w-[72px] h-[72px] mx-auto"
                        />
                        <Text className="text-center font-black text-[10px] leading-[21px]">
                            <Text className="text-gray-500">Cabbages</Text> |
                            <Text className="text-black"> 212,000t</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* Right Box 2 - Beans */}
                    <TouchableOpacity
                        onPress={() => handlePress('Beans')}
                        className="w-[48%] h-[119px] bg-[#EDF0EF] rounded-sm p-4 mb-4"
                    >
                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740218225/beans_mpko0s.png" }}
                            className="w-[72px] h-[72px] mx-auto"
                        />
                        <Text className="text-center font-black text-[10px] leading-[21px]">
                            <Text className="text-gray-500">Beans</Text> |
                            <Text className="text-black"> 212,000t</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between items-center ">
                    {/* Title */}
                    <Text className="text-left font-black text-[10px] leading-[21px] text-gray-500">
                        CAPSICUM REPORT <Text className="text-black">| All Farmers</Text>
                    </Text>

                    {/* View More + Image */}
                    <View className="flex-row items-center space-x-2">
                        <Text className="text-gray-500 text-[6px] font-normal">View More</Text>
                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740217823/capsicum_cp4vxc.png" }}
                            className="w-[20px] h-[20px]"
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="mt-0">
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
                            marginBottom: 2,
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>27,680</Text>

                        {/* Move the Polygon to the front using zIndex */}
                        <Svg
                            height="15"
                            width="25"
                            style={{
                                position: 'absolute',
                                bottom: -15,
                                left: '50%',
                                transform: [{ translateX: -12.5 }],
                                zIndex: 1, // Ensure it's in front of the chart
                            }}
                        >
                            <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
                        </Svg>
                    </View>

                    {/* Chart Component Container */}
                    <View style={{ width: '100%', height: 220, marginTop: 0 }}>
                        <ChartComponent style={{ flex: 1, height: 200 }} />
                    </View>
                </View>

                <View>
                    {/* Header Row */}
                    <View className="flex-row items-center mt-5">
                        <Text className="font-inter font-bold text-[14px] w-[70px] h-[28px] bg-transparent">Report</Text>
                        <View className="flex-row flex-1 justify-between">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                                <Text key={month} className="font-inter font-normal text-[8px] text-center w-[40px]">
                                    {month}
                                </Text>
                            ))}
                        </View>
                    </View>

                    {/* Table Rows */}
                    {[
                        { label: "Capsicum", values: ["7800t", "7900t", "8000t", "8100t", "8200t", "8300t"] },
                        { label: "Revenue", values: ["$2300", "$2300", "$2300", "$2300", "$2300", "$2300"] },
                        { label: "Inputs", values: ["8400t", "8500t", "8600t", "8700t", "8800t", "8900t"] },
                        { label: "Cost / unit", values: ["$1.5", "$1.5", "$1.5", "$1.5", "$1.5", "$1.5"] },
                        { label: "Price / unit", values: ["$2", "$2", "$2", "$2", "$2", "$2"] },
                        { label: "Farmers", values: ["210", "210", "210", "210", "210", "210"] },
                        { label: "Providers", values: ["32", "32", "32", "32", "32", "32"] },
                    ].map((row, index) => (
                        <View key={row.label} className="flex-row items-center justify-between mt-1">
                            <Text className="font-inter font-bold text-[8px] bg-[#FAFBFB] w-[70px] h-[20px] p-1 text-left">
                                {row.label}
                            </Text>
                            <View className="flex-row flex-1 justify-between">
                                {row.values.map((value, idx) => (
                                    <Text key={idx} className={`font-inter font-normal text-[5px] px-2 py-1 text-center h-[20px]  w-[40px] ${idx % 2 === 0 ? "bg-[#F3F5F5]" : "bg-[#EDF0EF]"}`}>
                                        {value}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View className="mt-8">
                    <View className="flex-row justify-between items-center">
                        {/* Title Section */}
                        <Text className="text-left font-black text-[10px] leading-[21px] text-gray-500">
                            CAPSICUM REPORT <Text className="text-black">| Individual Farmers</Text>
                        </Text>

                        {/* View More + Image Section */}
                        <View className="flex-row items-center space-x-2">
                            <Text className="text-gray-500 text-[8px] font-normal">View More</Text>
                            <Image
                                source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740217823/capsicum_cp4vxc.png" }}
                                className="w-[20px] h-[20px]"
                            />
                        </View>
                    </View>

                    {/* Farmers Reports Title */}
                    <Text className="font-black text-[13px] mb-2 mt-4">Farmers Reports</Text>

                    {/* Farmers Report Statistics Section */}
                    <View className="flex-row items-center">
                        {/* All Farmers Text */}
                        <Text className="font-inter font-semibold text-[10px] leading-[12px] text-black mr-6">
                            All Farmers
                        </Text>

                        {/* Production Box */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Production
                                </Text>
                            </View>

                            {/* 91% Green Box */}
                            <View className="w-[29px] h-[23px] bg-[#83C543] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    91%
                                </Text>
                            </View>
                        </View>

                        {/* Revenue Box */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Revenue
                                </Text>
                            </View>

                            {/* 51% Orange Box */}
                            <View className="w-[29px] h-[23px] bg-[#FDBB26] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    51%
                                </Text>
                            </View>
                        </View>

                        {/* Inventory Box */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Inventory
                                </Text>
                            </View>

                            {/* 39% Red Box */}
                            <View className="w-[29px] h-[23px] bg-[#F23939] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    39%
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row items-center mt-3">
                        {/* All Farmers Text */}
                        <Text className="font-inter font-semibold text-[10px] leading-[12px] text-black mr-5">
                            Maria Mona
                        </Text>

                        {/* Box 1: Production */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Production
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#83C543] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    91%
                                </Text>
                            </View>
                        </View>

                        {/* Box 3: 91% Orange (Repeat Box) */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Revenue
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#FDBB26] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    51%
                                </Text>
                            </View>
                        </View>

                        {/* Box 4: 91% Red (Repeat Box) */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Inventory
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#F23939] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    39%
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row items-center mt-1">
                        {/* All Farmers Text */}
                        <Text className="font-inter font-semibold text-[10px] leading-[12px] text-black mr-9">
                            John Bull
                        </Text>

                        {/* Box 1: Production */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Production
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#83C543] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    91%
                                </Text>
                            </View>
                        </View>

                        {/* Box 3: 91% Orange (Repeat Box) */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Revenue
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#FDBB26] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    51%
                                </Text>
                            </View>
                        </View>

                        {/* Box 4: 91% Red (Repeat Box) */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Inventory
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#F23939] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    39%
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View className="flex-row items-center mt-1">
                        {/* All Farmers Text */}
                        <Text className="font-inter font-semibold text-[10px] leading-[12px] text-black mr-[22px]">Farmer Jim</Text>

                        {/* Box 1: Production */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[24px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Production
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#83C543] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    91%
                                </Text>
                            </View>
                        </View>

                        {/* Box 3: 91% Orange (Repeat Box) */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Revenue
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#FDBB26] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    51%
                                </Text>
                            </View>
                        </View>

                        {/* Box 4: 91% Red (Repeat Box) */}
                        <View className="flex-row items-center">
                            <View className="w-[50px] h-[23px] bg-[#EDF0EF] rounded-[3px] flex items-center justify-center ml-1">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-black ">
                                    Inventory
                                </Text>
                            </View>

                            {/* Box 2: 91% Green */}
                            <View className="w-[29px] h-[23px] bg-[#F23939] rounded-[3px] flex items-center justify-center ">
                                <Text className="font-inter font-bold text-[6px] leading-[12.1px] text-white">
                                    39%
                                </Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View className="relative w-full h-[45px] mt-5">
                            {/* Input Field Section */}
                            <TextInput
                                style={{
                                    height: 45,
                                    paddingLeft: 10,
                                    paddingRight: 40, // Space for the search icon on the right
                                    fontFamily: 'Inter',
                                    fontWeight: '600',
                                    fontSize: 14,
                                    lineHeight: 21,
                                    letterSpacing: 0,
                                    textAlign: 'left',
                                    borderColor: '#D1D5DB',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                                placeholderTextColor="#A1A1A1" // Gray color for placeholder text
                                value={inputText}
                                onChangeText={setInputText} // Updates input value
                                onFocus={() => setIsFocused(true)} // Sets focus state to true
                                onBlur={() => setIsFocused(false)} // Sets focus state to false
                            />

                            {/* Overlay Placeholder Text */}
                            <View
                                style={{
                                    position: 'absolute',
                                    left: 14,
                                    top: '45%',
                                    transform: [{ translateY: -10 }],
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    opacity: inputText || isFocused ? 0 : 1, // Hides placeholder when focused or input is not empty
                                }}
                            >
                                <Text style={{
                                    fontFamily: 'Inter',
                                    fontWeight: '600',
                                    fontSize: 12,
                                    letterSpacing: 0,
                                    color: '#979797', // Gray color for "Search"
                                }}>
                                    Search
                                </Text>
                                <Text style={{
                                    fontFamily: 'Inter',
                                    fontWeight: '600',
                                    fontSize: 12,
                                    letterSpacing: 0,
                                    color: '#000000', // Black color for "Farmer / ID"
                                }}>
                                    {' Farmer / ID'}
                                </Text>
                            </View>

                            {/* Search Icon inside the input field */}
                            <Image
                                source={require('../assets/images/search.png')} // Path to the search icon image
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                    top: '40%',
                                    transform: [{ translateY: -10 }],
                                    width: 22,
                                    height: 25,
                                }}
                            />
                        </View>
                    </View>

                    <View className="mt-5 mb-5">
                        {/* Profile Section and Boxes */}
                        <View className="flex-row items-center justify-between mb-2">
                            {/* Profile Section (Left) */}
                            <View className="flex-row items-center">
                                {/* Profile Picture */}
                                <Image
                                    source={require('../assets/images/profile.png')} // Path to the profile image
                                    className="w-5 h-5 rounded-sm"
                                />
                                {/* Text next to the profile picture */}
                                <View className="ml-2">
                                    <Text className="font-semibold text-[8px]">Jhon Bull</Text>
                                    <Text className="font-medium text-[5px] text-gray-400">Get it Done!</Text>
                                </View>
                            </View>

                            {/* Boxes Section (Right) */}
                            <View className="flex-row space-x-1">
                                {/* Box 1: Production */}
                                <View className="w-[72px] h-6 bg-[#F3F5F5] rounded-sm flex-row items-center justify-between px-2">
                                    <Text className="font-medium text-[6px] text-black">Production</Text>
                                    <Image
                                        source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740219369/alarm_j9w5jf.png" }}
                                        className="w-4 h-4"
                                    />
                                </View>

                                {/* Box 2: Revenue (Red Color) */}
                                <View className="w-[72px] h-6 bg-[#F23939] rounded-sm flex-row items-center justify-between px-2">
                                    <Text className="font-medium text-[6px] text-white">Revenue</Text>
                                    <Image
                                        source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740219369/alarm_j9w5jf.png" }}
                                        className="w-4 h-4"
                                    />
                                </View>

                                {/* Box 3: Inventory (Orange Color) */}
                                <View className="w-[72px] h-6 bg-[#FDBB26] rounded-sm flex-row items-center justify-between px-2">
                                    <Text className="font-medium text-[6px] text-white">Inventory</Text>
                                    <Image
                                        source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740219369/alarm_j9w5jf.png" }}
                                        className="w-4 h-4"
                                    />
                                </View>
                            </View>

                            {/* Check Icon (Aligned Right) */}
                            <Image
                                source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740219420/check_hm2mvs.png" }}
                                className="w-4 h-4 mr-4"
                            />
                        </View>

                    </View>

                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="mt-0">
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
                            marginBottom: 2,
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>27,680</Text>

                        {/* Move the Polygon to the front using zIndex */}
                        <Svg
                            height="15"
                            width="25"
                            style={{
                                position: 'absolute',
                                bottom: -15,
                                left: '50%',
                                transform: [{ translateX: -12.5 }],
                                zIndex: 1, // Ensure it's in front of the chart
                            }}
                        >
                            <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
                        </Svg>
                    </View>

                    {/* Chart Component Container */}
                    <View style={{ width: '100%', height: 220, marginTop: 0 }}>
                        <ChartComponent style={{ flex: 1, height: 200 }} />
                    </View>
                </View>

                <View>
                    {/* Header Row */}
                    <View className="flex-row items-center mt-5">
                        <Text className="font-inter font-bold text-[14px] w-[70px] h-[28px] bg-transparent">Report</Text>
                        <View className="flex-row flex-1 justify-between">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((month) => (
                                <Text key={month} className="font-inter font-normal text-[8px] text-center w-[40px]">
                                    {month}
                                </Text>
                            ))}
                        </View>
                    </View>

                    {/* Table Rows */}
                    {[
                        { label: "Capsicum", values: ["7800t", "7900t", "8000t", "8100t", "8200t", "8300t"] },
                        { label: "Revenue", values: ["$2300", "$2300", "$2300", "$2300", "$2300", "$2300"] },
                        { label: "Inputs", values: ["8400t", "8500t", "8600t", "8700t", "8800t", "8900t"] },
                        { label: "Cost / unit", values: ["$1.5", "$1.5", "$1.5", "$1.5", "$1.5", "$1.5"] },
                        { label: "Price / unit", values: ["$2", "$2", "$2", "$2", "$2", "$2"] },
                        { label: "Farmers", values: ["210", "210", "210", "210", "210", "210"] },
                        { label: "Providers", values: ["32", "32", "32", "32", "32", "32"] },
                    ].map((row, index) => (
                        <View key={row.label} className="flex-row items-center justify-between mt-1">
                            <Text className="font-inter font-bold text-[8px] bg-[#FAFBFB] w-[70px] h-[20px] p-1 text-left">
                                {row.label}
                            </Text>
                            <View className="flex-row flex-1 justify-between">
                                {row.values.map((value, idx) => (
                                    <Text key={idx} className={`font-inter font-normal text-[5px] px-2 py-1 text-center h-[20px] w-[40px] ${idx % 2 === 0 ? "bg-[#F3F5F5]" : "bg-[#EDF0EF]"}`}>
                                        {value}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
                <View className="mt-10 flex-row">
                    <View className="w-[175px] h-[43px] bg-[#155528] p-3 rounded-tl rounded-bl items-center flex-row justify-between">

                        <View>
                            <Text className="text-[10px] font-inter font-bold text-white">Credit Score</Text>

                            <Text className="text-[5px] font-inter font-normal text-white">Check credit score</Text>
                            <Text className="text-[5px] font-inter font-normal text-white -mt-0.5">Credit score evaluation</Text>
                        </View>

                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740218334/credit_vgwe2e.png" }}
                            alt="no"
                            width={30}
                            height={20}
                        />
                    </View>
                    <View className="w-[170px] h-[43px] bg-[#83C543] p-3 rounded-tr rounded-br items-center flex-row justify-between">

                        <View>
                            <Text className="text-[10px] font-inter font-bold text-white">Payments</Text>

                            <Text className="text-[5px] font-inter font-normal text-white">Check credit score</Text>
                            <Text className="text-[5px] font-inter font-normal text-white -mt-0.5">Credit score evaluation</Text>
                        </View>

                        <Image
                            source={{ uri: "https://res.cloudinary.com/dzngpgki4/image/upload/v1740223356/payment_tzk3cf.png" }}
                            alt="no"
                            width={30}
                            height={20}
                        />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default ContractAdmin;
