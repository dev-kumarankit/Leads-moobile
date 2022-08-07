import { PieChart } from "react-native-gifted-charts";
import { View, Text } from "react-native";
import { ReactReduxContext } from "react-redux";

export default function PieCharts({ allChannelDetails }) {
  let colorCheck = [
    { color: "#009FFF", gradientCenterColor: "#006DFF" },
    { color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
    { color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
    { color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
    { color: "blue", gradientCenterColor: "blue" },
    { color: "green", gradientCenterColor: "green" },
  ];
  let pieData = Object.entries(allChannelDetails)?.map((y, index) => {
    return {
      value:
        Number(y[1].cold) +
        Number(y[1].dead) +
        Number(y[1].junk) +
        Number(y[1].warm) +
        Number(y[1].new) +
        Number(y[1].awarded),
      channel_id: y[1].channel_id,
      name: y[1].name,
      color: colorCheck
        .filter((x, i) => {
          if (i === index) return x;
        })
        .map((y) => {
          return y.color;
        })[0],
      focused: true,
    };
  });
  console.log(pieData, "pieData");
  let totalAll = 0;
  const TotalValue = pieData.map((x) => {
    return (totalAll += x.value);
  });

  let Calculate = (data) => Math.round((data / totalAll) * 100);

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
            {renderDot("#006DFF")}
            <Text style={{ color: "white" }}>
              Bugraptors:
              {pieData.map((x) => {
                if (x.channel_id == 5) return Calculate(x.value);
              })}
              %
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#8F80F3")}
            <Text style={{ color: "white" }}>
              Moogle:{" "}
              {pieData.map((x) => {
                if (x.channel_id == 4) return Calculate(x.value);
              })}
              %
            </Text>
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
            {renderDot("#3BE9DE")}
            <Text style={{ color: "white" }}>
              Cerebrum:
              {pieData.map((x) => {
                if (x.channel_id == 3) return Calculate(x.value);
              })}
              %
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#9d0340")}
            <Text style={{ color: "white" }}>
              Seasia:
              {pieData.map((x) => {
                if (x?.channel_id == 2) return Calculate(x?.value);
              })}
              %
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: 120 }}
          >
            {renderDot("#FF7F97")}
            <Text style={{ color: "white" }}>
              Woosper:
              {pieData.map((x) => {
                if (x?.channel_id == 1) return Calculate(x?.value);
              })}
              %
            </Text>
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
            Leads Data in Pie Chart
          </Text>
          <View style={{ padding: 20, alignItems: "center" }}>
            <PieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
              radius={90}
              innerRadius={60}
              innerCircleColor={"#232B5D"}
              centerLabelComponent={() => {
                return (
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      {totalAll}
                    </Text>
                    <Text style={{ fontSize: 14, color: "white" }}>
                      All Leads
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          {renderLegendComponent()}
        </View>
      </View>
    </>
  );
}
