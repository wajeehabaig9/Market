import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const ChartComponent = () => {
    const [highlight, setHighlight] = useState("");
    const [key, setKey] = useState(0);  // Key to force WebView re-render

    const chartHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chart</title>
        <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js"></script>
        <style>
          body, html { margin: 0; padding: 0; height: 100%; }
          #main { width: 100%; height: 70%; }
        </style>
      </head>
      <body>
        <div id="main"></div>
        <script>
          var myChart = echarts.init(document.getElementById('main'));

          var option = {
            grid: {
                left: "0%",
                right: "0%",
                bottom: "15%",
                top: "0%",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    lineStyle: { color: "#02640D", width: 2 },
                },
            },
            xAxis: {
                type: "category",
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: { show: true, fontWeight: "bold", color: "black", fontSize: 12, margin: 10 },
            },
            yAxis: {
                type: "value",
                axisTick: { show: false },
                splitLine: { show: false },
                axisLabel: { show: false },
            },
            series: [
                {
                    name: "Production (t)",
                    type: "bar",
                    data: [18000, 13000, 10000, 18000, 16000, 13000, 11000, 18000, 16000, 16000],
                    barWidth: "90%",
                    itemStyle: {
                        borderRadius: [10, 10, 0, 0],
                        color: (params) => params.dataIndex === 7 ? "#02640D" : "#D9D9D9", // ✅ 7th bar always green
                    },
                    label: {
                        show: true,
                        position: "insideBottom",
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 10,
                        formatter: (params) => {
                            const percentages = ["23%", "22%", "26%", "22%", "27%", "20%", "20%", "24%", "21%", "19%"];
                            return percentages[params.dataIndex]; // ✅ Shows percentages instead of numbers
                        },
                    },
                    emphasis: {
                        itemStyle: { color: "#02640D" },
                    },
                },
                {
                    name: "Stock Line",
                    type: "line",
                    data: [15000, 8000, 8000, 14000, 14000, 11000, 13000, 15000, 13000, 20000],
                    color: "#83C543",
                    lineStyle: { width: 4, type: "solid" },
                    z: 10,
                    symbol: "none",
                    emphasis: { lineStyle: { width: 4 } },
                },
            ],
          };

          myChart.setOption(option);

          window.addEventListener('message', function(event) {
            const highlight = event.data.highlight;
            option.series[0].data = highlight === "farmers" ? [] : [18000, 13000, 10000, 18000, 16000, 13000, 11000, 18000, 16000, 16000];
            option.series[1].data = highlight === "production" ? [] : [15000, 8000, 8000, 14000, 14000, 11000, 13000, 15000, 13000, 20000];

            myChart.setOption(option);
          });
        </script>
      </body>
    </html>
    `;

    const onMessage = useCallback((event) => {
        const { highlight } = event.nativeEvent.data;
        setHighlight(highlight);
    }, []);

    useEffect(() => {
        // Force reload chart content when highlight changes
        setKey(prevKey => prevKey + 1);  // Change the key value to force re-render
    }, [highlight]);

    const injectJs = `
        window.postMessage({ highlight: '${highlight}' });
        true;
    `;

    return (
        <View style={styles.container}>
            <View style={styles.chartContainer}>
                <View style={{ width: '100%', height: 300 }}>
                    <WebView
                        key={key}
                        source={{ html: chartHtml }}
                        style={{ flex: 1 }}
                        onLoad={() => console.log("WebView Loaded")}
                        onError={(error) => console.log("WebView error:", error)} // Catching error
                        onMessage={onMessage}
                        injectedJavaScript={injectJs}
                    />

                </View>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => setHighlight("farmers")}
                    onPressIn={() => setHighlight("farmers")}
                    onPressOut={() => setHighlight("")}
                >
                    <View style={[styles.icon, { backgroundColor: "#83C543" }]} />
                    <Text style={[styles.actionText, { color: "#83C543" }]}>Farmers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionItem}
                    onPress={() => setHighlight("production")}
                    onPressIn={() => setHighlight("production")}
                    onPressOut={() => setHighlight("")}
                >
                    <View style={[styles.icon, { backgroundColor: "#004A1F" }]} />
                    <Text style={[styles.actionText, { color: "#004A1F" }]}>Production (t)</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    chartContainer: {
        width: "100%",
        height: 200,
        overflow: "hidden",
    },
    actions: {
        flexDirection: "row",
        gap: 50,
        alignSelf: "flex-start",
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    actionItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
    },
    icon: {
        width: 17,
        height: 15,
        marginRight: 10,
    },
    actionText: {
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: 10,
        lineHeight: 10,
    },
});

export default ChartComponent;
