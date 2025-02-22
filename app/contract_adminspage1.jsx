import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import ChartComponent from './ChartComponent1';

const ContractAdminPage1 = ({ route }) => {
    return (
        <SafeAreaView>
            <ScrollView className="bg-white">
                <View className="p-2">
                    {/* Community Section */}
                    <View>
                        <Text className="font-black text-[14px] mb-2">COMMUNITY</Text>

                        {/* Reports Section */}
                        <View className="px-2">
                            <View className="flex-row justify-between items-center">
                                <Text className="font-black text-[14px] mb-2">REPORTS</Text>
                                <View className="flex-row space-x-3">
                                    <Text className="font-intern font-normal text-gray-400 text-[14px] mb-2">
                                        Share More
                                    </Text>
                                    <Image
                                        source={{
                                            uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740219935/reply_a0zmea.png',
                                        }}
                                        width={25}
                                        height={20}
                                    />
                                </View>
                            </View>

                            {/* Maize Section */}
                            <View className="px-1 flex-row justify-between mt-5">
                                <Text className="text-[14px] font-black">MAIZE</Text>
                                <Image
                                    source={{
                                        uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740217874/corn_znkrvd.png',
                                    }}
                                    className="w-6 h-6 mr-10"
                                />
                                <Image
                                    source={{
                                        uri: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1740219968/barcode_f528h2.png',
                                    }}
                                    className="w-9 h-7"
                                />
                            </View>

                            {/* Separator */}
                            <View className="h-[1px] w-full bg-[#979797] mt-2"></View>

                            {/* Report Header Row */}
                            <View className="flex-row items-center mt-5">
                                <Text className="font-inter font-bold text-[14px] w-[70px] h-[28px] bg-transparent">Report</Text>
                                <View className="flex-row flex-1 justify-between">
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                                        <Text key={month} className="font-inter font-normal text-[8px] text-center w-[40px]">
                                            {month}
                                        </Text>
                                    ))}
                                </View>
                            </View>

                            {/* Table Rows */}
                            {[
                                { label: 'Capsicum', values: ['7800t', '7900t', '8000t', '8100t', '8200t', '8300t'], bold: true },
                                { label: 'Revenue', values: ['$2300', '$2300', '$2300', '$2300', '$2300', '$2300'] },
                                { label: 'Inputs', values: ['8400t', '8500t', '8600t', '8700t', '8800t', '8900t'] },
                                { label: 'Cost / unit', values: ['$1.5', '$1.5', '$1.5', '$1.5', '$1.5', '$1.5'] },
                                { label: 'Price / unit', values: ['$2', '$2', '$2', '$2', '$2', '$2'] },
                                { label: 'Farmers', values: ['210', '210', '210', '210', '210', '210'] },
                                { label: 'Providers', values: ['32', '32', '32', '32', '32', '32'] },
                            ].map((row, index) => (
                                <View key={row.label} className="flex-row items-center justify-between mt-1">
                                    <Text className="font-inter font-bold text-[8px] bg-[#FAFBFB] w-[70px] h-[20px] p-1 text-left">
                                        {row.label}
                                    </Text>
                                    <View className="flex-row flex-1 justify-between">
                                        {row.values.map((value, idx) => (
                                            <Text
                                                key={idx}
                                                className={`font-inter ${row.bold ? 'font-bold' : 'font-normal'} text-[5px] px-2 py-1 text-center h-[20px] w-[40px] ${idx % 2 === 0 ? 'bg-[#F3F5F5]' : 'bg-[#EDF0EF]'
                                                    }`}
                                            >
                                                {value}
                                            </Text>
                                        ))}
                                    </View>
                                </View>
                            ))}


                        </View>

                        {/* Maize Production Info */}
                        <View>
                            <Text className="text-[7px] font-normal mt-5 px-2">
                                In 2024, maize production in Kenya is projected to experience an increase of 2% compared to 2023 production levels,
                                with an annual production estimated at 3,834,618 metric tons1. This growth is significant, and it’s worth noting that
                                the Western and Southern districts are expected to produce the most substantial volumes of maize. Specifically, districts
                                like Masinga (Machakos), Kilgoris (Narok), Mwala (Machakos),
                            </Text>
                        </View>

                        {/* Footer Section */}
                        <View className="flex-row justify-end space-x-10 mt-5">
                            <Text className="text-[10px] text-[#979797] font-normal">Farmers</Text>
                            <Text className="text-[10px] text-[#979797] font-normal mr-4">Production</Text>
                        </View>

                        {/* Production Info */}
                        <View>
                            <View className="mt-1 flex-row">
                                <View className="bg-[#FAFBFB] w-[150px] h-[55px] items-center justify-center">
                                    <Text className="text-[14px] font-black">PRODUCTION  </Text>
                                </View>

                                <View>
                                    <View className="bg-[#F3F5F5] w-[90px] h-[55px] items-center justify-center">
                                        <Text className="text-[14px] font-black">1,200</Text>
                                    </View>
                                </View>
                                <View className="bg-[#EDF0EF] w-[100px] h-[55px] items-center justify-center relative">
                                    <Text className="text-[14px] font-black">480,000</Text>
                                    <Text className="text-[9px] absolute top-1 right-1">t</Text>
                                </View>
                            </View>

                            {/* Chart Component and Button Section */}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="mt-2">
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
                                    <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>USD 27,680</Text>

                                    {/* Polygon Button Arrow */}
                                    <Svg
                                        height="15"
                                        width="25"
                                        style={{
                                            position: 'absolute',
                                            bottom: -15,
                                            left: '50%',
                                            transform: [{ translateX: -12.5 }],
                                            zIndex: 1,
                                        }}
                                    >
                                        <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
                                    </Svg>
                                </View>

                                {/* Chart Component */}
                                <View style={{ width: '100%', height: 220, marginTop: 0 }}>
                                    <ChartComponent style={{ flex: 1, height: 200 }} />
                                </View>
                            </View>
                        </View>

                        <View >
                            <View className="mt-1 flex-row">
                                <View className="bg-[#FAFBFB] w-[150px] h-[55px] items-center justify-center">
                                    <Text className="text-[14px] font-black">REVENUE           </Text>
                                </View>

                                <View>
                                    <View className="bg-[#F3F5F5] w-[90px] h-[55px] items-center justify-center">
                                        <Text className="text-[14px] font-black">210</Text>
                                    </View>
                                </View>
                                <View className="bg-[#EDF0EF] w-[100px] h-[55px] items-center justify-center relative">
                                    <Text className="text-[14px] font-black">265,040</Text>
                                    <Text className="text-[9px] absolute top-1 right-1">t</Text>
                                </View>
                            </View>

                            {/* Chart Component and Button Section */}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="mt-2">
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
                                    <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>USD 27,680</Text>

                                    {/* Polygon Button Arrow */}
                                    <Svg
                                        height="15"
                                        width="25"
                                        style={{
                                            position: 'absolute',
                                            bottom: -15,
                                            left: '50%',
                                            transform: [{ translateX: -12.5 }],
                                            zIndex: 1,
                                        }}
                                    >
                                        <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
                                    </Svg>
                                </View>

                                {/* Chart Component */}
                                <View style={{ width: '100%', height: 220, marginTop: 0 }}>
                                    <ChartComponent style={{ flex: 1, height: 200 }} />
                                </View>
                            </View>
                            <View className="text-[10px] flex-row space-x-7 justify-end px-2 -mt-5">
                                <Text className="text-[8px] font-light ">Jan</Text>
                                <Text className="text-[8px] font-light ">Feb</Text>
                                <Text className="text-[8px] font-light ">Mar</Text>
                                <Text className="text-[8px] font-light ">Apr</Text>
                                <Text className="text-[8px] font-light ">May</Text>
                                <Text className="text-[8px] font-light ">Jun</Text>
                            </View>
                        </View>

                        <View >
                            <View className="mt-1 flex-row">
                                <View className="bg-[#FAFBFB] w-[150px] h-[55px] items-center justify-center">
                                    <Text className="text-[14px] font-black text-left ">INVENTORY      </Text>
                                </View>

                                <View>
                                    <View className="bg-[#F3F5F5] w-[90px] h-[55px] items-center justify-center">
                                        <Text className="text-[14px] font-black">1,200</Text>
                                    </View>
                                </View>
                                <View className="bg-[#EDF0EF] w-[100px] h-[55px] items-center justify-center relative">
                                    <Text className="text-[14px] font-black">640,00</Text>
                                    <Text className="text-[9px] absolute top-1 right-1">t</Text>
                                </View>
                            </View>

                            {/* Chart Component and Button Section */}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="mt-2">
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
                                    <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>USD 27,680</Text>

                                    {/* Polygon Button Arrow */}
                                    <Svg
                                        height="15"
                                        width="25"
                                        style={{
                                            position: 'absolute',
                                            bottom: -15,
                                            left: '50%',
                                            transform: [{ translateX: -12.5 }],
                                            zIndex: 1,
                                        }}
                                    >
                                        <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
                                    </Svg>
                                </View>

                                {/* Chart Component */}
                                <View style={{ width: '100%', height: 220, marginTop: 0 }}>
                                    <ChartComponent style={{ flex: 1, height: 200 }} />
                                </View>
                            </View>
                            <View className="text-[10px] flex-row space-x-7 justify-end px-2 -mt-5">
                                <Text className="text-[8px] font-light ">Jan</Text>
                                <Text className="text-[8px] font-light ">Feb</Text>
                                <Text className="text-[8px] font-light ">Mar</Text>
                                <Text className="text-[8px] font-light ">Apr</Text>
                                <Text className="text-[8px] font-light ">May</Text>
                                <Text className="text-[8px] font-light ">Jun</Text>
                            </View>
                        </View>

                        <View className="mt-5 px-2">
                            <Text className="font-black text-[12px]">INVENTORY</Text>
                            <Text className="text-[8px] italic font-light">Stock held by all community members</Text>
                        </View>

                        <View>
                            <View className="flex-row mt-4 px-2 ">
                                <Text className="text-[10px] font-normal italic w-[140px]">Supply</Text>
                                <Text className="text-[10px] font-normal italic w-[100px]">Quantity</Text>
                                <Text className="text-[10px] font-normal italic w-[100px]">Amount</Text>

                            </View>
                            <View className="mt-3">
                                {/* === Maize Row === */}
                                <View className="flex-row">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Maize</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">3</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">t</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">60</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>

                                {/* === Beans Row === */}
                                <View className="flex-row mt-1">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Beans</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">3</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">t</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">60</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>

                                {/* === Kale Row === */}
                                <View className="flex-row mt-1">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Kale</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">70</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">t</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">60</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>

                                {/* === Capsicum Row === */}
                                <View className="flex-row mt-1">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Capsicum</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">720</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold ">t</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">60</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="mt-5 px-2">
                            <Text className="font-black text-[12px]">INPUTS</Text>
                            <Text className="text-[8px] italic font-light">Inputs given by the community  to support the  farmers production</Text>
                        </View>

                        <View className="mb-10">
                            <View className="flex-row mt-4 px-2 ">
                                <Text className="text-[10px] font-normal italic w-[140px]">Stock</Text>
                                <Text className="text-[10px] font-normal italic w-[100px]">Quantity</Text>
                                <Text className="text-[10px] font-normal italic w-[100px]">Amount</Text>

                            </View>
                            <View className="mt-3">
                                {/* === Maize Row === */}
                                <View className="flex-row">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Fertilizer</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">3</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">kg</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">30</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>

                                {/* === Beans Row === */}
                                <View className="flex-row mt-1">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Pesticide</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">3</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">kg</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">12</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>

                                {/* === Kale Row === */}
                                <View className="flex-row mt-1">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Vaccinations</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">70</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">I</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">35</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>

                                {/* === Capsicum Row === */}
                                <View className="flex-row mt-1">
                                    <View className="w-[140px] bg-[#FAFBFB] p-2">
                                        <Text className="text-[10px] font-black text-left">Feeds</Text>
                                        <Text className="text-[8px] font-normal italic text-left">09.09.25</Text>
                                    </View>
                                    <View className="w-[105px] bg-[#F3F5F5] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">720</Text>
                                        <Text className="text-[9px] absolute top-1 right-4 font-bold">u</Text>
                                    </View>
                                    <View className="w-[100px] bg-[#EDF0EF] p-2 relative">
                                        <Text className="text-[14px] font-black text-center">30</Text>
                                        <Text className="text-[9px] absolute top-1 right-1 font-bold">USD</Text>
                                    </View>
                                </View>
                            </View>


                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ContractAdminPage1;
