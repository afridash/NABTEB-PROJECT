import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 20
    },
    "myCarousel nav a small": {
        "display": "block"
    },
    "myCarousel nav": {
        "background": "#eee"
    },
    "myCarousel nav a": {
        "borderRadius": 0
    },
    "nav-pills > liactive > a": {
        "color": "white",
        "backgroundColor": "#16a085"
    },
    "nav-pills > liactive > a:hover": {
        "color": "black",
        "backgroundColor": "red"
    },
    "nav-pills > liactive > a:focus": {
        "color": "white",
        "backgroundColor": "#16a085"
    },
    "nav-pills > li > a": {
        "color": "#16a085"
    }
});