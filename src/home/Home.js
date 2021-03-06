import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import CityCards from "./components/CityCards";
import HeaderBar from "./components/HeaderBar";
import JstayLogoDark from "./components/JstayLogoDark";
import SearchBar from "./components/SearchBar";
import FooterBar from "./components/FooterBar";
import SearchDropdown from "./components/SearchDropdown";
import MaterialCardWithRightButtons from "./components/MaterialCardWithRightButtons";
import MaterialCard5 from "./components/MaterialCard5";
import MapButton2 from "./components/MapButton2";
import StayResultCard from "./components/StayResultCard";

import MaterialButtonWithVioletText21 from "./components/MaterialButtonWithVioletText21";
import MaterialButtonWithVioletText22 from "./components/MaterialButtonWithVioletText22";
import MaterialButtonWithVioletText23 from "./components/MaterialButtonWithVioletText23";
import MaterialButtonWithVioletText24 from "./components/MaterialButtonWithVioletText24";
import MaterialButtonWithVioletText25 from "./components/MaterialButtonWithVioletText25";
import MaterialButtonWithVioletText26 from "./components/MaterialButtonWithVioletText26";
import MaterialButtonWithVioletText28 from "./components/MaterialButtonWithVioletText28";

function Home(props) {
  const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [showMediumMap, setShowMediumMap] = useState(false);
  const [showFooterMenu, setShowFooterMenu] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);


  // useEffect(() => { console.warn("show filter menu status: ", showSearchOptions) }, [showSearchOptions])
  // useEffect(() => { console.warn("show map menu", showMediumMap) }, [showMediumMap])
  // useEffect(() => { console.warn("show footer menu", showFooterMenu) }, [showFooterMenu])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(2,172,235,1)" />

      {/* HeaderBar */}
      <HeaderBar
        onUserPress={(page) => { props.onUserPress(page, props.searchText) }}
        style={styles.headerBar}
      />

      <Text style={styles.bsD1}>BS"D</Text>
      <TouchableOpacity onPress={() => { props.goHome() }} style={styles.jstayLogoDark}>
        <JstayLogoDark onPress={() => { props.goHome() }} />
      </TouchableOpacity>

      {/* todo: add toggleFilterHandler */}
      {/* SearchDropdown */}
      {showSearchOptions &&
        <SearchDropdown style={styles.searchDropdown}></SearchDropdown>
      }
      <View style={styles.searchBarContainer}>
        <SearchBar
          searchText={props.searchText}
          onPress={() => { setShowSearchOptions(!showSearchOptions); }}
          style={styles.searchBar}
        />
      </View>

      {props.searchText ?
        // searchResults
        <ScrollView
          style={{ zIndex: 2, width: windowWidth, height: 1000 }}
          onScrollBeginDrag={() => {
            if (showSearchOptions || showFooterMenu) {
              setShowSearchOptions(false);
              setShowFooterMenu(false);
            }
          }}>
          <View style={styles.searchBarContainer}>
            <MaterialCardWithRightButtons
              onUserPress={(page) => props.onUserPress(page)}
              onPress={() => { props.showStayProfile("Home") }}
              style={styles.materialCardWithRightButtons}
            />
            <StayResultCard
              bookStay={() => props.bookStay()}
              onPress={() => { props.showStayProfile() }}
              style={styles.stayResultCard1} />
          </View>
        </ScrollView>

        :
        //homeScreen
        <ScrollView
          style={{ width: "100%", overflow: "hidden", zIndex: 1 }}
          onScrollBeginDrag={() => {
            if (showSearchOptions || showFooterMenu) {
              setShowSearchOptions(false);
              setShowFooterMenu(false);
            }
          }}>

          <View style={styles.scrollInterContainer}>
            <View >
              {/*  City Cards */}
              <CityCards
                showSearchResultsFor={(search) => { props.showSearchResultsFor(search) }}
                style={styles.cityCards}
              />

              {/* Nearby - todo: cut past this inside the scrollView */}
              <Text style={styles.nearby}>Nearby</Text>
              <TouchableOpacity style={styles.button4}>
                <MaterialCard5
                  onPress={() => { props.showSearchResultsFor("local") }}
                  style={styles.materialCard5} />
              </TouchableOpacity>

              {/* Top Stays */}
              <Text style={styles.topStays}>Top Stays</Text>
              <MaterialCardWithRightButtons
                onUserPress={(page) => { props.onUserPress(page) }}
                onPress={() => { props.showStayProfile("Home") }}
                style={styles.materialCardWithRightButtons1}
              />

            </View>
          </View>
        </ScrollView>

      }

      {/* Map */}
      {!showMediumMap ?
        <MapButton2
          // showMediumMap = {showMediumMap}
          onPress={() => setShowMediumMap(!showMediumMap)}
          style={styles.mapButton2}
        />
        : null //TODO: replace map with half screen map 
        // showMediumMap = {showMediumMap}
      }
      {/* Footer */}
      <FooterBar
        // setShowFooterMenu={(newOption) => { setShowFooterMenu(newOption); }}
        // showFooterMenu={showFooterMenu}
        handleFooterBar={(page) => { props.handleFooterBar(page) }}
        // handleFooterMenu={(menuItem) => { props.handleFooterMenu(menuItem) }}
        style={styles.footerBar1}
      />
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    backgroundColor: "rgba(2,172,235,1)",
    marginHorizontal: Dimensions.get('window').width < 400 ? 2 : 0,
  },
  cityCards: {
    top: 162,
    left: 4,
    height: 342,
    position: "absolute",
    right: 3
  },
  // cityCardsStackStack: {
  //   height: 810,
  //   marginTop: 101,
  //   marginLeft: -13,
  //   marginRight: -13
  // },
  // cityCardsStac: {
  //   top: 0,
  //   left: 14,
  //   height: 712,
  //   position: "absolute",
  //   right: 13
  // },
  scrollInterContainer: {
    height: 1500
  },
  headerBar: {
    top: 95,
    left: -13,
    position: "absolute",
    right: -13,
    zIndex: 101,
    backgroundColor: "rgba(2,172,235,1)",
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  },
  topStays: {
    top: 931,
    left: 6,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  nearby: {
    top: 523,
    left: 9,
    color: "rgba(0,88,155,1)",
    position: "absolute",
    fontSize: 18,
    fontFamily: "roboto-regular"
  },
  bsD1: {
    top: 14,
    left: 353,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  bsD2: {
    top: 14,
    color: "rgba(177,177,177,1)",
    position: "absolute",
    right: 38,
    opacity: 0.35,
    fontSize: 10,
    fontFamily: "roboto-regular"
  },
  button52: {
  },
  jstayLogoDark: {
    width: 'auto',
    right: -12,
    top: 36,
  },
  loremIpsum2: {
    top: 302,
    left: 386,
    color: "rgba(230,230,230,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  searchBarContainer: {
    position: "absolute",
    // paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "rgba(2,172,235,1)",
    width: '100%',
    height: "8%",
    zIndex: 100,
    alignItems: "center",
  },
  searchBar: {
    top: 45,
    height: 39,
    width: '90%',
    position: "absolute",
  },
  footerBar1: {
    left: 0,
    // right: 0,
    // width: "100%",
    zIndex: 20,
    height: 86,
    position: "absolute",
    bottom: -15
  },
  searchDropdown: {
    position: "absolute",
    margin: 0,
    paddingRight: 0,
    left: 0,
    top: 115,
    height: 345,
    right: 1,
    zIndex: 20
  },
  materialCardWithRightButtons: {
    top: 54,
    left: 27,
    width: 359,
    height: 266,
    position: "absolute"
  },
  stayResultCard1: {
    width: 359,
    height: 166,
    marginTop: 343,
    marginLeft: 27
  },
  materialCardWithRightButtons1: {
    top: 957,
    height: 266,
    position: "absolute",
    left: 5,
    right: 5
  },
  button4: {
    top: 562,
    left: 4,
    height: 349,
    position: "absolute",
    right: 4
  },
  materialCard5: {
    top: 0,
    left: "0%",
    width: "100%",
    height: 349,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 5
  },
  mapButton2: {
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    bottom: 80,
    height: 60,
    width: '100%',
    zIndex: 20
  },
  group1: {
    width: 207,
    height: 350,
    position: "absolute",
    right: 0,
    bottom: 83
  },
  rect9: {
    top: 0,
    left: 0,
    width: 207,
    height: 350,
    backgroundColor: "rgba(0,88,155,1)",
    position: "absolute"
  },
  button54: {
    top: 2,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText21: {
    top: 0,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText22: {
    top: 51,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText23: {
    top: 101,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText24: {
    top: 151,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText25: {
    top: 201,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  materialButtonWithVioletText26: {
    top: 250,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  rect3: {
    top: 50,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect4: {
    top: 100,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect5: {
    top: 150,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect6: {
    top: 200,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect7: {
    top: 250,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  rect8: {
    top: 295,
    width: 174,
    height: 1,
    backgroundColor: "rgba(2,172,235,1)",
    position: "absolute",
    right: 20
  },
  materialButtonWithVioletText28: {
    top: 296,
    left: 0,
    width: 207,
    height: 50,
    position: "absolute"
  },
  footerBar2: {
    left: "0%",
    width: "100%",
    height: 81,
    position: "absolute",
    bottom: -15
  }
});

export default Home;
