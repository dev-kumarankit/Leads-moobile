import { BarChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";

export default function BarCharts({ allChannelDetails }) {
  // let BugrapterTotal = Bugraptors?.total;
  // let CerebrumTotal = Cerebrum?.total;
  // let MoogleLabsTotal = MoogleLabs?.total;
  // let WoosperTotal = Woosper?.total;
  // let SeasiaTotal = Seasia?.total;
  // let total =
  //   (Number(BugrapterTotal) +
  //     Number(CerebrumTotal) +
  //     Number(MoogleLabsTotal) +
  //     Number(WoosperTotal) +
  //     Number(SeasiaTotal)) /
  //   5;
  // console.log(allChannelDetails, "allChannelDetails");

  const stackData = Object.entries(allChannelDetails)?.map((x) => {
    return {
      stacks: [
        { value: x[1]?.awarded, color: "#3d9bd9" },
        { value: x[1]?.cold, color: "#eab64c", marginBottom: 2 },
        { value: x[1]?.dead, color: "#47c88c", marginBottom: 2 },
        { value: x[1]?.junk, color: "red", marginBottom: 2 },
        { value: x[1]?.new, color: "blue", marginBottom: 2 },
        { value: x[1]?.warm, color: "green", marginBottom: 2 },
      ],
      label: `${x[0]}`,
    };
  });

  const renderDot = (color) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 10,
            marginTop: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#3d9bd9")}
            <Text style={{ color: "white" }}>Active</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#3d9bd9")}
            <Text style={{ color: "white" }}>Complete</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 120,
              marginRight: 20,
            }}
          >
            {renderDot("#47c88c")}
            <Text style={{ color: "white" }}>New</Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#ec6a74")}
            <Text style={{ color: "white" }}>Dead</Text>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <View
        style={{
          backgroundColor: "transparent",
        }}
      >
        <View
          style={{
            margin: 10,
            padding: 16,
            borderRadius: 20,
            backgroundColor: "transparent",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Active Status in Bar Chart
          </Text>
          <View style={{ flex: 1 }}>
            <BarChart
              labelHeight={100}
              rotateLabel
              yAxisColor="white"
              xAxisColor="white"
              color="white"
              yAxisIndicesColor="white"
              noOfSections={4}
              stackData={stackData}
              // maxValue={total + 90}
              marginBottom={10}
            />
          </View>
          {renderLegendComponent()}
        </View>
      </View>
    </>
  );
}
