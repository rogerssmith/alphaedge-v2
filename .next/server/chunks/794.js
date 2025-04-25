exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 80794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var lottie = __webpack_require__(89237);
var React = __webpack_require__(46261);
function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        "default": e
    };
}
var lottie__default = /*#__PURE__*/ _interopDefaultLegacy(lottie);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
var _excluded$1 = [
    "animationData",
    "loop",
    "autoplay",
    "initialSegment",
    "onComplete",
    "onLoopComplete",
    "onEnterFrame",
    "onSegmentStart",
    "onConfigReady",
    "onDataReady",
    "onDataFailed",
    "onLoadedImages",
    "onDOMLoaded",
    "onDestroy",
    "lottieRef",
    "renderer",
    "name",
    "assetsPath",
    "rendererSettings"
];
var useLottie = function useLottie(props, style) {
    var animationData = props.animationData, loop = props.loop, autoplay = props.autoplay, initialSegment = props.initialSegment, onComplete = props.onComplete, onLoopComplete = props.onLoopComplete, onEnterFrame = props.onEnterFrame, onSegmentStart = props.onSegmentStart, onConfigReady = props.onConfigReady, onDataReady = props.onDataReady, onDataFailed = props.onDataFailed, onLoadedImages = props.onLoadedImages, onDOMLoaded = props.onDOMLoaded, onDestroy = props.onDestroy;
    props.lottieRef;
    props.renderer;
    props.name;
    props.assetsPath;
    props.rendererSettings;
    var rest = _objectWithoutProperties(props, _excluded$1);
    var _useState = React.useState(false), _useState2 = _slicedToArray(_useState, 2), animationLoaded = _useState2[0], setAnimationLoaded = _useState2[1];
    var animationInstanceRef = React.useRef();
    var animationContainer = React.useRef(null);
    /*
        ======================================
            INTERACTION METHODS
        ======================================
     */ /**
   * Play
   */ var play = function play() {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.play();
    };
    /**
   * Stop
   */ var stop = function stop() {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.stop();
    };
    /**
   * Pause
   */ var pause = function pause() {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.pause();
    };
    /**
   * Set animation speed
   * @param speed
   */ var setSpeed = function setSpeed(speed) {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.setSpeed(speed);
    };
    /**
   * Got to frame and play
   * @param value
   * @param isFrame
   */ var goToAndPlay = function goToAndPlay(value, isFrame) {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.goToAndPlay(value, isFrame);
    };
    /**
   * Got to frame and stop
   * @param value
   * @param isFrame
   */ var goToAndStop = function goToAndStop(value, isFrame) {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.goToAndStop(value, isFrame);
    };
    /**
   * Set animation direction
   * @param direction
   */ var setDirection = function setDirection(direction) {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.setDirection(direction);
    };
    /**
   * Play animation segments
   * @param segments
   * @param forceFlag
   */ var playSegments = function playSegments(segments, forceFlag) {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.playSegments(segments, forceFlag);
    };
    /**
   * Set sub frames
   * @param useSubFrames
   */ var setSubframe = function setSubframe(useSubFrames) {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.setSubframe(useSubFrames);
    };
    /**
   * Get animation duration
   * @param inFrames
   */ var getDuration = function getDuration(inFrames) {
        var _a;
        return (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.getDuration(inFrames);
    };
    /**
   * Destroy animation
   */ var destroy = function destroy() {
        var _a;
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        // Removing the reference to the animation so separate cleanups are skipped.
        // Without it the internal `lottie-react` instance throws exceptions as it already cleared itself on destroy.
        animationInstanceRef.current = undefined;
    };
    /*
        ======================================
            LOTTIE
        ======================================
     */ /**
   * Load a new animation, and if it's the case, destroy the previous one
   * @param {Object} forcedConfigs
   */ var loadAnimation = function loadAnimation() {
        var forcedConfigs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _a;
        // Return if the container ref is null
        if (!animationContainer.current) {
            return;
        }
        // Destroy any previous instance
        (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        // Build the animation configuration
        var config = _objectSpread2(_objectSpread2(_objectSpread2({}, props), forcedConfigs), {}, {
            container: animationContainer.current
        });
        // Save the animation instance
        animationInstanceRef.current = lottie__default["default"].loadAnimation(config);
        setAnimationLoaded(!!animationInstanceRef.current);
        // Return a function that will clean up
        return function() {
            var _a;
            (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
            animationInstanceRef.current = undefined;
        };
    };
    /**
   * (Re)Initialize when animation data changed
   */ React.useEffect(function() {
        var onUnmount = loadAnimation();
        // Clean up on unmount
        return function() {
            return onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        animationData,
        loop
    ]);
    // Update the autoplay state
    React.useEffect(function() {
        if (!animationInstanceRef.current) {
            return;
        }
        animationInstanceRef.current.autoplay = !!autoplay;
    }, [
        autoplay
    ]);
    // Update the initial segment state
    React.useEffect(function() {
        if (!animationInstanceRef.current) {
            return;
        }
        // When null should reset to default animation length
        if (!initialSegment) {
            animationInstanceRef.current.resetSegments(true);
            return;
        }
        // If it's not a valid segment, do nothing
        if (!Array.isArray(initialSegment) || !initialSegment.length) {
            return;
        }
        // If the current position it's not in the new segment
        // set the current position to start
        if (animationInstanceRef.current.currentRawFrame < initialSegment[0] || animationInstanceRef.current.currentRawFrame > initialSegment[1]) {
            animationInstanceRef.current.currentRawFrame = initialSegment[0];
        }
        // Update the segment
        animationInstanceRef.current.setSegment(initialSegment[0], initialSegment[1]);
    }, [
        initialSegment
    ]);
    /*
        ======================================
            EVENTS
        ======================================
     */ /**
   * Reinitialize listener on change
   */ React.useEffect(function() {
        var partialListeners = [
            {
                name: "complete",
                handler: onComplete
            },
            {
                name: "loopComplete",
                handler: onLoopComplete
            },
            {
                name: "enterFrame",
                handler: onEnterFrame
            },
            {
                name: "segmentStart",
                handler: onSegmentStart
            },
            {
                name: "config_ready",
                handler: onConfigReady
            },
            {
                name: "data_ready",
                handler: onDataReady
            },
            {
                name: "data_failed",
                handler: onDataFailed
            },
            {
                name: "loaded_images",
                handler: onLoadedImages
            },
            {
                name: "DOMLoaded",
                handler: onDOMLoaded
            },
            {
                name: "destroy",
                handler: onDestroy
            }
        ];
        var listeners = partialListeners.filter(function(listener) {
            return listener.handler != null;
        });
        if (!listeners.length) {
            return;
        }
        var deregisterList = listeners.map(/**
     * Handle the process of adding an event listener
     * @param {Listener} listener
     * @return {Function} Function that deregister the listener
     */ function(listener) {
            var _a;
            (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener(listener.name, listener.handler);
            // Return a function to deregister this listener
            return function() {
                var _a;
                (_a = animationInstanceRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(listener.name, listener.handler);
            };
        });
        // Deregister listeners on unmount
        return function() {
            deregisterList.forEach(function(deregister) {
                return deregister();
            });
        };
    }, [
        onComplete,
        onLoopComplete,
        onEnterFrame,
        onSegmentStart,
        onConfigReady,
        onDataReady,
        onDataFailed,
        onLoadedImages,
        onDOMLoaded,
        onDestroy
    ]);
    /**
   * Build the animation view
   */ var View = /*#__PURE__*/ React__default["default"].createElement("div", _objectSpread2({
        style: style,
        ref: animationContainer
    }, rest));
    return {
        View: View,
        play: play,
        stop: stop,
        pause: pause,
        setSpeed: setSpeed,
        goToAndStop: goToAndStop,
        goToAndPlay: goToAndPlay,
        setDirection: setDirection,
        playSegments: playSegments,
        setSubframe: setSubframe,
        getDuration: getDuration,
        destroy: destroy,
        animationContainerRef: animationContainer,
        animationLoaded: animationLoaded,
        animationItem: animationInstanceRef.current
    };
};
// helpers
function getContainerVisibility(container) {
    var _container$getBoundin = container.getBoundingClientRect(), top = _container$getBoundin.top, height = _container$getBoundin.height;
    var current = window.innerHeight - top;
    var max = window.innerHeight + height;
    return current / max;
}
function getContainerCursorPosition(container, cursorX, cursorY) {
    var _container$getBoundin2 = container.getBoundingClientRect(), top = _container$getBoundin2.top, left = _container$getBoundin2.left, width = _container$getBoundin2.width, height = _container$getBoundin2.height;
    var x = (cursorX - left) / width;
    var y = (cursorY - top) / height;
    return {
        x: x,
        y: y
    };
}
var useInitInteractivity = function useInitInteractivity(_ref) {
    var wrapperRef = _ref.wrapperRef, animationItem = _ref.animationItem, mode = _ref.mode, actions = _ref.actions;
    React.useEffect(function() {
        var wrapper = wrapperRef.current;
        if (!wrapper || !animationItem || !actions.length) {
            return;
        }
        animationItem.stop();
        var scrollModeHandler = function scrollModeHandler() {
            var assignedSegment = null;
            var scrollHandler = function scrollHandler() {
                var currentPercent = getContainerVisibility(wrapper);
                // Find the first action that satisfies the current position conditions
                var action = actions.find(function(_ref2) {
                    var visibility = _ref2.visibility;
                    return visibility && currentPercent >= visibility[0] && currentPercent <= visibility[1];
                });
                // Skip if no matching action was found!
                if (!action) {
                    return;
                }
                if (action.type === "seek" && action.visibility && action.frames.length === 2) {
                    // Seek: Go to a frame based on player scroll position action
                    var frameToGo = action.frames[0] + Math.ceil((currentPercent - action.visibility[0]) / (action.visibility[1] - action.visibility[0]) * action.frames[1]);
                    //! goToAndStop must be relative to the start of the current segment
                    animationItem.goToAndStop(frameToGo - animationItem.firstFrame - 1, true);
                }
                if (action.type === "loop") {
                    // Loop: Loop a given frames
                    if (assignedSegment === null) {
                        // if not playing any segments currently. play those segments and save to state
                        animationItem.playSegments(action.frames, true);
                        assignedSegment = action.frames;
                    } else {
                        // if playing any segments currently.
                        //check if segments in state are equal to the frames selected by action
                        if (assignedSegment !== action.frames) {
                            // if they are not equal. new segments are to be loaded
                            animationItem.playSegments(action.frames, true);
                            assignedSegment = action.frames;
                        } else if (animationItem.isPaused) {
                            // if they are equal the play method must be called only if lottie is paused
                            animationItem.playSegments(action.frames, true);
                            assignedSegment = action.frames;
                        }
                    }
                }
                if (action.type === "play" && animationItem.isPaused) {
                    // Play: Reset segments and continue playing full animation from current position
                    animationItem.resetSegments(true);
                    animationItem.play();
                }
                if (action.type === "stop") {
                    // Stop: Stop playback
                    animationItem.goToAndStop(action.frames[0] - animationItem.firstFrame - 1, true);
                }
            };
            document.addEventListener("scroll", scrollHandler);
            return function() {
                document.removeEventListener("scroll", scrollHandler);
            };
        };
        var cursorModeHandler = function cursorModeHandler() {
            var handleCursor = function handleCursor(_x, _y) {
                var x = _x;
                var y = _y;
                // Resolve cursor position if cursor is inside container
                if (x !== -1 && y !== -1) {
                    // Get container cursor position
                    var pos = getContainerCursorPosition(wrapper, x, y);
                    // Use the resolved position
                    x = pos.x;
                    y = pos.y;
                }
                // Find the first action that satisfies the current position conditions
                var action = actions.find(function(_ref3) {
                    var position = _ref3.position;
                    if (position && Array.isArray(position.x) && Array.isArray(position.y)) {
                        return x >= position.x[0] && x <= position.x[1] && y >= position.y[0] && y <= position.y[1];
                    }
                    if (position && !Number.isNaN(position.x) && !Number.isNaN(position.y)) {
                        return x === position.x && y === position.y;
                    }
                    return false;
                });
                // Skip if no matching action was found!
                if (!action) {
                    return;
                }
                // Process action types:
                if (action.type === "seek" && action.position && Array.isArray(action.position.x) && Array.isArray(action.position.y) && action.frames.length === 2) {
                    // Seek: Go to a frame based on player scroll position action
                    var xPercent = (x - action.position.x[0]) / (action.position.x[1] - action.position.x[0]);
                    var yPercent = (y - action.position.y[0]) / (action.position.y[1] - action.position.y[0]);
                    animationItem.playSegments(action.frames, true);
                    animationItem.goToAndStop(Math.ceil((xPercent + yPercent) / 2 * (action.frames[1] - action.frames[0])), true);
                }
                if (action.type === "loop") {
                    animationItem.playSegments(action.frames, true);
                }
                if (action.type === "play") {
                    // Play: Reset segments and continue playing full animation from current position
                    if (animationItem.isPaused) {
                        animationItem.resetSegments(false);
                    }
                    animationItem.playSegments(action.frames);
                }
                if (action.type === "stop") {
                    animationItem.goToAndStop(action.frames[0], true);
                }
            };
            var mouseMoveHandler = function mouseMoveHandler(ev) {
                handleCursor(ev.clientX, ev.clientY);
            };
            var mouseOutHandler = function mouseOutHandler() {
                handleCursor(-1, -1);
            };
            wrapper.addEventListener("mousemove", mouseMoveHandler);
            wrapper.addEventListener("mouseout", mouseOutHandler);
            return function() {
                wrapper.removeEventListener("mousemove", mouseMoveHandler);
                wrapper.removeEventListener("mouseout", mouseOutHandler);
            };
        };
        switch(mode){
            case "scroll":
                return scrollModeHandler();
            case "cursor":
                return cursorModeHandler();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mode,
        animationItem
    ]);
};
var useLottieInteractivity = function useLottieInteractivity(_ref4) {
    var actions = _ref4.actions, mode = _ref4.mode, lottieObj = _ref4.lottieObj;
    var animationItem = lottieObj.animationItem, View = lottieObj.View, animationContainerRef = lottieObj.animationContainerRef;
    useInitInteractivity({
        actions: actions,
        animationItem: animationItem,
        mode: mode,
        wrapperRef: animationContainerRef
    });
    return View;
};
var _excluded = [
    "style",
    "interactivity"
];
var Lottie = function Lottie(props) {
    var _a, _b, _c;
    var style = props.style, interactivity = props.interactivity, lottieProps = _objectWithoutProperties(props, _excluded);
    /**
   * Initialize the 'useLottie' hook
   */ var _useLottie = useLottie(lottieProps, style), View = _useLottie.View, play = _useLottie.play, stop = _useLottie.stop, pause = _useLottie.pause, setSpeed = _useLottie.setSpeed, goToAndStop = _useLottie.goToAndStop, goToAndPlay = _useLottie.goToAndPlay, setDirection = _useLottie.setDirection, playSegments = _useLottie.playSegments, setSubframe = _useLottie.setSubframe, getDuration = _useLottie.getDuration, destroy = _useLottie.destroy, animationContainerRef = _useLottie.animationContainerRef, animationLoaded = _useLottie.animationLoaded, animationItem = _useLottie.animationItem;
    /**
   * Make the hook variables/methods available through the provided 'lottieRef'
   */ React.useEffect(function() {
        if (props.lottieRef) {
            props.lottieRef.current = {
                play: play,
                stop: stop,
                pause: pause,
                setSpeed: setSpeed,
                goToAndPlay: goToAndPlay,
                goToAndStop: goToAndStop,
                setDirection: setDirection,
                playSegments: playSegments,
                setSubframe: setSubframe,
                getDuration: getDuration,
                destroy: destroy,
                animationContainerRef: animationContainerRef,
                animationLoaded: animationLoaded,
                animationItem: animationItem
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        (_a = props.lottieRef) === null || _a === void 0 ? void 0 : _a.current
    ]);
    return useLottieInteractivity({
        lottieObj: {
            View: View,
            play: play,
            stop: stop,
            pause: pause,
            setSpeed: setSpeed,
            goToAndStop: goToAndStop,
            goToAndPlay: goToAndPlay,
            setDirection: setDirection,
            playSegments: playSegments,
            setSubframe: setSubframe,
            getDuration: getDuration,
            destroy: destroy,
            animationContainerRef: animationContainerRef,
            animationLoaded: animationLoaded,
            animationItem: animationItem
        },
        actions: (_b = interactivity === null || interactivity === void 0 ? void 0 : interactivity.actions) !== null && _b !== void 0 ? _b : [],
        mode: (_c = interactivity === null || interactivity === void 0 ? void 0 : interactivity.mode) !== null && _c !== void 0 ? _c : "scroll"
    });
};
__webpack_unused_export__ = ({
    enumerable: true,
    get: function() {
        return lottie__default["default"];
    }
});
exports.ZP = Lottie;
__webpack_unused_export__ = useLottie;
__webpack_unused_export__ = useLottieInteractivity; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 89237:
/***/ (function(module, exports, __webpack_require__) {

typeof navigator !== "undefined" && function(global1, factory1) {
     true ? module.exports = factory1() : 0;
}(this, function() {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg";
    var locationHref = "";
    var _useWebWorker = false;
    var initialDefaultFrame = -999999;
    var setWebWorker = function setWebWorker1(flag1) {
        _useWebWorker = !!flag1;
    };
    var getWebWorker = function getWebWorker1() {
        return _useWebWorker;
    };
    var setLocationHref = function setLocationHref1(value3) {
        locationHref = value3;
    };
    var getLocationHref = function getLocationHref1() {
        return locationHref;
    };
    function createTag(type1) {
        // return {appendChild:function(){},setAttribute:function(){},style:{}}
        return document.createElement(type1);
    }
    function extendPrototype(sources1, destination1) {
        var i3;
        var len1 = sources1.length;
        var sourcePrototype1;
        for(i3 = 0; i3 < len1; i3 += 1){
            sourcePrototype1 = sources1[i3].prototype;
            for(var attr3 in sourcePrototype1){
                if (Object.prototype.hasOwnProperty.call(sourcePrototype1, attr3)) destination1.prototype[attr3] = sourcePrototype1[attr3];
            }
        }
    }
    function getDescriptor(object1, prop1) {
        return Object.getOwnPropertyDescriptor(object1, prop1);
    }
    function createProxyFunction(prototype1) {
        function ProxyFunction1() {}
        ProxyFunction1.prototype = prototype1;
        return ProxyFunction1;
    }
    // import Howl from '../../3rd_party/howler';
    var audioControllerFactory = function() {
        function AudioController1(audioFactory1) {
            this.audios = [];
            this.audioFactory = audioFactory1;
            this._volume = 1;
            this._isMuted = false;
        }
        AudioController1.prototype = {
            addAudio: function addAudio1(audio1) {
                this.audios.push(audio1);
            },
            pause: function pause1() {
                var i3;
                var len1 = this.audios.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this.audios[i3].pause();
                }
            },
            resume: function resume1() {
                var i3;
                var len1 = this.audios.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this.audios[i3].resume();
                }
            },
            setRate: function setRate1(rateValue1) {
                var i3;
                var len1 = this.audios.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this.audios[i3].setRate(rateValue1);
                }
            },
            createAudio: function createAudio1(assetPath1) {
                if (this.audioFactory) {
                    return this.audioFactory(assetPath1);
                }
                if (window.Howl) {
                    return new window.Howl({
                        src: [
                            assetPath1
                        ]
                    });
                }
                return {
                    isPlaying: false,
                    play: function play1() {
                        this.isPlaying = true;
                    },
                    seek: function seek1() {
                        this.isPlaying = false;
                    },
                    playing: function playing1() {},
                    rate: function rate1() {},
                    setVolume: function setVolume1() {}
                };
            },
            setAudioFactory: function setAudioFactory1(audioFactory1) {
                this.audioFactory = audioFactory1;
            },
            setVolume: function setVolume1(value3) {
                this._volume = value3;
                this._updateVolume();
            },
            mute: function mute1() {
                this._isMuted = true;
                this._updateVolume();
            },
            unmute: function unmute1() {
                this._isMuted = false;
                this._updateVolume();
            },
            getVolume: function getVolume1() {
                return this._volume;
            },
            _updateVolume: function _updateVolume1() {
                var i3;
                var len1 = this.audios.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this.audios[i3].volume(this._volume * (this._isMuted ? 0 : 1));
                }
            }
        };
        return function() {
            return new AudioController1();
        };
    }();
    var createTypedArray = function() {
        function createRegularArray1(type1, len1) {
            var i3 = 0;
            var arr3 = [];
            var value3;
            switch(type1){
                case "int16":
                case "uint8c":
                    value3 = 1;
                    break;
                default:
                    value3 = 1.1;
                    break;
            }
            for(i3 = 0; i3 < len1; i3 += 1){
                arr3.push(value3);
            }
            return arr3;
        }
        function createTypedArrayFactory1(type1, len1) {
            if (type1 === "float32") {
                return new Float32Array(len1);
            }
            if (type1 === "int16") {
                return new Int16Array(len1);
            }
            if (type1 === "uint8c") {
                return new Uint8ClampedArray(len1);
            }
            return createRegularArray1(type1, len1);
        }
        if (typeof Uint8ClampedArray === "function" && typeof Float32Array === "function") {
            return createTypedArrayFactory1;
        }
        return createRegularArray1;
    }();
    function createSizedArray(len1) {
        return Array.apply(null, {
            length: len1
        });
    }
    function _typeof$6(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$6 = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof$6 = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof$6(obj1);
    }
    var subframeEnabled = true;
    var expressionsPlugin = null;
    var expressionsInterfaces = null;
    var idPrefix$1 = "";
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var _shouldRoundValues = false;
    var bmPow = Math.pow;
    var bmSqrt = Math.sqrt;
    var bmFloor = Math.floor;
    var bmMax = Math.max;
    var bmMin = Math.min;
    var BMMath = {};
    (function() {
        var propertyNames1 = [
            "abs",
            "acos",
            "acosh",
            "asin",
            "asinh",
            "atan",
            "atanh",
            "atan2",
            "ceil",
            "cbrt",
            "expm1",
            "clz32",
            "cos",
            "cosh",
            "exp",
            "floor",
            "fround",
            "hypot",
            "imul",
            "log",
            "log1p",
            "log2",
            "log10",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sign",
            "sin",
            "sinh",
            "sqrt",
            "tan",
            "tanh",
            "trunc",
            "E",
            "LN10",
            "LN2",
            "LOG10E",
            "LOG2E",
            "PI",
            "SQRT1_2",
            "SQRT2"
        ];
        var i3;
        var len1 = propertyNames1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            BMMath[propertyNames1[i3]] = Math[propertyNames1[i3]];
        }
    })();
    function ProjectInterface$1() {
        return {};
    }
    BMMath.random = Math.random;
    BMMath.abs = function(val3) {
        var tOfVal1 = _typeof$6(val3);
        if (tOfVal1 === "object" && val3.length) {
            var absArr1 = createSizedArray(val3.length);
            var i3;
            var len1 = val3.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                absArr1[i3] = Math.abs(val3[i3]);
            }
            return absArr1;
        }
        return Math.abs(val3);
    };
    var defaultCurveSegments = 150;
    var degToRads = Math.PI / 180;
    var roundCorner = 0.5519;
    function roundValues(flag1) {
        _shouldRoundValues = !!flag1;
    }
    function bmRnd(value3) {
        if (_shouldRoundValues) {
            return Math.round(value3);
        }
        return value3;
    }
    function styleDiv(element1) {
        element1.style.position = "absolute";
        element1.style.top = 0;
        element1.style.left = 0;
        element1.style.display = "block";
        element1.style.transformOrigin = "0 0";
        element1.style.webkitTransformOrigin = "0 0";
        element1.style.backfaceVisibility = "visible";
        element1.style.webkitBackfaceVisibility = "visible";
        element1.style.transformStyle = "preserve-3d";
        element1.style.webkitTransformStyle = "preserve-3d";
        element1.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(type1, currentTime1, totalTime1, frameMultiplier1) {
        this.type = type1;
        this.currentTime = currentTime1;
        this.totalTime = totalTime1;
        this.direction = frameMultiplier1 < 0 ? -1 : 1;
    }
    function BMCompleteEvent(type1, frameMultiplier1) {
        this.type = type1;
        this.direction = frameMultiplier1 < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(type1, totalLoops1, currentLoop1, frameMultiplier1) {
        this.type = type1;
        this.currentLoop = currentLoop1;
        this.totalLoops = totalLoops1;
        this.direction = frameMultiplier1 < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(type1, firstFrame1, totalFrames1) {
        this.type = type1;
        this.firstFrame = firstFrame1;
        this.totalFrames = totalFrames1;
    }
    function BMDestroyEvent(type1, target1) {
        this.type = type1;
        this.target = target1;
    }
    function BMRenderFrameErrorEvent(nativeError1, currentTime1) {
        this.type = "renderFrameError";
        this.nativeError = nativeError1;
        this.currentTime = currentTime1;
    }
    function BMConfigErrorEvent(nativeError1) {
        this.type = "configError";
        this.nativeError = nativeError1;
    }
    function BMAnimationConfigErrorEvent(type1, nativeError1) {
        this.type = type1;
        this.nativeError = nativeError1;
    }
    var createElementID = function() {
        var _count1 = 0;
        return function createID1() {
            _count1 += 1;
            return idPrefix$1 + "__lottie_element_" + _count1;
        };
    }();
    function HSVtoRGB(h3, s4, v5) {
        var r1;
        var g3;
        var b3;
        var i3;
        var f3;
        var p6;
        var q1;
        var t3;
        i3 = Math.floor(h3 * 6);
        f3 = h3 * 6 - i3;
        p6 = v5 * (1 - s4);
        q1 = v5 * (1 - f3 * s4);
        t3 = v5 * (1 - (1 - f3) * s4);
        switch(i3 % 6){
            case 0:
                r1 = v5;
                g3 = t3;
                b3 = p6;
                break;
            case 1:
                r1 = q1;
                g3 = v5;
                b3 = p6;
                break;
            case 2:
                r1 = p6;
                g3 = v5;
                b3 = t3;
                break;
            case 3:
                r1 = p6;
                g3 = q1;
                b3 = v5;
                break;
            case 4:
                r1 = t3;
                g3 = p6;
                b3 = v5;
                break;
            case 5:
                r1 = v5;
                g3 = p6;
                b3 = q1;
                break;
            default:
                break;
        }
        return [
            r1,
            g3,
            b3
        ];
    }
    function RGBtoHSV(r1, g3, b3) {
        var max1 = Math.max(r1, g3, b3);
        var min1 = Math.min(r1, g3, b3);
        var d3 = max1 - min1;
        var h3;
        var s4 = max1 === 0 ? 0 : d3 / max1;
        var v5 = max1 / 255;
        switch(max1){
            case min1:
                h3 = 0;
                break;
            case r1:
                h3 = g3 - b3 + d3 * (g3 < b3 ? 6 : 0);
                h3 /= 6 * d3;
                break;
            case g3:
                h3 = b3 - r1 + d3 * 2;
                h3 /= 6 * d3;
                break;
            case b3:
                h3 = r1 - g3 + d3 * 4;
                h3 /= 6 * d3;
                break;
            default:
                break;
        }
        return [
            h3,
            s4,
            v5
        ];
    }
    function addSaturationToRGB(color4, offset1) {
        var hsv1 = RGBtoHSV(color4[0] * 255, color4[1] * 255, color4[2] * 255);
        hsv1[1] += offset1;
        if (hsv1[1] > 1) {
            hsv1[1] = 1;
        } else if (hsv1[1] <= 0) {
            hsv1[1] = 0;
        }
        return HSVtoRGB(hsv1[0], hsv1[1], hsv1[2]);
    }
    function addBrightnessToRGB(color4, offset1) {
        var hsv1 = RGBtoHSV(color4[0] * 255, color4[1] * 255, color4[2] * 255);
        hsv1[2] += offset1;
        if (hsv1[2] > 1) {
            hsv1[2] = 1;
        } else if (hsv1[2] < 0) {
            hsv1[2] = 0;
        }
        return HSVtoRGB(hsv1[0], hsv1[1], hsv1[2]);
    }
    function addHueToRGB(color4, offset1) {
        var hsv1 = RGBtoHSV(color4[0] * 255, color4[1] * 255, color4[2] * 255);
        hsv1[0] += offset1 / 360;
        if (hsv1[0] > 1) {
            hsv1[0] -= 1;
        } else if (hsv1[0] < 0) {
            hsv1[0] += 1;
        }
        return HSVtoRGB(hsv1[0], hsv1[1], hsv1[2]);
    }
    var rgbToHex = function() {
        var colorMap1 = [];
        var i3;
        var hex1;
        for(i3 = 0; i3 < 256; i3 += 1){
            hex1 = i3.toString(16);
            colorMap1[i3] = hex1.length === 1 ? "0" + hex1 : hex1;
        }
        return function(r1, g3, b3) {
            if (r1 < 0) {
                r1 = 0;
            }
            if (g3 < 0) {
                g3 = 0;
            }
            if (b3 < 0) {
                b3 = 0;
            }
            return "#" + colorMap1[r1] + colorMap1[g3] + colorMap1[b3];
        };
    }();
    var setSubframeEnabled = function setSubframeEnabled1(flag1) {
        subframeEnabled = !!flag1;
    };
    var getSubframeEnabled = function getSubframeEnabled1() {
        return subframeEnabled;
    };
    var setExpressionsPlugin = function setExpressionsPlugin1(value3) {
        expressionsPlugin = value3;
    };
    var getExpressionsPlugin = function getExpressionsPlugin1() {
        return expressionsPlugin;
    };
    var setExpressionInterfaces = function setExpressionInterfaces1(value3) {
        expressionsInterfaces = value3;
    };
    var getExpressionInterfaces = function getExpressionInterfaces1() {
        return expressionsInterfaces;
    };
    var setDefaultCurveSegments = function setDefaultCurveSegments1(value3) {
        defaultCurveSegments = value3;
    };
    var getDefaultCurveSegments = function getDefaultCurveSegments1() {
        return defaultCurveSegments;
    };
    var setIdPrefix = function setIdPrefix1(value3) {
        idPrefix$1 = value3;
    };
    var getIdPrefix = function getIdPrefix1() {
        return idPrefix$1;
    };
    function createNS(type1) {
        // return {appendChild:function(){},setAttribute:function(){},style:{}}
        return document.createElementNS(svgNS, type1);
    }
    function _typeof$5(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$5 = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof$5 = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof$5(obj1);
    }
    var dataManager = function() {
        var _counterId1 = 1;
        var processes1 = [];
        var workerFn1;
        var workerInstance1;
        var workerProxy1 = {
            onmessage: function onmessage1() {},
            postMessage: function postMessage1(path1) {
                workerFn1({
                    data: path1
                });
            }
        };
        var _workerSelf1 = {
            postMessage: function postMessage1(data1) {
                workerProxy1.onmessage({
                    data: data1
                });
            }
        };
        function createWorker1(fn1) {
            if (window.Worker && window.Blob && getWebWorker()) {
                var blob1 = new Blob([
                    "var _workerSelf = self; self.onmessage = ",
                    fn1.toString()
                ], {
                    type: "text/javascript"
                }); // var blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });
                var url1 = URL.createObjectURL(blob1);
                return new Worker(url1);
            }
            workerFn1 = fn1;
            return workerProxy1;
        }
        function setupWorker1() {
            if (!workerInstance1) {
                workerInstance1 = createWorker1(function workerStart1(e3) {
                    function dataFunctionManager1() {
                        function completeLayers1(layers1, comps1) {
                            var layerData1;
                            var i3;
                            var len1 = layers1.length;
                            var j3;
                            var jLen1;
                            var k3;
                            var kLen1;
                            for(i3 = 0; i3 < len1; i3 += 1){
                                layerData1 = layers1[i3];
                                if ("ks" in layerData1 && !layerData1.completed) {
                                    layerData1.completed = true;
                                    if (layerData1.hasMask) {
                                        var maskProps1 = layerData1.masksProperties;
                                        jLen1 = maskProps1.length;
                                        for(j3 = 0; j3 < jLen1; j3 += 1){
                                            if (maskProps1[j3].pt.k.i) {
                                                convertPathsToAbsoluteValues1(maskProps1[j3].pt.k);
                                            } else {
                                                kLen1 = maskProps1[j3].pt.k.length;
                                                for(k3 = 0; k3 < kLen1; k3 += 1){
                                                    if (maskProps1[j3].pt.k[k3].s) {
                                                        convertPathsToAbsoluteValues1(maskProps1[j3].pt.k[k3].s[0]);
                                                    }
                                                    if (maskProps1[j3].pt.k[k3].e) {
                                                        convertPathsToAbsoluteValues1(maskProps1[j3].pt.k[k3].e[0]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (layerData1.ty === 0) {
                                        layerData1.layers = findCompLayers1(layerData1.refId, comps1);
                                        completeLayers1(layerData1.layers, comps1);
                                    } else if (layerData1.ty === 4) {
                                        completeShapes1(layerData1.shapes);
                                    } else if (layerData1.ty === 5) {
                                        completeText1(layerData1);
                                    }
                                }
                            }
                        }
                        function completeChars1(chars1, assets1) {
                            if (chars1) {
                                var i3 = 0;
                                var len1 = chars1.length;
                                for(i3 = 0; i3 < len1; i3 += 1){
                                    if (chars1[i3].t === 1) {
                                        // var compData = findComp(chars[i].data.refId, assets);
                                        chars1[i3].data.layers = findCompLayers1(chars1[i3].data.refId, assets1); // chars[i].data.ip = 0;
                                        // chars[i].data.op = 99999;
                                        // chars[i].data.st = 0;
                                        // chars[i].data.sr = 1;
                                        // chars[i].w = compData.w;
                                        // chars[i].data.ks = {
                                        //   a: { k: [0, 0, 0], a: 0 },
                                        //   p: { k: [0, -compData.h, 0], a: 0 },
                                        //   r: { k: 0, a: 0 },
                                        //   s: { k: [100, 100], a: 0 },
                                        //   o: { k: 100, a: 0 },
                                        // };
                                        completeLayers1(chars1[i3].data.layers, assets1);
                                    }
                                }
                            }
                        }
                        function findComp1(id1, comps1) {
                            var i3 = 0;
                            var len1 = comps1.length;
                            while(i3 < len1){
                                if (comps1[i3].id === id1) {
                                    return comps1[i3];
                                }
                                i3 += 1;
                            }
                            return null;
                        }
                        function findCompLayers1(id1, comps1) {
                            var comp1 = findComp1(id1, comps1);
                            if (comp1) {
                                if (!comp1.layers.__used) {
                                    comp1.layers.__used = true;
                                    return comp1.layers;
                                }
                                return JSON.parse(JSON.stringify(comp1.layers));
                            }
                            return null;
                        }
                        function completeShapes1(arr3) {
                            var i3;
                            var len1 = arr3.length;
                            var j3;
                            var jLen1;
                            for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                                if (arr3[i3].ty === "sh") {
                                    if (arr3[i3].ks.k.i) {
                                        convertPathsToAbsoluteValues1(arr3[i3].ks.k);
                                    } else {
                                        jLen1 = arr3[i3].ks.k.length;
                                        for(j3 = 0; j3 < jLen1; j3 += 1){
                                            if (arr3[i3].ks.k[j3].s) {
                                                convertPathsToAbsoluteValues1(arr3[i3].ks.k[j3].s[0]);
                                            }
                                            if (arr3[i3].ks.k[j3].e) {
                                                convertPathsToAbsoluteValues1(arr3[i3].ks.k[j3].e[0]);
                                            }
                                        }
                                    }
                                } else if (arr3[i3].ty === "gr") {
                                    completeShapes1(arr3[i3].it);
                                }
                            }
                        }
                        function convertPathsToAbsoluteValues1(path1) {
                            var i3;
                            var len1 = path1.i.length;
                            for(i3 = 0; i3 < len1; i3 += 1){
                                path1.i[i3][0] += path1.v[i3][0];
                                path1.i[i3][1] += path1.v[i3][1];
                                path1.o[i3][0] += path1.v[i3][0];
                                path1.o[i3][1] += path1.v[i3][1];
                            }
                        }
                        function checkVersion1(minimum1, animVersionString1) {
                            var animVersion1 = animVersionString1 ? animVersionString1.split(".") : [
                                100,
                                100,
                                100
                            ];
                            if (minimum1[0] > animVersion1[0]) {
                                return true;
                            }
                            if (animVersion1[0] > minimum1[0]) {
                                return false;
                            }
                            if (minimum1[1] > animVersion1[1]) {
                                return true;
                            }
                            if (animVersion1[1] > minimum1[1]) {
                                return false;
                            }
                            if (minimum1[2] > animVersion1[2]) {
                                return true;
                            }
                            if (animVersion1[2] > minimum1[2]) {
                                return false;
                            }
                            return null;
                        }
                        var checkText1 = function() {
                            var minimumVersion1 = [
                                4,
                                4,
                                14
                            ];
                            function updateTextLayer1(textLayer1) {
                                var documentData1 = textLayer1.t.d;
                                textLayer1.t.d = {
                                    k: [
                                        {
                                            s: documentData1,
                                            t: 0
                                        }
                                    ]
                                };
                            }
                            function iterateLayers1(layers1) {
                                var i3;
                                var len1 = layers1.length;
                                for(i3 = 0; i3 < len1; i3 += 1){
                                    if (layers1[i3].ty === 5) {
                                        updateTextLayer1(layers1[i3]);
                                    }
                                }
                            }
                            return function(animationData1) {
                                if (checkVersion1(minimumVersion1, animationData1.v)) {
                                    iterateLayers1(animationData1.layers);
                                    if (animationData1.assets) {
                                        var i3;
                                        var len1 = animationData1.assets.length;
                                        for(i3 = 0; i3 < len1; i3 += 1){
                                            if (animationData1.assets[i3].layers) {
                                                iterateLayers1(animationData1.assets[i3].layers);
                                            }
                                        }
                                    }
                                }
                            };
                        }();
                        var checkChars1 = function() {
                            var minimumVersion1 = [
                                4,
                                7,
                                99
                            ];
                            return function(animationData1) {
                                if (animationData1.chars && !checkVersion1(minimumVersion1, animationData1.v)) {
                                    var i3;
                                    var len1 = animationData1.chars.length;
                                    for(i3 = 0; i3 < len1; i3 += 1){
                                        var charData1 = animationData1.chars[i3];
                                        if (charData1.data && charData1.data.shapes) {
                                            completeShapes1(charData1.data.shapes);
                                            charData1.data.ip = 0;
                                            charData1.data.op = 99999;
                                            charData1.data.st = 0;
                                            charData1.data.sr = 1;
                                            charData1.data.ks = {
                                                p: {
                                                    k: [
                                                        0,
                                                        0
                                                    ],
                                                    a: 0
                                                },
                                                s: {
                                                    k: [
                                                        100,
                                                        100
                                                    ],
                                                    a: 0
                                                },
                                                a: {
                                                    k: [
                                                        0,
                                                        0
                                                    ],
                                                    a: 0
                                                },
                                                r: {
                                                    k: 0,
                                                    a: 0
                                                },
                                                o: {
                                                    k: 100,
                                                    a: 0
                                                }
                                            };
                                            if (!animationData1.chars[i3].t) {
                                                charData1.data.shapes.push({
                                                    ty: "no"
                                                });
                                                charData1.data.shapes[0].it.push({
                                                    p: {
                                                        k: [
                                                            0,
                                                            0
                                                        ],
                                                        a: 0
                                                    },
                                                    s: {
                                                        k: [
                                                            100,
                                                            100
                                                        ],
                                                        a: 0
                                                    },
                                                    a: {
                                                        k: [
                                                            0,
                                                            0
                                                        ],
                                                        a: 0
                                                    },
                                                    r: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    o: {
                                                        k: 100,
                                                        a: 0
                                                    },
                                                    sk: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    sa: {
                                                        k: 0,
                                                        a: 0
                                                    },
                                                    ty: "tr"
                                                });
                                            }
                                        }
                                    }
                                }
                            };
                        }();
                        var checkPathProperties1 = function() {
                            var minimumVersion1 = [
                                5,
                                7,
                                15
                            ];
                            function updateTextLayer1(textLayer1) {
                                var pathData1 = textLayer1.t.p;
                                if (typeof pathData1.a === "number") {
                                    pathData1.a = {
                                        a: 0,
                                        k: pathData1.a
                                    };
                                }
                                if (typeof pathData1.p === "number") {
                                    pathData1.p = {
                                        a: 0,
                                        k: pathData1.p
                                    };
                                }
                                if (typeof pathData1.r === "number") {
                                    pathData1.r = {
                                        a: 0,
                                        k: pathData1.r
                                    };
                                }
                            }
                            function iterateLayers1(layers1) {
                                var i3;
                                var len1 = layers1.length;
                                for(i3 = 0; i3 < len1; i3 += 1){
                                    if (layers1[i3].ty === 5) {
                                        updateTextLayer1(layers1[i3]);
                                    }
                                }
                            }
                            return function(animationData1) {
                                if (checkVersion1(minimumVersion1, animationData1.v)) {
                                    iterateLayers1(animationData1.layers);
                                    if (animationData1.assets) {
                                        var i3;
                                        var len1 = animationData1.assets.length;
                                        for(i3 = 0; i3 < len1; i3 += 1){
                                            if (animationData1.assets[i3].layers) {
                                                iterateLayers1(animationData1.assets[i3].layers);
                                            }
                                        }
                                    }
                                }
                            };
                        }();
                        var checkColors1 = function() {
                            var minimumVersion1 = [
                                4,
                                1,
                                9
                            ];
                            function iterateShapes1(shapes1) {
                                var i3;
                                var len1 = shapes1.length;
                                var j3;
                                var jLen1;
                                for(i3 = 0; i3 < len1; i3 += 1){
                                    if (shapes1[i3].ty === "gr") {
                                        iterateShapes1(shapes1[i3].it);
                                    } else if (shapes1[i3].ty === "fl" || shapes1[i3].ty === "st") {
                                        if (shapes1[i3].c.k && shapes1[i3].c.k[0].i) {
                                            jLen1 = shapes1[i3].c.k.length;
                                            for(j3 = 0; j3 < jLen1; j3 += 1){
                                                if (shapes1[i3].c.k[j3].s) {
                                                    shapes1[i3].c.k[j3].s[0] /= 255;
                                                    shapes1[i3].c.k[j3].s[1] /= 255;
                                                    shapes1[i3].c.k[j3].s[2] /= 255;
                                                    shapes1[i3].c.k[j3].s[3] /= 255;
                                                }
                                                if (shapes1[i3].c.k[j3].e) {
                                                    shapes1[i3].c.k[j3].e[0] /= 255;
                                                    shapes1[i3].c.k[j3].e[1] /= 255;
                                                    shapes1[i3].c.k[j3].e[2] /= 255;
                                                    shapes1[i3].c.k[j3].e[3] /= 255;
                                                }
                                            }
                                        } else {
                                            shapes1[i3].c.k[0] /= 255;
                                            shapes1[i3].c.k[1] /= 255;
                                            shapes1[i3].c.k[2] /= 255;
                                            shapes1[i3].c.k[3] /= 255;
                                        }
                                    }
                                }
                            }
                            function iterateLayers1(layers1) {
                                var i3;
                                var len1 = layers1.length;
                                for(i3 = 0; i3 < len1; i3 += 1){
                                    if (layers1[i3].ty === 4) {
                                        iterateShapes1(layers1[i3].shapes);
                                    }
                                }
                            }
                            return function(animationData1) {
                                if (checkVersion1(minimumVersion1, animationData1.v)) {
                                    iterateLayers1(animationData1.layers);
                                    if (animationData1.assets) {
                                        var i3;
                                        var len1 = animationData1.assets.length;
                                        for(i3 = 0; i3 < len1; i3 += 1){
                                            if (animationData1.assets[i3].layers) {
                                                iterateLayers1(animationData1.assets[i3].layers);
                                            }
                                        }
                                    }
                                }
                            };
                        }();
                        var checkShapes1 = function() {
                            var minimumVersion1 = [
                                4,
                                4,
                                18
                            ];
                            function completeClosingShapes1(arr3) {
                                var i3;
                                var len1 = arr3.length;
                                var j3;
                                var jLen1;
                                for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                                    if (arr3[i3].ty === "sh") {
                                        if (arr3[i3].ks.k.i) {
                                            arr3[i3].ks.k.c = arr3[i3].closed;
                                        } else {
                                            jLen1 = arr3[i3].ks.k.length;
                                            for(j3 = 0; j3 < jLen1; j3 += 1){
                                                if (arr3[i3].ks.k[j3].s) {
                                                    arr3[i3].ks.k[j3].s[0].c = arr3[i3].closed;
                                                }
                                                if (arr3[i3].ks.k[j3].e) {
                                                    arr3[i3].ks.k[j3].e[0].c = arr3[i3].closed;
                                                }
                                            }
                                        }
                                    } else if (arr3[i3].ty === "gr") {
                                        completeClosingShapes1(arr3[i3].it);
                                    }
                                }
                            }
                            function iterateLayers1(layers1) {
                                var layerData1;
                                var i3;
                                var len1 = layers1.length;
                                var j3;
                                var jLen1;
                                var k3;
                                var kLen1;
                                for(i3 = 0; i3 < len1; i3 += 1){
                                    layerData1 = layers1[i3];
                                    if (layerData1.hasMask) {
                                        var maskProps1 = layerData1.masksProperties;
                                        jLen1 = maskProps1.length;
                                        for(j3 = 0; j3 < jLen1; j3 += 1){
                                            if (maskProps1[j3].pt.k.i) {
                                                maskProps1[j3].pt.k.c = maskProps1[j3].cl;
                                            } else {
                                                kLen1 = maskProps1[j3].pt.k.length;
                                                for(k3 = 0; k3 < kLen1; k3 += 1){
                                                    if (maskProps1[j3].pt.k[k3].s) {
                                                        maskProps1[j3].pt.k[k3].s[0].c = maskProps1[j3].cl;
                                                    }
                                                    if (maskProps1[j3].pt.k[k3].e) {
                                                        maskProps1[j3].pt.k[k3].e[0].c = maskProps1[j3].cl;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if (layerData1.ty === 4) {
                                        completeClosingShapes1(layerData1.shapes);
                                    }
                                }
                            }
                            return function(animationData1) {
                                if (checkVersion1(minimumVersion1, animationData1.v)) {
                                    iterateLayers1(animationData1.layers);
                                    if (animationData1.assets) {
                                        var i3;
                                        var len1 = animationData1.assets.length;
                                        for(i3 = 0; i3 < len1; i3 += 1){
                                            if (animationData1.assets[i3].layers) {
                                                iterateLayers1(animationData1.assets[i3].layers);
                                            }
                                        }
                                    }
                                }
                            };
                        }();
                        function completeData1(animationData1) {
                            if (animationData1.__complete) {
                                return;
                            }
                            checkColors1(animationData1);
                            checkText1(animationData1);
                            checkChars1(animationData1);
                            checkPathProperties1(animationData1);
                            checkShapes1(animationData1);
                            completeLayers1(animationData1.layers, animationData1.assets);
                            completeChars1(animationData1.chars, animationData1.assets);
                            animationData1.__complete = true;
                        }
                        function completeText1(data1) {
                            if (data1.t.a.length === 0 && !("m" in data1.t.p)) {}
                        }
                        var moduleOb1 = {};
                        moduleOb1.completeData = completeData1;
                        moduleOb1.checkColors = checkColors1;
                        moduleOb1.checkChars = checkChars1;
                        moduleOb1.checkPathProperties = checkPathProperties1;
                        moduleOb1.checkShapes = checkShapes1;
                        moduleOb1.completeLayers = completeLayers1;
                        return moduleOb1;
                    }
                    if (!_workerSelf1.dataManager) {
                        _workerSelf1.dataManager = dataFunctionManager1();
                    }
                    if (!_workerSelf1.assetLoader) {
                        _workerSelf1.assetLoader = function() {
                            function formatResponse1(xhr1) {
                                // using typeof doubles the time of execution of this method,
                                // so if available, it's better to use the header to validate the type
                                var contentTypeHeader1 = xhr1.getResponseHeader("content-type");
                                if (contentTypeHeader1 && xhr1.responseType === "json" && contentTypeHeader1.indexOf("json") !== -1) {
                                    return xhr1.response;
                                }
                                if (xhr1.response && _typeof$5(xhr1.response) === "object") {
                                    return xhr1.response;
                                }
                                if (xhr1.response && typeof xhr1.response === "string") {
                                    return JSON.parse(xhr1.response);
                                }
                                if (xhr1.responseText) {
                                    return JSON.parse(xhr1.responseText);
                                }
                                return null;
                            }
                            function loadAsset1(path1, fullPath1, callback1, errorCallback1) {
                                var response1;
                                var xhr1 = new XMLHttpRequest(); // set responseType after calling open or IE will break.
                                try {
                                    // This crashes on Android WebView prior to KitKat
                                    xhr1.responseType = "json";
                                } catch (err1) {} // eslint-disable-line no-empty
                                xhr1.onreadystatechange = function() {
                                    if (xhr1.readyState === 4) {
                                        if (xhr1.status === 200) {
                                            response1 = formatResponse1(xhr1);
                                            callback1(response1);
                                        } else {
                                            try {
                                                response1 = formatResponse1(xhr1);
                                                callback1(response1);
                                            } catch (err1) {
                                                if (errorCallback1) {
                                                    errorCallback1(err1);
                                                }
                                            }
                                        }
                                    }
                                };
                                try {
                                    // Hack to workaround banner validation
                                    xhr1.open([
                                        "G",
                                        "E",
                                        "T"
                                    ].join(""), path1, true);
                                } catch (error1) {
                                    // Hack to workaround banner validation
                                    xhr1.open([
                                        "G",
                                        "E",
                                        "T"
                                    ].join(""), fullPath1 + "/" + path1, true);
                                }
                                xhr1.send();
                            }
                            return {
                                load: loadAsset1
                            };
                        }();
                    }
                    if (e3.data.type === "loadAnimation") {
                        _workerSelf1.assetLoader.load(e3.data.path, e3.data.fullPath, function(data1) {
                            _workerSelf1.dataManager.completeData(data1);
                            _workerSelf1.postMessage({
                                id: e3.data.id,
                                payload: data1,
                                status: "success"
                            });
                        }, function() {
                            _workerSelf1.postMessage({
                                id: e3.data.id,
                                status: "error"
                            });
                        });
                    } else if (e3.data.type === "complete") {
                        var animation1 = e3.data.animation;
                        _workerSelf1.dataManager.completeData(animation1);
                        _workerSelf1.postMessage({
                            id: e3.data.id,
                            payload: animation1,
                            status: "success"
                        });
                    } else if (e3.data.type === "loadData") {
                        _workerSelf1.assetLoader.load(e3.data.path, e3.data.fullPath, function(data1) {
                            _workerSelf1.postMessage({
                                id: e3.data.id,
                                payload: data1,
                                status: "success"
                            });
                        }, function() {
                            _workerSelf1.postMessage({
                                id: e3.data.id,
                                status: "error"
                            });
                        });
                    }
                });
                workerInstance1.onmessage = function(event1) {
                    var data1 = event1.data;
                    var id1 = data1.id;
                    var process1 = processes1[id1];
                    processes1[id1] = null;
                    if (data1.status === "success") {
                        process1.onComplete(data1.payload);
                    } else if (process1.onError) {
                        process1.onError();
                    }
                };
            }
        }
        function createProcess1(onComplete1, onError1) {
            _counterId1 += 1;
            var id1 = "processId_" + _counterId1;
            processes1[id1] = {
                onComplete: onComplete1,
                onError: onError1
            };
            return id1;
        }
        function loadAnimation1(path1, onComplete1, onError1) {
            setupWorker1();
            var processId1 = createProcess1(onComplete1, onError1);
            workerInstance1.postMessage({
                type: "loadAnimation",
                path: path1,
                fullPath: window.location.origin + window.location.pathname,
                id: processId1
            });
        }
        function loadData1(path1, onComplete1, onError1) {
            setupWorker1();
            var processId1 = createProcess1(onComplete1, onError1);
            workerInstance1.postMessage({
                type: "loadData",
                path: path1,
                fullPath: window.location.origin + window.location.pathname,
                id: processId1
            });
        }
        function completeAnimation1(anim1, onComplete1, onError1) {
            setupWorker1();
            var processId1 = createProcess1(onComplete1, onError1);
            workerInstance1.postMessage({
                type: "complete",
                animation: anim1,
                id: processId1
            });
        }
        return {
            loadAnimation: loadAnimation1,
            loadData: loadData1,
            completeAnimation: completeAnimation1
        };
    }();
    var ImagePreloader = function() {
        var proxyImage1 = function() {
            var canvas1 = createTag("canvas");
            canvas1.width = 1;
            canvas1.height = 1;
            var ctx1 = canvas1.getContext("2d");
            ctx1.fillStyle = "rgba(0,0,0,0)";
            ctx1.fillRect(0, 0, 1, 1);
            return canvas1;
        }();
        function imageLoaded1() {
            this.loadedAssets += 1;
            if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
                if (this.imagesLoadedCb) {
                    this.imagesLoadedCb(null);
                }
            }
        }
        function footageLoaded1() {
            this.loadedFootagesCount += 1;
            if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
                if (this.imagesLoadedCb) {
                    this.imagesLoadedCb(null);
                }
            }
        }
        function getAssetsPath1(assetData1, assetsPath1, originalPath1) {
            var path1 = "";
            if (assetData1.e) {
                path1 = assetData1.p;
            } else if (assetsPath1) {
                var imagePath1 = assetData1.p;
                if (imagePath1.indexOf("images/") !== -1) {
                    imagePath1 = imagePath1.split("/")[1];
                }
                path1 = assetsPath1 + imagePath1;
            } else {
                path1 = originalPath1;
                path1 += assetData1.u ? assetData1.u : "";
                path1 += assetData1.p;
            }
            return path1;
        }
        function testImageLoaded1(img1) {
            var _count1 = 0;
            var intervalId1 = setInterval((function() {
                var box1 = img1.getBBox();
                if (box1.width || _count1 > 500) {
                    this._imageLoaded();
                    clearInterval(intervalId1);
                }
                _count1 += 1;
            }).bind(this), 50);
        }
        function createImageData1(assetData1) {
            var path1 = getAssetsPath1(assetData1, this.assetsPath, this.path);
            var img1 = createNS("image");
            if (isSafari) {
                this.testImageLoaded(img1);
            } else {
                img1.addEventListener("load", this._imageLoaded, false);
            }
            img1.addEventListener("error", (function() {
                ob1.img = proxyImage1;
                this._imageLoaded();
            }).bind(this), false);
            img1.setAttributeNS("http://www.w3.org/1999/xlink", "href", path1);
            if (this._elementHelper.append) {
                this._elementHelper.append(img1);
            } else {
                this._elementHelper.appendChild(img1);
            }
            var ob1 = {
                img: img1,
                assetData: assetData1
            };
            return ob1;
        }
        function createImgData1(assetData1) {
            var path1 = getAssetsPath1(assetData1, this.assetsPath, this.path);
            var img1 = createTag("img");
            img1.crossOrigin = "anonymous";
            img1.addEventListener("load", this._imageLoaded, false);
            img1.addEventListener("error", (function() {
                ob1.img = proxyImage1;
                this._imageLoaded();
            }).bind(this), false);
            img1.src = path1;
            var ob1 = {
                img: img1,
                assetData: assetData1
            };
            return ob1;
        }
        function createFootageData1(data1) {
            var ob1 = {
                assetData: data1
            };
            var path1 = getAssetsPath1(data1, this.assetsPath, this.path);
            dataManager.loadData(path1, (function(footageData1) {
                ob1.img = footageData1;
                this._footageLoaded();
            }).bind(this), (function() {
                ob1.img = {};
                this._footageLoaded();
            }).bind(this));
            return ob1;
        }
        function loadAssets1(assets1, cb1) {
            this.imagesLoadedCb = cb1;
            var i3;
            var len1 = assets1.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (!assets1[i3].layers) {
                    if (!assets1[i3].t || assets1[i3].t === "seq") {
                        this.totalImages += 1;
                        this.images.push(this._createImageData(assets1[i3]));
                    } else if (assets1[i3].t === 3) {
                        this.totalFootages += 1;
                        this.images.push(this.createFootageData(assets1[i3]));
                    }
                }
            }
        }
        function setPath1(path1) {
            this.path = path1 || "";
        }
        function setAssetsPath1(path1) {
            this.assetsPath = path1 || "";
        }
        function getAsset1(assetData1) {
            var i3 = 0;
            var len1 = this.images.length;
            while(i3 < len1){
                if (this.images[i3].assetData === assetData1) {
                    return this.images[i3].img;
                }
                i3 += 1;
            }
            return null;
        }
        function destroy1() {
            this.imagesLoadedCb = null;
            this.images.length = 0;
        }
        function loadedImages1() {
            return this.totalImages === this.loadedAssets;
        }
        function loadedFootages1() {
            return this.totalFootages === this.loadedFootagesCount;
        }
        function setCacheType1(type1, elementHelper1) {
            if (type1 === "svg") {
                this._elementHelper = elementHelper1;
                this._createImageData = this.createImageData.bind(this);
            } else {
                this._createImageData = this.createImgData.bind(this);
            }
        }
        function ImagePreloaderFactory1() {
            this._imageLoaded = imageLoaded1.bind(this);
            this._footageLoaded = footageLoaded1.bind(this);
            this.testImageLoaded = testImageLoaded1.bind(this);
            this.createFootageData = createFootageData1.bind(this);
            this.assetsPath = "";
            this.path = "";
            this.totalImages = 0;
            this.totalFootages = 0;
            this.loadedAssets = 0;
            this.loadedFootagesCount = 0;
            this.imagesLoadedCb = null;
            this.images = [];
        }
        ImagePreloaderFactory1.prototype = {
            loadAssets: loadAssets1,
            setAssetsPath: setAssetsPath1,
            setPath: setPath1,
            loadedImages: loadedImages1,
            loadedFootages: loadedFootages1,
            destroy: destroy1,
            getAsset: getAsset1,
            createImgData: createImgData1,
            createImageData: createImageData1,
            imageLoaded: imageLoaded1,
            footageLoaded: footageLoaded1,
            setCacheType: setCacheType1
        };
        return ImagePreloaderFactory1;
    }();
    function BaseEvent() {}
    BaseEvent.prototype = {
        triggerEvent: function triggerEvent1(eventName1, args1) {
            if (this._cbs[eventName1]) {
                var callbacks1 = this._cbs[eventName1];
                for(var i3 = 0; i3 < callbacks1.length; i3 += 1){
                    callbacks1[i3](args1);
                }
            }
        },
        addEventListener: function addEventListener1(eventName1, callback1) {
            if (!this._cbs[eventName1]) {
                this._cbs[eventName1] = [];
            }
            this._cbs[eventName1].push(callback1);
            return (function() {
                this.removeEventListener(eventName1, callback1);
            }).bind(this);
        },
        removeEventListener: function removeEventListener1(eventName1, callback1) {
            if (!callback1) {
                this._cbs[eventName1] = null;
            } else if (this._cbs[eventName1]) {
                var i3 = 0;
                var len1 = this._cbs[eventName1].length;
                while(i3 < len1){
                    if (this._cbs[eventName1][i3] === callback1) {
                        this._cbs[eventName1].splice(i3, 1);
                        i3 -= 1;
                        len1 -= 1;
                    }
                    i3 += 1;
                }
                if (!this._cbs[eventName1].length) {
                    this._cbs[eventName1] = null;
                }
            }
        }
    };
    var markerParser = function() {
        function parsePayloadLines1(payload1) {
            var lines1 = payload1.split("\r\n");
            var keys1 = {};
            var line1;
            var keysCount1 = 0;
            for(var i3 = 0; i3 < lines1.length; i3 += 1){
                line1 = lines1[i3].split(":");
                if (line1.length === 2) {
                    keys1[line1[0]] = line1[1].trim();
                    keysCount1 += 1;
                }
            }
            if (keysCount1 === 0) {
                throw new Error();
            }
            return keys1;
        }
        return function(_markers1) {
            var markers1 = [];
            for(var i3 = 0; i3 < _markers1.length; i3 += 1){
                var _marker1 = _markers1[i3];
                var markerData1 = {
                    time: _marker1.tm,
                    duration: _marker1.dr
                };
                try {
                    markerData1.payload = JSON.parse(_markers1[i3].cm);
                } catch (_1) {
                    try {
                        markerData1.payload = parsePayloadLines1(_markers1[i3].cm);
                    } catch (__1) {
                        markerData1.payload = {
                            name: _markers1[i3].cm
                        };
                    }
                }
                markers1.push(markerData1);
            }
            return markers1;
        };
    }();
    var ProjectInterface = function() {
        function registerComposition1(comp1) {
            this.compositions.push(comp1);
        }
        return function() {
            function _thisProjectFunction1(name1) {
                var i3 = 0;
                var len1 = this.compositions.length;
                while(i3 < len1){
                    if (this.compositions[i3].data && this.compositions[i3].data.nm === name1) {
                        if (this.compositions[i3].prepareFrame && this.compositions[i3].data.xt) {
                            this.compositions[i3].prepareFrame(this.currentFrame);
                        }
                        return this.compositions[i3].compInterface;
                    }
                    i3 += 1;
                }
                return null;
            }
            _thisProjectFunction1.compositions = [];
            _thisProjectFunction1.currentFrame = 0;
            _thisProjectFunction1.registerComposition = registerComposition1;
            return _thisProjectFunction1;
        };
    }();
    var renderers = {};
    var registerRenderer = function registerRenderer1(key1, value3) {
        renderers[key1] = value3;
    };
    function getRenderer(key1) {
        return renderers[key1];
    }
    function getRegisteredRenderer() {
        // Returns canvas by default for compatibility
        if (renderers.canvas) {
            return "canvas";
        } // Returns any renderer that is registered
        for(var key1 in renderers){
            if (renderers[key1]) {
                return key1;
            }
        }
        return "";
    }
    function _typeof$4(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$4 = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof$4 = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof$4(obj1);
    }
    var AnimationItem = function AnimationItem1() {
        this._cbs = [];
        this.name = "";
        this.path = "";
        this.isLoaded = false;
        this.currentFrame = 0;
        this.currentRawFrame = 0;
        this.firstFrame = 0;
        this.totalFrames = 0;
        this.frameRate = 0;
        this.frameMult = 0;
        this.playSpeed = 1;
        this.playDirection = 1;
        this.playCount = 0;
        this.animationData = {};
        this.assets = [];
        this.isPaused = true;
        this.autoplay = false;
        this.loop = true;
        this.renderer = null;
        this.animationID = createElementID();
        this.assetsPath = "";
        this.timeCompleted = 0;
        this.segmentPos = 0;
        this.isSubframeEnabled = getSubframeEnabled();
        this.segments = [];
        this._idle = true;
        this._completedLoop = false;
        this.projectInterface = ProjectInterface();
        this.imagePreloader = new ImagePreloader();
        this.audioController = audioControllerFactory();
        this.markers = [];
        this.configAnimation = this.configAnimation.bind(this);
        this.onSetupError = this.onSetupError.bind(this);
        this.onSegmentComplete = this.onSegmentComplete.bind(this);
        this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
        this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([
        BaseEvent
    ], AnimationItem);
    AnimationItem.prototype.setParams = function(params1) {
        if (params1.wrapper || params1.container) {
            this.wrapper = params1.wrapper || params1.container;
        }
        var animType1 = "svg";
        if (params1.animType) {
            animType1 = params1.animType;
        } else if (params1.renderer) {
            animType1 = params1.renderer;
        }
        var RendererClass1 = getRenderer(animType1);
        this.renderer = new RendererClass1(this, params1.rendererSettings);
        this.imagePreloader.setCacheType(animType1, this.renderer.globalData.defs);
        this.renderer.setProjectInterface(this.projectInterface);
        this.animType = animType1;
        if (params1.loop === "" || params1.loop === null || params1.loop === undefined || params1.loop === true) {
            this.loop = true;
        } else if (params1.loop === false) {
            this.loop = false;
        } else {
            this.loop = parseInt(params1.loop, 10);
        }
        this.autoplay = "autoplay" in params1 ? params1.autoplay : true;
        this.name = params1.name ? params1.name : "";
        this.autoloadSegments = Object.prototype.hasOwnProperty.call(params1, "autoloadSegments") ? params1.autoloadSegments : true;
        this.assetsPath = params1.assetsPath;
        this.initialSegment = params1.initialSegment;
        if (params1.audioFactory) {
            this.audioController.setAudioFactory(params1.audioFactory);
        }
        if (params1.animationData) {
            this.setupAnimation(params1.animationData);
        } else if (params1.path) {
            if (params1.path.lastIndexOf("\\") !== -1) {
                this.path = params1.path.substr(0, params1.path.lastIndexOf("\\") + 1);
            } else {
                this.path = params1.path.substr(0, params1.path.lastIndexOf("/") + 1);
            }
            this.fileName = params1.path.substr(params1.path.lastIndexOf("/") + 1);
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"));
            dataManager.loadAnimation(params1.path, this.configAnimation, this.onSetupError);
        }
    };
    AnimationItem.prototype.onSetupError = function() {
        this.trigger("data_failed");
    };
    AnimationItem.prototype.setupAnimation = function(data1) {
        dataManager.completeAnimation(data1, this.configAnimation);
    };
    AnimationItem.prototype.setData = function(wrapper1, animationData1) {
        if (animationData1) {
            if (_typeof$4(animationData1) !== "object") {
                animationData1 = JSON.parse(animationData1);
            }
        }
        var params1 = {
            wrapper: wrapper1,
            animationData: animationData1
        };
        var wrapperAttributes1 = wrapper1.attributes;
        params1.path = wrapperAttributes1.getNamedItem("data-animation-path") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-animation-path").value : wrapperAttributes1.getNamedItem("data-bm-path") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-path").value : wrapperAttributes1.getNamedItem("bm-path") ? wrapperAttributes1.getNamedItem("bm-path").value : "";
        params1.animType = wrapperAttributes1.getNamedItem("data-anim-type") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-anim-type").value : wrapperAttributes1.getNamedItem("data-bm-type") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-type").value : wrapperAttributes1.getNamedItem("bm-type") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("bm-type").value : wrapperAttributes1.getNamedItem("data-bm-renderer") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-renderer").value : wrapperAttributes1.getNamedItem("bm-renderer") ? wrapperAttributes1.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
        var loop1 = wrapperAttributes1.getNamedItem("data-anim-loop") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-anim-loop").value : wrapperAttributes1.getNamedItem("data-bm-loop") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-loop").value : wrapperAttributes1.getNamedItem("bm-loop") ? wrapperAttributes1.getNamedItem("bm-loop").value : "";
        if (loop1 === "false") {
            params1.loop = false;
        } else if (loop1 === "true") {
            params1.loop = true;
        } else if (loop1 !== "") {
            params1.loop = parseInt(loop1, 10);
        }
        var autoplay1 = wrapperAttributes1.getNamedItem("data-anim-autoplay") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-anim-autoplay").value : wrapperAttributes1.getNamedItem("data-bm-autoplay") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-autoplay").value : wrapperAttributes1.getNamedItem("bm-autoplay") ? wrapperAttributes1.getNamedItem("bm-autoplay").value : true;
        params1.autoplay = autoplay1 !== "false";
        params1.name = wrapperAttributes1.getNamedItem("data-name") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-name").value : wrapperAttributes1.getNamedItem("data-bm-name") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-name").value : wrapperAttributes1.getNamedItem("bm-name") ? wrapperAttributes1.getNamedItem("bm-name").value : "";
        var prerender1 = wrapperAttributes1.getNamedItem("data-anim-prerender") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-anim-prerender").value : wrapperAttributes1.getNamedItem("data-bm-prerender") // eslint-disable-line no-nested-ternary
         ? wrapperAttributes1.getNamedItem("data-bm-prerender").value : wrapperAttributes1.getNamedItem("bm-prerender") ? wrapperAttributes1.getNamedItem("bm-prerender").value : "";
        if (prerender1 === "false") {
            params1.prerender = false;
        }
        if (!params1.path) {
            this.trigger("destroy");
        } else {
            this.setParams(params1);
        }
    };
    AnimationItem.prototype.includeLayers = function(data1) {
        if (data1.op > this.animationData.op) {
            this.animationData.op = data1.op;
            this.totalFrames = Math.floor(data1.op - this.animationData.ip);
        }
        var layers1 = this.animationData.layers;
        var i3;
        var len1 = layers1.length;
        var newLayers1 = data1.layers;
        var j3;
        var jLen1 = newLayers1.length;
        for(j3 = 0; j3 < jLen1; j3 += 1){
            i3 = 0;
            while(i3 < len1){
                if (layers1[i3].id === newLayers1[j3].id) {
                    layers1[i3] = newLayers1[j3];
                    break;
                }
                i3 += 1;
            }
        }
        if (data1.chars || data1.fonts) {
            this.renderer.globalData.fontManager.addChars(data1.chars);
            this.renderer.globalData.fontManager.addFonts(data1.fonts, this.renderer.globalData.defs);
        }
        if (data1.assets) {
            len1 = data1.assets.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.animationData.assets.push(data1.assets[i3]);
            }
        }
        this.animationData.__complete = false;
        dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    };
    AnimationItem.prototype.onSegmentComplete = function(data1) {
        this.animationData = data1;
        var expressionsPlugin1 = getExpressionsPlugin();
        if (expressionsPlugin1) {
            expressionsPlugin1.initExpressions(this);
        }
        this.loadNextSegment();
    };
    AnimationItem.prototype.loadNextSegment = function() {
        var segments1 = this.animationData.segments;
        if (!segments1 || segments1.length === 0 || !this.autoloadSegments) {
            this.trigger("data_ready");
            this.timeCompleted = this.totalFrames;
            return;
        }
        var segment1 = segments1.shift();
        this.timeCompleted = segment1.time * this.frameRate;
        var segmentPath1 = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1;
        dataManager.loadData(segmentPath1, this.includeLayers.bind(this), (function() {
            this.trigger("data_failed");
        }).bind(this));
    };
    AnimationItem.prototype.loadSegments = function() {
        var segments1 = this.animationData.segments;
        if (!segments1) {
            this.timeCompleted = this.totalFrames;
        }
        this.loadNextSegment();
    };
    AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images");
        this.checkLoaded();
    };
    AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath);
        this.imagePreloader.setPath(this.path);
        this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    };
    AnimationItem.prototype.configAnimation = function(animData1) {
        if (!this.renderer) {
            return;
        }
        try {
            this.animationData = animData1;
            if (this.initialSegment) {
                this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
                this.firstFrame = Math.round(this.initialSegment[0]);
            } else {
                this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
                this.firstFrame = Math.round(this.animationData.ip);
            }
            this.renderer.configAnimation(animData1);
            if (!animData1.assets) {
                animData1.assets = [];
            }
            this.assets = this.animationData.assets;
            this.frameRate = this.animationData.fr;
            this.frameMult = this.animationData.fr / 1000;
            this.renderer.searchExtraCompositions(animData1.assets);
            this.markers = markerParser(animData1.markers || []);
            this.trigger("config_ready");
            this.preloadImages();
            this.loadSegments();
            this.updaFrameModifier();
            this.waitForFontsLoaded();
            if (this.isPaused) {
                this.audioController.pause();
            }
        } catch (error1) {
            this.triggerConfigError(error1);
        }
    };
    AnimationItem.prototype.waitForFontsLoaded = function() {
        if (!this.renderer) {
            return;
        }
        if (this.renderer.globalData.fontManager.isLoaded) {
            this.checkLoaded();
        } else {
            setTimeout(this.waitForFontsLoaded.bind(this), 20);
        }
    };
    AnimationItem.prototype.checkLoaded = function() {
        if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
            this.isLoaded = true;
            var expressionsPlugin1 = getExpressionsPlugin();
            if (expressionsPlugin1) {
                expressionsPlugin1.initExpressions(this);
            }
            this.renderer.initItems();
            setTimeout((function() {
                this.trigger("DOMLoaded");
            }).bind(this), 0);
            this.gotoFrame();
            if (this.autoplay) {
                this.play();
            }
        }
    };
    AnimationItem.prototype.resize = function(width1, height1) {
        // Adding this validation for backwards compatibility in case an event object was being passed down
        var _width1 = typeof width1 === "number" ? width1 : undefined;
        var _height1 = typeof height1 === "number" ? height1 : undefined;
        this.renderer.updateContainerSize(_width1, _height1);
    };
    AnimationItem.prototype.setSubframe = function(flag1) {
        this.isSubframeEnabled = !!flag1;
    };
    AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise
        if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
            this.currentFrame = this.timeCompleted;
        }
        this.trigger("enterFrame");
        this.renderFrame();
        this.trigger("drawnFrame");
    };
    AnimationItem.prototype.renderFrame = function() {
        if (this.isLoaded === false || !this.renderer) {
            return;
        }
        try {
            if (this.expressionsPlugin) {
                this.expressionsPlugin.resetFrame();
            }
            this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (error1) {
            this.triggerRenderFrameError(error1);
        }
    };
    AnimationItem.prototype.play = function(name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        if (this.isPaused === true) {
            this.isPaused = false;
            this.trigger("_play");
            this.audioController.resume();
            if (this._idle) {
                this._idle = false;
                this.trigger("_active");
            }
        }
    };
    AnimationItem.prototype.pause = function(name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        if (this.isPaused === false) {
            this.isPaused = true;
            this.trigger("_pause");
            this._idle = true;
            this.trigger("_idle");
            this.audioController.pause();
        }
    };
    AnimationItem.prototype.togglePause = function(name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        if (this.isPaused === true) {
            this.play();
        } else {
            this.pause();
        }
    };
    AnimationItem.prototype.stop = function(name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        this.pause();
        this.playCount = 0;
        this._completedLoop = false;
        this.setCurrentRawFrameValue(0);
    };
    AnimationItem.prototype.getMarkerData = function(markerName1) {
        var marker1;
        for(var i3 = 0; i3 < this.markers.length; i3 += 1){
            marker1 = this.markers[i3];
            if (marker1.payload && marker1.payload.name === markerName1) {
                return marker1;
            }
        }
        return null;
    };
    AnimationItem.prototype.goToAndStop = function(value3, isFrame1, name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        var numValue1 = Number(value3);
        if (isNaN(numValue1)) {
            var marker1 = this.getMarkerData(value3);
            if (marker1) {
                this.goToAndStop(marker1.time, true);
            }
        } else if (isFrame1) {
            this.setCurrentRawFrameValue(value3);
        } else {
            this.setCurrentRawFrameValue(value3 * this.frameModifier);
        }
        this.pause();
    };
    AnimationItem.prototype.goToAndPlay = function(value3, isFrame1, name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        var numValue1 = Number(value3);
        if (isNaN(numValue1)) {
            var marker1 = this.getMarkerData(value3);
            if (marker1) {
                if (!marker1.duration) {
                    this.goToAndStop(marker1.time, true);
                } else {
                    this.playSegments([
                        marker1.time,
                        marker1.time + marker1.duration
                    ], true);
                }
            }
        } else {
            this.goToAndStop(numValue1, isFrame1, name1);
        }
        this.play();
    };
    AnimationItem.prototype.advanceTime = function(value3) {
        if (this.isPaused === true || this.isLoaded === false) {
            return;
        }
        var nextValue1 = this.currentRawFrame + value3 * this.frameModifier;
        var _isComplete1 = false; // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
        // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.
        if (nextValue1 >= this.totalFrames - 1 && this.frameModifier > 0) {
            if (!this.loop || this.playCount === this.loop) {
                if (!this.checkSegments(nextValue1 > this.totalFrames ? nextValue1 % this.totalFrames : 0)) {
                    _isComplete1 = true;
                    nextValue1 = this.totalFrames - 1;
                }
            } else if (nextValue1 >= this.totalFrames) {
                this.playCount += 1;
                if (!this.checkSegments(nextValue1 % this.totalFrames)) {
                    this.setCurrentRawFrameValue(nextValue1 % this.totalFrames);
                    this._completedLoop = true;
                    this.trigger("loopComplete");
                }
            } else {
                this.setCurrentRawFrameValue(nextValue1);
            }
        } else if (nextValue1 < 0) {
            if (!this.checkSegments(nextValue1 % this.totalFrames)) {
                if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
                    // eslint-disable-line no-plusplus
                    this.setCurrentRawFrameValue(this.totalFrames + nextValue1 % this.totalFrames);
                    if (!this._completedLoop) {
                        this._completedLoop = true;
                    } else {
                        this.trigger("loopComplete");
                    }
                } else {
                    _isComplete1 = true;
                    nextValue1 = 0;
                }
            }
        } else {
            this.setCurrentRawFrameValue(nextValue1);
        }
        if (_isComplete1) {
            this.setCurrentRawFrameValue(nextValue1);
            this.pause();
            this.trigger("complete");
        }
    };
    AnimationItem.prototype.adjustSegment = function(arr3, offset1) {
        this.playCount = 0;
        if (arr3[1] < arr3[0]) {
            if (this.frameModifier > 0) {
                if (this.playSpeed < 0) {
                    this.setSpeed(-this.playSpeed);
                } else {
                    this.setDirection(-1);
                }
            }
            this.totalFrames = arr3[0] - arr3[1];
            this.timeCompleted = this.totalFrames;
            this.firstFrame = arr3[1];
            this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset1);
        } else if (arr3[1] > arr3[0]) {
            if (this.frameModifier < 0) {
                if (this.playSpeed < 0) {
                    this.setSpeed(-this.playSpeed);
                } else {
                    this.setDirection(1);
                }
            }
            this.totalFrames = arr3[1] - arr3[0];
            this.timeCompleted = this.totalFrames;
            this.firstFrame = arr3[0];
            this.setCurrentRawFrameValue(0.001 + offset1);
        }
        this.trigger("segmentStart");
    };
    AnimationItem.prototype.setSegment = function(init1, end3) {
        var pendingFrame1 = -1;
        if (this.isPaused) {
            if (this.currentRawFrame + this.firstFrame < init1) {
                pendingFrame1 = init1;
            } else if (this.currentRawFrame + this.firstFrame > end3) {
                pendingFrame1 = end3 - init1;
            }
        }
        this.firstFrame = init1;
        this.totalFrames = end3 - init1;
        this.timeCompleted = this.totalFrames;
        if (pendingFrame1 !== -1) {
            this.goToAndStop(pendingFrame1, true);
        }
    };
    AnimationItem.prototype.playSegments = function(arr3, forceFlag1) {
        if (forceFlag1) {
            this.segments.length = 0;
        }
        if (_typeof$4(arr3[0]) === "object") {
            var i3;
            var len1 = arr3.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.segments.push(arr3[i3]);
            }
        } else {
            this.segments.push(arr3);
        }
        if (this.segments.length && forceFlag1) {
            this.adjustSegment(this.segments.shift(), 0);
        }
        if (this.isPaused) {
            this.play();
        }
    };
    AnimationItem.prototype.resetSegments = function(forceFlag1) {
        this.segments.length = 0;
        this.segments.push([
            this.animationData.ip,
            this.animationData.op
        ]);
        if (forceFlag1) {
            this.checkSegments(0);
        }
    };
    AnimationItem.prototype.checkSegments = function(offset1) {
        if (this.segments.length) {
            this.adjustSegment(this.segments.shift(), offset1);
            return true;
        }
        return false;
    };
    AnimationItem.prototype.destroy = function(name1) {
        if (name1 && this.name !== name1 || !this.renderer) {
            return;
        }
        this.renderer.destroy();
        this.imagePreloader.destroy();
        this.trigger("destroy");
        this._cbs = null;
        this.onEnterFrame = null;
        this.onLoopComplete = null;
        this.onComplete = null;
        this.onSegmentStart = null;
        this.onDestroy = null;
        this.renderer = null;
        this.expressionsPlugin = null;
        this.imagePreloader = null;
        this.projectInterface = null;
    };
    AnimationItem.prototype.setCurrentRawFrameValue = function(value3) {
        this.currentRawFrame = value3;
        this.gotoFrame();
    };
    AnimationItem.prototype.setSpeed = function(val3) {
        this.playSpeed = val3;
        this.updaFrameModifier();
    };
    AnimationItem.prototype.setDirection = function(val3) {
        this.playDirection = val3 < 0 ? -1 : 1;
        this.updaFrameModifier();
    };
    AnimationItem.prototype.setLoop = function(isLooping1) {
        this.loop = isLooping1;
    };
    AnimationItem.prototype.setVolume = function(val3, name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        this.audioController.setVolume(val3);
    };
    AnimationItem.prototype.getVolume = function() {
        return this.audioController.getVolume();
    };
    AnimationItem.prototype.mute = function(name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        this.audioController.mute();
    };
    AnimationItem.prototype.unmute = function(name1) {
        if (name1 && this.name !== name1) {
            return;
        }
        this.audioController.unmute();
    };
    AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
        this.audioController.setRate(this.playSpeed * this.playDirection);
    };
    AnimationItem.prototype.getPath = function() {
        return this.path;
    };
    AnimationItem.prototype.getAssetsPath = function(assetData1) {
        var path1 = "";
        if (assetData1.e) {
            path1 = assetData1.p;
        } else if (this.assetsPath) {
            var imagePath1 = assetData1.p;
            if (imagePath1.indexOf("images/") !== -1) {
                imagePath1 = imagePath1.split("/")[1];
            }
            path1 = this.assetsPath + imagePath1;
        } else {
            path1 = this.path;
            path1 += assetData1.u ? assetData1.u : "";
            path1 += assetData1.p;
        }
        return path1;
    };
    AnimationItem.prototype.getAssetData = function(id1) {
        var i3 = 0;
        var len1 = this.assets.length;
        while(i3 < len1){
            if (id1 === this.assets[i3].id) {
                return this.assets[i3];
            }
            i3 += 1;
        }
        return null;
    };
    AnimationItem.prototype.hide = function() {
        this.renderer.hide();
    };
    AnimationItem.prototype.show = function() {
        this.renderer.show();
    };
    AnimationItem.prototype.getDuration = function(isFrame1) {
        return isFrame1 ? this.totalFrames : this.totalFrames / this.frameRate;
    };
    AnimationItem.prototype.updateDocumentData = function(path1, documentData1, index1) {
        try {
            var element1 = this.renderer.getElementByPath(path1);
            element1.updateDocumentData(documentData1, index1);
        } catch (error1) {}
    };
    AnimationItem.prototype.trigger = function(name1) {
        if (this._cbs && this._cbs[name1]) {
            switch(name1){
                case "enterFrame":
                    this.triggerEvent(name1, new BMEnterFrameEvent(name1, this.currentFrame, this.totalFrames, this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame;
                    this.drawnFrameEvent.totalTime = this.totalFrames;
                    this.drawnFrameEvent.direction = this.frameModifier;
                    this.triggerEvent(name1, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(name1, new BMCompleteLoopEvent(name1, this.loop, this.playCount, this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(name1, new BMCompleteEvent(name1, this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(name1, new BMSegmentStartEvent(name1, this.firstFrame, this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(name1, new BMDestroyEvent(name1, this));
                    break;
                default:
                    this.triggerEvent(name1);
            }
        }
        if (name1 === "enterFrame" && this.onEnterFrame) {
            this.onEnterFrame.call(this, new BMEnterFrameEvent(name1, this.currentFrame, this.totalFrames, this.frameMult));
        }
        if (name1 === "loopComplete" && this.onLoopComplete) {
            this.onLoopComplete.call(this, new BMCompleteLoopEvent(name1, this.loop, this.playCount, this.frameMult));
        }
        if (name1 === "complete" && this.onComplete) {
            this.onComplete.call(this, new BMCompleteEvent(name1, this.frameMult));
        }
        if (name1 === "segmentStart" && this.onSegmentStart) {
            this.onSegmentStart.call(this, new BMSegmentStartEvent(name1, this.firstFrame, this.totalFrames));
        }
        if (name1 === "destroy" && this.onDestroy) {
            this.onDestroy.call(this, new BMDestroyEvent(name1, this));
        }
    };
    AnimationItem.prototype.triggerRenderFrameError = function(nativeError1) {
        var error1 = new BMRenderFrameErrorEvent(nativeError1, this.currentFrame);
        this.triggerEvent("error", error1);
        if (this.onError) {
            this.onError.call(this, error1);
        }
    };
    AnimationItem.prototype.triggerConfigError = function(nativeError1) {
        var error1 = new BMConfigErrorEvent(nativeError1, this.currentFrame);
        this.triggerEvent("error", error1);
        if (this.onError) {
            this.onError.call(this, error1);
        }
    };
    var animationManager = function() {
        var moduleOb1 = {};
        var registeredAnimations1 = [];
        var initTime1 = 0;
        var len1 = 0;
        var playingAnimationsNum1 = 0;
        var _stopped1 = true;
        var _isFrozen1 = false;
        function removeElement1(ev1) {
            var i3 = 0;
            var animItem1 = ev1.target;
            while(i3 < len1){
                if (registeredAnimations1[i3].animation === animItem1) {
                    registeredAnimations1.splice(i3, 1);
                    i3 -= 1;
                    len1 -= 1;
                    if (!animItem1.isPaused) {
                        subtractPlayingCount1();
                    }
                }
                i3 += 1;
            }
        }
        function registerAnimation1(element1, animationData1) {
            if (!element1) {
                return null;
            }
            var i3 = 0;
            while(i3 < len1){
                if (registeredAnimations1[i3].elem === element1 && registeredAnimations1[i3].elem !== null) {
                    return registeredAnimations1[i3].animation;
                }
                i3 += 1;
            }
            var animItem1 = new AnimationItem();
            setupAnimation1(animItem1, element1);
            animItem1.setData(element1, animationData1);
            return animItem1;
        }
        function getRegisteredAnimations1() {
            var i3;
            var lenAnims1 = registeredAnimations1.length;
            var animations1 = [];
            for(i3 = 0; i3 < lenAnims1; i3 += 1){
                animations1.push(registeredAnimations1[i3].animation);
            }
            return animations1;
        }
        function addPlayingCount1() {
            playingAnimationsNum1 += 1;
            activate1();
        }
        function subtractPlayingCount1() {
            playingAnimationsNum1 -= 1;
        }
        function setupAnimation1(animItem1, element1) {
            animItem1.addEventListener("destroy", removeElement1);
            animItem1.addEventListener("_active", addPlayingCount1);
            animItem1.addEventListener("_idle", subtractPlayingCount1);
            registeredAnimations1.push({
                elem: element1,
                animation: animItem1
            });
            len1 += 1;
        }
        function loadAnimation1(params1) {
            var animItem1 = new AnimationItem();
            setupAnimation1(animItem1, null);
            animItem1.setParams(params1);
            return animItem1;
        }
        function setSpeed1(val3, animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.setSpeed(val3, animation1);
            }
        }
        function setDirection1(val3, animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.setDirection(val3, animation1);
            }
        }
        function play1(animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.play(animation1);
            }
        }
        function resume1(nowTime1) {
            var elapsedTime1 = nowTime1 - initTime1;
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.advanceTime(elapsedTime1);
            }
            initTime1 = nowTime1;
            if (playingAnimationsNum1 && !_isFrozen1) {
                window.requestAnimationFrame(resume1);
            } else {
                _stopped1 = true;
            }
        }
        function first1(nowTime1) {
            initTime1 = nowTime1;
            window.requestAnimationFrame(resume1);
        }
        function pause1(animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.pause(animation1);
            }
        }
        function goToAndStop1(value3, isFrame1, animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.goToAndStop(value3, isFrame1, animation1);
            }
        }
        function stop1(animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.stop(animation1);
            }
        }
        function togglePause1(animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.togglePause(animation1);
            }
        }
        function destroy1(animation1) {
            var i3;
            for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                registeredAnimations1[i3].animation.destroy(animation1);
            }
        }
        function searchAnimations1(animationData1, standalone1, renderer1) {
            var animElements1 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin")));
            var i3;
            var lenAnims1 = animElements1.length;
            for(i3 = 0; i3 < lenAnims1; i3 += 1){
                if (renderer1) {
                    animElements1[i3].setAttribute("data-bm-type", renderer1);
                }
                registerAnimation1(animElements1[i3], animationData1);
            }
            if (standalone1 && lenAnims1 === 0) {
                if (!renderer1) {
                    renderer1 = "svg";
                }
                var body1 = document.getElementsByTagName("body")[0];
                body1.innerText = "";
                var div1 = createTag("div");
                div1.style.width = "100%";
                div1.style.height = "100%";
                div1.setAttribute("data-bm-type", renderer1);
                body1.appendChild(div1);
                registerAnimation1(div1, animationData1);
            }
        }
        function resize1() {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.resize();
            }
        }
        function activate1() {
            if (!_isFrozen1 && playingAnimationsNum1) {
                if (_stopped1) {
                    window.requestAnimationFrame(first1);
                    _stopped1 = false;
                }
            }
        }
        function freeze1() {
            _isFrozen1 = true;
        }
        function unfreeze1() {
            _isFrozen1 = false;
            activate1();
        }
        function setVolume1(val3, animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.setVolume(val3, animation1);
            }
        }
        function mute1(animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.mute(animation1);
            }
        }
        function unmute1(animation1) {
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                registeredAnimations1[i3].animation.unmute(animation1);
            }
        }
        moduleOb1.registerAnimation = registerAnimation1;
        moduleOb1.loadAnimation = loadAnimation1;
        moduleOb1.setSpeed = setSpeed1;
        moduleOb1.setDirection = setDirection1;
        moduleOb1.play = play1;
        moduleOb1.pause = pause1;
        moduleOb1.stop = stop1;
        moduleOb1.togglePause = togglePause1;
        moduleOb1.searchAnimations = searchAnimations1;
        moduleOb1.resize = resize1; // moduleOb.start = start;
        moduleOb1.goToAndStop = goToAndStop1;
        moduleOb1.destroy = destroy1;
        moduleOb1.freeze = freeze1;
        moduleOb1.unfreeze = unfreeze1;
        moduleOb1.setVolume = setVolume1;
        moduleOb1.mute = mute1;
        moduleOb1.unmute = unmute1;
        moduleOb1.getRegisteredAnimations = getRegisteredAnimations1;
        return moduleOb1;
    }();
    /* eslint-disable */ var BezierFactory = function() {
        /**
       * BezierEasing - use bezier curve for transition easing function
       * by Gaëtan Renaudeau 2014 - 2015 – MIT License
       *
       * Credits: is based on Firefox's nsSMILKeySpline.cpp
       * Usage:
       * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
       * spline.get(x) => returns the easing value | x must be in [0, 1] range
       *
       */ var ob1 = {};
        ob1.getBezierEasing = getBezierEasing1;
        var beziers1 = {};
        function getBezierEasing1(a3, b3, c4, d3, nm1) {
            var str1 = nm1 || ("bez_" + a3 + "_" + b3 + "_" + c4 + "_" + d3).replace(/\./g, "p");
            if (beziers1[str1]) {
                return beziers1[str1];
            }
            var bezEasing1 = new BezierEasing1([
                a3,
                b3,
                c4,
                d3
            ]);
            beziers1[str1] = bezEasing1;
            return bezEasing1;
        } // These values are established by empiricism with tests (tradeoff: performance VS precision)
        var NEWTON_ITERATIONS1 = 4;
        var NEWTON_MIN_SLOPE1 = 0.001;
        var SUBDIVISION_PRECISION1 = 0.0000001;
        var SUBDIVISION_MAX_ITERATIONS1 = 10;
        var kSplineTableSize1 = 11;
        var kSampleStepSize1 = 1.0 / (kSplineTableSize1 - 1.0);
        var float32ArraySupported1 = typeof Float32Array === "function";
        function A1(aA11, aA21) {
            return 1.0 - 3.0 * aA21 + 3.0 * aA11;
        }
        function B1(aA11, aA21) {
            return 3.0 * aA21 - 6.0 * aA11;
        }
        function C1(aA11) {
            return 3.0 * aA11;
        } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
        function calcBezier1(aT1, aA11, aA21) {
            return ((A1(aA11, aA21) * aT1 + B1(aA11, aA21)) * aT1 + C1(aA11)) * aT1;
        } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
        function getSlope1(aT1, aA11, aA21) {
            return 3.0 * A1(aA11, aA21) * aT1 * aT1 + 2.0 * B1(aA11, aA21) * aT1 + C1(aA11);
        }
        function binarySubdivide1(aX1, aA3, aB1, mX11, mX21) {
            var currentX1, currentT1, i3 = 0;
            do {
                currentT1 = aA3 + (aB1 - aA3) / 2.0;
                currentX1 = calcBezier1(currentT1, mX11, mX21) - aX1;
                if (currentX1 > 0.0) {
                    aB1 = currentT1;
                } else {
                    aA3 = currentT1;
                }
            }while (Math.abs(currentX1) > SUBDIVISION_PRECISION1 && ++i3 < SUBDIVISION_MAX_ITERATIONS1);
            return currentT1;
        }
        function newtonRaphsonIterate1(aX1, aGuessT1, mX11, mX21) {
            for(var i3 = 0; i3 < NEWTON_ITERATIONS1; ++i3){
                var currentSlope1 = getSlope1(aGuessT1, mX11, mX21);
                if (currentSlope1 === 0.0) return aGuessT1;
                var currentX1 = calcBezier1(aGuessT1, mX11, mX21) - aX1;
                aGuessT1 -= currentX1 / currentSlope1;
            }
            return aGuessT1;
        }
        /**
       * points is an array of [ mX1, mY1, mX2, mY2 ]
       */ function BezierEasing1(points1) {
            this._p = points1;
            this._mSampleValues = float32ArraySupported1 ? new Float32Array(kSplineTableSize1) : new Array(kSplineTableSize1);
            this._precomputed = false;
            this.get = this.get.bind(this);
        }
        BezierEasing1.prototype = {
            get: function get1(x4) {
                var mX11 = this._p[0], mY11 = this._p[1], mX21 = this._p[2], mY21 = this._p[3];
                if (!this._precomputed) this._precompute();
                if (mX11 === mY11 && mX21 === mY21) return x4; // linear
                // Because JavaScript number are imprecise, we should guarantee the extremes are right.
                if (x4 === 0) return 0;
                if (x4 === 1) return 1;
                return calcBezier1(this._getTForX(x4), mY11, mY21);
            },
            // Private part
            _precompute: function _precompute1() {
                var mX11 = this._p[0], mY11 = this._p[1], mX21 = this._p[2], mY21 = this._p[3];
                this._precomputed = true;
                if (mX11 !== mY11 || mX21 !== mY21) {
                    this._calcSampleValues();
                }
            },
            _calcSampleValues: function _calcSampleValues1() {
                var mX11 = this._p[0], mX21 = this._p[2];
                for(var i3 = 0; i3 < kSplineTableSize1; ++i3){
                    this._mSampleValues[i3] = calcBezier1(i3 * kSampleStepSize1, mX11, mX21);
                }
            },
            /**
           * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
           */ _getTForX: function _getTForX1(aX1) {
                var mX11 = this._p[0], mX21 = this._p[2], mSampleValues1 = this._mSampleValues;
                var intervalStart1 = 0.0;
                var currentSample1 = 1;
                var lastSample1 = kSplineTableSize1 - 1;
                for(; currentSample1 !== lastSample1 && mSampleValues1[currentSample1] <= aX1; ++currentSample1){
                    intervalStart1 += kSampleStepSize1;
                }
                --currentSample1; // Interpolate to provide an initial guess for t
                var dist4 = (aX1 - mSampleValues1[currentSample1]) / (mSampleValues1[currentSample1 + 1] - mSampleValues1[currentSample1]);
                var guessForT1 = intervalStart1 + dist4 * kSampleStepSize1;
                var initialSlope1 = getSlope1(guessForT1, mX11, mX21);
                if (initialSlope1 >= NEWTON_MIN_SLOPE1) {
                    return newtonRaphsonIterate1(aX1, guessForT1, mX11, mX21);
                }
                if (initialSlope1 === 0.0) {
                    return guessForT1;
                }
                return binarySubdivide1(aX1, intervalStart1, intervalStart1 + kSampleStepSize1, mX11, mX21);
            }
        };
        return ob1;
    }();
    var pooling = function() {
        function _double1(arr3) {
            return arr3.concat(createSizedArray(arr3.length));
        }
        return {
            "double": _double1
        };
    }();
    var poolFactory = function() {
        return function(initialLength1, _create1, _release1) {
            var _length1 = 0;
            var _maxLength1 = initialLength1;
            var pool1 = createSizedArray(_maxLength1);
            var ob1 = {
                newElement: newElement1,
                release: release1
            };
            function newElement1() {
                var element1;
                if (_length1) {
                    _length1 -= 1;
                    element1 = pool1[_length1];
                } else {
                    element1 = _create1();
                }
                return element1;
            }
            function release1(element1) {
                if (_length1 === _maxLength1) {
                    pool1 = pooling["double"](pool1);
                    _maxLength1 *= 2;
                }
                if (_release1) {
                    _release1(element1);
                }
                pool1[_length1] = element1;
                _length1 += 1;
            }
            return ob1;
        };
    }();
    var bezierLengthPool = function() {
        function create1() {
            return {
                addedLength: 0,
                percents: createTypedArray("float32", getDefaultCurveSegments()),
                lengths: createTypedArray("float32", getDefaultCurveSegments())
            };
        }
        return poolFactory(8, create1);
    }();
    var segmentsLengthPool = function() {
        function create1() {
            return {
                lengths: [],
                totalLength: 0
            };
        }
        function release1(element1) {
            var i3;
            var len1 = element1.lengths.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                bezierLengthPool.release(element1.lengths[i3]);
            }
            element1.lengths.length = 0;
        }
        return poolFactory(8, create1, release1);
    }();
    function bezFunction() {
        var math1 = Math;
        function pointOnLine2D1(x11, y11, x21, y21, x31, y31) {
            var det11 = x11 * y21 + y11 * x31 + x21 * y31 - x31 * y21 - y31 * x11 - x21 * y11;
            return det11 > -0.001 && det11 < 0.001;
        }
        function pointOnLine3D1(x11, y11, z11, x21, y21, z21, x31, y31, z31) {
            if (z11 === 0 && z21 === 0 && z31 === 0) {
                return pointOnLine2D1(x11, y11, x21, y21, x31, y31);
            }
            var dist11 = math1.sqrt(math1.pow(x21 - x11, 2) + math1.pow(y21 - y11, 2) + math1.pow(z21 - z11, 2));
            var dist21 = math1.sqrt(math1.pow(x31 - x11, 2) + math1.pow(y31 - y11, 2) + math1.pow(z31 - z11, 2));
            var dist31 = math1.sqrt(math1.pow(x31 - x21, 2) + math1.pow(y31 - y21, 2) + math1.pow(z31 - z21, 2));
            var diffDist1;
            if (dist11 > dist21) {
                if (dist11 > dist31) {
                    diffDist1 = dist11 - dist21 - dist31;
                } else {
                    diffDist1 = dist31 - dist21 - dist11;
                }
            } else if (dist31 > dist21) {
                diffDist1 = dist31 - dist21 - dist11;
            } else {
                diffDist1 = dist21 - dist11 - dist31;
            }
            return diffDist1 > -0.0001 && diffDist1 < 0.0001;
        }
        var getBezierLength1 = function() {
            return function(pt11, pt21, pt31, pt41) {
                var curveSegments1 = getDefaultCurveSegments();
                var k3;
                var i3;
                var len1;
                var ptCoord1;
                var perc1;
                var addedLength1 = 0;
                var ptDistance1;
                var point1 = [];
                var lastPoint1 = [];
                var lengthData1 = bezierLengthPool.newElement();
                len1 = pt31.length;
                for(k3 = 0; k3 < curveSegments1; k3 += 1){
                    perc1 = k3 / (curveSegments1 - 1);
                    ptDistance1 = 0;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        ptCoord1 = bmPow(1 - perc1, 3) * pt11[i3] + 3 * bmPow(1 - perc1, 2) * perc1 * pt31[i3] + 3 * (1 - perc1) * bmPow(perc1, 2) * pt41[i3] + bmPow(perc1, 3) * pt21[i3];
                        point1[i3] = ptCoord1;
                        if (lastPoint1[i3] !== null) {
                            ptDistance1 += bmPow(point1[i3] - lastPoint1[i3], 2);
                        }
                        lastPoint1[i3] = point1[i3];
                    }
                    if (ptDistance1) {
                        ptDistance1 = bmSqrt(ptDistance1);
                        addedLength1 += ptDistance1;
                    }
                    lengthData1.percents[k3] = perc1;
                    lengthData1.lengths[k3] = addedLength1;
                }
                lengthData1.addedLength = addedLength1;
                return lengthData1;
            };
        }();
        function getSegmentsLength1(shapeData1) {
            var segmentsLength1 = segmentsLengthPool.newElement();
            var closed1 = shapeData1.c;
            var pathV1 = shapeData1.v;
            var pathO1 = shapeData1.o;
            var pathI1 = shapeData1.i;
            var i3;
            var len1 = shapeData1._length;
            var lengths1 = segmentsLength1.lengths;
            var totalLength1 = 0;
            for(i3 = 0; i3 < len1 - 1; i3 += 1){
                lengths1[i3] = getBezierLength1(pathV1[i3], pathV1[i3 + 1], pathO1[i3], pathI1[i3 + 1]);
                totalLength1 += lengths1[i3].addedLength;
            }
            if (closed1 && len1) {
                lengths1[i3] = getBezierLength1(pathV1[i3], pathV1[0], pathO1[i3], pathI1[0]);
                totalLength1 += lengths1[i3].addedLength;
            }
            segmentsLength1.totalLength = totalLength1;
            return segmentsLength1;
        }
        function BezierData1(length1) {
            this.segmentLength = 0;
            this.points = new Array(length1);
        }
        function PointData1(partial1, point1) {
            this.partialLength = partial1;
            this.point = point1;
        }
        var buildBezierData1 = function() {
            var storedData1 = {};
            return function(pt11, pt21, pt31, pt41) {
                var bezierName1 = (pt11[0] + "_" + pt11[1] + "_" + pt21[0] + "_" + pt21[1] + "_" + pt31[0] + "_" + pt31[1] + "_" + pt41[0] + "_" + pt41[1]).replace(/\./g, "p");
                if (!storedData1[bezierName1]) {
                    var curveSegments1 = getDefaultCurveSegments();
                    var k3;
                    var i3;
                    var len1;
                    var ptCoord1;
                    var perc1;
                    var addedLength1 = 0;
                    var ptDistance1;
                    var point1;
                    var lastPoint1 = null;
                    if (pt11.length === 2 && (pt11[0] !== pt21[0] || pt11[1] !== pt21[1]) && pointOnLine2D1(pt11[0], pt11[1], pt21[0], pt21[1], pt11[0] + pt31[0], pt11[1] + pt31[1]) && pointOnLine2D1(pt11[0], pt11[1], pt21[0], pt21[1], pt21[0] + pt41[0], pt21[1] + pt41[1])) {
                        curveSegments1 = 2;
                    }
                    var bezierData1 = new BezierData1(curveSegments1);
                    len1 = pt31.length;
                    for(k3 = 0; k3 < curveSegments1; k3 += 1){
                        point1 = createSizedArray(len1);
                        perc1 = k3 / (curveSegments1 - 1);
                        ptDistance1 = 0;
                        for(i3 = 0; i3 < len1; i3 += 1){
                            ptCoord1 = bmPow(1 - perc1, 3) * pt11[i3] + 3 * bmPow(1 - perc1, 2) * perc1 * (pt11[i3] + pt31[i3]) + 3 * (1 - perc1) * bmPow(perc1, 2) * (pt21[i3] + pt41[i3]) + bmPow(perc1, 3) * pt21[i3];
                            point1[i3] = ptCoord1;
                            if (lastPoint1 !== null) {
                                ptDistance1 += bmPow(point1[i3] - lastPoint1[i3], 2);
                            }
                        }
                        ptDistance1 = bmSqrt(ptDistance1);
                        addedLength1 += ptDistance1;
                        bezierData1.points[k3] = new PointData1(ptDistance1, point1);
                        lastPoint1 = point1;
                    }
                    bezierData1.segmentLength = addedLength1;
                    storedData1[bezierName1] = bezierData1;
                }
                return storedData1[bezierName1];
            };
        }();
        function getDistancePerc1(perc1, bezierData1) {
            var percents1 = bezierData1.percents;
            var lengths1 = bezierData1.lengths;
            var len1 = percents1.length;
            var initPos1 = bmFloor((len1 - 1) * perc1);
            var lengthPos1 = perc1 * bezierData1.addedLength;
            var lPerc1 = 0;
            if (initPos1 === len1 - 1 || initPos1 === 0 || lengthPos1 === lengths1[initPos1]) {
                return percents1[initPos1];
            }
            var dir1 = lengths1[initPos1] > lengthPos1 ? -1 : 1;
            var flag1 = true;
            while(flag1){
                if (lengths1[initPos1] <= lengthPos1 && lengths1[initPos1 + 1] > lengthPos1) {
                    lPerc1 = (lengthPos1 - lengths1[initPos1]) / (lengths1[initPos1 + 1] - lengths1[initPos1]);
                    flag1 = false;
                } else {
                    initPos1 += dir1;
                }
                if (initPos1 < 0 || initPos1 >= len1 - 1) {
                    // FIX for TypedArrays that don't store floating point values with enough accuracy
                    if (initPos1 === len1 - 1) {
                        return percents1[initPos1];
                    }
                    flag1 = false;
                }
            }
            return percents1[initPos1] + (percents1[initPos1 + 1] - percents1[initPos1]) * lPerc1;
        }
        function getPointInSegment1(pt11, pt21, pt31, pt41, percent1, bezierData1) {
            var t11 = getDistancePerc1(percent1, bezierData1);
            var u11 = 1 - t11;
            var ptX1 = math1.round((u11 * u11 * u11 * pt11[0] + (t11 * u11 * u11 + u11 * t11 * u11 + u11 * u11 * t11) * pt31[0] + (t11 * t11 * u11 + u11 * t11 * t11 + t11 * u11 * t11) * pt41[0] + t11 * t11 * t11 * pt21[0]) * 1000) / 1000;
            var ptY1 = math1.round((u11 * u11 * u11 * pt11[1] + (t11 * u11 * u11 + u11 * t11 * u11 + u11 * u11 * t11) * pt31[1] + (t11 * t11 * u11 + u11 * t11 * t11 + t11 * u11 * t11) * pt41[1] + t11 * t11 * t11 * pt21[1]) * 1000) / 1000;
            return [
                ptX1,
                ptY1
            ];
        }
        var bezierSegmentPoints1 = createTypedArray("float32", 8);
        function getNewSegment1(pt11, pt21, pt31, pt41, startPerc1, endPerc1, bezierData1) {
            if (startPerc1 < 0) {
                startPerc1 = 0;
            } else if (startPerc1 > 1) {
                startPerc1 = 1;
            }
            var t01 = getDistancePerc1(startPerc1, bezierData1);
            endPerc1 = endPerc1 > 1 ? 1 : endPerc1;
            var t11 = getDistancePerc1(endPerc1, bezierData1);
            var i3;
            var len1 = pt11.length;
            var u01 = 1 - t01;
            var u11 = 1 - t11;
            var u0u0u01 = u01 * u01 * u01;
            var t0u0u0_31 = t01 * u01 * u01 * 3; // eslint-disable-line camelcase
            var t0t0u0_31 = t01 * t01 * u01 * 3; // eslint-disable-line camelcase
            var t0t0t01 = t01 * t01 * t01; //
            var u0u0u11 = u01 * u01 * u11;
            var t0u0u1_31 = t01 * u01 * u11 + u01 * t01 * u11 + u01 * u01 * t11; // eslint-disable-line camelcase
            var t0t0u1_31 = t01 * t01 * u11 + u01 * t01 * t11 + t01 * u01 * t11; // eslint-disable-line camelcase
            var t0t0t11 = t01 * t01 * t11; //
            var u0u1u11 = u01 * u11 * u11;
            var t0u1u1_31 = t01 * u11 * u11 + u01 * t11 * u11 + u01 * u11 * t11; // eslint-disable-line camelcase
            var t0t1u1_31 = t01 * t11 * u11 + u01 * t11 * t11 + t01 * u11 * t11; // eslint-disable-line camelcase
            var t0t1t11 = t01 * t11 * t11; //
            var u1u1u11 = u11 * u11 * u11;
            var t1u1u1_31 = t11 * u11 * u11 + u11 * t11 * u11 + u11 * u11 * t11; // eslint-disable-line camelcase
            var t1t1u1_31 = t11 * t11 * u11 + u11 * t11 * t11 + t11 * u11 * t11; // eslint-disable-line camelcase
            var t1t1t11 = t11 * t11 * t11;
            for(i3 = 0; i3 < len1; i3 += 1){
                bezierSegmentPoints1[i3 * 4] = math1.round((u0u0u01 * pt11[i3] + t0u0u0_31 * pt31[i3] + t0t0u0_31 * pt41[i3] + t0t0t01 * pt21[i3]) * 1000) / 1000; // eslint-disable-line camelcase
                bezierSegmentPoints1[i3 * 4 + 1] = math1.round((u0u0u11 * pt11[i3] + t0u0u1_31 * pt31[i3] + t0t0u1_31 * pt41[i3] + t0t0t11 * pt21[i3]) * 1000) / 1000; // eslint-disable-line camelcase
                bezierSegmentPoints1[i3 * 4 + 2] = math1.round((u0u1u11 * pt11[i3] + t0u1u1_31 * pt31[i3] + t0t1u1_31 * pt41[i3] + t0t1t11 * pt21[i3]) * 1000) / 1000; // eslint-disable-line camelcase
                bezierSegmentPoints1[i3 * 4 + 3] = math1.round((u1u1u11 * pt11[i3] + t1u1u1_31 * pt31[i3] + t1t1u1_31 * pt41[i3] + t1t1t11 * pt21[i3]) * 1000) / 1000; // eslint-disable-line camelcase
            }
            return bezierSegmentPoints1;
        }
        return {
            getSegmentsLength: getSegmentsLength1,
            getNewSegment: getNewSegment1,
            getPointInSegment: getPointInSegment1,
            buildBezierData: buildBezierData1,
            pointOnLine2D: pointOnLine2D1,
            pointOnLine3D: pointOnLine3D1
        };
    }
    var bez = bezFunction();
    var initFrame = initialDefaultFrame;
    var mathAbs = Math.abs;
    function interpolateValue(frameNum1, caching1) {
        var offsetTime1 = this.offsetTime;
        var newValue1;
        if (this.propType === "multidimensional") {
            newValue1 = createTypedArray("float32", this.pv.length);
        }
        var iterationIndex1 = caching1.lastIndex;
        var i3 = iterationIndex1;
        var len1 = this.keyframes.length - 1;
        var flag1 = true;
        var keyData1;
        var nextKeyData1;
        var keyframeMetadata1;
        while(flag1){
            keyData1 = this.keyframes[i3];
            nextKeyData1 = this.keyframes[i3 + 1];
            if (i3 === len1 - 1 && frameNum1 >= nextKeyData1.t - offsetTime1) {
                if (keyData1.h) {
                    keyData1 = nextKeyData1;
                }
                iterationIndex1 = 0;
                break;
            }
            if (nextKeyData1.t - offsetTime1 > frameNum1) {
                iterationIndex1 = i3;
                break;
            }
            if (i3 < len1 - 1) {
                i3 += 1;
            } else {
                iterationIndex1 = 0;
                flag1 = false;
            }
        }
        keyframeMetadata1 = this.keyframesMetadata[i3] || {};
        var k3;
        var kLen1;
        var perc1;
        var jLen1;
        var j3;
        var fnc1;
        var nextKeyTime1 = nextKeyData1.t - offsetTime1;
        var keyTime1 = keyData1.t - offsetTime1;
        var endValue1;
        if (keyData1.to) {
            if (!keyframeMetadata1.bezierData) {
                keyframeMetadata1.bezierData = bez.buildBezierData(keyData1.s, nextKeyData1.s || keyData1.e, keyData1.to, keyData1.ti);
            }
            var bezierData1 = keyframeMetadata1.bezierData;
            if (frameNum1 >= nextKeyTime1 || frameNum1 < keyTime1) {
                var ind1 = frameNum1 >= nextKeyTime1 ? bezierData1.points.length - 1 : 0;
                kLen1 = bezierData1.points[ind1].point.length;
                for(k3 = 0; k3 < kLen1; k3 += 1){
                    newValue1[k3] = bezierData1.points[ind1].point[k3];
                } // caching._lastKeyframeIndex = -1;
            } else {
                if (keyframeMetadata1.__fnct) {
                    fnc1 = keyframeMetadata1.__fnct;
                } else {
                    fnc1 = BezierFactory.getBezierEasing(keyData1.o.x, keyData1.o.y, keyData1.i.x, keyData1.i.y, keyData1.n).get;
                    keyframeMetadata1.__fnct = fnc1;
                }
                perc1 = fnc1((frameNum1 - keyTime1) / (nextKeyTime1 - keyTime1));
                var distanceInLine1 = bezierData1.segmentLength * perc1;
                var segmentPerc1;
                var addedLength1 = caching1.lastFrame < frameNum1 && caching1._lastKeyframeIndex === i3 ? caching1._lastAddedLength : 0;
                j3 = caching1.lastFrame < frameNum1 && caching1._lastKeyframeIndex === i3 ? caching1._lastPoint : 0;
                flag1 = true;
                jLen1 = bezierData1.points.length;
                while(flag1){
                    addedLength1 += bezierData1.points[j3].partialLength;
                    if (distanceInLine1 === 0 || perc1 === 0 || j3 === bezierData1.points.length - 1) {
                        kLen1 = bezierData1.points[j3].point.length;
                        for(k3 = 0; k3 < kLen1; k3 += 1){
                            newValue1[k3] = bezierData1.points[j3].point[k3];
                        }
                        break;
                    } else if (distanceInLine1 >= addedLength1 && distanceInLine1 < addedLength1 + bezierData1.points[j3 + 1].partialLength) {
                        segmentPerc1 = (distanceInLine1 - addedLength1) / bezierData1.points[j3 + 1].partialLength;
                        kLen1 = bezierData1.points[j3].point.length;
                        for(k3 = 0; k3 < kLen1; k3 += 1){
                            newValue1[k3] = bezierData1.points[j3].point[k3] + (bezierData1.points[j3 + 1].point[k3] - bezierData1.points[j3].point[k3]) * segmentPerc1;
                        }
                        break;
                    }
                    if (j3 < jLen1 - 1) {
                        j3 += 1;
                    } else {
                        flag1 = false;
                    }
                }
                caching1._lastPoint = j3;
                caching1._lastAddedLength = addedLength1 - bezierData1.points[j3].partialLength;
                caching1._lastKeyframeIndex = i3;
            }
        } else {
            var outX1;
            var outY1;
            var inX1;
            var inY1;
            var keyValue1;
            len1 = keyData1.s.length;
            endValue1 = nextKeyData1.s || keyData1.e;
            if (this.sh && keyData1.h !== 1) {
                if (frameNum1 >= nextKeyTime1) {
                    newValue1[0] = endValue1[0];
                    newValue1[1] = endValue1[1];
                    newValue1[2] = endValue1[2];
                } else if (frameNum1 <= keyTime1) {
                    newValue1[0] = keyData1.s[0];
                    newValue1[1] = keyData1.s[1];
                    newValue1[2] = keyData1.s[2];
                } else {
                    var quatStart1 = createQuaternion(keyData1.s);
                    var quatEnd1 = createQuaternion(endValue1);
                    var time1 = (frameNum1 - keyTime1) / (nextKeyTime1 - keyTime1);
                    quaternionToEuler(newValue1, slerp(quatStart1, quatEnd1, time1));
                }
            } else {
                for(i3 = 0; i3 < len1; i3 += 1){
                    if (keyData1.h !== 1) {
                        if (frameNum1 >= nextKeyTime1) {
                            perc1 = 1;
                        } else if (frameNum1 < keyTime1) {
                            perc1 = 0;
                        } else {
                            if (keyData1.o.x.constructor === Array) {
                                if (!keyframeMetadata1.__fnct) {
                                    keyframeMetadata1.__fnct = [];
                                }
                                if (!keyframeMetadata1.__fnct[i3]) {
                                    outX1 = keyData1.o.x[i3] === undefined ? keyData1.o.x[0] : keyData1.o.x[i3];
                                    outY1 = keyData1.o.y[i3] === undefined ? keyData1.o.y[0] : keyData1.o.y[i3];
                                    inX1 = keyData1.i.x[i3] === undefined ? keyData1.i.x[0] : keyData1.i.x[i3];
                                    inY1 = keyData1.i.y[i3] === undefined ? keyData1.i.y[0] : keyData1.i.y[i3];
                                    fnc1 = BezierFactory.getBezierEasing(outX1, outY1, inX1, inY1).get;
                                    keyframeMetadata1.__fnct[i3] = fnc1;
                                } else {
                                    fnc1 = keyframeMetadata1.__fnct[i3];
                                }
                            } else if (!keyframeMetadata1.__fnct) {
                                outX1 = keyData1.o.x;
                                outY1 = keyData1.o.y;
                                inX1 = keyData1.i.x;
                                inY1 = keyData1.i.y;
                                fnc1 = BezierFactory.getBezierEasing(outX1, outY1, inX1, inY1).get;
                                keyData1.keyframeMetadata = fnc1;
                            } else {
                                fnc1 = keyframeMetadata1.__fnct;
                            }
                            perc1 = fnc1((frameNum1 - keyTime1) / (nextKeyTime1 - keyTime1));
                        }
                    }
                    endValue1 = nextKeyData1.s || keyData1.e;
                    keyValue1 = keyData1.h === 1 ? keyData1.s[i3] : keyData1.s[i3] + (endValue1[i3] - keyData1.s[i3]) * perc1;
                    if (this.propType === "multidimensional") {
                        newValue1[i3] = keyValue1;
                    } else {
                        newValue1 = keyValue1;
                    }
                }
            }
        }
        caching1.lastIndex = iterationIndex1;
        return newValue1;
    } // based on @Toji's https://github.com/toji/gl-matrix/
    function slerp(a3, b3, t3) {
        var out1 = [];
        var ax1 = a3[0];
        var ay1 = a3[1];
        var az1 = a3[2];
        var aw1 = a3[3];
        var bx1 = b3[0];
        var by1 = b3[1];
        var bz1 = b3[2];
        var bw1 = b3[3];
        var omega1;
        var cosom1;
        var sinom1;
        var scale01;
        var scale11;
        cosom1 = ax1 * bx1 + ay1 * by1 + az1 * bz1 + aw1 * bw1;
        if (cosom1 < 0.0) {
            cosom1 = -cosom1;
            bx1 = -bx1;
            by1 = -by1;
            bz1 = -bz1;
            bw1 = -bw1;
        }
        if (1.0 - cosom1 > 0.000001) {
            omega1 = Math.acos(cosom1);
            sinom1 = Math.sin(omega1);
            scale01 = Math.sin((1.0 - t3) * omega1) / sinom1;
            scale11 = Math.sin(t3 * omega1) / sinom1;
        } else {
            scale01 = 1.0 - t3;
            scale11 = t3;
        }
        out1[0] = scale01 * ax1 + scale11 * bx1;
        out1[1] = scale01 * ay1 + scale11 * by1;
        out1[2] = scale01 * az1 + scale11 * bz1;
        out1[3] = scale01 * aw1 + scale11 * bw1;
        return out1;
    }
    function quaternionToEuler(out1, quat1) {
        var qx1 = quat1[0];
        var qy1 = quat1[1];
        var qz1 = quat1[2];
        var qw1 = quat1[3];
        var heading1 = Math.atan2(2 * qy1 * qw1 - 2 * qx1 * qz1, 1 - 2 * qy1 * qy1 - 2 * qz1 * qz1);
        var attitude1 = Math.asin(2 * qx1 * qy1 + 2 * qz1 * qw1);
        var bank1 = Math.atan2(2 * qx1 * qw1 - 2 * qy1 * qz1, 1 - 2 * qx1 * qx1 - 2 * qz1 * qz1);
        out1[0] = heading1 / degToRads;
        out1[1] = attitude1 / degToRads;
        out1[2] = bank1 / degToRads;
    }
    function createQuaternion(values1) {
        var heading1 = values1[0] * degToRads;
        var attitude1 = values1[1] * degToRads;
        var bank1 = values1[2] * degToRads;
        var c11 = Math.cos(heading1 / 2);
        var c21 = Math.cos(attitude1 / 2);
        var c31 = Math.cos(bank1 / 2);
        var s11 = Math.sin(heading1 / 2);
        var s21 = Math.sin(attitude1 / 2);
        var s31 = Math.sin(bank1 / 2);
        var w1 = c11 * c21 * c31 - s11 * s21 * s31;
        var x4 = s11 * s21 * c31 + c11 * c21 * s31;
        var y4 = s11 * c21 * c31 + c11 * s21 * s31;
        var z4 = c11 * s21 * c31 - s11 * c21 * s31;
        return [
            x4,
            y4,
            z4,
            w1
        ];
    }
    function getValueAtCurrentTime() {
        var frameNum1 = this.comp.renderedFrame - this.offsetTime;
        var initTime1 = this.keyframes[0].t - this.offsetTime;
        var endTime1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(frameNum1 === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime1 && frameNum1 >= endTime1 || this._caching.lastFrame < initTime1 && frameNum1 < initTime1))) {
            if (this._caching.lastFrame >= frameNum1) {
                this._caching._lastKeyframeIndex = -1;
                this._caching.lastIndex = 0;
            }
            var renderResult1 = this.interpolateValue(frameNum1, this._caching);
            this.pv = renderResult1;
        }
        this._caching.lastFrame = frameNum1;
        return this.pv;
    }
    function setVValue(val3) {
        var multipliedValue1;
        if (this.propType === "unidimensional") {
            multipliedValue1 = val3 * this.mult;
            if (mathAbs(this.v - multipliedValue1) > 0.00001) {
                this.v = multipliedValue1;
                this._mdf = true;
            }
        } else {
            var i3 = 0;
            var len1 = this.v.length;
            while(i3 < len1){
                multipliedValue1 = val3[i3] * this.mult;
                if (mathAbs(this.v[i3] - multipliedValue1) > 0.00001) {
                    this.v[i3] = multipliedValue1;
                    this._mdf = true;
                }
                i3 += 1;
            }
        }
    }
    function processEffectsSequence() {
        if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
            return;
        }
        if (this.lock) {
            this.setVValue(this.pv);
            return;
        }
        this.lock = true;
        this._mdf = this._isFirstFrame;
        var i3;
        var len1 = this.effectsSequence.length;
        var finalValue1 = this.kf ? this.pv : this.data.k;
        for(i3 = 0; i3 < len1; i3 += 1){
            finalValue1 = this.effectsSequence[i3](finalValue1);
        }
        this.setVValue(finalValue1);
        this._isFirstFrame = false;
        this.lock = false;
        this.frameId = this.elem.globalData.frameId;
    }
    function addEffect(effectFunction1) {
        this.effectsSequence.push(effectFunction1);
        this.container.addDynamicProperty(this);
    }
    function ValueProperty(elem3, data1, mult1, container1) {
        this.propType = "unidimensional";
        this.mult = mult1 || 1;
        this.data = data1;
        this.v = mult1 ? data1.k * mult1 : data1.k;
        this.pv = data1.k;
        this._mdf = false;
        this.elem = elem3;
        this.container = container1;
        this.comp = elem3.comp;
        this.k = false;
        this.kf = false;
        this.vel = 0;
        this.effectsSequence = [];
        this._isFirstFrame = true;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(elem3, data1, mult1, container1) {
        this.propType = "multidimensional";
        this.mult = mult1 || 1;
        this.data = data1;
        this._mdf = false;
        this.elem = elem3;
        this.container = container1;
        this.comp = elem3.comp;
        this.k = false;
        this.kf = false;
        this.frameId = -1;
        var i3;
        var len1 = data1.k.length;
        this.v = createTypedArray("float32", len1);
        this.pv = createTypedArray("float32", len1);
        this.vel = createTypedArray("float32", len1);
        for(i3 = 0; i3 < len1; i3 += 1){
            this.v[i3] = data1.k[i3] * this.mult;
            this.pv[i3] = data1.k[i3];
        }
        this._isFirstFrame = true;
        this.effectsSequence = [];
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.addEffect = addEffect;
    }
    function KeyframedValueProperty(elem3, data1, mult1, container1) {
        this.propType = "unidimensional";
        this.keyframes = data1.k;
        this.keyframesMetadata = [];
        this.offsetTime = elem3.data.st;
        this.frameId = -1;
        this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
        };
        this.k = true;
        this.kf = true;
        this.data = data1;
        this.mult = mult1 || 1;
        this.elem = elem3;
        this.container = container1;
        this.comp = elem3.comp;
        this.v = initFrame;
        this.pv = initFrame;
        this._isFirstFrame = true;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.interpolateValue = interpolateValue;
        this.effectsSequence = [
            getValueAtCurrentTime.bind(this)
        ];
        this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(elem3, data1, mult1, container1) {
        this.propType = "multidimensional";
        var i3;
        var len1 = data1.k.length;
        var s4;
        var e3;
        var to1;
        var ti1;
        for(i3 = 0; i3 < len1 - 1; i3 += 1){
            if (data1.k[i3].to && data1.k[i3].s && data1.k[i3 + 1] && data1.k[i3 + 1].s) {
                s4 = data1.k[i3].s;
                e3 = data1.k[i3 + 1].s;
                to1 = data1.k[i3].to;
                ti1 = data1.k[i3].ti;
                if (s4.length === 2 && !(s4[0] === e3[0] && s4[1] === e3[1]) && bez.pointOnLine2D(s4[0], s4[1], e3[0], e3[1], s4[0] + to1[0], s4[1] + to1[1]) && bez.pointOnLine2D(s4[0], s4[1], e3[0], e3[1], e3[0] + ti1[0], e3[1] + ti1[1]) || s4.length === 3 && !(s4[0] === e3[0] && s4[1] === e3[1] && s4[2] === e3[2]) && bez.pointOnLine3D(s4[0], s4[1], s4[2], e3[0], e3[1], e3[2], s4[0] + to1[0], s4[1] + to1[1], s4[2] + to1[2]) && bez.pointOnLine3D(s4[0], s4[1], s4[2], e3[0], e3[1], e3[2], e3[0] + ti1[0], e3[1] + ti1[1], e3[2] + ti1[2])) {
                    data1.k[i3].to = null;
                    data1.k[i3].ti = null;
                }
                if (s4[0] === e3[0] && s4[1] === e3[1] && to1[0] === 0 && to1[1] === 0 && ti1[0] === 0 && ti1[1] === 0) {
                    if (s4.length === 2 || s4[2] === e3[2] && to1[2] === 0 && ti1[2] === 0) {
                        data1.k[i3].to = null;
                        data1.k[i3].ti = null;
                    }
                }
            }
        }
        this.effectsSequence = [
            getValueAtCurrentTime.bind(this)
        ];
        this.data = data1;
        this.keyframes = data1.k;
        this.keyframesMetadata = [];
        this.offsetTime = elem3.data.st;
        this.k = true;
        this.kf = true;
        this._isFirstFrame = true;
        this.mult = mult1 || 1;
        this.elem = elem3;
        this.container = container1;
        this.comp = elem3.comp;
        this.getValue = processEffectsSequence;
        this.setVValue = setVValue;
        this.interpolateValue = interpolateValue;
        this.frameId = -1;
        var arrLen1 = data1.k[0].s.length;
        this.v = createTypedArray("float32", arrLen1);
        this.pv = createTypedArray("float32", arrLen1);
        for(i3 = 0; i3 < arrLen1; i3 += 1){
            this.v[i3] = initFrame;
            this.pv[i3] = initFrame;
        }
        this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", arrLen1)
        };
        this.addEffect = addEffect;
    }
    var PropertyFactory = function() {
        function getProp1(elem3, data1, type1, mult1, container1) {
            if (data1.sid) {
                data1 = elem3.globalData.slotManager.getProp(data1);
            }
            var p6;
            if (!data1.k.length) {
                p6 = new ValueProperty(elem3, data1, mult1, container1);
            } else if (typeof data1.k[0] === "number") {
                p6 = new MultiDimensionalProperty(elem3, data1, mult1, container1);
            } else {
                switch(type1){
                    case 0:
                        p6 = new KeyframedValueProperty(elem3, data1, mult1, container1);
                        break;
                    case 1:
                        p6 = new KeyframedMultidimensionalProperty(elem3, data1, mult1, container1);
                        break;
                    default:
                        break;
                }
            }
            if (p6.effectsSequence.length) {
                container1.addDynamicProperty(p6);
            }
            return p6;
        }
        var ob1 = {
            getProp: getProp1
        };
        return ob1;
    }();
    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
        addDynamicProperty: function addDynamicProperty1(prop1) {
            if (this.dynamicProperties.indexOf(prop1) === -1) {
                this.dynamicProperties.push(prop1);
                this.container.addDynamicProperty(this);
                this._isAnimated = true;
            }
        },
        iterateDynamicProperties: function iterateDynamicProperties1() {
            this._mdf = false;
            var i3;
            var len1 = this.dynamicProperties.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.dynamicProperties[i3].getValue();
                if (this.dynamicProperties[i3]._mdf) {
                    this._mdf = true;
                }
            }
        },
        initDynamicPropertyContainer: function initDynamicPropertyContainer1(container1) {
            this.container = container1;
            this.dynamicProperties = [];
            this._mdf = false;
            this._isAnimated = false;
        }
    };
    var pointPool = function() {
        function create1() {
            return createTypedArray("float32", 2);
        }
        return poolFactory(8, create1);
    }();
    function ShapePath() {
        this.c = false;
        this._length = 0;
        this._maxLength = 8;
        this.v = createSizedArray(this._maxLength);
        this.o = createSizedArray(this._maxLength);
        this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(closed1, len1) {
        this.c = closed1;
        this.setLength(len1);
        var i3 = 0;
        while(i3 < len1){
            this.v[i3] = pointPool.newElement();
            this.o[i3] = pointPool.newElement();
            this.i[i3] = pointPool.newElement();
            i3 += 1;
        }
    };
    ShapePath.prototype.setLength = function(len1) {
        while(this._maxLength < len1){
            this.doubleArrayLength();
        }
        this._length = len1;
    };
    ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength));
        this.i = this.i.concat(createSizedArray(this._maxLength));
        this.o = this.o.concat(createSizedArray(this._maxLength));
        this._maxLength *= 2;
    };
    ShapePath.prototype.setXYAt = function(x4, y4, type1, pos1, replace1) {
        var arr3;
        this._length = Math.max(this._length, pos1 + 1);
        if (this._length >= this._maxLength) {
            this.doubleArrayLength();
        }
        switch(type1){
            case "v":
                arr3 = this.v;
                break;
            case "i":
                arr3 = this.i;
                break;
            case "o":
                arr3 = this.o;
                break;
            default:
                arr3 = [];
                break;
        }
        if (!arr3[pos1] || arr3[pos1] && !replace1) {
            arr3[pos1] = pointPool.newElement();
        }
        arr3[pos1][0] = x4;
        arr3[pos1][1] = y4;
    };
    ShapePath.prototype.setTripleAt = function(vX1, vY1, oX1, oY1, iX1, iY1, pos1, replace1) {
        this.setXYAt(vX1, vY1, "v", pos1, replace1);
        this.setXYAt(oX1, oY1, "o", pos1, replace1);
        this.setXYAt(iX1, iY1, "i", pos1, replace1);
    };
    ShapePath.prototype.reverse = function() {
        var newPath1 = new ShapePath();
        newPath1.setPathData(this.c, this._length);
        var vertices1 = this.v;
        var outPoints1 = this.o;
        var inPoints1 = this.i;
        var init1 = 0;
        if (this.c) {
            newPath1.setTripleAt(vertices1[0][0], vertices1[0][1], inPoints1[0][0], inPoints1[0][1], outPoints1[0][0], outPoints1[0][1], 0, false);
            init1 = 1;
        }
        var cnt1 = this._length - 1;
        var len1 = this._length;
        var i3;
        for(i3 = init1; i3 < len1; i3 += 1){
            newPath1.setTripleAt(vertices1[cnt1][0], vertices1[cnt1][1], inPoints1[cnt1][0], inPoints1[cnt1][1], outPoints1[cnt1][0], outPoints1[cnt1][1], i3, false);
            cnt1 -= 1;
        }
        return newPath1;
    };
    ShapePath.prototype.length = function() {
        return this._length;
    };
    var shapePool = function() {
        function create1() {
            return new ShapePath();
        }
        function release1(shapePath1) {
            var len1 = shapePath1._length;
            var i3;
            for(i3 = 0; i3 < len1; i3 += 1){
                pointPool.release(shapePath1.v[i3]);
                pointPool.release(shapePath1.i[i3]);
                pointPool.release(shapePath1.o[i3]);
                shapePath1.v[i3] = null;
                shapePath1.i[i3] = null;
                shapePath1.o[i3] = null;
            }
            shapePath1._length = 0;
            shapePath1.c = false;
        }
        function clone1(shape3) {
            var cloned1 = factory1.newElement();
            var i3;
            var len1 = shape3._length === undefined ? shape3.v.length : shape3._length;
            cloned1.setLength(len1);
            cloned1.c = shape3.c;
            for(i3 = 0; i3 < len1; i3 += 1){
                cloned1.setTripleAt(shape3.v[i3][0], shape3.v[i3][1], shape3.o[i3][0], shape3.o[i3][1], shape3.i[i3][0], shape3.i[i3][1], i3);
            }
            return cloned1;
        }
        var factory1 = poolFactory(4, create1, release1);
        factory1.clone = clone1;
        return factory1;
    }();
    function ShapeCollection() {
        this._length = 0;
        this._maxLength = 4;
        this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(shapeData1) {
        if (this._length === this._maxLength) {
            this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
            this._maxLength *= 2;
        }
        this.shapes[this._length] = shapeData1;
        this._length += 1;
    };
    ShapeCollection.prototype.releaseShapes = function() {
        var i3;
        for(i3 = 0; i3 < this._length; i3 += 1){
            shapePool.release(this.shapes[i3]);
        }
        this._length = 0;
    };
    var shapeCollectionPool = function() {
        var ob1 = {
            newShapeCollection: newShapeCollection1,
            release: release1
        };
        var _length1 = 0;
        var _maxLength1 = 4;
        var pool1 = createSizedArray(_maxLength1);
        function newShapeCollection1() {
            var shapeCollection1;
            if (_length1) {
                _length1 -= 1;
                shapeCollection1 = pool1[_length1];
            } else {
                shapeCollection1 = new ShapeCollection();
            }
            return shapeCollection1;
        }
        function release1(shapeCollection1) {
            var i3;
            var len1 = shapeCollection1._length;
            for(i3 = 0; i3 < len1; i3 += 1){
                shapePool.release(shapeCollection1.shapes[i3]);
            }
            shapeCollection1._length = 0;
            if (_length1 === _maxLength1) {
                pool1 = pooling["double"](pool1);
                _maxLength1 *= 2;
            }
            pool1[_length1] = shapeCollection1;
            _length1 += 1;
        }
        return ob1;
    }();
    var ShapePropertyFactory = function() {
        var initFrame1 = -999999;
        function interpolateShape1(frameNum1, previousValue1, caching1) {
            var iterationIndex1 = caching1.lastIndex;
            var keyPropS1;
            var keyPropE1;
            var isHold1;
            var j3;
            var k3;
            var jLen1;
            var kLen1;
            var perc1;
            var vertexValue1;
            var kf1 = this.keyframes;
            if (frameNum1 < kf1[0].t - this.offsetTime) {
                keyPropS1 = kf1[0].s[0];
                isHold1 = true;
                iterationIndex1 = 0;
            } else if (frameNum1 >= kf1[kf1.length - 1].t - this.offsetTime) {
                keyPropS1 = kf1[kf1.length - 1].s ? kf1[kf1.length - 1].s[0] : kf1[kf1.length - 2].e[0];
                /* if(kf[kf.length - 1].s){
                  keyPropS = kf[kf.length - 1].s[0];
              }else{
                  keyPropS = kf[kf.length - 2].e[0];
              } */ isHold1 = true;
            } else {
                var i3 = iterationIndex1;
                var len1 = kf1.length - 1;
                var flag1 = true;
                var keyData1;
                var nextKeyData1;
                var keyframeMetadata1;
                while(flag1){
                    keyData1 = kf1[i3];
                    nextKeyData1 = kf1[i3 + 1];
                    if (nextKeyData1.t - this.offsetTime > frameNum1) {
                        break;
                    }
                    if (i3 < len1 - 1) {
                        i3 += 1;
                    } else {
                        flag1 = false;
                    }
                }
                keyframeMetadata1 = this.keyframesMetadata[i3] || {};
                isHold1 = keyData1.h === 1;
                iterationIndex1 = i3;
                if (!isHold1) {
                    if (frameNum1 >= nextKeyData1.t - this.offsetTime) {
                        perc1 = 1;
                    } else if (frameNum1 < keyData1.t - this.offsetTime) {
                        perc1 = 0;
                    } else {
                        var fnc1;
                        if (keyframeMetadata1.__fnct) {
                            fnc1 = keyframeMetadata1.__fnct;
                        } else {
                            fnc1 = BezierFactory.getBezierEasing(keyData1.o.x, keyData1.o.y, keyData1.i.x, keyData1.i.y).get;
                            keyframeMetadata1.__fnct = fnc1;
                        }
                        perc1 = fnc1((frameNum1 - (keyData1.t - this.offsetTime)) / (nextKeyData1.t - this.offsetTime - (keyData1.t - this.offsetTime)));
                    }
                    keyPropE1 = nextKeyData1.s ? nextKeyData1.s[0] : keyData1.e[0];
                }
                keyPropS1 = keyData1.s[0];
            }
            jLen1 = previousValue1._length;
            kLen1 = keyPropS1.i[0].length;
            caching1.lastIndex = iterationIndex1;
            for(j3 = 0; j3 < jLen1; j3 += 1){
                for(k3 = 0; k3 < kLen1; k3 += 1){
                    vertexValue1 = isHold1 ? keyPropS1.i[j3][k3] : keyPropS1.i[j3][k3] + (keyPropE1.i[j3][k3] - keyPropS1.i[j3][k3]) * perc1;
                    previousValue1.i[j3][k3] = vertexValue1;
                    vertexValue1 = isHold1 ? keyPropS1.o[j3][k3] : keyPropS1.o[j3][k3] + (keyPropE1.o[j3][k3] - keyPropS1.o[j3][k3]) * perc1;
                    previousValue1.o[j3][k3] = vertexValue1;
                    vertexValue1 = isHold1 ? keyPropS1.v[j3][k3] : keyPropS1.v[j3][k3] + (keyPropE1.v[j3][k3] - keyPropS1.v[j3][k3]) * perc1;
                    previousValue1.v[j3][k3] = vertexValue1;
                }
            }
        }
        function interpolateShapeCurrentTime1() {
            var frameNum1 = this.comp.renderedFrame - this.offsetTime;
            var initTime1 = this.keyframes[0].t - this.offsetTime;
            var endTime1 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            var lastFrame1 = this._caching.lastFrame;
            if (!(lastFrame1 !== initFrame1 && (lastFrame1 < initTime1 && frameNum1 < initTime1 || lastFrame1 > endTime1 && frameNum1 > endTime1))) {
                /// /
                this._caching.lastIndex = lastFrame1 < frameNum1 ? this._caching.lastIndex : 0;
                this.interpolateShape(frameNum1, this.pv, this._caching); /// /
            }
            this._caching.lastFrame = frameNum1;
            return this.pv;
        }
        function resetShape1() {
            this.paths = this.localShapeCollection;
        }
        function shapesEqual1(shape11, shape21) {
            if (shape11._length !== shape21._length || shape11.c !== shape21.c) {
                return false;
            }
            var i3;
            var len1 = shape11._length;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (shape11.v[i3][0] !== shape21.v[i3][0] || shape11.v[i3][1] !== shape21.v[i3][1] || shape11.o[i3][0] !== shape21.o[i3][0] || shape11.o[i3][1] !== shape21.o[i3][1] || shape11.i[i3][0] !== shape21.i[i3][0] || shape11.i[i3][1] !== shape21.i[i3][1]) {
                    return false;
                }
            }
            return true;
        }
        function setVValue1(newPath1) {
            if (!shapesEqual1(this.v, newPath1)) {
                this.v = shapePool.clone(newPath1);
                this.localShapeCollection.releaseShapes();
                this.localShapeCollection.addShape(this.v);
                this._mdf = true;
                this.paths = this.localShapeCollection;
            }
        }
        function processEffectsSequence1() {
            if (this.elem.globalData.frameId === this.frameId) {
                return;
            }
            if (!this.effectsSequence.length) {
                this._mdf = false;
                return;
            }
            if (this.lock) {
                this.setVValue(this.pv);
                return;
            }
            this.lock = true;
            this._mdf = false;
            var finalValue1;
            if (this.kf) {
                finalValue1 = this.pv;
            } else if (this.data.ks) {
                finalValue1 = this.data.ks.k;
            } else {
                finalValue1 = this.data.pt.k;
            }
            var i3;
            var len1 = this.effectsSequence.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                finalValue1 = this.effectsSequence[i3](finalValue1);
            }
            this.setVValue(finalValue1);
            this.lock = false;
            this.frameId = this.elem.globalData.frameId;
        }
        function ShapeProperty1(elem3, data1, type1) {
            this.propType = "shape";
            this.comp = elem3.comp;
            this.container = elem3;
            this.elem = elem3;
            this.data = data1;
            this.k = false;
            this.kf = false;
            this._mdf = false;
            var pathData1 = type1 === 3 ? data1.pt.k : data1.ks.k;
            this.v = shapePool.clone(pathData1);
            this.pv = shapePool.clone(this.v);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.paths.addShape(this.v);
            this.reset = resetShape1;
            this.effectsSequence = [];
        }
        function addEffect1(effectFunction1) {
            this.effectsSequence.push(effectFunction1);
            this.container.addDynamicProperty(this);
        }
        ShapeProperty1.prototype.interpolateShape = interpolateShape1;
        ShapeProperty1.prototype.getValue = processEffectsSequence1;
        ShapeProperty1.prototype.setVValue = setVValue1;
        ShapeProperty1.prototype.addEffect = addEffect1;
        function KeyframedShapeProperty1(elem3, data1, type1) {
            this.propType = "shape";
            this.comp = elem3.comp;
            this.elem = elem3;
            this.container = elem3;
            this.offsetTime = elem3.data.st;
            this.keyframes = type1 === 3 ? data1.pt.k : data1.ks.k;
            this.keyframesMetadata = [];
            this.k = true;
            this.kf = true;
            var len1 = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement();
            this.v.setPathData(this.keyframes[0].s[0].c, len1);
            this.pv = shapePool.clone(this.v);
            this.localShapeCollection = shapeCollectionPool.newShapeCollection();
            this.paths = this.localShapeCollection;
            this.paths.addShape(this.v);
            this.lastFrame = initFrame1;
            this.reset = resetShape1;
            this._caching = {
                lastFrame: initFrame1,
                lastIndex: 0
            };
            this.effectsSequence = [
                interpolateShapeCurrentTime1.bind(this)
            ];
        }
        KeyframedShapeProperty1.prototype.getValue = processEffectsSequence1;
        KeyframedShapeProperty1.prototype.interpolateShape = interpolateShape1;
        KeyframedShapeProperty1.prototype.setVValue = setVValue1;
        KeyframedShapeProperty1.prototype.addEffect = addEffect1;
        var EllShapeProperty1 = function() {
            var cPoint1 = roundCorner;
            function EllShapePropertyFactory1(elem3, data1) {
                this.v = shapePool.newElement();
                this.v.setPathData(true, 4);
                this.localShapeCollection = shapeCollectionPool.newShapeCollection();
                this.paths = this.localShapeCollection;
                this.localShapeCollection.addShape(this.v);
                this.d = data1.d;
                this.elem = elem3;
                this.comp = elem3.comp;
                this.frameId = -1;
                this.initDynamicPropertyContainer(elem3);
                this.p = PropertyFactory.getProp(elem3, data1.p, 1, 0, this);
                this.s = PropertyFactory.getProp(elem3, data1.s, 1, 0, this);
                if (this.dynamicProperties.length) {
                    this.k = true;
                } else {
                    this.k = false;
                    this.convertEllToPath();
                }
            }
            EllShapePropertyFactory1.prototype = {
                reset: resetShape1,
                getValue: function getValue1() {
                    if (this.elem.globalData.frameId === this.frameId) {
                        return;
                    }
                    this.frameId = this.elem.globalData.frameId;
                    this.iterateDynamicProperties();
                    if (this._mdf) {
                        this.convertEllToPath();
                    }
                },
                convertEllToPath: function convertEllToPath1() {
                    var p01 = this.p.v[0];
                    var p14 = this.p.v[1];
                    var s01 = this.s.v[0] / 2;
                    var s11 = this.s.v[1] / 2;
                    var _cw1 = this.d !== 3;
                    var _v1 = this.v;
                    _v1.v[0][0] = p01;
                    _v1.v[0][1] = p14 - s11;
                    _v1.v[1][0] = _cw1 ? p01 + s01 : p01 - s01;
                    _v1.v[1][1] = p14;
                    _v1.v[2][0] = p01;
                    _v1.v[2][1] = p14 + s11;
                    _v1.v[3][0] = _cw1 ? p01 - s01 : p01 + s01;
                    _v1.v[3][1] = p14;
                    _v1.i[0][0] = _cw1 ? p01 - s01 * cPoint1 : p01 + s01 * cPoint1;
                    _v1.i[0][1] = p14 - s11;
                    _v1.i[1][0] = _cw1 ? p01 + s01 : p01 - s01;
                    _v1.i[1][1] = p14 - s11 * cPoint1;
                    _v1.i[2][0] = _cw1 ? p01 + s01 * cPoint1 : p01 - s01 * cPoint1;
                    _v1.i[2][1] = p14 + s11;
                    _v1.i[3][0] = _cw1 ? p01 - s01 : p01 + s01;
                    _v1.i[3][1] = p14 + s11 * cPoint1;
                    _v1.o[0][0] = _cw1 ? p01 + s01 * cPoint1 : p01 - s01 * cPoint1;
                    _v1.o[0][1] = p14 - s11;
                    _v1.o[1][0] = _cw1 ? p01 + s01 : p01 - s01;
                    _v1.o[1][1] = p14 + s11 * cPoint1;
                    _v1.o[2][0] = _cw1 ? p01 - s01 * cPoint1 : p01 + s01 * cPoint1;
                    _v1.o[2][1] = p14 + s11;
                    _v1.o[3][0] = _cw1 ? p01 - s01 : p01 + s01;
                    _v1.o[3][1] = p14 - s11 * cPoint1;
                }
            };
            extendPrototype([
                DynamicPropertyContainer
            ], EllShapePropertyFactory1);
            return EllShapePropertyFactory1;
        }();
        var StarShapeProperty1 = function() {
            function StarShapePropertyFactory1(elem3, data1) {
                this.v = shapePool.newElement();
                this.v.setPathData(true, 0);
                this.elem = elem3;
                this.comp = elem3.comp;
                this.data = data1;
                this.frameId = -1;
                this.d = data1.d;
                this.initDynamicPropertyContainer(elem3);
                if (data1.sy === 1) {
                    this.ir = PropertyFactory.getProp(elem3, data1.ir, 0, 0, this);
                    this.is = PropertyFactory.getProp(elem3, data1.is, 0, 0.01, this);
                    this.convertToPath = this.convertStarToPath;
                } else {
                    this.convertToPath = this.convertPolygonToPath;
                }
                this.pt = PropertyFactory.getProp(elem3, data1.pt, 0, 0, this);
                this.p = PropertyFactory.getProp(elem3, data1.p, 1, 0, this);
                this.r = PropertyFactory.getProp(elem3, data1.r, 0, degToRads, this);
                this.or = PropertyFactory.getProp(elem3, data1.or, 0, 0, this);
                this.os = PropertyFactory.getProp(elem3, data1.os, 0, 0.01, this);
                this.localShapeCollection = shapeCollectionPool.newShapeCollection();
                this.localShapeCollection.addShape(this.v);
                this.paths = this.localShapeCollection;
                if (this.dynamicProperties.length) {
                    this.k = true;
                } else {
                    this.k = false;
                    this.convertToPath();
                }
            }
            StarShapePropertyFactory1.prototype = {
                reset: resetShape1,
                getValue: function getValue1() {
                    if (this.elem.globalData.frameId === this.frameId) {
                        return;
                    }
                    this.frameId = this.elem.globalData.frameId;
                    this.iterateDynamicProperties();
                    if (this._mdf) {
                        this.convertToPath();
                    }
                },
                convertStarToPath: function convertStarToPath1() {
                    var numPts1 = Math.floor(this.pt.v) * 2;
                    var angle1 = Math.PI * 2 / numPts1;
                    /* this.v.v.length = numPts;
                  this.v.i.length = numPts;
                  this.v.o.length = numPts; */ var longFlag1 = true;
                    var longRad1 = this.or.v;
                    var shortRad1 = this.ir.v;
                    var longRound1 = this.os.v;
                    var shortRound1 = this.is.v;
                    var longPerimSegment1 = 2 * Math.PI * longRad1 / (numPts1 * 2);
                    var shortPerimSegment1 = 2 * Math.PI * shortRad1 / (numPts1 * 2);
                    var i3;
                    var rad1;
                    var roundness1;
                    var perimSegment1;
                    var currentAng1 = -Math.PI / 2;
                    currentAng1 += this.r.v;
                    var dir1 = this.data.d === 3 ? -1 : 1;
                    this.v._length = 0;
                    for(i3 = 0; i3 < numPts1; i3 += 1){
                        rad1 = longFlag1 ? longRad1 : shortRad1;
                        roundness1 = longFlag1 ? longRound1 : shortRound1;
                        perimSegment1 = longFlag1 ? longPerimSegment1 : shortPerimSegment1;
                        var x4 = rad1 * Math.cos(currentAng1);
                        var y4 = rad1 * Math.sin(currentAng1);
                        var ox1 = x4 === 0 && y4 === 0 ? 0 : y4 / Math.sqrt(x4 * x4 + y4 * y4);
                        var oy1 = x4 === 0 && y4 === 0 ? 0 : -x4 / Math.sqrt(x4 * x4 + y4 * y4);
                        x4 += +this.p.v[0];
                        y4 += +this.p.v[1];
                        this.v.setTripleAt(x4, y4, x4 - ox1 * perimSegment1 * roundness1 * dir1, y4 - oy1 * perimSegment1 * roundness1 * dir1, x4 + ox1 * perimSegment1 * roundness1 * dir1, y4 + oy1 * perimSegment1 * roundness1 * dir1, i3, true);
                        /* this.v.v[i] = [x,y];
                      this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                      this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                      this.v._length = numPts; */ longFlag1 = !longFlag1;
                        currentAng1 += angle1 * dir1;
                    }
                },
                convertPolygonToPath: function convertPolygonToPath1() {
                    var numPts1 = Math.floor(this.pt.v);
                    var angle1 = Math.PI * 2 / numPts1;
                    var rad1 = this.or.v;
                    var roundness1 = this.os.v;
                    var perimSegment1 = 2 * Math.PI * rad1 / (numPts1 * 4);
                    var i3;
                    var currentAng1 = -Math.PI * 0.5;
                    var dir1 = this.data.d === 3 ? -1 : 1;
                    currentAng1 += this.r.v;
                    this.v._length = 0;
                    for(i3 = 0; i3 < numPts1; i3 += 1){
                        var x4 = rad1 * Math.cos(currentAng1);
                        var y4 = rad1 * Math.sin(currentAng1);
                        var ox1 = x4 === 0 && y4 === 0 ? 0 : y4 / Math.sqrt(x4 * x4 + y4 * y4);
                        var oy1 = x4 === 0 && y4 === 0 ? 0 : -x4 / Math.sqrt(x4 * x4 + y4 * y4);
                        x4 += +this.p.v[0];
                        y4 += +this.p.v[1];
                        this.v.setTripleAt(x4, y4, x4 - ox1 * perimSegment1 * roundness1 * dir1, y4 - oy1 * perimSegment1 * roundness1 * dir1, x4 + ox1 * perimSegment1 * roundness1 * dir1, y4 + oy1 * perimSegment1 * roundness1 * dir1, i3, true);
                        currentAng1 += angle1 * dir1;
                    }
                    this.paths.length = 0;
                    this.paths[0] = this.v;
                }
            };
            extendPrototype([
                DynamicPropertyContainer
            ], StarShapePropertyFactory1);
            return StarShapePropertyFactory1;
        }();
        var RectShapeProperty1 = function() {
            function RectShapePropertyFactory1(elem3, data1) {
                this.v = shapePool.newElement();
                this.v.c = true;
                this.localShapeCollection = shapeCollectionPool.newShapeCollection();
                this.localShapeCollection.addShape(this.v);
                this.paths = this.localShapeCollection;
                this.elem = elem3;
                this.comp = elem3.comp;
                this.frameId = -1;
                this.d = data1.d;
                this.initDynamicPropertyContainer(elem3);
                this.p = PropertyFactory.getProp(elem3, data1.p, 1, 0, this);
                this.s = PropertyFactory.getProp(elem3, data1.s, 1, 0, this);
                this.r = PropertyFactory.getProp(elem3, data1.r, 0, 0, this);
                if (this.dynamicProperties.length) {
                    this.k = true;
                } else {
                    this.k = false;
                    this.convertRectToPath();
                }
            }
            RectShapePropertyFactory1.prototype = {
                convertRectToPath: function convertRectToPath1() {
                    var p01 = this.p.v[0];
                    var p14 = this.p.v[1];
                    var v01 = this.s.v[0] / 2;
                    var v11 = this.s.v[1] / 2;
                    var round1 = bmMin(v01, v11, this.r.v);
                    var cPoint1 = round1 * (1 - roundCorner);
                    this.v._length = 0;
                    if (this.d === 2 || this.d === 1) {
                        this.v.setTripleAt(p01 + v01, p14 - v11 + round1, p01 + v01, p14 - v11 + round1, p01 + v01, p14 - v11 + cPoint1, 0, true);
                        this.v.setTripleAt(p01 + v01, p14 + v11 - round1, p01 + v01, p14 + v11 - cPoint1, p01 + v01, p14 + v11 - round1, 1, true);
                        if (round1 !== 0) {
                            this.v.setTripleAt(p01 + v01 - round1, p14 + v11, p01 + v01 - round1, p14 + v11, p01 + v01 - cPoint1, p14 + v11, 2, true);
                            this.v.setTripleAt(p01 - v01 + round1, p14 + v11, p01 - v01 + cPoint1, p14 + v11, p01 - v01 + round1, p14 + v11, 3, true);
                            this.v.setTripleAt(p01 - v01, p14 + v11 - round1, p01 - v01, p14 + v11 - round1, p01 - v01, p14 + v11 - cPoint1, 4, true);
                            this.v.setTripleAt(p01 - v01, p14 - v11 + round1, p01 - v01, p14 - v11 + cPoint1, p01 - v01, p14 - v11 + round1, 5, true);
                            this.v.setTripleAt(p01 - v01 + round1, p14 - v11, p01 - v01 + round1, p14 - v11, p01 - v01 + cPoint1, p14 - v11, 6, true);
                            this.v.setTripleAt(p01 + v01 - round1, p14 - v11, p01 + v01 - cPoint1, p14 - v11, p01 + v01 - round1, p14 - v11, 7, true);
                        } else {
                            this.v.setTripleAt(p01 - v01, p14 + v11, p01 - v01 + cPoint1, p14 + v11, p01 - v01, p14 + v11, 2);
                            this.v.setTripleAt(p01 - v01, p14 - v11, p01 - v01, p14 - v11 + cPoint1, p01 - v01, p14 - v11, 3);
                        }
                    } else {
                        this.v.setTripleAt(p01 + v01, p14 - v11 + round1, p01 + v01, p14 - v11 + cPoint1, p01 + v01, p14 - v11 + round1, 0, true);
                        if (round1 !== 0) {
                            this.v.setTripleAt(p01 + v01 - round1, p14 - v11, p01 + v01 - round1, p14 - v11, p01 + v01 - cPoint1, p14 - v11, 1, true);
                            this.v.setTripleAt(p01 - v01 + round1, p14 - v11, p01 - v01 + cPoint1, p14 - v11, p01 - v01 + round1, p14 - v11, 2, true);
                            this.v.setTripleAt(p01 - v01, p14 - v11 + round1, p01 - v01, p14 - v11 + round1, p01 - v01, p14 - v11 + cPoint1, 3, true);
                            this.v.setTripleAt(p01 - v01, p14 + v11 - round1, p01 - v01, p14 + v11 - cPoint1, p01 - v01, p14 + v11 - round1, 4, true);
                            this.v.setTripleAt(p01 - v01 + round1, p14 + v11, p01 - v01 + round1, p14 + v11, p01 - v01 + cPoint1, p14 + v11, 5, true);
                            this.v.setTripleAt(p01 + v01 - round1, p14 + v11, p01 + v01 - cPoint1, p14 + v11, p01 + v01 - round1, p14 + v11, 6, true);
                            this.v.setTripleAt(p01 + v01, p14 + v11 - round1, p01 + v01, p14 + v11 - round1, p01 + v01, p14 + v11 - cPoint1, 7, true);
                        } else {
                            this.v.setTripleAt(p01 - v01, p14 - v11, p01 - v01 + cPoint1, p14 - v11, p01 - v01, p14 - v11, 1, true);
                            this.v.setTripleAt(p01 - v01, p14 + v11, p01 - v01, p14 + v11 - cPoint1, p01 - v01, p14 + v11, 2, true);
                            this.v.setTripleAt(p01 + v01, p14 + v11, p01 + v01 - cPoint1, p14 + v11, p01 + v01, p14 + v11, 3, true);
                        }
                    }
                },
                getValue: function getValue1() {
                    if (this.elem.globalData.frameId === this.frameId) {
                        return;
                    }
                    this.frameId = this.elem.globalData.frameId;
                    this.iterateDynamicProperties();
                    if (this._mdf) {
                        this.convertRectToPath();
                    }
                },
                reset: resetShape1
            };
            extendPrototype([
                DynamicPropertyContainer
            ], RectShapePropertyFactory1);
            return RectShapePropertyFactory1;
        }();
        function getShapeProp1(elem3, data1, type1) {
            var prop1;
            if (type1 === 3 || type1 === 4) {
                var dataProp1 = type1 === 3 ? data1.pt : data1.ks;
                var keys1 = dataProp1.k;
                if (keys1.length) {
                    prop1 = new KeyframedShapeProperty1(elem3, data1, type1);
                } else {
                    prop1 = new ShapeProperty1(elem3, data1, type1);
                }
            } else if (type1 === 5) {
                prop1 = new RectShapeProperty1(elem3, data1);
            } else if (type1 === 6) {
                prop1 = new EllShapeProperty1(elem3, data1);
            } else if (type1 === 7) {
                prop1 = new StarShapeProperty1(elem3, data1);
            }
            if (prop1.k) {
                elem3.addDynamicProperty(prop1);
            }
            return prop1;
        }
        function getConstructorFunction1() {
            return ShapeProperty1;
        }
        function getKeyframedConstructorFunction1() {
            return KeyframedShapeProperty1;
        }
        var ob1 = {};
        ob1.getShapeProp = getShapeProp1;
        ob1.getConstructorFunction = getConstructorFunction1;
        ob1.getKeyframedConstructorFunction = getKeyframedConstructorFunction1;
        return ob1;
    }();
    /*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   */ /**
   * 2D transformation matrix object initialized with identity matrix.
   *
   * The matrix can synchronize a canvas context by supplying the context
   * as an argument, or later apply current absolute transform to an
   * existing context.
   *
   * All values are handled as floating point values.
   *
   * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
   * @prop {number} a - scale x
   * @prop {number} b - shear y
   * @prop {number} c - shear x
   * @prop {number} d - scale y
   * @prop {number} e - translate x
   * @prop {number} f - translate y
   * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
   * @constructor
   */ var Matrix = function() {
        var _cos1 = Math.cos;
        var _sin1 = Math.sin;
        var _tan1 = Math.tan;
        var _rnd1 = Math.round;
        function reset1() {
            this.props[0] = 1;
            this.props[1] = 0;
            this.props[2] = 0;
            this.props[3] = 0;
            this.props[4] = 0;
            this.props[5] = 1;
            this.props[6] = 0;
            this.props[7] = 0;
            this.props[8] = 0;
            this.props[9] = 0;
            this.props[10] = 1;
            this.props[11] = 0;
            this.props[12] = 0;
            this.props[13] = 0;
            this.props[14] = 0;
            this.props[15] = 1;
            return this;
        }
        function rotate1(angle1) {
            if (angle1 === 0) {
                return this;
            }
            var mCos1 = _cos1(angle1);
            var mSin1 = _sin1(angle1);
            return this._t(mCos1, -mSin1, 0, 0, mSin1, mCos1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function rotateX1(angle1) {
            if (angle1 === 0) {
                return this;
            }
            var mCos1 = _cos1(angle1);
            var mSin1 = _sin1(angle1);
            return this._t(1, 0, 0, 0, 0, mCos1, -mSin1, 0, 0, mSin1, mCos1, 0, 0, 0, 0, 1);
        }
        function rotateY1(angle1) {
            if (angle1 === 0) {
                return this;
            }
            var mCos1 = _cos1(angle1);
            var mSin1 = _sin1(angle1);
            return this._t(mCos1, 0, mSin1, 0, 0, 1, 0, 0, -mSin1, 0, mCos1, 0, 0, 0, 0, 1);
        }
        function rotateZ1(angle1) {
            if (angle1 === 0) {
                return this;
            }
            var mCos1 = _cos1(angle1);
            var mSin1 = _sin1(angle1);
            return this._t(mCos1, -mSin1, 0, 0, mSin1, mCos1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function shear1(sx1, sy1) {
            return this._t(1, sy1, sx1, 1, 0, 0);
        }
        function skew1(ax1, ay1) {
            return this.shear(_tan1(ax1), _tan1(ay1));
        }
        function skewFromAxis1(ax1, angle1) {
            var mCos1 = _cos1(angle1);
            var mSin1 = _sin1(angle1);
            return this._t(mCos1, mSin1, 0, 0, -mSin1, mCos1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan1(ax1), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos1, -mSin1, 0, 0, mSin1, mCos1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
        }
        function scale2(sx1, sy1, sz1) {
            if (!sz1 && sz1 !== 0) {
                sz1 = 1;
            }
            if (sx1 === 1 && sy1 === 1 && sz1 === 1) {
                return this;
            }
            return this._t(sx1, 0, 0, 0, 0, sy1, 0, 0, 0, 0, sz1, 0, 0, 0, 0, 1);
        }
        function setTransform1(a3, b3, c4, d3, e3, f3, g3, h3, i3, j3, k3, l3, m3, n3, o3, p6) {
            this.props[0] = a3;
            this.props[1] = b3;
            this.props[2] = c4;
            this.props[3] = d3;
            this.props[4] = e3;
            this.props[5] = f3;
            this.props[6] = g3;
            this.props[7] = h3;
            this.props[8] = i3;
            this.props[9] = j3;
            this.props[10] = k3;
            this.props[11] = l3;
            this.props[12] = m3;
            this.props[13] = n3;
            this.props[14] = o3;
            this.props[15] = p6;
            return this;
        }
        function translate1(tx1, ty1, tz1) {
            tz1 = tz1 || 0;
            if (tx1 !== 0 || ty1 !== 0 || tz1 !== 0) {
                return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx1, ty1, tz1, 1);
            }
            return this;
        }
        function transform1(a21, b21, c21, d21, e21, f21, g21, h21, i21, j21, k21, l21, m21, n21, o21, p22) {
            var _p1 = this.props;
            if (a21 === 1 && b21 === 0 && c21 === 0 && d21 === 0 && e21 === 0 && f21 === 1 && g21 === 0 && h21 === 0 && i21 === 0 && j21 === 0 && k21 === 1 && l21 === 0) {
                // NOTE: commenting this condition because TurboFan deoptimizes code when present
                // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
                _p1[12] = _p1[12] * a21 + _p1[15] * m21;
                _p1[13] = _p1[13] * f21 + _p1[15] * n21;
                _p1[14] = _p1[14] * k21 + _p1[15] * o21;
                _p1[15] *= p22; // }
                this._identityCalculated = false;
                return this;
            }
            var a11 = _p1[0];
            var b11 = _p1[1];
            var c11 = _p1[2];
            var d11 = _p1[3];
            var e11 = _p1[4];
            var f11 = _p1[5];
            var g11 = _p1[6];
            var h11 = _p1[7];
            var i11 = _p1[8];
            var j11 = _p1[9];
            var k11 = _p1[10];
            var l11 = _p1[11];
            var m11 = _p1[12];
            var n11 = _p1[13];
            var o11 = _p1[14];
            var p14 = _p1[15];
            /* matrix order (canvas compatible):
           * ace
           * bdf
           * 001
           */ _p1[0] = a11 * a21 + b11 * e21 + c11 * i21 + d11 * m21;
            _p1[1] = a11 * b21 + b11 * f21 + c11 * j21 + d11 * n21;
            _p1[2] = a11 * c21 + b11 * g21 + c11 * k21 + d11 * o21;
            _p1[3] = a11 * d21 + b11 * h21 + c11 * l21 + d11 * p22;
            _p1[4] = e11 * a21 + f11 * e21 + g11 * i21 + h11 * m21;
            _p1[5] = e11 * b21 + f11 * f21 + g11 * j21 + h11 * n21;
            _p1[6] = e11 * c21 + f11 * g21 + g11 * k21 + h11 * o21;
            _p1[7] = e11 * d21 + f11 * h21 + g11 * l21 + h11 * p22;
            _p1[8] = i11 * a21 + j11 * e21 + k11 * i21 + l11 * m21;
            _p1[9] = i11 * b21 + j11 * f21 + k11 * j21 + l11 * n21;
            _p1[10] = i11 * c21 + j11 * g21 + k11 * k21 + l11 * o21;
            _p1[11] = i11 * d21 + j11 * h21 + k11 * l21 + l11 * p22;
            _p1[12] = m11 * a21 + n11 * e21 + o11 * i21 + p14 * m21;
            _p1[13] = m11 * b21 + n11 * f21 + o11 * j21 + p14 * n21;
            _p1[14] = m11 * c21 + n11 * g21 + o11 * k21 + p14 * o21;
            _p1[15] = m11 * d21 + n11 * h21 + o11 * l21 + p14 * p22;
            this._identityCalculated = false;
            return this;
        }
        function multiply1(matrix1) {
            var matrixProps1 = matrix1.props;
            return this.transform(matrixProps1[0], matrixProps1[1], matrixProps1[2], matrixProps1[3], matrixProps1[4], matrixProps1[5], matrixProps1[6], matrixProps1[7], matrixProps1[8], matrixProps1[9], matrixProps1[10], matrixProps1[11], matrixProps1[12], matrixProps1[13], matrixProps1[14], matrixProps1[15]);
        }
        function isIdentity1() {
            if (!this._identityCalculated) {
                this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
                this._identityCalculated = true;
            }
            return this._identity;
        }
        function equals1(matr1) {
            var i3 = 0;
            while(i3 < 16){
                if (matr1.props[i3] !== this.props[i3]) {
                    return false;
                }
                i3 += 1;
            }
            return true;
        }
        function clone1(matr1) {
            var i3;
            for(i3 = 0; i3 < 16; i3 += 1){
                matr1.props[i3] = this.props[i3];
            }
            return matr1;
        }
        function cloneFromProps1(props1) {
            var i3;
            for(i3 = 0; i3 < 16; i3 += 1){
                this.props[i3] = props1[i3];
            }
        }
        function applyToPoint1(x4, y4, z4) {
            return {
                x: x4 * this.props[0] + y4 * this.props[4] + z4 * this.props[8] + this.props[12],
                y: x4 * this.props[1] + y4 * this.props[5] + z4 * this.props[9] + this.props[13],
                z: x4 * this.props[2] + y4 * this.props[6] + z4 * this.props[10] + this.props[14]
            };
        /* return {
           x: x * me.a + y * me.c + me.e,
           y: x * me.b + y * me.d + me.f
           }; */ }
        function applyToX1(x4, y4, z4) {
            return x4 * this.props[0] + y4 * this.props[4] + z4 * this.props[8] + this.props[12];
        }
        function applyToY1(x4, y4, z4) {
            return x4 * this.props[1] + y4 * this.props[5] + z4 * this.props[9] + this.props[13];
        }
        function applyToZ1(x4, y4, z4) {
            return x4 * this.props[2] + y4 * this.props[6] + z4 * this.props[10] + this.props[14];
        }
        function getInverseMatrix1() {
            var determinant1 = this.props[0] * this.props[5] - this.props[1] * this.props[4];
            var a3 = this.props[5] / determinant1;
            var b3 = -this.props[1] / determinant1;
            var c4 = -this.props[4] / determinant1;
            var d3 = this.props[0] / determinant1;
            var e3 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant1;
            var f3 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant1;
            var inverseMatrix1 = new Matrix();
            inverseMatrix1.props[0] = a3;
            inverseMatrix1.props[1] = b3;
            inverseMatrix1.props[4] = c4;
            inverseMatrix1.props[5] = d3;
            inverseMatrix1.props[12] = e3;
            inverseMatrix1.props[13] = f3;
            return inverseMatrix1;
        }
        function inversePoint1(pt5) {
            var inverseMatrix1 = this.getInverseMatrix();
            return inverseMatrix1.applyToPointArray(pt5[0], pt5[1], pt5[2] || 0);
        }
        function inversePoints1(pts1) {
            var i3;
            var len1 = pts1.length;
            var retPts1 = [];
            for(i3 = 0; i3 < len1; i3 += 1){
                retPts1[i3] = inversePoint1(pts1[i3]);
            }
            return retPts1;
        }
        function applyToTriplePoints1(pt11, pt21, pt31) {
            var arr3 = createTypedArray("float32", 6);
            if (this.isIdentity()) {
                arr3[0] = pt11[0];
                arr3[1] = pt11[1];
                arr3[2] = pt21[0];
                arr3[3] = pt21[1];
                arr3[4] = pt31[0];
                arr3[5] = pt31[1];
            } else {
                var p01 = this.props[0];
                var p14 = this.props[1];
                var p41 = this.props[4];
                var p51 = this.props[5];
                var p121 = this.props[12];
                var p131 = this.props[13];
                arr3[0] = pt11[0] * p01 + pt11[1] * p41 + p121;
                arr3[1] = pt11[0] * p14 + pt11[1] * p51 + p131;
                arr3[2] = pt21[0] * p01 + pt21[1] * p41 + p121;
                arr3[3] = pt21[0] * p14 + pt21[1] * p51 + p131;
                arr3[4] = pt31[0] * p01 + pt31[1] * p41 + p121;
                arr3[5] = pt31[0] * p14 + pt31[1] * p51 + p131;
            }
            return arr3;
        }
        function applyToPointArray1(x4, y4, z4) {
            var arr3;
            if (this.isIdentity()) {
                arr3 = [
                    x4,
                    y4,
                    z4
                ];
            } else {
                arr3 = [
                    x4 * this.props[0] + y4 * this.props[4] + z4 * this.props[8] + this.props[12],
                    x4 * this.props[1] + y4 * this.props[5] + z4 * this.props[9] + this.props[13],
                    x4 * this.props[2] + y4 * this.props[6] + z4 * this.props[10] + this.props[14]
                ];
            }
            return arr3;
        }
        function applyToPointStringified1(x4, y4) {
            if (this.isIdentity()) {
                return x4 + "," + y4;
            }
            var _p1 = this.props;
            return Math.round((x4 * _p1[0] + y4 * _p1[4] + _p1[12]) * 100) / 100 + "," + Math.round((x4 * _p1[1] + y4 * _p1[5] + _p1[13]) * 100) / 100;
        }
        function toCSS1() {
            // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
            /* if(this.isIdentity()) {
              return '';
          } */ var i3 = 0;
            var props1 = this.props;
            var cssValue1 = "matrix3d(";
            var v5 = 10000;
            while(i3 < 16){
                cssValue1 += _rnd1(props1[i3] * v5) / v5;
                cssValue1 += i3 === 15 ? ")" : ",";
                i3 += 1;
            }
            return cssValue1;
        }
        function roundMatrixProperty1(val3) {
            var v5 = 10000;
            if (val3 < 0.000001 && val3 > 0 || val3 > -0.000001 && val3 < 0) {
                return _rnd1(val3 * v5) / v5;
            }
            return val3;
        }
        function to2dCSS1() {
            // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.
            /* if(this.isIdentity()) {
              return '';
          } */ var props1 = this.props;
            var _a1 = roundMatrixProperty1(props1[0]);
            var _b1 = roundMatrixProperty1(props1[1]);
            var _c1 = roundMatrixProperty1(props1[4]);
            var _d1 = roundMatrixProperty1(props1[5]);
            var _e1 = roundMatrixProperty1(props1[12]);
            var _f1 = roundMatrixProperty1(props1[13]);
            return "matrix(" + _a1 + "," + _b1 + "," + _c1 + "," + _d1 + "," + _e1 + "," + _f1 + ")";
        }
        return function() {
            this.reset = reset1;
            this.rotate = rotate1;
            this.rotateX = rotateX1;
            this.rotateY = rotateY1;
            this.rotateZ = rotateZ1;
            this.skew = skew1;
            this.skewFromAxis = skewFromAxis1;
            this.shear = shear1;
            this.scale = scale2;
            this.setTransform = setTransform1;
            this.translate = translate1;
            this.transform = transform1;
            this.multiply = multiply1;
            this.applyToPoint = applyToPoint1;
            this.applyToX = applyToX1;
            this.applyToY = applyToY1;
            this.applyToZ = applyToZ1;
            this.applyToPointArray = applyToPointArray1;
            this.applyToTriplePoints = applyToTriplePoints1;
            this.applyToPointStringified = applyToPointStringified1;
            this.toCSS = toCSS1;
            this.to2dCSS = to2dCSS1;
            this.clone = clone1;
            this.cloneFromProps = cloneFromProps1;
            this.equals = equals1;
            this.inversePoints = inversePoints1;
            this.inversePoint = inversePoint1;
            this.getInverseMatrix = getInverseMatrix1;
            this._t = this.transform;
            this.isIdentity = isIdentity1;
            this._identity = true;
            this._identityCalculated = false;
            this.props = createTypedArray("float32", 16);
            this.reset();
        };
    }();
    function _typeof$3(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$3 = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof$3 = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof$3(obj1);
    }
    var lottie = {};
    var standalone = "__[STANDALONE]__";
    var animationData = "__[ANIMATIONDATA]__";
    var renderer = "";
    function setLocation(href1) {
        setLocationHref(href1);
    }
    function searchAnimations() {
        if (standalone === true) {
            animationManager.searchAnimations(animationData, standalone, renderer);
        } else {
            animationManager.searchAnimations();
        }
    }
    function setSubframeRendering(flag1) {
        setSubframeEnabled(flag1);
    }
    function setPrefix(prefix1) {
        setIdPrefix(prefix1);
    }
    function loadAnimation(params1) {
        if (standalone === true) {
            params1.animationData = JSON.parse(animationData);
        }
        return animationManager.loadAnimation(params1);
    }
    function setQuality(value3) {
        if (typeof value3 === "string") {
            switch(value3){
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break;
            }
        } else if (!isNaN(value3) && value3 > 1) {
            setDefaultCurveSegments(value3);
        }
        if (getDefaultCurveSegments() >= 50) {
            roundValues(false);
        } else {
            roundValues(true);
        }
    }
    function inBrowser() {
        return typeof navigator !== "undefined";
    }
    function installPlugin(type1, plugin1) {
        if (type1 === "expressions") {
            setExpressionsPlugin(plugin1);
        }
    }
    function getFactory(name1) {
        switch(name1){
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
            default:
                return null;
        }
    }
    lottie.play = animationManager.play;
    lottie.pause = animationManager.pause;
    lottie.setLocationHref = setLocation;
    lottie.togglePause = animationManager.togglePause;
    lottie.setSpeed = animationManager.setSpeed;
    lottie.setDirection = animationManager.setDirection;
    lottie.stop = animationManager.stop;
    lottie.searchAnimations = searchAnimations;
    lottie.registerAnimation = animationManager.registerAnimation;
    lottie.loadAnimation = loadAnimation;
    lottie.setSubframeRendering = setSubframeRendering;
    lottie.resize = animationManager.resize; // lottie.start = start;
    lottie.goToAndStop = animationManager.goToAndStop;
    lottie.destroy = animationManager.destroy;
    lottie.setQuality = setQuality;
    lottie.inBrowser = inBrowser;
    lottie.installPlugin = installPlugin;
    lottie.freeze = animationManager.freeze;
    lottie.unfreeze = animationManager.unfreeze;
    lottie.setVolume = animationManager.setVolume;
    lottie.mute = animationManager.mute;
    lottie.unmute = animationManager.unmute;
    lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
    lottie.useWebWorker = setWebWorker;
    lottie.setIDPrefix = setPrefix;
    lottie.__getFactory = getFactory;
    lottie.version = "5.12.2";
    function checkReady() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            searchAnimations();
        }
    }
    function getQueryVariable(variable1) {
        var vars1 = queryString.split("&");
        for(var i3 = 0; i3 < vars1.length; i3 += 1){
            var pair1 = vars1[i3].split("=");
            if (decodeURIComponent(pair1[0]) == variable1) {
                // eslint-disable-line eqeqeq
                return decodeURIComponent(pair1[1]);
            }
        }
        return null;
    }
    var queryString = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script");
        var index = scripts.length - 1;
        var myScript = scripts[index] || {
            src: ""
        };
        queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : ""; // eslint-disable-line no-useless-escape
        renderer = getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100); // this adds bodymovin to the window object for backwards compatibility
    try {
        if (!(( false ? 0 : _typeof$3(exports)) === "object" && "object" !== "undefined") && !( true && __webpack_require__.amdO // eslint-disable-line no-undef
        )) {}
    } catch (err) {}
    var ShapeModifiers = function() {
        var ob1 = {};
        var modifiers1 = {};
        ob1.registerModifier = registerModifier1;
        ob1.getModifier = getModifier1;
        function registerModifier1(nm1, factory1) {
            if (!modifiers1[nm1]) {
                modifiers1[nm1] = factory1;
            }
        }
        function getModifier1(nm1, elem3, data1) {
            return new modifiers1[nm1](elem3, data1);
        }
        return ob1;
    }();
    function ShapeModifier() {}
    ShapeModifier.prototype.initModifierProperties = function() {};
    ShapeModifier.prototype.addShapeToModifier = function() {};
    ShapeModifier.prototype.addShape = function(data1) {
        if (!this.closed) {
            // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
            data1.sh.container.addDynamicProperty(data1.sh);
            var shapeData1 = {
                shape: data1.sh,
                data: data1,
                localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(shapeData1);
            this.addShapeToModifier(shapeData1);
            if (this._isAnimated) {
                data1.setAsAnimated();
            }
        }
    };
    ShapeModifier.prototype.init = function(elem3, data1) {
        this.shapes = [];
        this.elem = elem3;
        this.initDynamicPropertyContainer(elem3);
        this.initModifierProperties(elem3, data1);
        this.frameId = initialDefaultFrame;
        this.closed = false;
        this.k = false;
        if (this.dynamicProperties.length) {
            this.k = true;
        } else {
            this.getValue(true);
        }
    };
    ShapeModifier.prototype.processKeys = function() {
        if (this.elem.globalData.frameId === this.frameId) {
            return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
    };
    extendPrototype([
        DynamicPropertyContainer
    ], ShapeModifier);
    function TrimModifier() {}
    extendPrototype([
        ShapeModifier
    ], TrimModifier);
    TrimModifier.prototype.initModifierProperties = function(elem3, data1) {
        this.s = PropertyFactory.getProp(elem3, data1.s, 0, 0.01, this);
        this.e = PropertyFactory.getProp(elem3, data1.e, 0, 0.01, this);
        this.o = PropertyFactory.getProp(elem3, data1.o, 0, 0, this);
        this.sValue = 0;
        this.eValue = 0;
        this.getValue = this.processKeys;
        this.m = data1.m;
        this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    };
    TrimModifier.prototype.addShapeToModifier = function(shapeData1) {
        shapeData1.pathsData = [];
    };
    TrimModifier.prototype.calculateShapeEdges = function(s4, e3, shapeLength1, addedLength1, totalModifierLength1) {
        var segments1 = [];
        if (e3 <= 1) {
            segments1.push({
                s: s4,
                e: e3
            });
        } else if (s4 >= 1) {
            segments1.push({
                s: s4 - 1,
                e: e3 - 1
            });
        } else {
            segments1.push({
                s: s4,
                e: 1
            });
            segments1.push({
                s: 0,
                e: e3 - 1
            });
        }
        var shapeSegments1 = [];
        var i3;
        var len1 = segments1.length;
        var segmentOb1;
        for(i3 = 0; i3 < len1; i3 += 1){
            segmentOb1 = segments1[i3];
            if (!(segmentOb1.e * totalModifierLength1 < addedLength1 || segmentOb1.s * totalModifierLength1 > addedLength1 + shapeLength1)) {
                var shapeS1;
                var shapeE1;
                if (segmentOb1.s * totalModifierLength1 <= addedLength1) {
                    shapeS1 = 0;
                } else {
                    shapeS1 = (segmentOb1.s * totalModifierLength1 - addedLength1) / shapeLength1;
                }
                if (segmentOb1.e * totalModifierLength1 >= addedLength1 + shapeLength1) {
                    shapeE1 = 1;
                } else {
                    shapeE1 = (segmentOb1.e * totalModifierLength1 - addedLength1) / shapeLength1;
                }
                shapeSegments1.push([
                    shapeS1,
                    shapeE1
                ]);
            }
        }
        if (!shapeSegments1.length) {
            shapeSegments1.push([
                0,
                0
            ]);
        }
        return shapeSegments1;
    };
    TrimModifier.prototype.releasePathsData = function(pathsData1) {
        var i3;
        var len1 = pathsData1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            segmentsLengthPool.release(pathsData1[i3]);
        }
        pathsData1.length = 0;
        return pathsData1;
    };
    TrimModifier.prototype.processShapes = function(_isFirstFrame1) {
        var s4;
        var e3;
        if (this._mdf || _isFirstFrame1) {
            var o3 = this.o.v % 360 / 360;
            if (o3 < 0) {
                o3 += 1;
            }
            if (this.s.v > 1) {
                s4 = 1 + o3;
            } else if (this.s.v < 0) {
                s4 = 0 + o3;
            } else {
                s4 = this.s.v + o3;
            }
            if (this.e.v > 1) {
                e3 = 1 + o3;
            } else if (this.e.v < 0) {
                e3 = 0 + o3;
            } else {
                e3 = this.e.v + o3;
            }
            if (s4 > e3) {
                var _s1 = s4;
                s4 = e3;
                e3 = _s1;
            }
            s4 = Math.round(s4 * 10000) * 0.0001;
            e3 = Math.round(e3 * 10000) * 0.0001;
            this.sValue = s4;
            this.eValue = e3;
        } else {
            s4 = this.sValue;
            e3 = this.eValue;
        }
        var shapePaths1;
        var i3;
        var len1 = this.shapes.length;
        var j3;
        var jLen1;
        var pathsData1;
        var pathData1;
        var totalShapeLength1;
        var totalModifierLength1 = 0;
        if (e3 === s4) {
            for(i3 = 0; i3 < len1; i3 += 1){
                this.shapes[i3].localShapeCollection.releaseShapes();
                this.shapes[i3].shape._mdf = true;
                this.shapes[i3].shape.paths = this.shapes[i3].localShapeCollection;
                if (this._mdf) {
                    this.shapes[i3].pathsData.length = 0;
                }
            }
        } else if (!(e3 === 1 && s4 === 0 || e3 === 0 && s4 === 1)) {
            var segments1 = [];
            var shapeData1;
            var localShapeCollection1;
            for(i3 = 0; i3 < len1; i3 += 1){
                shapeData1 = this.shapes[i3]; // if shape hasn't changed and trim properties haven't changed, cached previous path can be used
                if (!shapeData1.shape._mdf && !this._mdf && !_isFirstFrame1 && this.m !== 2) {
                    shapeData1.shape.paths = shapeData1.localShapeCollection;
                } else {
                    shapePaths1 = shapeData1.shape.paths;
                    jLen1 = shapePaths1._length;
                    totalShapeLength1 = 0;
                    if (!shapeData1.shape._mdf && shapeData1.pathsData.length) {
                        totalShapeLength1 = shapeData1.totalShapeLength;
                    } else {
                        pathsData1 = this.releasePathsData(shapeData1.pathsData);
                        for(j3 = 0; j3 < jLen1; j3 += 1){
                            pathData1 = bez.getSegmentsLength(shapePaths1.shapes[j3]);
                            pathsData1.push(pathData1);
                            totalShapeLength1 += pathData1.totalLength;
                        }
                        shapeData1.totalShapeLength = totalShapeLength1;
                        shapeData1.pathsData = pathsData1;
                    }
                    totalModifierLength1 += totalShapeLength1;
                    shapeData1.shape._mdf = true;
                }
            }
            var shapeS1 = s4;
            var shapeE1 = e3;
            var addedLength1 = 0;
            var edges1;
            for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                shapeData1 = this.shapes[i3];
                if (shapeData1.shape._mdf) {
                    localShapeCollection1 = shapeData1.localShapeCollection;
                    localShapeCollection1.releaseShapes(); // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group
                    if (this.m === 2 && len1 > 1) {
                        edges1 = this.calculateShapeEdges(s4, e3, shapeData1.totalShapeLength, addedLength1, totalModifierLength1);
                        addedLength1 += shapeData1.totalShapeLength;
                    } else {
                        edges1 = [
                            [
                                shapeS1,
                                shapeE1
                            ]
                        ];
                    }
                    jLen1 = edges1.length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        shapeS1 = edges1[j3][0];
                        shapeE1 = edges1[j3][1];
                        segments1.length = 0;
                        if (shapeE1 <= 1) {
                            segments1.push({
                                s: shapeData1.totalShapeLength * shapeS1,
                                e: shapeData1.totalShapeLength * shapeE1
                            });
                        } else if (shapeS1 >= 1) {
                            segments1.push({
                                s: shapeData1.totalShapeLength * (shapeS1 - 1),
                                e: shapeData1.totalShapeLength * (shapeE1 - 1)
                            });
                        } else {
                            segments1.push({
                                s: shapeData1.totalShapeLength * shapeS1,
                                e: shapeData1.totalShapeLength
                            });
                            segments1.push({
                                s: 0,
                                e: shapeData1.totalShapeLength * (shapeE1 - 1)
                            });
                        }
                        var newShapesData1 = this.addShapes(shapeData1, segments1[0]);
                        if (segments1[0].s !== segments1[0].e) {
                            if (segments1.length > 1) {
                                var lastShapeInCollection1 = shapeData1.shape.paths.shapes[shapeData1.shape.paths._length - 1];
                                if (lastShapeInCollection1.c) {
                                    var lastShape1 = newShapesData1.pop();
                                    this.addPaths(newShapesData1, localShapeCollection1);
                                    newShapesData1 = this.addShapes(shapeData1, segments1[1], lastShape1);
                                } else {
                                    this.addPaths(newShapesData1, localShapeCollection1);
                                    newShapesData1 = this.addShapes(shapeData1, segments1[1]);
                                }
                            }
                            this.addPaths(newShapesData1, localShapeCollection1);
                        }
                    }
                    shapeData1.shape.paths = localShapeCollection1;
                }
            }
        } else if (this._mdf) {
            for(i3 = 0; i3 < len1; i3 += 1){
                // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
                // Don't remove this even if it's losing cached info.
                this.shapes[i3].pathsData.length = 0;
                this.shapes[i3].shape._mdf = true;
            }
        }
    };
    TrimModifier.prototype.addPaths = function(newPaths1, localShapeCollection1) {
        var i3;
        var len1 = newPaths1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            localShapeCollection1.addShape(newPaths1[i3]);
        }
    };
    TrimModifier.prototype.addSegment = function(pt11, pt21, pt31, pt41, shapePath1, pos1, newShape1) {
        shapePath1.setXYAt(pt21[0], pt21[1], "o", pos1);
        shapePath1.setXYAt(pt31[0], pt31[1], "i", pos1 + 1);
        if (newShape1) {
            shapePath1.setXYAt(pt11[0], pt11[1], "v", pos1);
        }
        shapePath1.setXYAt(pt41[0], pt41[1], "v", pos1 + 1);
    };
    TrimModifier.prototype.addSegmentFromArray = function(points1, shapePath1, pos1, newShape1) {
        shapePath1.setXYAt(points1[1], points1[5], "o", pos1);
        shapePath1.setXYAt(points1[2], points1[6], "i", pos1 + 1);
        if (newShape1) {
            shapePath1.setXYAt(points1[0], points1[4], "v", pos1);
        }
        shapePath1.setXYAt(points1[3], points1[7], "v", pos1 + 1);
    };
    TrimModifier.prototype.addShapes = function(shapeData1, shapeSegment1, shapePath1) {
        var pathsData1 = shapeData1.pathsData;
        var shapePaths1 = shapeData1.shape.paths.shapes;
        var i3;
        var len1 = shapeData1.shape.paths._length;
        var j3;
        var jLen1;
        var addedLength1 = 0;
        var currentLengthData1;
        var segmentCount1;
        var lengths1;
        var segment1;
        var shapes1 = [];
        var initPos1;
        var newShape1 = true;
        if (!shapePath1) {
            shapePath1 = shapePool.newElement();
            segmentCount1 = 0;
            initPos1 = 0;
        } else {
            segmentCount1 = shapePath1._length;
            initPos1 = shapePath1._length;
        }
        shapes1.push(shapePath1);
        for(i3 = 0; i3 < len1; i3 += 1){
            lengths1 = pathsData1[i3].lengths;
            shapePath1.c = shapePaths1[i3].c;
            jLen1 = shapePaths1[i3].c ? lengths1.length : lengths1.length + 1;
            for(j3 = 1; j3 < jLen1; j3 += 1){
                currentLengthData1 = lengths1[j3 - 1];
                if (addedLength1 + currentLengthData1.addedLength < shapeSegment1.s) {
                    addedLength1 += currentLengthData1.addedLength;
                    shapePath1.c = false;
                } else if (addedLength1 > shapeSegment1.e) {
                    shapePath1.c = false;
                    break;
                } else {
                    if (shapeSegment1.s <= addedLength1 && shapeSegment1.e >= addedLength1 + currentLengthData1.addedLength) {
                        this.addSegment(shapePaths1[i3].v[j3 - 1], shapePaths1[i3].o[j3 - 1], shapePaths1[i3].i[j3], shapePaths1[i3].v[j3], shapePath1, segmentCount1, newShape1);
                        newShape1 = false;
                    } else {
                        segment1 = bez.getNewSegment(shapePaths1[i3].v[j3 - 1], shapePaths1[i3].v[j3], shapePaths1[i3].o[j3 - 1], shapePaths1[i3].i[j3], (shapeSegment1.s - addedLength1) / currentLengthData1.addedLength, (shapeSegment1.e - addedLength1) / currentLengthData1.addedLength, lengths1[j3 - 1]);
                        this.addSegmentFromArray(segment1, shapePath1, segmentCount1, newShape1); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
                        newShape1 = false;
                        shapePath1.c = false;
                    }
                    addedLength1 += currentLengthData1.addedLength;
                    segmentCount1 += 1;
                }
            }
            if (shapePaths1[i3].c && lengths1.length) {
                currentLengthData1 = lengths1[j3 - 1];
                if (addedLength1 <= shapeSegment1.e) {
                    var segmentLength1 = lengths1[j3 - 1].addedLength;
                    if (shapeSegment1.s <= addedLength1 && shapeSegment1.e >= addedLength1 + segmentLength1) {
                        this.addSegment(shapePaths1[i3].v[j3 - 1], shapePaths1[i3].o[j3 - 1], shapePaths1[i3].i[0], shapePaths1[i3].v[0], shapePath1, segmentCount1, newShape1);
                        newShape1 = false;
                    } else {
                        segment1 = bez.getNewSegment(shapePaths1[i3].v[j3 - 1], shapePaths1[i3].v[0], shapePaths1[i3].o[j3 - 1], shapePaths1[i3].i[0], (shapeSegment1.s - addedLength1) / segmentLength1, (shapeSegment1.e - addedLength1) / segmentLength1, lengths1[j3 - 1]);
                        this.addSegmentFromArray(segment1, shapePath1, segmentCount1, newShape1); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);
                        newShape1 = false;
                        shapePath1.c = false;
                    }
                } else {
                    shapePath1.c = false;
                }
                addedLength1 += currentLengthData1.addedLength;
                segmentCount1 += 1;
            }
            if (shapePath1._length) {
                shapePath1.setXYAt(shapePath1.v[initPos1][0], shapePath1.v[initPos1][1], "i", initPos1);
                shapePath1.setXYAt(shapePath1.v[shapePath1._length - 1][0], shapePath1.v[shapePath1._length - 1][1], "o", shapePath1._length - 1);
            }
            if (addedLength1 > shapeSegment1.e) {
                break;
            }
            if (i3 < len1 - 1) {
                shapePath1 = shapePool.newElement();
                newShape1 = true;
                shapes1.push(shapePath1);
                segmentCount1 = 0;
            }
        }
        return shapes1;
    };
    function PuckerAndBloatModifier() {}
    extendPrototype([
        ShapeModifier
    ], PuckerAndBloatModifier);
    PuckerAndBloatModifier.prototype.initModifierProperties = function(elem3, data1) {
        this.getValue = this.processKeys;
        this.amount = PropertyFactory.getProp(elem3, data1.a, 0, null, this);
        this._isAnimated = !!this.amount.effectsSequence.length;
    };
    PuckerAndBloatModifier.prototype.processPath = function(path1, amount1) {
        var percent1 = amount1 / 100;
        var centerPoint1 = [
            0,
            0
        ];
        var pathLength1 = path1._length;
        var i3 = 0;
        for(i3 = 0; i3 < pathLength1; i3 += 1){
            centerPoint1[0] += path1.v[i3][0];
            centerPoint1[1] += path1.v[i3][1];
        }
        centerPoint1[0] /= pathLength1;
        centerPoint1[1] /= pathLength1;
        var clonedPath1 = shapePool.newElement();
        clonedPath1.c = path1.c;
        var vX1;
        var vY1;
        var oX1;
        var oY1;
        var iX1;
        var iY1;
        for(i3 = 0; i3 < pathLength1; i3 += 1){
            vX1 = path1.v[i3][0] + (centerPoint1[0] - path1.v[i3][0]) * percent1;
            vY1 = path1.v[i3][1] + (centerPoint1[1] - path1.v[i3][1]) * percent1;
            oX1 = path1.o[i3][0] + (centerPoint1[0] - path1.o[i3][0]) * -percent1;
            oY1 = path1.o[i3][1] + (centerPoint1[1] - path1.o[i3][1]) * -percent1;
            iX1 = path1.i[i3][0] + (centerPoint1[0] - path1.i[i3][0]) * -percent1;
            iY1 = path1.i[i3][1] + (centerPoint1[1] - path1.i[i3][1]) * -percent1;
            clonedPath1.setTripleAt(vX1, vY1, oX1, oY1, iX1, iY1, i3);
        }
        return clonedPath1;
    };
    PuckerAndBloatModifier.prototype.processShapes = function(_isFirstFrame1) {
        var shapePaths1;
        var i3;
        var len1 = this.shapes.length;
        var j3;
        var jLen1;
        var amount1 = this.amount.v;
        if (amount1 !== 0) {
            var shapeData1;
            var localShapeCollection1;
            for(i3 = 0; i3 < len1; i3 += 1){
                shapeData1 = this.shapes[i3];
                localShapeCollection1 = shapeData1.localShapeCollection;
                if (!(!shapeData1.shape._mdf && !this._mdf && !_isFirstFrame1)) {
                    localShapeCollection1.releaseShapes();
                    shapeData1.shape._mdf = true;
                    shapePaths1 = shapeData1.shape.paths.shapes;
                    jLen1 = shapeData1.shape.paths._length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        localShapeCollection1.addShape(this.processPath(shapePaths1[j3], amount1));
                    }
                }
                shapeData1.shape.paths = shapeData1.localShapeCollection;
            }
        }
        if (!this.dynamicProperties.length) {
            this._mdf = false;
        }
    };
    var TransformPropertyFactory = function() {
        var defaultVector1 = [
            0,
            0
        ];
        function applyToMatrix1(mat1) {
            var _mdf1 = this._mdf;
            this.iterateDynamicProperties();
            this._mdf = this._mdf || _mdf1;
            if (this.a) {
                mat1.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
            }
            if (this.s) {
                mat1.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
            }
            if (this.sk) {
                mat1.skewFromAxis(-this.sk.v, this.sa.v);
            }
            if (this.r) {
                mat1.rotate(-this.r.v);
            } else {
                mat1.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
            }
            if (this.data.p.s) {
                if (this.data.p.z) {
                    mat1.translate(this.px.v, this.py.v, -this.pz.v);
                } else {
                    mat1.translate(this.px.v, this.py.v, 0);
                }
            } else {
                mat1.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
        }
        function processKeys1(forceRender1) {
            if (this.elem.globalData.frameId === this.frameId) {
                return;
            }
            if (this._isDirty) {
                this.precalculateMatrix();
                this._isDirty = false;
            }
            this.iterateDynamicProperties();
            if (this._mdf || forceRender1) {
                var frameRate1;
                this.v.cloneFromProps(this.pre.props);
                if (this.appliedTransformations < 1) {
                    this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                }
                if (this.appliedTransformations < 2) {
                    this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    this.v.skewFromAxis(-this.sk.v, this.sa.v);
                }
                if (this.r && this.appliedTransformations < 4) {
                    this.v.rotate(-this.r.v);
                } else if (!this.r && this.appliedTransformations < 4) {
                    this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                }
                if (this.autoOriented) {
                    var v11;
                    var v21;
                    frameRate1 = this.elem.globalData.frameRate;
                    if (this.p && this.p.keyframes && this.p.getValueAtTime) {
                        if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
                            v11 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate1, 0);
                            v21 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate1, 0);
                        } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
                            v11 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate1, 0);
                            v21 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate1, 0);
                        } else {
                            v11 = this.p.pv;
                            v21 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate1, this.p.offsetTime);
                        }
                    } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                        v11 = [];
                        v21 = [];
                        var px1 = this.px;
                        var py1 = this.py;
                        if (px1._caching.lastFrame + px1.offsetTime <= px1.keyframes[0].t) {
                            v11[0] = px1.getValueAtTime((px1.keyframes[0].t + 0.01) / frameRate1, 0);
                            v11[1] = py1.getValueAtTime((py1.keyframes[0].t + 0.01) / frameRate1, 0);
                            v21[0] = px1.getValueAtTime(px1.keyframes[0].t / frameRate1, 0);
                            v21[1] = py1.getValueAtTime(py1.keyframes[0].t / frameRate1, 0);
                        } else if (px1._caching.lastFrame + px1.offsetTime >= px1.keyframes[px1.keyframes.length - 1].t) {
                            v11[0] = px1.getValueAtTime(px1.keyframes[px1.keyframes.length - 1].t / frameRate1, 0);
                            v11[1] = py1.getValueAtTime(py1.keyframes[py1.keyframes.length - 1].t / frameRate1, 0);
                            v21[0] = px1.getValueAtTime((px1.keyframes[px1.keyframes.length - 1].t - 0.01) / frameRate1, 0);
                            v21[1] = py1.getValueAtTime((py1.keyframes[py1.keyframes.length - 1].t - 0.01) / frameRate1, 0);
                        } else {
                            v11 = [
                                px1.pv,
                                py1.pv
                            ];
                            v21[0] = px1.getValueAtTime((px1._caching.lastFrame + px1.offsetTime - 0.01) / frameRate1, px1.offsetTime);
                            v21[1] = py1.getValueAtTime((py1._caching.lastFrame + py1.offsetTime - 0.01) / frameRate1, py1.offsetTime);
                        }
                    } else {
                        v21 = defaultVector1;
                        v11 = v21;
                    }
                    this.v.rotate(-Math.atan2(v11[1] - v21[1], v11[0] - v21[0]));
                }
                if (this.data.p && this.data.p.s) {
                    if (this.data.p.z) {
                        this.v.translate(this.px.v, this.py.v, -this.pz.v);
                    } else {
                        this.v.translate(this.px.v, this.py.v, 0);
                    }
                } else {
                    this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                }
            }
            this.frameId = this.elem.globalData.frameId;
        }
        function precalculateMatrix1() {
            this.appliedTransformations = 0;
            this.pre.reset();
            if (!this.a.effectsSequence.length) {
                this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
                this.appliedTransformations = 1;
            } else {
                return;
            }
            if (!this.s.effectsSequence.length) {
                this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
                this.appliedTransformations = 2;
            } else {
                return;
            }
            if (this.sk) {
                if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
                    this.pre.skewFromAxis(-this.sk.v, this.sa.v);
                    this.appliedTransformations = 3;
                } else {
                    return;
                }
            }
            if (this.r) {
                if (!this.r.effectsSequence.length) {
                    this.pre.rotate(-this.r.v);
                    this.appliedTransformations = 4;
                }
            } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
                this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
                this.appliedTransformations = 4;
            }
        }
        function autoOrient1() {
        // var prevP = this.getValueAtTime();
        }
        function addDynamicProperty1(prop1) {
            this._addDynamicProperty(prop1);
            this.elem.addDynamicProperty(prop1);
            this._isDirty = true;
        }
        function TransformProperty1(elem3, data1, container1) {
            this.elem = elem3;
            this.frameId = -1;
            this.propType = "transform";
            this.data = data1;
            this.v = new Matrix(); // Precalculated matrix with non animated properties
            this.pre = new Matrix();
            this.appliedTransformations = 0;
            this.initDynamicPropertyContainer(container1 || elem3);
            if (data1.p && data1.p.s) {
                this.px = PropertyFactory.getProp(elem3, data1.p.x, 0, 0, this);
                this.py = PropertyFactory.getProp(elem3, data1.p.y, 0, 0, this);
                if (data1.p.z) {
                    this.pz = PropertyFactory.getProp(elem3, data1.p.z, 0, 0, this);
                }
            } else {
                this.p = PropertyFactory.getProp(elem3, data1.p || {
                    k: [
                        0,
                        0,
                        0
                    ]
                }, 1, 0, this);
            }
            if (data1.rx) {
                this.rx = PropertyFactory.getProp(elem3, data1.rx, 0, degToRads, this);
                this.ry = PropertyFactory.getProp(elem3, data1.ry, 0, degToRads, this);
                this.rz = PropertyFactory.getProp(elem3, data1.rz, 0, degToRads, this);
                if (data1.or.k[0].ti) {
                    var i3;
                    var len1 = data1.or.k.length;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        data1.or.k[i3].to = null;
                        data1.or.k[i3].ti = null;
                    }
                }
                this.or = PropertyFactory.getProp(elem3, data1.or, 1, degToRads, this); // sh Indicates it needs to be capped between -180 and 180
                this.or.sh = true;
            } else {
                this.r = PropertyFactory.getProp(elem3, data1.r || {
                    k: 0
                }, 0, degToRads, this);
            }
            if (data1.sk) {
                this.sk = PropertyFactory.getProp(elem3, data1.sk, 0, degToRads, this);
                this.sa = PropertyFactory.getProp(elem3, data1.sa, 0, degToRads, this);
            }
            this.a = PropertyFactory.getProp(elem3, data1.a || {
                k: [
                    0,
                    0,
                    0
                ]
            }, 1, 0, this);
            this.s = PropertyFactory.getProp(elem3, data1.s || {
                k: [
                    100,
                    100,
                    100
                ]
            }, 1, 0.01, this); // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.
            if (data1.o) {
                this.o = PropertyFactory.getProp(elem3, data1.o, 0, 0.01, elem3);
            } else {
                this.o = {
                    _mdf: false,
                    v: 1
                };
            }
            this._isDirty = true;
            if (!this.dynamicProperties.length) {
                this.getValue(true);
            }
        }
        TransformProperty1.prototype = {
            applyToMatrix: applyToMatrix1,
            getValue: processKeys1,
            precalculateMatrix: precalculateMatrix1,
            autoOrient: autoOrient1
        };
        extendPrototype([
            DynamicPropertyContainer
        ], TransformProperty1);
        TransformProperty1.prototype.addDynamicProperty = addDynamicProperty1;
        TransformProperty1.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
        function getTransformProperty1(elem3, data1, container1) {
            return new TransformProperty1(elem3, data1, container1);
        }
        return {
            getTransformProperty: getTransformProperty1
        };
    }();
    function RepeaterModifier() {}
    extendPrototype([
        ShapeModifier
    ], RepeaterModifier);
    RepeaterModifier.prototype.initModifierProperties = function(elem3, data1) {
        this.getValue = this.processKeys;
        this.c = PropertyFactory.getProp(elem3, data1.c, 0, null, this);
        this.o = PropertyFactory.getProp(elem3, data1.o, 0, null, this);
        this.tr = TransformPropertyFactory.getTransformProperty(elem3, data1.tr, this);
        this.so = PropertyFactory.getProp(elem3, data1.tr.so, 0, 0.01, this);
        this.eo = PropertyFactory.getProp(elem3, data1.tr.eo, 0, 0.01, this);
        this.data = data1;
        if (!this.dynamicProperties.length) {
            this.getValue(true);
        }
        this._isAnimated = !!this.dynamicProperties.length;
        this.pMatrix = new Matrix();
        this.rMatrix = new Matrix();
        this.sMatrix = new Matrix();
        this.tMatrix = new Matrix();
        this.matrix = new Matrix();
    };
    RepeaterModifier.prototype.applyTransforms = function(pMatrix1, rMatrix1, sMatrix1, transform1, perc1, inv1) {
        var dir1 = inv1 ? -1 : 1;
        var scaleX1 = transform1.s.v[0] + (1 - transform1.s.v[0]) * (1 - perc1);
        var scaleY1 = transform1.s.v[1] + (1 - transform1.s.v[1]) * (1 - perc1);
        pMatrix1.translate(transform1.p.v[0] * dir1 * perc1, transform1.p.v[1] * dir1 * perc1, transform1.p.v[2]);
        rMatrix1.translate(-transform1.a.v[0], -transform1.a.v[1], transform1.a.v[2]);
        rMatrix1.rotate(-transform1.r.v * dir1 * perc1);
        rMatrix1.translate(transform1.a.v[0], transform1.a.v[1], transform1.a.v[2]);
        sMatrix1.translate(-transform1.a.v[0], -transform1.a.v[1], transform1.a.v[2]);
        sMatrix1.scale(inv1 ? 1 / scaleX1 : scaleX1, inv1 ? 1 / scaleY1 : scaleY1);
        sMatrix1.translate(transform1.a.v[0], transform1.a.v[1], transform1.a.v[2]);
    };
    RepeaterModifier.prototype.init = function(elem3, arr3, pos1, elemsData1) {
        this.elem = elem3;
        this.arr = arr3;
        this.pos = pos1;
        this.elemsData = elemsData1;
        this._currentCopies = 0;
        this._elements = [];
        this._groups = [];
        this.frameId = -1;
        this.initDynamicPropertyContainer(elem3);
        this.initModifierProperties(elem3, arr3[pos1]);
        while(pos1 > 0){
            pos1 -= 1; // this._elements.unshift(arr.splice(pos,1)[0]);
            this._elements.unshift(arr3[pos1]);
        }
        if (this.dynamicProperties.length) {
            this.k = true;
        } else {
            this.getValue(true);
        }
    };
    RepeaterModifier.prototype.resetElements = function(elements1) {
        var i3;
        var len1 = elements1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            elements1[i3]._processed = false;
            if (elements1[i3].ty === "gr") {
                this.resetElements(elements1[i3].it);
            }
        }
    };
    RepeaterModifier.prototype.cloneElements = function(elements1) {
        var newElements1 = JSON.parse(JSON.stringify(elements1));
        this.resetElements(newElements1);
        return newElements1;
    };
    RepeaterModifier.prototype.changeGroupRender = function(elements1, renderFlag1) {
        var i3;
        var len1 = elements1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            elements1[i3]._render = renderFlag1;
            if (elements1[i3].ty === "gr") {
                this.changeGroupRender(elements1[i3].it, renderFlag1);
            }
        }
    };
    RepeaterModifier.prototype.processShapes = function(_isFirstFrame1) {
        var items1;
        var itemsTransform1;
        var i3;
        var dir1;
        var cont1;
        var hasReloaded1 = false;
        if (this._mdf || _isFirstFrame1) {
            var copies1 = Math.ceil(this.c.v);
            if (this._groups.length < copies1) {
                while(this._groups.length < copies1){
                    var group1 = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                    };
                    group1.it.push({
                        a: {
                            a: 0,
                            ix: 1,
                            k: [
                                0,
                                0
                            ]
                        },
                        nm: "Transform",
                        o: {
                            a: 0,
                            ix: 7,
                            k: 100
                        },
                        p: {
                            a: 0,
                            ix: 2,
                            k: [
                                0,
                                0
                            ]
                        },
                        r: {
                            a: 1,
                            ix: 6,
                            k: [
                                {
                                    s: 0,
                                    e: 0,
                                    t: 0
                                },
                                {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }
                            ]
                        },
                        s: {
                            a: 0,
                            ix: 3,
                            k: [
                                100,
                                100
                            ]
                        },
                        sa: {
                            a: 0,
                            ix: 5,
                            k: 0
                        },
                        sk: {
                            a: 0,
                            ix: 4,
                            k: 0
                        },
                        ty: "tr"
                    });
                    this.arr.splice(0, 0, group1);
                    this._groups.splice(0, 0, group1);
                    this._currentCopies += 1;
                }
                this.elem.reloadShapes();
                hasReloaded1 = true;
            }
            cont1 = 0;
            var renderFlag1;
            for(i3 = 0; i3 <= this._groups.length - 1; i3 += 1){
                renderFlag1 = cont1 < copies1;
                this._groups[i3]._render = renderFlag1;
                this.changeGroupRender(this._groups[i3].it, renderFlag1);
                if (!renderFlag1) {
                    var elems1 = this.elemsData[i3].it;
                    var transformData1 = elems1[elems1.length - 1];
                    if (transformData1.transform.op.v !== 0) {
                        transformData1.transform.op._mdf = true;
                        transformData1.transform.op.v = 0;
                    } else {
                        transformData1.transform.op._mdf = false;
                    }
                }
                cont1 += 1;
            }
            this._currentCopies = copies1; /// /
            var offset1 = this.o.v;
            var offsetModulo1 = offset1 % 1;
            var roundOffset1 = offset1 > 0 ? Math.floor(offset1) : Math.ceil(offset1);
            var pProps1 = this.pMatrix.props;
            var rProps1 = this.rMatrix.props;
            var sProps1 = this.sMatrix.props;
            this.pMatrix.reset();
            this.rMatrix.reset();
            this.sMatrix.reset();
            this.tMatrix.reset();
            this.matrix.reset();
            var iteration1 = 0;
            if (offset1 > 0) {
                while(iteration1 < roundOffset1){
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                    iteration1 += 1;
                }
                if (offsetModulo1) {
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo1, false);
                    iteration1 += offsetModulo1;
                }
            } else if (offset1 < 0) {
                while(iteration1 > roundOffset1){
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
                    iteration1 -= 1;
                }
                if (offsetModulo1) {
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo1, true);
                    iteration1 -= offsetModulo1;
                }
            }
            i3 = this.data.m === 1 ? 0 : this._currentCopies - 1;
            dir1 = this.data.m === 1 ? 1 : -1;
            cont1 = this._currentCopies;
            var j3;
            var jLen1;
            while(cont1){
                items1 = this.elemsData[i3].it;
                itemsTransform1 = items1[items1.length - 1].transform.mProps.v.props;
                jLen1 = itemsTransform1.length;
                items1[items1.length - 1].transform.mProps._mdf = true;
                items1[items1.length - 1].transform.op._mdf = true;
                items1[items1.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i3 / (this._currentCopies - 1));
                if (iteration1 !== 0) {
                    if (i3 !== 0 && dir1 === 1 || i3 !== this._currentCopies - 1 && dir1 === -1) {
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
                    }
                    this.matrix.transform(rProps1[0], rProps1[1], rProps1[2], rProps1[3], rProps1[4], rProps1[5], rProps1[6], rProps1[7], rProps1[8], rProps1[9], rProps1[10], rProps1[11], rProps1[12], rProps1[13], rProps1[14], rProps1[15]);
                    this.matrix.transform(sProps1[0], sProps1[1], sProps1[2], sProps1[3], sProps1[4], sProps1[5], sProps1[6], sProps1[7], sProps1[8], sProps1[9], sProps1[10], sProps1[11], sProps1[12], sProps1[13], sProps1[14], sProps1[15]);
                    this.matrix.transform(pProps1[0], pProps1[1], pProps1[2], pProps1[3], pProps1[4], pProps1[5], pProps1[6], pProps1[7], pProps1[8], pProps1[9], pProps1[10], pProps1[11], pProps1[12], pProps1[13], pProps1[14], pProps1[15]);
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        itemsTransform1[j3] = this.matrix.props[j3];
                    }
                    this.matrix.reset();
                } else {
                    this.matrix.reset();
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        itemsTransform1[j3] = this.matrix.props[j3];
                    }
                }
                iteration1 += 1;
                cont1 -= 1;
                i3 += dir1;
            }
        } else {
            cont1 = this._currentCopies;
            i3 = 0;
            dir1 = 1;
            while(cont1){
                items1 = this.elemsData[i3].it;
                itemsTransform1 = items1[items1.length - 1].transform.mProps.v.props;
                items1[items1.length - 1].transform.mProps._mdf = false;
                items1[items1.length - 1].transform.op._mdf = false;
                cont1 -= 1;
                i3 += dir1;
            }
        }
        return hasReloaded1;
    };
    RepeaterModifier.prototype.addShape = function() {};
    function RoundCornersModifier() {}
    extendPrototype([
        ShapeModifier
    ], RoundCornersModifier);
    RoundCornersModifier.prototype.initModifierProperties = function(elem3, data1) {
        this.getValue = this.processKeys;
        this.rd = PropertyFactory.getProp(elem3, data1.r, 0, null, this);
        this._isAnimated = !!this.rd.effectsSequence.length;
    };
    RoundCornersModifier.prototype.processPath = function(path1, round1) {
        var clonedPath1 = shapePool.newElement();
        clonedPath1.c = path1.c;
        var i3;
        var len1 = path1._length;
        var currentV1;
        var currentI1;
        var currentO1;
        var closerV1;
        var distance1;
        var newPosPerc1;
        var index1 = 0;
        var vX1;
        var vY1;
        var oX1;
        var oY1;
        var iX1;
        var iY1;
        for(i3 = 0; i3 < len1; i3 += 1){
            currentV1 = path1.v[i3];
            currentO1 = path1.o[i3];
            currentI1 = path1.i[i3];
            if (currentV1[0] === currentO1[0] && currentV1[1] === currentO1[1] && currentV1[0] === currentI1[0] && currentV1[1] === currentI1[1]) {
                if ((i3 === 0 || i3 === len1 - 1) && !path1.c) {
                    clonedPath1.setTripleAt(currentV1[0], currentV1[1], currentO1[0], currentO1[1], currentI1[0], currentI1[1], index1);
                    /* clonedPath.v[index] = currentV;
                  clonedPath.o[index] = currentO;
                  clonedPath.i[index] = currentI; */ index1 += 1;
                } else {
                    if (i3 === 0) {
                        closerV1 = path1.v[len1 - 1];
                    } else {
                        closerV1 = path1.v[i3 - 1];
                    }
                    distance1 = Math.sqrt(Math.pow(currentV1[0] - closerV1[0], 2) + Math.pow(currentV1[1] - closerV1[1], 2));
                    newPosPerc1 = distance1 ? Math.min(distance1 / 2, round1) / distance1 : 0;
                    iX1 = currentV1[0] + (closerV1[0] - currentV1[0]) * newPosPerc1;
                    vX1 = iX1;
                    iY1 = currentV1[1] - (currentV1[1] - closerV1[1]) * newPosPerc1;
                    vY1 = iY1;
                    oX1 = vX1 - (vX1 - currentV1[0]) * roundCorner;
                    oY1 = vY1 - (vY1 - currentV1[1]) * roundCorner;
                    clonedPath1.setTripleAt(vX1, vY1, oX1, oY1, iX1, iY1, index1);
                    index1 += 1;
                    if (i3 === len1 - 1) {
                        closerV1 = path1.v[0];
                    } else {
                        closerV1 = path1.v[i3 + 1];
                    }
                    distance1 = Math.sqrt(Math.pow(currentV1[0] - closerV1[0], 2) + Math.pow(currentV1[1] - closerV1[1], 2));
                    newPosPerc1 = distance1 ? Math.min(distance1 / 2, round1) / distance1 : 0;
                    oX1 = currentV1[0] + (closerV1[0] - currentV1[0]) * newPosPerc1;
                    vX1 = oX1;
                    oY1 = currentV1[1] + (closerV1[1] - currentV1[1]) * newPosPerc1;
                    vY1 = oY1;
                    iX1 = vX1 - (vX1 - currentV1[0]) * roundCorner;
                    iY1 = vY1 - (vY1 - currentV1[1]) * roundCorner;
                    clonedPath1.setTripleAt(vX1, vY1, oX1, oY1, iX1, iY1, index1);
                    index1 += 1;
                }
            } else {
                clonedPath1.setTripleAt(path1.v[i3][0], path1.v[i3][1], path1.o[i3][0], path1.o[i3][1], path1.i[i3][0], path1.i[i3][1], index1);
                index1 += 1;
            }
        }
        return clonedPath1;
    };
    RoundCornersModifier.prototype.processShapes = function(_isFirstFrame1) {
        var shapePaths1;
        var i3;
        var len1 = this.shapes.length;
        var j3;
        var jLen1;
        var rd1 = this.rd.v;
        if (rd1 !== 0) {
            var shapeData1;
            var localShapeCollection1;
            for(i3 = 0; i3 < len1; i3 += 1){
                shapeData1 = this.shapes[i3];
                localShapeCollection1 = shapeData1.localShapeCollection;
                if (!(!shapeData1.shape._mdf && !this._mdf && !_isFirstFrame1)) {
                    localShapeCollection1.releaseShapes();
                    shapeData1.shape._mdf = true;
                    shapePaths1 = shapeData1.shape.paths.shapes;
                    jLen1 = shapeData1.shape.paths._length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        localShapeCollection1.addShape(this.processPath(shapePaths1[j3], rd1));
                    }
                }
                shapeData1.shape.paths = shapeData1.localShapeCollection;
            }
        }
        if (!this.dynamicProperties.length) {
            this._mdf = false;
        }
    };
    function floatEqual(a3, b3) {
        return Math.abs(a3 - b3) * 100000 <= Math.min(Math.abs(a3), Math.abs(b3));
    }
    function floatZero(f3) {
        return Math.abs(f3) <= 0.00001;
    }
    function lerp(p01, p14, amount1) {
        return p01 * (1 - amount1) + p14 * amount1;
    }
    function lerpPoint(p01, p14, amount1) {
        return [
            lerp(p01[0], p14[0], amount1),
            lerp(p01[1], p14[1], amount1)
        ];
    }
    function quadRoots(a3, b3, c4) {
        // no root
        if (a3 === 0) return [];
        var s4 = b3 * b3 - 4 * a3 * c4; // Complex roots
        if (s4 < 0) return [];
        var singleRoot1 = -b3 / (2 * a3); // 1 root
        if (s4 === 0) return [
            singleRoot1
        ];
        var delta1 = Math.sqrt(s4) / (2 * a3); // 2 roots
        return [
            singleRoot1 - delta1,
            singleRoot1 + delta1
        ];
    }
    function polynomialCoefficients(p01, p14, p22, p31) {
        return [
            -p01 + 3 * p14 - 3 * p22 + p31,
            3 * p01 - 6 * p14 + 3 * p22,
            -3 * p01 + 3 * p14,
            p01
        ];
    }
    function singlePoint(p6) {
        return new PolynomialBezier(p6, p6, p6, p6, false);
    }
    function PolynomialBezier(p01, p14, p22, p31, linearize1) {
        if (linearize1 && pointEqual(p01, p14)) {
            p14 = lerpPoint(p01, p31, 1 / 3);
        }
        if (linearize1 && pointEqual(p22, p31)) {
            p22 = lerpPoint(p01, p31, 2 / 3);
        }
        var coeffx1 = polynomialCoefficients(p01[0], p14[0], p22[0], p31[0]);
        var coeffy1 = polynomialCoefficients(p01[1], p14[1], p22[1], p31[1]);
        this.a = [
            coeffx1[0],
            coeffy1[0]
        ];
        this.b = [
            coeffx1[1],
            coeffy1[1]
        ];
        this.c = [
            coeffx1[2],
            coeffy1[2]
        ];
        this.d = [
            coeffx1[3],
            coeffy1[3]
        ];
        this.points = [
            p01,
            p14,
            p22,
            p31
        ];
    }
    PolynomialBezier.prototype.point = function(t3) {
        return [
            ((this.a[0] * t3 + this.b[0]) * t3 + this.c[0]) * t3 + this.d[0],
            ((this.a[1] * t3 + this.b[1]) * t3 + this.c[1]) * t3 + this.d[1]
        ];
    };
    PolynomialBezier.prototype.derivative = function(t3) {
        return [
            (3 * t3 * this.a[0] + 2 * this.b[0]) * t3 + this.c[0],
            (3 * t3 * this.a[1] + 2 * this.b[1]) * t3 + this.c[1]
        ];
    };
    PolynomialBezier.prototype.tangentAngle = function(t3) {
        var p6 = this.derivative(t3);
        return Math.atan2(p6[1], p6[0]);
    };
    PolynomialBezier.prototype.normalAngle = function(t3) {
        var p6 = this.derivative(t3);
        return Math.atan2(p6[0], p6[1]);
    };
    PolynomialBezier.prototype.inflectionPoints = function() {
        var denom1 = this.a[1] * this.b[0] - this.a[0] * this.b[1];
        if (floatZero(denom1)) return [];
        var tcusp1 = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / denom1;
        var square1 = tcusp1 * tcusp1 - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / denom1;
        if (square1 < 0) return [];
        var root1 = Math.sqrt(square1);
        if (floatZero(root1)) {
            if (root1 > 0 && root1 < 1) return [
                tcusp1
            ];
            return [];
        }
        return [
            tcusp1 - root1,
            tcusp1 + root1
        ].filter(function(r1) {
            return r1 > 0 && r1 < 1;
        });
    };
    PolynomialBezier.prototype.split = function(t3) {
        if (t3 <= 0) return [
            singlePoint(this.points[0]),
            this
        ];
        if (t3 >= 1) return [
            this,
            singlePoint(this.points[this.points.length - 1])
        ];
        var p101 = lerpPoint(this.points[0], this.points[1], t3);
        var p111 = lerpPoint(this.points[1], this.points[2], t3);
        var p121 = lerpPoint(this.points[2], this.points[3], t3);
        var p201 = lerpPoint(p101, p111, t3);
        var p211 = lerpPoint(p111, p121, t3);
        var p31 = lerpPoint(p201, p211, t3);
        return [
            new PolynomialBezier(this.points[0], p101, p201, p31, true),
            new PolynomialBezier(p31, p211, p121, this.points[3], true)
        ];
    };
    function extrema(bez1, comp1) {
        var min1 = bez1.points[0][comp1];
        var max1 = bez1.points[bez1.points.length - 1][comp1];
        if (min1 > max1) {
            var e3 = max1;
            max1 = min1;
            min1 = e3;
        } // Derivative roots to find min/max
        var f3 = quadRoots(3 * bez1.a[comp1], 2 * bez1.b[comp1], bez1.c[comp1]);
        for(var i3 = 0; i3 < f3.length; i3 += 1){
            if (f3[i3] > 0 && f3[i3] < 1) {
                var val3 = bez1.point(f3[i3])[comp1];
                if (val3 < min1) min1 = val3;
                else if (val3 > max1) max1 = val3;
            }
        }
        return {
            min: min1,
            max: max1
        };
    }
    PolynomialBezier.prototype.bounds = function() {
        return {
            x: extrema(this, 0),
            y: extrema(this, 1)
        };
    };
    PolynomialBezier.prototype.boundingBox = function() {
        var bounds1 = this.bounds();
        return {
            left: bounds1.x.min,
            right: bounds1.x.max,
            top: bounds1.y.min,
            bottom: bounds1.y.max,
            width: bounds1.x.max - bounds1.x.min,
            height: bounds1.y.max - bounds1.y.min,
            cx: (bounds1.x.max + bounds1.x.min) / 2,
            cy: (bounds1.y.max + bounds1.y.min) / 2
        };
    };
    function intersectData(bez1, t11, t21) {
        var box1 = bez1.boundingBox();
        return {
            cx: box1.cx,
            cy: box1.cy,
            width: box1.width,
            height: box1.height,
            bez: bez1,
            t: (t11 + t21) / 2,
            t1: t11,
            t2: t21
        };
    }
    function splitData(data1) {
        var split1 = data1.bez.split(0.5);
        return [
            intersectData(split1[0], data1.t1, data1.t),
            intersectData(split1[1], data1.t, data1.t2)
        ];
    }
    function boxIntersect(b11, b21) {
        return Math.abs(b11.cx - b21.cx) * 2 < b11.width + b21.width && Math.abs(b11.cy - b21.cy) * 2 < b11.height + b21.height;
    }
    function intersectsImpl(d11, d21, depth1, tolerance1, intersections1, maxRecursion1) {
        if (!boxIntersect(d11, d21)) return;
        if (depth1 >= maxRecursion1 || d11.width <= tolerance1 && d11.height <= tolerance1 && d21.width <= tolerance1 && d21.height <= tolerance1) {
            intersections1.push([
                d11.t,
                d21.t
            ]);
            return;
        }
        var d1s1 = splitData(d11);
        var d2s1 = splitData(d21);
        intersectsImpl(d1s1[0], d2s1[0], depth1 + 1, tolerance1, intersections1, maxRecursion1);
        intersectsImpl(d1s1[0], d2s1[1], depth1 + 1, tolerance1, intersections1, maxRecursion1);
        intersectsImpl(d1s1[1], d2s1[0], depth1 + 1, tolerance1, intersections1, maxRecursion1);
        intersectsImpl(d1s1[1], d2s1[1], depth1 + 1, tolerance1, intersections1, maxRecursion1);
    }
    PolynomialBezier.prototype.intersections = function(other1, tolerance1, maxRecursion1) {
        if (tolerance1 === undefined) tolerance1 = 2;
        if (maxRecursion1 === undefined) maxRecursion1 = 7;
        var intersections1 = [];
        intersectsImpl(intersectData(this, 0, 1), intersectData(other1, 0, 1), 0, tolerance1, intersections1, maxRecursion1);
        return intersections1;
    };
    PolynomialBezier.shapeSegment = function(shapePath1, index1) {
        var nextIndex1 = (index1 + 1) % shapePath1.length();
        return new PolynomialBezier(shapePath1.v[index1], shapePath1.o[index1], shapePath1.i[nextIndex1], shapePath1.v[nextIndex1], true);
    };
    PolynomialBezier.shapeSegmentInverted = function(shapePath1, index1) {
        var nextIndex1 = (index1 + 1) % shapePath1.length();
        return new PolynomialBezier(shapePath1.v[nextIndex1], shapePath1.i[nextIndex1], shapePath1.o[index1], shapePath1.v[index1], true);
    };
    function crossProduct(a3, b3) {
        return [
            a3[1] * b3[2] - a3[2] * b3[1],
            a3[2] * b3[0] - a3[0] * b3[2],
            a3[0] * b3[1] - a3[1] * b3[0]
        ];
    }
    function lineIntersection(start11, end11, start21, end21) {
        var v11 = [
            start11[0],
            start11[1],
            1
        ];
        var v21 = [
            end11[0],
            end11[1],
            1
        ];
        var v31 = [
            start21[0],
            start21[1],
            1
        ];
        var v41 = [
            end21[0],
            end21[1],
            1
        ];
        var r1 = crossProduct(crossProduct(v11, v21), crossProduct(v31, v41));
        if (floatZero(r1[2])) return null;
        return [
            r1[0] / r1[2],
            r1[1] / r1[2]
        ];
    }
    function polarOffset(p6, angle1, length1) {
        return [
            p6[0] + Math.cos(angle1) * length1,
            p6[1] - Math.sin(angle1) * length1
        ];
    }
    function pointDistance(p14, p22) {
        return Math.hypot(p14[0] - p22[0], p14[1] - p22[1]);
    }
    function pointEqual(p14, p22) {
        return floatEqual(p14[0], p22[0]) && floatEqual(p14[1], p22[1]);
    }
    function ZigZagModifier() {}
    extendPrototype([
        ShapeModifier
    ], ZigZagModifier);
    ZigZagModifier.prototype.initModifierProperties = function(elem3, data1) {
        this.getValue = this.processKeys;
        this.amplitude = PropertyFactory.getProp(elem3, data1.s, 0, null, this);
        this.frequency = PropertyFactory.getProp(elem3, data1.r, 0, null, this);
        this.pointsType = PropertyFactory.getProp(elem3, data1.pt, 0, null, this);
        this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function setPoint(outputBezier1, point1, angle1, direction1, amplitude1, outAmplitude1, inAmplitude1) {
        var angO1 = angle1 - Math.PI / 2;
        var angI1 = angle1 + Math.PI / 2;
        var px1 = point1[0] + Math.cos(angle1) * direction1 * amplitude1;
        var py1 = point1[1] - Math.sin(angle1) * direction1 * amplitude1;
        outputBezier1.setTripleAt(px1, py1, px1 + Math.cos(angO1) * outAmplitude1, py1 - Math.sin(angO1) * outAmplitude1, px1 + Math.cos(angI1) * inAmplitude1, py1 - Math.sin(angI1) * inAmplitude1, outputBezier1.length());
    }
    function getPerpendicularVector(pt11, pt21) {
        var vector1 = [
            pt21[0] - pt11[0],
            pt21[1] - pt11[1]
        ];
        var rot1 = -Math.PI * 0.5;
        var rotatedVector1 = [
            Math.cos(rot1) * vector1[0] - Math.sin(rot1) * vector1[1],
            Math.sin(rot1) * vector1[0] + Math.cos(rot1) * vector1[1]
        ];
        return rotatedVector1;
    }
    function getProjectingAngle(path1, cur1) {
        var prevIndex1 = cur1 === 0 ? path1.length() - 1 : cur1 - 1;
        var nextIndex1 = (cur1 + 1) % path1.length();
        var prevPoint1 = path1.v[prevIndex1];
        var nextPoint1 = path1.v[nextIndex1];
        var pVector1 = getPerpendicularVector(prevPoint1, nextPoint1);
        return Math.atan2(0, 1) - Math.atan2(pVector1[1], pVector1[0]);
    }
    function zigZagCorner(outputBezier1, path1, cur1, amplitude1, frequency1, pointType1, direction1) {
        var angle1 = getProjectingAngle(path1, cur1);
        var point1 = path1.v[cur1 % path1._length];
        var prevPoint1 = path1.v[cur1 === 0 ? path1._length - 1 : cur1 - 1];
        var nextPoint1 = path1.v[(cur1 + 1) % path1._length];
        var prevDist1 = pointType1 === 2 ? Math.sqrt(Math.pow(point1[0] - prevPoint1[0], 2) + Math.pow(point1[1] - prevPoint1[1], 2)) : 0;
        var nextDist1 = pointType1 === 2 ? Math.sqrt(Math.pow(point1[0] - nextPoint1[0], 2) + Math.pow(point1[1] - nextPoint1[1], 2)) : 0;
        setPoint(outputBezier1, path1.v[cur1 % path1._length], angle1, direction1, amplitude1, nextDist1 / ((frequency1 + 1) * 2), prevDist1 / ((frequency1 + 1) * 2), pointType1);
    }
    function zigZagSegment(outputBezier1, segment1, amplitude1, frequency1, pointType1, direction1) {
        for(var i3 = 0; i3 < frequency1; i3 += 1){
            var t3 = (i3 + 1) / (frequency1 + 1);
            var dist4 = pointType1 === 2 ? Math.sqrt(Math.pow(segment1.points[3][0] - segment1.points[0][0], 2) + Math.pow(segment1.points[3][1] - segment1.points[0][1], 2)) : 0;
            var angle1 = segment1.normalAngle(t3);
            var point1 = segment1.point(t3);
            setPoint(outputBezier1, point1, angle1, direction1, amplitude1, dist4 / ((frequency1 + 1) * 2), dist4 / ((frequency1 + 1) * 2), pointType1);
            direction1 = -direction1;
        }
        return direction1;
    }
    ZigZagModifier.prototype.processPath = function(path1, amplitude1, frequency1, pointType1) {
        var count1 = path1._length;
        var clonedPath1 = shapePool.newElement();
        clonedPath1.c = path1.c;
        if (!path1.c) {
            count1 -= 1;
        }
        if (count1 === 0) return clonedPath1;
        var direction1 = -1;
        var segment1 = PolynomialBezier.shapeSegment(path1, 0);
        zigZagCorner(clonedPath1, path1, 0, amplitude1, frequency1, pointType1, direction1);
        for(var i3 = 0; i3 < count1; i3 += 1){
            direction1 = zigZagSegment(clonedPath1, segment1, amplitude1, frequency1, pointType1, -direction1);
            if (i3 === count1 - 1 && !path1.c) {
                segment1 = null;
            } else {
                segment1 = PolynomialBezier.shapeSegment(path1, (i3 + 1) % count1);
            }
            zigZagCorner(clonedPath1, path1, i3 + 1, amplitude1, frequency1, pointType1, direction1);
        }
        return clonedPath1;
    };
    ZigZagModifier.prototype.processShapes = function(_isFirstFrame1) {
        var shapePaths1;
        var i3;
        var len1 = this.shapes.length;
        var j3;
        var jLen1;
        var amplitude1 = this.amplitude.v;
        var frequency1 = Math.max(0, Math.round(this.frequency.v));
        var pointType1 = this.pointsType.v;
        if (amplitude1 !== 0) {
            var shapeData1;
            var localShapeCollection1;
            for(i3 = 0; i3 < len1; i3 += 1){
                shapeData1 = this.shapes[i3];
                localShapeCollection1 = shapeData1.localShapeCollection;
                if (!(!shapeData1.shape._mdf && !this._mdf && !_isFirstFrame1)) {
                    localShapeCollection1.releaseShapes();
                    shapeData1.shape._mdf = true;
                    shapePaths1 = shapeData1.shape.paths.shapes;
                    jLen1 = shapeData1.shape.paths._length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        localShapeCollection1.addShape(this.processPath(shapePaths1[j3], amplitude1, frequency1, pointType1));
                    }
                }
                shapeData1.shape.paths = shapeData1.localShapeCollection;
            }
        }
        if (!this.dynamicProperties.length) {
            this._mdf = false;
        }
    };
    function linearOffset(p14, p22, amount1) {
        var angle1 = Math.atan2(p22[0] - p14[0], p22[1] - p14[1]);
        return [
            polarOffset(p14, angle1, amount1),
            polarOffset(p22, angle1, amount1)
        ];
    }
    function offsetSegment(segment1, amount1) {
        var p01;
        var p1a1;
        var p1b1;
        var p2b1;
        var p2a1;
        var p31;
        var e3;
        e3 = linearOffset(segment1.points[0], segment1.points[1], amount1);
        p01 = e3[0];
        p1a1 = e3[1];
        e3 = linearOffset(segment1.points[1], segment1.points[2], amount1);
        p1b1 = e3[0];
        p2b1 = e3[1];
        e3 = linearOffset(segment1.points[2], segment1.points[3], amount1);
        p2a1 = e3[0];
        p31 = e3[1];
        var p14 = lineIntersection(p01, p1a1, p1b1, p2b1);
        if (p14 === null) p14 = p1a1;
        var p22 = lineIntersection(p2a1, p31, p1b1, p2b1);
        if (p22 === null) p22 = p2a1;
        return new PolynomialBezier(p01, p14, p22, p31);
    }
    function joinLines(outputBezier1, seg11, seg21, lineJoin1, miterLimit1) {
        var p01 = seg11.points[3];
        var p14 = seg21.points[0]; // Bevel
        if (lineJoin1 === 3) return p01; // Connected, they don't need a joint
        if (pointEqual(p01, p14)) return p01; // Round
        if (lineJoin1 === 2) {
            var angleOut1 = -seg11.tangentAngle(1);
            var angleIn1 = -seg21.tangentAngle(0) + Math.PI;
            var center1 = lineIntersection(p01, polarOffset(p01, angleOut1 + Math.PI / 2, 100), p14, polarOffset(p14, angleOut1 + Math.PI / 2, 100));
            var radius1 = center1 ? pointDistance(center1, p01) : pointDistance(p01, p14) / 2;
            var tan1 = polarOffset(p01, angleOut1, 2 * radius1 * roundCorner);
            outputBezier1.setXYAt(tan1[0], tan1[1], "o", outputBezier1.length() - 1);
            tan1 = polarOffset(p14, angleIn1, 2 * radius1 * roundCorner);
            outputBezier1.setTripleAt(p14[0], p14[1], p14[0], p14[1], tan1[0], tan1[1], outputBezier1.length());
            return p14;
        } // Miter
        var t01 = pointEqual(p01, seg11.points[2]) ? seg11.points[0] : seg11.points[2];
        var t11 = pointEqual(p14, seg21.points[1]) ? seg21.points[3] : seg21.points[1];
        var intersection1 = lineIntersection(t01, p01, p14, t11);
        if (intersection1 && pointDistance(intersection1, p01) < miterLimit1) {
            outputBezier1.setTripleAt(intersection1[0], intersection1[1], intersection1[0], intersection1[1], intersection1[0], intersection1[1], outputBezier1.length());
            return intersection1;
        }
        return p01;
    }
    function getIntersection(a3, b3) {
        var intersect1 = a3.intersections(b3);
        if (intersect1.length && floatEqual(intersect1[0][0], 1)) intersect1.shift();
        if (intersect1.length) return intersect1[0];
        return null;
    }
    function pruneSegmentIntersection(a3, b3) {
        var outa1 = a3.slice();
        var outb1 = b3.slice();
        var intersect1 = getIntersection(a3[a3.length - 1], b3[0]);
        if (intersect1) {
            outa1[a3.length - 1] = a3[a3.length - 1].split(intersect1[0])[0];
            outb1[0] = b3[0].split(intersect1[1])[1];
        }
        if (a3.length > 1 && b3.length > 1) {
            intersect1 = getIntersection(a3[0], b3[b3.length - 1]);
            if (intersect1) {
                return [
                    [
                        a3[0].split(intersect1[0])[0]
                    ],
                    [
                        b3[b3.length - 1].split(intersect1[1])[1]
                    ]
                ];
            }
        }
        return [
            outa1,
            outb1
        ];
    }
    function pruneIntersections(segments1) {
        var e3;
        for(var i3 = 1; i3 < segments1.length; i3 += 1){
            e3 = pruneSegmentIntersection(segments1[i3 - 1], segments1[i3]);
            segments1[i3 - 1] = e3[0];
            segments1[i3] = e3[1];
        }
        if (segments1.length > 1) {
            e3 = pruneSegmentIntersection(segments1[segments1.length - 1], segments1[0]);
            segments1[segments1.length - 1] = e3[0];
            segments1[0] = e3[1];
        }
        return segments1;
    }
    function offsetSegmentSplit(segment1, amount1) {
        /*
      We split each bezier segment into smaller pieces based
      on inflection points, this ensures the control point
      polygon is convex.
        (A cubic bezier can have none, one, or two inflection points)
    */ var flex1 = segment1.inflectionPoints();
        var left1;
        var right1;
        var split1;
        var mid1;
        if (flex1.length === 0) {
            return [
                offsetSegment(segment1, amount1)
            ];
        }
        if (flex1.length === 1 || floatEqual(flex1[1], 1)) {
            split1 = segment1.split(flex1[0]);
            left1 = split1[0];
            right1 = split1[1];
            return [
                offsetSegment(left1, amount1),
                offsetSegment(right1, amount1)
            ];
        }
        split1 = segment1.split(flex1[0]);
        left1 = split1[0];
        var t3 = (flex1[1] - flex1[0]) / (1 - flex1[0]);
        split1 = split1[1].split(t3);
        mid1 = split1[0];
        right1 = split1[1];
        return [
            offsetSegment(left1, amount1),
            offsetSegment(mid1, amount1),
            offsetSegment(right1, amount1)
        ];
    }
    function OffsetPathModifier() {}
    extendPrototype([
        ShapeModifier
    ], OffsetPathModifier);
    OffsetPathModifier.prototype.initModifierProperties = function(elem3, data1) {
        this.getValue = this.processKeys;
        this.amount = PropertyFactory.getProp(elem3, data1.a, 0, null, this);
        this.miterLimit = PropertyFactory.getProp(elem3, data1.ml, 0, null, this);
        this.lineJoin = data1.lj;
        this._isAnimated = this.amount.effectsSequence.length !== 0;
    };
    OffsetPathModifier.prototype.processPath = function(inputBezier1, amount1, lineJoin1, miterLimit1) {
        var outputBezier1 = shapePool.newElement();
        outputBezier1.c = inputBezier1.c;
        var count1 = inputBezier1.length();
        if (!inputBezier1.c) {
            count1 -= 1;
        }
        var i3;
        var j3;
        var segment1;
        var multiSegments1 = [];
        for(i3 = 0; i3 < count1; i3 += 1){
            segment1 = PolynomialBezier.shapeSegment(inputBezier1, i3);
            multiSegments1.push(offsetSegmentSplit(segment1, amount1));
        }
        if (!inputBezier1.c) {
            for(i3 = count1 - 1; i3 >= 0; i3 -= 1){
                segment1 = PolynomialBezier.shapeSegmentInverted(inputBezier1, i3);
                multiSegments1.push(offsetSegmentSplit(segment1, amount1));
            }
        }
        multiSegments1 = pruneIntersections(multiSegments1); // Add bezier segments to the output and apply line joints
        var lastPoint1 = null;
        var lastSeg1 = null;
        for(i3 = 0; i3 < multiSegments1.length; i3 += 1){
            var multiSegment1 = multiSegments1[i3];
            if (lastSeg1) lastPoint1 = joinLines(outputBezier1, lastSeg1, multiSegment1[0], lineJoin1, miterLimit1);
            lastSeg1 = multiSegment1[multiSegment1.length - 1];
            for(j3 = 0; j3 < multiSegment1.length; j3 += 1){
                segment1 = multiSegment1[j3];
                if (lastPoint1 && pointEqual(segment1.points[0], lastPoint1)) {
                    outputBezier1.setXYAt(segment1.points[1][0], segment1.points[1][1], "o", outputBezier1.length() - 1);
                } else {
                    outputBezier1.setTripleAt(segment1.points[0][0], segment1.points[0][1], segment1.points[1][0], segment1.points[1][1], segment1.points[0][0], segment1.points[0][1], outputBezier1.length());
                }
                outputBezier1.setTripleAt(segment1.points[3][0], segment1.points[3][1], segment1.points[3][0], segment1.points[3][1], segment1.points[2][0], segment1.points[2][1], outputBezier1.length());
                lastPoint1 = segment1.points[3];
            }
        }
        if (multiSegments1.length) joinLines(outputBezier1, lastSeg1, multiSegments1[0][0], lineJoin1, miterLimit1);
        return outputBezier1;
    };
    OffsetPathModifier.prototype.processShapes = function(_isFirstFrame1) {
        var shapePaths1;
        var i3;
        var len1 = this.shapes.length;
        var j3;
        var jLen1;
        var amount1 = this.amount.v;
        var miterLimit1 = this.miterLimit.v;
        var lineJoin1 = this.lineJoin;
        if (amount1 !== 0) {
            var shapeData1;
            var localShapeCollection1;
            for(i3 = 0; i3 < len1; i3 += 1){
                shapeData1 = this.shapes[i3];
                localShapeCollection1 = shapeData1.localShapeCollection;
                if (!(!shapeData1.shape._mdf && !this._mdf && !_isFirstFrame1)) {
                    localShapeCollection1.releaseShapes();
                    shapeData1.shape._mdf = true;
                    shapePaths1 = shapeData1.shape.paths.shapes;
                    jLen1 = shapeData1.shape.paths._length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        localShapeCollection1.addShape(this.processPath(shapePaths1[j3], amount1, lineJoin1, miterLimit1));
                    }
                }
                shapeData1.shape.paths = shapeData1.localShapeCollection;
            }
        }
        if (!this.dynamicProperties.length) {
            this._mdf = false;
        }
    };
    function getFontProperties(fontData1) {
        var styles1 = fontData1.fStyle ? fontData1.fStyle.split(" ") : [];
        var fWeight1 = "normal";
        var fStyle1 = "normal";
        var len1 = styles1.length;
        var styleName1;
        for(var i3 = 0; i3 < len1; i3 += 1){
            styleName1 = styles1[i3].toLowerCase();
            switch(styleName1){
                case "italic":
                    fStyle1 = "italic";
                    break;
                case "bold":
                    fWeight1 = "700";
                    break;
                case "black":
                    fWeight1 = "900";
                    break;
                case "medium":
                    fWeight1 = "500";
                    break;
                case "regular":
                case "normal":
                    fWeight1 = "400";
                    break;
                case "light":
                case "thin":
                    fWeight1 = "200";
                    break;
                default:
                    break;
            }
        }
        return {
            style: fStyle1,
            weight: fontData1.fWeight || fWeight1
        };
    }
    var FontManager = function() {
        var maxWaitingTime1 = 5000;
        var emptyChar1 = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
                shapes: []
            }
        };
        var combinedCharacters1 = []; // Hindi characters
        combinedCharacters1 = combinedCharacters1.concat([
            2304,
            2305,
            2306,
            2307,
            2362,
            2363,
            2364,
            2364,
            2366,
            2367,
            2368,
            2369,
            2370,
            2371,
            2372,
            2373,
            2374,
            2375,
            2376,
            2377,
            2378,
            2379,
            2380,
            2381,
            2382,
            2383,
            2387,
            2388,
            2389,
            2390,
            2391,
            2402,
            2403
        ]);
        var BLACK_FLAG_CODE_POINT1 = 127988;
        var CANCEL_TAG_CODE_POINT1 = 917631;
        var A_TAG_CODE_POINT1 = 917601;
        var Z_TAG_CODE_POINT1 = 917626;
        var VARIATION_SELECTOR_16_CODE_POINT1 = 65039;
        var ZERO_WIDTH_JOINER_CODE_POINT1 = 8205;
        var REGIONAL_CHARACTER_A_CODE_POINT1 = 127462;
        var REGIONAL_CHARACTER_Z_CODE_POINT1 = 127487;
        var surrogateModifiers1 = [
            "d83cdffb",
            "d83cdffc",
            "d83cdffd",
            "d83cdffe",
            "d83cdfff"
        ];
        function trimFontOptions1(font1) {
            var familyArray1 = font1.split(",");
            var i3;
            var len1 = familyArray1.length;
            var enabledFamilies1 = [];
            for(i3 = 0; i3 < len1; i3 += 1){
                if (familyArray1[i3] !== "sans-serif" && familyArray1[i3] !== "monospace") {
                    enabledFamilies1.push(familyArray1[i3]);
                }
            }
            return enabledFamilies1.join(",");
        }
        function setUpNode1(font1, family1) {
            var parentNode1 = createTag("span"); // Node is invisible to screen readers.
            parentNode1.setAttribute("aria-hidden", true);
            parentNode1.style.fontFamily = family1;
            var node1 = createTag("span"); // Characters that vary significantly among different fonts
            node1.innerText = "giItT1WQy@!-/#"; // Visible - so we can measure it - but not on the screen
            parentNode1.style.position = "absolute";
            parentNode1.style.left = "-10000px";
            parentNode1.style.top = "-10000px"; // Large font size makes even subtle changes obvious
            parentNode1.style.fontSize = "300px"; // Reset any font properties
            parentNode1.style.fontVariant = "normal";
            parentNode1.style.fontStyle = "normal";
            parentNode1.style.fontWeight = "normal";
            parentNode1.style.letterSpacing = "0";
            parentNode1.appendChild(node1);
            document.body.appendChild(parentNode1); // Remember width with no applied web font
            var width1 = node1.offsetWidth;
            node1.style.fontFamily = trimFontOptions1(font1) + ", " + family1;
            return {
                node: node1,
                w: width1,
                parent: parentNode1
            };
        }
        function checkLoadedFonts1() {
            var i3;
            var len1 = this.fonts.length;
            var node1;
            var w1;
            var loadedCount1 = len1;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (this.fonts[i3].loaded) {
                    loadedCount1 -= 1;
                } else if (this.fonts[i3].fOrigin === "n" || this.fonts[i3].origin === 0) {
                    this.fonts[i3].loaded = true;
                } else {
                    node1 = this.fonts[i3].monoCase.node;
                    w1 = this.fonts[i3].monoCase.w;
                    if (node1.offsetWidth !== w1) {
                        loadedCount1 -= 1;
                        this.fonts[i3].loaded = true;
                    } else {
                        node1 = this.fonts[i3].sansCase.node;
                        w1 = this.fonts[i3].sansCase.w;
                        if (node1.offsetWidth !== w1) {
                            loadedCount1 -= 1;
                            this.fonts[i3].loaded = true;
                        }
                    }
                    if (this.fonts[i3].loaded) {
                        this.fonts[i3].sansCase.parent.parentNode.removeChild(this.fonts[i3].sansCase.parent);
                        this.fonts[i3].monoCase.parent.parentNode.removeChild(this.fonts[i3].monoCase.parent);
                    }
                }
            }
            if (loadedCount1 !== 0 && Date.now() - this.initTime < maxWaitingTime1) {
                setTimeout(this.checkLoadedFontsBinded, 20);
            } else {
                setTimeout(this.setIsLoadedBinded, 10);
            }
        }
        function createHelper1(fontData1, def1) {
            var engine1 = document.body && def1 ? "svg" : "canvas";
            var helper1;
            var fontProps1 = getFontProperties(fontData1);
            if (engine1 === "svg") {
                var tHelper1 = createNS("text");
                tHelper1.style.fontSize = "100px"; // tHelper.style.fontFamily = fontData.fFamily;
                tHelper1.setAttribute("font-family", fontData1.fFamily);
                tHelper1.setAttribute("font-style", fontProps1.style);
                tHelper1.setAttribute("font-weight", fontProps1.weight);
                tHelper1.textContent = "1";
                if (fontData1.fClass) {
                    tHelper1.style.fontFamily = "inherit";
                    tHelper1.setAttribute("class", fontData1.fClass);
                } else {
                    tHelper1.style.fontFamily = fontData1.fFamily;
                }
                def1.appendChild(tHelper1);
                helper1 = tHelper1;
            } else {
                var tCanvasHelper1 = new OffscreenCanvas(500, 500).getContext("2d");
                tCanvasHelper1.font = fontProps1.style + " " + fontProps1.weight + " 100px " + fontData1.fFamily;
                helper1 = tCanvasHelper1;
            }
            function measure1(text1) {
                if (engine1 === "svg") {
                    helper1.textContent = text1;
                    return helper1.getComputedTextLength();
                }
                return helper1.measureText(text1).width;
            }
            return {
                measureText: measure1
            };
        }
        function addFonts1(fontData1, defs1) {
            if (!fontData1) {
                this.isLoaded = true;
                return;
            }
            if (this.chars) {
                this.isLoaded = true;
                this.fonts = fontData1.list;
                return;
            }
            if (!document.body) {
                this.isLoaded = true;
                fontData1.list.forEach(function(data1) {
                    data1.helper = createHelper1(data1);
                    data1.cache = {};
                });
                this.fonts = fontData1.list;
                return;
            }
            var fontArr1 = fontData1.list;
            var i3;
            var len1 = fontArr1.length;
            var _pendingFonts1 = len1;
            for(i3 = 0; i3 < len1; i3 += 1){
                var shouldLoadFont1 = true;
                var loadedSelector1;
                var j3;
                fontArr1[i3].loaded = false;
                fontArr1[i3].monoCase = setUpNode1(fontArr1[i3].fFamily, "monospace");
                fontArr1[i3].sansCase = setUpNode1(fontArr1[i3].fFamily, "sans-serif");
                if (!fontArr1[i3].fPath) {
                    fontArr1[i3].loaded = true;
                    _pendingFonts1 -= 1;
                } else if (fontArr1[i3].fOrigin === "p" || fontArr1[i3].origin === 3) {
                    loadedSelector1 = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr1[i3].fFamily + '"], style[f-origin="3"][f-family="' + fontArr1[i3].fFamily + '"]');
                    if (loadedSelector1.length > 0) {
                        shouldLoadFont1 = false;
                    }
                    if (shouldLoadFont1) {
                        var s4 = createTag("style");
                        s4.setAttribute("f-forigin", fontArr1[i3].fOrigin);
                        s4.setAttribute("f-origin", fontArr1[i3].origin);
                        s4.setAttribute("f-family", fontArr1[i3].fFamily);
                        s4.type = "text/css";
                        s4.innerText = "@font-face {font-family: " + fontArr1[i3].fFamily + "; font-style: normal; src: url('" + fontArr1[i3].fPath + "');}";
                        defs1.appendChild(s4);
                    }
                } else if (fontArr1[i3].fOrigin === "g" || fontArr1[i3].origin === 1) {
                    loadedSelector1 = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');
                    for(j3 = 0; j3 < loadedSelector1.length; j3 += 1){
                        if (loadedSelector1[j3].href.indexOf(fontArr1[i3].fPath) !== -1) {
                            // Font is already loaded
                            shouldLoadFont1 = false;
                        }
                    }
                    if (shouldLoadFont1) {
                        var l3 = createTag("link");
                        l3.setAttribute("f-forigin", fontArr1[i3].fOrigin);
                        l3.setAttribute("f-origin", fontArr1[i3].origin);
                        l3.type = "text/css";
                        l3.rel = "stylesheet";
                        l3.href = fontArr1[i3].fPath;
                        document.body.appendChild(l3);
                    }
                } else if (fontArr1[i3].fOrigin === "t" || fontArr1[i3].origin === 2) {
                    loadedSelector1 = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');
                    for(j3 = 0; j3 < loadedSelector1.length; j3 += 1){
                        if (fontArr1[i3].fPath === loadedSelector1[j3].src) {
                            // Font is already loaded
                            shouldLoadFont1 = false;
                        }
                    }
                    if (shouldLoadFont1) {
                        var sc1 = createTag("link");
                        sc1.setAttribute("f-forigin", fontArr1[i3].fOrigin);
                        sc1.setAttribute("f-origin", fontArr1[i3].origin);
                        sc1.setAttribute("rel", "stylesheet");
                        sc1.setAttribute("href", fontArr1[i3].fPath);
                        defs1.appendChild(sc1);
                    }
                }
                fontArr1[i3].helper = createHelper1(fontArr1[i3], defs1);
                fontArr1[i3].cache = {};
                this.fonts.push(fontArr1[i3]);
            }
            if (_pendingFonts1 === 0) {
                this.isLoaded = true;
            } else {
                // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
                // Adding this timeout seems to fix it
                setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
        }
        function addChars1(chars1) {
            if (!chars1) {
                return;
            }
            if (!this.chars) {
                this.chars = [];
            }
            var i3;
            var len1 = chars1.length;
            var j3;
            var jLen1 = this.chars.length;
            var found1;
            for(i3 = 0; i3 < len1; i3 += 1){
                j3 = 0;
                found1 = false;
                while(j3 < jLen1){
                    if (this.chars[j3].style === chars1[i3].style && this.chars[j3].fFamily === chars1[i3].fFamily && this.chars[j3].ch === chars1[i3].ch) {
                        found1 = true;
                    }
                    j3 += 1;
                }
                if (!found1) {
                    this.chars.push(chars1[i3]);
                    jLen1 += 1;
                }
            }
        }
        function getCharData1(_char1, style1, font1) {
            var i3 = 0;
            var len1 = this.chars.length;
            while(i3 < len1){
                if (this.chars[i3].ch === _char1 && this.chars[i3].style === style1 && this.chars[i3].fFamily === font1) {
                    return this.chars[i3];
                }
                i3 += 1;
            }
            if ((typeof _char1 === "string" && _char1.charCodeAt(0) !== 13 || !_char1) && console && console.warn // eslint-disable-line no-console
             && !this._warned) {
                this._warned = true;
                console.warn("Missing character from exported characters list: ", _char1, style1, font1); // eslint-disable-line no-console
            }
            return emptyChar1;
        }
        function measureText1(_char21, fontName1, size1) {
            var fontData1 = this.getFontByName(fontName1); // Using the char instead of char.charCodeAt(0)
            // to avoid collisions between equal chars
            var index1 = _char21;
            if (!fontData1.cache[index1]) {
                var tHelper1 = fontData1.helper;
                if (_char21 === " ") {
                    var doubleSize1 = tHelper1.measureText("|" + _char21 + "|");
                    var singleSize1 = tHelper1.measureText("||");
                    fontData1.cache[index1] = (doubleSize1 - singleSize1) / 100;
                } else {
                    fontData1.cache[index1] = tHelper1.measureText(_char21) / 100;
                }
            }
            return fontData1.cache[index1] * size1;
        }
        function getFontByName1(name1) {
            var i3 = 0;
            var len1 = this.fonts.length;
            while(i3 < len1){
                if (this.fonts[i3].fName === name1) {
                    return this.fonts[i3];
                }
                i3 += 1;
            }
            return this.fonts[0];
        }
        function getCodePoint1(string1) {
            var codePoint1 = 0;
            var first1 = string1.charCodeAt(0);
            if (first1 >= 0xD800 && first1 <= 0xDBFF) {
                var second1 = string1.charCodeAt(1);
                if (second1 >= 0xDC00 && second1 <= 0xDFFF) {
                    codePoint1 = (first1 - 0xD800) * 0x400 + second1 - 0xDC00 + 0x10000;
                }
            }
            return codePoint1;
        } // Skin tone modifiers
        function isModifier1(firstCharCode1, secondCharCode1) {
            var sum1 = firstCharCode1.toString(16) + secondCharCode1.toString(16);
            return surrogateModifiers1.indexOf(sum1) !== -1;
        }
        function isZeroWidthJoiner1(charCode1) {
            return charCode1 === ZERO_WIDTH_JOINER_CODE_POINT1;
        } // This codepoint may change the appearance of the preceding character.
        // If that is a symbol, dingbat or emoji, U+FE0F forces it to be rendered
        // as a colorful image as compared to a monochrome text variant.
        function isVariationSelector1(charCode1) {
            return charCode1 === VARIATION_SELECTOR_16_CODE_POINT1;
        } // The regional indicator symbols are a set of 26 alphabetic Unicode
        /// characters (A–Z) intended to be used to encode ISO 3166-1 alpha-2
        // two-letter country codes in a way that allows optional special treatment.
        function isRegionalCode1(string1) {
            var codePoint1 = getCodePoint1(string1);
            if (codePoint1 >= REGIONAL_CHARACTER_A_CODE_POINT1 && codePoint1 <= REGIONAL_CHARACTER_Z_CODE_POINT1) {
                return true;
            }
            return false;
        } // Some Emoji implementations represent combinations of
        // two “regional indicator” letters as a single flag symbol.
        function isFlagEmoji1(string1) {
            return isRegionalCode1(string1.substr(0, 2)) && isRegionalCode1(string1.substr(2, 2));
        }
        function isCombinedCharacter1(_char31) {
            return combinedCharacters1.indexOf(_char31) !== -1;
        } // Regional flags start with a BLACK_FLAG_CODE_POINT
        // folowed by 5 chars in the TAG range
        // and end with a CANCEL_TAG_CODE_POINT
        function isRegionalFlag1(text1, index1) {
            var codePoint1 = getCodePoint1(text1.substr(index1, 2));
            if (codePoint1 !== BLACK_FLAG_CODE_POINT1) {
                return false;
            }
            var count1 = 0;
            index1 += 2;
            while(count1 < 5){
                codePoint1 = getCodePoint1(text1.substr(index1, 2));
                if (codePoint1 < A_TAG_CODE_POINT1 || codePoint1 > Z_TAG_CODE_POINT1) {
                    return false;
                }
                count1 += 1;
                index1 += 2;
            }
            return getCodePoint1(text1.substr(index1, 2)) === CANCEL_TAG_CODE_POINT1;
        }
        function setIsLoaded1() {
            this.isLoaded = true;
        }
        var Font1 = function Font1() {
            this.fonts = [];
            this.chars = null;
            this.typekitLoaded = 0;
            this.isLoaded = false;
            this._warned = false;
            this.initTime = Date.now();
            this.setIsLoadedBinded = this.setIsLoaded.bind(this);
            this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
        };
        Font1.isModifier = isModifier1;
        Font1.isZeroWidthJoiner = isZeroWidthJoiner1;
        Font1.isFlagEmoji = isFlagEmoji1;
        Font1.isRegionalCode = isRegionalCode1;
        Font1.isCombinedCharacter = isCombinedCharacter1;
        Font1.isRegionalFlag = isRegionalFlag1;
        Font1.isVariationSelector = isVariationSelector1;
        Font1.BLACK_FLAG_CODE_POINT = BLACK_FLAG_CODE_POINT1;
        var fontPrototype1 = {
            addChars: addChars1,
            addFonts: addFonts1,
            getCharData: getCharData1,
            getFontByName: getFontByName1,
            measureText: measureText1,
            checkLoadedFonts: checkLoadedFonts1,
            setIsLoaded: setIsLoaded1
        };
        Font1.prototype = fontPrototype1;
        return Font1;
    }();
    function SlotManager(animationData1) {
        this.animationData = animationData1;
    }
    SlotManager.prototype.getProp = function(data1) {
        if (this.animationData.slots && this.animationData.slots[data1.sid]) {
            return Object.assign(data1, this.animationData.slots[data1.sid].p);
        }
        return data1;
    };
    function slotFactory(animationData1) {
        return new SlotManager(animationData1);
    }
    function RenderableElement() {}
    RenderableElement.prototype = {
        initRenderable: function initRenderable1() {
            // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
            this.isInRange = false; // layer's display state
            this.hidden = false; // If layer's transparency equals 0, it can be hidden
            this.isTransparent = false; // list of animated components
            this.renderableComponents = [];
        },
        addRenderableComponent: function addRenderableComponent1(component1) {
            if (this.renderableComponents.indexOf(component1) === -1) {
                this.renderableComponents.push(component1);
            }
        },
        removeRenderableComponent: function removeRenderableComponent1(component1) {
            if (this.renderableComponents.indexOf(component1) !== -1) {
                this.renderableComponents.splice(this.renderableComponents.indexOf(component1), 1);
            }
        },
        prepareRenderableFrame: function prepareRenderableFrame1(num1) {
            this.checkLayerLimits(num1);
        },
        checkTransparency: function checkTransparency1() {
            if (this.finalTransform.mProp.o.v <= 0) {
                if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
                    this.isTransparent = true;
                    this.hide();
                }
            } else if (this.isTransparent) {
                this.isTransparent = false;
                this.show();
            }
        },
        /**
       * @function
       * Initializes frame related properties.
       *
       * @param {number} num
       * current frame number in Layer's time
       *
       */ checkLayerLimits: function checkLayerLimits1(num1) {
            if (this.data.ip - this.data.st <= num1 && this.data.op - this.data.st > num1) {
                if (this.isInRange !== true) {
                    this.globalData._mdf = true;
                    this._mdf = true;
                    this.isInRange = true;
                    this.show();
                }
            } else if (this.isInRange !== false) {
                this.globalData._mdf = true;
                this.isInRange = false;
                this.hide();
            }
        },
        renderRenderable: function renderRenderable1() {
            var i3;
            var len1 = this.renderableComponents.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.renderableComponents[i3].renderFrame(this._isFirstFrame);
            }
        /* this.maskManager.renderFrame(this.finalTransform.mat);
          this.renderableEffectsManager.renderFrame(this._isFirstFrame); */ },
        sourceRectAtTime: function sourceRectAtTime1() {
            return {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            };
        },
        getLayerSize: function getLayerSize1() {
            if (this.data.ty === 5) {
                return {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                };
            }
            return {
                w: this.data.width,
                h: this.data.height
            };
        }
    };
    var getBlendMode = function() {
        var blendModeEnums1 = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
        };
        return function(mode1) {
            return blendModeEnums1[mode1] || "";
        };
    }();
    function SliderEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 0, 0, container1);
    }
    function AngleEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 0, 0, container1);
    }
    function ColorEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 1, 0, container1);
    }
    function PointEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 1, 0, container1);
    }
    function LayerIndexEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 0, 0, container1);
    }
    function MaskIndexEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 0, 0, container1);
    }
    function CheckboxEffect(data1, elem3, container1) {
        this.p = PropertyFactory.getProp(elem3, data1.v, 0, 0, container1);
    }
    function NoValueEffect() {
        this.p = {};
    }
    function EffectsManager(data1, element1) {
        var effects1 = data1.ef || [];
        this.effectElements = [];
        var i3;
        var len1 = effects1.length;
        var effectItem1;
        for(i3 = 0; i3 < len1; i3 += 1){
            effectItem1 = new GroupEffect(effects1[i3], element1);
            this.effectElements.push(effectItem1);
        }
    }
    function GroupEffect(data1, element1) {
        this.init(data1, element1);
    }
    extendPrototype([
        DynamicPropertyContainer
    ], GroupEffect);
    GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;
    GroupEffect.prototype.init = function(data1, element1) {
        this.data = data1;
        this.effectElements = [];
        this.initDynamicPropertyContainer(element1);
        var i3;
        var len1 = this.data.ef.length;
        var eff1;
        var effects1 = this.data.ef;
        for(i3 = 0; i3 < len1; i3 += 1){
            eff1 = null;
            switch(effects1[i3].ty){
                case 0:
                    eff1 = new SliderEffect(effects1[i3], element1, this);
                    break;
                case 1:
                    eff1 = new AngleEffect(effects1[i3], element1, this);
                    break;
                case 2:
                    eff1 = new ColorEffect(effects1[i3], element1, this);
                    break;
                case 3:
                    eff1 = new PointEffect(effects1[i3], element1, this);
                    break;
                case 4:
                case 7:
                    eff1 = new CheckboxEffect(effects1[i3], element1, this);
                    break;
                case 10:
                    eff1 = new LayerIndexEffect(effects1[i3], element1, this);
                    break;
                case 11:
                    eff1 = new MaskIndexEffect(effects1[i3], element1, this);
                    break;
                case 5:
                    eff1 = new EffectsManager(effects1[i3], element1, this);
                    break;
                // case 6:
                default:
                    eff1 = new NoValueEffect(effects1[i3], element1, this);
                    break;
            }
            if (eff1) {
                this.effectElements.push(eff1);
            }
        }
    };
    function BaseElement() {}
    BaseElement.prototype = {
        checkMasks: function checkMasks1() {
            if (!this.data.hasMask) {
                return false;
            }
            var i3 = 0;
            var len1 = this.data.masksProperties.length;
            while(i3 < len1){
                if (this.data.masksProperties[i3].mode !== "n" && this.data.masksProperties[i3].cl !== false) {
                    return true;
                }
                i3 += 1;
            }
            return false;
        },
        initExpressions: function initExpressions1() {
            var expressionsInterfaces1 = getExpressionInterfaces();
            if (!expressionsInterfaces1) {
                return;
            }
            var LayerExpressionInterface1 = expressionsInterfaces1("layer");
            var EffectsExpressionInterface1 = expressionsInterfaces1("effects");
            var ShapeExpressionInterface1 = expressionsInterfaces1("shape");
            var TextExpressionInterface1 = expressionsInterfaces1("text");
            var CompExpressionInterface1 = expressionsInterfaces1("comp");
            this.layerInterface = LayerExpressionInterface1(this);
            if (this.data.hasMask && this.maskManager) {
                this.layerInterface.registerMaskInterface(this.maskManager);
            }
            var effectsInterface1 = EffectsExpressionInterface1.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(effectsInterface1);
            if (this.data.ty === 0 || this.data.xt) {
                this.compInterface = CompExpressionInterface1(this);
            } else if (this.data.ty === 4) {
                this.layerInterface.shapeInterface = ShapeExpressionInterface1(this.shapesData, this.itemsData, this.layerInterface);
                this.layerInterface.content = this.layerInterface.shapeInterface;
            } else if (this.data.ty === 5) {
                this.layerInterface.textInterface = TextExpressionInterface1(this);
                this.layerInterface.text = this.layerInterface.textInterface;
            }
        },
        setBlendMode: function setBlendMode1() {
            var blendModeValue1 = getBlendMode(this.data.bm);
            var elem3 = this.baseElement || this.layerElement;
            elem3.style["mix-blend-mode"] = blendModeValue1;
        },
        initBaseData: function initBaseData1(data1, globalData1, comp1) {
            this.globalData = globalData1;
            this.comp = comp1;
            this.data = data1;
            this.layerId = createElementID(); // Stretch factor for old animations missing this property.
            if (!this.data.sr) {
                this.data.sr = 1;
            } // effects manager
            this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
        },
        getType: function getType1() {
            return this.type;
        },
        sourceRectAtTime: function sourceRectAtTime1() {}
    };
    /**
   * @file
   * Handles element's layer frame update.
   * Checks layer in point and out point
   *
   */ function FrameElement() {}
    FrameElement.prototype = {
        /**
       * @function
       * Initializes frame related properties.
       *
       */ initFrame: function initFrame1() {
            // set to true when inpoint is rendered
            this._isFirstFrame = false; // list of animated properties
            this.dynamicProperties = []; // If layer has been modified in current tick this will be true
            this._mdf = false;
        },
        /**
       * @function
       * Calculates all dynamic values
       *
       * @param {number} num
       * current frame number in Layer's time
       * @param {boolean} isVisible
       * if layers is currently in range
       *
       */ prepareProperties: function prepareProperties1(num1, isVisible1) {
            var i3;
            var len1 = this.dynamicProperties.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (isVisible1 || this._isParent && this.dynamicProperties[i3].propType === "transform") {
                    this.dynamicProperties[i3].getValue();
                    if (this.dynamicProperties[i3]._mdf) {
                        this.globalData._mdf = true;
                        this._mdf = true;
                    }
                }
            }
        },
        addDynamicProperty: function addDynamicProperty1(prop1) {
            if (this.dynamicProperties.indexOf(prop1) === -1) {
                this.dynamicProperties.push(prop1);
            }
        }
    };
    function FootageElement(data1, globalData1, comp1) {
        this.initFrame();
        this.initRenderable();
        this.assetData = globalData1.getAssetData(data1.refId);
        this.footageData = globalData1.imageLoader.getAsset(this.assetData);
        this.initBaseData(data1, globalData1, comp1);
    }
    FootageElement.prototype.prepareFrame = function() {};
    extendPrototype([
        RenderableElement,
        BaseElement,
        FrameElement
    ], FootageElement);
    FootageElement.prototype.getBaseElement = function() {
        return null;
    };
    FootageElement.prototype.renderFrame = function() {};
    FootageElement.prototype.destroy = function() {};
    FootageElement.prototype.initExpressions = function() {
        var expressionsInterfaces1 = getExpressionInterfaces();
        if (!expressionsInterfaces1) {
            return;
        }
        var FootageInterface1 = expressionsInterfaces1("footage");
        this.layerInterface = FootageInterface1(this);
    };
    FootageElement.prototype.getFootageData = function() {
        return this.footageData;
    };
    function AudioElement(data1, globalData1, comp1) {
        this.initFrame();
        this.initRenderable();
        this.assetData = globalData1.getAssetData(data1.refId);
        this.initBaseData(data1, globalData1, comp1);
        this._isPlaying = false;
        this._canPlay = false;
        var assetPath1 = this.globalData.getAssetsPath(this.assetData);
        this.audio = this.globalData.audioController.createAudio(assetPath1);
        this._currentTime = 0;
        this.globalData.audioController.addAudio(this);
        this._volumeMultiplier = 1;
        this._volume = 1;
        this._previousVolume = null;
        this.tm = data1.tm ? PropertyFactory.getProp(this, data1.tm, 0, globalData1.frameRate, this) : {
            _placeholder: true
        };
        this.lv = PropertyFactory.getProp(this, data1.au && data1.au.lv ? data1.au.lv : {
            k: [
                100
            ]
        }, 1, 0.01, this);
    }
    AudioElement.prototype.prepareFrame = function(num1) {
        this.prepareRenderableFrame(num1, true);
        this.prepareProperties(num1, true);
        if (!this.tm._placeholder) {
            var timeRemapped1 = this.tm.v;
            this._currentTime = timeRemapped1;
        } else {
            this._currentTime = num1 / this.data.sr;
        }
        this._volume = this.lv.v[0];
        var totalVolume1 = this._volume * this._volumeMultiplier;
        if (this._previousVolume !== totalVolume1) {
            this._previousVolume = totalVolume1;
            this.audio.volume(totalVolume1);
        }
    };
    extendPrototype([
        RenderableElement,
        BaseElement,
        FrameElement
    ], AudioElement);
    AudioElement.prototype.renderFrame = function() {
        if (this.isInRange && this._canPlay) {
            if (!this._isPlaying) {
                this.audio.play();
                this.audio.seek(this._currentTime / this.globalData.frameRate);
                this._isPlaying = true;
            } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
                this.audio.seek(this._currentTime / this.globalData.frameRate);
            }
        }
    };
    AudioElement.prototype.show = function() {};
    AudioElement.prototype.hide = function() {
        this.audio.pause();
        this._isPlaying = false;
    };
    AudioElement.prototype.pause = function() {
        this.audio.pause();
        this._isPlaying = false;
        this._canPlay = false;
    };
    AudioElement.prototype.resume = function() {
        this._canPlay = true;
    };
    AudioElement.prototype.setRate = function(rateValue1) {
        this.audio.rate(rateValue1);
    };
    AudioElement.prototype.volume = function(volumeValue1) {
        this._volumeMultiplier = volumeValue1;
        this._previousVolume = volumeValue1 * this._volume;
        this.audio.volume(this._previousVolume);
    };
    AudioElement.prototype.getBaseElement = function() {
        return null;
    };
    AudioElement.prototype.destroy = function() {};
    AudioElement.prototype.sourceRectAtTime = function() {};
    AudioElement.prototype.initExpressions = function() {};
    function BaseRenderer() {}
    BaseRenderer.prototype.checkLayers = function(num1) {
        var i3;
        var len1 = this.layers.length;
        var data1;
        this.completeLayers = true;
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (!this.elements[i3]) {
                data1 = this.layers[i3];
                if (data1.ip - data1.st <= num1 - this.layers[i3].st && data1.op - data1.st > num1 - this.layers[i3].st) {
                    this.buildItem(i3);
                }
            }
            this.completeLayers = this.elements[i3] ? this.completeLayers : false;
        }
        this.checkPendingElements();
    };
    BaseRenderer.prototype.createItem = function(layer1) {
        switch(layer1.ty){
            case 2:
                return this.createImage(layer1);
            case 0:
                return this.createComp(layer1);
            case 1:
                return this.createSolid(layer1);
            case 3:
                return this.createNull(layer1);
            case 4:
                return this.createShape(layer1);
            case 5:
                return this.createText(layer1);
            case 6:
                return this.createAudio(layer1);
            case 13:
                return this.createCamera(layer1);
            case 15:
                return this.createFootage(layer1);
            default:
                return this.createNull(layer1);
        }
    };
    BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.");
    };
    BaseRenderer.prototype.createAudio = function(data1) {
        return new AudioElement(data1, this.globalData, this);
    };
    BaseRenderer.prototype.createFootage = function(data1) {
        return new FootageElement(data1, this.globalData, this);
    };
    BaseRenderer.prototype.buildAllItems = function() {
        var i3;
        var len1 = this.layers.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.buildItem(i3);
        }
        this.checkPendingElements();
    };
    BaseRenderer.prototype.includeLayers = function(newLayers1) {
        this.completeLayers = false;
        var i3;
        var len1 = newLayers1.length;
        var j3;
        var jLen1 = this.layers.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            j3 = 0;
            while(j3 < jLen1){
                if (this.layers[j3].id === newLayers1[i3].id) {
                    this.layers[j3] = newLayers1[i3];
                    break;
                }
                j3 += 1;
            }
        }
    };
    BaseRenderer.prototype.setProjectInterface = function(pInterface1) {
        this.globalData.projectInterface = pInterface1;
    };
    BaseRenderer.prototype.initItems = function() {
        if (!this.globalData.progressiveLoad) {
            this.buildAllItems();
        }
    };
    BaseRenderer.prototype.buildElementParenting = function(element1, parentName1, hierarchy1) {
        var elements1 = this.elements;
        var layers1 = this.layers;
        var i3 = 0;
        var len1 = layers1.length;
        while(i3 < len1){
            if (layers1[i3].ind == parentName1) {
                // eslint-disable-line eqeqeq
                if (!elements1[i3] || elements1[i3] === true) {
                    this.buildItem(i3);
                    this.addPendingElement(element1);
                } else {
                    hierarchy1.push(elements1[i3]);
                    elements1[i3].setAsParent();
                    if (layers1[i3].parent !== undefined) {
                        this.buildElementParenting(element1, layers1[i3].parent, hierarchy1);
                    } else {
                        element1.setHierarchy(hierarchy1);
                    }
                }
            }
            i3 += 1;
        }
    };
    BaseRenderer.prototype.addPendingElement = function(element1) {
        this.pendingElements.push(element1);
    };
    BaseRenderer.prototype.searchExtraCompositions = function(assets1) {
        var i3;
        var len1 = assets1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (assets1[i3].xt) {
                var comp1 = this.createComp(assets1[i3]);
                comp1.initExpressions();
                this.globalData.projectInterface.registerComposition(comp1);
            }
        }
    };
    BaseRenderer.prototype.getElementById = function(ind1) {
        var i3;
        var len1 = this.elements.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.elements[i3].data.ind === ind1) {
                return this.elements[i3];
            }
        }
        return null;
    };
    BaseRenderer.prototype.getElementByPath = function(path1) {
        var pathValue1 = path1.shift();
        var element1;
        if (typeof pathValue1 === "number") {
            element1 = this.elements[pathValue1];
        } else {
            var i3;
            var len1 = this.elements.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (this.elements[i3].data.nm === pathValue1) {
                    element1 = this.elements[i3];
                    break;
                }
            }
        }
        if (path1.length === 0) {
            return element1;
        }
        return element1.getElementByPath(path1);
    };
    BaseRenderer.prototype.setupGlobalData = function(animData1, fontsContainer1) {
        this.globalData.fontManager = new FontManager();
        this.globalData.slotManager = slotFactory(animData1);
        this.globalData.fontManager.addChars(animData1.chars);
        this.globalData.fontManager.addFonts(animData1.fonts, fontsContainer1);
        this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
        this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
        this.globalData.imageLoader = this.animationItem.imagePreloader;
        this.globalData.audioController = this.animationItem.audioController;
        this.globalData.frameId = 0;
        this.globalData.frameRate = animData1.fr;
        this.globalData.nm = animData1.nm;
        this.globalData.compSize = {
            w: animData1.w,
            h: animData1.h
        };
    };
    var effectTypes = {
        TRANSFORM_EFFECT: "transformEFfect"
    };
    function TransformElement() {}
    TransformElement.prototype = {
        initTransform: function initTransform1() {
            var mat1 = new Matrix();
            this.finalTransform = {
                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                    o: 0
                },
                _matMdf: false,
                _localMatMdf: false,
                _opMdf: false,
                mat: mat1,
                localMat: mat1,
                localOpacity: 1
            };
            if (this.data.ao) {
                this.finalTransform.mProp.autoOriented = true;
            } // TODO: check TYPE 11: Guided elements
            if (this.data.ty !== 11) {}
        },
        renderTransform: function renderTransform1() {
            this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
            this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;
            if (this.hierarchy) {
                var mat1;
                var finalMat1 = this.finalTransform.mat;
                var i3 = 0;
                var len1 = this.hierarchy.length; // Checking if any of the transformation matrices in the hierarchy chain has changed.
                if (!this.finalTransform._matMdf) {
                    while(i3 < len1){
                        if (this.hierarchy[i3].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = true;
                            break;
                        }
                        i3 += 1;
                    }
                }
                if (this.finalTransform._matMdf) {
                    mat1 = this.finalTransform.mProp.v.props;
                    finalMat1.cloneFromProps(mat1);
                    for(i3 = 0; i3 < len1; i3 += 1){
                        finalMat1.multiply(this.hierarchy[i3].finalTransform.mProp.v);
                    }
                }
            }
            if (this.finalTransform._matMdf) {
                this.finalTransform._localMatMdf = this.finalTransform._matMdf;
            }
            if (this.finalTransform._opMdf) {
                this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
            }
        },
        renderLocalTransform: function renderLocalTransform1() {
            if (this.localTransforms) {
                var i3 = 0;
                var len1 = this.localTransforms.length;
                this.finalTransform._localMatMdf = this.finalTransform._matMdf;
                if (!this.finalTransform._localMatMdf || !this.finalTransform._opMdf) {
                    while(i3 < len1){
                        if (this.localTransforms[i3]._mdf) {
                            this.finalTransform._localMatMdf = true;
                        }
                        if (this.localTransforms[i3]._opMdf && !this.finalTransform._opMdf) {
                            this.finalTransform.localOpacity = this.finalTransform.mProp.o.v;
                            this.finalTransform._opMdf = true;
                        }
                        i3 += 1;
                    }
                }
                if (this.finalTransform._localMatMdf) {
                    var localMat1 = this.finalTransform.localMat;
                    this.localTransforms[0].matrix.clone(localMat1);
                    for(i3 = 1; i3 < len1; i3 += 1){
                        var lmat1 = this.localTransforms[i3].matrix;
                        localMat1.multiply(lmat1);
                    }
                    localMat1.multiply(this.finalTransform.mat);
                }
                if (this.finalTransform._opMdf) {
                    var localOp1 = this.finalTransform.localOpacity;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        localOp1 *= this.localTransforms[i3].opacity * 0.01;
                    }
                    this.finalTransform.localOpacity = localOp1;
                }
            }
        },
        searchEffectTransforms: function searchEffectTransforms1() {
            if (this.renderableEffectsManager) {
                var transformEffects1 = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                if (transformEffects1.length) {
                    this.localTransforms = [];
                    this.finalTransform.localMat = new Matrix();
                    var i3 = 0;
                    var len1 = transformEffects1.length;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        this.localTransforms.push(transformEffects1[i3]);
                    }
                }
            }
        },
        globalToLocal: function globalToLocal1(pt5) {
            var transforms1 = [];
            transforms1.push(this.finalTransform);
            var flag1 = true;
            var comp1 = this.comp;
            while(flag1){
                if (comp1.finalTransform) {
                    if (comp1.data.hasMask) {
                        transforms1.splice(0, 0, comp1.finalTransform);
                    }
                    comp1 = comp1.comp;
                } else {
                    flag1 = false;
                }
            }
            var i3;
            var len1 = transforms1.length;
            var ptNew1;
            for(i3 = 0; i3 < len1; i3 += 1){
                ptNew1 = transforms1[i3].mat.applyToPointArray(0, 0, 0); // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);
                pt5 = [
                    pt5[0] - ptNew1[0],
                    pt5[1] - ptNew1[1],
                    0
                ];
            }
            return pt5;
        },
        mHelper: new Matrix()
    };
    function MaskElement(data1, element1, globalData1) {
        this.data = data1;
        this.element = element1;
        this.globalData = globalData1;
        this.storedData = [];
        this.masksProperties = this.data.masksProperties || [];
        this.maskElement = null;
        var defs1 = this.globalData.defs;
        var i3;
        var len1 = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(len1);
        this.solidPath = "";
        var path1;
        var properties1 = this.masksProperties;
        var count1 = 0;
        var currentMasks1 = [];
        var j3;
        var jLen1;
        var layerId1 = createElementID();
        var rect1;
        var expansor1;
        var feMorph1;
        var x4;
        var maskType1 = "clipPath";
        var maskRef1 = "clip-path";
        for(i3 = 0; i3 < len1; i3 += 1){
            if (properties1[i3].mode !== "a" && properties1[i3].mode !== "n" || properties1[i3].inv || properties1[i3].o.k !== 100 || properties1[i3].o.x) {
                maskType1 = "mask";
                maskRef1 = "mask";
            }
            if ((properties1[i3].mode === "s" || properties1[i3].mode === "i") && count1 === 0) {
                rect1 = createNS("rect");
                rect1.setAttribute("fill", "#ffffff");
                rect1.setAttribute("width", this.element.comp.data.w || 0);
                rect1.setAttribute("height", this.element.comp.data.h || 0);
                currentMasks1.push(rect1);
            } else {
                rect1 = null;
            }
            path1 = createNS("path");
            if (properties1[i3].mode === "n") {
                // TODO move this to a factory or to a constructor
                this.viewData[i3] = {
                    op: PropertyFactory.getProp(this.element, properties1[i3].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, properties1[i3], 3),
                    elem: path1,
                    lastPath: ""
                };
                defs1.appendChild(path1);
            } else {
                count1 += 1;
                path1.setAttribute("fill", properties1[i3].mode === "s" ? "#000000" : "#ffffff");
                path1.setAttribute("clip-rule", "nonzero");
                var filterID1;
                if (properties1[i3].x.k !== 0) {
                    maskType1 = "mask";
                    maskRef1 = "mask";
                    x4 = PropertyFactory.getProp(this.element, properties1[i3].x, 0, null, this.element);
                    filterID1 = createElementID();
                    expansor1 = createNS("filter");
                    expansor1.setAttribute("id", filterID1);
                    feMorph1 = createNS("feMorphology");
                    feMorph1.setAttribute("operator", "erode");
                    feMorph1.setAttribute("in", "SourceGraphic");
                    feMorph1.setAttribute("radius", "0");
                    expansor1.appendChild(feMorph1);
                    defs1.appendChild(expansor1);
                    path1.setAttribute("stroke", properties1[i3].mode === "s" ? "#000000" : "#ffffff");
                } else {
                    feMorph1 = null;
                    x4 = null;
                } // TODO move this to a factory or to a constructor
                this.storedData[i3] = {
                    elem: path1,
                    x: x4,
                    expan: feMorph1,
                    lastPath: "",
                    lastOperator: "",
                    filterId: filterID1,
                    lastRadius: 0
                };
                if (properties1[i3].mode === "i") {
                    jLen1 = currentMasks1.length;
                    var g3 = createNS("g");
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        g3.appendChild(currentMasks1[j3]);
                    }
                    var mask1 = createNS("mask");
                    mask1.setAttribute("mask-type", "alpha");
                    mask1.setAttribute("id", layerId1 + "_" + count1);
                    mask1.appendChild(path1);
                    defs1.appendChild(mask1);
                    g3.setAttribute("mask", "url(" + getLocationHref() + "#" + layerId1 + "_" + count1 + ")");
                    currentMasks1.length = 0;
                    currentMasks1.push(g3);
                } else {
                    currentMasks1.push(path1);
                }
                if (properties1[i3].inv && !this.solidPath) {
                    this.solidPath = this.createLayerSolidPath();
                } // TODO move this to a factory or to a constructor
                this.viewData[i3] = {
                    elem: path1,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, properties1[i3].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, properties1[i3], 3),
                    invRect: rect1
                };
                if (!this.viewData[i3].prop.k) {
                    this.drawPath(properties1[i3], this.viewData[i3].prop.v, this.viewData[i3]);
                }
            }
        }
        this.maskElement = createNS(maskType1);
        len1 = currentMasks1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.maskElement.appendChild(currentMasks1[i3]);
        }
        if (count1 > 0) {
            this.maskElement.setAttribute("id", layerId1);
            this.element.maskedElement.setAttribute(maskRef1, "url(" + getLocationHref() + "#" + layerId1 + ")");
            defs1.appendChild(this.maskElement);
        }
        if (this.viewData.length) {
            this.element.addRenderableComponent(this);
        }
    }
    MaskElement.prototype.getMaskProperty = function(pos1) {
        return this.viewData[pos1].prop;
    };
    MaskElement.prototype.renderFrame = function(isFirstFrame1) {
        var finalMat1 = this.element.finalTransform.mat;
        var i3;
        var len1 = this.masksProperties.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.viewData[i3].prop._mdf || isFirstFrame1) {
                this.drawPath(this.masksProperties[i3], this.viewData[i3].prop.v, this.viewData[i3]);
            }
            if (this.viewData[i3].op._mdf || isFirstFrame1) {
                this.viewData[i3].elem.setAttribute("fill-opacity", this.viewData[i3].op.v);
            }
            if (this.masksProperties[i3].mode !== "n") {
                if (this.viewData[i3].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame1)) {
                    this.viewData[i3].invRect.setAttribute("transform", finalMat1.getInverseMatrix().to2dCSS());
                }
                if (this.storedData[i3].x && (this.storedData[i3].x._mdf || isFirstFrame1)) {
                    var feMorph1 = this.storedData[i3].expan;
                    if (this.storedData[i3].x.v < 0) {
                        if (this.storedData[i3].lastOperator !== "erode") {
                            this.storedData[i3].lastOperator = "erode";
                            this.storedData[i3].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[i3].filterId + ")");
                        }
                        feMorph1.setAttribute("radius", -this.storedData[i3].x.v);
                    } else {
                        if (this.storedData[i3].lastOperator !== "dilate") {
                            this.storedData[i3].lastOperator = "dilate";
                            this.storedData[i3].elem.setAttribute("filter", null);
                        }
                        this.storedData[i3].elem.setAttribute("stroke-width", this.storedData[i3].x.v * 2);
                    }
                }
            }
        }
    };
    MaskElement.prototype.getMaskelement = function() {
        return this.maskElement;
    };
    MaskElement.prototype.createLayerSolidPath = function() {
        var path1 = "M0,0 ";
        path1 += " h" + this.globalData.compSize.w;
        path1 += " v" + this.globalData.compSize.h;
        path1 += " h-" + this.globalData.compSize.w;
        path1 += " v-" + this.globalData.compSize.h + " ";
        return path1;
    };
    MaskElement.prototype.drawPath = function(pathData1, pathNodes1, viewData1) {
        var pathString1 = " M" + pathNodes1.v[0][0] + "," + pathNodes1.v[0][1];
        var i3;
        var len1;
        len1 = pathNodes1._length;
        for(i3 = 1; i3 < len1; i3 += 1){
            // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
            pathString1 += " C" + pathNodes1.o[i3 - 1][0] + "," + pathNodes1.o[i3 - 1][1] + " " + pathNodes1.i[i3][0] + "," + pathNodes1.i[i3][1] + " " + pathNodes1.v[i3][0] + "," + pathNodes1.v[i3][1];
        } // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];
        if (pathNodes1.c && len1 > 1) {
            pathString1 += " C" + pathNodes1.o[i3 - 1][0] + "," + pathNodes1.o[i3 - 1][1] + " " + pathNodes1.i[0][0] + "," + pathNodes1.i[0][1] + " " + pathNodes1.v[0][0] + "," + pathNodes1.v[0][1];
        } // pathNodes.__renderedString = pathString;
        if (viewData1.lastPath !== pathString1) {
            var pathShapeValue1 = "";
            if (viewData1.elem) {
                if (pathNodes1.c) {
                    pathShapeValue1 = pathData1.inv ? this.solidPath + pathString1 : pathString1;
                }
                viewData1.elem.setAttribute("d", pathShapeValue1);
            }
            viewData1.lastPath = pathString1;
        }
    };
    MaskElement.prototype.destroy = function() {
        this.element = null;
        this.globalData = null;
        this.maskElement = null;
        this.data = null;
        this.masksProperties = null;
    };
    var filtersFactory = function() {
        var ob1 = {};
        ob1.createFilter = createFilter1;
        ob1.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter1;
        function createFilter1(filId1, skipCoordinates1) {
            var fil1 = createNS("filter");
            fil1.setAttribute("id", filId1);
            if (skipCoordinates1 !== true) {
                fil1.setAttribute("filterUnits", "objectBoundingBox");
                fil1.setAttribute("x", "0%");
                fil1.setAttribute("y", "0%");
                fil1.setAttribute("width", "100%");
                fil1.setAttribute("height", "100%");
            }
            return fil1;
        }
        function createAlphaToLuminanceFilter1() {
            var feColorMatrix1 = createNS("feColorMatrix");
            feColorMatrix1.setAttribute("type", "matrix");
            feColorMatrix1.setAttribute("color-interpolation-filters", "sRGB");
            feColorMatrix1.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1");
            return feColorMatrix1;
        }
        return ob1;
    }();
    var featureSupport = function() {
        var ob1 = {
            maskType: true,
            svgLumaHidden: true,
            offscreenCanvas: typeof OffscreenCanvas !== "undefined"
        };
        if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            ob1.maskType = false;
        }
        if (/firefox/i.test(navigator.userAgent)) {
            ob1.svgLumaHidden = false;
        }
        return ob1;
    }();
    var registeredEffects$1 = {};
    var idPrefix = "filter_result_";
    function SVGEffects(elem3) {
        var i3;
        var source1 = "SourceGraphic";
        var len1 = elem3.data.ef ? elem3.data.ef.length : 0;
        var filId1 = createElementID();
        var fil1 = filtersFactory.createFilter(filId1, true);
        var count1 = 0;
        this.filters = [];
        var filterManager1;
        for(i3 = 0; i3 < len1; i3 += 1){
            filterManager1 = null;
            var type1 = elem3.data.ef[i3].ty;
            if (registeredEffects$1[type1]) {
                var Effect1 = registeredEffects$1[type1].effect;
                filterManager1 = new Effect1(fil1, elem3.effectsManager.effectElements[i3], elem3, idPrefix + count1, source1);
                source1 = idPrefix + count1;
                if (registeredEffects$1[type1].countsAsEffect) {
                    count1 += 1;
                }
            }
            if (filterManager1) {
                this.filters.push(filterManager1);
            }
        }
        if (count1) {
            elem3.globalData.defs.appendChild(fil1);
            elem3.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + filId1 + ")");
        }
        if (this.filters.length) {
            elem3.addRenderableComponent(this);
        }
    }
    SVGEffects.prototype.renderFrame = function(_isFirstFrame1) {
        var i3;
        var len1 = this.filters.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.filters[i3].renderFrame(_isFirstFrame1);
        }
    };
    SVGEffects.prototype.getEffects = function(type1) {
        var i3;
        var len1 = this.filters.length;
        var effects1 = [];
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.filters[i3].type === type1) {
                effects1.push(this.filters[i3]);
            }
        }
        return effects1;
    };
    function registerEffect$1(id1, effect1, countsAsEffect1) {
        registeredEffects$1[id1] = {
            effect: effect1,
            countsAsEffect: countsAsEffect1
        };
    }
    function SVGBaseElement() {}
    SVGBaseElement.prototype = {
        initRendererElement: function initRendererElement1() {
            this.layerElement = createNS("g");
        },
        createContainerElements: function createContainerElements1() {
            this.matteElement = createNS("g");
            this.transformedElement = this.layerElement;
            this.maskedElement = this.layerElement;
            this._sizeChanged = false;
            var layerElementParent1 = null; // If this layer acts as a mask for the following layer
            if (this.data.td) {
                this.matteMasks = {};
                var gg1 = createNS("g");
                gg1.setAttribute("id", this.layerId);
                gg1.appendChild(this.layerElement);
                layerElementParent1 = gg1;
                this.globalData.defs.appendChild(gg1);
            } else if (this.data.tt) {
                this.matteElement.appendChild(this.layerElement);
                layerElementParent1 = this.matteElement;
                this.baseElement = this.matteElement;
            } else {
                this.baseElement = this.layerElement;
            }
            if (this.data.ln) {
                this.layerElement.setAttribute("id", this.data.ln);
            }
            if (this.data.cl) {
                this.layerElement.setAttribute("class", this.data.cl);
            } // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped
            if (this.data.ty === 0 && !this.data.hd) {
                var cp1 = createNS("clipPath");
                var pt5 = createNS("path");
                pt5.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                var clipId1 = createElementID();
                cp1.setAttribute("id", clipId1);
                cp1.appendChild(pt5);
                this.globalData.defs.appendChild(cp1);
                if (this.checkMasks()) {
                    var cpGroup1 = createNS("g");
                    cpGroup1.setAttribute("clip-path", "url(" + getLocationHref() + "#" + clipId1 + ")");
                    cpGroup1.appendChild(this.layerElement);
                    this.transformedElement = cpGroup1;
                    if (layerElementParent1) {
                        layerElementParent1.appendChild(this.transformedElement);
                    } else {
                        this.baseElement = this.transformedElement;
                    }
                } else {
                    this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + clipId1 + ")");
                }
            }
            if (this.data.bm !== 0) {
                this.setBlendMode();
            }
        },
        renderElement: function renderElement1() {
            if (this.finalTransform._localMatMdf) {
                this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS());
            }
            if (this.finalTransform._opMdf) {
                this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
            }
        },
        destroyBaseElement: function destroyBaseElement1() {
            this.layerElement = null;
            this.matteElement = null;
            this.maskManager.destroy();
        },
        getBaseElement: function getBaseElement1() {
            if (this.data.hd) {
                return null;
            }
            return this.baseElement;
        },
        createRenderableComponents: function createRenderableComponents1() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
            this.renderableEffectsManager = new SVGEffects(this);
            this.searchEffectTransforms();
        },
        getMatte: function getMatte1(matteType1) {
            // This should not be a common case. But for backward compatibility, we'll create the matte object.
            // It solves animations that have two consecutive layers marked as matte masks.
            // Which is an undefined behavior in AE.
            if (!this.matteMasks) {
                this.matteMasks = {};
            }
            if (!this.matteMasks[matteType1]) {
                var id1 = this.layerId + "_" + matteType1;
                var filId1;
                var fil1;
                var useElement1;
                var gg1;
                if (matteType1 === 1 || matteType1 === 3) {
                    var masker1 = createNS("mask");
                    masker1.setAttribute("id", id1);
                    masker1.setAttribute("mask-type", matteType1 === 3 ? "luminance" : "alpha");
                    useElement1 = createNS("use");
                    useElement1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                    masker1.appendChild(useElement1);
                    this.globalData.defs.appendChild(masker1);
                    if (!featureSupport.maskType && matteType1 === 1) {
                        masker1.setAttribute("mask-type", "luminance");
                        filId1 = createElementID();
                        fil1 = filtersFactory.createFilter(filId1);
                        this.globalData.defs.appendChild(fil1);
                        fil1.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                        gg1 = createNS("g");
                        gg1.appendChild(useElement1);
                        masker1.appendChild(gg1);
                        gg1.setAttribute("filter", "url(" + getLocationHref() + "#" + filId1 + ")");
                    }
                } else if (matteType1 === 2) {
                    var maskGroup1 = createNS("mask");
                    maskGroup1.setAttribute("id", id1);
                    maskGroup1.setAttribute("mask-type", "alpha");
                    var maskGrouper1 = createNS("g");
                    maskGroup1.appendChild(maskGrouper1);
                    filId1 = createElementID();
                    fil1 = filtersFactory.createFilter(filId1); /// /
                    var feCTr1 = createNS("feComponentTransfer");
                    feCTr1.setAttribute("in", "SourceGraphic");
                    fil1.appendChild(feCTr1);
                    var feFunc1 = createNS("feFuncA");
                    feFunc1.setAttribute("type", "table");
                    feFunc1.setAttribute("tableValues", "1.0 0.0");
                    feCTr1.appendChild(feFunc1); /// /
                    this.globalData.defs.appendChild(fil1);
                    var alphaRect1 = createNS("rect");
                    alphaRect1.setAttribute("width", this.comp.data.w);
                    alphaRect1.setAttribute("height", this.comp.data.h);
                    alphaRect1.setAttribute("x", "0");
                    alphaRect1.setAttribute("y", "0");
                    alphaRect1.setAttribute("fill", "#ffffff");
                    alphaRect1.setAttribute("opacity", "0");
                    maskGrouper1.setAttribute("filter", "url(" + getLocationHref() + "#" + filId1 + ")");
                    maskGrouper1.appendChild(alphaRect1);
                    useElement1 = createNS("use");
                    useElement1.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId);
                    maskGrouper1.appendChild(useElement1);
                    if (!featureSupport.maskType) {
                        maskGroup1.setAttribute("mask-type", "luminance");
                        fil1.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                        gg1 = createNS("g");
                        maskGrouper1.appendChild(alphaRect1);
                        gg1.appendChild(this.layerElement);
                        maskGrouper1.appendChild(gg1);
                    }
                    this.globalData.defs.appendChild(maskGroup1);
                }
                this.matteMasks[matteType1] = id1;
            }
            return this.matteMasks[matteType1];
        },
        setMatte: function setMatte1(id1) {
            if (!this.matteElement) {
                return;
            }
            this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + id1 + ")");
        }
    };
    /**
   * @file
   * Handles AE's layer parenting property.
   *
   */ function HierarchyElement() {}
    HierarchyElement.prototype = {
        /**
       * @function
       * Initializes hierarchy properties
       *
       */ initHierarchy: function initHierarchy1() {
            // element's parent list
            this.hierarchy = []; // if element is parent of another layer _isParent will be true
            this._isParent = false;
            this.checkParenting();
        },
        /**
       * @function
       * Sets layer's hierarchy.
       * @param {array} hierarch
       * layer's parent list
       *
       */ setHierarchy: function setHierarchy1(hierarchy1) {
            this.hierarchy = hierarchy1;
        },
        /**
       * @function
       * Sets layer as parent.
       *
       */ setAsParent: function setAsParent1() {
            this._isParent = true;
        },
        /**
       * @function
       * Searches layer's parenting chain
       *
       */ checkParenting: function checkParenting1() {
            if (this.data.parent !== undefined) {
                this.comp.buildElementParenting(this, this.data.parent, []);
            }
        }
    };
    function RenderableDOMElement() {}
    (function() {
        var _prototype1 = {
            initElement: function initElement1(data1, globalData1, comp1) {
                this.initFrame();
                this.initBaseData(data1, globalData1, comp1);
                this.initTransform(data1, globalData1, comp1);
                this.initHierarchy();
                this.initRenderable();
                this.initRendererElement();
                this.createContainerElements();
                this.createRenderableComponents();
                this.createContent();
                this.hide();
            },
            hide: function hide1() {
                // console.log('HIDE', this);
                if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                    var elem3 = this.baseElement || this.layerElement;
                    elem3.style.display = "none";
                    this.hidden = true;
                }
            },
            show: function show1() {
                // console.log('SHOW', this);
                if (this.isInRange && !this.isTransparent) {
                    if (!this.data.hd) {
                        var elem3 = this.baseElement || this.layerElement;
                        elem3.style.display = "block";
                    }
                    this.hidden = false;
                    this._isFirstFrame = true;
                }
            },
            renderFrame: function renderFrame1() {
                // If it is exported as hidden (data.hd === true) no need to render
                // If it is not visible no need to render
                if (this.data.hd || this.hidden) {
                    return;
                }
                this.renderTransform();
                this.renderRenderable();
                this.renderLocalTransform();
                this.renderElement();
                this.renderInnerContent();
                if (this._isFirstFrame) {
                    this._isFirstFrame = false;
                }
            },
            renderInnerContent: function renderInnerContent1() {},
            prepareFrame: function prepareFrame1(num1) {
                this._mdf = false;
                this.prepareRenderableFrame(num1);
                this.prepareProperties(num1, this.isInRange);
                this.checkTransparency();
            },
            destroy: function destroy1() {
                this.innerElem = null;
                this.destroyBaseElement();
            }
        };
        extendPrototype([
            RenderableElement,
            createProxyFunction(_prototype1)
        ], RenderableDOMElement);
    })();
    function IImageElement(data1, globalData1, comp1) {
        this.assetData = globalData1.getAssetData(data1.refId);
        if (this.assetData && this.assetData.sid) {
            this.assetData = globalData1.slotManager.getProp(this.assetData);
        }
        this.initElement(data1, globalData1, comp1);
        this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
        };
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        SVGBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], IImageElement);
    IImageElement.prototype.createContent = function() {
        var assetPath1 = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image");
        this.innerElem.setAttribute("width", this.assetData.w + "px");
        this.innerElem.setAttribute("height", this.assetData.h + "px");
        this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
        this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", assetPath1);
        this.layerElement.appendChild(this.innerElem);
    };
    IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect;
    };
    function ProcessedElement(element1, position1) {
        this.elem = element1;
        this.pos = position1;
    }
    function IShapeElement() {}
    IShapeElement.prototype = {
        addShapeToModifiers: function addShapeToModifiers1(data1) {
            var i3;
            var len1 = this.shapeModifiers.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.shapeModifiers[i3].addShape(data1);
            }
        },
        isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers1(data1) {
            var i3 = 0;
            var len1 = this.shapeModifiers.length;
            while(i3 < len1){
                if (this.shapeModifiers[i3].isAnimatedWithShape(data1)) {
                    return true;
                }
            }
            return false;
        },
        renderModifiers: function renderModifiers1() {
            if (!this.shapeModifiers.length) {
                return;
            }
            var i3;
            var len1 = this.shapes.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.shapes[i3].sh.reset();
            }
            len1 = this.shapeModifiers.length;
            var shouldBreakProcess1;
            for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                shouldBreakProcess1 = this.shapeModifiers[i3].processShapes(this._isFirstFrame); // workaround to fix cases where a repeater resets the shape so the following processes get called twice
                // TODO: find a better solution for this
                if (shouldBreakProcess1) {
                    break;
                }
            }
        },
        searchProcessedElement: function searchProcessedElement1(elem3) {
            var elements1 = this.processedElements;
            var i3 = 0;
            var len1 = elements1.length;
            while(i3 < len1){
                if (elements1[i3].elem === elem3) {
                    return elements1[i3].pos;
                }
                i3 += 1;
            }
            return 0;
        },
        addProcessedElement: function addProcessedElement1(elem3, pos1) {
            var elements1 = this.processedElements;
            var i3 = elements1.length;
            while(i3){
                i3 -= 1;
                if (elements1[i3].elem === elem3) {
                    elements1[i3].pos = pos1;
                    return;
                }
            }
            elements1.push(new ProcessedElement(elem3, pos1));
        },
        prepareFrame: function prepareFrame1(num1) {
            this.prepareRenderableFrame(num1);
            this.prepareProperties(num1, this.isInRange);
        }
    };
    var lineCapEnum = {
        1: "butt",
        2: "round",
        3: "square"
    };
    var lineJoinEnum = {
        1: "miter",
        2: "round",
        3: "bevel"
    };
    function SVGShapeData(transformers1, level1, shape3) {
        this.caches = [];
        this.styles = [];
        this.transformers = transformers1;
        this.lStr = "";
        this.sh = shape3;
        this.lvl = level1; // TODO find if there are some cases where _isAnimated can be false.
        // For now, since shapes add up with other shapes. They have to be calculated every time.
        // One way of finding out is checking if all styles associated to this shape depend only of this shape
        this._isAnimated = !!shape3.k; // TODO: commenting this for now since all shapes are animated
        var i3 = 0;
        var len1 = transformers1.length;
        while(i3 < len1){
            if (transformers1[i3].mProps.dynamicProperties.length) {
                this._isAnimated = true;
                break;
            }
            i3 += 1;
        }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = true;
    };
    function SVGStyleData(data1, level1) {
        this.data = data1;
        this.type = data1.ty;
        this.d = "";
        this.lvl = level1;
        this._mdf = false;
        this.closed = data1.hd === true;
        this.pElem = createNS("path");
        this.msElem = null;
    }
    SVGStyleData.prototype.reset = function() {
        this.d = "";
        this._mdf = false;
    };
    function DashProperty(elem3, data1, renderer1, container1) {
        this.elem = elem3;
        this.frameId = -1;
        this.dataProps = createSizedArray(data1.length);
        this.renderer = renderer1;
        this.k = false;
        this.dashStr = "";
        this.dashArray = createTypedArray("float32", data1.length ? data1.length - 1 : 0);
        this.dashoffset = createTypedArray("float32", 1);
        this.initDynamicPropertyContainer(container1);
        var i3;
        var len1 = data1.length || 0;
        var prop1;
        for(i3 = 0; i3 < len1; i3 += 1){
            prop1 = PropertyFactory.getProp(elem3, data1[i3].v, 0, 0, this);
            this.k = prop1.k || this.k;
            this.dataProps[i3] = {
                n: data1[i3].n,
                p: prop1
            };
        }
        if (!this.k) {
            this.getValue(true);
        }
        this._isAnimated = this.k;
    }
    DashProperty.prototype.getValue = function(forceRender1) {
        if (this.elem.globalData.frameId === this.frameId && !forceRender1) {
            return;
        }
        this.frameId = this.elem.globalData.frameId;
        this.iterateDynamicProperties();
        this._mdf = this._mdf || forceRender1;
        if (this._mdf) {
            var i3 = 0;
            var len1 = this.dataProps.length;
            if (this.renderer === "svg") {
                this.dashStr = "";
            }
            for(i3 = 0; i3 < len1; i3 += 1){
                if (this.dataProps[i3].n !== "o") {
                    if (this.renderer === "svg") {
                        this.dashStr += " " + this.dataProps[i3].p.v;
                    } else {
                        this.dashArray[i3] = this.dataProps[i3].p.v;
                    }
                } else {
                    this.dashoffset[0] = this.dataProps[i3].p.v;
                }
            }
        }
    };
    extendPrototype([
        DynamicPropertyContainer
    ], DashProperty);
    function SVGStrokeStyleData(elem3, data1, styleOb1) {
        this.initDynamicPropertyContainer(elem3);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(elem3, data1.o, 0, 0.01, this);
        this.w = PropertyFactory.getProp(elem3, data1.w, 0, null, this);
        this.d = new DashProperty(elem3, data1.d || {}, "svg", this);
        this.c = PropertyFactory.getProp(elem3, data1.c, 1, 255, this);
        this.style = styleOb1;
        this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([
        DynamicPropertyContainer
    ], SVGStrokeStyleData);
    function SVGFillStyleData(elem3, data1, styleOb1) {
        this.initDynamicPropertyContainer(elem3);
        this.getValue = this.iterateDynamicProperties;
        this.o = PropertyFactory.getProp(elem3, data1.o, 0, 0.01, this);
        this.c = PropertyFactory.getProp(elem3, data1.c, 1, 255, this);
        this.style = styleOb1;
    }
    extendPrototype([
        DynamicPropertyContainer
    ], SVGFillStyleData);
    function SVGNoStyleData(elem3, data1, styleOb1) {
        this.initDynamicPropertyContainer(elem3);
        this.getValue = this.iterateDynamicProperties;
        this.style = styleOb1;
    }
    extendPrototype([
        DynamicPropertyContainer
    ], SVGNoStyleData);
    function GradientProperty(elem3, data1, container1) {
        this.data = data1;
        this.c = createTypedArray("uint8c", data1.p * 4);
        var cLength1 = data1.k.k[0].s ? data1.k.k[0].s.length - data1.p * 4 : data1.k.k.length - data1.p * 4;
        this.o = createTypedArray("float32", cLength1);
        this._cmdf = false;
        this._omdf = false;
        this._collapsable = this.checkCollapsable();
        this._hasOpacity = cLength1;
        this.initDynamicPropertyContainer(container1);
        this.prop = PropertyFactory.getProp(elem3, data1.k, 1, null, this);
        this.k = this.prop.k;
        this.getValue(true);
    }
    GradientProperty.prototype.comparePoints = function(values1, points1) {
        var i3 = 0;
        var len1 = this.o.length / 2;
        var diff1;
        while(i3 < len1){
            diff1 = Math.abs(values1[i3 * 4] - values1[points1 * 4 + i3 * 2]);
            if (diff1 > 0.01) {
                return false;
            }
            i3 += 1;
        }
        return true;
    };
    GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 !== this.c.length / 4) {
            return false;
        }
        if (this.data.k.k[0].s) {
            var i3 = 0;
            var len1 = this.data.k.k.length;
            while(i3 < len1){
                if (!this.comparePoints(this.data.k.k[i3].s, this.data.p)) {
                    return false;
                }
                i3 += 1;
            }
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
            return false;
        }
        return true;
    };
    GradientProperty.prototype.getValue = function(forceRender1) {
        this.prop.getValue();
        this._mdf = false;
        this._cmdf = false;
        this._omdf = false;
        if (this.prop._mdf || forceRender1) {
            var i3;
            var len1 = this.data.p * 4;
            var mult1;
            var val3;
            for(i3 = 0; i3 < len1; i3 += 1){
                mult1 = i3 % 4 === 0 ? 100 : 255;
                val3 = Math.round(this.prop.v[i3] * mult1);
                if (this.c[i3] !== val3) {
                    this.c[i3] = val3;
                    this._cmdf = !forceRender1;
                }
            }
            if (this.o.length) {
                len1 = this.prop.v.length;
                for(i3 = this.data.p * 4; i3 < len1; i3 += 1){
                    mult1 = i3 % 2 === 0 ? 100 : 1;
                    val3 = i3 % 2 === 0 ? Math.round(this.prop.v[i3] * 100) : this.prop.v[i3];
                    if (this.o[i3 - this.data.p * 4] !== val3) {
                        this.o[i3 - this.data.p * 4] = val3;
                        this._omdf = !forceRender1;
                    }
                }
            }
            this._mdf = !forceRender1;
        }
    };
    extendPrototype([
        DynamicPropertyContainer
    ], GradientProperty);
    function SVGGradientFillStyleData(elem3, data1, styleOb1) {
        this.initDynamicPropertyContainer(elem3);
        this.getValue = this.iterateDynamicProperties;
        this.initGradientData(elem3, data1, styleOb1);
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(elem3, data1, styleOb1) {
        this.o = PropertyFactory.getProp(elem3, data1.o, 0, 0.01, this);
        this.s = PropertyFactory.getProp(elem3, data1.s, 1, null, this);
        this.e = PropertyFactory.getProp(elem3, data1.e, 1, null, this);
        this.h = PropertyFactory.getProp(elem3, data1.h || {
            k: 0
        }, 0, 0.01, this);
        this.a = PropertyFactory.getProp(elem3, data1.a || {
            k: 0
        }, 0, degToRads, this);
        this.g = new GradientProperty(elem3, data1.g, this);
        this.style = styleOb1;
        this.stops = [];
        this.setGradientData(styleOb1.pElem, data1);
        this.setGradientOpacity(data1, styleOb1);
        this._isAnimated = !!this._isAnimated;
    };
    SVGGradientFillStyleData.prototype.setGradientData = function(pathElement1, data1) {
        var gradientId1 = createElementID();
        var gfill1 = createNS(data1.t === 1 ? "linearGradient" : "radialGradient");
        gfill1.setAttribute("id", gradientId1);
        gfill1.setAttribute("spreadMethod", "pad");
        gfill1.setAttribute("gradientUnits", "userSpaceOnUse");
        var stops1 = [];
        var stop1;
        var j3;
        var jLen1;
        jLen1 = data1.g.p * 4;
        for(j3 = 0; j3 < jLen1; j3 += 4){
            stop1 = createNS("stop");
            gfill1.appendChild(stop1);
            stops1.push(stop1);
        }
        pathElement1.setAttribute(data1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + gradientId1 + ")");
        this.gf = gfill1;
        this.cst = stops1;
    };
    SVGGradientFillStyleData.prototype.setGradientOpacity = function(data1, styleOb1) {
        if (this.g._hasOpacity && !this.g._collapsable) {
            var stop1;
            var j3;
            var jLen1;
            var mask1 = createNS("mask");
            var maskElement1 = createNS("path");
            mask1.appendChild(maskElement1);
            var opacityId1 = createElementID();
            var maskId1 = createElementID();
            mask1.setAttribute("id", maskId1);
            var opFill1 = createNS(data1.t === 1 ? "linearGradient" : "radialGradient");
            opFill1.setAttribute("id", opacityId1);
            opFill1.setAttribute("spreadMethod", "pad");
            opFill1.setAttribute("gradientUnits", "userSpaceOnUse");
            jLen1 = data1.g.k.k[0].s ? data1.g.k.k[0].s.length : data1.g.k.k.length;
            var stops1 = this.stops;
            for(j3 = data1.g.p * 4; j3 < jLen1; j3 += 2){
                stop1 = createNS("stop");
                stop1.setAttribute("stop-color", "rgb(255,255,255)");
                opFill1.appendChild(stop1);
                stops1.push(stop1);
            }
            maskElement1.setAttribute(data1.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + opacityId1 + ")");
            if (data1.ty === "gs") {
                maskElement1.setAttribute("stroke-linecap", lineCapEnum[data1.lc || 2]);
                maskElement1.setAttribute("stroke-linejoin", lineJoinEnum[data1.lj || 2]);
                if (data1.lj === 1) {
                    maskElement1.setAttribute("stroke-miterlimit", data1.ml);
                }
            }
            this.of = opFill1;
            this.ms = mask1;
            this.ost = stops1;
            this.maskId = maskId1;
            styleOb1.msElem = maskElement1;
        }
    };
    extendPrototype([
        DynamicPropertyContainer
    ], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(elem3, data1, styleOb1) {
        this.initDynamicPropertyContainer(elem3);
        this.getValue = this.iterateDynamicProperties;
        this.w = PropertyFactory.getProp(elem3, data1.w, 0, null, this);
        this.d = new DashProperty(elem3, data1.d || {}, "svg", this);
        this.initGradientData(elem3, data1, styleOb1);
        this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([
        SVGGradientFillStyleData,
        DynamicPropertyContainer
    ], SVGGradientStrokeStyleData);
    function ShapeGroupData() {
        this.it = [];
        this.prevViewData = [];
        this.gr = createNS("g");
    }
    function SVGTransformData(mProps1, op1, container1) {
        this.transform = {
            mProps: mProps1,
            op: op1,
            container: container1
        };
        this.elements = [];
        this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var buildShapeString = function buildShapeString1(pathNodes1, length1, closed1, mat1) {
        if (length1 === 0) {
            return "";
        }
        var _o1 = pathNodes1.o;
        var _i1 = pathNodes1.i;
        var _v1 = pathNodes1.v;
        var i3;
        var shapeString1 = " M" + mat1.applyToPointStringified(_v1[0][0], _v1[0][1]);
        for(i3 = 1; i3 < length1; i3 += 1){
            shapeString1 += " C" + mat1.applyToPointStringified(_o1[i3 - 1][0], _o1[i3 - 1][1]) + " " + mat1.applyToPointStringified(_i1[i3][0], _i1[i3][1]) + " " + mat1.applyToPointStringified(_v1[i3][0], _v1[i3][1]);
        }
        if (closed1 && length1) {
            shapeString1 += " C" + mat1.applyToPointStringified(_o1[i3 - 1][0], _o1[i3 - 1][1]) + " " + mat1.applyToPointStringified(_i1[0][0], _i1[0][1]) + " " + mat1.applyToPointStringified(_v1[0][0], _v1[0][1]);
            shapeString1 += "z";
        }
        return shapeString1;
    };
    var SVGElementsRenderer = function() {
        var _identityMatrix1 = new Matrix();
        var _matrixHelper1 = new Matrix();
        var ob1 = {
            createRenderFunction: createRenderFunction1
        };
        function createRenderFunction1(data1) {
            switch(data1.ty){
                case "fl":
                    return renderFill1;
                case "gf":
                    return renderGradient1;
                case "gs":
                    return renderGradientStroke1;
                case "st":
                    return renderStroke1;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                    return renderPath1;
                case "tr":
                    return renderContentTransform1;
                case "no":
                    return renderNoop1;
                default:
                    return null;
            }
        }
        function renderContentTransform1(styleData1, itemData1, isFirstFrame1) {
            if (isFirstFrame1 || itemData1.transform.op._mdf) {
                itemData1.transform.container.setAttribute("opacity", itemData1.transform.op.v);
            }
            if (isFirstFrame1 || itemData1.transform.mProps._mdf) {
                itemData1.transform.container.setAttribute("transform", itemData1.transform.mProps.v.to2dCSS());
            }
        }
        function renderNoop1() {}
        function renderPath1(styleData1, itemData1, isFirstFrame1) {
            var j3;
            var jLen1;
            var pathStringTransformed1;
            var redraw1;
            var pathNodes1;
            var l3;
            var lLen1 = itemData1.styles.length;
            var lvl1 = itemData1.lvl;
            var paths1;
            var mat1;
            var iterations1;
            var k3;
            for(l3 = 0; l3 < lLen1; l3 += 1){
                redraw1 = itemData1.sh._mdf || isFirstFrame1;
                if (itemData1.styles[l3].lvl < lvl1) {
                    mat1 = _matrixHelper1.reset();
                    iterations1 = lvl1 - itemData1.styles[l3].lvl;
                    k3 = itemData1.transformers.length - 1;
                    while(!redraw1 && iterations1 > 0){
                        redraw1 = itemData1.transformers[k3].mProps._mdf || redraw1;
                        iterations1 -= 1;
                        k3 -= 1;
                    }
                    if (redraw1) {
                        iterations1 = lvl1 - itemData1.styles[l3].lvl;
                        k3 = itemData1.transformers.length - 1;
                        while(iterations1 > 0){
                            mat1.multiply(itemData1.transformers[k3].mProps.v);
                            iterations1 -= 1;
                            k3 -= 1;
                        }
                    }
                } else {
                    mat1 = _identityMatrix1;
                }
                paths1 = itemData1.sh.paths;
                jLen1 = paths1._length;
                if (redraw1) {
                    pathStringTransformed1 = "";
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        pathNodes1 = paths1.shapes[j3];
                        if (pathNodes1 && pathNodes1._length) {
                            pathStringTransformed1 += buildShapeString(pathNodes1, pathNodes1._length, pathNodes1.c, mat1);
                        }
                    }
                    itemData1.caches[l3] = pathStringTransformed1;
                } else {
                    pathStringTransformed1 = itemData1.caches[l3];
                }
                itemData1.styles[l3].d += styleData1.hd === true ? "" : pathStringTransformed1;
                itemData1.styles[l3]._mdf = redraw1 || itemData1.styles[l3]._mdf;
            }
        }
        function renderFill1(styleData1, itemData1, isFirstFrame1) {
            var styleElem1 = itemData1.style;
            if (itemData1.c._mdf || isFirstFrame1) {
                styleElem1.pElem.setAttribute("fill", "rgb(" + bmFloor(itemData1.c.v[0]) + "," + bmFloor(itemData1.c.v[1]) + "," + bmFloor(itemData1.c.v[2]) + ")");
            }
            if (itemData1.o._mdf || isFirstFrame1) {
                styleElem1.pElem.setAttribute("fill-opacity", itemData1.o.v);
            }
        }
        function renderGradientStroke1(styleData1, itemData1, isFirstFrame1) {
            renderGradient1(styleData1, itemData1, isFirstFrame1);
            renderStroke1(styleData1, itemData1, isFirstFrame1);
        }
        function renderGradient1(styleData1, itemData1, isFirstFrame1) {
            var gfill1 = itemData1.gf;
            var hasOpacity1 = itemData1.g._hasOpacity;
            var pt11 = itemData1.s.v;
            var pt21 = itemData1.e.v;
            if (itemData1.o._mdf || isFirstFrame1) {
                var attr3 = styleData1.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                itemData1.style.pElem.setAttribute(attr3, itemData1.o.v);
            }
            if (itemData1.s._mdf || isFirstFrame1) {
                var attr11 = styleData1.t === 1 ? "x1" : "cx";
                var attr21 = attr11 === "x1" ? "y1" : "cy";
                gfill1.setAttribute(attr11, pt11[0]);
                gfill1.setAttribute(attr21, pt11[1]);
                if (hasOpacity1 && !itemData1.g._collapsable) {
                    itemData1.of.setAttribute(attr11, pt11[0]);
                    itemData1.of.setAttribute(attr21, pt11[1]);
                }
            }
            var stops1;
            var i3;
            var len1;
            var stop1;
            if (itemData1.g._cmdf || isFirstFrame1) {
                stops1 = itemData1.cst;
                var cValues1 = itemData1.g.c;
                len1 = stops1.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    stop1 = stops1[i3];
                    stop1.setAttribute("offset", cValues1[i3 * 4] + "%");
                    stop1.setAttribute("stop-color", "rgb(" + cValues1[i3 * 4 + 1] + "," + cValues1[i3 * 4 + 2] + "," + cValues1[i3 * 4 + 3] + ")");
                }
            }
            if (hasOpacity1 && (itemData1.g._omdf || isFirstFrame1)) {
                var oValues1 = itemData1.g.o;
                if (itemData1.g._collapsable) {
                    stops1 = itemData1.cst;
                } else {
                    stops1 = itemData1.ost;
                }
                len1 = stops1.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    stop1 = stops1[i3];
                    if (!itemData1.g._collapsable) {
                        stop1.setAttribute("offset", oValues1[i3 * 2] + "%");
                    }
                    stop1.setAttribute("stop-opacity", oValues1[i3 * 2 + 1]);
                }
            }
            if (styleData1.t === 1) {
                if (itemData1.e._mdf || isFirstFrame1) {
                    gfill1.setAttribute("x2", pt21[0]);
                    gfill1.setAttribute("y2", pt21[1]);
                    if (hasOpacity1 && !itemData1.g._collapsable) {
                        itemData1.of.setAttribute("x2", pt21[0]);
                        itemData1.of.setAttribute("y2", pt21[1]);
                    }
                }
            } else {
                var rad1;
                if (itemData1.s._mdf || itemData1.e._mdf || isFirstFrame1) {
                    rad1 = Math.sqrt(Math.pow(pt11[0] - pt21[0], 2) + Math.pow(pt11[1] - pt21[1], 2));
                    gfill1.setAttribute("r", rad1);
                    if (hasOpacity1 && !itemData1.g._collapsable) {
                        itemData1.of.setAttribute("r", rad1);
                    }
                }
                if (itemData1.e._mdf || itemData1.h._mdf || itemData1.a._mdf || isFirstFrame1) {
                    if (!rad1) {
                        rad1 = Math.sqrt(Math.pow(pt11[0] - pt21[0], 2) + Math.pow(pt11[1] - pt21[1], 2));
                    }
                    var ang1 = Math.atan2(pt21[1] - pt11[1], pt21[0] - pt11[0]);
                    var percent1 = itemData1.h.v;
                    if (percent1 >= 1) {
                        percent1 = 0.99;
                    } else if (percent1 <= -1) {
                        percent1 = -0.99;
                    }
                    var dist4 = rad1 * percent1;
                    var x4 = Math.cos(ang1 + itemData1.a.v) * dist4 + pt11[0];
                    var y4 = Math.sin(ang1 + itemData1.a.v) * dist4 + pt11[1];
                    gfill1.setAttribute("fx", x4);
                    gfill1.setAttribute("fy", y4);
                    if (hasOpacity1 && !itemData1.g._collapsable) {
                        itemData1.of.setAttribute("fx", x4);
                        itemData1.of.setAttribute("fy", y4);
                    }
                } // gfill.setAttribute('fy','200');
            }
        }
        function renderStroke1(styleData1, itemData1, isFirstFrame1) {
            var styleElem1 = itemData1.style;
            var d3 = itemData1.d;
            if (d3 && (d3._mdf || isFirstFrame1) && d3.dashStr) {
                styleElem1.pElem.setAttribute("stroke-dasharray", d3.dashStr);
                styleElem1.pElem.setAttribute("stroke-dashoffset", d3.dashoffset[0]);
            }
            if (itemData1.c && (itemData1.c._mdf || isFirstFrame1)) {
                styleElem1.pElem.setAttribute("stroke", "rgb(" + bmFloor(itemData1.c.v[0]) + "," + bmFloor(itemData1.c.v[1]) + "," + bmFloor(itemData1.c.v[2]) + ")");
            }
            if (itemData1.o._mdf || isFirstFrame1) {
                styleElem1.pElem.setAttribute("stroke-opacity", itemData1.o.v);
            }
            if (itemData1.w._mdf || isFirstFrame1) {
                styleElem1.pElem.setAttribute("stroke-width", itemData1.w.v);
                if (styleElem1.msElem) {
                    styleElem1.msElem.setAttribute("stroke-width", itemData1.w.v);
                }
            }
        }
        return ob1;
    }();
    function SVGShapeElement(data1, globalData1, comp1) {
        // List of drawable elements
        this.shapes = []; // Full shape data
        this.shapesData = data1.shapes; // List of styles that will be applied to shapes
        this.stylesList = []; // List of modifiers that will be applied to shapes
        this.shapeModifiers = []; // List of items in shape tree
        this.itemsData = []; // List of items in previous shape tree
        this.processedElements = []; // List of animated components
        this.animatedContents = [];
        this.initElement(data1, globalData1, comp1); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
        // List of elements that have been created
        this.prevViewData = []; // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        SVGBaseElement,
        IShapeElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], SVGShapeElement);
    SVGShapeElement.prototype.initSecondaryElement = function() {};
    SVGShapeElement.prototype.identityMatrix = new Matrix();
    SVGShapeElement.prototype.buildExpressionInterface = function() {};
    SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
        this.filterUniqueShapes();
    };
    /*
  This method searches for multiple shapes that affect a single element and one of them is animated
  */ SVGShapeElement.prototype.filterUniqueShapes = function() {
        var i3;
        var len1 = this.shapes.length;
        var shape3;
        var j3;
        var jLen1 = this.stylesList.length;
        var style1;
        var tempShapes1 = [];
        var areAnimated1 = false;
        for(j3 = 0; j3 < jLen1; j3 += 1){
            style1 = this.stylesList[j3];
            areAnimated1 = false;
            tempShapes1.length = 0;
            for(i3 = 0; i3 < len1; i3 += 1){
                shape3 = this.shapes[i3];
                if (shape3.styles.indexOf(style1) !== -1) {
                    tempShapes1.push(shape3);
                    areAnimated1 = shape3._isAnimated || areAnimated1;
                }
            }
            if (tempShapes1.length > 1 && areAnimated1) {
                this.setShapesAsAnimated(tempShapes1);
            }
        }
    };
    SVGShapeElement.prototype.setShapesAsAnimated = function(shapes1) {
        var i3;
        var len1 = shapes1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            shapes1[i3].setAsAnimated();
        }
    };
    SVGShapeElement.prototype.createStyleElement = function(data1, level1) {
        // TODO: prevent drawing of hidden styles
        var elementData1;
        var styleOb1 = new SVGStyleData(data1, level1);
        var pathElement1 = styleOb1.pElem;
        if (data1.ty === "st") {
            elementData1 = new SVGStrokeStyleData(this, data1, styleOb1);
        } else if (data1.ty === "fl") {
            elementData1 = new SVGFillStyleData(this, data1, styleOb1);
        } else if (data1.ty === "gf" || data1.ty === "gs") {
            var GradientConstructor1 = data1.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
            elementData1 = new GradientConstructor1(this, data1, styleOb1);
            this.globalData.defs.appendChild(elementData1.gf);
            if (elementData1.maskId) {
                this.globalData.defs.appendChild(elementData1.ms);
                this.globalData.defs.appendChild(elementData1.of);
                pathElement1.setAttribute("mask", "url(" + getLocationHref() + "#" + elementData1.maskId + ")");
            }
        } else if (data1.ty === "no") {
            elementData1 = new SVGNoStyleData(this, data1, styleOb1);
        }
        if (data1.ty === "st" || data1.ty === "gs") {
            pathElement1.setAttribute("stroke-linecap", lineCapEnum[data1.lc || 2]);
            pathElement1.setAttribute("stroke-linejoin", lineJoinEnum[data1.lj || 2]);
            pathElement1.setAttribute("fill-opacity", "0");
            if (data1.lj === 1) {
                pathElement1.setAttribute("stroke-miterlimit", data1.ml);
            }
        }
        if (data1.r === 2) {
            pathElement1.setAttribute("fill-rule", "evenodd");
        }
        if (data1.ln) {
            pathElement1.setAttribute("id", data1.ln);
        }
        if (data1.cl) {
            pathElement1.setAttribute("class", data1.cl);
        }
        if (data1.bm) {
            pathElement1.style["mix-blend-mode"] = getBlendMode(data1.bm);
        }
        this.stylesList.push(styleOb1);
        this.addToAnimatedContents(data1, elementData1);
        return elementData1;
    };
    SVGShapeElement.prototype.createGroupElement = function(data1) {
        var elementData1 = new ShapeGroupData();
        if (data1.ln) {
            elementData1.gr.setAttribute("id", data1.ln);
        }
        if (data1.cl) {
            elementData1.gr.setAttribute("class", data1.cl);
        }
        if (data1.bm) {
            elementData1.gr.style["mix-blend-mode"] = getBlendMode(data1.bm);
        }
        return elementData1;
    };
    SVGShapeElement.prototype.createTransformElement = function(data1, container1) {
        var transformProperty1 = TransformPropertyFactory.getTransformProperty(this, data1, this);
        var elementData1 = new SVGTransformData(transformProperty1, transformProperty1.o, container1);
        this.addToAnimatedContents(data1, elementData1);
        return elementData1;
    };
    SVGShapeElement.prototype.createShapeElement = function(data1, ownTransformers1, level1) {
        var ty1 = 4;
        if (data1.ty === "rc") {
            ty1 = 5;
        } else if (data1.ty === "el") {
            ty1 = 6;
        } else if (data1.ty === "sr") {
            ty1 = 7;
        }
        var shapeProperty1 = ShapePropertyFactory.getShapeProp(this, data1, ty1, this);
        var elementData1 = new SVGShapeData(ownTransformers1, level1, shapeProperty1);
        this.shapes.push(elementData1);
        this.addShapeToModifiers(elementData1);
        this.addToAnimatedContents(data1, elementData1);
        return elementData1;
    };
    SVGShapeElement.prototype.addToAnimatedContents = function(data1, element1) {
        var i3 = 0;
        var len1 = this.animatedContents.length;
        while(i3 < len1){
            if (this.animatedContents[i3].element === element1) {
                return;
            }
            i3 += 1;
        }
        this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(data1),
            element: element1,
            data: data1
        });
    };
    SVGShapeElement.prototype.setElementStyles = function(elementData1) {
        var arr3 = elementData1.styles;
        var j3;
        var jLen1 = this.stylesList.length;
        for(j3 = 0; j3 < jLen1; j3 += 1){
            if (!this.stylesList[j3].closed) {
                arr3.push(this.stylesList[j3]);
            }
        }
    };
    SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = true;
        var i3;
        var len1 = this.itemsData.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.prevViewData[i3] = this.itemsData[i3];
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
        this.filterUniqueShapes();
        len1 = this.dynamicProperties.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.dynamicProperties[i3].getValue();
        }
        this.renderModifiers();
    };
    SVGShapeElement.prototype.searchShapes = function(arr3, itemsData1, prevViewData1, container1, level1, transformers1, render1) {
        var ownTransformers1 = [].concat(transformers1);
        var i3;
        var len1 = arr3.length - 1;
        var j3;
        var jLen1;
        var ownStyles1 = [];
        var ownModifiers1 = [];
        var currentTransform1;
        var modifier1;
        var processedPos1;
        for(i3 = len1; i3 >= 0; i3 -= 1){
            processedPos1 = this.searchProcessedElement(arr3[i3]);
            if (!processedPos1) {
                arr3[i3]._render = render1;
            } else {
                itemsData1[i3] = prevViewData1[processedPos1 - 1];
            }
            if (arr3[i3].ty === "fl" || arr3[i3].ty === "st" || arr3[i3].ty === "gf" || arr3[i3].ty === "gs" || arr3[i3].ty === "no") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createStyleElement(arr3[i3], level1);
                } else {
                    itemsData1[i3].style.closed = false;
                }
                if (arr3[i3]._render) {
                    if (itemsData1[i3].style.pElem.parentNode !== container1) {
                        container1.appendChild(itemsData1[i3].style.pElem);
                    }
                }
                ownStyles1.push(itemsData1[i3].style);
            } else if (arr3[i3].ty === "gr") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createGroupElement(arr3[i3]);
                } else {
                    jLen1 = itemsData1[i3].it.length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        itemsData1[i3].prevViewData[j3] = itemsData1[i3].it[j3];
                    }
                }
                this.searchShapes(arr3[i3].it, itemsData1[i3].it, itemsData1[i3].prevViewData, itemsData1[i3].gr, level1 + 1, ownTransformers1, render1);
                if (arr3[i3]._render) {
                    if (itemsData1[i3].gr.parentNode !== container1) {
                        container1.appendChild(itemsData1[i3].gr);
                    }
                }
            } else if (arr3[i3].ty === "tr") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createTransformElement(arr3[i3], container1);
                }
                currentTransform1 = itemsData1[i3].transform;
                ownTransformers1.push(currentTransform1);
            } else if (arr3[i3].ty === "sh" || arr3[i3].ty === "rc" || arr3[i3].ty === "el" || arr3[i3].ty === "sr") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createShapeElement(arr3[i3], ownTransformers1, level1);
                }
                this.setElementStyles(itemsData1[i3]);
            } else if (arr3[i3].ty === "tm" || arr3[i3].ty === "rd" || arr3[i3].ty === "ms" || arr3[i3].ty === "pb" || arr3[i3].ty === "zz" || arr3[i3].ty === "op") {
                if (!processedPos1) {
                    modifier1 = ShapeModifiers.getModifier(arr3[i3].ty);
                    modifier1.init(this, arr3[i3]);
                    itemsData1[i3] = modifier1;
                    this.shapeModifiers.push(modifier1);
                } else {
                    modifier1 = itemsData1[i3];
                    modifier1.closed = false;
                }
                ownModifiers1.push(modifier1);
            } else if (arr3[i3].ty === "rp") {
                if (!processedPos1) {
                    modifier1 = ShapeModifiers.getModifier(arr3[i3].ty);
                    itemsData1[i3] = modifier1;
                    modifier1.init(this, arr3, i3, itemsData1);
                    this.shapeModifiers.push(modifier1);
                    render1 = false;
                } else {
                    modifier1 = itemsData1[i3];
                    modifier1.closed = true;
                }
                ownModifiers1.push(modifier1);
            }
            this.addProcessedElement(arr3[i3], i3 + 1);
        }
        len1 = ownStyles1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            ownStyles1[i3].closed = true;
        }
        len1 = ownModifiers1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            ownModifiers1[i3].closed = true;
        }
    };
    SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var i3;
        var len1 = this.stylesList.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.stylesList[i3].reset();
        }
        this.renderShape();
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.stylesList[i3]._mdf || this._isFirstFrame) {
                if (this.stylesList[i3].msElem) {
                    this.stylesList[i3].msElem.setAttribute("d", this.stylesList[i3].d); // Adding M0 0 fixes same mask bug on all browsers
                    this.stylesList[i3].d = "M0 0" + this.stylesList[i3].d;
                }
                this.stylesList[i3].pElem.setAttribute("d", this.stylesList[i3].d || "M0 0");
            }
        }
    };
    SVGShapeElement.prototype.renderShape = function() {
        var i3;
        var len1 = this.animatedContents.length;
        var animatedContent1;
        for(i3 = 0; i3 < len1; i3 += 1){
            animatedContent1 = this.animatedContents[i3];
            if ((this._isFirstFrame || animatedContent1.element._isAnimated) && animatedContent1.data !== true) {
                animatedContent1.fn(animatedContent1.data, animatedContent1.element, this._isFirstFrame);
            }
        }
    };
    SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement();
        this.shapesData = null;
        this.itemsData = null;
    };
    function LetterProps(o3, sw1, sc1, fc1, m3, p6) {
        this.o = o3;
        this.sw = sw1;
        this.sc = sc1;
        this.fc = fc1;
        this.m = m3;
        this.p = p6;
        this._mdf = {
            o: true,
            sw: !!sw1,
            sc: !!sc1,
            fc: !!fc1,
            m: true,
            p: true
        };
    }
    LetterProps.prototype.update = function(o3, sw1, sc1, fc1, m3, p6) {
        this._mdf.o = false;
        this._mdf.sw = false;
        this._mdf.sc = false;
        this._mdf.fc = false;
        this._mdf.m = false;
        this._mdf.p = false;
        var updated1 = false;
        if (this.o !== o3) {
            this.o = o3;
            this._mdf.o = true;
            updated1 = true;
        }
        if (this.sw !== sw1) {
            this.sw = sw1;
            this._mdf.sw = true;
            updated1 = true;
        }
        if (this.sc !== sc1) {
            this.sc = sc1;
            this._mdf.sc = true;
            updated1 = true;
        }
        if (this.fc !== fc1) {
            this.fc = fc1;
            this._mdf.fc = true;
            updated1 = true;
        }
        if (this.m !== m3) {
            this.m = m3;
            this._mdf.m = true;
            updated1 = true;
        }
        if (p6.length && (this.p[0] !== p6[0] || this.p[1] !== p6[1] || this.p[4] !== p6[4] || this.p[5] !== p6[5] || this.p[12] !== p6[12] || this.p[13] !== p6[13])) {
            this.p = p6;
            this._mdf.p = true;
            updated1 = true;
        }
        return updated1;
    };
    function TextProperty(elem3, data1) {
        this._frameId = initialDefaultFrame;
        this.pv = "";
        this.v = "";
        this.kf = false;
        this._isFirstFrame = true;
        this._mdf = false;
        if (data1.d && data1.d.sid) {
            data1.d = elem3.globalData.slotManager.getProp(data1.d);
        }
        this.data = data1;
        this.elem = elem3;
        this.comp = this.elem.comp;
        this.keysIndex = 0;
        this.canResize = false;
        this.minimumFontSize = 1;
        this.effectsSequence = [];
        this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: false,
            strokeColorAnim: false,
            strokeWidthAnim: false,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: false
        };
        this.copyData(this.currentData, this.data.d.k[0].s);
        if (!this.searchProperty()) {
            this.completeTextData(this.currentData);
        }
    }
    TextProperty.prototype.defaultBoxWidth = [
        0,
        0
    ];
    TextProperty.prototype.copyData = function(obj1, data1) {
        for(var s4 in data1){
            if (Object.prototype.hasOwnProperty.call(data1, s4)) {
                obj1[s4] = data1[s4];
            }
        }
        return obj1;
    };
    TextProperty.prototype.setCurrentData = function(data1) {
        if (!data1.__complete) {
            this.completeTextData(data1);
        }
        this.currentData = data1;
        this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
        this._mdf = true;
    };
    TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes();
    };
    TextProperty.prototype.searchKeyframes = function() {
        this.kf = this.data.d.k.length > 1;
        if (this.kf) {
            this.addEffect(this.getKeyframeValue.bind(this));
        }
        return this.kf;
    };
    TextProperty.prototype.addEffect = function(effectFunction1) {
        this.effectsSequence.push(effectFunction1);
        this.elem.addDynamicProperty(this);
    };
    TextProperty.prototype.getValue = function(_finalValue1) {
        if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue1) {
            return;
        }
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var currentValue1 = this.currentData;
        var currentIndex1 = this.keysIndex;
        if (this.lock) {
            this.setCurrentData(this.currentData);
            return;
        }
        this.lock = true;
        this._mdf = false;
        var i3;
        var len1 = this.effectsSequence.length;
        var finalValue1 = _finalValue1 || this.data.d.k[this.keysIndex].s;
        for(i3 = 0; i3 < len1; i3 += 1){
            // Checking if index changed to prevent creating a new object every time the expression updates.
            if (currentIndex1 !== this.keysIndex) {
                finalValue1 = this.effectsSequence[i3](finalValue1, finalValue1.t);
            } else {
                finalValue1 = this.effectsSequence[i3](this.currentData, finalValue1.t);
            }
        }
        if (currentValue1 !== finalValue1) {
            this.setCurrentData(finalValue1);
        }
        this.v = this.currentData;
        this.pv = this.v;
        this.lock = false;
        this.frameId = this.elem.globalData.frameId;
    };
    TextProperty.prototype.getKeyframeValue = function() {
        var textKeys1 = this.data.d.k;
        var frameNum1 = this.elem.comp.renderedFrame;
        var i3 = 0;
        var len1 = textKeys1.length;
        while(i3 <= len1 - 1){
            if (i3 === len1 - 1 || textKeys1[i3 + 1].t > frameNum1) {
                break;
            }
            i3 += 1;
        }
        if (this.keysIndex !== i3) {
            this.keysIndex = i3;
        }
        return this.data.d.k[this.keysIndex].s;
    };
    TextProperty.prototype.buildFinalText = function(text1) {
        var charactersArray1 = [];
        var i3 = 0;
        var len1 = text1.length;
        var charCode1;
        var secondCharCode1;
        var shouldCombine1 = false;
        var shouldCombineNext1 = false;
        var currentChars1 = "";
        while(i3 < len1){
            shouldCombine1 = shouldCombineNext1;
            shouldCombineNext1 = false;
            charCode1 = text1.charCodeAt(i3);
            currentChars1 = text1.charAt(i3);
            if (FontManager.isCombinedCharacter(charCode1)) {
                shouldCombine1 = true; // It's a potential surrogate pair (this is the High surrogate)
            } else if (charCode1 >= 0xD800 && charCode1 <= 0xDBFF) {
                if (FontManager.isRegionalFlag(text1, i3)) {
                    currentChars1 = text1.substr(i3, 14);
                } else {
                    secondCharCode1 = text1.charCodeAt(i3 + 1); // It's a surrogate pair (this is the Low surrogate)
                    if (secondCharCode1 >= 0xDC00 && secondCharCode1 <= 0xDFFF) {
                        if (FontManager.isModifier(charCode1, secondCharCode1)) {
                            currentChars1 = text1.substr(i3, 2);
                            shouldCombine1 = true;
                        } else if (FontManager.isFlagEmoji(text1.substr(i3, 4))) {
                            currentChars1 = text1.substr(i3, 4);
                        } else {
                            currentChars1 = text1.substr(i3, 2);
                        }
                    }
                }
            } else if (charCode1 > 0xDBFF) {
                secondCharCode1 = text1.charCodeAt(i3 + 1);
                if (FontManager.isVariationSelector(charCode1)) {
                    shouldCombine1 = true;
                }
            } else if (FontManager.isZeroWidthJoiner(charCode1)) {
                shouldCombine1 = true;
                shouldCombineNext1 = true;
            }
            if (shouldCombine1) {
                charactersArray1[charactersArray1.length - 1] += currentChars1;
                shouldCombine1 = false;
            } else {
                charactersArray1.push(currentChars1);
            }
            i3 += currentChars1.length;
        }
        return charactersArray1;
    };
    TextProperty.prototype.completeTextData = function(documentData1) {
        documentData1.__complete = true;
        var fontManager1 = this.elem.globalData.fontManager;
        var data1 = this.data;
        var letters1 = [];
        var i3;
        var len1;
        var newLineFlag1;
        var index1 = 0;
        var val3;
        var anchorGrouping1 = data1.m.g;
        var currentSize1 = 0;
        var currentPos1 = 0;
        var currentLine1 = 0;
        var lineWidths1 = [];
        var lineWidth1 = 0;
        var maxLineWidth1 = 0;
        var j3;
        var jLen1;
        var fontData1 = fontManager1.getFontByName(documentData1.f);
        var charData1;
        var cLength1 = 0;
        var fontProps1 = getFontProperties(fontData1);
        documentData1.fWeight = fontProps1.weight;
        documentData1.fStyle = fontProps1.style;
        documentData1.finalSize = documentData1.s;
        documentData1.finalText = this.buildFinalText(documentData1.t);
        len1 = documentData1.finalText.length;
        documentData1.finalLineHeight = documentData1.lh;
        var trackingOffset1 = documentData1.tr / 1000 * documentData1.finalSize;
        var charCode1;
        if (documentData1.sz) {
            var flag1 = true;
            var boxWidth1 = documentData1.sz[0];
            var boxHeight1 = documentData1.sz[1];
            var currentHeight1;
            var finalText1;
            while(flag1){
                finalText1 = this.buildFinalText(documentData1.t);
                currentHeight1 = 0;
                lineWidth1 = 0;
                len1 = finalText1.length;
                trackingOffset1 = documentData1.tr / 1000 * documentData1.finalSize;
                var lastSpaceIndex1 = -1;
                for(i3 = 0; i3 < len1; i3 += 1){
                    charCode1 = finalText1[i3].charCodeAt(0);
                    newLineFlag1 = false;
                    if (finalText1[i3] === " ") {
                        lastSpaceIndex1 = i3;
                    } else if (charCode1 === 13 || charCode1 === 3) {
                        lineWidth1 = 0;
                        newLineFlag1 = true;
                        currentHeight1 += documentData1.finalLineHeight || documentData1.finalSize * 1.2;
                    }
                    if (fontManager1.chars) {
                        charData1 = fontManager1.getCharData(finalText1[i3], fontData1.fStyle, fontData1.fFamily);
                        cLength1 = newLineFlag1 ? 0 : charData1.w * documentData1.finalSize / 100;
                    } else {
                        // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
                        cLength1 = fontManager1.measureText(finalText1[i3], documentData1.f, documentData1.finalSize);
                    }
                    if (lineWidth1 + cLength1 > boxWidth1 && finalText1[i3] !== " ") {
                        if (lastSpaceIndex1 === -1) {
                            len1 += 1;
                        } else {
                            i3 = lastSpaceIndex1;
                        }
                        currentHeight1 += documentData1.finalLineHeight || documentData1.finalSize * 1.2;
                        finalText1.splice(i3, lastSpaceIndex1 === i3 ? 1 : 0, "\r"); // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);
                        lastSpaceIndex1 = -1;
                        lineWidth1 = 0;
                    } else {
                        lineWidth1 += cLength1;
                        lineWidth1 += trackingOffset1;
                    }
                }
                currentHeight1 += fontData1.ascent * documentData1.finalSize / 100;
                if (this.canResize && documentData1.finalSize > this.minimumFontSize && boxHeight1 < currentHeight1) {
                    documentData1.finalSize -= 1;
                    documentData1.finalLineHeight = documentData1.finalSize * documentData1.lh / documentData1.s;
                } else {
                    documentData1.finalText = finalText1;
                    len1 = documentData1.finalText.length;
                    flag1 = false;
                }
            }
        }
        lineWidth1 = -trackingOffset1;
        cLength1 = 0;
        var uncollapsedSpaces1 = 0;
        var currentChar1;
        for(i3 = 0; i3 < len1; i3 += 1){
            newLineFlag1 = false;
            currentChar1 = documentData1.finalText[i3];
            charCode1 = currentChar1.charCodeAt(0);
            if (charCode1 === 13 || charCode1 === 3) {
                uncollapsedSpaces1 = 0;
                lineWidths1.push(lineWidth1);
                maxLineWidth1 = lineWidth1 > maxLineWidth1 ? lineWidth1 : maxLineWidth1;
                lineWidth1 = -2 * trackingOffset1;
                val3 = "";
                newLineFlag1 = true;
                currentLine1 += 1;
            } else {
                val3 = currentChar1;
            }
            if (fontManager1.chars) {
                charData1 = fontManager1.getCharData(currentChar1, fontData1.fStyle, fontManager1.getFontByName(documentData1.f).fFamily);
                cLength1 = newLineFlag1 ? 0 : charData1.w * documentData1.finalSize / 100;
            } else {
                // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
                // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
                cLength1 = fontManager1.measureText(val3, documentData1.f, documentData1.finalSize);
            } //
            if (currentChar1 === " ") {
                uncollapsedSpaces1 += cLength1 + trackingOffset1;
            } else {
                lineWidth1 += cLength1 + trackingOffset1 + uncollapsedSpaces1;
                uncollapsedSpaces1 = 0;
            }
            letters1.push({
                l: cLength1,
                an: cLength1,
                add: currentSize1,
                n: newLineFlag1,
                anIndexes: [],
                val: val3,
                line: currentLine1,
                animatorJustifyOffset: 0
            });
            if (anchorGrouping1 == 2) {
                // eslint-disable-line eqeqeq
                currentSize1 += cLength1;
                if (val3 === "" || val3 === " " || i3 === len1 - 1) {
                    if (val3 === "" || val3 === " ") {
                        currentSize1 -= cLength1;
                    }
                    while(currentPos1 <= i3){
                        letters1[currentPos1].an = currentSize1;
                        letters1[currentPos1].ind = index1;
                        letters1[currentPos1].extra = cLength1;
                        currentPos1 += 1;
                    }
                    index1 += 1;
                    currentSize1 = 0;
                }
            } else if (anchorGrouping1 == 3) {
                // eslint-disable-line eqeqeq
                currentSize1 += cLength1;
                if (val3 === "" || i3 === len1 - 1) {
                    if (val3 === "") {
                        currentSize1 -= cLength1;
                    }
                    while(currentPos1 <= i3){
                        letters1[currentPos1].an = currentSize1;
                        letters1[currentPos1].ind = index1;
                        letters1[currentPos1].extra = cLength1;
                        currentPos1 += 1;
                    }
                    currentSize1 = 0;
                    index1 += 1;
                }
            } else {
                letters1[index1].ind = index1;
                letters1[index1].extra = 0;
                index1 += 1;
            }
        }
        documentData1.l = letters1;
        maxLineWidth1 = lineWidth1 > maxLineWidth1 ? lineWidth1 : maxLineWidth1;
        lineWidths1.push(lineWidth1);
        if (documentData1.sz) {
            documentData1.boxWidth = documentData1.sz[0];
            documentData1.justifyOffset = 0;
        } else {
            documentData1.boxWidth = maxLineWidth1;
            switch(documentData1.j){
                case 1:
                    documentData1.justifyOffset = -documentData1.boxWidth;
                    break;
                case 2:
                    documentData1.justifyOffset = -documentData1.boxWidth / 2;
                    break;
                default:
                    documentData1.justifyOffset = 0;
            }
        }
        documentData1.lineWidths = lineWidths1;
        var animators1 = data1.a;
        var animatorData1;
        var letterData1;
        jLen1 = animators1.length;
        var based1;
        var ind1;
        var indexes1 = [];
        for(j3 = 0; j3 < jLen1; j3 += 1){
            animatorData1 = animators1[j3];
            if (animatorData1.a.sc) {
                documentData1.strokeColorAnim = true;
            }
            if (animatorData1.a.sw) {
                documentData1.strokeWidthAnim = true;
            }
            if (animatorData1.a.fc || animatorData1.a.fh || animatorData1.a.fs || animatorData1.a.fb) {
                documentData1.fillColorAnim = true;
            }
            ind1 = 0;
            based1 = animatorData1.s.b;
            for(i3 = 0; i3 < len1; i3 += 1){
                letterData1 = letters1[i3];
                letterData1.anIndexes[j3] = ind1;
                if (based1 == 1 && letterData1.val !== "" || based1 == 2 && letterData1.val !== "" && letterData1.val !== " " || based1 == 3 && (letterData1.n || letterData1.val == " " || i3 == len1 - 1) || based1 == 4 && (letterData1.n || i3 == len1 - 1)) {
                    // eslint-disable-line eqeqeq
                    if (animatorData1.s.rn === 1) {
                        indexes1.push(ind1);
                    }
                    ind1 += 1;
                }
            }
            data1.a[j3].s.totalChars = ind1;
            var currentInd1 = -1;
            var newInd1;
            if (animatorData1.s.rn === 1) {
                for(i3 = 0; i3 < len1; i3 += 1){
                    letterData1 = letters1[i3];
                    if (currentInd1 != letterData1.anIndexes[j3]) {
                        // eslint-disable-line eqeqeq
                        currentInd1 = letterData1.anIndexes[j3];
                        newInd1 = indexes1.splice(Math.floor(Math.random() * indexes1.length), 1)[0];
                    }
                    letterData1.anIndexes[j3] = newInd1;
                }
            }
        }
        documentData1.yOffset = documentData1.finalLineHeight || documentData1.finalSize * 1.2;
        documentData1.ls = documentData1.ls || 0;
        documentData1.ascent = fontData1.ascent * documentData1.finalSize / 100;
    };
    TextProperty.prototype.updateDocumentData = function(newData1, index1) {
        index1 = index1 === undefined ? this.keysIndex : index1;
        var dData1 = this.copyData({}, this.data.d.k[index1].s);
        dData1 = this.copyData(dData1, newData1);
        this.data.d.k[index1].s = dData1;
        this.recalculate(index1);
        this.setCurrentData(dData1);
        this.elem.addDynamicProperty(this);
    };
    TextProperty.prototype.recalculate = function(index1) {
        var dData1 = this.data.d.k[index1].s;
        dData1.__complete = false;
        this.keysIndex = 0;
        this._isFirstFrame = true;
        this.getValue(dData1);
    };
    TextProperty.prototype.canResizeFont = function(_canResize1) {
        this.canResize = _canResize1;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this);
    };
    TextProperty.prototype.setMinimumFontSize = function(_fontValue1) {
        this.minimumFontSize = Math.floor(_fontValue1) || 1;
        this.recalculate(this.keysIndex);
        this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
        var max1 = Math.max;
        var min1 = Math.min;
        var floor1 = Math.floor;
        function TextSelectorPropFactory1(elem3, data1) {
            this._currentTextLength = -1;
            this.k = false;
            this.data = data1;
            this.elem = elem3;
            this.comp = elem3.comp;
            this.finalS = 0;
            this.finalE = 0;
            this.initDynamicPropertyContainer(elem3);
            this.s = PropertyFactory.getProp(elem3, data1.s || {
                k: 0
            }, 0, 0, this);
            if ("e" in data1) {
                this.e = PropertyFactory.getProp(elem3, data1.e, 0, 0, this);
            } else {
                this.e = {
                    v: 100
                };
            }
            this.o = PropertyFactory.getProp(elem3, data1.o || {
                k: 0
            }, 0, 0, this);
            this.xe = PropertyFactory.getProp(elem3, data1.xe || {
                k: 0
            }, 0, 0, this);
            this.ne = PropertyFactory.getProp(elem3, data1.ne || {
                k: 0
            }, 0, 0, this);
            this.sm = PropertyFactory.getProp(elem3, data1.sm || {
                k: 100
            }, 0, 0, this);
            this.a = PropertyFactory.getProp(elem3, data1.a, 0, 0.01, this);
            if (!this.dynamicProperties.length) {
                this.getValue();
            }
        }
        TextSelectorPropFactory1.prototype = {
            getMult: function getMult1(ind1) {
                if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
                    this.getValue();
                }
                var x11 = 0;
                var y11 = 0;
                var x21 = 1;
                var y21 = 1;
                if (this.ne.v > 0) {
                    x11 = this.ne.v / 100.0;
                } else {
                    y11 = -this.ne.v / 100.0;
                }
                if (this.xe.v > 0) {
                    x21 = 1.0 - this.xe.v / 100.0;
                } else {
                    y21 = 1.0 + this.xe.v / 100.0;
                }
                var easer1 = BezierFactory.getBezierEasing(x11, y11, x21, y21).get;
                var mult1 = 0;
                var s4 = this.finalS;
                var e3 = this.finalE;
                var type1 = this.data.sh;
                if (type1 === 2) {
                    if (e3 === s4) {
                        mult1 = ind1 >= e3 ? 1 : 0;
                    } else {
                        mult1 = max1(0, min1(0.5 / (e3 - s4) + (ind1 - s4) / (e3 - s4), 1));
                    }
                    mult1 = easer1(mult1);
                } else if (type1 === 3) {
                    if (e3 === s4) {
                        mult1 = ind1 >= e3 ? 0 : 1;
                    } else {
                        mult1 = 1 - max1(0, min1(0.5 / (e3 - s4) + (ind1 - s4) / (e3 - s4), 1));
                    }
                    mult1 = easer1(mult1);
                } else if (type1 === 4) {
                    if (e3 === s4) {
                        mult1 = 0;
                    } else {
                        mult1 = max1(0, min1(0.5 / (e3 - s4) + (ind1 - s4) / (e3 - s4), 1));
                        if (mult1 < 0.5) {
                            mult1 *= 2;
                        } else {
                            mult1 = 1 - 2 * (mult1 - 0.5);
                        }
                    }
                    mult1 = easer1(mult1);
                } else if (type1 === 5) {
                    if (e3 === s4) {
                        mult1 = 0;
                    } else {
                        var tot1 = e3 - s4;
                        /* ind += 0.5;
                      mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */ ind1 = min1(max1(0, ind1 + 0.5 - s4), e3 - s4);
                        var x4 = -tot1 / 2 + ind1;
                        var a3 = tot1 / 2;
                        mult1 = Math.sqrt(1 - x4 * x4 / (a3 * a3));
                    }
                    mult1 = easer1(mult1);
                } else if (type1 === 6) {
                    if (e3 === s4) {
                        mult1 = 0;
                    } else {
                        ind1 = min1(max1(0, ind1 + 0.5 - s4), e3 - s4);
                        mult1 = (1 + Math.cos(Math.PI + Math.PI * 2 * ind1 / (e3 - s4))) / 2; // eslint-disable-line
                    }
                    mult1 = easer1(mult1);
                } else {
                    if (ind1 >= floor1(s4)) {
                        if (ind1 - s4 < 0) {
                            mult1 = max1(0, min1(min1(e3, 1) - (s4 - ind1), 1));
                        } else {
                            mult1 = max1(0, min1(e3 - ind1, 1));
                        }
                    }
                    mult1 = easer1(mult1);
                } // Smoothness implementation.
                // The smoothness represents a reduced range of the original [0; 1] range.
                // if smoothness is 25%, the new range will be [0.375; 0.625]
                // Steps are:
                // - find the lower value of the new range (threshold)
                // - if multiplier is smaller than that value, floor it to 0
                // - if it is larger,
                //     - subtract the threshold
                //     - divide it by the smoothness (this will return the range to [0; 1])
                // Note: If it doesn't work on some scenarios, consider applying it before the easer.
                if (this.sm.v !== 100) {
                    var smoothness1 = this.sm.v * 0.01;
                    if (smoothness1 === 0) {
                        smoothness1 = 0.00000001;
                    }
                    var threshold1 = 0.5 - smoothness1 * 0.5;
                    if (mult1 < threshold1) {
                        mult1 = 0;
                    } else {
                        mult1 = (mult1 - threshold1) / smoothness1;
                        if (mult1 > 1) {
                            mult1 = 1;
                        }
                    }
                }
                return mult1 * this.a.v;
            },
            getValue: function getValue1(newCharsFlag1) {
                this.iterateDynamicProperties();
                this._mdf = newCharsFlag1 || this._mdf;
                this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;
                if (newCharsFlag1 && this.data.r === 2) {
                    this.e.v = this._currentTextLength;
                }
                var divisor1 = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
                var o3 = this.o.v / divisor1;
                var s4 = this.s.v / divisor1 + o3;
                var e3 = this.e.v / divisor1 + o3;
                if (s4 > e3) {
                    var _s1 = s4;
                    s4 = e3;
                    e3 = _s1;
                }
                this.finalS = s4;
                this.finalE = e3;
            }
        };
        extendPrototype([
            DynamicPropertyContainer
        ], TextSelectorPropFactory1);
        function getTextSelectorProp1(elem3, data1, arr3) {
            return new TextSelectorPropFactory1(elem3, data1, arr3);
        }
        return {
            getTextSelectorProp: getTextSelectorProp1
        };
    }();
    function TextAnimatorDataProperty(elem3, animatorProps1, container1) {
        var defaultData1 = {
            propType: false
        };
        var getProp1 = PropertyFactory.getProp;
        var textAnimatorAnimatables1 = animatorProps1.a;
        this.a = {
            r: textAnimatorAnimatables1.r ? getProp1(elem3, textAnimatorAnimatables1.r, 0, degToRads, container1) : defaultData1,
            rx: textAnimatorAnimatables1.rx ? getProp1(elem3, textAnimatorAnimatables1.rx, 0, degToRads, container1) : defaultData1,
            ry: textAnimatorAnimatables1.ry ? getProp1(elem3, textAnimatorAnimatables1.ry, 0, degToRads, container1) : defaultData1,
            sk: textAnimatorAnimatables1.sk ? getProp1(elem3, textAnimatorAnimatables1.sk, 0, degToRads, container1) : defaultData1,
            sa: textAnimatorAnimatables1.sa ? getProp1(elem3, textAnimatorAnimatables1.sa, 0, degToRads, container1) : defaultData1,
            s: textAnimatorAnimatables1.s ? getProp1(elem3, textAnimatorAnimatables1.s, 1, 0.01, container1) : defaultData1,
            a: textAnimatorAnimatables1.a ? getProp1(elem3, textAnimatorAnimatables1.a, 1, 0, container1) : defaultData1,
            o: textAnimatorAnimatables1.o ? getProp1(elem3, textAnimatorAnimatables1.o, 0, 0.01, container1) : defaultData1,
            p: textAnimatorAnimatables1.p ? getProp1(elem3, textAnimatorAnimatables1.p, 1, 0, container1) : defaultData1,
            sw: textAnimatorAnimatables1.sw ? getProp1(elem3, textAnimatorAnimatables1.sw, 0, 0, container1) : defaultData1,
            sc: textAnimatorAnimatables1.sc ? getProp1(elem3, textAnimatorAnimatables1.sc, 1, 0, container1) : defaultData1,
            fc: textAnimatorAnimatables1.fc ? getProp1(elem3, textAnimatorAnimatables1.fc, 1, 0, container1) : defaultData1,
            fh: textAnimatorAnimatables1.fh ? getProp1(elem3, textAnimatorAnimatables1.fh, 0, 0, container1) : defaultData1,
            fs: textAnimatorAnimatables1.fs ? getProp1(elem3, textAnimatorAnimatables1.fs, 0, 0.01, container1) : defaultData1,
            fb: textAnimatorAnimatables1.fb ? getProp1(elem3, textAnimatorAnimatables1.fb, 0, 0.01, container1) : defaultData1,
            t: textAnimatorAnimatables1.t ? getProp1(elem3, textAnimatorAnimatables1.t, 0, 0, container1) : defaultData1
        };
        this.s = TextSelectorProp.getTextSelectorProp(elem3, animatorProps1.s, container1);
        this.s.t = animatorProps1.s.t;
    }
    function TextAnimatorProperty(textData1, renderType1, elem3) {
        this._isFirstFrame = true;
        this._hasMaskedPath = false;
        this._frameId = -1;
        this._textData = textData1;
        this._renderType = renderType1;
        this._elem = elem3;
        this._animatorsData = createSizedArray(this._textData.a.length);
        this._pathData = {};
        this._moreOptions = {
            alignment: {}
        };
        this.renderedLetters = [];
        this.lettersChangedFlag = false;
        this.initDynamicPropertyContainer(elem3);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
        var i3;
        var len1 = this._textData.a.length;
        var animatorProps1;
        var getProp1 = PropertyFactory.getProp;
        for(i3 = 0; i3 < len1; i3 += 1){
            animatorProps1 = this._textData.a[i3];
            this._animatorsData[i3] = new TextAnimatorDataProperty(this._elem, animatorProps1, this);
        }
        if (this._textData.p && "m" in this._textData.p) {
            this._pathData = {
                a: getProp1(this._elem, this._textData.p.a, 0, 0, this),
                f: getProp1(this._elem, this._textData.p.f, 0, 0, this),
                l: getProp1(this._elem, this._textData.p.l, 0, 0, this),
                r: getProp1(this._elem, this._textData.p.r, 0, 0, this),
                p: getProp1(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            };
            this._hasMaskedPath = true;
        } else {
            this._hasMaskedPath = false;
        }
        this._moreOptions.alignment = getProp1(this._elem, this._textData.m.a, 1, 0, this);
    };
    TextAnimatorProperty.prototype.getMeasures = function(documentData1, lettersChangedFlag1) {
        this.lettersChangedFlag = lettersChangedFlag1;
        if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag1 && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
            return;
        }
        this._isFirstFrame = false;
        var alignment1 = this._moreOptions.alignment.v;
        var animators1 = this._animatorsData;
        var textData1 = this._textData;
        var matrixHelper1 = this.mHelper;
        var renderType1 = this._renderType;
        var renderedLettersCount1 = this.renderedLetters.length;
        var xPos1;
        var yPos1;
        var i3;
        var len1;
        var letters1 = documentData1.l;
        var pathInfo1;
        var currentLength1;
        var currentPoint1;
        var segmentLength1;
        var flag1;
        var pointInd1;
        var segmentInd1;
        var prevPoint1;
        var points1;
        var segments1;
        var partialLength1;
        var totalLength1;
        var perc1;
        var tanAngle1;
        var mask1;
        if (this._hasMaskedPath) {
            mask1 = this._pathData.m;
            if (!this._pathData.n || this._pathData._mdf) {
                var paths1 = mask1.v;
                if (this._pathData.r.v) {
                    paths1 = paths1.reverse();
                } // TODO: release bezier data cached from previous pathInfo: this._pathData.pi
                pathInfo1 = {
                    tLength: 0,
                    segments: []
                };
                len1 = paths1._length - 1;
                var bezierData1;
                totalLength1 = 0;
                for(i3 = 0; i3 < len1; i3 += 1){
                    bezierData1 = bez.buildBezierData(paths1.v[i3], paths1.v[i3 + 1], [
                        paths1.o[i3][0] - paths1.v[i3][0],
                        paths1.o[i3][1] - paths1.v[i3][1]
                    ], [
                        paths1.i[i3 + 1][0] - paths1.v[i3 + 1][0],
                        paths1.i[i3 + 1][1] - paths1.v[i3 + 1][1]
                    ]);
                    pathInfo1.tLength += bezierData1.segmentLength;
                    pathInfo1.segments.push(bezierData1);
                    totalLength1 += bezierData1.segmentLength;
                }
                i3 = len1;
                if (mask1.v.c) {
                    bezierData1 = bez.buildBezierData(paths1.v[i3], paths1.v[0], [
                        paths1.o[i3][0] - paths1.v[i3][0],
                        paths1.o[i3][1] - paths1.v[i3][1]
                    ], [
                        paths1.i[0][0] - paths1.v[0][0],
                        paths1.i[0][1] - paths1.v[0][1]
                    ]);
                    pathInfo1.tLength += bezierData1.segmentLength;
                    pathInfo1.segments.push(bezierData1);
                    totalLength1 += bezierData1.segmentLength;
                }
                this._pathData.pi = pathInfo1;
            }
            pathInfo1 = this._pathData.pi;
            currentLength1 = this._pathData.f.v;
            segmentInd1 = 0;
            pointInd1 = 1;
            segmentLength1 = 0;
            flag1 = true;
            segments1 = pathInfo1.segments;
            if (currentLength1 < 0 && mask1.v.c) {
                if (pathInfo1.tLength < Math.abs(currentLength1)) {
                    currentLength1 = -Math.abs(currentLength1) % pathInfo1.tLength;
                }
                segmentInd1 = segments1.length - 1;
                points1 = segments1[segmentInd1].points;
                pointInd1 = points1.length - 1;
                while(currentLength1 < 0){
                    currentLength1 += points1[pointInd1].partialLength;
                    pointInd1 -= 1;
                    if (pointInd1 < 0) {
                        segmentInd1 -= 1;
                        points1 = segments1[segmentInd1].points;
                        pointInd1 = points1.length - 1;
                    }
                }
            }
            points1 = segments1[segmentInd1].points;
            prevPoint1 = points1[pointInd1 - 1];
            currentPoint1 = points1[pointInd1];
            partialLength1 = currentPoint1.partialLength;
        }
        len1 = letters1.length;
        xPos1 = 0;
        yPos1 = 0;
        var yOff1 = documentData1.finalSize * 1.2 * 0.714;
        var firstLine1 = true;
        var animatorProps1;
        var animatorSelector1;
        var j3;
        var jLen1;
        var letterValue1;
        jLen1 = animators1.length;
        var mult1;
        var ind1 = -1;
        var offf1;
        var xPathPos1;
        var yPathPos1;
        var initPathPos1 = currentLength1;
        var initSegmentInd1 = segmentInd1;
        var initPointInd1 = pointInd1;
        var currentLine1 = -1;
        var elemOpacity1;
        var sc1;
        var sw1;
        var fc1;
        var k3;
        var letterSw1;
        var letterSc1;
        var letterFc1;
        var letterM1 = "";
        var letterP1 = this.defaultPropsArray;
        var letterO1; //
        if (documentData1.j === 2 || documentData1.j === 1) {
            var animatorJustifyOffset1 = 0;
            var animatorFirstCharOffset1 = 0;
            var justifyOffsetMult1 = documentData1.j === 2 ? -0.5 : -1;
            var lastIndex1 = 0;
            var isNewLine1 = true;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (letters1[i3].n) {
                    if (animatorJustifyOffset1) {
                        animatorJustifyOffset1 += animatorFirstCharOffset1;
                    }
                    while(lastIndex1 < i3){
                        letters1[lastIndex1].animatorJustifyOffset = animatorJustifyOffset1;
                        lastIndex1 += 1;
                    }
                    animatorJustifyOffset1 = 0;
                    isNewLine1 = true;
                } else {
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        animatorProps1 = animators1[j3].a;
                        if (animatorProps1.t.propType) {
                            if (isNewLine1 && documentData1.j === 2) {
                                animatorFirstCharOffset1 += animatorProps1.t.v * justifyOffsetMult1;
                            }
                            animatorSelector1 = animators1[j3].s;
                            mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                            if (mult1.length) {
                                animatorJustifyOffset1 += animatorProps1.t.v * mult1[0] * justifyOffsetMult1;
                            } else {
                                animatorJustifyOffset1 += animatorProps1.t.v * mult1 * justifyOffsetMult1;
                            }
                        }
                    }
                    isNewLine1 = false;
                }
            }
            if (animatorJustifyOffset1) {
                animatorJustifyOffset1 += animatorFirstCharOffset1;
            }
            while(lastIndex1 < i3){
                letters1[lastIndex1].animatorJustifyOffset = animatorJustifyOffset1;
                lastIndex1 += 1;
            }
        } //
        for(i3 = 0; i3 < len1; i3 += 1){
            matrixHelper1.reset();
            elemOpacity1 = 1;
            if (letters1[i3].n) {
                xPos1 = 0;
                yPos1 += documentData1.yOffset;
                yPos1 += firstLine1 ? 1 : 0;
                currentLength1 = initPathPos1;
                firstLine1 = false;
                if (this._hasMaskedPath) {
                    segmentInd1 = initSegmentInd1;
                    pointInd1 = initPointInd1;
                    points1 = segments1[segmentInd1].points;
                    prevPoint1 = points1[pointInd1 - 1];
                    currentPoint1 = points1[pointInd1];
                    partialLength1 = currentPoint1.partialLength;
                    segmentLength1 = 0;
                }
                letterM1 = "";
                letterFc1 = "";
                letterSw1 = "";
                letterO1 = "";
                letterP1 = this.defaultPropsArray;
            } else {
                if (this._hasMaskedPath) {
                    if (currentLine1 !== letters1[i3].line) {
                        switch(documentData1.j){
                            case 1:
                                currentLength1 += totalLength1 - documentData1.lineWidths[letters1[i3].line];
                                break;
                            case 2:
                                currentLength1 += (totalLength1 - documentData1.lineWidths[letters1[i3].line]) / 2;
                                break;
                            default:
                                break;
                        }
                        currentLine1 = letters1[i3].line;
                    }
                    if (ind1 !== letters1[i3].ind) {
                        if (letters1[ind1]) {
                            currentLength1 += letters1[ind1].extra;
                        }
                        currentLength1 += letters1[i3].an / 2;
                        ind1 = letters1[i3].ind;
                    }
                    currentLength1 += alignment1[0] * letters1[i3].an * 0.005;
                    var animatorOffset1 = 0;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        animatorProps1 = animators1[j3].a;
                        if (animatorProps1.p.propType) {
                            animatorSelector1 = animators1[j3].s;
                            mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                            if (mult1.length) {
                                animatorOffset1 += animatorProps1.p.v[0] * mult1[0];
                            } else {
                                animatorOffset1 += animatorProps1.p.v[0] * mult1;
                            }
                        }
                        if (animatorProps1.a.propType) {
                            animatorSelector1 = animators1[j3].s;
                            mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                            if (mult1.length) {
                                animatorOffset1 += animatorProps1.a.v[0] * mult1[0];
                            } else {
                                animatorOffset1 += animatorProps1.a.v[0] * mult1;
                            }
                        }
                    }
                    flag1 = true; // Force alignment only works with a single line for now
                    if (this._pathData.a.v) {
                        currentLength1 = letters1[0].an * 0.5 + (totalLength1 - this._pathData.f.v - letters1[0].an * 0.5 - letters1[letters1.length - 1].an * 0.5) * ind1 / (len1 - 1);
                        currentLength1 += this._pathData.f.v;
                    }
                    while(flag1){
                        if (segmentLength1 + partialLength1 >= currentLength1 + animatorOffset1 || !points1) {
                            perc1 = (currentLength1 + animatorOffset1 - segmentLength1) / currentPoint1.partialLength;
                            xPathPos1 = prevPoint1.point[0] + (currentPoint1.point[0] - prevPoint1.point[0]) * perc1;
                            yPathPos1 = prevPoint1.point[1] + (currentPoint1.point[1] - prevPoint1.point[1]) * perc1;
                            matrixHelper1.translate(-alignment1[0] * letters1[i3].an * 0.005, -(alignment1[1] * yOff1) * 0.01);
                            flag1 = false;
                        } else if (points1) {
                            segmentLength1 += currentPoint1.partialLength;
                            pointInd1 += 1;
                            if (pointInd1 >= points1.length) {
                                pointInd1 = 0;
                                segmentInd1 += 1;
                                if (!segments1[segmentInd1]) {
                                    if (mask1.v.c) {
                                        pointInd1 = 0;
                                        segmentInd1 = 0;
                                        points1 = segments1[segmentInd1].points;
                                    } else {
                                        segmentLength1 -= currentPoint1.partialLength;
                                        points1 = null;
                                    }
                                } else {
                                    points1 = segments1[segmentInd1].points;
                                }
                            }
                            if (points1) {
                                prevPoint1 = currentPoint1;
                                currentPoint1 = points1[pointInd1];
                                partialLength1 = currentPoint1.partialLength;
                            }
                        }
                    }
                    offf1 = letters1[i3].an / 2 - letters1[i3].add;
                    matrixHelper1.translate(-offf1, 0, 0);
                } else {
                    offf1 = letters1[i3].an / 2 - letters1[i3].add;
                    matrixHelper1.translate(-offf1, 0, 0); // Grouping alignment
                    matrixHelper1.translate(-alignment1[0] * letters1[i3].an * 0.005, -alignment1[1] * yOff1 * 0.01, 0);
                }
                for(j3 = 0; j3 < jLen1; j3 += 1){
                    animatorProps1 = animators1[j3].a;
                    if (animatorProps1.t.propType) {
                        animatorSelector1 = animators1[j3].s;
                        mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars); // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"
                        if (xPos1 !== 0 || documentData1.j !== 0) {
                            if (this._hasMaskedPath) {
                                if (mult1.length) {
                                    currentLength1 += animatorProps1.t.v * mult1[0];
                                } else {
                                    currentLength1 += animatorProps1.t.v * mult1;
                                }
                            } else if (mult1.length) {
                                xPos1 += animatorProps1.t.v * mult1[0];
                            } else {
                                xPos1 += animatorProps1.t.v * mult1;
                            }
                        }
                    }
                }
                if (documentData1.strokeWidthAnim) {
                    sw1 = documentData1.sw || 0;
                }
                if (documentData1.strokeColorAnim) {
                    if (documentData1.sc) {
                        sc1 = [
                            documentData1.sc[0],
                            documentData1.sc[1],
                            documentData1.sc[2]
                        ];
                    } else {
                        sc1 = [
                            0,
                            0,
                            0
                        ];
                    }
                }
                if (documentData1.fillColorAnim && documentData1.fc) {
                    fc1 = [
                        documentData1.fc[0],
                        documentData1.fc[1],
                        documentData1.fc[2]
                    ];
                }
                for(j3 = 0; j3 < jLen1; j3 += 1){
                    animatorProps1 = animators1[j3].a;
                    if (animatorProps1.a.propType) {
                        animatorSelector1 = animators1[j3].s;
                        mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                        if (mult1.length) {
                            matrixHelper1.translate(-animatorProps1.a.v[0] * mult1[0], -animatorProps1.a.v[1] * mult1[1], animatorProps1.a.v[2] * mult1[2]);
                        } else {
                            matrixHelper1.translate(-animatorProps1.a.v[0] * mult1, -animatorProps1.a.v[1] * mult1, animatorProps1.a.v[2] * mult1);
                        }
                    }
                }
                for(j3 = 0; j3 < jLen1; j3 += 1){
                    animatorProps1 = animators1[j3].a;
                    if (animatorProps1.s.propType) {
                        animatorSelector1 = animators1[j3].s;
                        mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                        if (mult1.length) {
                            matrixHelper1.scale(1 + (animatorProps1.s.v[0] - 1) * mult1[0], 1 + (animatorProps1.s.v[1] - 1) * mult1[1], 1);
                        } else {
                            matrixHelper1.scale(1 + (animatorProps1.s.v[0] - 1) * mult1, 1 + (animatorProps1.s.v[1] - 1) * mult1, 1);
                        }
                    }
                }
                for(j3 = 0; j3 < jLen1; j3 += 1){
                    animatorProps1 = animators1[j3].a;
                    animatorSelector1 = animators1[j3].s;
                    mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                    if (animatorProps1.sk.propType) {
                        if (mult1.length) {
                            matrixHelper1.skewFromAxis(-animatorProps1.sk.v * mult1[0], animatorProps1.sa.v * mult1[1]);
                        } else {
                            matrixHelper1.skewFromAxis(-animatorProps1.sk.v * mult1, animatorProps1.sa.v * mult1);
                        }
                    }
                    if (animatorProps1.r.propType) {
                        if (mult1.length) {
                            matrixHelper1.rotateZ(-animatorProps1.r.v * mult1[2]);
                        } else {
                            matrixHelper1.rotateZ(-animatorProps1.r.v * mult1);
                        }
                    }
                    if (animatorProps1.ry.propType) {
                        if (mult1.length) {
                            matrixHelper1.rotateY(animatorProps1.ry.v * mult1[1]);
                        } else {
                            matrixHelper1.rotateY(animatorProps1.ry.v * mult1);
                        }
                    }
                    if (animatorProps1.rx.propType) {
                        if (mult1.length) {
                            matrixHelper1.rotateX(animatorProps1.rx.v * mult1[0]);
                        } else {
                            matrixHelper1.rotateX(animatorProps1.rx.v * mult1);
                        }
                    }
                    if (animatorProps1.o.propType) {
                        if (mult1.length) {
                            elemOpacity1 += (animatorProps1.o.v * mult1[0] - elemOpacity1) * mult1[0];
                        } else {
                            elemOpacity1 += (animatorProps1.o.v * mult1 - elemOpacity1) * mult1;
                        }
                    }
                    if (documentData1.strokeWidthAnim && animatorProps1.sw.propType) {
                        if (mult1.length) {
                            sw1 += animatorProps1.sw.v * mult1[0];
                        } else {
                            sw1 += animatorProps1.sw.v * mult1;
                        }
                    }
                    if (documentData1.strokeColorAnim && animatorProps1.sc.propType) {
                        for(k3 = 0; k3 < 3; k3 += 1){
                            if (mult1.length) {
                                sc1[k3] += (animatorProps1.sc.v[k3] - sc1[k3]) * mult1[0];
                            } else {
                                sc1[k3] += (animatorProps1.sc.v[k3] - sc1[k3]) * mult1;
                            }
                        }
                    }
                    if (documentData1.fillColorAnim && documentData1.fc) {
                        if (animatorProps1.fc.propType) {
                            for(k3 = 0; k3 < 3; k3 += 1){
                                if (mult1.length) {
                                    fc1[k3] += (animatorProps1.fc.v[k3] - fc1[k3]) * mult1[0];
                                } else {
                                    fc1[k3] += (animatorProps1.fc.v[k3] - fc1[k3]) * mult1;
                                }
                            }
                        }
                        if (animatorProps1.fh.propType) {
                            if (mult1.length) {
                                fc1 = addHueToRGB(fc1, animatorProps1.fh.v * mult1[0]);
                            } else {
                                fc1 = addHueToRGB(fc1, animatorProps1.fh.v * mult1);
                            }
                        }
                        if (animatorProps1.fs.propType) {
                            if (mult1.length) {
                                fc1 = addSaturationToRGB(fc1, animatorProps1.fs.v * mult1[0]);
                            } else {
                                fc1 = addSaturationToRGB(fc1, animatorProps1.fs.v * mult1);
                            }
                        }
                        if (animatorProps1.fb.propType) {
                            if (mult1.length) {
                                fc1 = addBrightnessToRGB(fc1, animatorProps1.fb.v * mult1[0]);
                            } else {
                                fc1 = addBrightnessToRGB(fc1, animatorProps1.fb.v * mult1);
                            }
                        }
                    }
                }
                for(j3 = 0; j3 < jLen1; j3 += 1){
                    animatorProps1 = animators1[j3].a;
                    if (animatorProps1.p.propType) {
                        animatorSelector1 = animators1[j3].s;
                        mult1 = animatorSelector1.getMult(letters1[i3].anIndexes[j3], textData1.a[j3].s.totalChars);
                        if (this._hasMaskedPath) {
                            if (mult1.length) {
                                matrixHelper1.translate(0, animatorProps1.p.v[1] * mult1[0], -animatorProps1.p.v[2] * mult1[1]);
                            } else {
                                matrixHelper1.translate(0, animatorProps1.p.v[1] * mult1, -animatorProps1.p.v[2] * mult1);
                            }
                        } else if (mult1.length) {
                            matrixHelper1.translate(animatorProps1.p.v[0] * mult1[0], animatorProps1.p.v[1] * mult1[1], -animatorProps1.p.v[2] * mult1[2]);
                        } else {
                            matrixHelper1.translate(animatorProps1.p.v[0] * mult1, animatorProps1.p.v[1] * mult1, -animatorProps1.p.v[2] * mult1);
                        }
                    }
                }
                if (documentData1.strokeWidthAnim) {
                    letterSw1 = sw1 < 0 ? 0 : sw1;
                }
                if (documentData1.strokeColorAnim) {
                    letterSc1 = "rgb(" + Math.round(sc1[0] * 255) + "," + Math.round(sc1[1] * 255) + "," + Math.round(sc1[2] * 255) + ")";
                }
                if (documentData1.fillColorAnim && documentData1.fc) {
                    letterFc1 = "rgb(" + Math.round(fc1[0] * 255) + "," + Math.round(fc1[1] * 255) + "," + Math.round(fc1[2] * 255) + ")";
                }
                if (this._hasMaskedPath) {
                    matrixHelper1.translate(0, -documentData1.ls);
                    matrixHelper1.translate(0, alignment1[1] * yOff1 * 0.01 + yPos1, 0);
                    if (this._pathData.p.v) {
                        tanAngle1 = (currentPoint1.point[1] - prevPoint1.point[1]) / (currentPoint1.point[0] - prevPoint1.point[0]);
                        var rot1 = Math.atan(tanAngle1) * 180 / Math.PI;
                        if (currentPoint1.point[0] < prevPoint1.point[0]) {
                            rot1 += 180;
                        }
                        matrixHelper1.rotate(-rot1 * Math.PI / 180);
                    }
                    matrixHelper1.translate(xPathPos1, yPathPos1, 0);
                    currentLength1 -= alignment1[0] * letters1[i3].an * 0.005;
                    if (letters1[i3 + 1] && ind1 !== letters1[i3 + 1].ind) {
                        currentLength1 += letters1[i3].an / 2;
                        currentLength1 += documentData1.tr * 0.001 * documentData1.finalSize;
                    }
                } else {
                    matrixHelper1.translate(xPos1, yPos1, 0);
                    if (documentData1.ps) {
                        // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
                        matrixHelper1.translate(documentData1.ps[0], documentData1.ps[1] + documentData1.ascent, 0);
                    }
                    switch(documentData1.j){
                        case 1:
                            matrixHelper1.translate(letters1[i3].animatorJustifyOffset + documentData1.justifyOffset + (documentData1.boxWidth - documentData1.lineWidths[letters1[i3].line]), 0, 0);
                            break;
                        case 2:
                            matrixHelper1.translate(letters1[i3].animatorJustifyOffset + documentData1.justifyOffset + (documentData1.boxWidth - documentData1.lineWidths[letters1[i3].line]) / 2, 0, 0);
                            break;
                        default:
                            break;
                    }
                    matrixHelper1.translate(0, -documentData1.ls);
                    matrixHelper1.translate(offf1, 0, 0);
                    matrixHelper1.translate(alignment1[0] * letters1[i3].an * 0.005, alignment1[1] * yOff1 * 0.01, 0);
                    xPos1 += letters1[i3].l + documentData1.tr * 0.001 * documentData1.finalSize;
                }
                if (renderType1 === "html") {
                    letterM1 = matrixHelper1.toCSS();
                } else if (renderType1 === "svg") {
                    letterM1 = matrixHelper1.to2dCSS();
                } else {
                    letterP1 = [
                        matrixHelper1.props[0],
                        matrixHelper1.props[1],
                        matrixHelper1.props[2],
                        matrixHelper1.props[3],
                        matrixHelper1.props[4],
                        matrixHelper1.props[5],
                        matrixHelper1.props[6],
                        matrixHelper1.props[7],
                        matrixHelper1.props[8],
                        matrixHelper1.props[9],
                        matrixHelper1.props[10],
                        matrixHelper1.props[11],
                        matrixHelper1.props[12],
                        matrixHelper1.props[13],
                        matrixHelper1.props[14],
                        matrixHelper1.props[15]
                    ];
                }
                letterO1 = elemOpacity1;
            }
            if (renderedLettersCount1 <= i3) {
                letterValue1 = new LetterProps(letterO1, letterSw1, letterSc1, letterFc1, letterM1, letterP1);
                this.renderedLetters.push(letterValue1);
                renderedLettersCount1 += 1;
                this.lettersChangedFlag = true;
            } else {
                letterValue1 = this.renderedLetters[i3];
                this.lettersChangedFlag = letterValue1.update(letterO1, letterSw1, letterSc1, letterFc1, letterM1, letterP1) || this.lettersChangedFlag;
            }
        }
    };
    TextAnimatorProperty.prototype.getValue = function() {
        if (this._elem.globalData.frameId === this._frameId) {
            return;
        }
        this._frameId = this._elem.globalData.frameId;
        this.iterateDynamicProperties();
    };
    TextAnimatorProperty.prototype.mHelper = new Matrix();
    TextAnimatorProperty.prototype.defaultPropsArray = [];
    extendPrototype([
        DynamicPropertyContainer
    ], TextAnimatorProperty);
    function ITextElement() {}
    ITextElement.prototype.initElement = function(data1, globalData1, comp1) {
        this.lettersChangedFlag = true;
        this.initFrame();
        this.initBaseData(data1, globalData1, comp1);
        this.textProperty = new TextProperty(this, data1.t, this.dynamicProperties);
        this.textAnimator = new TextAnimatorProperty(data1.t, this.renderType, this);
        this.initTransform(data1, globalData1, comp1);
        this.initHierarchy();
        this.initRenderable();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        this.createContent();
        this.hide();
        this.textAnimator.searchProperties(this.dynamicProperties);
    };
    ITextElement.prototype.prepareFrame = function(num1) {
        this._mdf = false;
        this.prepareRenderableFrame(num1);
        this.prepareProperties(num1, this.isInRange);
    };
    ITextElement.prototype.createPathShape = function(matrixHelper1, shapes1) {
        var j3;
        var jLen1 = shapes1.length;
        var pathNodes1;
        var shapeStr1 = "";
        for(j3 = 0; j3 < jLen1; j3 += 1){
            if (shapes1[j3].ty === "sh") {
                pathNodes1 = shapes1[j3].ks.k;
                shapeStr1 += buildShapeString(pathNodes1, pathNodes1.i.length, true, matrixHelper1);
            }
        }
        return shapeStr1;
    };
    ITextElement.prototype.updateDocumentData = function(newData1, index1) {
        this.textProperty.updateDocumentData(newData1, index1);
    };
    ITextElement.prototype.canResizeFont = function(_canResize1) {
        this.textProperty.canResizeFont(_canResize1);
    };
    ITextElement.prototype.setMinimumFontSize = function(_fontSize1) {
        this.textProperty.setMinimumFontSize(_fontSize1);
    };
    ITextElement.prototype.applyTextPropertiesToMatrix = function(documentData1, matrixHelper1, lineNumber1, xPos1, yPos1) {
        if (documentData1.ps) {
            matrixHelper1.translate(documentData1.ps[0], documentData1.ps[1] + documentData1.ascent, 0);
        }
        matrixHelper1.translate(0, -documentData1.ls, 0);
        switch(documentData1.j){
            case 1:
                matrixHelper1.translate(documentData1.justifyOffset + (documentData1.boxWidth - documentData1.lineWidths[lineNumber1]), 0, 0);
                break;
            case 2:
                matrixHelper1.translate(documentData1.justifyOffset + (documentData1.boxWidth - documentData1.lineWidths[lineNumber1]) / 2, 0, 0);
                break;
            default:
                break;
        }
        matrixHelper1.translate(xPos1, yPos1, 0);
    };
    ITextElement.prototype.buildColor = function(colorData1) {
        return "rgb(" + Math.round(colorData1[0] * 255) + "," + Math.round(colorData1[1] * 255) + "," + Math.round(colorData1[2] * 255) + ")";
    };
    ITextElement.prototype.emptyProp = new LetterProps();
    ITextElement.prototype.destroy = function() {};
    ITextElement.prototype.validateText = function() {
        if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
            this.buildNewText();
            this.textProperty._isFirstFrame = false;
            this.textProperty._mdf = false;
        }
    };
    var emptyShapeData = {
        shapes: []
    };
    function SVGTextLottieElement(data1, globalData1, comp1) {
        this.textSpans = [];
        this.renderType = "svg";
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        SVGBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
        ITextElement
    ], SVGTextLottieElement);
    SVGTextLottieElement.prototype.createContent = function() {
        if (this.data.singleShape && !this.globalData.fontManager.chars) {
            this.textContainer = createNS("text");
        }
    };
    SVGTextLottieElement.prototype.buildTextContents = function(textArray1) {
        var i3 = 0;
        var len1 = textArray1.length;
        var textContents1 = [];
        var currentTextContent1 = "";
        while(i3 < len1){
            if (textArray1[i3] === String.fromCharCode(13) || textArray1[i3] === String.fromCharCode(3)) {
                textContents1.push(currentTextContent1);
                currentTextContent1 = "";
            } else {
                currentTextContent1 += textArray1[i3];
            }
            i3 += 1;
        }
        textContents1.push(currentTextContent1);
        return textContents1;
    };
    SVGTextLottieElement.prototype.buildShapeData = function(data1, scale2) {
        // data should probably be cloned to apply scale separately to each instance of a text on different layers
        // but since text internal content gets only rendered once and then it's never rerendered,
        // it's probably safe not to clone data and reuse always the same instance even if the object is mutated.
        // Avoiding cloning is preferred since cloning each character shape data is expensive
        if (data1.shapes && data1.shapes.length) {
            var shape3 = data1.shapes[0];
            if (shape3.it) {
                var shapeItem1 = shape3.it[shape3.it.length - 1];
                if (shapeItem1.s) {
                    shapeItem1.s.k[0] = scale2;
                    shapeItem1.s.k[1] = scale2;
                }
            }
        }
        return data1;
    };
    SVGTextLottieElement.prototype.buildNewText = function() {
        this.addDynamicProperty(this);
        var i3;
        var len1;
        var documentData1 = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData1 ? documentData1.l.length : 0);
        if (documentData1.fc) {
            this.layerElement.setAttribute("fill", this.buildColor(documentData1.fc));
        } else {
            this.layerElement.setAttribute("fill", "rgba(0,0,0,0)");
        }
        if (documentData1.sc) {
            this.layerElement.setAttribute("stroke", this.buildColor(documentData1.sc));
            this.layerElement.setAttribute("stroke-width", documentData1.sw);
        }
        this.layerElement.setAttribute("font-size", documentData1.finalSize);
        var fontData1 = this.globalData.fontManager.getFontByName(documentData1.f);
        if (fontData1.fClass) {
            this.layerElement.setAttribute("class", fontData1.fClass);
        } else {
            this.layerElement.setAttribute("font-family", fontData1.fFamily);
            var fWeight1 = documentData1.fWeight;
            var fStyle1 = documentData1.fStyle;
            this.layerElement.setAttribute("font-style", fStyle1);
            this.layerElement.setAttribute("font-weight", fWeight1);
        }
        this.layerElement.setAttribute("aria-label", documentData1.t);
        var letters1 = documentData1.l || [];
        var usesGlyphs1 = !!this.globalData.fontManager.chars;
        len1 = letters1.length;
        var tSpan1;
        var matrixHelper1 = this.mHelper;
        var shapeStr1 = "";
        var singleShape1 = this.data.singleShape;
        var xPos1 = 0;
        var yPos1 = 0;
        var firstLine1 = true;
        var trackingOffset1 = documentData1.tr * 0.001 * documentData1.finalSize;
        if (singleShape1 && !usesGlyphs1 && !documentData1.sz) {
            var tElement1 = this.textContainer;
            var justify1 = "start";
            switch(documentData1.j){
                case 1:
                    justify1 = "end";
                    break;
                case 2:
                    justify1 = "middle";
                    break;
                default:
                    justify1 = "start";
                    break;
            }
            tElement1.setAttribute("text-anchor", justify1);
            tElement1.setAttribute("letter-spacing", trackingOffset1);
            var textContent1 = this.buildTextContents(documentData1.finalText);
            len1 = textContent1.length;
            yPos1 = documentData1.ps ? documentData1.ps[1] + documentData1.ascent : 0;
            for(i3 = 0; i3 < len1; i3 += 1){
                tSpan1 = this.textSpans[i3].span || createNS("tspan");
                tSpan1.textContent = textContent1[i3];
                tSpan1.setAttribute("x", 0);
                tSpan1.setAttribute("y", yPos1);
                tSpan1.style.display = "inherit";
                tElement1.appendChild(tSpan1);
                if (!this.textSpans[i3]) {
                    this.textSpans[i3] = {
                        span: null,
                        glyph: null
                    };
                }
                this.textSpans[i3].span = tSpan1;
                yPos1 += documentData1.finalLineHeight;
            }
            this.layerElement.appendChild(tElement1);
        } else {
            var cachedSpansLength1 = this.textSpans.length;
            var charData1;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (!this.textSpans[i3]) {
                    this.textSpans[i3] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    };
                }
                if (!usesGlyphs1 || !singleShape1 || i3 === 0) {
                    tSpan1 = cachedSpansLength1 > i3 ? this.textSpans[i3].span : createNS(usesGlyphs1 ? "g" : "text");
                    if (cachedSpansLength1 <= i3) {
                        tSpan1.setAttribute("stroke-linecap", "butt");
                        tSpan1.setAttribute("stroke-linejoin", "round");
                        tSpan1.setAttribute("stroke-miterlimit", "4");
                        this.textSpans[i3].span = tSpan1;
                        if (usesGlyphs1) {
                            var childSpan1 = createNS("g");
                            tSpan1.appendChild(childSpan1);
                            this.textSpans[i3].childSpan = childSpan1;
                        }
                        this.textSpans[i3].span = tSpan1;
                        this.layerElement.appendChild(tSpan1);
                    }
                    tSpan1.style.display = "inherit";
                }
                matrixHelper1.reset();
                if (singleShape1) {
                    if (letters1[i3].n) {
                        xPos1 = -trackingOffset1;
                        yPos1 += documentData1.yOffset;
                        yPos1 += firstLine1 ? 1 : 0;
                        firstLine1 = false;
                    }
                    this.applyTextPropertiesToMatrix(documentData1, matrixHelper1, letters1[i3].line, xPos1, yPos1);
                    xPos1 += letters1[i3].l || 0; // xPos += letters[i].val === ' ' ? 0 : trackingOffset;
                    xPos1 += trackingOffset1;
                }
                if (usesGlyphs1) {
                    charData1 = this.globalData.fontManager.getCharData(documentData1.finalText[i3], fontData1.fStyle, this.globalData.fontManager.getFontByName(documentData1.f).fFamily);
                    var glyphElement1; // t === 1 means the character has been replaced with an animated shaped
                    if (charData1.t === 1) {
                        glyphElement1 = new SVGCompElement(charData1.data, this.globalData, this);
                    } else {
                        var data1 = emptyShapeData;
                        if (charData1.data && charData1.data.shapes) {
                            data1 = this.buildShapeData(charData1.data, documentData1.finalSize);
                        }
                        glyphElement1 = new SVGShapeElement(data1, this.globalData, this);
                    }
                    if (this.textSpans[i3].glyph) {
                        var glyph1 = this.textSpans[i3].glyph;
                        this.textSpans[i3].childSpan.removeChild(glyph1.layerElement);
                        glyph1.destroy();
                    }
                    this.textSpans[i3].glyph = glyphElement1;
                    glyphElement1._debug = true;
                    glyphElement1.prepareFrame(0);
                    glyphElement1.renderFrame();
                    this.textSpans[i3].childSpan.appendChild(glyphElement1.layerElement); // when using animated shapes, the layer will be scaled instead of replacing the internal scale
                    // this might have issues with strokes and might need a different solution
                    if (charData1.t === 1) {
                        this.textSpans[i3].childSpan.setAttribute("transform", "scale(" + documentData1.finalSize / 100 + "," + documentData1.finalSize / 100 + ")");
                    }
                } else {
                    if (singleShape1) {
                        tSpan1.setAttribute("transform", "translate(" + matrixHelper1.props[12] + "," + matrixHelper1.props[13] + ")");
                    }
                    tSpan1.textContent = letters1[i3].val;
                    tSpan1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                } //
            }
            if (singleShape1 && tSpan1) {
                tSpan1.setAttribute("d", shapeStr1);
            }
        }
        while(i3 < this.textSpans.length){
            this.textSpans[i3].span.style.display = "none";
            i3 += 1;
        }
        this._sizeChanged = true;
    };
    SVGTextLottieElement.prototype.sourceRectAtTime = function() {
        this.prepareFrame(this.comp.renderedFrame - this.data.st);
        this.renderInnerContent();
        if (this._sizeChanged) {
            this._sizeChanged = false;
            var textBox1 = this.layerElement.getBBox();
            this.bbox = {
                top: textBox1.y,
                left: textBox1.x,
                width: textBox1.width,
                height: textBox1.height
            };
        }
        return this.bbox;
    };
    SVGTextLottieElement.prototype.getValue = function() {
        var i3;
        var len1 = this.textSpans.length;
        var glyphElement1;
        this.renderedFrame = this.comp.renderedFrame;
        for(i3 = 0; i3 < len1; i3 += 1){
            glyphElement1 = this.textSpans[i3].glyph;
            if (glyphElement1) {
                glyphElement1.prepareFrame(this.comp.renderedFrame - this.data.st);
                if (glyphElement1._mdf) {
                    this._mdf = true;
                }
            }
        }
    };
    SVGTextLottieElement.prototype.renderInnerContent = function() {
        this.validateText();
        if (!this.data.singleShape || this._mdf) {
            this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                this._sizeChanged = true;
                var i3;
                var len1;
                var renderedLetters1 = this.textAnimator.renderedLetters;
                var letters1 = this.textProperty.currentData.l;
                len1 = letters1.length;
                var renderedLetter1;
                var textSpan1;
                var glyphElement1;
                for(i3 = 0; i3 < len1; i3 += 1){
                    if (!letters1[i3].n) {
                        renderedLetter1 = renderedLetters1[i3];
                        textSpan1 = this.textSpans[i3].span;
                        glyphElement1 = this.textSpans[i3].glyph;
                        if (glyphElement1) {
                            glyphElement1.renderFrame();
                        }
                        if (renderedLetter1._mdf.m) {
                            textSpan1.setAttribute("transform", renderedLetter1.m);
                        }
                        if (renderedLetter1._mdf.o) {
                            textSpan1.setAttribute("opacity", renderedLetter1.o);
                        }
                        if (renderedLetter1._mdf.sw) {
                            textSpan1.setAttribute("stroke-width", renderedLetter1.sw);
                        }
                        if (renderedLetter1._mdf.sc) {
                            textSpan1.setAttribute("stroke", renderedLetter1.sc);
                        }
                        if (renderedLetter1._mdf.fc) {
                            textSpan1.setAttribute("fill", renderedLetter1.fc);
                        }
                    }
                }
            }
        }
    };
    function ISolidElement(data1, globalData1, comp1) {
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        IImageElement
    ], ISolidElement);
    ISolidElement.prototype.createContent = function() {
        var rect1 = createNS("rect"); /// /rect.style.width = this.data.sw;
        /// /rect.style.height = this.data.sh;
        /// /rect.style.fill = this.data.sc;
        rect1.setAttribute("width", this.data.sw);
        rect1.setAttribute("height", this.data.sh);
        rect1.setAttribute("fill", this.data.sc);
        this.layerElement.appendChild(rect1);
    };
    function NullElement(data1, globalData1, comp1) {
        this.initFrame();
        this.initBaseData(data1, globalData1, comp1);
        this.initFrame();
        this.initTransform(data1, globalData1, comp1);
        this.initHierarchy();
    }
    NullElement.prototype.prepareFrame = function(num1) {
        this.prepareProperties(num1, true);
    };
    NullElement.prototype.renderFrame = function() {};
    NullElement.prototype.getBaseElement = function() {
        return null;
    };
    NullElement.prototype.destroy = function() {};
    NullElement.prototype.sourceRectAtTime = function() {};
    NullElement.prototype.hide = function() {};
    extendPrototype([
        BaseElement,
        TransformElement,
        HierarchyElement,
        FrameElement
    ], NullElement);
    function SVGRendererBase() {}
    extendPrototype([
        BaseRenderer
    ], SVGRendererBase);
    SVGRendererBase.prototype.createNull = function(data1) {
        return new NullElement(data1, this.globalData, this);
    };
    SVGRendererBase.prototype.createShape = function(data1) {
        return new SVGShapeElement(data1, this.globalData, this);
    };
    SVGRendererBase.prototype.createText = function(data1) {
        return new SVGTextLottieElement(data1, this.globalData, this);
    };
    SVGRendererBase.prototype.createImage = function(data1) {
        return new IImageElement(data1, this.globalData, this);
    };
    SVGRendererBase.prototype.createSolid = function(data1) {
        return new ISolidElement(data1, this.globalData, this);
    };
    SVGRendererBase.prototype.configAnimation = function(animData1) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
        if (this.renderConfig.viewBoxSize) {
            this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize);
        } else {
            this.svgElement.setAttribute("viewBox", "0 0 " + animData1.w + " " + animData1.h);
        }
        if (!this.renderConfig.viewBoxOnly) {
            this.svgElement.setAttribute("width", animData1.w);
            this.svgElement.setAttribute("height", animData1.h);
            this.svgElement.style.width = "100%";
            this.svgElement.style.height = "100%";
            this.svgElement.style.transform = "translate3d(0,0,0)";
            this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
        }
        if (this.renderConfig.width) {
            this.svgElement.setAttribute("width", this.renderConfig.width);
        }
        if (this.renderConfig.height) {
            this.svgElement.setAttribute("height", this.renderConfig.height);
        }
        if (this.renderConfig.className) {
            this.svgElement.setAttribute("class", this.renderConfig.className);
        }
        if (this.renderConfig.id) {
            this.svgElement.setAttribute("id", this.renderConfig.id);
        }
        if (this.renderConfig.focusable !== undefined) {
            this.svgElement.setAttribute("focusable", this.renderConfig.focusable);
        }
        this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio); // this.layerElement.style.transform = 'translate3d(0,0,0)';
        // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";
        this.animationItem.wrapper.appendChild(this.svgElement); // Mask animation
        var defs1 = this.globalData.defs;
        this.setupGlobalData(animData1, defs1);
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.data = animData1;
        var maskElement1 = createNS("clipPath");
        var rect1 = createNS("rect");
        rect1.setAttribute("width", animData1.w);
        rect1.setAttribute("height", animData1.h);
        rect1.setAttribute("x", 0);
        rect1.setAttribute("y", 0);
        var maskId1 = createElementID();
        maskElement1.setAttribute("id", maskId1);
        maskElement1.appendChild(rect1);
        this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + maskId1 + ")");
        defs1.appendChild(maskElement1);
        this.layers = animData1.layers;
        this.elements = createSizedArray(animData1.layers.length);
    };
    SVGRendererBase.prototype.destroy = function() {
        if (this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
        }
        this.layerElement = null;
        this.globalData.defs = null;
        var i3;
        var len1 = this.layers ? this.layers.length : 0;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.elements[i3] && this.elements[i3].destroy) {
                this.elements[i3].destroy();
            }
        }
        this.elements.length = 0;
        this.destroyed = true;
        this.animationItem = null;
    };
    SVGRendererBase.prototype.updateContainerSize = function() {};
    SVGRendererBase.prototype.findIndexByInd = function(ind1) {
        var i3 = 0;
        var len1 = this.layers.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.layers[i3].ind === ind1) {
                return i3;
            }
        }
        return -1;
    };
    SVGRendererBase.prototype.buildItem = function(pos1) {
        var elements1 = this.elements;
        if (elements1[pos1] || this.layers[pos1].ty === 99) {
            return;
        }
        elements1[pos1] = true;
        var element1 = this.createItem(this.layers[pos1]);
        elements1[pos1] = element1;
        if (getExpressionsPlugin()) {
            if (this.layers[pos1].ty === 0) {
                this.globalData.projectInterface.registerComposition(element1);
            }
            element1.initExpressions();
        }
        this.appendElementInPos(element1, pos1);
        if (this.layers[pos1].tt) {
            var elementIndex1 = "tp" in this.layers[pos1] ? this.findIndexByInd(this.layers[pos1].tp) : pos1 - 1;
            if (elementIndex1 === -1) {
                return;
            }
            if (!this.elements[elementIndex1] || this.elements[elementIndex1] === true) {
                this.buildItem(elementIndex1);
                this.addPendingElement(element1);
            } else {
                var matteElement1 = elements1[elementIndex1];
                var matteMask1 = matteElement1.getMatte(this.layers[pos1].tt);
                element1.setMatte(matteMask1);
            }
        }
    };
    SVGRendererBase.prototype.checkPendingElements = function() {
        while(this.pendingElements.length){
            var element1 = this.pendingElements.pop();
            element1.checkParenting();
            if (element1.data.tt) {
                var i3 = 0;
                var len1 = this.elements.length;
                while(i3 < len1){
                    if (this.elements[i3] === element1) {
                        var elementIndex1 = "tp" in element1.data ? this.findIndexByInd(element1.data.tp) : i3 - 1;
                        var matteElement1 = this.elements[elementIndex1];
                        var matteMask1 = matteElement1.getMatte(this.layers[i3].tt);
                        element1.setMatte(matteMask1);
                        break;
                    }
                    i3 += 1;
                }
            }
        }
    };
    SVGRendererBase.prototype.renderFrame = function(num1) {
        if (this.renderedFrame === num1 || this.destroyed) {
            return;
        }
        if (num1 === null) {
            num1 = this.renderedFrame;
        } else {
            this.renderedFrame = num1;
        } // console.log('-------');
        // console.log('FRAME ',num);
        this.globalData.frameNum = num1;
        this.globalData.frameId += 1;
        this.globalData.projectInterface.currentFrame = num1;
        this.globalData._mdf = false;
        var i3;
        var len1 = this.layers.length;
        if (!this.completeLayers) {
            this.checkLayers(num1);
        }
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (this.completeLayers || this.elements[i3]) {
                this.elements[i3].prepareFrame(num1 - this.layers[i3].st);
            }
        }
        if (this.globalData._mdf) {
            for(i3 = 0; i3 < len1; i3 += 1){
                if (this.completeLayers || this.elements[i3]) {
                    this.elements[i3].renderFrame();
                }
            }
        }
    };
    SVGRendererBase.prototype.appendElementInPos = function(element1, pos1) {
        var newElement1 = element1.getBaseElement();
        if (!newElement1) {
            return;
        }
        var i3 = 0;
        var nextElement1;
        while(i3 < pos1){
            if (this.elements[i3] && this.elements[i3] !== true && this.elements[i3].getBaseElement()) {
                nextElement1 = this.elements[i3].getBaseElement();
            }
            i3 += 1;
        }
        if (nextElement1) {
            this.layerElement.insertBefore(newElement1, nextElement1);
        } else {
            this.layerElement.appendChild(newElement1);
        }
    };
    SVGRendererBase.prototype.hide = function() {
        this.layerElement.style.display = "none";
    };
    SVGRendererBase.prototype.show = function() {
        this.layerElement.style.display = "block";
    };
    function ICompElement() {}
    extendPrototype([
        BaseElement,
        TransformElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], ICompElement);
    ICompElement.prototype.initElement = function(data1, globalData1, comp1) {
        this.initFrame();
        this.initBaseData(data1, globalData1, comp1);
        this.initTransform(data1, globalData1, comp1);
        this.initRenderable();
        this.initHierarchy();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        if (this.data.xt || !globalData1.progressiveLoad) {
            this.buildAllItems();
        }
        this.hide();
    };
    /* ICompElement.prototype.hide = function(){
      if(!this.hidden){
          this.hideElement();
          var i,len = this.elements.length;
          for( i = 0; i < len; i+=1 ){
              if(this.elements[i]){
                  this.elements[i].hide();
              }
          }
      }
  }; */ ICompElement.prototype.prepareFrame = function(num1) {
        this._mdf = false;
        this.prepareRenderableFrame(num1);
        this.prepareProperties(num1, this.isInRange);
        if (!this.isInRange && !this.data.xt) {
            return;
        }
        if (!this.tm._placeholder) {
            var timeRemapped1 = this.tm.v;
            if (timeRemapped1 === this.data.op) {
                timeRemapped1 = this.data.op - 1;
            }
            this.renderedFrame = timeRemapped1;
        } else {
            this.renderedFrame = num1 / this.data.sr;
        }
        var i3;
        var len1 = this.elements.length;
        if (!this.completeLayers) {
            this.checkLayers(this.renderedFrame);
        } // This iteration needs to be backwards because of how expressions connect between each other
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (this.completeLayers || this.elements[i3]) {
                this.elements[i3].prepareFrame(this.renderedFrame - this.layers[i3].st);
                if (this.elements[i3]._mdf) {
                    this._mdf = true;
                }
            }
        }
    };
    ICompElement.prototype.renderInnerContent = function() {
        var i3;
        var len1 = this.layers.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.completeLayers || this.elements[i3]) {
                this.elements[i3].renderFrame();
            }
        }
    };
    ICompElement.prototype.setElements = function(elems1) {
        this.elements = elems1;
    };
    ICompElement.prototype.getElements = function() {
        return this.elements;
    };
    ICompElement.prototype.destroyElements = function() {
        var i3;
        var len1 = this.layers.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.elements[i3]) {
                this.elements[i3].destroy();
            }
        }
    };
    ICompElement.prototype.destroy = function() {
        this.destroyElements();
        this.destroyBaseElement();
    };
    function SVGCompElement(data1, globalData1, comp1) {
        this.layers = data1.layers;
        this.supports3d = true;
        this.completeLayers = false;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(data1, globalData1, comp1);
        this.tm = data1.tm ? PropertyFactory.getProp(this, data1.tm, 0, globalData1.frameRate, this) : {
            _placeholder: true
        };
    }
    extendPrototype([
        SVGRendererBase,
        ICompElement,
        SVGBaseElement
    ], SVGCompElement);
    SVGCompElement.prototype.createComp = function(data1) {
        return new SVGCompElement(data1, this.globalData, this);
    };
    function SVGRenderer(animationItem1, config1) {
        this.animationItem = animationItem1;
        this.layers = null;
        this.renderedFrame = -1;
        this.svgElement = createNS("svg");
        var ariaLabel1 = "";
        if (config1 && config1.title) {
            var titleElement1 = createNS("title");
            var titleId1 = createElementID();
            titleElement1.setAttribute("id", titleId1);
            titleElement1.textContent = config1.title;
            this.svgElement.appendChild(titleElement1);
            ariaLabel1 += titleId1;
        }
        if (config1 && config1.description) {
            var descElement1 = createNS("desc");
            var descId1 = createElementID();
            descElement1.setAttribute("id", descId1);
            descElement1.textContent = config1.description;
            this.svgElement.appendChild(descElement1);
            ariaLabel1 += " " + descId1;
        }
        if (ariaLabel1) {
            this.svgElement.setAttribute("aria-labelledby", ariaLabel1);
        }
        var defs1 = createNS("defs");
        this.svgElement.appendChild(defs1);
        var maskElement1 = createNS("g");
        this.svgElement.appendChild(maskElement1);
        this.layerElement = maskElement1;
        this.renderConfig = {
            preserveAspectRatio: config1 && config1.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: config1 && config1.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: config1 && config1.contentVisibility || "visible",
            progressiveLoad: config1 && config1.progressiveLoad || false,
            hideOnTransparent: !(config1 && config1.hideOnTransparent === false),
            viewBoxOnly: config1 && config1.viewBoxOnly || false,
            viewBoxSize: config1 && config1.viewBoxSize || false,
            className: config1 && config1.className || "",
            id: config1 && config1.id || "",
            focusable: config1 && config1.focusable,
            filterSize: {
                width: config1 && config1.filterSize && config1.filterSize.width || "100%",
                height: config1 && config1.filterSize && config1.filterSize.height || "100%",
                x: config1 && config1.filterSize && config1.filterSize.x || "0%",
                y: config1 && config1.filterSize && config1.filterSize.y || "0%"
            },
            width: config1 && config1.width,
            height: config1 && config1.height,
            runExpressions: !config1 || config1.runExpressions === undefined || config1.runExpressions
        };
        this.globalData = {
            _mdf: false,
            frameNum: -1,
            defs: defs1,
            renderConfig: this.renderConfig
        };
        this.elements = [];
        this.pendingElements = [];
        this.destroyed = false;
        this.rendererType = "svg";
    }
    extendPrototype([
        SVGRendererBase
    ], SVGRenderer);
    SVGRenderer.prototype.createComp = function(data1) {
        return new SVGCompElement(data1, this.globalData, this);
    };
    function ShapeTransformManager() {
        this.sequences = {};
        this.sequenceList = [];
        this.transform_key_count = 0;
    }
    ShapeTransformManager.prototype = {
        addTransformSequence: function addTransformSequence1(transforms1) {
            var i3;
            var len1 = transforms1.length;
            var key1 = "_";
            for(i3 = 0; i3 < len1; i3 += 1){
                key1 += transforms1[i3].transform.key + "_";
            }
            var sequence1 = this.sequences[key1];
            if (!sequence1) {
                sequence1 = {
                    transforms: [].concat(transforms1),
                    finalTransform: new Matrix(),
                    _mdf: false
                };
                this.sequences[key1] = sequence1;
                this.sequenceList.push(sequence1);
            }
            return sequence1;
        },
        processSequence: function processSequence1(sequence1, isFirstFrame1) {
            var i3 = 0;
            var len1 = sequence1.transforms.length;
            var _mdf1 = isFirstFrame1;
            while(i3 < len1 && !isFirstFrame1){
                if (sequence1.transforms[i3].transform.mProps._mdf) {
                    _mdf1 = true;
                    break;
                }
                i3 += 1;
            }
            if (_mdf1) {
                sequence1.finalTransform.reset();
                for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                    sequence1.finalTransform.multiply(sequence1.transforms[i3].transform.mProps.v);
                }
            }
            sequence1._mdf = _mdf1;
        },
        processSequences: function processSequences1(isFirstFrame1) {
            var i3;
            var len1 = this.sequenceList.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.processSequence(this.sequenceList[i3], isFirstFrame1);
            }
        },
        getNewKey: function getNewKey1() {
            this.transform_key_count += 1;
            return "_" + this.transform_key_count;
        }
    };
    var lumaLoader = function lumaLoader1() {
        var id1 = "__lottie_element_luma_buffer";
        var lumaBuffer1 = null;
        var lumaBufferCtx1 = null;
        var svg1 = null; // This alternate solution has a slight delay before the filter is applied, resulting in a flicker on the first frame.
        // Keeping this here for reference, and in the future, if offscreen canvas supports url filters, this can be used.
        // For now, neither of them work for offscreen canvas, so canvas workers can't support the luma track matte mask.
        // Naming it solution 2 to mark the extra comment lines.
        /*
    var svgString = [
      '<svg xmlns="http://www.w3.org/2000/svg">',
      '<filter id="' + id + '">',
      '<feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0',
      '"/>',
      '</filter>',
      '</svg>',
    ].join('');
    var blob = new Blob([svgString], { type: 'image/svg+xml' });
    var url = URL.createObjectURL(blob);
    */ function createLumaSvgFilter1() {
            var _svg1 = createNS("svg");
            var fil1 = createNS("filter");
            var matrix1 = createNS("feColorMatrix");
            fil1.setAttribute("id", id1);
            matrix1.setAttribute("type", "matrix");
            matrix1.setAttribute("color-interpolation-filters", "sRGB");
            matrix1.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0");
            fil1.appendChild(matrix1);
            _svg1.appendChild(fil1);
            _svg1.setAttribute("id", id1 + "_svg");
            if (featureSupport.svgLumaHidden) {
                _svg1.style.display = "none";
            }
            return _svg1;
        }
        function loadLuma1() {
            if (!lumaBuffer1) {
                svg1 = createLumaSvgFilter1();
                document.body.appendChild(svg1);
                lumaBuffer1 = createTag("canvas");
                lumaBufferCtx1 = lumaBuffer1.getContext("2d"); // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2
                lumaBufferCtx1.filter = "url(#" + id1 + ")";
                lumaBufferCtx1.fillStyle = "rgba(0,0,0,0)";
                lumaBufferCtx1.fillRect(0, 0, 1, 1);
            }
        }
        function getLuma1(canvas1) {
            if (!lumaBuffer1) {
                loadLuma1();
            }
            lumaBuffer1.width = canvas1.width;
            lumaBuffer1.height = canvas1.height; // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2
            lumaBufferCtx1.filter = "url(#" + id1 + ")";
            return lumaBuffer1;
        }
        return {
            load: loadLuma1,
            get: getLuma1
        };
    };
    function createCanvas(width1, height1) {
        if (featureSupport.offscreenCanvas) {
            return new OffscreenCanvas(width1, height1);
        }
        var canvas1 = createTag("canvas");
        canvas1.width = width1;
        canvas1.height = height1;
        return canvas1;
    }
    var assetLoader = function() {
        return {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas: createCanvas
        };
    }();
    var registeredEffects = {};
    function CVEffects(elem3) {
        var i3;
        var len1 = elem3.data.ef ? elem3.data.ef.length : 0;
        this.filters = [];
        var filterManager1;
        for(i3 = 0; i3 < len1; i3 += 1){
            filterManager1 = null;
            var type1 = elem3.data.ef[i3].ty;
            if (registeredEffects[type1]) {
                var Effect1 = registeredEffects[type1].effect;
                filterManager1 = new Effect1(elem3.effectsManager.effectElements[i3], elem3);
            }
            if (filterManager1) {
                this.filters.push(filterManager1);
            }
        }
        if (this.filters.length) {
            elem3.addRenderableComponent(this);
        }
    }
    CVEffects.prototype.renderFrame = function(_isFirstFrame1) {
        var i3;
        var len1 = this.filters.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.filters[i3].renderFrame(_isFirstFrame1);
        }
    };
    CVEffects.prototype.getEffects = function(type1) {
        var i3;
        var len1 = this.filters.length;
        var effects1 = [];
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.filters[i3].type === type1) {
                effects1.push(this.filters[i3]);
            }
        }
        return effects1;
    };
    function registerEffect(id1, effect1) {
        registeredEffects[id1] = {
            effect: effect1
        };
    }
    function CVMaskElement(data1, element1) {
        this.data = data1;
        this.element = element1;
        this.masksProperties = this.data.masksProperties || [];
        this.viewData = createSizedArray(this.masksProperties.length);
        var i3;
        var len1 = this.masksProperties.length;
        var hasMasks1 = false;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.masksProperties[i3].mode !== "n") {
                hasMasks1 = true;
            }
            this.viewData[i3] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i3], 3);
        }
        this.hasMasks = hasMasks1;
        if (hasMasks1) {
            this.element.addRenderableComponent(this);
        }
    }
    CVMaskElement.prototype.renderFrame = function() {
        if (!this.hasMasks) {
            return;
        }
        var transform1 = this.element.finalTransform.mat;
        var ctx1 = this.element.canvasContext;
        var i3;
        var len1 = this.masksProperties.length;
        var pt5;
        var pts1;
        var data1;
        ctx1.beginPath();
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.masksProperties[i3].mode !== "n") {
                if (this.masksProperties[i3].inv) {
                    ctx1.moveTo(0, 0);
                    ctx1.lineTo(this.element.globalData.compSize.w, 0);
                    ctx1.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
                    ctx1.lineTo(0, this.element.globalData.compSize.h);
                    ctx1.lineTo(0, 0);
                }
                data1 = this.viewData[i3].v;
                pt5 = transform1.applyToPointArray(data1.v[0][0], data1.v[0][1], 0);
                ctx1.moveTo(pt5[0], pt5[1]);
                var j3;
                var jLen1 = data1._length;
                for(j3 = 1; j3 < jLen1; j3 += 1){
                    pts1 = transform1.applyToTriplePoints(data1.o[j3 - 1], data1.i[j3], data1.v[j3]);
                    ctx1.bezierCurveTo(pts1[0], pts1[1], pts1[2], pts1[3], pts1[4], pts1[5]);
                }
                pts1 = transform1.applyToTriplePoints(data1.o[j3 - 1], data1.i[0], data1.v[0]);
                ctx1.bezierCurveTo(pts1[0], pts1[1], pts1[2], pts1[3], pts1[4], pts1[5]);
            }
        }
        this.element.globalData.renderer.save(true);
        ctx1.clip();
    };
    CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;
    CVMaskElement.prototype.destroy = function() {
        this.element = null;
    };
    function CVBaseElement() {}
    var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out"
    };
    CVBaseElement.prototype = {
        createElements: function createElements1() {},
        initRendererElement: function initRendererElement1() {},
        createContainerElements: function createContainerElements1() {
            // If the layer is masked we will use two buffers to store each different states of the drawing
            // This solution is not ideal for several reason. But unfortunately, because of the recursive
            // nature of the render tree, it's the only simple way to make sure one inner mask doesn't override an outer mask.
            // TODO: try to reduce the size of these buffers to the size of the composition contaning the layer
            // It might be challenging because the layer most likely is transformed in some way
            if (this.data.tt >= 1) {
                this.buffers = [];
                var canvasContext1 = this.globalData.canvasContext;
                var bufferCanvas1 = assetLoader.createCanvas(canvasContext1.canvas.width, canvasContext1.canvas.height);
                this.buffers.push(bufferCanvas1);
                var bufferCanvas21 = assetLoader.createCanvas(canvasContext1.canvas.width, canvasContext1.canvas.height);
                this.buffers.push(bufferCanvas21);
                if (this.data.tt >= 3 && !document._isProxy) {
                    assetLoader.loadLumaCanvas();
                }
            }
            this.canvasContext = this.globalData.canvasContext;
            this.transformCanvas = this.globalData.transformCanvas;
            this.renderableEffectsManager = new CVEffects(this);
            this.searchEffectTransforms();
        },
        createContent: function createContent1() {},
        setBlendMode: function setBlendMode1() {
            var globalData1 = this.globalData;
            if (globalData1.blendMode !== this.data.bm) {
                globalData1.blendMode = this.data.bm;
                var blendModeValue1 = getBlendMode(this.data.bm);
                globalData1.canvasContext.globalCompositeOperation = blendModeValue1;
            }
        },
        createRenderableComponents: function createRenderableComponents1() {
            this.maskManager = new CVMaskElement(this.data, this);
            this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        },
        hideElement: function hideElement1() {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                this.hidden = true;
            }
        },
        showElement: function showElement1() {
            if (this.isInRange && !this.isTransparent) {
                this.hidden = false;
                this._isFirstFrame = true;
                this.maskManager._isFirstFrame = true;
            }
        },
        clearCanvas: function clearCanvas1(canvasContext1) {
            canvasContext1.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
        },
        prepareLayer: function prepareLayer1() {
            if (this.data.tt >= 1) {
                var buffer1 = this.buffers[0];
                var bufferCtx1 = buffer1.getContext("2d");
                this.clearCanvas(bufferCtx1); // on the first buffer we store the current state of the global drawing
                bufferCtx1.drawImage(this.canvasContext.canvas, 0, 0); // The next four lines are to clear the canvas
                // TODO: Check if there is a way to clear the canvas without resetting the transform
                this.currentTransform = this.canvasContext.getTransform();
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
                this.clearCanvas(this.canvasContext);
                this.canvasContext.setTransform(this.currentTransform);
            }
        },
        exitLayer: function exitLayer1() {
            if (this.data.tt >= 1) {
                var buffer1 = this.buffers[1]; // On the second buffer we store the current state of the global drawing
                // that only contains the content of this layer
                // (if it is a composition, it also includes the nested layers)
                var bufferCtx1 = buffer1.getContext("2d");
                this.clearCanvas(bufferCtx1);
                bufferCtx1.drawImage(this.canvasContext.canvas, 0, 0); // We clear the canvas again
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
                this.clearCanvas(this.canvasContext);
                this.canvasContext.setTransform(this.currentTransform); // We draw the mask
                var mask1 = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
                mask1.renderFrame(true); // We draw the second buffer (that contains the content of this layer)
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0); // If the mask is a Luma matte, we need to do two extra painting operations
                // the _isProxy check is to avoid drawing a fake canvas in workers that will throw an error
                if (this.data.tt >= 3 && !document._isProxy) {
                    // We copy the painted mask to a buffer that has a color matrix filter applied to it
                    // that applies the rgb values to the alpha channel
                    var lumaBuffer1 = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                    var lumaBufferCtx1 = lumaBuffer1.getContext("2d");
                    lumaBufferCtx1.drawImage(this.canvasContext.canvas, 0, 0);
                    this.clearCanvas(this.canvasContext); // we repaint the context with the mask applied to it
                    this.canvasContext.drawImage(lumaBuffer1, 0, 0);
                }
                this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt];
                this.canvasContext.drawImage(buffer1, 0, 0); // We finally draw the first buffer (that contains the content of the global drawing)
                // We use destination-over to draw the global drawing below the current layer
                this.canvasContext.globalCompositeOperation = "destination-over";
                this.canvasContext.drawImage(this.buffers[0], 0, 0);
                this.canvasContext.setTransform(this.currentTransform); // We reset the globalCompositeOperation to source-over, the standard type of operation
                this.canvasContext.globalCompositeOperation = "source-over";
            }
        },
        renderFrame: function renderFrame1(forceRender1) {
            if (this.hidden || this.data.hd) {
                return;
            }
            if (this.data.td === 1 && !forceRender1) {
                return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderLocalTransform();
            this.setBlendMode();
            var forceRealStack1 = this.data.ty === 0;
            this.prepareLayer();
            this.globalData.renderer.save(forceRealStack1);
            this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props);
            this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity);
            this.renderInnerContent();
            this.globalData.renderer.restore(forceRealStack1);
            this.exitLayer();
            if (this.maskManager.hasMasks) {
                this.globalData.renderer.restore(true);
            }
            if (this._isFirstFrame) {
                this._isFirstFrame = false;
            }
        },
        destroy: function destroy1() {
            this.canvasContext = null;
            this.data = null;
            this.globalData = null;
            this.maskManager.destroy();
        },
        mHelper: new Matrix()
    };
    CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
    CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
    function CVShapeData(element1, data1, styles1, transformsManager1) {
        this.styledShapes = [];
        this.tr = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        var ty1 = 4;
        if (data1.ty === "rc") {
            ty1 = 5;
        } else if (data1.ty === "el") {
            ty1 = 6;
        } else if (data1.ty === "sr") {
            ty1 = 7;
        }
        this.sh = ShapePropertyFactory.getShapeProp(element1, data1, ty1, element1);
        var i3;
        var len1 = styles1.length;
        var styledShape1;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (!styles1[i3].closed) {
                styledShape1 = {
                    transforms: transformsManager1.addTransformSequence(styles1[i3].transforms),
                    trNodes: []
                };
                this.styledShapes.push(styledShape1);
                styles1[i3].elements.push(styledShape1);
            }
        }
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
    function CVShapeElement(data1, globalData1, comp1) {
        this.shapes = [];
        this.shapesData = data1.shapes;
        this.stylesList = [];
        this.itemsData = [];
        this.prevViewData = [];
        this.shapeModifiers = [];
        this.processedElements = [];
        this.transformsManager = new ShapeTransformManager();
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        IShapeElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], CVShapeElement);
    CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
    CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: false
    };
    CVShapeElement.prototype.dashResetter = [];
    CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    };
    CVShapeElement.prototype.createStyleElement = function(data1, transforms1) {
        var styleElem1 = {
            data: data1,
            type: data1.ty,
            preTransforms: this.transformsManager.addTransformSequence(transforms1),
            transforms: [],
            elements: [],
            closed: data1.hd === true
        };
        var elementData1 = {};
        if (data1.ty === "fl" || data1.ty === "st") {
            elementData1.c = PropertyFactory.getProp(this, data1.c, 1, 255, this);
            if (!elementData1.c.k) {
                styleElem1.co = "rgb(" + bmFloor(elementData1.c.v[0]) + "," + bmFloor(elementData1.c.v[1]) + "," + bmFloor(elementData1.c.v[2]) + ")";
            }
        } else if (data1.ty === "gf" || data1.ty === "gs") {
            elementData1.s = PropertyFactory.getProp(this, data1.s, 1, null, this);
            elementData1.e = PropertyFactory.getProp(this, data1.e, 1, null, this);
            elementData1.h = PropertyFactory.getProp(this, data1.h || {
                k: 0
            }, 0, 0.01, this);
            elementData1.a = PropertyFactory.getProp(this, data1.a || {
                k: 0
            }, 0, degToRads, this);
            elementData1.g = new GradientProperty(this, data1.g, this);
        }
        elementData1.o = PropertyFactory.getProp(this, data1.o, 0, 0.01, this);
        if (data1.ty === "st" || data1.ty === "gs") {
            styleElem1.lc = lineCapEnum[data1.lc || 2];
            styleElem1.lj = lineJoinEnum[data1.lj || 2];
            if (data1.lj == 1) {
                // eslint-disable-line eqeqeq
                styleElem1.ml = data1.ml;
            }
            elementData1.w = PropertyFactory.getProp(this, data1.w, 0, null, this);
            if (!elementData1.w.k) {
                styleElem1.wi = elementData1.w.v;
            }
            if (data1.d) {
                var d3 = new DashProperty(this, data1.d, "canvas", this);
                elementData1.d = d3;
                if (!elementData1.d.k) {
                    styleElem1.da = elementData1.d.dashArray;
                    styleElem1["do"] = elementData1.d.dashoffset[0];
                }
            }
        } else {
            styleElem1.r = data1.r === 2 ? "evenodd" : "nonzero";
        }
        this.stylesList.push(styleElem1);
        elementData1.style = styleElem1;
        return elementData1;
    };
    CVShapeElement.prototype.createGroupElement = function() {
        var elementData1 = {
            it: [],
            prevViewData: []
        };
        return elementData1;
    };
    CVShapeElement.prototype.createTransformElement = function(data1) {
        var elementData1 = {
            transform: {
                opacity: 1,
                _opMdf: false,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, data1.o, 0, 0.01, this),
                mProps: TransformPropertyFactory.getTransformProperty(this, data1, this)
            }
        };
        return elementData1;
    };
    CVShapeElement.prototype.createShapeElement = function(data1) {
        var elementData1 = new CVShapeData(this, data1, this.stylesList, this.transformsManager);
        this.shapes.push(elementData1);
        this.addShapeToModifiers(elementData1);
        return elementData1;
    };
    CVShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = true;
        var i3;
        var len1 = this.itemsData.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.prevViewData[i3] = this.itemsData[i3];
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
        len1 = this.dynamicProperties.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            this.dynamicProperties[i3].getValue();
        }
        this.renderModifiers();
        this.transformsManager.processSequences(this._isFirstFrame);
    };
    CVShapeElement.prototype.addTransformToStyleList = function(transform1) {
        var i3;
        var len1 = this.stylesList.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (!this.stylesList[i3].closed) {
                this.stylesList[i3].transforms.push(transform1);
            }
        }
    };
    CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var i3;
        var len1 = this.stylesList.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (!this.stylesList[i3].closed) {
                this.stylesList[i3].transforms.pop();
            }
        }
    };
    CVShapeElement.prototype.closeStyles = function(styles1) {
        var i3;
        var len1 = styles1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            styles1[i3].closed = true;
        }
    };
    CVShapeElement.prototype.searchShapes = function(arr3, itemsData1, prevViewData1, shouldRender1, transforms1) {
        var i3;
        var len1 = arr3.length - 1;
        var j3;
        var jLen1;
        var ownStyles1 = [];
        var ownModifiers1 = [];
        var processedPos1;
        var modifier1;
        var currentTransform1;
        var ownTransforms1 = [].concat(transforms1);
        for(i3 = len1; i3 >= 0; i3 -= 1){
            processedPos1 = this.searchProcessedElement(arr3[i3]);
            if (!processedPos1) {
                arr3[i3]._shouldRender = shouldRender1;
            } else {
                itemsData1[i3] = prevViewData1[processedPos1 - 1];
            }
            if (arr3[i3].ty === "fl" || arr3[i3].ty === "st" || arr3[i3].ty === "gf" || arr3[i3].ty === "gs") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createStyleElement(arr3[i3], ownTransforms1);
                } else {
                    itemsData1[i3].style.closed = false;
                }
                ownStyles1.push(itemsData1[i3].style);
            } else if (arr3[i3].ty === "gr") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createGroupElement(arr3[i3]);
                } else {
                    jLen1 = itemsData1[i3].it.length;
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        itemsData1[i3].prevViewData[j3] = itemsData1[i3].it[j3];
                    }
                }
                this.searchShapes(arr3[i3].it, itemsData1[i3].it, itemsData1[i3].prevViewData, shouldRender1, ownTransforms1);
            } else if (arr3[i3].ty === "tr") {
                if (!processedPos1) {
                    currentTransform1 = this.createTransformElement(arr3[i3]);
                    itemsData1[i3] = currentTransform1;
                }
                ownTransforms1.push(itemsData1[i3]);
                this.addTransformToStyleList(itemsData1[i3]);
            } else if (arr3[i3].ty === "sh" || arr3[i3].ty === "rc" || arr3[i3].ty === "el" || arr3[i3].ty === "sr") {
                if (!processedPos1) {
                    itemsData1[i3] = this.createShapeElement(arr3[i3]);
                }
            } else if (arr3[i3].ty === "tm" || arr3[i3].ty === "rd" || arr3[i3].ty === "pb" || arr3[i3].ty === "zz" || arr3[i3].ty === "op") {
                if (!processedPos1) {
                    modifier1 = ShapeModifiers.getModifier(arr3[i3].ty);
                    modifier1.init(this, arr3[i3]);
                    itemsData1[i3] = modifier1;
                    this.shapeModifiers.push(modifier1);
                } else {
                    modifier1 = itemsData1[i3];
                    modifier1.closed = false;
                }
                ownModifiers1.push(modifier1);
            } else if (arr3[i3].ty === "rp") {
                if (!processedPos1) {
                    modifier1 = ShapeModifiers.getModifier(arr3[i3].ty);
                    itemsData1[i3] = modifier1;
                    modifier1.init(this, arr3, i3, itemsData1);
                    this.shapeModifiers.push(modifier1);
                    shouldRender1 = false;
                } else {
                    modifier1 = itemsData1[i3];
                    modifier1.closed = true;
                }
                ownModifiers1.push(modifier1);
            }
            this.addProcessedElement(arr3[i3], i3 + 1);
        }
        this.removeTransformFromStyleList();
        this.closeStyles(ownStyles1);
        len1 = ownModifiers1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            ownModifiers1[i3].closed = true;
        }
    };
    CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1;
        this.transformHelper._opMdf = false;
        this.renderModifiers();
        this.transformsManager.processSequences(this._isFirstFrame);
        this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
    };
    CVShapeElement.prototype.renderShapeTransform = function(parentTransform1, groupTransform1) {
        if (parentTransform1._opMdf || groupTransform1.op._mdf || this._isFirstFrame) {
            groupTransform1.opacity = parentTransform1.opacity;
            groupTransform1.opacity *= groupTransform1.op.v;
            groupTransform1._opMdf = true;
        }
    };
    CVShapeElement.prototype.drawLayer = function() {
        var i3;
        var len1 = this.stylesList.length;
        var j3;
        var jLen1;
        var k3;
        var kLen1;
        var elems1;
        var nodes1;
        var renderer1 = this.globalData.renderer;
        var ctx1 = this.globalData.canvasContext;
        var type1;
        var currentStyle1;
        for(i3 = 0; i3 < len1; i3 += 1){
            currentStyle1 = this.stylesList[i3];
            type1 = currentStyle1.type; // Skipping style when
            // Stroke width equals 0
            // style should not be rendered (extra unused repeaters)
            // current opacity equals 0
            // global opacity equals 0
            if (!((type1 === "st" || type1 === "gs") && currentStyle1.wi === 0 || !currentStyle1.data._shouldRender || currentStyle1.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                renderer1.save();
                elems1 = currentStyle1.elements;
                if (type1 === "st" || type1 === "gs") {
                    renderer1.ctxStrokeStyle(type1 === "st" ? currentStyle1.co : currentStyle1.grd); // ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;
                    renderer1.ctxLineWidth(currentStyle1.wi); // ctx.lineWidth = currentStyle.wi;
                    renderer1.ctxLineCap(currentStyle1.lc); // ctx.lineCap = currentStyle.lc;
                    renderer1.ctxLineJoin(currentStyle1.lj); // ctx.lineJoin = currentStyle.lj;
                    renderer1.ctxMiterLimit(currentStyle1.ml || 0); // ctx.miterLimit = currentStyle.ml || 0;
                } else {
                    renderer1.ctxFillStyle(type1 === "fl" ? currentStyle1.co : currentStyle1.grd); // ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
                }
                renderer1.ctxOpacity(currentStyle1.coOp);
                if (type1 !== "st" && type1 !== "gs") {
                    ctx1.beginPath();
                }
                renderer1.ctxTransform(currentStyle1.preTransforms.finalTransform.props);
                jLen1 = elems1.length;
                for(j3 = 0; j3 < jLen1; j3 += 1){
                    if (type1 === "st" || type1 === "gs") {
                        ctx1.beginPath();
                        if (currentStyle1.da) {
                            ctx1.setLineDash(currentStyle1.da);
                            ctx1.lineDashOffset = currentStyle1["do"];
                        }
                    }
                    nodes1 = elems1[j3].trNodes;
                    kLen1 = nodes1.length;
                    for(k3 = 0; k3 < kLen1; k3 += 1){
                        if (nodes1[k3].t === "m") {
                            ctx1.moveTo(nodes1[k3].p[0], nodes1[k3].p[1]);
                        } else if (nodes1[k3].t === "c") {
                            ctx1.bezierCurveTo(nodes1[k3].pts[0], nodes1[k3].pts[1], nodes1[k3].pts[2], nodes1[k3].pts[3], nodes1[k3].pts[4], nodes1[k3].pts[5]);
                        } else {
                            ctx1.closePath();
                        }
                    }
                    if (type1 === "st" || type1 === "gs") {
                        // ctx.stroke();
                        renderer1.ctxStroke();
                        if (currentStyle1.da) {
                            ctx1.setLineDash(this.dashResetter);
                        }
                    }
                }
                if (type1 !== "st" && type1 !== "gs") {
                    // ctx.fill(currentStyle.r);
                    this.globalData.renderer.ctxFill(currentStyle1.r);
                }
                renderer1.restore();
            }
        }
    };
    CVShapeElement.prototype.renderShape = function(parentTransform1, items1, data1, isMain1) {
        var i3;
        var len1 = items1.length - 1;
        var groupTransform1;
        groupTransform1 = parentTransform1;
        for(i3 = len1; i3 >= 0; i3 -= 1){
            if (items1[i3].ty === "tr") {
                groupTransform1 = data1[i3].transform;
                this.renderShapeTransform(parentTransform1, groupTransform1);
            } else if (items1[i3].ty === "sh" || items1[i3].ty === "el" || items1[i3].ty === "rc" || items1[i3].ty === "sr") {
                this.renderPath(items1[i3], data1[i3]);
            } else if (items1[i3].ty === "fl") {
                this.renderFill(items1[i3], data1[i3], groupTransform1);
            } else if (items1[i3].ty === "st") {
                this.renderStroke(items1[i3], data1[i3], groupTransform1);
            } else if (items1[i3].ty === "gf" || items1[i3].ty === "gs") {
                this.renderGradientFill(items1[i3], data1[i3], groupTransform1);
            } else if (items1[i3].ty === "gr") {
                this.renderShape(groupTransform1, items1[i3].it, data1[i3].it);
            } else if (items1[i3].ty === "tm") {}
        }
        if (isMain1) {
            this.drawLayer();
        }
    };
    CVShapeElement.prototype.renderStyledShape = function(styledShape1, shape3) {
        if (this._isFirstFrame || shape3._mdf || styledShape1.transforms._mdf) {
            var shapeNodes1 = styledShape1.trNodes;
            var paths1 = shape3.paths;
            var i3;
            var len1;
            var j3;
            var jLen1 = paths1._length;
            shapeNodes1.length = 0;
            var groupTransformMat1 = styledShape1.transforms.finalTransform;
            for(j3 = 0; j3 < jLen1; j3 += 1){
                var pathNodes1 = paths1.shapes[j3];
                if (pathNodes1 && pathNodes1.v) {
                    len1 = pathNodes1._length;
                    for(i3 = 1; i3 < len1; i3 += 1){
                        if (i3 === 1) {
                            shapeNodes1.push({
                                t: "m",
                                p: groupTransformMat1.applyToPointArray(pathNodes1.v[0][0], pathNodes1.v[0][1], 0)
                            });
                        }
                        shapeNodes1.push({
                            t: "c",
                            pts: groupTransformMat1.applyToTriplePoints(pathNodes1.o[i3 - 1], pathNodes1.i[i3], pathNodes1.v[i3])
                        });
                    }
                    if (len1 === 1) {
                        shapeNodes1.push({
                            t: "m",
                            p: groupTransformMat1.applyToPointArray(pathNodes1.v[0][0], pathNodes1.v[0][1], 0)
                        });
                    }
                    if (pathNodes1.c && len1) {
                        shapeNodes1.push({
                            t: "c",
                            pts: groupTransformMat1.applyToTriplePoints(pathNodes1.o[i3 - 1], pathNodes1.i[0], pathNodes1.v[0])
                        });
                        shapeNodes1.push({
                            t: "z"
                        });
                    }
                }
            }
            styledShape1.trNodes = shapeNodes1;
        }
    };
    CVShapeElement.prototype.renderPath = function(pathData1, itemData1) {
        if (pathData1.hd !== true && pathData1._shouldRender) {
            var i3;
            var len1 = itemData1.styledShapes.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                this.renderStyledShape(itemData1.styledShapes[i3], itemData1.sh);
            }
        }
    };
    CVShapeElement.prototype.renderFill = function(styleData1, itemData1, groupTransform1) {
        var styleElem1 = itemData1.style;
        if (itemData1.c._mdf || this._isFirstFrame) {
            styleElem1.co = "rgb(" + bmFloor(itemData1.c.v[0]) + "," + bmFloor(itemData1.c.v[1]) + "," + bmFloor(itemData1.c.v[2]) + ")";
        }
        if (itemData1.o._mdf || groupTransform1._opMdf || this._isFirstFrame) {
            styleElem1.coOp = itemData1.o.v * groupTransform1.opacity;
        }
    };
    CVShapeElement.prototype.renderGradientFill = function(styleData1, itemData1, groupTransform1) {
        var styleElem1 = itemData1.style;
        var grd1;
        if (!styleElem1.grd || itemData1.g._mdf || itemData1.s._mdf || itemData1.e._mdf || styleData1.t !== 1 && (itemData1.h._mdf || itemData1.a._mdf)) {
            var ctx1 = this.globalData.canvasContext;
            var pt11 = itemData1.s.v;
            var pt21 = itemData1.e.v;
            if (styleData1.t === 1) {
                grd1 = ctx1.createLinearGradient(pt11[0], pt11[1], pt21[0], pt21[1]);
            } else {
                var rad1 = Math.sqrt(Math.pow(pt11[0] - pt21[0], 2) + Math.pow(pt11[1] - pt21[1], 2));
                var ang1 = Math.atan2(pt21[1] - pt11[1], pt21[0] - pt11[0]);
                var percent1 = itemData1.h.v;
                if (percent1 >= 1) {
                    percent1 = 0.99;
                } else if (percent1 <= -1) {
                    percent1 = -0.99;
                }
                var dist4 = rad1 * percent1;
                var x4 = Math.cos(ang1 + itemData1.a.v) * dist4 + pt11[0];
                var y4 = Math.sin(ang1 + itemData1.a.v) * dist4 + pt11[1];
                grd1 = ctx1.createRadialGradient(x4, y4, 0, pt11[0], pt11[1], rad1);
            }
            var i3;
            var len1 = styleData1.g.p;
            var cValues1 = itemData1.g.c;
            var opacity1 = 1;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (itemData1.g._hasOpacity && itemData1.g._collapsable) {
                    opacity1 = itemData1.g.o[i3 * 2 + 1];
                }
                grd1.addColorStop(cValues1[i3 * 4] / 100, "rgba(" + cValues1[i3 * 4 + 1] + "," + cValues1[i3 * 4 + 2] + "," + cValues1[i3 * 4 + 3] + "," + opacity1 + ")");
            }
            styleElem1.grd = grd1;
        }
        styleElem1.coOp = itemData1.o.v * groupTransform1.opacity;
    };
    CVShapeElement.prototype.renderStroke = function(styleData1, itemData1, groupTransform1) {
        var styleElem1 = itemData1.style;
        var d3 = itemData1.d;
        if (d3 && (d3._mdf || this._isFirstFrame)) {
            styleElem1.da = d3.dashArray;
            styleElem1["do"] = d3.dashoffset[0];
        }
        if (itemData1.c._mdf || this._isFirstFrame) {
            styleElem1.co = "rgb(" + bmFloor(itemData1.c.v[0]) + "," + bmFloor(itemData1.c.v[1]) + "," + bmFloor(itemData1.c.v[2]) + ")";
        }
        if (itemData1.o._mdf || groupTransform1._opMdf || this._isFirstFrame) {
            styleElem1.coOp = itemData1.o.v * groupTransform1.opacity;
        }
        if (itemData1.w._mdf || this._isFirstFrame) {
            styleElem1.wi = itemData1.w.v;
        }
    };
    CVShapeElement.prototype.destroy = function() {
        this.shapesData = null;
        this.globalData = null;
        this.canvasContext = null;
        this.stylesList.length = 0;
        this.itemsData.length = 0;
    };
    function CVTextElement(data1, globalData1, comp1) {
        this.textSpans = [];
        this.yOffset = 0;
        this.fillColorAnim = false;
        this.strokeColorAnim = false;
        this.strokeWidthAnim = false;
        this.stroke = false;
        this.fill = false;
        this.justifyOffset = 0;
        this.currentRender = null;
        this.renderType = "canvas";
        this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        };
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement,
        ITextElement
    ], CVTextElement);
    CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d");
    CVTextElement.prototype.buildNewText = function() {
        var documentData1 = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData1.l ? documentData1.l.length : 0);
        var hasFill1 = false;
        if (documentData1.fc) {
            hasFill1 = true;
            this.values.fill = this.buildColor(documentData1.fc);
        } else {
            this.values.fill = "rgba(0,0,0,0)";
        }
        this.fill = hasFill1;
        var hasStroke1 = false;
        if (documentData1.sc) {
            hasStroke1 = true;
            this.values.stroke = this.buildColor(documentData1.sc);
            this.values.sWidth = documentData1.sw;
        }
        var fontData1 = this.globalData.fontManager.getFontByName(documentData1.f);
        var i3;
        var len1;
        var letters1 = documentData1.l;
        var matrixHelper1 = this.mHelper;
        this.stroke = hasStroke1;
        this.values.fValue = documentData1.finalSize + "px " + this.globalData.fontManager.getFontByName(documentData1.f).fFamily;
        len1 = documentData1.finalText.length; // this.tHelper.font = this.values.fValue;
        var charData1;
        var shapeData1;
        var k3;
        var kLen1;
        var shapes1;
        var j3;
        var jLen1;
        var pathNodes1;
        var commands1;
        var pathArr1;
        var singleShape1 = this.data.singleShape;
        var trackingOffset1 = documentData1.tr * 0.001 * documentData1.finalSize;
        var xPos1 = 0;
        var yPos1 = 0;
        var firstLine1 = true;
        var cnt1 = 0;
        for(i3 = 0; i3 < len1; i3 += 1){
            charData1 = this.globalData.fontManager.getCharData(documentData1.finalText[i3], fontData1.fStyle, this.globalData.fontManager.getFontByName(documentData1.f).fFamily);
            shapeData1 = charData1 && charData1.data || {};
            matrixHelper1.reset();
            if (singleShape1 && letters1[i3].n) {
                xPos1 = -trackingOffset1;
                yPos1 += documentData1.yOffset;
                yPos1 += firstLine1 ? 1 : 0;
                firstLine1 = false;
            }
            shapes1 = shapeData1.shapes ? shapeData1.shapes[0].it : [];
            jLen1 = shapes1.length;
            matrixHelper1.scale(documentData1.finalSize / 100, documentData1.finalSize / 100);
            if (singleShape1) {
                this.applyTextPropertiesToMatrix(documentData1, matrixHelper1, letters1[i3].line, xPos1, yPos1);
            }
            commands1 = createSizedArray(jLen1 - 1);
            var commandsCounter1 = 0;
            for(j3 = 0; j3 < jLen1; j3 += 1){
                if (shapes1[j3].ty === "sh") {
                    kLen1 = shapes1[j3].ks.k.i.length;
                    pathNodes1 = shapes1[j3].ks.k;
                    pathArr1 = [];
                    for(k3 = 1; k3 < kLen1; k3 += 1){
                        if (k3 === 1) {
                            pathArr1.push(matrixHelper1.applyToX(pathNodes1.v[0][0], pathNodes1.v[0][1], 0), matrixHelper1.applyToY(pathNodes1.v[0][0], pathNodes1.v[0][1], 0));
                        }
                        pathArr1.push(matrixHelper1.applyToX(pathNodes1.o[k3 - 1][0], pathNodes1.o[k3 - 1][1], 0), matrixHelper1.applyToY(pathNodes1.o[k3 - 1][0], pathNodes1.o[k3 - 1][1], 0), matrixHelper1.applyToX(pathNodes1.i[k3][0], pathNodes1.i[k3][1], 0), matrixHelper1.applyToY(pathNodes1.i[k3][0], pathNodes1.i[k3][1], 0), matrixHelper1.applyToX(pathNodes1.v[k3][0], pathNodes1.v[k3][1], 0), matrixHelper1.applyToY(pathNodes1.v[k3][0], pathNodes1.v[k3][1], 0));
                    }
                    pathArr1.push(matrixHelper1.applyToX(pathNodes1.o[k3 - 1][0], pathNodes1.o[k3 - 1][1], 0), matrixHelper1.applyToY(pathNodes1.o[k3 - 1][0], pathNodes1.o[k3 - 1][1], 0), matrixHelper1.applyToX(pathNodes1.i[0][0], pathNodes1.i[0][1], 0), matrixHelper1.applyToY(pathNodes1.i[0][0], pathNodes1.i[0][1], 0), matrixHelper1.applyToX(pathNodes1.v[0][0], pathNodes1.v[0][1], 0), matrixHelper1.applyToY(pathNodes1.v[0][0], pathNodes1.v[0][1], 0));
                    commands1[commandsCounter1] = pathArr1;
                    commandsCounter1 += 1;
                }
            }
            if (singleShape1) {
                xPos1 += letters1[i3].l;
                xPos1 += trackingOffset1;
            }
            if (this.textSpans[cnt1]) {
                this.textSpans[cnt1].elem = commands1;
            } else {
                this.textSpans[cnt1] = {
                    elem: commands1
                };
            }
            cnt1 += 1;
        }
    };
    CVTextElement.prototype.renderInnerContent = function() {
        this.validateText();
        var ctx1 = this.canvasContext;
        ctx1.font = this.values.fValue;
        this.globalData.renderer.ctxLineCap("butt"); // ctx.lineCap = 'butt';
        this.globalData.renderer.ctxLineJoin("miter"); // ctx.lineJoin = 'miter';
        this.globalData.renderer.ctxMiterLimit(4); // ctx.miterLimit = 4;
        if (!this.data.singleShape) {
            this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        }
        var i3;
        var len1;
        var j3;
        var jLen1;
        var k3;
        var kLen1;
        var renderedLetters1 = this.textAnimator.renderedLetters;
        var letters1 = this.textProperty.currentData.l;
        len1 = letters1.length;
        var renderedLetter1;
        var lastFill1 = null;
        var lastStroke1 = null;
        var lastStrokeW1 = null;
        var commands1;
        var pathArr1;
        var renderer1 = this.globalData.renderer;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (!letters1[i3].n) {
                renderedLetter1 = renderedLetters1[i3];
                if (renderedLetter1) {
                    renderer1.save();
                    renderer1.ctxTransform(renderedLetter1.p);
                    renderer1.ctxOpacity(renderedLetter1.o);
                }
                if (this.fill) {
                    if (renderedLetter1 && renderedLetter1.fc) {
                        if (lastFill1 !== renderedLetter1.fc) {
                            renderer1.ctxFillStyle(renderedLetter1.fc);
                            lastFill1 = renderedLetter1.fc; // ctx.fillStyle = renderedLetter.fc;
                        }
                    } else if (lastFill1 !== this.values.fill) {
                        lastFill1 = this.values.fill;
                        renderer1.ctxFillStyle(this.values.fill); // ctx.fillStyle = this.values.fill;
                    }
                    commands1 = this.textSpans[i3].elem;
                    jLen1 = commands1.length;
                    this.globalData.canvasContext.beginPath();
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        pathArr1 = commands1[j3];
                        kLen1 = pathArr1.length;
                        this.globalData.canvasContext.moveTo(pathArr1[0], pathArr1[1]);
                        for(k3 = 2; k3 < kLen1; k3 += 6){
                            this.globalData.canvasContext.bezierCurveTo(pathArr1[k3], pathArr1[k3 + 1], pathArr1[k3 + 2], pathArr1[k3 + 3], pathArr1[k3 + 4], pathArr1[k3 + 5]);
                        }
                    }
                    this.globalData.canvasContext.closePath();
                    renderer1.ctxFill(); // this.globalData.canvasContext.fill();
                /// ctx.fillText(this.textSpans[i].val,0,0);
                }
                if (this.stroke) {
                    if (renderedLetter1 && renderedLetter1.sw) {
                        if (lastStrokeW1 !== renderedLetter1.sw) {
                            lastStrokeW1 = renderedLetter1.sw;
                            renderer1.ctxLineWidth(renderedLetter1.sw); // ctx.lineWidth = renderedLetter.sw;
                        }
                    } else if (lastStrokeW1 !== this.values.sWidth) {
                        lastStrokeW1 = this.values.sWidth;
                        renderer1.ctxLineWidth(this.values.sWidth); // ctx.lineWidth = this.values.sWidth;
                    }
                    if (renderedLetter1 && renderedLetter1.sc) {
                        if (lastStroke1 !== renderedLetter1.sc) {
                            lastStroke1 = renderedLetter1.sc;
                            renderer1.ctxStrokeStyle(renderedLetter1.sc); // ctx.strokeStyle = renderedLetter.sc;
                        }
                    } else if (lastStroke1 !== this.values.stroke) {
                        lastStroke1 = this.values.stroke;
                        renderer1.ctxStrokeStyle(this.values.stroke); // ctx.strokeStyle = this.values.stroke;
                    }
                    commands1 = this.textSpans[i3].elem;
                    jLen1 = commands1.length;
                    this.globalData.canvasContext.beginPath();
                    for(j3 = 0; j3 < jLen1; j3 += 1){
                        pathArr1 = commands1[j3];
                        kLen1 = pathArr1.length;
                        this.globalData.canvasContext.moveTo(pathArr1[0], pathArr1[1]);
                        for(k3 = 2; k3 < kLen1; k3 += 6){
                            this.globalData.canvasContext.bezierCurveTo(pathArr1[k3], pathArr1[k3 + 1], pathArr1[k3 + 2], pathArr1[k3 + 3], pathArr1[k3 + 4], pathArr1[k3 + 5]);
                        }
                    }
                    this.globalData.canvasContext.closePath();
                    renderer1.ctxStroke(); // this.globalData.canvasContext.stroke();
                /// ctx.strokeText(letters[i].val,0,0);
                }
                if (renderedLetter1) {
                    this.globalData.renderer.restore();
                }
            }
        }
    };
    function CVImageElement(data1, globalData1, comp1) {
        this.assetData = globalData1.getAssetData(data1.refId);
        this.img = globalData1.imageLoader.getAsset(this.assetData);
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], CVImageElement);
    CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
    CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
    CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var canvas1 = createTag("canvas");
            canvas1.width = this.assetData.w;
            canvas1.height = this.assetData.h;
            var ctx1 = canvas1.getContext("2d");
            var imgW1 = this.img.width;
            var imgH1 = this.img.height;
            var imgRel1 = imgW1 / imgH1;
            var canvasRel1 = this.assetData.w / this.assetData.h;
            var widthCrop1;
            var heightCrop1;
            var par1 = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            if (imgRel1 > canvasRel1 && par1 === "xMidYMid slice" || imgRel1 < canvasRel1 && par1 !== "xMidYMid slice") {
                heightCrop1 = imgH1;
                widthCrop1 = heightCrop1 * canvasRel1;
            } else {
                widthCrop1 = imgW1;
                heightCrop1 = widthCrop1 / canvasRel1;
            }
            ctx1.drawImage(this.img, (imgW1 - widthCrop1) / 2, (imgH1 - heightCrop1) / 2, widthCrop1, heightCrop1, 0, 0, this.assetData.w, this.assetData.h);
            this.img = canvas1;
        }
    };
    CVImageElement.prototype.renderInnerContent = function() {
        this.canvasContext.drawImage(this.img, 0, 0);
    };
    CVImageElement.prototype.destroy = function() {
        this.img = null;
    };
    function CVSolidElement(data1, globalData1, comp1) {
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        CVBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], CVSolidElement);
    CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
    CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;
    CVSolidElement.prototype.renderInnerContent = function() {
        // var ctx = this.canvasContext;
        this.globalData.renderer.ctxFillStyle(this.data.sc); // ctx.fillStyle = this.data.sc;
        this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh); // ctx.fillRect(0, 0, this.data.sw, this.data.sh);
    //
    };
    function CanvasRendererBase() {}
    extendPrototype([
        BaseRenderer
    ], CanvasRendererBase);
    CanvasRendererBase.prototype.createShape = function(data1) {
        return new CVShapeElement(data1, this.globalData, this);
    };
    CanvasRendererBase.prototype.createText = function(data1) {
        return new CVTextElement(data1, this.globalData, this);
    };
    CanvasRendererBase.prototype.createImage = function(data1) {
        return new CVImageElement(data1, this.globalData, this);
    };
    CanvasRendererBase.prototype.createSolid = function(data1) {
        return new CVSolidElement(data1, this.globalData, this);
    };
    CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
    CanvasRendererBase.prototype.ctxTransform = function(props1) {
        if (props1[0] === 1 && props1[1] === 0 && props1[4] === 0 && props1[5] === 1 && props1[12] === 0 && props1[13] === 0) {
            return;
        }
        this.canvasContext.transform(props1[0], props1[1], props1[4], props1[5], props1[12], props1[13]);
    };
    CanvasRendererBase.prototype.ctxOpacity = function(op1) {
        this.canvasContext.globalAlpha *= op1 < 0 ? 0 : op1;
    };
    CanvasRendererBase.prototype.ctxFillStyle = function(value3) {
        this.canvasContext.fillStyle = value3;
    };
    CanvasRendererBase.prototype.ctxStrokeStyle = function(value3) {
        this.canvasContext.strokeStyle = value3;
    };
    CanvasRendererBase.prototype.ctxLineWidth = function(value3) {
        this.canvasContext.lineWidth = value3;
    };
    CanvasRendererBase.prototype.ctxLineCap = function(value3) {
        this.canvasContext.lineCap = value3;
    };
    CanvasRendererBase.prototype.ctxLineJoin = function(value3) {
        this.canvasContext.lineJoin = value3;
    };
    CanvasRendererBase.prototype.ctxMiterLimit = function(value3) {
        this.canvasContext.miterLimit = value3;
    };
    CanvasRendererBase.prototype.ctxFill = function(rule1) {
        this.canvasContext.fill(rule1);
    };
    CanvasRendererBase.prototype.ctxFillRect = function(x4, y4, w1, h3) {
        this.canvasContext.fillRect(x4, y4, w1, h3);
    };
    CanvasRendererBase.prototype.ctxStroke = function() {
        this.canvasContext.stroke();
    };
    CanvasRendererBase.prototype.reset = function() {
        if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
        }
        this.contextData.reset();
    };
    CanvasRendererBase.prototype.save = function() {
        this.canvasContext.save();
    };
    CanvasRendererBase.prototype.restore = function(actionFlag1) {
        if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
        }
        if (actionFlag1) {
            this.globalData.blendMode = "source-over";
        }
        this.contextData.restore(actionFlag1);
    };
    CanvasRendererBase.prototype.configAnimation = function(animData1) {
        if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var containerStyle1 = this.animationItem.container.style;
            containerStyle1.width = "100%";
            containerStyle1.height = "100%";
            var origin1 = "0px 0px 0px";
            containerStyle1.transformOrigin = origin1;
            containerStyle1.mozTransformOrigin = origin1;
            containerStyle1.webkitTransformOrigin = origin1;
            containerStyle1["-webkit-transform"] = origin1;
            containerStyle1.contentVisibility = this.renderConfig.contentVisibility;
            this.animationItem.wrapper.appendChild(this.animationItem.container);
            this.canvasContext = this.animationItem.container.getContext("2d");
            if (this.renderConfig.className) {
                this.animationItem.container.setAttribute("class", this.renderConfig.className);
            }
            if (this.renderConfig.id) {
                this.animationItem.container.setAttribute("id", this.renderConfig.id);
            }
        } else {
            this.canvasContext = this.renderConfig.context;
        }
        this.contextData.setContext(this.canvasContext);
        this.data = animData1;
        this.layers = animData1.layers;
        this.transformCanvas = {
            w: animData1.w,
            h: animData1.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
        };
        this.setupGlobalData(animData1, document.body);
        this.globalData.canvasContext = this.canvasContext;
        this.globalData.renderer = this;
        this.globalData.isDashed = false;
        this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
        this.globalData.transformCanvas = this.transformCanvas;
        this.elements = createSizedArray(animData1.layers.length);
        this.updateContainerSize();
    };
    CanvasRendererBase.prototype.updateContainerSize = function(width1, height1) {
        this.reset();
        var elementWidth1;
        var elementHeight1;
        if (width1) {
            elementWidth1 = width1;
            elementHeight1 = height1;
            this.canvasContext.canvas.width = elementWidth1;
            this.canvasContext.canvas.height = elementHeight1;
        } else {
            if (this.animationItem.wrapper && this.animationItem.container) {
                elementWidth1 = this.animationItem.wrapper.offsetWidth;
                elementHeight1 = this.animationItem.wrapper.offsetHeight;
            } else {
                elementWidth1 = this.canvasContext.canvas.width;
                elementHeight1 = this.canvasContext.canvas.height;
            }
            this.canvasContext.canvas.width = elementWidth1 * this.renderConfig.dpr;
            this.canvasContext.canvas.height = elementHeight1 * this.renderConfig.dpr;
        }
        var elementRel1;
        var animationRel1;
        if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
            var par1 = this.renderConfig.preserveAspectRatio.split(" ");
            var fillType1 = par1[1] || "meet";
            var pos1 = par1[0] || "xMidYMid";
            var xPos1 = pos1.substr(0, 4);
            var yPos1 = pos1.substr(4);
            elementRel1 = elementWidth1 / elementHeight1;
            animationRel1 = this.transformCanvas.w / this.transformCanvas.h;
            if (animationRel1 > elementRel1 && fillType1 === "meet" || animationRel1 < elementRel1 && fillType1 === "slice") {
                this.transformCanvas.sx = elementWidth1 / (this.transformCanvas.w / this.renderConfig.dpr);
                this.transformCanvas.sy = elementWidth1 / (this.transformCanvas.w / this.renderConfig.dpr);
            } else {
                this.transformCanvas.sx = elementHeight1 / (this.transformCanvas.h / this.renderConfig.dpr);
                this.transformCanvas.sy = elementHeight1 / (this.transformCanvas.h / this.renderConfig.dpr);
            }
            if (xPos1 === "xMid" && (animationRel1 < elementRel1 && fillType1 === "meet" || animationRel1 > elementRel1 && fillType1 === "slice")) {
                this.transformCanvas.tx = (elementWidth1 - this.transformCanvas.w * (elementHeight1 / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
            } else if (xPos1 === "xMax" && (animationRel1 < elementRel1 && fillType1 === "meet" || animationRel1 > elementRel1 && fillType1 === "slice")) {
                this.transformCanvas.tx = (elementWidth1 - this.transformCanvas.w * (elementHeight1 / this.transformCanvas.h)) * this.renderConfig.dpr;
            } else {
                this.transformCanvas.tx = 0;
            }
            if (yPos1 === "YMid" && (animationRel1 > elementRel1 && fillType1 === "meet" || animationRel1 < elementRel1 && fillType1 === "slice")) {
                this.transformCanvas.ty = (elementHeight1 - this.transformCanvas.h * (elementWidth1 / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
            } else if (yPos1 === "YMax" && (animationRel1 > elementRel1 && fillType1 === "meet" || animationRel1 < elementRel1 && fillType1 === "slice")) {
                this.transformCanvas.ty = (elementHeight1 - this.transformCanvas.h * (elementWidth1 / this.transformCanvas.w)) * this.renderConfig.dpr;
            } else {
                this.transformCanvas.ty = 0;
            }
        } else if (this.renderConfig.preserveAspectRatio === "none") {
            this.transformCanvas.sx = elementWidth1 / (this.transformCanvas.w / this.renderConfig.dpr);
            this.transformCanvas.sy = elementHeight1 / (this.transformCanvas.h / this.renderConfig.dpr);
            this.transformCanvas.tx = 0;
            this.transformCanvas.ty = 0;
        } else {
            this.transformCanvas.sx = this.renderConfig.dpr;
            this.transformCanvas.sy = this.renderConfig.dpr;
            this.transformCanvas.tx = 0;
            this.transformCanvas.ty = 0;
        }
        this.transformCanvas.props = [
            this.transformCanvas.sx,
            0,
            0,
            0,
            0,
            this.transformCanvas.sy,
            0,
            0,
            0,
            0,
            1,
            0,
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            0,
            1
        ];
        /* var i, len = this.elements.length;
      for(i=0;i<len;i+=1){
          if(this.elements[i] && this.elements[i].data.ty === 0){
              this.elements[i].resize(this.globalData.transformCanvas);
          }
      } */ this.ctxTransform(this.transformCanvas.props);
        this.canvasContext.beginPath();
        this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
        this.canvasContext.closePath();
        this.canvasContext.clip();
        this.renderFrame(this.renderedFrame, true);
    };
    CanvasRendererBase.prototype.destroy = function() {
        if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
        }
        var i3;
        var len1 = this.layers ? this.layers.length : 0;
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (this.elements[i3] && this.elements[i3].destroy) {
                this.elements[i3].destroy();
            }
        }
        this.elements.length = 0;
        this.globalData.canvasContext = null;
        this.animationItem.container = null;
        this.destroyed = true;
    };
    CanvasRendererBase.prototype.renderFrame = function(num1, forceRender1) {
        if (this.renderedFrame === num1 && this.renderConfig.clearCanvas === true && !forceRender1 || this.destroyed || num1 === -1) {
            return;
        }
        this.renderedFrame = num1;
        this.globalData.frameNum = num1 - this.animationItem._isFirstFrame;
        this.globalData.frameId += 1;
        this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender1;
        this.globalData.projectInterface.currentFrame = num1; // console.log('--------');
        // console.log('NEW: ',num);
        var i3;
        var len1 = this.layers.length;
        if (!this.completeLayers) {
            this.checkLayers(num1);
        }
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (this.completeLayers || this.elements[i3]) {
                this.elements[i3].prepareFrame(num1 - this.layers[i3].st);
            }
        }
        if (this.globalData._mdf) {
            if (this.renderConfig.clearCanvas === true) {
                this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
            } else {
                this.save();
            }
            for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
                if (this.completeLayers || this.elements[i3]) {
                    this.elements[i3].renderFrame();
                }
            }
            if (this.renderConfig.clearCanvas !== true) {
                this.restore();
            }
        }
    };
    CanvasRendererBase.prototype.buildItem = function(pos1) {
        var elements1 = this.elements;
        if (elements1[pos1] || this.layers[pos1].ty === 99) {
            return;
        }
        var element1 = this.createItem(this.layers[pos1], this, this.globalData);
        elements1[pos1] = element1;
        element1.initExpressions();
    /* if(this.layers[pos].ty === 0){
          element.resize(this.globalData.transformCanvas);
      } */ };
    CanvasRendererBase.prototype.checkPendingElements = function() {
        while(this.pendingElements.length){
            var element1 = this.pendingElements.pop();
            element1.checkParenting();
        }
    };
    CanvasRendererBase.prototype.hide = function() {
        this.animationItem.container.style.display = "none";
    };
    CanvasRendererBase.prototype.show = function() {
        this.animationItem.container.style.display = "block";
    };
    function CanvasContext() {
        this.opacity = -1;
        this.transform = createTypedArray("float32", 16);
        this.fillStyle = "";
        this.strokeStyle = "";
        this.lineWidth = "";
        this.lineCap = "";
        this.lineJoin = "";
        this.miterLimit = "";
        this.id = Math.random();
    }
    function CVContextData() {
        this.stack = [];
        this.cArrPos = 0;
        this.cTr = new Matrix();
        var i3;
        var len1 = 15;
        for(i3 = 0; i3 < len1; i3 += 1){
            var canvasContext1 = new CanvasContext();
            this.stack[i3] = canvasContext1;
        }
        this._length = len1;
        this.nativeContext = null;
        this.transformMat = new Matrix();
        this.currentOpacity = 1; //
        this.currentFillStyle = "";
        this.appliedFillStyle = ""; //
        this.currentStrokeStyle = "";
        this.appliedStrokeStyle = ""; //
        this.currentLineWidth = "";
        this.appliedLineWidth = ""; //
        this.currentLineCap = "";
        this.appliedLineCap = ""; //
        this.currentLineJoin = "";
        this.appliedLineJoin = ""; //
        this.appliedMiterLimit = "";
        this.currentMiterLimit = "";
    }
    CVContextData.prototype.duplicate = function() {
        var newLength1 = this._length * 2;
        var i3 = 0;
        for(i3 = this._length; i3 < newLength1; i3 += 1){
            this.stack[i3] = new CanvasContext();
        }
        this._length = newLength1;
    };
    CVContextData.prototype.reset = function() {
        this.cArrPos = 0;
        this.cTr.reset();
        this.stack[this.cArrPos].opacity = 1;
    };
    CVContextData.prototype.restore = function(forceRestore1) {
        this.cArrPos -= 1;
        var currentContext1 = this.stack[this.cArrPos];
        var transform1 = currentContext1.transform;
        var i3;
        var arr3 = this.cTr.props;
        for(i3 = 0; i3 < 16; i3 += 1){
            arr3[i3] = transform1[i3];
        }
        if (forceRestore1) {
            this.nativeContext.restore();
            var prevStack1 = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = prevStack1.fillStyle;
            this.appliedStrokeStyle = prevStack1.strokeStyle;
            this.appliedLineWidth = prevStack1.lineWidth;
            this.appliedLineCap = prevStack1.lineCap;
            this.appliedLineJoin = prevStack1.lineJoin;
            this.appliedMiterLimit = prevStack1.miterLimit;
        }
        this.nativeContext.setTransform(transform1[0], transform1[1], transform1[4], transform1[5], transform1[12], transform1[13]);
        if (forceRestore1 || currentContext1.opacity !== -1 && this.currentOpacity !== currentContext1.opacity) {
            this.nativeContext.globalAlpha = currentContext1.opacity;
            this.currentOpacity = currentContext1.opacity;
        }
        this.currentFillStyle = currentContext1.fillStyle;
        this.currentStrokeStyle = currentContext1.strokeStyle;
        this.currentLineWidth = currentContext1.lineWidth;
        this.currentLineCap = currentContext1.lineCap;
        this.currentLineJoin = currentContext1.lineJoin;
        this.currentMiterLimit = currentContext1.miterLimit;
    };
    CVContextData.prototype.save = function(saveOnNativeFlag1) {
        if (saveOnNativeFlag1) {
            this.nativeContext.save();
        }
        var props1 = this.cTr.props;
        if (this._length <= this.cArrPos) {
            this.duplicate();
        }
        var currentStack1 = this.stack[this.cArrPos];
        var i3;
        for(i3 = 0; i3 < 16; i3 += 1){
            currentStack1.transform[i3] = props1[i3];
        }
        this.cArrPos += 1;
        var newStack1 = this.stack[this.cArrPos];
        newStack1.opacity = currentStack1.opacity;
        newStack1.fillStyle = currentStack1.fillStyle;
        newStack1.strokeStyle = currentStack1.strokeStyle;
        newStack1.lineWidth = currentStack1.lineWidth;
        newStack1.lineCap = currentStack1.lineCap;
        newStack1.lineJoin = currentStack1.lineJoin;
        newStack1.miterLimit = currentStack1.miterLimit;
    };
    CVContextData.prototype.setOpacity = function(value3) {
        this.stack[this.cArrPos].opacity = value3;
    };
    CVContextData.prototype.setContext = function(value3) {
        this.nativeContext = value3;
    };
    CVContextData.prototype.fillStyle = function(value3) {
        if (this.stack[this.cArrPos].fillStyle !== value3) {
            this.currentFillStyle = value3;
            this.stack[this.cArrPos].fillStyle = value3;
        }
    };
    CVContextData.prototype.strokeStyle = function(value3) {
        if (this.stack[this.cArrPos].strokeStyle !== value3) {
            this.currentStrokeStyle = value3;
            this.stack[this.cArrPos].strokeStyle = value3;
        }
    };
    CVContextData.prototype.lineWidth = function(value3) {
        if (this.stack[this.cArrPos].lineWidth !== value3) {
            this.currentLineWidth = value3;
            this.stack[this.cArrPos].lineWidth = value3;
        }
    };
    CVContextData.prototype.lineCap = function(value3) {
        if (this.stack[this.cArrPos].lineCap !== value3) {
            this.currentLineCap = value3;
            this.stack[this.cArrPos].lineCap = value3;
        }
    };
    CVContextData.prototype.lineJoin = function(value3) {
        if (this.stack[this.cArrPos].lineJoin !== value3) {
            this.currentLineJoin = value3;
            this.stack[this.cArrPos].lineJoin = value3;
        }
    };
    CVContextData.prototype.miterLimit = function(value3) {
        if (this.stack[this.cArrPos].miterLimit !== value3) {
            this.currentMiterLimit = value3;
            this.stack[this.cArrPos].miterLimit = value3;
        }
    };
    CVContextData.prototype.transform = function(props1) {
        this.transformMat.cloneFromProps(props1); // Taking the last transform value from the stored stack of transforms
        var currentTransform1 = this.cTr; // Applying the last transform value after the new transform to respect the order of transformations
        this.transformMat.multiply(currentTransform1); // Storing the new transformed value in the stored transform
        currentTransform1.cloneFromProps(this.transformMat.props);
        var trProps1 = currentTransform1.props; // Applying the new transform to the canvas
        this.nativeContext.setTransform(trProps1[0], trProps1[1], trProps1[4], trProps1[5], trProps1[12], trProps1[13]);
    };
    CVContextData.prototype.opacity = function(op1) {
        var currentOpacity1 = this.stack[this.cArrPos].opacity;
        currentOpacity1 *= op1 < 0 ? 0 : op1;
        if (this.stack[this.cArrPos].opacity !== currentOpacity1) {
            if (this.currentOpacity !== op1) {
                this.nativeContext.globalAlpha = op1;
                this.currentOpacity = op1;
            }
            this.stack[this.cArrPos].opacity = currentOpacity1;
        }
    };
    CVContextData.prototype.fill = function(rule1) {
        if (this.appliedFillStyle !== this.currentFillStyle) {
            this.appliedFillStyle = this.currentFillStyle;
            this.nativeContext.fillStyle = this.appliedFillStyle;
        }
        this.nativeContext.fill(rule1);
    };
    CVContextData.prototype.fillRect = function(x4, y4, w1, h3) {
        if (this.appliedFillStyle !== this.currentFillStyle) {
            this.appliedFillStyle = this.currentFillStyle;
            this.nativeContext.fillStyle = this.appliedFillStyle;
        }
        this.nativeContext.fillRect(x4, y4, w1, h3);
    };
    CVContextData.prototype.stroke = function() {
        if (this.appliedStrokeStyle !== this.currentStrokeStyle) {
            this.appliedStrokeStyle = this.currentStrokeStyle;
            this.nativeContext.strokeStyle = this.appliedStrokeStyle;
        }
        if (this.appliedLineWidth !== this.currentLineWidth) {
            this.appliedLineWidth = this.currentLineWidth;
            this.nativeContext.lineWidth = this.appliedLineWidth;
        }
        if (this.appliedLineCap !== this.currentLineCap) {
            this.appliedLineCap = this.currentLineCap;
            this.nativeContext.lineCap = this.appliedLineCap;
        }
        if (this.appliedLineJoin !== this.currentLineJoin) {
            this.appliedLineJoin = this.currentLineJoin;
            this.nativeContext.lineJoin = this.appliedLineJoin;
        }
        if (this.appliedMiterLimit !== this.currentMiterLimit) {
            this.appliedMiterLimit = this.currentMiterLimit;
            this.nativeContext.miterLimit = this.appliedMiterLimit;
        }
        this.nativeContext.stroke();
    };
    function CVCompElement(data1, globalData1, comp1) {
        this.completeLayers = false;
        this.layers = data1.layers;
        this.pendingElements = [];
        this.elements = createSizedArray(this.layers.length);
        this.initElement(data1, globalData1, comp1);
        this.tm = data1.tm ? PropertyFactory.getProp(this, data1.tm, 0, globalData1.frameRate, this) : {
            _placeholder: true
        };
    }
    extendPrototype([
        CanvasRendererBase,
        ICompElement,
        CVBaseElement
    ], CVCompElement);
    CVCompElement.prototype.renderInnerContent = function() {
        var ctx1 = this.canvasContext;
        ctx1.beginPath();
        ctx1.moveTo(0, 0);
        ctx1.lineTo(this.data.w, 0);
        ctx1.lineTo(this.data.w, this.data.h);
        ctx1.lineTo(0, this.data.h);
        ctx1.lineTo(0, 0);
        ctx1.clip();
        var i3;
        var len1 = this.layers.length;
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (this.completeLayers || this.elements[i3]) {
                this.elements[i3].renderFrame();
            }
        }
    };
    CVCompElement.prototype.destroy = function() {
        var i3;
        var len1 = this.layers.length;
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            if (this.elements[i3]) {
                this.elements[i3].destroy();
            }
        }
        this.layers = null;
        this.elements = null;
    };
    CVCompElement.prototype.createComp = function(data1) {
        return new CVCompElement(data1, this.globalData, this);
    };
    function CanvasRenderer(animationItem1, config1) {
        this.animationItem = animationItem1;
        this.renderConfig = {
            clearCanvas: config1 && config1.clearCanvas !== undefined ? config1.clearCanvas : true,
            context: config1 && config1.context || null,
            progressiveLoad: config1 && config1.progressiveLoad || false,
            preserveAspectRatio: config1 && config1.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: config1 && config1.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: config1 && config1.contentVisibility || "visible",
            className: config1 && config1.className || "",
            id: config1 && config1.id || "",
            runExpressions: !config1 || config1.runExpressions === undefined || config1.runExpressions
        };
        this.renderConfig.dpr = config1 && config1.dpr || 1;
        if (this.animationItem.wrapper) {
            this.renderConfig.dpr = config1 && config1.dpr || window.devicePixelRatio || 1;
        }
        this.renderedFrame = -1;
        this.globalData = {
            frameNum: -1,
            _mdf: false,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
        };
        this.contextData = new CVContextData();
        this.elements = [];
        this.pendingElements = [];
        this.transformMat = new Matrix();
        this.completeLayers = false;
        this.rendererType = "canvas";
        if (this.renderConfig.clearCanvas) {
            this.ctxTransform = this.contextData.transform.bind(this.contextData);
            this.ctxOpacity = this.contextData.opacity.bind(this.contextData);
            this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData);
            this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData);
            this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData);
            this.ctxLineCap = this.contextData.lineCap.bind(this.contextData);
            this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData);
            this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData);
            this.ctxFill = this.contextData.fill.bind(this.contextData);
            this.ctxFillRect = this.contextData.fillRect.bind(this.contextData);
            this.ctxStroke = this.contextData.stroke.bind(this.contextData);
            this.save = this.contextData.save.bind(this.contextData);
        }
    }
    extendPrototype([
        CanvasRendererBase
    ], CanvasRenderer);
    CanvasRenderer.prototype.createComp = function(data1) {
        return new CVCompElement(data1, this.globalData, this);
    };
    function HBaseElement() {}
    HBaseElement.prototype = {
        checkBlendMode: function checkBlendMode1() {},
        initRendererElement: function initRendererElement1() {
            this.baseElement = createTag(this.data.tg || "div");
            if (this.data.hasMask) {
                this.svgElement = createNS("svg");
                this.layerElement = createNS("g");
                this.maskedElement = this.layerElement;
                this.svgElement.appendChild(this.layerElement);
                this.baseElement.appendChild(this.svgElement);
            } else {
                this.layerElement = this.baseElement;
            }
            styleDiv(this.baseElement);
        },
        createContainerElements: function createContainerElements1() {
            this.renderableEffectsManager = new CVEffects(this);
            this.transformedElement = this.baseElement;
            this.maskedElement = this.layerElement;
            if (this.data.ln) {
                this.layerElement.setAttribute("id", this.data.ln);
            }
            if (this.data.cl) {
                this.layerElement.setAttribute("class", this.data.cl);
            }
            if (this.data.bm !== 0) {
                this.setBlendMode();
            }
        },
        renderElement: function renderElement1() {
            var transformedElementStyle1 = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
                var matrixValue1 = this.finalTransform.mat.toCSS();
                transformedElementStyle1.transform = matrixValue1;
                transformedElementStyle1.webkitTransform = matrixValue1;
            }
            if (this.finalTransform._opMdf) {
                transformedElementStyle1.opacity = this.finalTransform.mProp.o.v;
            }
        },
        renderFrame: function renderFrame1() {
            // If it is exported as hidden (data.hd === true) no need to render
            // If it is not visible no need to render
            if (this.data.hd || this.hidden) {
                return;
            }
            this.renderTransform();
            this.renderRenderable();
            this.renderElement();
            this.renderInnerContent();
            if (this._isFirstFrame) {
                this._isFirstFrame = false;
            }
        },
        destroy: function destroy1() {
            this.layerElement = null;
            this.transformedElement = null;
            if (this.matteElement) {
                this.matteElement = null;
            }
            if (this.maskManager) {
                this.maskManager.destroy();
                this.maskManager = null;
            }
        },
        createRenderableComponents: function createRenderableComponents1() {
            this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function addEffects1() {},
        setMatte: function setMatte1() {}
    };
    HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
    HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
    HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
    function HSolidElement(data1, globalData1, comp1) {
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement
    ], HSolidElement);
    HSolidElement.prototype.createContent = function() {
        var rect1;
        if (this.data.hasMask) {
            rect1 = createNS("rect");
            rect1.setAttribute("width", this.data.sw);
            rect1.setAttribute("height", this.data.sh);
            rect1.setAttribute("fill", this.data.sc);
            this.svgElement.setAttribute("width", this.data.sw);
            this.svgElement.setAttribute("height", this.data.sh);
        } else {
            rect1 = createTag("div");
            rect1.style.width = this.data.sw + "px";
            rect1.style.height = this.data.sh + "px";
            rect1.style.backgroundColor = this.data.sc;
        }
        this.layerElement.appendChild(rect1);
    };
    function HShapeElement(data1, globalData1, comp1) {
        // List of drawable elements
        this.shapes = []; // Full shape data
        this.shapesData = data1.shapes; // List of styles that will be applied to shapes
        this.stylesList = []; // List of modifiers that will be applied to shapes
        this.shapeModifiers = []; // List of items in shape tree
        this.itemsData = []; // List of items in previous shape tree
        this.processedElements = []; // List of animated components
        this.animatedContents = [];
        this.shapesContainer = createNS("g");
        this.initElement(data1, globalData1, comp1); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
        // List of elements that have been created
        this.prevViewData = [];
        this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        };
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        HSolidElement,
        SVGShapeElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], HShapeElement);
    HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;
    HShapeElement.prototype.createContent = function() {
        var cont1;
        this.baseElement.style.fontSize = 0;
        if (this.data.hasMask) {
            this.layerElement.appendChild(this.shapesContainer);
            cont1 = this.svgElement;
        } else {
            cont1 = createNS("svg");
            var size1 = this.comp.data ? this.comp.data : this.globalData.compSize;
            cont1.setAttribute("width", size1.w);
            cont1.setAttribute("height", size1.h);
            cont1.appendChild(this.shapesContainer);
            this.layerElement.appendChild(cont1);
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
        this.filterUniqueShapes();
        this.shapeCont = cont1;
    };
    HShapeElement.prototype.getTransformedPoint = function(transformers1, point1) {
        var i3;
        var len1 = transformers1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            point1 = transformers1[i3].mProps.v.applyToPointArray(point1[0], point1[1], 0);
        }
        return point1;
    };
    HShapeElement.prototype.calculateShapeBoundingBox = function(item1, boundingBox1) {
        var shape3 = item1.sh.v;
        var transformers1 = item1.transformers;
        var i3;
        var len1 = shape3._length;
        var vPoint1;
        var oPoint1;
        var nextIPoint1;
        var nextVPoint1;
        if (len1 <= 1) {
            return;
        }
        for(i3 = 0; i3 < len1 - 1; i3 += 1){
            vPoint1 = this.getTransformedPoint(transformers1, shape3.v[i3]);
            oPoint1 = this.getTransformedPoint(transformers1, shape3.o[i3]);
            nextIPoint1 = this.getTransformedPoint(transformers1, shape3.i[i3 + 1]);
            nextVPoint1 = this.getTransformedPoint(transformers1, shape3.v[i3 + 1]);
            this.checkBounds(vPoint1, oPoint1, nextIPoint1, nextVPoint1, boundingBox1);
        }
        if (shape3.c) {
            vPoint1 = this.getTransformedPoint(transformers1, shape3.v[i3]);
            oPoint1 = this.getTransformedPoint(transformers1, shape3.o[i3]);
            nextIPoint1 = this.getTransformedPoint(transformers1, shape3.i[0]);
            nextVPoint1 = this.getTransformedPoint(transformers1, shape3.v[0]);
            this.checkBounds(vPoint1, oPoint1, nextIPoint1, nextVPoint1, boundingBox1);
        }
    };
    HShapeElement.prototype.checkBounds = function(vPoint1, oPoint1, nextIPoint1, nextVPoint1, boundingBox1) {
        this.getBoundsOfCurve(vPoint1, oPoint1, nextIPoint1, nextVPoint1);
        var bounds1 = this.shapeBoundingBox;
        boundingBox1.x = bmMin(bounds1.left, boundingBox1.x);
        boundingBox1.xMax = bmMax(bounds1.right, boundingBox1.xMax);
        boundingBox1.y = bmMin(bounds1.top, boundingBox1.y);
        boundingBox1.yMax = bmMax(bounds1.bottom, boundingBox1.yMax);
    };
    HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    };
    HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
    };
    HShapeElement.prototype.getBoundsOfCurve = function(p01, p14, p22, p31) {
        var bounds1 = [
            [
                p01[0],
                p31[0]
            ],
            [
                p01[1],
                p31[1]
            ]
        ];
        for(var a3, b3, c4, t3, b2ac1, t11, t21, i3 = 0; i3 < 2; ++i3){
            // eslint-disable-line no-plusplus
            b3 = 6 * p01[i3] - 12 * p14[i3] + 6 * p22[i3];
            a3 = -3 * p01[i3] + 9 * p14[i3] - 9 * p22[i3] + 3 * p31[i3];
            c4 = 3 * p14[i3] - 3 * p01[i3];
            b3 |= 0; // eslint-disable-line no-bitwise
            a3 |= 0; // eslint-disable-line no-bitwise
            c4 |= 0; // eslint-disable-line no-bitwise
            if (a3 === 0 && b3 === 0) {} else if (a3 === 0) {
                t3 = -c4 / b3;
                if (t3 > 0 && t3 < 1) {
                    bounds1[i3].push(this.calculateF(t3, p01, p14, p22, p31, i3));
                }
            } else {
                b2ac1 = b3 * b3 - 4 * c4 * a3;
                if (b2ac1 >= 0) {
                    t11 = (-b3 + bmSqrt(b2ac1)) / (2 * a3);
                    if (t11 > 0 && t11 < 1) bounds1[i3].push(this.calculateF(t11, p01, p14, p22, p31, i3));
                    t21 = (-b3 - bmSqrt(b2ac1)) / (2 * a3);
                    if (t21 > 0 && t21 < 1) bounds1[i3].push(this.calculateF(t21, p01, p14, p22, p31, i3));
                }
            }
        }
        this.shapeBoundingBox.left = bmMin.apply(null, bounds1[0]);
        this.shapeBoundingBox.top = bmMin.apply(null, bounds1[1]);
        this.shapeBoundingBox.right = bmMax.apply(null, bounds1[0]);
        this.shapeBoundingBox.bottom = bmMax.apply(null, bounds1[1]);
    };
    HShapeElement.prototype.calculateF = function(t3, p01, p14, p22, p31, i3) {
        return bmPow(1 - t3, 3) * p01[i3] + 3 * bmPow(1 - t3, 2) * t3 * p14[i3] + 3 * (1 - t3) * bmPow(t3, 2) * p22[i3] + bmPow(t3, 3) * p31[i3];
    };
    HShapeElement.prototype.calculateBoundingBox = function(itemsData1, boundingBox1) {
        var i3;
        var len1 = itemsData1.length;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (itemsData1[i3] && itemsData1[i3].sh) {
                this.calculateShapeBoundingBox(itemsData1[i3], boundingBox1);
            } else if (itemsData1[i3] && itemsData1[i3].it) {
                this.calculateBoundingBox(itemsData1[i3].it, boundingBox1);
            } else if (itemsData1[i3] && itemsData1[i3].style && itemsData1[i3].w) {
                this.expandStrokeBoundingBox(itemsData1[i3].w, boundingBox1);
            }
        }
    };
    HShapeElement.prototype.expandStrokeBoundingBox = function(widthProperty1, boundingBox1) {
        var width1 = 0;
        if (widthProperty1.keyframes) {
            for(var i3 = 0; i3 < widthProperty1.keyframes.length; i3 += 1){
                var kfw1 = widthProperty1.keyframes[i3].s;
                if (kfw1 > width1) {
                    width1 = kfw1;
                }
            }
            width1 *= widthProperty1.mult;
        } else {
            width1 = widthProperty1.v * widthProperty1.mult;
        }
        boundingBox1.x -= width1;
        boundingBox1.xMax += width1;
        boundingBox1.y -= width1;
        boundingBox1.yMax += width1;
    };
    HShapeElement.prototype.currentBoxContains = function(box1) {
        return this.currentBBox.x <= box1.x && this.currentBBox.y <= box1.y && this.currentBBox.width + this.currentBBox.x >= box1.x + box1.width && this.currentBBox.height + this.currentBBox.y >= box1.y + box1.height;
    };
    HShapeElement.prototype.renderInnerContent = function() {
        this._renderShapeFrame();
        if (!this.hidden && (this._isFirstFrame || this._mdf)) {
            var tempBoundingBox1 = this.tempBoundingBox;
            var max1 = 999999;
            tempBoundingBox1.x = max1;
            tempBoundingBox1.xMax = -max1;
            tempBoundingBox1.y = max1;
            tempBoundingBox1.yMax = -max1;
            this.calculateBoundingBox(this.itemsData, tempBoundingBox1);
            tempBoundingBox1.width = tempBoundingBox1.xMax < tempBoundingBox1.x ? 0 : tempBoundingBox1.xMax - tempBoundingBox1.x;
            tempBoundingBox1.height = tempBoundingBox1.yMax < tempBoundingBox1.y ? 0 : tempBoundingBox1.yMax - tempBoundingBox1.y; // var tempBoundingBox = this.shapeCont.getBBox();
            if (this.currentBoxContains(tempBoundingBox1)) {
                return;
            }
            var changed1 = false;
            if (this.currentBBox.w !== tempBoundingBox1.width) {
                this.currentBBox.w = tempBoundingBox1.width;
                this.shapeCont.setAttribute("width", tempBoundingBox1.width);
                changed1 = true;
            }
            if (this.currentBBox.h !== tempBoundingBox1.height) {
                this.currentBBox.h = tempBoundingBox1.height;
                this.shapeCont.setAttribute("height", tempBoundingBox1.height);
                changed1 = true;
            }
            if (changed1 || this.currentBBox.x !== tempBoundingBox1.x || this.currentBBox.y !== tempBoundingBox1.y) {
                this.currentBBox.w = tempBoundingBox1.width;
                this.currentBBox.h = tempBoundingBox1.height;
                this.currentBBox.x = tempBoundingBox1.x;
                this.currentBBox.y = tempBoundingBox1.y;
                this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                var shapeStyle1 = this.shapeCont.style;
                var shapeTransform1 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                shapeStyle1.transform = shapeTransform1;
                shapeStyle1.webkitTransform = shapeTransform1;
            }
        }
    };
    function HTextElement(data1, globalData1, comp1) {
        this.textSpans = [];
        this.textPaths = [];
        this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        };
        this.renderType = "svg";
        this.isMasked = false;
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        HBaseElement,
        HierarchyElement,
        FrameElement,
        RenderableDOMElement,
        ITextElement
    ], HTextElement);
    HTextElement.prototype.createContent = function() {
        this.isMasked = this.checkMasks();
        if (this.isMasked) {
            this.renderType = "svg";
            this.compW = this.comp.data.w;
            this.compH = this.comp.data.h;
            this.svgElement.setAttribute("width", this.compW);
            this.svgElement.setAttribute("height", this.compH);
            var g3 = createNS("g");
            this.maskedElement.appendChild(g3);
            this.innerElem = g3;
        } else {
            this.renderType = "html";
            this.innerElem = this.layerElement;
        }
        this.checkParenting();
    };
    HTextElement.prototype.buildNewText = function() {
        var documentData1 = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(documentData1.l ? documentData1.l.length : 0);
        var innerElemStyle1 = this.innerElem.style;
        var textColor1 = documentData1.fc ? this.buildColor(documentData1.fc) : "rgba(0,0,0,0)";
        innerElemStyle1.fill = textColor1;
        innerElemStyle1.color = textColor1;
        if (documentData1.sc) {
            innerElemStyle1.stroke = this.buildColor(documentData1.sc);
            innerElemStyle1.strokeWidth = documentData1.sw + "px";
        }
        var fontData1 = this.globalData.fontManager.getFontByName(documentData1.f);
        if (!this.globalData.fontManager.chars) {
            innerElemStyle1.fontSize = documentData1.finalSize + "px";
            innerElemStyle1.lineHeight = documentData1.finalSize + "px";
            if (fontData1.fClass) {
                this.innerElem.className = fontData1.fClass;
            } else {
                innerElemStyle1.fontFamily = fontData1.fFamily;
                var fWeight1 = documentData1.fWeight;
                var fStyle1 = documentData1.fStyle;
                innerElemStyle1.fontStyle = fStyle1;
                innerElemStyle1.fontWeight = fWeight1;
            }
        }
        var i3;
        var len1;
        var letters1 = documentData1.l;
        len1 = letters1.length;
        var tSpan1;
        var tParent1;
        var tCont1;
        var matrixHelper1 = this.mHelper;
        var shapes1;
        var shapeStr1 = "";
        var cnt1 = 0;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.globalData.fontManager.chars) {
                if (!this.textPaths[cnt1]) {
                    tSpan1 = createNS("path");
                    tSpan1.setAttribute("stroke-linecap", lineCapEnum[1]);
                    tSpan1.setAttribute("stroke-linejoin", lineJoinEnum[2]);
                    tSpan1.setAttribute("stroke-miterlimit", "4");
                } else {
                    tSpan1 = this.textPaths[cnt1];
                }
                if (!this.isMasked) {
                    if (this.textSpans[cnt1]) {
                        tParent1 = this.textSpans[cnt1];
                        tCont1 = tParent1.children[0];
                    } else {
                        tParent1 = createTag("div");
                        tParent1.style.lineHeight = 0;
                        tCont1 = createNS("svg");
                        tCont1.appendChild(tSpan1);
                        styleDiv(tParent1);
                    }
                }
            } else if (!this.isMasked) {
                if (this.textSpans[cnt1]) {
                    tParent1 = this.textSpans[cnt1];
                    tSpan1 = this.textPaths[cnt1];
                } else {
                    tParent1 = createTag("span");
                    styleDiv(tParent1);
                    tSpan1 = createTag("span");
                    styleDiv(tSpan1);
                    tParent1.appendChild(tSpan1);
                }
            } else {
                tSpan1 = this.textPaths[cnt1] ? this.textPaths[cnt1] : createNS("text");
            } // tSpan.setAttribute('visibility', 'hidden');
            if (this.globalData.fontManager.chars) {
                var charData1 = this.globalData.fontManager.getCharData(documentData1.finalText[i3], fontData1.fStyle, this.globalData.fontManager.getFontByName(documentData1.f).fFamily);
                var shapeData1;
                if (charData1) {
                    shapeData1 = charData1.data;
                } else {
                    shapeData1 = null;
                }
                matrixHelper1.reset();
                if (shapeData1 && shapeData1.shapes && shapeData1.shapes.length) {
                    shapes1 = shapeData1.shapes[0].it;
                    matrixHelper1.scale(documentData1.finalSize / 100, documentData1.finalSize / 100);
                    shapeStr1 = this.createPathShape(matrixHelper1, shapes1);
                    tSpan1.setAttribute("d", shapeStr1);
                }
                if (!this.isMasked) {
                    this.innerElem.appendChild(tParent1);
                    if (shapeData1 && shapeData1.shapes) {
                        // document.body.appendChild is needed to get exact measure of shape
                        document.body.appendChild(tCont1);
                        var boundingBox1 = tCont1.getBBox();
                        tCont1.setAttribute("width", boundingBox1.width + 2);
                        tCont1.setAttribute("height", boundingBox1.height + 2);
                        tCont1.setAttribute("viewBox", boundingBox1.x - 1 + " " + (boundingBox1.y - 1) + " " + (boundingBox1.width + 2) + " " + (boundingBox1.height + 2));
                        var tContStyle1 = tCont1.style;
                        var tContTranslation1 = "translate(" + (boundingBox1.x - 1) + "px," + (boundingBox1.y - 1) + "px)";
                        tContStyle1.transform = tContTranslation1;
                        tContStyle1.webkitTransform = tContTranslation1;
                        letters1[i3].yOffset = boundingBox1.y - 1;
                    } else {
                        tCont1.setAttribute("width", 1);
                        tCont1.setAttribute("height", 1);
                    }
                    tParent1.appendChild(tCont1);
                } else {
                    this.innerElem.appendChild(tSpan1);
                }
            } else {
                tSpan1.textContent = letters1[i3].val;
                tSpan1.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                if (!this.isMasked) {
                    this.innerElem.appendChild(tParent1); //
                    var tStyle1 = tSpan1.style;
                    var tSpanTranslation1 = "translate3d(0," + -documentData1.finalSize / 1.2 + "px,0)";
                    tStyle1.transform = tSpanTranslation1;
                    tStyle1.webkitTransform = tSpanTranslation1;
                } else {
                    this.innerElem.appendChild(tSpan1);
                }
            } //
            if (!this.isMasked) {
                this.textSpans[cnt1] = tParent1;
            } else {
                this.textSpans[cnt1] = tSpan1;
            }
            this.textSpans[cnt1].style.display = "block";
            this.textPaths[cnt1] = tSpan1;
            cnt1 += 1;
        }
        while(cnt1 < this.textSpans.length){
            this.textSpans[cnt1].style.display = "none";
            cnt1 += 1;
        }
    };
    HTextElement.prototype.renderInnerContent = function() {
        this.validateText();
        var svgStyle1;
        if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) {
                return;
            }
            if (this.isMasked && this.finalTransform._matMdf) {
                // Todo Benchmark if using this is better than getBBox
                this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH);
                svgStyle1 = this.svgElement.style;
                var translation1 = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                svgStyle1.transform = translation1;
                svgStyle1.webkitTransform = translation1;
            }
        }
        this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
            return;
        }
        var i3;
        var len1;
        var count1 = 0;
        var renderedLetters1 = this.textAnimator.renderedLetters;
        var letters1 = this.textProperty.currentData.l;
        len1 = letters1.length;
        var renderedLetter1;
        var textSpan1;
        var textPath1;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (letters1[i3].n) {
                count1 += 1;
            } else {
                textSpan1 = this.textSpans[i3];
                textPath1 = this.textPaths[i3];
                renderedLetter1 = renderedLetters1[count1];
                count1 += 1;
                if (renderedLetter1._mdf.m) {
                    if (!this.isMasked) {
                        textSpan1.style.webkitTransform = renderedLetter1.m;
                        textSpan1.style.transform = renderedLetter1.m;
                    } else {
                        textSpan1.setAttribute("transform", renderedLetter1.m);
                    }
                } /// /textSpan.setAttribute('opacity',renderedLetter.o);
                textSpan1.style.opacity = renderedLetter1.o;
                if (renderedLetter1.sw && renderedLetter1._mdf.sw) {
                    textPath1.setAttribute("stroke-width", renderedLetter1.sw);
                }
                if (renderedLetter1.sc && renderedLetter1._mdf.sc) {
                    textPath1.setAttribute("stroke", renderedLetter1.sc);
                }
                if (renderedLetter1.fc && renderedLetter1._mdf.fc) {
                    textPath1.setAttribute("fill", renderedLetter1.fc);
                    textPath1.style.color = renderedLetter1.fc;
                }
            }
        }
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
            var boundingBox1 = this.innerElem.getBBox();
            if (this.currentBBox.w !== boundingBox1.width) {
                this.currentBBox.w = boundingBox1.width;
                this.svgElement.setAttribute("width", boundingBox1.width);
            }
            if (this.currentBBox.h !== boundingBox1.height) {
                this.currentBBox.h = boundingBox1.height;
                this.svgElement.setAttribute("height", boundingBox1.height);
            }
            var margin1 = 1;
            if (this.currentBBox.w !== boundingBox1.width + margin1 * 2 || this.currentBBox.h !== boundingBox1.height + margin1 * 2 || this.currentBBox.x !== boundingBox1.x - margin1 || this.currentBBox.y !== boundingBox1.y - margin1) {
                this.currentBBox.w = boundingBox1.width + margin1 * 2;
                this.currentBBox.h = boundingBox1.height + margin1 * 2;
                this.currentBBox.x = boundingBox1.x - margin1;
                this.currentBBox.y = boundingBox1.y - margin1;
                this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                svgStyle1 = this.svgElement.style;
                var svgTransform1 = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                svgStyle1.transform = svgTransform1;
                svgStyle1.webkitTransform = svgTransform1;
            }
        }
    };
    function HCameraElement(data1, globalData1, comp1) {
        this.initFrame();
        this.initBaseData(data1, globalData1, comp1);
        this.initHierarchy();
        var getProp1 = PropertyFactory.getProp;
        this.pe = getProp1(this, data1.pe, 0, 0, this);
        if (data1.ks.p.s) {
            this.px = getProp1(this, data1.ks.p.x, 1, 0, this);
            this.py = getProp1(this, data1.ks.p.y, 1, 0, this);
            this.pz = getProp1(this, data1.ks.p.z, 1, 0, this);
        } else {
            this.p = getProp1(this, data1.ks.p, 1, 0, this);
        }
        if (data1.ks.a) {
            this.a = getProp1(this, data1.ks.a, 1, 0, this);
        }
        if (data1.ks.or.k.length && data1.ks.or.k[0].to) {
            var i3;
            var len1 = data1.ks.or.k.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                data1.ks.or.k[i3].to = null;
                data1.ks.or.k[i3].ti = null;
            }
        }
        this.or = getProp1(this, data1.ks.or, 1, degToRads, this);
        this.or.sh = true;
        this.rx = getProp1(this, data1.ks.rx, 0, degToRads, this);
        this.ry = getProp1(this, data1.ks.ry, 0, degToRads, this);
        this.rz = getProp1(this, data1.ks.rz, 0, degToRads, this);
        this.mat = new Matrix();
        this._prevMat = new Matrix();
        this._isFirstFrame = true; // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.
        this.finalTransform = {
            mProp: this
        };
    }
    extendPrototype([
        BaseElement,
        FrameElement,
        HierarchyElement
    ], HCameraElement);
    HCameraElement.prototype.setup = function() {
        var i3;
        var len1 = this.comp.threeDElements.length;
        var comp1;
        var perspectiveStyle1;
        var containerStyle1;
        for(i3 = 0; i3 < len1; i3 += 1){
            // [perspectiveElem,container]
            comp1 = this.comp.threeDElements[i3];
            if (comp1.type === "3d") {
                perspectiveStyle1 = comp1.perspectiveElem.style;
                containerStyle1 = comp1.container.style;
                var perspective1 = this.pe.v + "px";
                var origin1 = "0px 0px 0px";
                var matrix1 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                perspectiveStyle1.perspective = perspective1;
                perspectiveStyle1.webkitPerspective = perspective1;
                containerStyle1.transformOrigin = origin1;
                containerStyle1.mozTransformOrigin = origin1;
                containerStyle1.webkitTransformOrigin = origin1;
                perspectiveStyle1.transform = matrix1;
                perspectiveStyle1.webkitTransform = matrix1;
            }
        }
    };
    HCameraElement.prototype.createElements = function() {};
    HCameraElement.prototype.hide = function() {};
    HCameraElement.prototype.renderFrame = function() {
        var _mdf1 = this._isFirstFrame;
        var i3;
        var len1;
        if (this.hierarchy) {
            len1 = this.hierarchy.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                _mdf1 = this.hierarchy[i3].finalTransform.mProp._mdf || _mdf1;
            }
        }
        if (_mdf1 || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            this.mat.reset();
            if (this.hierarchy) {
                len1 = this.hierarchy.length - 1;
                for(i3 = len1; i3 >= 0; i3 -= 1){
                    var mTransf1 = this.hierarchy[i3].finalTransform.mProp;
                    this.mat.translate(-mTransf1.p.v[0], -mTransf1.p.v[1], mTransf1.p.v[2]);
                    this.mat.rotateX(-mTransf1.or.v[0]).rotateY(-mTransf1.or.v[1]).rotateZ(mTransf1.or.v[2]);
                    this.mat.rotateX(-mTransf1.rx.v).rotateY(-mTransf1.ry.v).rotateZ(mTransf1.rz.v);
                    this.mat.scale(1 / mTransf1.s.v[0], 1 / mTransf1.s.v[1], 1 / mTransf1.s.v[2]);
                    this.mat.translate(mTransf1.a.v[0], mTransf1.a.v[1], mTransf1.a.v[2]);
                }
            }
            if (this.p) {
                this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
            } else {
                this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
            }
            if (this.a) {
                var diffVector1;
                if (this.p) {
                    diffVector1 = [
                        this.p.v[0] - this.a.v[0],
                        this.p.v[1] - this.a.v[1],
                        this.p.v[2] - this.a.v[2]
                    ];
                } else {
                    diffVector1 = [
                        this.px.v - this.a.v[0],
                        this.py.v - this.a.v[1],
                        this.pz.v - this.a.v[2]
                    ];
                }
                var mag1 = Math.sqrt(Math.pow(diffVector1[0], 2) + Math.pow(diffVector1[1], 2) + Math.pow(diffVector1[2], 2)); // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));
                var lookDir1 = [
                    diffVector1[0] / mag1,
                    diffVector1[1] / mag1,
                    diffVector1[2] / mag1
                ];
                var lookLengthOnXZ1 = Math.sqrt(lookDir1[2] * lookDir1[2] + lookDir1[0] * lookDir1[0]);
                var mRotationX1 = Math.atan2(lookDir1[1], lookLengthOnXZ1);
                var mRotationY1 = Math.atan2(lookDir1[0], -lookDir1[2]);
                this.mat.rotateY(mRotationY1).rotateX(-mRotationX1);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
            this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
            this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
            this.mat.translate(0, 0, this.pe.v);
            var hasMatrixChanged1 = !this._prevMat.equals(this.mat);
            if ((hasMatrixChanged1 || this.pe._mdf) && this.comp.threeDElements) {
                len1 = this.comp.threeDElements.length;
                var comp1;
                var perspectiveStyle1;
                var containerStyle1;
                for(i3 = 0; i3 < len1; i3 += 1){
                    comp1 = this.comp.threeDElements[i3];
                    if (comp1.type === "3d") {
                        if (hasMatrixChanged1) {
                            var matValue1 = this.mat.toCSS();
                            containerStyle1 = comp1.container.style;
                            containerStyle1.transform = matValue1;
                            containerStyle1.webkitTransform = matValue1;
                        }
                        if (this.pe._mdf) {
                            perspectiveStyle1 = comp1.perspectiveElem.style;
                            perspectiveStyle1.perspective = this.pe.v + "px";
                            perspectiveStyle1.webkitPerspective = this.pe.v + "px";
                        }
                    }
                }
                this.mat.clone(this._prevMat);
            }
        }
        this._isFirstFrame = false;
    };
    HCameraElement.prototype.prepareFrame = function(num1) {
        this.prepareProperties(num1, true);
    };
    HCameraElement.prototype.destroy = function() {};
    HCameraElement.prototype.getBaseElement = function() {
        return null;
    };
    function HImageElement(data1, globalData1, comp1) {
        this.assetData = globalData1.getAssetData(data1.refId);
        this.initElement(data1, globalData1, comp1);
    }
    extendPrototype([
        BaseElement,
        TransformElement,
        HBaseElement,
        HSolidElement,
        HierarchyElement,
        FrameElement,
        RenderableElement
    ], HImageElement);
    HImageElement.prototype.createContent = function() {
        var assetPath1 = this.globalData.getAssetsPath(this.assetData);
        var img1 = new Image();
        if (this.data.hasMask) {
            this.imageElem = createNS("image");
            this.imageElem.setAttribute("width", this.assetData.w + "px");
            this.imageElem.setAttribute("height", this.assetData.h + "px");
            this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", assetPath1);
            this.layerElement.appendChild(this.imageElem);
            this.baseElement.setAttribute("width", this.assetData.w);
            this.baseElement.setAttribute("height", this.assetData.h);
        } else {
            this.layerElement.appendChild(img1);
        }
        img1.crossOrigin = "anonymous";
        img1.src = assetPath1;
        if (this.data.ln) {
            this.baseElement.setAttribute("id", this.data.ln);
        }
    };
    function HybridRendererBase(animationItem1, config1) {
        this.animationItem = animationItem1;
        this.layers = null;
        this.renderedFrame = -1;
        this.renderConfig = {
            className: config1 && config1.className || "",
            imagePreserveAspectRatio: config1 && config1.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(config1 && config1.hideOnTransparent === false),
            filterSize: {
                width: config1 && config1.filterSize && config1.filterSize.width || "400%",
                height: config1 && config1.filterSize && config1.filterSize.height || "400%",
                x: config1 && config1.filterSize && config1.filterSize.x || "-100%",
                y: config1 && config1.filterSize && config1.filterSize.y || "-100%"
            }
        };
        this.globalData = {
            _mdf: false,
            frameNum: -1,
            renderConfig: this.renderConfig
        };
        this.pendingElements = [];
        this.elements = [];
        this.threeDElements = [];
        this.destroyed = false;
        this.camera = null;
        this.supports3d = true;
        this.rendererType = "html";
    }
    extendPrototype([
        BaseRenderer
    ], HybridRendererBase);
    HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;
    HybridRendererBase.prototype.checkPendingElements = function() {
        while(this.pendingElements.length){
            var element1 = this.pendingElements.pop();
            element1.checkParenting();
        }
    };
    HybridRendererBase.prototype.appendElementInPos = function(element1, pos1) {
        var newDOMElement1 = element1.getBaseElement();
        if (!newDOMElement1) {
            return;
        }
        var layer1 = this.layers[pos1];
        if (!layer1.ddd || !this.supports3d) {
            if (this.threeDElements) {
                this.addTo3dContainer(newDOMElement1, pos1);
            } else {
                var i3 = 0;
                var nextDOMElement1;
                var nextLayer1;
                var tmpDOMElement1;
                while(i3 < pos1){
                    if (this.elements[i3] && this.elements[i3] !== true && this.elements[i3].getBaseElement) {
                        nextLayer1 = this.elements[i3];
                        tmpDOMElement1 = this.layers[i3].ddd ? this.getThreeDContainerByPos(i3) : nextLayer1.getBaseElement();
                        nextDOMElement1 = tmpDOMElement1 || nextDOMElement1;
                    }
                    i3 += 1;
                }
                if (nextDOMElement1) {
                    if (!layer1.ddd || !this.supports3d) {
                        this.layerElement.insertBefore(newDOMElement1, nextDOMElement1);
                    }
                } else if (!layer1.ddd || !this.supports3d) {
                    this.layerElement.appendChild(newDOMElement1);
                }
            }
        } else {
            this.addTo3dContainer(newDOMElement1, pos1);
        }
    };
    HybridRendererBase.prototype.createShape = function(data1) {
        if (!this.supports3d) {
            return new SVGShapeElement(data1, this.globalData, this);
        }
        return new HShapeElement(data1, this.globalData, this);
    };
    HybridRendererBase.prototype.createText = function(data1) {
        if (!this.supports3d) {
            return new SVGTextLottieElement(data1, this.globalData, this);
        }
        return new HTextElement(data1, this.globalData, this);
    };
    HybridRendererBase.prototype.createCamera = function(data1) {
        this.camera = new HCameraElement(data1, this.globalData, this);
        return this.camera;
    };
    HybridRendererBase.prototype.createImage = function(data1) {
        if (!this.supports3d) {
            return new IImageElement(data1, this.globalData, this);
        }
        return new HImageElement(data1, this.globalData, this);
    };
    HybridRendererBase.prototype.createSolid = function(data1) {
        if (!this.supports3d) {
            return new ISolidElement(data1, this.globalData, this);
        }
        return new HSolidElement(data1, this.globalData, this);
    };
    HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;
    HybridRendererBase.prototype.getThreeDContainerByPos = function(pos1) {
        var i3 = 0;
        var len1 = this.threeDElements.length;
        while(i3 < len1){
            if (this.threeDElements[i3].startPos <= pos1 && this.threeDElements[i3].endPos >= pos1) {
                return this.threeDElements[i3].perspectiveElem;
            }
            i3 += 1;
        }
        return null;
    };
    HybridRendererBase.prototype.createThreeDContainer = function(pos1, type1) {
        var perspectiveElem1 = createTag("div");
        var style1;
        var containerStyle1;
        styleDiv(perspectiveElem1);
        var container1 = createTag("div");
        styleDiv(container1);
        if (type1 === "3d") {
            style1 = perspectiveElem1.style;
            style1.width = this.globalData.compSize.w + "px";
            style1.height = this.globalData.compSize.h + "px";
            var center1 = "50% 50%";
            style1.webkitTransformOrigin = center1;
            style1.mozTransformOrigin = center1;
            style1.transformOrigin = center1;
            containerStyle1 = container1.style;
            var matrix1 = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            containerStyle1.transform = matrix1;
            containerStyle1.webkitTransform = matrix1;
        }
        perspectiveElem1.appendChild(container1); // this.resizerElem.appendChild(perspectiveElem);
        var threeDContainerData1 = {
            container: container1,
            perspectiveElem: perspectiveElem1,
            startPos: pos1,
            endPos: pos1,
            type: type1
        };
        this.threeDElements.push(threeDContainerData1);
        return threeDContainerData1;
    };
    HybridRendererBase.prototype.build3dContainers = function() {
        var i3;
        var len1 = this.layers.length;
        var lastThreeDContainerData1;
        var currentContainer1 = "";
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.layers[i3].ddd && this.layers[i3].ty !== 3) {
                if (currentContainer1 !== "3d") {
                    currentContainer1 = "3d";
                    lastThreeDContainerData1 = this.createThreeDContainer(i3, "3d");
                }
                lastThreeDContainerData1.endPos = Math.max(lastThreeDContainerData1.endPos, i3);
            } else {
                if (currentContainer1 !== "2d") {
                    currentContainer1 = "2d";
                    lastThreeDContainerData1 = this.createThreeDContainer(i3, "2d");
                }
                lastThreeDContainerData1.endPos = Math.max(lastThreeDContainerData1.endPos, i3);
            }
        }
        len1 = this.threeDElements.length;
        for(i3 = len1 - 1; i3 >= 0; i3 -= 1){
            this.resizerElem.appendChild(this.threeDElements[i3].perspectiveElem);
        }
    };
    HybridRendererBase.prototype.addTo3dContainer = function(elem3, pos1) {
        var i3 = 0;
        var len1 = this.threeDElements.length;
        while(i3 < len1){
            if (pos1 <= this.threeDElements[i3].endPos) {
                var j3 = this.threeDElements[i3].startPos;
                var nextElement1;
                while(j3 < pos1){
                    if (this.elements[j3] && this.elements[j3].getBaseElement) {
                        nextElement1 = this.elements[j3].getBaseElement();
                    }
                    j3 += 1;
                }
                if (nextElement1) {
                    this.threeDElements[i3].container.insertBefore(elem3, nextElement1);
                } else {
                    this.threeDElements[i3].container.appendChild(elem3);
                }
                break;
            }
            i3 += 1;
        }
    };
    HybridRendererBase.prototype.configAnimation = function(animData1) {
        var resizerElem1 = createTag("div");
        var wrapper1 = this.animationItem.wrapper;
        var style1 = resizerElem1.style;
        style1.width = animData1.w + "px";
        style1.height = animData1.h + "px";
        this.resizerElem = resizerElem1;
        styleDiv(resizerElem1);
        style1.transformStyle = "flat";
        style1.mozTransformStyle = "flat";
        style1.webkitTransformStyle = "flat";
        if (this.renderConfig.className) {
            resizerElem1.setAttribute("class", this.renderConfig.className);
        }
        wrapper1.appendChild(resizerElem1);
        style1.overflow = "hidden";
        var svg1 = createNS("svg");
        svg1.setAttribute("width", "1");
        svg1.setAttribute("height", "1");
        styleDiv(svg1);
        this.resizerElem.appendChild(svg1);
        var defs1 = createNS("defs");
        svg1.appendChild(defs1);
        this.data = animData1; // Mask animation
        this.setupGlobalData(animData1, svg1);
        this.globalData.defs = defs1;
        this.layers = animData1.layers;
        this.layerElement = this.resizerElem;
        this.build3dContainers();
        this.updateContainerSize();
    };
    HybridRendererBase.prototype.destroy = function() {
        if (this.animationItem.wrapper) {
            this.animationItem.wrapper.innerText = "";
        }
        this.animationItem.container = null;
        this.globalData.defs = null;
        var i3;
        var len1 = this.layers ? this.layers.length : 0;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.elements[i3] && this.elements[i3].destroy) {
                this.elements[i3].destroy();
            }
        }
        this.elements.length = 0;
        this.destroyed = true;
        this.animationItem = null;
    };
    HybridRendererBase.prototype.updateContainerSize = function() {
        var elementWidth1 = this.animationItem.wrapper.offsetWidth;
        var elementHeight1 = this.animationItem.wrapper.offsetHeight;
        var elementRel1 = elementWidth1 / elementHeight1;
        var animationRel1 = this.globalData.compSize.w / this.globalData.compSize.h;
        var sx1;
        var sy1;
        var tx1;
        var ty1;
        if (animationRel1 > elementRel1) {
            sx1 = elementWidth1 / this.globalData.compSize.w;
            sy1 = elementWidth1 / this.globalData.compSize.w;
            tx1 = 0;
            ty1 = (elementHeight1 - this.globalData.compSize.h * (elementWidth1 / this.globalData.compSize.w)) / 2;
        } else {
            sx1 = elementHeight1 / this.globalData.compSize.h;
            sy1 = elementHeight1 / this.globalData.compSize.h;
            tx1 = (elementWidth1 - this.globalData.compSize.w * (elementHeight1 / this.globalData.compSize.h)) / 2;
            ty1 = 0;
        }
        var style1 = this.resizerElem.style;
        style1.webkitTransform = "matrix3d(" + sx1 + ",0,0,0,0," + sy1 + ",0,0,0,0,1,0," + tx1 + "," + ty1 + ",0,1)";
        style1.transform = style1.webkitTransform;
    };
    HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;
    HybridRendererBase.prototype.hide = function() {
        this.resizerElem.style.display = "none";
    };
    HybridRendererBase.prototype.show = function() {
        this.resizerElem.style.display = "block";
    };
    HybridRendererBase.prototype.initItems = function() {
        this.buildAllItems();
        if (this.camera) {
            this.camera.setup();
        } else {
            var cWidth1 = this.globalData.compSize.w;
            var cHeight1 = this.globalData.compSize.h;
            var i3;
            var len1 = this.threeDElements.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                var style1 = this.threeDElements[i3].perspectiveElem.style;
                style1.webkitPerspective = Math.sqrt(Math.pow(cWidth1, 2) + Math.pow(cHeight1, 2)) + "px";
                style1.perspective = style1.webkitPerspective;
            }
        }
    };
    HybridRendererBase.prototype.searchExtraCompositions = function(assets1) {
        var i3;
        var len1 = assets1.length;
        var floatingContainer1 = createTag("div");
        for(i3 = 0; i3 < len1; i3 += 1){
            if (assets1[i3].xt) {
                var comp1 = this.createComp(assets1[i3], floatingContainer1, this.globalData.comp, null);
                comp1.initExpressions();
                this.globalData.projectInterface.registerComposition(comp1);
            }
        }
    };
    function HCompElement(data1, globalData1, comp1) {
        this.layers = data1.layers;
        this.supports3d = !data1.hasMask;
        this.completeLayers = false;
        this.pendingElements = [];
        this.elements = this.layers ? createSizedArray(this.layers.length) : [];
        this.initElement(data1, globalData1, comp1);
        this.tm = data1.tm ? PropertyFactory.getProp(this, data1.tm, 0, globalData1.frameRate, this) : {
            _placeholder: true
        };
    }
    extendPrototype([
        HybridRendererBase,
        ICompElement,
        HBaseElement
    ], HCompElement);
    HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;
    HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements(); // divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';
        if (this.data.hasMask) {
            this.svgElement.setAttribute("width", this.data.w);
            this.svgElement.setAttribute("height", this.data.h);
            this.transformedElement = this.baseElement;
        } else {
            this.transformedElement = this.layerElement;
        }
    };
    HCompElement.prototype.addTo3dContainer = function(elem3, pos1) {
        var j3 = 0;
        var nextElement1;
        while(j3 < pos1){
            if (this.elements[j3] && this.elements[j3].getBaseElement) {
                nextElement1 = this.elements[j3].getBaseElement();
            }
            j3 += 1;
        }
        if (nextElement1) {
            this.layerElement.insertBefore(elem3, nextElement1);
        } else {
            this.layerElement.appendChild(elem3);
        }
    };
    HCompElement.prototype.createComp = function(data1) {
        if (!this.supports3d) {
            return new SVGCompElement(data1, this.globalData, this);
        }
        return new HCompElement(data1, this.globalData, this);
    };
    function HybridRenderer(animationItem1, config1) {
        this.animationItem = animationItem1;
        this.layers = null;
        this.renderedFrame = -1;
        this.renderConfig = {
            className: config1 && config1.className || "",
            imagePreserveAspectRatio: config1 && config1.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(config1 && config1.hideOnTransparent === false),
            filterSize: {
                width: config1 && config1.filterSize && config1.filterSize.width || "400%",
                height: config1 && config1.filterSize && config1.filterSize.height || "400%",
                x: config1 && config1.filterSize && config1.filterSize.x || "-100%",
                y: config1 && config1.filterSize && config1.filterSize.y || "-100%"
            },
            runExpressions: !config1 || config1.runExpressions === undefined || config1.runExpressions
        };
        this.globalData = {
            _mdf: false,
            frameNum: -1,
            renderConfig: this.renderConfig
        };
        this.pendingElements = [];
        this.elements = [];
        this.threeDElements = [];
        this.destroyed = false;
        this.camera = null;
        this.supports3d = true;
        this.rendererType = "html";
    }
    extendPrototype([
        HybridRendererBase
    ], HybridRenderer);
    HybridRenderer.prototype.createComp = function(data1) {
        if (!this.supports3d) {
            return new SVGCompElement(data1, this.globalData, this);
        }
        return new HCompElement(data1, this.globalData, this);
    };
    var CompExpressionInterface = function() {
        return function(comp1) {
            function _thisLayerFunction1(name1) {
                var i3 = 0;
                var len1 = comp1.layers.length;
                while(i3 < len1){
                    if (comp1.layers[i3].nm === name1 || comp1.layers[i3].ind === name1) {
                        return comp1.elements[i3].layerInterface;
                    }
                    i3 += 1;
                }
                return null; // return {active:false};
            }
            Object.defineProperty(_thisLayerFunction1, "_name", {
                value: comp1.data.nm
            });
            _thisLayerFunction1.layer = _thisLayerFunction1;
            _thisLayerFunction1.pixelAspect = 1;
            _thisLayerFunction1.height = comp1.data.h || comp1.globalData.compSize.h;
            _thisLayerFunction1.width = comp1.data.w || comp1.globalData.compSize.w;
            _thisLayerFunction1.pixelAspect = 1;
            _thisLayerFunction1.frameDuration = 1 / comp1.globalData.frameRate;
            _thisLayerFunction1.displayStartTime = 0;
            _thisLayerFunction1.numLayers = comp1.layers.length;
            return _thisLayerFunction1;
        };
    }();
    function _typeof$2(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$2 = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof$2 = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof$2(obj1);
    }
    /* eslint-disable */ /*
   Copyright 2014 David Bau.

   Permission is hereby granted, free of charge, to any person obtaining
   a copy of this software and associated documentation files (the
   "Software"), to deal in the Software without restriction, including
   without limitation the rights to use, copy, modify, merge, publish,
   distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to
   the following conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

   */ function seedRandom(pool1, math1) {
        //
        // The following constants are related to IEEE 754 limits.
        //
        var global1 = this, width1 = 256, // each RC4 output is 0 <= x < 256
        chunks1 = 6, // at least six RC4 outputs for each double
        digits1 = 52, // there are 52 significant digits in a double
        rngname1 = "random", // rngname: name for Math.random and Math.seedrandom
        startdenom1 = math1.pow(width1, chunks1), significance1 = math1.pow(2, digits1), overflow1 = significance1 * 2, mask1 = width1 - 1, nodecrypto1; // node.js crypto module, initialized at the bottom.
        //
        // seedrandom()
        // This is the seedrandom function described above.
        //
        function seedrandom1(seed1, options1, callback1) {
            var key1 = [];
            options1 = options1 === true ? {
                entropy: true
            } : options1 || {}; // Flatten the seed string or build one from local entropy if needed.
            var shortseed1 = mixkey1(flatten1(options1.entropy ? [
                seed1,
                tostring1(pool1)
            ] : seed1 === null ? autoseed1() : seed1, 3), key1); // Use the seed to initialize an ARC4 generator.
            var arc41 = new ARC41(key1); // This function returns a random double in [0, 1) that contains
            // randomness in every bit of the mantissa of the IEEE 754 value.
            var prng1 = function prng1() {
                var n3 = arc41.g(chunks1), // Start with a numerator n < 2 ^ 48
                d3 = startdenom1, //   and denominator d = 2 ^ 48.
                x4 = 0; //   and no 'extra last byte'.
                while(n3 < significance1){
                    // Fill up all significant digits by
                    n3 = (n3 + x4) * width1; //   shifting numerator and
                    d3 *= width1; //   denominator and generating a
                    x4 = arc41.g(1); //   new least-significant-byte.
                }
                while(n3 >= overflow1){
                    // To avoid rounding up, before adding
                    n3 /= 2; //   last byte, shift everything
                    d3 /= 2; //   right using integer math until
                    x4 >>>= 1; //   we have exactly the desired bits.
                }
                return (n3 + x4) / d3; // Form the number within [0, 1).
            };
            prng1.int32 = function() {
                return arc41.g(4) | 0;
            };
            prng1.quick = function() {
                return arc41.g(4) / 0x100000000;
            };
            prng1["double"] = prng1; // Mix the randomness into accumulated entropy.
            mixkey1(tostring1(arc41.S), pool1); // Calling convention: what to return as a function of prng, seed, is_math.
            return (options1.pass || callback1 || function(prng1, seed1, is_math_call1, state1) {
                if (state1) {
                    // Load the arc4 state from the given state if it has an S array.
                    if (state1.S) {
                        copy1(state1, arc41);
                    } // Only provide the .state method if requested via options.state.
                    prng1.state = function() {
                        return copy1(arc41, {});
                    };
                } // If called as a method of Math (Math.seedrandom()), mutate
                // Math.random because that is how seedrandom.js has worked since v1.0.
                if (is_math_call1) {
                    math1[rngname1] = prng1;
                    return seed1;
                } else return prng1;
            })(prng1, shortseed1, "global" in options1 ? options1.global : this == math1, options1.state);
        }
        math1["seed" + rngname1] = seedrandom1; //
        // ARC4
        //
        // An ARC4 implementation.  The constructor takes a key in the form of
        // an array of at most (width) integers that should be 0 <= x < (width).
        //
        // The g(count) method returns a pseudorandom integer that concatenates
        // the next (count) outputs from ARC4.  Its return value is a number x
        // that is in the range 0 <= x < (width ^ count).
        //
        function ARC41(key1) {
            var t3, keylen1 = key1.length, me1 = this, i3 = 0, j3 = me1.i = me1.j = 0, s4 = me1.S = []; // The empty key [] is treated as [0].
            if (!keylen1) {
                key1 = [
                    keylen1++
                ];
            } // Set up S using the standard key scheduling algorithm.
            while(i3 < width1){
                s4[i3] = i3++;
            }
            for(i3 = 0; i3 < width1; i3++){
                s4[i3] = s4[j3 = mask1 & j3 + key1[i3 % keylen1] + (t3 = s4[i3])];
                s4[j3] = t3;
            } // The "g" method returns the next (count) outputs as one number.
            me1.g = function(count1) {
                // Using instance members instead of closure state nearly doubles speed.
                var t3, r1 = 0, i3 = me1.i, j3 = me1.j, s4 = me1.S;
                while(count1--){
                    t3 = s4[i3 = mask1 & i3 + 1];
                    r1 = r1 * width1 + s4[mask1 & (s4[i3] = s4[j3 = mask1 & j3 + t3]) + (s4[j3] = t3)];
                }
                me1.i = i3;
                me1.j = j3;
                return r1; // For robust unpredictability, the function call below automatically
            // discards an initial batch of values.  This is called RC4-drop[256].
            // See http://google.com/search?q=rsa+fluhrer+response&btnI
            };
        } //
        // copy()
        // Copies internal state of ARC4 to or from a plain object.
        //
        function copy1(f3, t3) {
            t3.i = f3.i;
            t3.j = f3.j;
            t3.S = f3.S.slice();
            return t3;
        } //
        // flatten()
        // Converts an object tree to nested arrays of strings.
        //
        function flatten1(obj1, depth1) {
            var result1 = [], typ1 = _typeof$2(obj1), prop1;
            if (depth1 && typ1 == "object") {
                for(prop1 in obj1){
                    try {
                        result1.push(flatten1(obj1[prop1], depth1 - 1));
                    } catch (e3) {}
                }
            }
            return result1.length ? result1 : typ1 == "string" ? obj1 : obj1 + "\x00";
        } //
        // mixkey()
        // Mixes a string seed into a key that is an array of integers, and
        // returns a shortened string seed that is equivalent to the result key.
        //
        function mixkey1(seed1, key1) {
            var stringseed1 = seed1 + "", smear1, j3 = 0;
            while(j3 < stringseed1.length){
                key1[mask1 & j3] = mask1 & (smear1 ^= key1[mask1 & j3] * 19) + stringseed1.charCodeAt(j3++);
            }
            return tostring1(key1);
        } //
        // autoseed()
        // Returns an object for autoseeding, using window.crypto and Node crypto
        // module if available.
        //
        function autoseed1() {
            try {
                if (nodecrypto1) {
                    return tostring1(nodecrypto1.randomBytes(width1));
                }
                var out1 = new Uint8Array(width1);
                (global1.crypto || global1.msCrypto).getRandomValues(out1);
                return tostring1(out1);
            } catch (e3) {
                var browser1 = global1.navigator, plugins1 = browser1 && browser1.plugins;
                return [
                    +new Date(),
                    global1,
                    plugins1,
                    global1.screen,
                    tostring1(pool1)
                ];
            }
        } //
        // tostring()
        // Converts an array of charcodes to a string
        //
        function tostring1(a3) {
            return String.fromCharCode.apply(0, a3);
        } //
        // When seedrandom.js is loaded, we immediately mix a few bits
        // from the built-in RNG into the entropy pool.  Because we do
        // not want to interfere with deterministic PRNG state later,
        // seedrandom will not call math.random on its own again after
        // initialization.
        //
        mixkey1(math1.random(), pool1); //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    // End anonymous scope, and pass initial values.
    }
    ;
    function initialize$2(BMMath1) {
        seedRandom([], BMMath1);
    }
    var propTypes = {
        SHAPE: "shape"
    };
    function _typeof$1(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof$1 = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof$1 = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof$1(obj1);
    }
    var ExpressionManager = function() {
        "use strict";
        var ob = {};
        var Math = BMMath;
        var window = null;
        var document = null;
        var XMLHttpRequest = null;
        var fetch = null;
        var frames = null;
        var _lottieGlobal = {};
        initialize$2(BMMath);
        function resetFrame() {
            _lottieGlobal = {};
        }
        function $bm_isInstanceOfArray(arr3) {
            return arr3.constructor === Array || arr3.constructor === Float32Array;
        }
        function isNumerable(tOfV1, v5) {
            return tOfV1 === "number" || v5 instanceof Number || tOfV1 === "boolean" || tOfV1 === "string";
        }
        function $bm_neg(a3) {
            var tOfA1 = _typeof$1(a3);
            if (tOfA1 === "number" || a3 instanceof Number || tOfA1 === "boolean") {
                return -a3;
            }
            if ($bm_isInstanceOfArray(a3)) {
                var i3;
                var lenA1 = a3.length;
                var retArr1 = [];
                for(i3 = 0; i3 < lenA1; i3 += 1){
                    retArr1[i3] = -a3[i3];
                }
                return retArr1;
            }
            if (a3.propType) {
                return a3.v;
            }
            return -a3;
        }
        var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get;
        var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get;
        var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
        function sum(a3, b3) {
            var tOfA1 = _typeof$1(a3);
            var tOfB1 = _typeof$1(b3);
            if (isNumerable(tOfA1, a3) && isNumerable(tOfB1, b3) || tOfA1 === "string" || tOfB1 === "string") {
                return a3 + b3;
            }
            if ($bm_isInstanceOfArray(a3) && isNumerable(tOfB1, b3)) {
                a3 = a3.slice(0);
                a3[0] += b3;
                return a3;
            }
            if (isNumerable(tOfA1, a3) && $bm_isInstanceOfArray(b3)) {
                b3 = b3.slice(0);
                b3[0] = a3 + b3[0];
                return b3;
            }
            if ($bm_isInstanceOfArray(a3) && $bm_isInstanceOfArray(b3)) {
                var i3 = 0;
                var lenA1 = a3.length;
                var lenB1 = b3.length;
                var retArr1 = [];
                while(i3 < lenA1 || i3 < lenB1){
                    if ((typeof a3[i3] === "number" || a3[i3] instanceof Number) && (typeof b3[i3] === "number" || b3[i3] instanceof Number)) {
                        retArr1[i3] = a3[i3] + b3[i3];
                    } else {
                        retArr1[i3] = b3[i3] === undefined ? a3[i3] : a3[i3] || b3[i3];
                    }
                    i3 += 1;
                }
                return retArr1;
            }
            return 0;
        }
        var add = sum;
        function sub(a3, b3) {
            var tOfA1 = _typeof$1(a3);
            var tOfB1 = _typeof$1(b3);
            if (isNumerable(tOfA1, a3) && isNumerable(tOfB1, b3)) {
                if (tOfA1 === "string") {
                    a3 = parseInt(a3, 10);
                }
                if (tOfB1 === "string") {
                    b3 = parseInt(b3, 10);
                }
                return a3 - b3;
            }
            if ($bm_isInstanceOfArray(a3) && isNumerable(tOfB1, b3)) {
                a3 = a3.slice(0);
                a3[0] -= b3;
                return a3;
            }
            if (isNumerable(tOfA1, a3) && $bm_isInstanceOfArray(b3)) {
                b3 = b3.slice(0);
                b3[0] = a3 - b3[0];
                return b3;
            }
            if ($bm_isInstanceOfArray(a3) && $bm_isInstanceOfArray(b3)) {
                var i3 = 0;
                var lenA1 = a3.length;
                var lenB1 = b3.length;
                var retArr1 = [];
                while(i3 < lenA1 || i3 < lenB1){
                    if ((typeof a3[i3] === "number" || a3[i3] instanceof Number) && (typeof b3[i3] === "number" || b3[i3] instanceof Number)) {
                        retArr1[i3] = a3[i3] - b3[i3];
                    } else {
                        retArr1[i3] = b3[i3] === undefined ? a3[i3] : a3[i3] || b3[i3];
                    }
                    i3 += 1;
                }
                return retArr1;
            }
            return 0;
        }
        function mul(a3, b3) {
            var tOfA1 = _typeof$1(a3);
            var tOfB1 = _typeof$1(b3);
            var arr3;
            if (isNumerable(tOfA1, a3) && isNumerable(tOfB1, b3)) {
                return a3 * b3;
            }
            var i3;
            var len1;
            if ($bm_isInstanceOfArray(a3) && isNumerable(tOfB1, b3)) {
                len1 = a3.length;
                arr3 = createTypedArray("float32", len1);
                for(i3 = 0; i3 < len1; i3 += 1){
                    arr3[i3] = a3[i3] * b3;
                }
                return arr3;
            }
            if (isNumerable(tOfA1, a3) && $bm_isInstanceOfArray(b3)) {
                len1 = b3.length;
                arr3 = createTypedArray("float32", len1);
                for(i3 = 0; i3 < len1; i3 += 1){
                    arr3[i3] = a3 * b3[i3];
                }
                return arr3;
            }
            return 0;
        }
        function div(a3, b3) {
            var tOfA1 = _typeof$1(a3);
            var tOfB1 = _typeof$1(b3);
            var arr3;
            if (isNumerable(tOfA1, a3) && isNumerable(tOfB1, b3)) {
                return a3 / b3;
            }
            var i3;
            var len1;
            if ($bm_isInstanceOfArray(a3) && isNumerable(tOfB1, b3)) {
                len1 = a3.length;
                arr3 = createTypedArray("float32", len1);
                for(i3 = 0; i3 < len1; i3 += 1){
                    arr3[i3] = a3[i3] / b3;
                }
                return arr3;
            }
            if (isNumerable(tOfA1, a3) && $bm_isInstanceOfArray(b3)) {
                len1 = b3.length;
                arr3 = createTypedArray("float32", len1);
                for(i3 = 0; i3 < len1; i3 += 1){
                    arr3[i3] = a3 / b3[i3];
                }
                return arr3;
            }
            return 0;
        }
        function mod(a3, b3) {
            if (typeof a3 === "string") {
                a3 = parseInt(a3, 10);
            }
            if (typeof b3 === "string") {
                b3 = parseInt(b3, 10);
            }
            return a3 % b3;
        }
        var $bm_sum = sum;
        var $bm_sub = sub;
        var $bm_mul = mul;
        var $bm_div = div;
        var $bm_mod = mod;
        function clamp(num1, min1, max1) {
            if (min1 > max1) {
                var mm1 = max1;
                max1 = min1;
                min1 = mm1;
            }
            return Math.min(Math.max(num1, min1), max1);
        }
        function radiansToDegrees(val3) {
            return val3 / degToRads;
        }
        var radians_to_degrees = radiansToDegrees;
        function degreesToRadians(val3) {
            return val3 * degToRads;
        }
        var degrees_to_radians = radiansToDegrees;
        var helperLengthArray = [
            0,
            0,
            0,
            0,
            0,
            0
        ];
        function length(arr11, arr21) {
            if (typeof arr11 === "number" || arr11 instanceof Number) {
                arr21 = arr21 || 0;
                return Math.abs(arr11 - arr21);
            }
            if (!arr21) {
                arr21 = helperLengthArray;
            }
            var i3;
            var len1 = Math.min(arr11.length, arr21.length);
            var addedLength1 = 0;
            for(i3 = 0; i3 < len1; i3 += 1){
                addedLength1 += Math.pow(arr21[i3] - arr11[i3], 2);
            }
            return Math.sqrt(addedLength1);
        }
        function normalize(vec1) {
            return div(vec1, length(vec1));
        }
        function rgbToHsl(val3) {
            var r1 = val3[0];
            var g3 = val3[1];
            var b3 = val3[2];
            var max1 = Math.max(r1, g3, b3);
            var min1 = Math.min(r1, g3, b3);
            var h3;
            var s4;
            var l3 = (max1 + min1) / 2;
            if (max1 === min1) {
                h3 = 0; // achromatic
                s4 = 0; // achromatic
            } else {
                var d3 = max1 - min1;
                s4 = l3 > 0.5 ? d3 / (2 - max1 - min1) : d3 / (max1 + min1);
                switch(max1){
                    case r1:
                        h3 = (g3 - b3) / d3 + (g3 < b3 ? 6 : 0);
                        break;
                    case g3:
                        h3 = (b3 - r1) / d3 + 2;
                        break;
                    case b3:
                        h3 = (r1 - g3) / d3 + 4;
                        break;
                    default:
                        break;
                }
                h3 /= 6;
            }
            return [
                h3,
                s4,
                l3,
                val3[3]
            ];
        }
        function hue2rgb(p6, q1, t3) {
            if (t3 < 0) t3 += 1;
            if (t3 > 1) t3 -= 1;
            if (t3 < 1 / 6) return p6 + (q1 - p6) * 6 * t3;
            if (t3 < 1 / 2) return q1;
            if (t3 < 2 / 3) return p6 + (q1 - p6) * (2 / 3 - t3) * 6;
            return p6;
        }
        function hslToRgb(val3) {
            var h3 = val3[0];
            var s4 = val3[1];
            var l3 = val3[2];
            var r1;
            var g3;
            var b3;
            if (s4 === 0) {
                r1 = l3; // achromatic
                b3 = l3; // achromatic
                g3 = l3; // achromatic
            } else {
                var q1 = l3 < 0.5 ? l3 * (1 + s4) : l3 + s4 - l3 * s4;
                var p6 = 2 * l3 - q1;
                r1 = hue2rgb(p6, q1, h3 + 1 / 3);
                g3 = hue2rgb(p6, q1, h3);
                b3 = hue2rgb(p6, q1, h3 - 1 / 3);
            }
            return [
                r1,
                g3,
                b3,
                val3[3]
            ];
        }
        function linear(t3, tMin1, tMax1, value11, value21) {
            if (value11 === undefined || value21 === undefined) {
                value11 = tMin1;
                value21 = tMax1;
                tMin1 = 0;
                tMax1 = 1;
            }
            if (tMax1 < tMin1) {
                var _tMin1 = tMax1;
                tMax1 = tMin1;
                tMin1 = _tMin1;
            }
            if (t3 <= tMin1) {
                return value11;
            }
            if (t3 >= tMax1) {
                return value21;
            }
            var perc1 = tMax1 === tMin1 ? 0 : (t3 - tMin1) / (tMax1 - tMin1);
            if (!value11.length) {
                return value11 + (value21 - value11) * perc1;
            }
            var i3;
            var len1 = value11.length;
            var arr3 = createTypedArray("float32", len1);
            for(i3 = 0; i3 < len1; i3 += 1){
                arr3[i3] = value11[i3] + (value21[i3] - value11[i3]) * perc1;
            }
            return arr3;
        }
        function random(min1, max1) {
            if (max1 === undefined) {
                if (min1 === undefined) {
                    min1 = 0;
                    max1 = 1;
                } else {
                    max1 = min1;
                    min1 = undefined;
                }
            }
            if (max1.length) {
                var i3;
                var len1 = max1.length;
                if (!min1) {
                    min1 = createTypedArray("float32", len1);
                }
                var arr3 = createTypedArray("float32", len1);
                var rnd1 = BMMath.random();
                for(i3 = 0; i3 < len1; i3 += 1){
                    arr3[i3] = min1[i3] + rnd1 * (max1[i3] - min1[i3]);
                }
                return arr3;
            }
            if (min1 === undefined) {
                min1 = 0;
            }
            var rndm1 = BMMath.random();
            return min1 + rndm1 * (max1 - min1);
        }
        function createPath(points1, inTangents1, outTangents1, closed1) {
            var i3;
            var len1 = points1.length;
            var path1 = shapePool.newElement();
            path1.setPathData(!!closed1, len1);
            var arrPlaceholder1 = [
                0,
                0
            ];
            var inVertexPoint1;
            var outVertexPoint1;
            for(i3 = 0; i3 < len1; i3 += 1){
                inVertexPoint1 = inTangents1 && inTangents1[i3] ? inTangents1[i3] : arrPlaceholder1;
                outVertexPoint1 = outTangents1 && outTangents1[i3] ? outTangents1[i3] : arrPlaceholder1;
                path1.setTripleAt(points1[i3][0], points1[i3][1], outVertexPoint1[0] + points1[i3][0], outVertexPoint1[1] + points1[i3][1], inVertexPoint1[0] + points1[i3][0], inVertexPoint1[1] + points1[i3][1], i3, true);
            }
            return path1;
        }
        function initiateExpression(elem, data, property) {
            // Bail out if we don't want expressions
            function noOp(_value1) {
                return _value1;
            }
            if (!elem.globalData.renderConfig.runExpressions) {
                return noOp;
            }
            var val = data.x;
            var needsVelocity = /velocity(?![\w\d])/.test(val);
            var _needsRandom = val.indexOf("random") !== -1;
            var elemType = elem.data.ty;
            var transform;
            var $bm_transform;
            var content;
            var effect;
            var thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime;
            Object.defineProperty(thisProperty, "value", {
                get: function get1() {
                    return thisProperty.v;
                }
            });
            elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
            elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
            var outPoint = elem.data.op / elem.comp.globalData.frameRate;
            var width = elem.data.sw ? elem.data.sw : 0;
            var height = elem.data.sh ? elem.data.sh : 0;
            var name = elem.data.nm;
            var loopIn;
            var loop_in;
            var loopOut;
            var loop_out;
            var smooth;
            var toWorld;
            var fromWorld;
            var fromComp;
            var toComp;
            var fromCompToSurface;
            var position;
            var rotation;
            var anchorPoint;
            var scale;
            var thisLayer;
            var thisComp;
            var mask;
            var valueAtTime;
            var velocityAtTime;
            var scoped_bm_rt; // val = val.replace(/(\\?"|')((http)(s)?(:\/))?\/.*?(\\?"|')/g, "\"\""); // deter potential network calls
            var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0]; // eslint-disable-line no-eval
            var numKeys = property.kf ? data.k.length : 0;
            var active = !this.data || this.data.hd !== true;
            var wiggle = (function wiggle1(freq1, amp1) {
                var iWiggle1;
                var j3;
                var lenWiggle1 = this.pv.length ? this.pv.length : 1;
                var addedAmps1 = createTypedArray("float32", lenWiggle1);
                freq1 = 5;
                var iterations1 = Math.floor(time * freq1);
                iWiggle1 = 0;
                j3 = 0;
                while(iWiggle1 < iterations1){
                    // var rnd = BMMath.random();
                    for(j3 = 0; j3 < lenWiggle1; j3 += 1){
                        addedAmps1[j3] += -amp1 + amp1 * 2 * BMMath.random(); // addedAmps[j] += -amp + amp*2*rnd;
                    }
                    iWiggle1 += 1;
                } // var rnd2 = BMMath.random();
                var periods1 = time * freq1;
                var perc1 = periods1 - Math.floor(periods1);
                var arr3 = createTypedArray("float32", lenWiggle1);
                if (lenWiggle1 > 1) {
                    for(j3 = 0; j3 < lenWiggle1; j3 += 1){
                        arr3[j3] = this.pv[j3] + addedAmps1[j3] + (-amp1 + amp1 * 2 * BMMath.random()) * perc1; // arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
                    // arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
                    }
                    return arr3;
                }
                return this.pv + addedAmps1[0] + (-amp1 + amp1 * 2 * BMMath.random()) * perc1;
            }).bind(this);
            if (thisProperty.loopIn) {
                loopIn = thisProperty.loopIn.bind(thisProperty);
                loop_in = loopIn;
            }
            if (thisProperty.loopOut) {
                loopOut = thisProperty.loopOut.bind(thisProperty);
                loop_out = loopOut;
            }
            if (thisProperty.smooth) {
                smooth = thisProperty.smooth.bind(thisProperty);
            }
            function loopInDuration(type1, duration1) {
                return loopIn(type1, duration1, true);
            }
            function loopOutDuration(type1, duration1) {
                return loopOut(type1, duration1, true);
            }
            if (this.getValueAtTime) {
                valueAtTime = this.getValueAtTime.bind(this);
            }
            if (this.getVelocityAtTime) {
                velocityAtTime = this.getVelocityAtTime.bind(this);
            }
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
            function lookAt(elem11, elem21) {
                var fVec1 = [
                    elem21[0] - elem11[0],
                    elem21[1] - elem11[1],
                    elem21[2] - elem11[2]
                ];
                var pitch1 = Math.atan2(fVec1[0], Math.sqrt(fVec1[1] * fVec1[1] + fVec1[2] * fVec1[2])) / degToRads;
                var yaw1 = -Math.atan2(fVec1[1], fVec1[2]) / degToRads;
                return [
                    yaw1,
                    pitch1,
                    0
                ];
            }
            function easeOut(t3, tMin1, tMax1, val11, val21) {
                return applyEase(easeOutBez, t3, tMin1, tMax1, val11, val21);
            }
            function easeIn(t3, tMin1, tMax1, val11, val21) {
                return applyEase(easeInBez, t3, tMin1, tMax1, val11, val21);
            }
            function ease(t3, tMin1, tMax1, val11, val21) {
                return applyEase(easeInOutBez, t3, tMin1, tMax1, val11, val21);
            }
            function applyEase(fn1, t3, tMin1, tMax1, val11, val21) {
                if (val11 === undefined) {
                    val11 = tMin1;
                    val21 = tMax1;
                } else {
                    t3 = (t3 - tMin1) / (tMax1 - tMin1);
                }
                if (t3 > 1) {
                    t3 = 1;
                } else if (t3 < 0) {
                    t3 = 0;
                }
                var mult1 = fn1(t3);
                if ($bm_isInstanceOfArray(val11)) {
                    var iKey1;
                    var lenKey1 = val11.length;
                    var arr3 = createTypedArray("float32", lenKey1);
                    for(iKey1 = 0; iKey1 < lenKey1; iKey1 += 1){
                        arr3[iKey1] = (val21[iKey1] - val11[iKey1]) * mult1 + val11[iKey1];
                    }
                    return arr3;
                }
                return (val21 - val11) * mult1 + val11;
            }
            function nearestKey(time1) {
                var iKey1;
                var lenKey1 = data.k.length;
                var index1;
                var keyTime1;
                if (!data.k.length || typeof data.k[0] === "number") {
                    index1 = 0;
                    keyTime1 = 0;
                } else {
                    index1 = -1;
                    time1 *= elem.comp.globalData.frameRate;
                    if (time1 < data.k[0].t) {
                        index1 = 1;
                        keyTime1 = data.k[0].t;
                    } else {
                        for(iKey1 = 0; iKey1 < lenKey1 - 1; iKey1 += 1){
                            if (time1 === data.k[iKey1].t) {
                                index1 = iKey1 + 1;
                                keyTime1 = data.k[iKey1].t;
                                break;
                            } else if (time1 > data.k[iKey1].t && time1 < data.k[iKey1 + 1].t) {
                                if (time1 - data.k[iKey1].t > data.k[iKey1 + 1].t - time1) {
                                    index1 = iKey1 + 2;
                                    keyTime1 = data.k[iKey1 + 1].t;
                                } else {
                                    index1 = iKey1 + 1;
                                    keyTime1 = data.k[iKey1].t;
                                }
                                break;
                            }
                        }
                        if (index1 === -1) {
                            index1 = iKey1 + 1;
                            keyTime1 = data.k[iKey1].t;
                        }
                    }
                }
                var obKey1 = {};
                obKey1.index = index1;
                obKey1.time = keyTime1 / elem.comp.globalData.frameRate;
                return obKey1;
            }
            function key(ind1) {
                var obKey1;
                var iKey1;
                var lenKey1;
                if (!data.k.length || typeof data.k[0] === "number") {
                    throw new Error("The property has no keyframe at index " + ind1);
                }
                ind1 -= 1;
                obKey1 = {
                    time: data.k[ind1].t / elem.comp.globalData.frameRate,
                    value: []
                };
                var arr3 = Object.prototype.hasOwnProperty.call(data.k[ind1], "s") ? data.k[ind1].s : data.k[ind1 - 1].e;
                lenKey1 = arr3.length;
                for(iKey1 = 0; iKey1 < lenKey1; iKey1 += 1){
                    obKey1[iKey1] = arr3[iKey1];
                    obKey1.value[iKey1] = arr3[iKey1];
                }
                return obKey1;
            }
            function framesToTime(fr1, fps1) {
                if (!fps1) {
                    fps1 = elem.comp.globalData.frameRate;
                }
                return fr1 / fps1;
            }
            function timeToFrames(t3, fps1) {
                if (!t3 && t3 !== 0) {
                    t3 = time;
                }
                if (!fps1) {
                    fps1 = elem.comp.globalData.frameRate;
                }
                return t3 * fps1;
            }
            function seedRandom(seed1) {
                BMMath.seedrandom(randSeed + seed1);
            }
            function sourceRectAtTime() {
                return elem.sourceRectAtTime();
            }
            function substring(init1, end3) {
                if (typeof value === "string") {
                    if (end3 === undefined) {
                        return value.substring(init1);
                    }
                    return value.substring(init1, end3);
                }
                return "";
            }
            function substr(init1, end3) {
                if (typeof value === "string") {
                    if (end3 === undefined) {
                        return value.substr(init1);
                    }
                    return value.substr(init1, end3);
                }
                return "";
            }
            function posterizeTime(framesPerSecond1) {
                time = framesPerSecond1 === 0 ? 0 : Math.floor(time * framesPerSecond1) / framesPerSecond1;
                value = valueAtTime(time);
            }
            var time;
            var velocity;
            var value;
            var text;
            var textIndex;
            var textTotal;
            var selectorValue;
            var index = elem.data.ind;
            var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
            var parent;
            var randSeed = Math.floor(Math.random() * 1000000);
            var globalData = elem.globalData;
            function executeExpression(_value1) {
                // globalData.pushExpression();
                value = _value1;
                if (this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector") {
                    return value;
                }
                if (this.propType === "textSelector") {
                    textIndex = this.textIndex;
                    textTotal = this.textTotal;
                    selectorValue = this.selectorValue;
                }
                if (!thisLayer) {
                    text = elem.layerInterface.text;
                    thisLayer = elem.layerInterface;
                    thisComp = elem.comp.compInterface;
                    toWorld = thisLayer.toWorld.bind(thisLayer);
                    fromWorld = thisLayer.fromWorld.bind(thisLayer);
                    fromComp = thisLayer.fromComp.bind(thisLayer);
                    toComp = thisLayer.toComp.bind(thisLayer);
                    mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
                    fromCompToSurface = fromComp;
                }
                if (!transform) {
                    transform = elem.layerInterface("ADBE Transform Group");
                    $bm_transform = transform;
                    if (transform) {
                        anchorPoint = transform.anchorPoint;
                    /* position = transform.position;
                      rotation = transform.rotation;
                      scale = transform.scale; */ }
                }
                if (elemType === 4 && !content) {
                    content = thisLayer("ADBE Root Vectors Group");
                }
                if (!effect) {
                    effect = thisLayer(4);
                }
                hasParent = !!(elem.hierarchy && elem.hierarchy.length);
                if (hasParent && !parent) {
                    parent = elem.hierarchy[0].layerInterface;
                }
                time = this.comp.renderedFrame / this.comp.globalData.frameRate;
                if (_needsRandom) {
                    seedRandom(randSeed + time);
                }
                if (needsVelocity) {
                    velocity = velocityAtTime(time);
                }
                expression_function();
                this.frameExpressionId = elem.globalData.frameId; // TODO: Check if it's possible to return on ShapeInterface the .v value
                // Changed this to a ternary operation because Rollup failed compiling it correctly
                scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
                return scoped_bm_rt;
            } // Bundlers will see these as dead code and unless we reference them
            executeExpression.__preventDeadCodeRemoval = [
                $bm_transform,
                anchorPoint,
                time,
                velocity,
                inPoint,
                outPoint,
                width,
                height,
                name,
                loop_in,
                loop_out,
                smooth,
                toComp,
                fromCompToSurface,
                toWorld,
                fromWorld,
                mask,
                position,
                rotation,
                scale,
                thisComp,
                numKeys,
                active,
                wiggle,
                loopInDuration,
                loopOutDuration,
                comp,
                lookAt,
                easeOut,
                easeIn,
                ease,
                nearestKey,
                key,
                text,
                textIndex,
                textTotal,
                selectorValue,
                framesToTime,
                timeToFrames,
                sourceRectAtTime,
                substring,
                substr,
                posterizeTime,
                index,
                globalData
            ];
            return executeExpression;
        }
        ob.initiateExpression = initiateExpression;
        ob.__preventDeadCodeRemoval = [
            window,
            document,
            XMLHttpRequest,
            fetch,
            frames,
            $bm_neg,
            add,
            $bm_sum,
            $bm_sub,
            $bm_mul,
            $bm_div,
            $bm_mod,
            clamp,
            radians_to_degrees,
            degreesToRadians,
            degrees_to_radians,
            normalize,
            rgbToHsl,
            hslToRgb,
            linear,
            random,
            createPath,
            _lottieGlobal
        ];
        ob.resetFrame = resetFrame;
        return ob;
    }();
    var Expressions = function() {
        var ob1 = {};
        ob1.initExpressions = initExpressions1;
        ob1.resetFrame = ExpressionManager.resetFrame;
        function initExpressions1(animation1) {
            var stackCount1 = 0;
            var registers1 = [];
            function pushExpression1() {
                stackCount1 += 1;
            }
            function popExpression1() {
                stackCount1 -= 1;
                if (stackCount1 === 0) {
                    releaseInstances1();
                }
            }
            function registerExpressionProperty1(expression1) {
                if (registers1.indexOf(expression1) === -1) {
                    registers1.push(expression1);
                }
            }
            function releaseInstances1() {
                var i3;
                var len1 = registers1.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    registers1[i3].release();
                }
                registers1.length = 0;
            }
            animation1.renderer.compInterface = CompExpressionInterface(animation1.renderer);
            animation1.renderer.globalData.projectInterface.registerComposition(animation1.renderer);
            animation1.renderer.globalData.pushExpression = pushExpression1;
            animation1.renderer.globalData.popExpression = popExpression1;
            animation1.renderer.globalData.registerExpressionProperty = registerExpressionProperty1;
        }
        return ob1;
    }();
    var MaskManagerInterface = function() {
        function MaskInterface1(mask1, data1) {
            this._mask = mask1;
            this._data = data1;
        }
        Object.defineProperty(MaskInterface1.prototype, "maskPath", {
            get: function get1() {
                if (this._mask.prop.k) {
                    this._mask.prop.getValue();
                }
                return this._mask.prop;
            }
        });
        Object.defineProperty(MaskInterface1.prototype, "maskOpacity", {
            get: function get1() {
                if (this._mask.op.k) {
                    this._mask.op.getValue();
                }
                return this._mask.op.v * 100;
            }
        });
        var MaskManager1 = function MaskManager1(maskManager1) {
            var _masksInterfaces1 = createSizedArray(maskManager1.viewData.length);
            var i3;
            var len1 = maskManager1.viewData.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                _masksInterfaces1[i3] = new MaskInterface1(maskManager1.viewData[i3], maskManager1.masksProperties[i3]);
            }
            var maskFunction1 = function maskFunction1(name1) {
                i3 = 0;
                while(i3 < len1){
                    if (maskManager1.masksProperties[i3].nm === name1) {
                        return _masksInterfaces1[i3];
                    }
                    i3 += 1;
                }
                return null;
            };
            return maskFunction1;
        };
        return MaskManager1;
    }();
    var ExpressionPropertyInterface = function() {
        var defaultUnidimensionalValue1 = {
            pv: 0,
            v: 0,
            mult: 1
        };
        var defaultMultidimensionalValue1 = {
            pv: [
                0,
                0,
                0
            ],
            v: [
                0,
                0,
                0
            ],
            mult: 1
        };
        function completeProperty1(expressionValue1, property1, type1) {
            Object.defineProperty(expressionValue1, "velocity", {
                get: function get1() {
                    return property1.getVelocityAtTime(property1.comp.currentFrame);
                }
            });
            expressionValue1.numKeys = property1.keyframes ? property1.keyframes.length : 0;
            expressionValue1.key = function(pos1) {
                if (!expressionValue1.numKeys) {
                    return 0;
                }
                var value3 = "";
                if ("s" in property1.keyframes[pos1 - 1]) {
                    value3 = property1.keyframes[pos1 - 1].s;
                } else if ("e" in property1.keyframes[pos1 - 2]) {
                    value3 = property1.keyframes[pos1 - 2].e;
                } else {
                    value3 = property1.keyframes[pos1 - 2].s;
                }
                var valueProp1 = type1 === "unidimensional" ? new Number(value3) : Object.assign({}, value3); // eslint-disable-line no-new-wrappers
                valueProp1.time = property1.keyframes[pos1 - 1].t / property1.elem.comp.globalData.frameRate;
                valueProp1.value = type1 === "unidimensional" ? value3[0] : value3;
                return valueProp1;
            };
            expressionValue1.valueAtTime = property1.getValueAtTime;
            expressionValue1.speedAtTime = property1.getSpeedAtTime;
            expressionValue1.velocityAtTime = property1.getVelocityAtTime;
            expressionValue1.propertyGroup = property1.propertyGroup;
        }
        function UnidimensionalPropertyInterface1(property1) {
            if (!property1 || !("pv" in property1)) {
                property1 = defaultUnidimensionalValue1;
            }
            var mult1 = 1 / property1.mult;
            var val3 = property1.pv * mult1;
            var expressionValue1 = new Number(val3); // eslint-disable-line no-new-wrappers
            expressionValue1.value = val3;
            completeProperty1(expressionValue1, property1, "unidimensional");
            return function() {
                if (property1.k) {
                    property1.getValue();
                }
                val3 = property1.v * mult1;
                if (expressionValue1.value !== val3) {
                    expressionValue1 = new Number(val3); // eslint-disable-line no-new-wrappers
                    expressionValue1.value = val3;
                    completeProperty1(expressionValue1, property1, "unidimensional");
                }
                return expressionValue1;
            };
        }
        function MultidimensionalPropertyInterface1(property1) {
            if (!property1 || !("pv" in property1)) {
                property1 = defaultMultidimensionalValue1;
            }
            var mult1 = 1 / property1.mult;
            var len1 = property1.data && property1.data.l || property1.pv.length;
            var expressionValue1 = createTypedArray("float32", len1);
            var arrValue1 = createTypedArray("float32", len1);
            expressionValue1.value = arrValue1;
            completeProperty1(expressionValue1, property1, "multidimensional");
            return function() {
                if (property1.k) {
                    property1.getValue();
                }
                for(var i3 = 0; i3 < len1; i3 += 1){
                    arrValue1[i3] = property1.v[i3] * mult1;
                    expressionValue1[i3] = arrValue1[i3];
                }
                return expressionValue1;
            };
        } // TODO: try to avoid using this getter
        function defaultGetter1() {
            return defaultUnidimensionalValue1;
        }
        return function(property1) {
            if (!property1) {
                return defaultGetter1;
            }
            if (property1.propType === "unidimensional") {
                return UnidimensionalPropertyInterface1(property1);
            }
            return MultidimensionalPropertyInterface1(property1);
        };
    }();
    var TransformExpressionInterface = function() {
        return function(transform1) {
            function _thisFunction1(name1) {
                switch(name1){
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return _thisFunction1.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return _thisFunction1.rotation;
                    case "ADBE Rotate X":
                        return _thisFunction1.xRotation;
                    case "ADBE Rotate Y":
                        return _thisFunction1.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return _thisFunction1.position;
                    case "ADBE Position_0":
                        return _thisFunction1.xPosition;
                    case "ADBE Position_1":
                        return _thisFunction1.yPosition;
                    case "ADBE Position_2":
                        return _thisFunction1.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return _thisFunction1.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return _thisFunction1.opacity;
                    default:
                        return null;
                }
            }
            Object.defineProperty(_thisFunction1, "rotation", {
                get: ExpressionPropertyInterface(transform1.r || transform1.rz)
            });
            Object.defineProperty(_thisFunction1, "zRotation", {
                get: ExpressionPropertyInterface(transform1.rz || transform1.r)
            });
            Object.defineProperty(_thisFunction1, "xRotation", {
                get: ExpressionPropertyInterface(transform1.rx)
            });
            Object.defineProperty(_thisFunction1, "yRotation", {
                get: ExpressionPropertyInterface(transform1.ry)
            });
            Object.defineProperty(_thisFunction1, "scale", {
                get: ExpressionPropertyInterface(transform1.s)
            });
            var _px1;
            var _py1;
            var _pz1;
            var _transformFactory1;
            if (transform1.p) {
                _transformFactory1 = ExpressionPropertyInterface(transform1.p);
            } else {
                _px1 = ExpressionPropertyInterface(transform1.px);
                _py1 = ExpressionPropertyInterface(transform1.py);
                if (transform1.pz) {
                    _pz1 = ExpressionPropertyInterface(transform1.pz);
                }
            }
            Object.defineProperty(_thisFunction1, "position", {
                get: function get1() {
                    if (transform1.p) {
                        return _transformFactory1();
                    }
                    return [
                        _px1(),
                        _py1(),
                        _pz1 ? _pz1() : 0
                    ];
                }
            });
            Object.defineProperty(_thisFunction1, "xPosition", {
                get: ExpressionPropertyInterface(transform1.px)
            });
            Object.defineProperty(_thisFunction1, "yPosition", {
                get: ExpressionPropertyInterface(transform1.py)
            });
            Object.defineProperty(_thisFunction1, "zPosition", {
                get: ExpressionPropertyInterface(transform1.pz)
            });
            Object.defineProperty(_thisFunction1, "anchorPoint", {
                get: ExpressionPropertyInterface(transform1.a)
            });
            Object.defineProperty(_thisFunction1, "opacity", {
                get: ExpressionPropertyInterface(transform1.o)
            });
            Object.defineProperty(_thisFunction1, "skew", {
                get: ExpressionPropertyInterface(transform1.sk)
            });
            Object.defineProperty(_thisFunction1, "skewAxis", {
                get: ExpressionPropertyInterface(transform1.sa)
            });
            Object.defineProperty(_thisFunction1, "orientation", {
                get: ExpressionPropertyInterface(transform1.or)
            });
            return _thisFunction1;
        };
    }();
    var LayerExpressionInterface = function() {
        function getMatrix1(time1) {
            var toWorldMat1 = new Matrix();
            if (time1 !== undefined) {
                var propMatrix1 = this._elem.finalTransform.mProp.getValueAtTime(time1);
                propMatrix1.clone(toWorldMat1);
            } else {
                var transformMat1 = this._elem.finalTransform.mProp;
                transformMat1.applyToMatrix(toWorldMat1);
            }
            return toWorldMat1;
        }
        function toWorldVec1(arr3, time1) {
            var toWorldMat1 = this.getMatrix(time1);
            toWorldMat1.props[12] = 0;
            toWorldMat1.props[13] = 0;
            toWorldMat1.props[14] = 0;
            return this.applyPoint(toWorldMat1, arr3);
        }
        function toWorld1(arr3, time1) {
            var toWorldMat1 = this.getMatrix(time1);
            return this.applyPoint(toWorldMat1, arr3);
        }
        function fromWorldVec1(arr3, time1) {
            var toWorldMat1 = this.getMatrix(time1);
            toWorldMat1.props[12] = 0;
            toWorldMat1.props[13] = 0;
            toWorldMat1.props[14] = 0;
            return this.invertPoint(toWorldMat1, arr3);
        }
        function fromWorld1(arr3, time1) {
            var toWorldMat1 = this.getMatrix(time1);
            return this.invertPoint(toWorldMat1, arr3);
        }
        function applyPoint1(matrix1, arr3) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i3;
                var len1 = this._elem.hierarchy.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this._elem.hierarchy[i3].finalTransform.mProp.applyToMatrix(matrix1);
                }
            }
            return matrix1.applyToPointArray(arr3[0], arr3[1], arr3[2] || 0);
        }
        function invertPoint1(matrix1, arr3) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i3;
                var len1 = this._elem.hierarchy.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this._elem.hierarchy[i3].finalTransform.mProp.applyToMatrix(matrix1);
                }
            }
            return matrix1.inversePoint(arr3);
        }
        function fromComp1(arr3) {
            var toWorldMat1 = new Matrix();
            toWorldMat1.reset();
            this._elem.finalTransform.mProp.applyToMatrix(toWorldMat1);
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i3;
                var len1 = this._elem.hierarchy.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    this._elem.hierarchy[i3].finalTransform.mProp.applyToMatrix(toWorldMat1);
                }
                return toWorldMat1.inversePoint(arr3);
            }
            return toWorldMat1.inversePoint(arr3);
        }
        function sampleImage1() {
            return [
                1,
                1,
                1,
                1
            ];
        }
        return function(elem3) {
            var transformInterface1;
            function _registerMaskInterface1(maskManager1) {
                _thisLayerFunction1.mask = new MaskManagerInterface(maskManager1, elem3);
            }
            function _registerEffectsInterface1(effects1) {
                _thisLayerFunction1.effect = effects1;
            }
            function _thisLayerFunction1(name1) {
                switch(name1){
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                        return _thisLayerFunction1.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                        return transformInterface1;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                        return _thisLayerFunction1.effect;
                    case "ADBE Text Properties":
                        return _thisLayerFunction1.textInterface;
                    default:
                        return null;
                }
            }
            _thisLayerFunction1.getMatrix = getMatrix1;
            _thisLayerFunction1.invertPoint = invertPoint1;
            _thisLayerFunction1.applyPoint = applyPoint1;
            _thisLayerFunction1.toWorld = toWorld1;
            _thisLayerFunction1.toWorldVec = toWorldVec1;
            _thisLayerFunction1.fromWorld = fromWorld1;
            _thisLayerFunction1.fromWorldVec = fromWorldVec1;
            _thisLayerFunction1.toComp = toWorld1;
            _thisLayerFunction1.fromComp = fromComp1;
            _thisLayerFunction1.sampleImage = sampleImage1;
            _thisLayerFunction1.sourceRectAtTime = elem3.sourceRectAtTime.bind(elem3);
            _thisLayerFunction1._elem = elem3;
            transformInterface1 = TransformExpressionInterface(elem3.finalTransform.mProp);
            var anchorPointDescriptor1 = getDescriptor(transformInterface1, "anchorPoint");
            Object.defineProperties(_thisLayerFunction1, {
                hasParent: {
                    get: function get1() {
                        return elem3.hierarchy.length;
                    }
                },
                parent: {
                    get: function get1() {
                        return elem3.hierarchy[0].layerInterface;
                    }
                },
                rotation: getDescriptor(transformInterface1, "rotation"),
                scale: getDescriptor(transformInterface1, "scale"),
                position: getDescriptor(transformInterface1, "position"),
                opacity: getDescriptor(transformInterface1, "opacity"),
                anchorPoint: anchorPointDescriptor1,
                anchor_point: anchorPointDescriptor1,
                transform: {
                    get: function get1() {
                        return transformInterface1;
                    }
                },
                active: {
                    get: function get1() {
                        return elem3.isInRange;
                    }
                }
            });
            _thisLayerFunction1.startTime = elem3.data.st;
            _thisLayerFunction1.index = elem3.data.ind;
            _thisLayerFunction1.source = elem3.data.refId;
            _thisLayerFunction1.height = elem3.data.ty === 0 ? elem3.data.h : 100;
            _thisLayerFunction1.width = elem3.data.ty === 0 ? elem3.data.w : 100;
            _thisLayerFunction1.inPoint = elem3.data.ip / elem3.comp.globalData.frameRate;
            _thisLayerFunction1.outPoint = elem3.data.op / elem3.comp.globalData.frameRate;
            _thisLayerFunction1._name = elem3.data.nm;
            _thisLayerFunction1.registerMaskInterface = _registerMaskInterface1;
            _thisLayerFunction1.registerEffectsInterface = _registerEffectsInterface1;
            return _thisLayerFunction1;
        };
    }();
    var propertyGroupFactory = function() {
        return function(interfaceFunction1, parentPropertyGroup1) {
            return function(val3) {
                val3 = val3 === undefined ? 1 : val3;
                if (val3 <= 0) {
                    return interfaceFunction1;
                }
                return parentPropertyGroup1(val3 - 1);
            };
        };
    }();
    var PropertyInterface = function() {
        return function(propertyName1, propertyGroup1) {
            var interfaceFunction1 = {
                _name: propertyName1
            };
            function _propertyGroup1(val3) {
                val3 = val3 === undefined ? 1 : val3;
                if (val3 <= 0) {
                    return interfaceFunction1;
                }
                return propertyGroup1(val3 - 1);
            }
            return _propertyGroup1;
        };
    }();
    var EffectsExpressionInterface = function() {
        var ob1 = {
            createEffectsInterface: createEffectsInterface1
        };
        function createEffectsInterface1(elem3, propertyGroup1) {
            if (elem3.effectsManager) {
                var effectElements1 = [];
                var effectsData1 = elem3.data.ef;
                var i3;
                var len1 = elem3.effectsManager.effectElements.length;
                for(i3 = 0; i3 < len1; i3 += 1){
                    effectElements1.push(createGroupInterface1(effectsData1[i3], elem3.effectsManager.effectElements[i3], propertyGroup1, elem3));
                }
                var effects1 = elem3.data.ef || [];
                var groupInterface1 = function groupInterface1(name1) {
                    i3 = 0;
                    len1 = effects1.length;
                    while(i3 < len1){
                        if (name1 === effects1[i3].nm || name1 === effects1[i3].mn || name1 === effects1[i3].ix) {
                            return effectElements1[i3];
                        }
                        i3 += 1;
                    }
                    return null;
                };
                Object.defineProperty(groupInterface1, "numProperties", {
                    get: function get1() {
                        return effects1.length;
                    }
                });
                return groupInterface1;
            }
            return null;
        }
        function createGroupInterface1(data1, elements1, propertyGroup1, elem3) {
            function groupInterface1(name1) {
                var effects1 = data1.ef;
                var i3 = 0;
                var len1 = effects1.length;
                while(i3 < len1){
                    if (name1 === effects1[i3].nm || name1 === effects1[i3].mn || name1 === effects1[i3].ix) {
                        if (effects1[i3].ty === 5) {
                            return effectElements1[i3];
                        }
                        return effectElements1[i3]();
                    }
                    i3 += 1;
                }
                throw new Error();
            }
            var _propertyGroup1 = propertyGroupFactory(groupInterface1, propertyGroup1);
            var effectElements1 = [];
            var i3;
            var len1 = data1.ef.length;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (data1.ef[i3].ty === 5) {
                    effectElements1.push(createGroupInterface1(data1.ef[i3], elements1.effectElements[i3], elements1.effectElements[i3].propertyGroup, elem3));
                } else {
                    effectElements1.push(createValueInterface1(elements1.effectElements[i3], data1.ef[i3].ty, elem3, _propertyGroup1));
                }
            }
            if (data1.mn === "ADBE Color Control") {
                Object.defineProperty(groupInterface1, "color", {
                    get: function get1() {
                        return effectElements1[0]();
                    }
                });
            }
            Object.defineProperties(groupInterface1, {
                numProperties: {
                    get: function get1() {
                        return data1.np;
                    }
                },
                _name: {
                    value: data1.nm
                },
                propertyGroup: {
                    value: _propertyGroup1
                }
            });
            groupInterface1.enabled = data1.en !== 0;
            groupInterface1.active = groupInterface1.enabled;
            return groupInterface1;
        }
        function createValueInterface1(element1, type1, elem3, propertyGroup1) {
            var expressionProperty1 = ExpressionPropertyInterface(element1.p);
            function interfaceFunction1() {
                if (type1 === 10) {
                    return elem3.comp.compInterface(element1.p.v);
                }
                return expressionProperty1();
            }
            if (element1.p.setGroupProperty) {
                element1.p.setGroupProperty(PropertyInterface("", propertyGroup1));
            }
            return interfaceFunction1;
        }
        return ob1;
    }();
    var ShapePathInterface = function() {
        return function pathInterfaceFactory1(shape3, view1, propertyGroup1) {
            var prop1 = view1.sh;
            function interfaceFunction1(val3) {
                if (val3 === "Shape" || val3 === "shape" || val3 === "Path" || val3 === "path" || val3 === "ADBE Vector Shape" || val3 === 2) {
                    return interfaceFunction1.path;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            prop1.setGroupProperty(PropertyInterface("Path", _propertyGroup1));
            Object.defineProperties(interfaceFunction1, {
                path: {
                    get: function get1() {
                        if (prop1.k) {
                            prop1.getValue();
                        }
                        return prop1;
                    }
                },
                shape: {
                    get: function get1() {
                        if (prop1.k) {
                            prop1.getValue();
                        }
                        return prop1;
                    }
                },
                _name: {
                    value: shape3.nm
                },
                ix: {
                    value: shape3.ix
                },
                propertyIndex: {
                    value: shape3.ix
                },
                mn: {
                    value: shape3.mn
                },
                propertyGroup: {
                    value: propertyGroup1
                }
            });
            return interfaceFunction1;
        };
    }();
    var ShapeExpressionInterface = function() {
        function iterateElements1(shapes1, view1, propertyGroup1) {
            var arr3 = [];
            var i3;
            var len1 = shapes1 ? shapes1.length : 0;
            for(i3 = 0; i3 < len1; i3 += 1){
                if (shapes1[i3].ty === "gr") {
                    arr3.push(groupInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "fl") {
                    arr3.push(fillInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "st") {
                    arr3.push(strokeInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "tm") {
                    arr3.push(trimInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "tr") {} else if (shapes1[i3].ty === "el") {
                    arr3.push(ellipseInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "sr") {
                    arr3.push(starInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "sh") {
                    arr3.push(ShapePathInterface(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "rc") {
                    arr3.push(rectInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "rd") {
                    arr3.push(roundedInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "rp") {
                    arr3.push(repeaterInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else if (shapes1[i3].ty === "gf") {
                    arr3.push(gradientFillInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                } else {
                    arr3.push(defaultInterfaceFactory1(shapes1[i3], view1[i3], propertyGroup1));
                }
            }
            return arr3;
        }
        function contentsInterfaceFactory1(shape3, view1, propertyGroup1) {
            var interfaces1;
            var interfaceFunction1 = function _interfaceFunction1(value3) {
                var i3 = 0;
                var len1 = interfaces1.length;
                while(i3 < len1){
                    if (interfaces1[i3]._name === value3 || interfaces1[i3].mn === value3 || interfaces1[i3].propertyIndex === value3 || interfaces1[i3].ix === value3 || interfaces1[i3].ind === value3) {
                        return interfaces1[i3];
                    }
                    i3 += 1;
                }
                if (typeof value3 === "number") {
                    return interfaces1[value3 - 1];
                }
                return null;
            };
            interfaceFunction1.propertyGroup = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            interfaces1 = iterateElements1(shape3.it, view1.it, interfaceFunction1.propertyGroup);
            interfaceFunction1.numProperties = interfaces1.length;
            var transformInterface1 = transformInterfaceFactory1(shape3.it[shape3.it.length - 1], view1.it[view1.it.length - 1], interfaceFunction1.propertyGroup);
            interfaceFunction1.transform = transformInterface1;
            interfaceFunction1.propertyIndex = shape3.cix;
            interfaceFunction1._name = shape3.nm;
            return interfaceFunction1;
        }
        function groupInterfaceFactory1(shape3, view1, propertyGroup1) {
            var interfaceFunction1 = function _interfaceFunction1(value3) {
                switch(value3){
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                        return interfaceFunction1.content;
                    // Not necessary for now. Keeping them here in case a new case appears
                    // case 'ADBE Vector Transform Group':
                    // case 3:
                    default:
                        return interfaceFunction1.transform;
                }
            };
            interfaceFunction1.propertyGroup = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            var content1 = contentsInterfaceFactory1(shape3, view1, interfaceFunction1.propertyGroup);
            var transformInterface1 = transformInterfaceFactory1(shape3.it[shape3.it.length - 1], view1.it[view1.it.length - 1], interfaceFunction1.propertyGroup);
            interfaceFunction1.content = content1;
            interfaceFunction1.transform = transformInterface1;
            Object.defineProperty(interfaceFunction1, "_name", {
                get: function get1() {
                    return shape3.nm;
                }
            }); // interfaceFunction.content = interfaceFunction;
            interfaceFunction1.numProperties = shape3.np;
            interfaceFunction1.propertyIndex = shape3.ix;
            interfaceFunction1.nm = shape3.nm;
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        function fillInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(val3) {
                if (val3 === "Color" || val3 === "color") {
                    return interfaceFunction1.color;
                }
                if (val3 === "Opacity" || val3 === "opacity") {
                    return interfaceFunction1.opacity;
                }
                return null;
            }
            Object.defineProperties(interfaceFunction1, {
                color: {
                    get: ExpressionPropertyInterface(view1.c)
                },
                opacity: {
                    get: ExpressionPropertyInterface(view1.o)
                },
                _name: {
                    value: shape3.nm
                },
                mn: {
                    value: shape3.mn
                }
            });
            view1.c.setGroupProperty(PropertyInterface("Color", propertyGroup1));
            view1.o.setGroupProperty(PropertyInterface("Opacity", propertyGroup1));
            return interfaceFunction1;
        }
        function gradientFillInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(val3) {
                if (val3 === "Start Point" || val3 === "start point") {
                    return interfaceFunction1.startPoint;
                }
                if (val3 === "End Point" || val3 === "end point") {
                    return interfaceFunction1.endPoint;
                }
                if (val3 === "Opacity" || val3 === "opacity") {
                    return interfaceFunction1.opacity;
                }
                return null;
            }
            Object.defineProperties(interfaceFunction1, {
                startPoint: {
                    get: ExpressionPropertyInterface(view1.s)
                },
                endPoint: {
                    get: ExpressionPropertyInterface(view1.e)
                },
                opacity: {
                    get: ExpressionPropertyInterface(view1.o)
                },
                type: {
                    get: function get1() {
                        return "a";
                    }
                },
                _name: {
                    value: shape3.nm
                },
                mn: {
                    value: shape3.mn
                }
            });
            view1.s.setGroupProperty(PropertyInterface("Start Point", propertyGroup1));
            view1.e.setGroupProperty(PropertyInterface("End Point", propertyGroup1));
            view1.o.setGroupProperty(PropertyInterface("Opacity", propertyGroup1));
            return interfaceFunction1;
        }
        function defaultInterfaceFactory1() {
            function interfaceFunction1() {
                return null;
            }
            return interfaceFunction1;
        }
        function strokeInterfaceFactory1(shape3, view1, propertyGroup1) {
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            var _dashPropertyGroup1 = propertyGroupFactory(dashOb1, _propertyGroup1);
            function addPropertyToDashOb1(i3) {
                Object.defineProperty(dashOb1, shape3.d[i3].nm, {
                    get: ExpressionPropertyInterface(view1.d.dataProps[i3].p)
                });
            }
            var i3;
            var len1 = shape3.d ? shape3.d.length : 0;
            var dashOb1 = {};
            for(i3 = 0; i3 < len1; i3 += 1){
                addPropertyToDashOb1(i3);
                view1.d.dataProps[i3].p.setGroupProperty(_dashPropertyGroup1);
            }
            function interfaceFunction1(val3) {
                if (val3 === "Color" || val3 === "color") {
                    return interfaceFunction1.color;
                }
                if (val3 === "Opacity" || val3 === "opacity") {
                    return interfaceFunction1.opacity;
                }
                if (val3 === "Stroke Width" || val3 === "stroke width") {
                    return interfaceFunction1.strokeWidth;
                }
                return null;
            }
            Object.defineProperties(interfaceFunction1, {
                color: {
                    get: ExpressionPropertyInterface(view1.c)
                },
                opacity: {
                    get: ExpressionPropertyInterface(view1.o)
                },
                strokeWidth: {
                    get: ExpressionPropertyInterface(view1.w)
                },
                dash: {
                    get: function get1() {
                        return dashOb1;
                    }
                },
                _name: {
                    value: shape3.nm
                },
                mn: {
                    value: shape3.mn
                }
            });
            view1.c.setGroupProperty(PropertyInterface("Color", _propertyGroup1));
            view1.o.setGroupProperty(PropertyInterface("Opacity", _propertyGroup1));
            view1.w.setGroupProperty(PropertyInterface("Stroke Width", _propertyGroup1));
            return interfaceFunction1;
        }
        function trimInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(val3) {
                if (val3 === shape3.e.ix || val3 === "End" || val3 === "end") {
                    return interfaceFunction1.end;
                }
                if (val3 === shape3.s.ix) {
                    return interfaceFunction1.start;
                }
                if (val3 === shape3.o.ix) {
                    return interfaceFunction1.offset;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            interfaceFunction1.propertyIndex = shape3.ix;
            view1.s.setGroupProperty(PropertyInterface("Start", _propertyGroup1));
            view1.e.setGroupProperty(PropertyInterface("End", _propertyGroup1));
            view1.o.setGroupProperty(PropertyInterface("Offset", _propertyGroup1));
            interfaceFunction1.propertyIndex = shape3.ix;
            interfaceFunction1.propertyGroup = propertyGroup1;
            Object.defineProperties(interfaceFunction1, {
                start: {
                    get: ExpressionPropertyInterface(view1.s)
                },
                end: {
                    get: ExpressionPropertyInterface(view1.e)
                },
                offset: {
                    get: ExpressionPropertyInterface(view1.o)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        function transformInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(value3) {
                if (shape3.a.ix === value3 || value3 === "Anchor Point") {
                    return interfaceFunction1.anchorPoint;
                }
                if (shape3.o.ix === value3 || value3 === "Opacity") {
                    return interfaceFunction1.opacity;
                }
                if (shape3.p.ix === value3 || value3 === "Position") {
                    return interfaceFunction1.position;
                }
                if (shape3.r.ix === value3 || value3 === "Rotation" || value3 === "ADBE Vector Rotation") {
                    return interfaceFunction1.rotation;
                }
                if (shape3.s.ix === value3 || value3 === "Scale") {
                    return interfaceFunction1.scale;
                }
                if (shape3.sk && shape3.sk.ix === value3 || value3 === "Skew") {
                    return interfaceFunction1.skew;
                }
                if (shape3.sa && shape3.sa.ix === value3 || value3 === "Skew Axis") {
                    return interfaceFunction1.skewAxis;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            view1.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", _propertyGroup1));
            view1.transform.mProps.p.setGroupProperty(PropertyInterface("Position", _propertyGroup1));
            view1.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", _propertyGroup1));
            view1.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", _propertyGroup1));
            view1.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup1));
            if (view1.transform.mProps.sk) {
                view1.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", _propertyGroup1));
                view1.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", _propertyGroup1));
            }
            view1.transform.op.setGroupProperty(PropertyInterface("Opacity", _propertyGroup1));
            Object.defineProperties(interfaceFunction1, {
                opacity: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.o)
                },
                position: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.p)
                },
                anchorPoint: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.a)
                },
                scale: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.s)
                },
                rotation: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.r)
                },
                skew: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.sk)
                },
                skewAxis: {
                    get: ExpressionPropertyInterface(view1.transform.mProps.sa)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.ty = "tr";
            interfaceFunction1.mn = shape3.mn;
            interfaceFunction1.propertyGroup = propertyGroup1;
            return interfaceFunction1;
        }
        function ellipseInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(value3) {
                if (shape3.p.ix === value3) {
                    return interfaceFunction1.position;
                }
                if (shape3.s.ix === value3) {
                    return interfaceFunction1.size;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            interfaceFunction1.propertyIndex = shape3.ix;
            var prop1 = view1.sh.ty === "tm" ? view1.sh.prop : view1.sh;
            prop1.s.setGroupProperty(PropertyInterface("Size", _propertyGroup1));
            prop1.p.setGroupProperty(PropertyInterface("Position", _propertyGroup1));
            Object.defineProperties(interfaceFunction1, {
                size: {
                    get: ExpressionPropertyInterface(prop1.s)
                },
                position: {
                    get: ExpressionPropertyInterface(prop1.p)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        function starInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(value3) {
                if (shape3.p.ix === value3) {
                    return interfaceFunction1.position;
                }
                if (shape3.r.ix === value3) {
                    return interfaceFunction1.rotation;
                }
                if (shape3.pt.ix === value3) {
                    return interfaceFunction1.points;
                }
                if (shape3.or.ix === value3 || value3 === "ADBE Vector Star Outer Radius") {
                    return interfaceFunction1.outerRadius;
                }
                if (shape3.os.ix === value3) {
                    return interfaceFunction1.outerRoundness;
                }
                if (shape3.ir && (shape3.ir.ix === value3 || value3 === "ADBE Vector Star Inner Radius")) {
                    return interfaceFunction1.innerRadius;
                }
                if (shape3.is && shape3.is.ix === value3) {
                    return interfaceFunction1.innerRoundness;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            var prop1 = view1.sh.ty === "tm" ? view1.sh.prop : view1.sh;
            interfaceFunction1.propertyIndex = shape3.ix;
            prop1.or.setGroupProperty(PropertyInterface("Outer Radius", _propertyGroup1));
            prop1.os.setGroupProperty(PropertyInterface("Outer Roundness", _propertyGroup1));
            prop1.pt.setGroupProperty(PropertyInterface("Points", _propertyGroup1));
            prop1.p.setGroupProperty(PropertyInterface("Position", _propertyGroup1));
            prop1.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup1));
            if (shape3.ir) {
                prop1.ir.setGroupProperty(PropertyInterface("Inner Radius", _propertyGroup1));
                prop1.is.setGroupProperty(PropertyInterface("Inner Roundness", _propertyGroup1));
            }
            Object.defineProperties(interfaceFunction1, {
                position: {
                    get: ExpressionPropertyInterface(prop1.p)
                },
                rotation: {
                    get: ExpressionPropertyInterface(prop1.r)
                },
                points: {
                    get: ExpressionPropertyInterface(prop1.pt)
                },
                outerRadius: {
                    get: ExpressionPropertyInterface(prop1.or)
                },
                outerRoundness: {
                    get: ExpressionPropertyInterface(prop1.os)
                },
                innerRadius: {
                    get: ExpressionPropertyInterface(prop1.ir)
                },
                innerRoundness: {
                    get: ExpressionPropertyInterface(prop1.is)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        function rectInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(value3) {
                if (shape3.p.ix === value3) {
                    return interfaceFunction1.position;
                }
                if (shape3.r.ix === value3) {
                    return interfaceFunction1.roundness;
                }
                if (shape3.s.ix === value3 || value3 === "Size" || value3 === "ADBE Vector Rect Size") {
                    return interfaceFunction1.size;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            var prop1 = view1.sh.ty === "tm" ? view1.sh.prop : view1.sh;
            interfaceFunction1.propertyIndex = shape3.ix;
            prop1.p.setGroupProperty(PropertyInterface("Position", _propertyGroup1));
            prop1.s.setGroupProperty(PropertyInterface("Size", _propertyGroup1));
            prop1.r.setGroupProperty(PropertyInterface("Rotation", _propertyGroup1));
            Object.defineProperties(interfaceFunction1, {
                position: {
                    get: ExpressionPropertyInterface(prop1.p)
                },
                roundness: {
                    get: ExpressionPropertyInterface(prop1.r)
                },
                size: {
                    get: ExpressionPropertyInterface(prop1.s)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        function roundedInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(value3) {
                if (shape3.r.ix === value3 || value3 === "Round Corners 1") {
                    return interfaceFunction1.radius;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            var prop1 = view1;
            interfaceFunction1.propertyIndex = shape3.ix;
            prop1.rd.setGroupProperty(PropertyInterface("Radius", _propertyGroup1));
            Object.defineProperties(interfaceFunction1, {
                radius: {
                    get: ExpressionPropertyInterface(prop1.rd)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        function repeaterInterfaceFactory1(shape3, view1, propertyGroup1) {
            function interfaceFunction1(value3) {
                if (shape3.c.ix === value3 || value3 === "Copies") {
                    return interfaceFunction1.copies;
                }
                if (shape3.o.ix === value3 || value3 === "Offset") {
                    return interfaceFunction1.offset;
                }
                return null;
            }
            var _propertyGroup1 = propertyGroupFactory(interfaceFunction1, propertyGroup1);
            var prop1 = view1;
            interfaceFunction1.propertyIndex = shape3.ix;
            prop1.c.setGroupProperty(PropertyInterface("Copies", _propertyGroup1));
            prop1.o.setGroupProperty(PropertyInterface("Offset", _propertyGroup1));
            Object.defineProperties(interfaceFunction1, {
                copies: {
                    get: ExpressionPropertyInterface(prop1.c)
                },
                offset: {
                    get: ExpressionPropertyInterface(prop1.o)
                },
                _name: {
                    value: shape3.nm
                }
            });
            interfaceFunction1.mn = shape3.mn;
            return interfaceFunction1;
        }
        return function(shapes1, view1, propertyGroup1) {
            var interfaces1;
            function _interfaceFunction1(value3) {
                if (typeof value3 === "number") {
                    value3 = value3 === undefined ? 1 : value3;
                    if (value3 === 0) {
                        return propertyGroup1;
                    }
                    return interfaces1[value3 - 1];
                }
                var i3 = 0;
                var len1 = interfaces1.length;
                while(i3 < len1){
                    if (interfaces1[i3]._name === value3) {
                        return interfaces1[i3];
                    }
                    i3 += 1;
                }
                return null;
            }
            function parentGroupWrapper1() {
                return propertyGroup1;
            }
            _interfaceFunction1.propertyGroup = propertyGroupFactory(_interfaceFunction1, parentGroupWrapper1);
            interfaces1 = iterateElements1(shapes1, view1, _interfaceFunction1.propertyGroup);
            _interfaceFunction1.numProperties = interfaces1.length;
            _interfaceFunction1._name = "Contents";
            return _interfaceFunction1;
        };
    }();
    var TextExpressionInterface = function() {
        return function(elem3) {
            var _sourceText1;
            function _thisLayerFunction1(name1) {
                switch(name1){
                    case "ADBE Text Document":
                        return _thisLayerFunction1.sourceText;
                    default:
                        return null;
                }
            }
            Object.defineProperty(_thisLayerFunction1, "sourceText", {
                get: function get1() {
                    elem3.textProperty.getValue();
                    var stringValue1 = elem3.textProperty.currentData.t;
                    if (!_sourceText1 || stringValue1 !== _sourceText1.value) {
                        _sourceText1 = new String(stringValue1); // eslint-disable-line no-new-wrappers
                        // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive
                        _sourceText1.value = stringValue1 || new String(stringValue1); // eslint-disable-line no-new-wrappers
                        Object.defineProperty(_sourceText1, "style", {
                            get: function get1() {
                                return {
                                    fillColor: elem3.textProperty.currentData.fc
                                };
                            }
                        });
                    }
                    return _sourceText1;
                }
            });
            return _thisLayerFunction1;
        };
    }();
    function _typeof(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof1(obj1) {
                return typeof obj1;
            };
        } else {
            _typeof = function _typeof1(obj1) {
                return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
            };
        }
        return _typeof(obj1);
    }
    var FootageInterface = function() {
        var outlineInterfaceFactory1 = function outlineInterfaceFactory1(elem3) {
            var currentPropertyName1 = "";
            var currentProperty1 = elem3.getFootageData();
            function init1() {
                currentPropertyName1 = "";
                currentProperty1 = elem3.getFootageData();
                return searchProperty1;
            }
            function searchProperty1(value3) {
                if (currentProperty1[value3]) {
                    currentPropertyName1 = value3;
                    currentProperty1 = currentProperty1[value3];
                    if (_typeof(currentProperty1) === "object") {
                        return searchProperty1;
                    }
                    return currentProperty1;
                }
                var propertyNameIndex1 = value3.indexOf(currentPropertyName1);
                if (propertyNameIndex1 !== -1) {
                    var index1 = parseInt(value3.substr(propertyNameIndex1 + currentPropertyName1.length), 10);
                    currentProperty1 = currentProperty1[index1];
                    if (_typeof(currentProperty1) === "object") {
                        return searchProperty1;
                    }
                    return currentProperty1;
                }
                return "";
            }
            return init1;
        };
        var dataInterfaceFactory1 = function dataInterfaceFactory1(elem3) {
            function interfaceFunction1(value3) {
                if (value3 === "Outline") {
                    return interfaceFunction1.outlineInterface();
                }
                return null;
            }
            interfaceFunction1._name = "Outline";
            interfaceFunction1.outlineInterface = outlineInterfaceFactory1(elem3);
            return interfaceFunction1;
        };
        return function(elem3) {
            function _interfaceFunction1(value3) {
                if (value3 === "Data") {
                    return _interfaceFunction1.dataInterface;
                }
                return null;
            }
            _interfaceFunction1._name = "Data";
            _interfaceFunction1.dataInterface = dataInterfaceFactory1(elem3);
            return _interfaceFunction1;
        };
    }();
    var interfaces = {
        layer: LayerExpressionInterface,
        effects: EffectsExpressionInterface,
        comp: CompExpressionInterface,
        shape: ShapeExpressionInterface,
        text: TextExpressionInterface,
        footage: FootageInterface
    };
    function getInterface(type1) {
        return interfaces[type1] || null;
    }
    var expressionHelpers = function() {
        function searchExpressions1(elem3, data1, prop1) {
            if (data1.x) {
                prop1.k = true;
                prop1.x = true;
                prop1.initiateExpression = ExpressionManager.initiateExpression;
                prop1.effectsSequence.push(prop1.initiateExpression(elem3, data1, prop1).bind(prop1));
            }
        }
        function getValueAtTime1(frameNum1) {
            frameNum1 *= this.elem.globalData.frameRate;
            frameNum1 -= this.offsetTime;
            if (frameNum1 !== this._cachingAtTime.lastFrame) {
                this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum1 ? this._cachingAtTime.lastIndex : 0;
                this._cachingAtTime.value = this.interpolateValue(frameNum1, this._cachingAtTime);
                this._cachingAtTime.lastFrame = frameNum1;
            }
            return this._cachingAtTime.value;
        }
        function getSpeedAtTime1(frameNum1) {
            var delta1 = -0.01;
            var v11 = this.getValueAtTime(frameNum1);
            var v21 = this.getValueAtTime(frameNum1 + delta1);
            var speed1 = 0;
            if (v11.length) {
                var i3;
                for(i3 = 0; i3 < v11.length; i3 += 1){
                    speed1 += Math.pow(v21[i3] - v11[i3], 2);
                }
                speed1 = Math.sqrt(speed1) * 100;
            } else {
                speed1 = 0;
            }
            return speed1;
        }
        function getVelocityAtTime1(frameNum1) {
            if (this.vel !== undefined) {
                return this.vel;
            }
            var delta1 = -0.001; // frameNum += this.elem.data.st;
            var v11 = this.getValueAtTime(frameNum1);
            var v21 = this.getValueAtTime(frameNum1 + delta1);
            var velocity1;
            if (v11.length) {
                velocity1 = createTypedArray("float32", v11.length);
                var i3;
                for(i3 = 0; i3 < v11.length; i3 += 1){
                    // removing frameRate
                    // if needed, don't add it here
                    // velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
                    velocity1[i3] = (v21[i3] - v11[i3]) / delta1;
                }
            } else {
                velocity1 = (v21 - v11) / delta1;
            }
            return velocity1;
        }
        function getStaticValueAtTime1() {
            return this.pv;
        }
        function setGroupProperty1(propertyGroup1) {
            this.propertyGroup = propertyGroup1;
        }
        return {
            searchExpressions: searchExpressions1,
            getSpeedAtTime: getSpeedAtTime1,
            getVelocityAtTime: getVelocityAtTime1,
            getValueAtTime: getValueAtTime1,
            getStaticValueAtTime: getStaticValueAtTime1,
            setGroupProperty: setGroupProperty1
        };
    }();
    function addPropertyDecorator() {
        function loopOut1(type1, duration1, durationFlag1) {
            if (!this.k || !this.keyframes) {
                return this.pv;
            }
            type1 = type1 ? type1.toLowerCase() : "";
            var currentFrame1 = this.comp.renderedFrame;
            var keyframes1 = this.keyframes;
            var lastKeyFrame1 = keyframes1[keyframes1.length - 1].t;
            if (currentFrame1 <= lastKeyFrame1) {
                return this.pv;
            }
            var cycleDuration1;
            var firstKeyFrame1;
            if (!durationFlag1) {
                if (!duration1 || duration1 > keyframes1.length - 1) {
                    duration1 = keyframes1.length - 1;
                }
                firstKeyFrame1 = keyframes1[keyframes1.length - 1 - duration1].t;
                cycleDuration1 = lastKeyFrame1 - firstKeyFrame1;
            } else {
                if (!duration1) {
                    cycleDuration1 = Math.max(0, lastKeyFrame1 - this.elem.data.ip);
                } else {
                    cycleDuration1 = Math.abs(lastKeyFrame1 - this.elem.comp.globalData.frameRate * duration1);
                }
                firstKeyFrame1 = lastKeyFrame1 - cycleDuration1;
            }
            var i3;
            var len1;
            var ret1;
            if (type1 === "pingpong") {
                var iterations1 = Math.floor((currentFrame1 - firstKeyFrame1) / cycleDuration1);
                if (iterations1 % 2 !== 0) {
                    return this.getValueAtTime((cycleDuration1 - (currentFrame1 - firstKeyFrame1) % cycleDuration1 + firstKeyFrame1) / this.comp.globalData.frameRate, 0); // eslint-disable-line
                }
            } else if (type1 === "offset") {
                var initV1 = this.getValueAtTime(firstKeyFrame1 / this.comp.globalData.frameRate, 0);
                var endV1 = this.getValueAtTime(lastKeyFrame1 / this.comp.globalData.frameRate, 0);
                var current1 = this.getValueAtTime(((currentFrame1 - firstKeyFrame1) % cycleDuration1 + firstKeyFrame1) / this.comp.globalData.frameRate, 0); // eslint-disable-line
                var repeats1 = Math.floor((currentFrame1 - firstKeyFrame1) / cycleDuration1);
                if (this.pv.length) {
                    ret1 = new Array(initV1.length);
                    len1 = ret1.length;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        ret1[i3] = (endV1[i3] - initV1[i3]) * repeats1 + current1[i3];
                    }
                    return ret1;
                }
                return (endV1 - initV1) * repeats1 + current1;
            } else if (type1 === "continue") {
                var lastValue1 = this.getValueAtTime(lastKeyFrame1 / this.comp.globalData.frameRate, 0);
                var nextLastValue1 = this.getValueAtTime((lastKeyFrame1 - 0.001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                    ret1 = new Array(lastValue1.length);
                    len1 = ret1.length;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        ret1[i3] = lastValue1[i3] + (lastValue1[i3] - nextLastValue1[i3]) * ((currentFrame1 - lastKeyFrame1) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
                    }
                    return ret1;
                }
                return lastValue1 + (lastValue1 - nextLastValue1) * ((currentFrame1 - lastKeyFrame1) / 0.001);
            }
            return this.getValueAtTime(((currentFrame1 - firstKeyFrame1) % cycleDuration1 + firstKeyFrame1) / this.comp.globalData.frameRate, 0); // eslint-disable-line
        }
        function loopIn1(type1, duration1, durationFlag1) {
            if (!this.k) {
                return this.pv;
            }
            type1 = type1 ? type1.toLowerCase() : "";
            var currentFrame1 = this.comp.renderedFrame;
            var keyframes1 = this.keyframes;
            var firstKeyFrame1 = keyframes1[0].t;
            if (currentFrame1 >= firstKeyFrame1) {
                return this.pv;
            }
            var cycleDuration1;
            var lastKeyFrame1;
            if (!durationFlag1) {
                if (!duration1 || duration1 > keyframes1.length - 1) {
                    duration1 = keyframes1.length - 1;
                }
                lastKeyFrame1 = keyframes1[duration1].t;
                cycleDuration1 = lastKeyFrame1 - firstKeyFrame1;
            } else {
                if (!duration1) {
                    cycleDuration1 = Math.max(0, this.elem.data.op - firstKeyFrame1);
                } else {
                    cycleDuration1 = Math.abs(this.elem.comp.globalData.frameRate * duration1);
                }
                lastKeyFrame1 = firstKeyFrame1 + cycleDuration1;
            }
            var i3;
            var len1;
            var ret1;
            if (type1 === "pingpong") {
                var iterations1 = Math.floor((firstKeyFrame1 - currentFrame1) / cycleDuration1);
                if (iterations1 % 2 === 0) {
                    return this.getValueAtTime(((firstKeyFrame1 - currentFrame1) % cycleDuration1 + firstKeyFrame1) / this.comp.globalData.frameRate, 0); // eslint-disable-line
                }
            } else if (type1 === "offset") {
                var initV1 = this.getValueAtTime(firstKeyFrame1 / this.comp.globalData.frameRate, 0);
                var endV1 = this.getValueAtTime(lastKeyFrame1 / this.comp.globalData.frameRate, 0);
                var current1 = this.getValueAtTime((cycleDuration1 - (firstKeyFrame1 - currentFrame1) % cycleDuration1 + firstKeyFrame1) / this.comp.globalData.frameRate, 0);
                var repeats1 = Math.floor((firstKeyFrame1 - currentFrame1) / cycleDuration1) + 1;
                if (this.pv.length) {
                    ret1 = new Array(initV1.length);
                    len1 = ret1.length;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        ret1[i3] = current1[i3] - (endV1[i3] - initV1[i3]) * repeats1;
                    }
                    return ret1;
                }
                return current1 - (endV1 - initV1) * repeats1;
            } else if (type1 === "continue") {
                var firstValue1 = this.getValueAtTime(firstKeyFrame1 / this.comp.globalData.frameRate, 0);
                var nextFirstValue1 = this.getValueAtTime((firstKeyFrame1 + 0.001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                    ret1 = new Array(firstValue1.length);
                    len1 = ret1.length;
                    for(i3 = 0; i3 < len1; i3 += 1){
                        ret1[i3] = firstValue1[i3] + (firstValue1[i3] - nextFirstValue1[i3]) * (firstKeyFrame1 - currentFrame1) / 0.001;
                    }
                    return ret1;
                }
                return firstValue1 + (firstValue1 - nextFirstValue1) * (firstKeyFrame1 - currentFrame1) / 0.001;
            }
            return this.getValueAtTime((cycleDuration1 - ((firstKeyFrame1 - currentFrame1) % cycleDuration1 + firstKeyFrame1)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
        }
        function smooth1(width1, samples1) {
            if (!this.k) {
                return this.pv;
            }
            width1 = (width1 || 0.4) * 0.5;
            samples1 = Math.floor(samples1 || 5);
            if (samples1 <= 1) {
                return this.pv;
            }
            var currentTime1 = this.comp.renderedFrame / this.comp.globalData.frameRate;
            var initFrame1 = currentTime1 - width1;
            var endFrame1 = currentTime1 + width1;
            var sampleFrequency1 = samples1 > 1 ? (endFrame1 - initFrame1) / (samples1 - 1) : 1;
            var i3 = 0;
            var j3 = 0;
            var value3;
            if (this.pv.length) {
                value3 = createTypedArray("float32", this.pv.length);
            } else {
                value3 = 0;
            }
            var sampleValue1;
            while(i3 < samples1){
                sampleValue1 = this.getValueAtTime(initFrame1 + i3 * sampleFrequency1);
                if (this.pv.length) {
                    for(j3 = 0; j3 < this.pv.length; j3 += 1){
                        value3[j3] += sampleValue1[j3];
                    }
                } else {
                    value3 += sampleValue1;
                }
                i3 += 1;
            }
            if (this.pv.length) {
                for(j3 = 0; j3 < this.pv.length; j3 += 1){
                    value3[j3] /= samples1;
                }
            } else {
                value3 /= samples1;
            }
            return value3;
        }
        function getTransformValueAtTime1(time1) {
            if (!this._transformCachingAtTime) {
                this._transformCachingAtTime = {
                    v: new Matrix()
                };
            } /// /
            var matrix1 = this._transformCachingAtTime.v;
            matrix1.cloneFromProps(this.pre.props);
            if (this.appliedTransformations < 1) {
                var anchor1 = this.a.getValueAtTime(time1);
                matrix1.translate(-anchor1[0] * this.a.mult, -anchor1[1] * this.a.mult, anchor1[2] * this.a.mult);
            }
            if (this.appliedTransformations < 2) {
                var scale2 = this.s.getValueAtTime(time1);
                matrix1.scale(scale2[0] * this.s.mult, scale2[1] * this.s.mult, scale2[2] * this.s.mult);
            }
            if (this.sk && this.appliedTransformations < 3) {
                var skew1 = this.sk.getValueAtTime(time1);
                var skewAxis1 = this.sa.getValueAtTime(time1);
                matrix1.skewFromAxis(-skew1 * this.sk.mult, skewAxis1 * this.sa.mult);
            }
            if (this.r && this.appliedTransformations < 4) {
                var rotation1 = this.r.getValueAtTime(time1);
                matrix1.rotate(-rotation1 * this.r.mult);
            } else if (!this.r && this.appliedTransformations < 4) {
                var rotationZ1 = this.rz.getValueAtTime(time1);
                var rotationY1 = this.ry.getValueAtTime(time1);
                var rotationX1 = this.rx.getValueAtTime(time1);
                var orientation1 = this.or.getValueAtTime(time1);
                matrix1.rotateZ(-rotationZ1 * this.rz.mult).rotateY(rotationY1 * this.ry.mult).rotateX(rotationX1 * this.rx.mult).rotateZ(-orientation1[2] * this.or.mult).rotateY(orientation1[1] * this.or.mult).rotateX(orientation1[0] * this.or.mult);
            }
            if (this.data.p && this.data.p.s) {
                var positionX1 = this.px.getValueAtTime(time1);
                var positionY1 = this.py.getValueAtTime(time1);
                if (this.data.p.z) {
                    var positionZ1 = this.pz.getValueAtTime(time1);
                    matrix1.translate(positionX1 * this.px.mult, positionY1 * this.py.mult, -positionZ1 * this.pz.mult);
                } else {
                    matrix1.translate(positionX1 * this.px.mult, positionY1 * this.py.mult, 0);
                }
            } else {
                var position1 = this.p.getValueAtTime(time1);
                matrix1.translate(position1[0] * this.p.mult, position1[1] * this.p.mult, -position1[2] * this.p.mult);
            }
            return matrix1; /// /
        }
        function getTransformStaticValueAtTime1() {
            return this.v.clone(new Matrix());
        }
        var getTransformProperty1 = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(elem3, data1, container1) {
            var prop1 = getTransformProperty1(elem3, data1, container1);
            if (prop1.dynamicProperties.length) {
                prop1.getValueAtTime = getTransformValueAtTime1.bind(prop1);
            } else {
                prop1.getValueAtTime = getTransformStaticValueAtTime1.bind(prop1);
            }
            prop1.setGroupProperty = expressionHelpers.setGroupProperty;
            return prop1;
        };
        var propertyGetProp1 = PropertyFactory.getProp;
        PropertyFactory.getProp = function(elem3, data1, type1, mult1, container1) {
            var prop1 = propertyGetProp1(elem3, data1, type1, mult1, container1); // prop.getVelocityAtTime = getVelocityAtTime;
            // prop.loopOut = loopOut;
            // prop.loopIn = loopIn;
            if (prop1.kf) {
                prop1.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop1);
            } else {
                prop1.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop1);
            }
            prop1.setGroupProperty = expressionHelpers.setGroupProperty;
            prop1.loopOut = loopOut1;
            prop1.loopIn = loopIn1;
            prop1.smooth = smooth1;
            prop1.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop1);
            prop1.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop1);
            prop1.numKeys = data1.a === 1 ? data1.k.length : 0;
            prop1.propertyIndex = data1.ix;
            var value3 = 0;
            if (type1 !== 0) {
                value3 = createTypedArray("float32", data1.a === 1 ? data1.k[0].s.length : data1.k.length);
            }
            prop1._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: value3
            };
            expressionHelpers.searchExpressions(elem3, data1, prop1);
            if (prop1.k) {
                container1.addDynamicProperty(prop1);
            }
            return prop1;
        };
        function getShapeValueAtTime1(frameNum1) {
            // For now this caching object is created only when needed instead of creating it when the shape is initialized.
            if (!this._cachingAtTime) {
                this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                };
            }
            frameNum1 *= this.elem.globalData.frameRate;
            frameNum1 -= this.offsetTime;
            if (frameNum1 !== this._cachingAtTime.lastTime) {
                this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum1 ? this._caching.lastIndex : 0;
                this._cachingAtTime.lastTime = frameNum1;
                this.interpolateShape(frameNum1, this._cachingAtTime.shapeValue, this._cachingAtTime);
            }
            return this._cachingAtTime.shapeValue;
        }
        var ShapePropertyConstructorFunction1 = ShapePropertyFactory.getConstructorFunction();
        var KeyframedShapePropertyConstructorFunction1 = ShapePropertyFactory.getKeyframedConstructorFunction();
        function ShapeExpressions1() {}
        ShapeExpressions1.prototype = {
            vertices: function vertices1(prop1, time1) {
                if (this.k) {
                    this.getValue();
                }
                var shapePath1 = this.v;
                if (time1 !== undefined) {
                    shapePath1 = this.getValueAtTime(time1, 0);
                }
                var i3;
                var len1 = shapePath1._length;
                var vertices1 = shapePath1[prop1];
                var points1 = shapePath1.v;
                var arr3 = createSizedArray(len1);
                for(i3 = 0; i3 < len1; i3 += 1){
                    if (prop1 === "i" || prop1 === "o") {
                        arr3[i3] = [
                            vertices1[i3][0] - points1[i3][0],
                            vertices1[i3][1] - points1[i3][1]
                        ];
                    } else {
                        arr3[i3] = [
                            vertices1[i3][0],
                            vertices1[i3][1]
                        ];
                    }
                }
                return arr3;
            },
            points: function points1(time1) {
                return this.vertices("v", time1);
            },
            inTangents: function inTangents1(time1) {
                return this.vertices("i", time1);
            },
            outTangents: function outTangents1(time1) {
                return this.vertices("o", time1);
            },
            isClosed: function isClosed1() {
                return this.v.c;
            },
            pointOnPath: function pointOnPath1(perc1, time1) {
                var shapePath1 = this.v;
                if (time1 !== undefined) {
                    shapePath1 = this.getValueAtTime(time1, 0);
                }
                if (!this._segmentsLength) {
                    this._segmentsLength = bez.getSegmentsLength(shapePath1);
                }
                var segmentsLength1 = this._segmentsLength;
                var lengths1 = segmentsLength1.lengths;
                var lengthPos1 = segmentsLength1.totalLength * perc1;
                var i3 = 0;
                var len1 = lengths1.length;
                var accumulatedLength1 = 0;
                var pt5;
                while(i3 < len1){
                    if (accumulatedLength1 + lengths1[i3].addedLength > lengthPos1) {
                        var initIndex1 = i3;
                        var endIndex1 = shapePath1.c && i3 === len1 - 1 ? 0 : i3 + 1;
                        var segmentPerc1 = (lengthPos1 - accumulatedLength1) / lengths1[i3].addedLength;
                        pt5 = bez.getPointInSegment(shapePath1.v[initIndex1], shapePath1.v[endIndex1], shapePath1.o[initIndex1], shapePath1.i[endIndex1], segmentPerc1, lengths1[i3]);
                        break;
                    } else {
                        accumulatedLength1 += lengths1[i3].addedLength;
                    }
                    i3 += 1;
                }
                if (!pt5) {
                    pt5 = shapePath1.c ? [
                        shapePath1.v[0][0],
                        shapePath1.v[0][1]
                    ] : [
                        shapePath1.v[shapePath1._length - 1][0],
                        shapePath1.v[shapePath1._length - 1][1]
                    ];
                }
                return pt5;
            },
            vectorOnPath: function vectorOnPath1(perc1, time1, vectorType1) {
                // perc doesn't use triple equality because it can be a Number object as well as a primitive.
                if (perc1 == 1) {
                    // eslint-disable-line eqeqeq
                    perc1 = this.v.c;
                } else if (perc1 == 0) {
                    // eslint-disable-line eqeqeq
                    perc1 = 0.999;
                }
                var pt11 = this.pointOnPath(perc1, time1);
                var pt21 = this.pointOnPath(perc1 + 0.001, time1);
                var xLength1 = pt21[0] - pt11[0];
                var yLength1 = pt21[1] - pt11[1];
                var magnitude1 = Math.sqrt(Math.pow(xLength1, 2) + Math.pow(yLength1, 2));
                if (magnitude1 === 0) {
                    return [
                        0,
                        0
                    ];
                }
                var unitVector1 = vectorType1 === "tangent" ? [
                    xLength1 / magnitude1,
                    yLength1 / magnitude1
                ] : [
                    -yLength1 / magnitude1,
                    xLength1 / magnitude1
                ];
                return unitVector1;
            },
            tangentOnPath: function tangentOnPath1(perc1, time1) {
                return this.vectorOnPath(perc1, time1, "tangent");
            },
            normalOnPath: function normalOnPath1(perc1, time1) {
                return this.vectorOnPath(perc1, time1, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
        };
        extendPrototype([
            ShapeExpressions1
        ], ShapePropertyConstructorFunction1);
        extendPrototype([
            ShapeExpressions1
        ], KeyframedShapePropertyConstructorFunction1);
        KeyframedShapePropertyConstructorFunction1.prototype.getValueAtTime = getShapeValueAtTime1;
        KeyframedShapePropertyConstructorFunction1.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var propertyGetShapeProp1 = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(elem3, data1, type1, arr3, trims1) {
            var prop1 = propertyGetShapeProp1(elem3, data1, type1, arr3, trims1);
            prop1.propertyIndex = data1.ix;
            prop1.lock = false;
            if (type1 === 3) {
                expressionHelpers.searchExpressions(elem3, data1.pt, prop1);
            } else if (type1 === 4) {
                expressionHelpers.searchExpressions(elem3, data1.ks, prop1);
            }
            if (prop1.k) {
                elem3.addDynamicProperty(prop1);
            }
            return prop1;
        };
    }
    function initialize$1() {
        addPropertyDecorator();
    }
    function addDecorator() {
        function searchExpressions1() {
            if (this.data.d.x) {
                this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
                this.addEffect(this.getExpressionValue.bind(this));
                return true;
            }
            return null;
        }
        TextProperty.prototype.getExpressionValue = function(currentValue1, text1) {
            var newValue1 = this.calculateExpression(text1);
            if (currentValue1.t !== newValue1) {
                var newData1 = {};
                this.copyData(newData1, currentValue1);
                newData1.t = newValue1.toString();
                newData1.__complete = false;
                return newData1;
            }
            return currentValue1;
        };
        TextProperty.prototype.searchProperty = function() {
            var isKeyframed1 = this.searchKeyframes();
            var hasExpressions1 = this.searchExpressions();
            this.kf = isKeyframed1 || hasExpressions1;
            return this.kf;
        };
        TextProperty.prototype.searchExpressions = searchExpressions1;
    }
    function initialize() {
        addDecorator();
    }
    function SVGComposableEffect() {}
    SVGComposableEffect.prototype = {
        createMergeNode: function createMergeNode1(resultId1, ins1) {
            var feMerge1 = createNS("feMerge");
            feMerge1.setAttribute("result", resultId1);
            var feMergeNode1;
            var i3;
            for(i3 = 0; i3 < ins1.length; i3 += 1){
                feMergeNode1 = createNS("feMergeNode");
                feMergeNode1.setAttribute("in", ins1[i3]);
                feMerge1.appendChild(feMergeNode1);
                feMerge1.appendChild(feMergeNode1);
            }
            return feMerge1;
        }
    };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(filter1, filterManager1, elem3, id1, source1) {
        this.filterManager = filterManager1;
        var feColorMatrix1 = createNS("feColorMatrix");
        feColorMatrix1.setAttribute("type", "matrix");
        feColorMatrix1.setAttribute("color-interpolation-filters", "linearRGB");
        feColorMatrix1.setAttribute("values", linearFilterValue + " 1 0");
        this.linearFilter = feColorMatrix1;
        feColorMatrix1.setAttribute("result", id1 + "_tint_1");
        filter1.appendChild(feColorMatrix1);
        feColorMatrix1 = createNS("feColorMatrix");
        feColorMatrix1.setAttribute("type", "matrix");
        feColorMatrix1.setAttribute("color-interpolation-filters", "sRGB");
        feColorMatrix1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
        feColorMatrix1.setAttribute("result", id1 + "_tint_2");
        filter1.appendChild(feColorMatrix1);
        this.matrixFilter = feColorMatrix1;
        var feMerge1 = this.createMergeNode(id1, [
            source1,
            id1 + "_tint_1",
            id1 + "_tint_2"
        ]);
        filter1.appendChild(feMerge1);
    }
    extendPrototype([
        SVGComposableEffect
    ], SVGTintFilter);
    SVGTintFilter.prototype.renderFrame = function(forceRender1) {
        if (forceRender1 || this.filterManager._mdf) {
            var colorBlack1 = this.filterManager.effectElements[0].p.v;
            var colorWhite1 = this.filterManager.effectElements[1].p.v;
            var opacity1 = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + opacity1 + " 0");
            this.matrixFilter.setAttribute("values", colorWhite1[0] - colorBlack1[0] + " 0 0 0 " + colorBlack1[0] + " " + (colorWhite1[1] - colorBlack1[1]) + " 0 0 0 " + colorBlack1[1] + " " + (colorWhite1[2] - colorBlack1[2]) + " 0 0 0 " + colorBlack1[2] + " 0 0 0 1 0");
        }
    };
    function SVGFillFilter(filter1, filterManager1, elem3, id1) {
        this.filterManager = filterManager1;
        var feColorMatrix1 = createNS("feColorMatrix");
        feColorMatrix1.setAttribute("type", "matrix");
        feColorMatrix1.setAttribute("color-interpolation-filters", "sRGB");
        feColorMatrix1.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0");
        feColorMatrix1.setAttribute("result", id1);
        filter1.appendChild(feColorMatrix1);
        this.matrixFilter = feColorMatrix1;
    }
    SVGFillFilter.prototype.renderFrame = function(forceRender1) {
        if (forceRender1 || this.filterManager._mdf) {
            var color4 = this.filterManager.effectElements[2].p.v;
            var opacity1 = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + color4[0] + " 0 0 0 0 " + color4[1] + " 0 0 0 0 " + color4[2] + " 0 0 0 " + opacity1 + " 0");
        }
    };
    function SVGStrokeEffect(fil1, filterManager1, elem3) {
        this.initialized = false;
        this.filterManager = filterManager1;
        this.elem = elem3;
        this.paths = [];
    }
    SVGStrokeEffect.prototype.initialize = function() {
        var elemChildren1 = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        var path1;
        var groupPath1;
        var i3;
        var len1;
        if (this.filterManager.effectElements[1].p.v === 1) {
            len1 = this.elem.maskManager.masksProperties.length;
            i3 = 0;
        } else {
            i3 = this.filterManager.effectElements[0].p.v - 1;
            len1 = i3 + 1;
        }
        groupPath1 = createNS("g");
        groupPath1.setAttribute("fill", "none");
        groupPath1.setAttribute("stroke-linecap", "round");
        groupPath1.setAttribute("stroke-dashoffset", 1);
        for(i3; i3 < len1; i3 += 1){
            path1 = createNS("path");
            groupPath1.appendChild(path1);
            this.paths.push({
                p: path1,
                m: i3
            });
        }
        if (this.filterManager.effectElements[10].p.v === 3) {
            var mask1 = createNS("mask");
            var id1 = createElementID();
            mask1.setAttribute("id", id1);
            mask1.setAttribute("mask-type", "alpha");
            mask1.appendChild(groupPath1);
            this.elem.globalData.defs.appendChild(mask1);
            var g3 = createNS("g");
            g3.setAttribute("mask", "url(" + getLocationHref() + "#" + id1 + ")");
            while(elemChildren1[0]){
                g3.appendChild(elemChildren1[0]);
            }
            this.elem.layerElement.appendChild(g3);
            this.masker = mask1;
            groupPath1.setAttribute("stroke", "#fff");
        } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (this.filterManager.effectElements[10].p.v === 2) {
                elemChildren1 = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                while(elemChildren1.length){
                    this.elem.layerElement.removeChild(elemChildren1[0]);
                }
            }
            this.elem.layerElement.appendChild(groupPath1);
            this.elem.layerElement.removeAttribute("mask");
            groupPath1.setAttribute("stroke", "#fff");
        }
        this.initialized = true;
        this.pathMasker = groupPath1;
    };
    SVGStrokeEffect.prototype.renderFrame = function(forceRender1) {
        if (!this.initialized) {
            this.initialize();
        }
        var i3;
        var len1 = this.paths.length;
        var mask1;
        var path1;
        for(i3 = 0; i3 < len1; i3 += 1){
            if (this.paths[i3].m !== -1) {
                mask1 = this.elem.maskManager.viewData[this.paths[i3].m];
                path1 = this.paths[i3].p;
                if (forceRender1 || this.filterManager._mdf || mask1.prop._mdf) {
                    path1.setAttribute("d", mask1.lastPath);
                }
                if (forceRender1 || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask1.prop._mdf) {
                    var dasharrayValue1;
                    if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                        var s4 = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
                        var e3 = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
                        var l3 = path1.getTotalLength();
                        dasharrayValue1 = "0 0 0 " + l3 * s4 + " ";
                        var lineLength1 = l3 * (e3 - s4);
                        var segment1 = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
                        var units1 = Math.floor(lineLength1 / segment1);
                        var j3;
                        for(j3 = 0; j3 < units1; j3 += 1){
                            dasharrayValue1 += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                        }
                        dasharrayValue1 += "0 " + l3 * 10 + " 0 0";
                    } else {
                        dasharrayValue1 = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
                    }
                    path1.setAttribute("stroke-dasharray", dasharrayValue1);
                }
            }
        }
        if (forceRender1 || this.filterManager.effectElements[4].p._mdf) {
            this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2);
        }
        if (forceRender1 || this.filterManager.effectElements[6].p._mdf) {
            this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v);
        }
        if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
            if (forceRender1 || this.filterManager.effectElements[3].p._mdf) {
                var color4 = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(color4[0] * 255) + "," + bmFloor(color4[1] * 255) + "," + bmFloor(color4[2] * 255) + ")");
            }
        }
    };
    function SVGTritoneFilter(filter1, filterManager1, elem3, id1) {
        this.filterManager = filterManager1;
        var feColorMatrix1 = createNS("feColorMatrix");
        feColorMatrix1.setAttribute("type", "matrix");
        feColorMatrix1.setAttribute("color-interpolation-filters", "linearRGB");
        feColorMatrix1.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0");
        filter1.appendChild(feColorMatrix1);
        var feComponentTransfer1 = createNS("feComponentTransfer");
        feComponentTransfer1.setAttribute("color-interpolation-filters", "sRGB");
        feComponentTransfer1.setAttribute("result", id1);
        this.matrixFilter = feComponentTransfer1;
        var feFuncR1 = createNS("feFuncR");
        feFuncR1.setAttribute("type", "table");
        feComponentTransfer1.appendChild(feFuncR1);
        this.feFuncR = feFuncR1;
        var feFuncG1 = createNS("feFuncG");
        feFuncG1.setAttribute("type", "table");
        feComponentTransfer1.appendChild(feFuncG1);
        this.feFuncG = feFuncG1;
        var feFuncB1 = createNS("feFuncB");
        feFuncB1.setAttribute("type", "table");
        feComponentTransfer1.appendChild(feFuncB1);
        this.feFuncB = feFuncB1;
        filter1.appendChild(feComponentTransfer1);
    }
    SVGTritoneFilter.prototype.renderFrame = function(forceRender1) {
        if (forceRender1 || this.filterManager._mdf) {
            var color11 = this.filterManager.effectElements[0].p.v;
            var color21 = this.filterManager.effectElements[1].p.v;
            var color31 = this.filterManager.effectElements[2].p.v;
            var tableR1 = color31[0] + " " + color21[0] + " " + color11[0];
            var tableG1 = color31[1] + " " + color21[1] + " " + color11[1];
            var tableB1 = color31[2] + " " + color21[2] + " " + color11[2];
            this.feFuncR.setAttribute("tableValues", tableR1);
            this.feFuncG.setAttribute("tableValues", tableG1);
            this.feFuncB.setAttribute("tableValues", tableB1);
        }
    };
    function SVGProLevelsFilter(filter1, filterManager1, elem3, id1) {
        this.filterManager = filterManager1;
        var effectElements1 = this.filterManager.effectElements;
        var feComponentTransfer1 = createNS("feComponentTransfer"); // Red
        if (effectElements1[10].p.k || effectElements1[10].p.v !== 0 || effectElements1[11].p.k || effectElements1[11].p.v !== 1 || effectElements1[12].p.k || effectElements1[12].p.v !== 1 || effectElements1[13].p.k || effectElements1[13].p.v !== 0 || effectElements1[14].p.k || effectElements1[14].p.v !== 1) {
            this.feFuncR = this.createFeFunc("feFuncR", feComponentTransfer1);
        } // Green
        if (effectElements1[17].p.k || effectElements1[17].p.v !== 0 || effectElements1[18].p.k || effectElements1[18].p.v !== 1 || effectElements1[19].p.k || effectElements1[19].p.v !== 1 || effectElements1[20].p.k || effectElements1[20].p.v !== 0 || effectElements1[21].p.k || effectElements1[21].p.v !== 1) {
            this.feFuncG = this.createFeFunc("feFuncG", feComponentTransfer1);
        } // Blue
        if (effectElements1[24].p.k || effectElements1[24].p.v !== 0 || effectElements1[25].p.k || effectElements1[25].p.v !== 1 || effectElements1[26].p.k || effectElements1[26].p.v !== 1 || effectElements1[27].p.k || effectElements1[27].p.v !== 0 || effectElements1[28].p.k || effectElements1[28].p.v !== 1) {
            this.feFuncB = this.createFeFunc("feFuncB", feComponentTransfer1);
        } // Alpha
        if (effectElements1[31].p.k || effectElements1[31].p.v !== 0 || effectElements1[32].p.k || effectElements1[32].p.v !== 1 || effectElements1[33].p.k || effectElements1[33].p.v !== 1 || effectElements1[34].p.k || effectElements1[34].p.v !== 0 || effectElements1[35].p.k || effectElements1[35].p.v !== 1) {
            this.feFuncA = this.createFeFunc("feFuncA", feComponentTransfer1);
        } // RGB
        if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
            feComponentTransfer1.setAttribute("color-interpolation-filters", "sRGB");
            filter1.appendChild(feComponentTransfer1);
        }
        if (effectElements1[3].p.k || effectElements1[3].p.v !== 0 || effectElements1[4].p.k || effectElements1[4].p.v !== 1 || effectElements1[5].p.k || effectElements1[5].p.v !== 1 || effectElements1[6].p.k || effectElements1[6].p.v !== 0 || effectElements1[7].p.k || effectElements1[7].p.v !== 1) {
            feComponentTransfer1 = createNS("feComponentTransfer");
            feComponentTransfer1.setAttribute("color-interpolation-filters", "sRGB");
            feComponentTransfer1.setAttribute("result", id1);
            filter1.appendChild(feComponentTransfer1);
            this.feFuncRComposed = this.createFeFunc("feFuncR", feComponentTransfer1);
            this.feFuncGComposed = this.createFeFunc("feFuncG", feComponentTransfer1);
            this.feFuncBComposed = this.createFeFunc("feFuncB", feComponentTransfer1);
        }
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(type1, feComponentTransfer1) {
        var feFunc1 = createNS(type1);
        feFunc1.setAttribute("type", "table");
        feComponentTransfer1.appendChild(feFunc1);
        return feFunc1;
    };
    SVGProLevelsFilter.prototype.getTableValue = function(inputBlack1, inputWhite1, gamma1, outputBlack1, outputWhite1) {
        var cnt1 = 0;
        var segments1 = 256;
        var perc1;
        var min1 = Math.min(inputBlack1, inputWhite1);
        var max1 = Math.max(inputBlack1, inputWhite1);
        var table1 = Array.call(null, {
            length: segments1
        });
        var colorValue1;
        var pos1 = 0;
        var outputDelta1 = outputWhite1 - outputBlack1;
        var inputDelta1 = inputWhite1 - inputBlack1;
        while(cnt1 <= 256){
            perc1 = cnt1 / 256;
            if (perc1 <= min1) {
                colorValue1 = inputDelta1 < 0 ? outputWhite1 : outputBlack1;
            } else if (perc1 >= max1) {
                colorValue1 = inputDelta1 < 0 ? outputBlack1 : outputWhite1;
            } else {
                colorValue1 = outputBlack1 + outputDelta1 * Math.pow((perc1 - inputBlack1) / inputDelta1, 1 / gamma1);
            }
            table1[pos1] = colorValue1;
            pos1 += 1;
            cnt1 += 256 / (segments1 - 1);
        }
        return table1.join(" ");
    };
    SVGProLevelsFilter.prototype.renderFrame = function(forceRender1) {
        if (forceRender1 || this.filterManager._mdf) {
            var val3;
            var effectElements1 = this.filterManager.effectElements;
            if (this.feFuncRComposed && (forceRender1 || effectElements1[3].p._mdf || effectElements1[4].p._mdf || effectElements1[5].p._mdf || effectElements1[6].p._mdf || effectElements1[7].p._mdf)) {
                val3 = this.getTableValue(effectElements1[3].p.v, effectElements1[4].p.v, effectElements1[5].p.v, effectElements1[6].p.v, effectElements1[7].p.v);
                this.feFuncRComposed.setAttribute("tableValues", val3);
                this.feFuncGComposed.setAttribute("tableValues", val3);
                this.feFuncBComposed.setAttribute("tableValues", val3);
            }
            if (this.feFuncR && (forceRender1 || effectElements1[10].p._mdf || effectElements1[11].p._mdf || effectElements1[12].p._mdf || effectElements1[13].p._mdf || effectElements1[14].p._mdf)) {
                val3 = this.getTableValue(effectElements1[10].p.v, effectElements1[11].p.v, effectElements1[12].p.v, effectElements1[13].p.v, effectElements1[14].p.v);
                this.feFuncR.setAttribute("tableValues", val3);
            }
            if (this.feFuncG && (forceRender1 || effectElements1[17].p._mdf || effectElements1[18].p._mdf || effectElements1[19].p._mdf || effectElements1[20].p._mdf || effectElements1[21].p._mdf)) {
                val3 = this.getTableValue(effectElements1[17].p.v, effectElements1[18].p.v, effectElements1[19].p.v, effectElements1[20].p.v, effectElements1[21].p.v);
                this.feFuncG.setAttribute("tableValues", val3);
            }
            if (this.feFuncB && (forceRender1 || effectElements1[24].p._mdf || effectElements1[25].p._mdf || effectElements1[26].p._mdf || effectElements1[27].p._mdf || effectElements1[28].p._mdf)) {
                val3 = this.getTableValue(effectElements1[24].p.v, effectElements1[25].p.v, effectElements1[26].p.v, effectElements1[27].p.v, effectElements1[28].p.v);
                this.feFuncB.setAttribute("tableValues", val3);
            }
            if (this.feFuncA && (forceRender1 || effectElements1[31].p._mdf || effectElements1[32].p._mdf || effectElements1[33].p._mdf || effectElements1[34].p._mdf || effectElements1[35].p._mdf)) {
                val3 = this.getTableValue(effectElements1[31].p.v, effectElements1[32].p.v, effectElements1[33].p.v, effectElements1[34].p.v, effectElements1[35].p.v);
                this.feFuncA.setAttribute("tableValues", val3);
            }
        }
    };
    function SVGDropShadowEffect(filter1, filterManager1, elem3, id1, source1) {
        var globalFilterSize1 = filterManager1.container.globalData.renderConfig.filterSize;
        var filterSize1 = filterManager1.data.fs || globalFilterSize1;
        filter1.setAttribute("x", filterSize1.x || globalFilterSize1.x);
        filter1.setAttribute("y", filterSize1.y || globalFilterSize1.y);
        filter1.setAttribute("width", filterSize1.width || globalFilterSize1.width);
        filter1.setAttribute("height", filterSize1.height || globalFilterSize1.height);
        this.filterManager = filterManager1;
        var feGaussianBlur1 = createNS("feGaussianBlur");
        feGaussianBlur1.setAttribute("in", "SourceAlpha");
        feGaussianBlur1.setAttribute("result", id1 + "_drop_shadow_1");
        feGaussianBlur1.setAttribute("stdDeviation", "0");
        this.feGaussianBlur = feGaussianBlur1;
        filter1.appendChild(feGaussianBlur1);
        var feOffset1 = createNS("feOffset");
        feOffset1.setAttribute("dx", "25");
        feOffset1.setAttribute("dy", "0");
        feOffset1.setAttribute("in", id1 + "_drop_shadow_1");
        feOffset1.setAttribute("result", id1 + "_drop_shadow_2");
        this.feOffset = feOffset1;
        filter1.appendChild(feOffset1);
        var feFlood1 = createNS("feFlood");
        feFlood1.setAttribute("flood-color", "#00ff00");
        feFlood1.setAttribute("flood-opacity", "1");
        feFlood1.setAttribute("result", id1 + "_drop_shadow_3");
        this.feFlood = feFlood1;
        filter1.appendChild(feFlood1);
        var feComposite1 = createNS("feComposite");
        feComposite1.setAttribute("in", id1 + "_drop_shadow_3");
        feComposite1.setAttribute("in2", id1 + "_drop_shadow_2");
        feComposite1.setAttribute("operator", "in");
        feComposite1.setAttribute("result", id1 + "_drop_shadow_4");
        filter1.appendChild(feComposite1);
        var feMerge1 = this.createMergeNode(id1, [
            id1 + "_drop_shadow_4",
            source1
        ]);
        filter1.appendChild(feMerge1); //
    }
    extendPrototype([
        SVGComposableEffect
    ], SVGDropShadowEffect);
    SVGDropShadowEffect.prototype.renderFrame = function(forceRender1) {
        if (forceRender1 || this.filterManager._mdf) {
            if (forceRender1 || this.filterManager.effectElements[4].p._mdf) {
                this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4);
            }
            if (forceRender1 || this.filterManager.effectElements[0].p._mdf) {
                var col1 = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(col1[0] * 255), Math.round(col1[1] * 255), Math.round(col1[2] * 255)));
            }
            if (forceRender1 || this.filterManager.effectElements[1].p._mdf) {
                this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255);
            }
            if (forceRender1 || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                var distance1 = this.filterManager.effectElements[3].p.v;
                var angle1 = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
                var x4 = distance1 * Math.cos(angle1);
                var y4 = distance1 * Math.sin(angle1);
                this.feOffset.setAttribute("dx", x4);
                this.feOffset.setAttribute("dy", y4);
            }
        }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(filterElem1, filterManager1, elem3) {
        this.initialized = false;
        this.filterManager = filterManager1;
        this.filterElem = filterElem1;
        this.elem = elem3;
        elem3.matteElement = createNS("g");
        elem3.matteElement.appendChild(elem3.layerElement);
        elem3.matteElement.appendChild(elem3.transformedElement);
        elem3.baseElement = elem3.matteElement;
    }
    SVGMatte3Effect.prototype.findSymbol = function(mask1) {
        var i3 = 0;
        var len1 = _svgMatteSymbols.length;
        while(i3 < len1){
            if (_svgMatteSymbols[i3] === mask1) {
                return _svgMatteSymbols[i3];
            }
            i3 += 1;
        }
        return null;
    };
    SVGMatte3Effect.prototype.replaceInParent = function(mask1, symbolId1) {
        var parentNode1 = mask1.layerElement.parentNode;
        if (!parentNode1) {
            return;
        }
        var children1 = parentNode1.children;
        var i3 = 0;
        var len1 = children1.length;
        while(i3 < len1){
            if (children1[i3] === mask1.layerElement) {
                break;
            }
            i3 += 1;
        }
        var nextChild1;
        if (i3 <= len1 - 2) {
            nextChild1 = children1[i3 + 1];
        }
        var useElem1 = createNS("use");
        useElem1.setAttribute("href", "#" + symbolId1);
        if (nextChild1) {
            parentNode1.insertBefore(useElem1, nextChild1);
        } else {
            parentNode1.appendChild(useElem1);
        }
    };
    SVGMatte3Effect.prototype.setElementAsMask = function(elem3, mask1) {
        if (!this.findSymbol(mask1)) {
            var symbolId1 = createElementID();
            var masker1 = createNS("mask");
            masker1.setAttribute("id", mask1.layerId);
            masker1.setAttribute("mask-type", "alpha");
            _svgMatteSymbols.push(mask1);
            var defs1 = elem3.globalData.defs;
            defs1.appendChild(masker1);
            var symbol1 = createNS("symbol");
            symbol1.setAttribute("id", symbolId1);
            this.replaceInParent(mask1, symbolId1);
            symbol1.appendChild(mask1.layerElement);
            defs1.appendChild(symbol1);
            var useElem1 = createNS("use");
            useElem1.setAttribute("href", "#" + symbolId1);
            masker1.appendChild(useElem1);
            mask1.data.hd = false;
            mask1.show();
        }
        elem3.setMatte(mask1.layerId);
    };
    SVGMatte3Effect.prototype.initialize = function() {
        var ind1 = this.filterManager.effectElements[0].p.v;
        var elements1 = this.elem.comp.elements;
        var i3 = 0;
        var len1 = elements1.length;
        while(i3 < len1){
            if (elements1[i3] && elements1[i3].data.ind === ind1) {
                this.setElementAsMask(this.elem, elements1[i3]);
            }
            i3 += 1;
        }
        this.initialized = true;
    };
    SVGMatte3Effect.prototype.renderFrame = function() {
        if (!this.initialized) {
            this.initialize();
        }
    };
    function SVGGaussianBlurEffect(filter1, filterManager1, elem3, id1) {
        // Outset the filter region by 100% on all sides to accommodate blur expansion.
        filter1.setAttribute("x", "-100%");
        filter1.setAttribute("y", "-100%");
        filter1.setAttribute("width", "300%");
        filter1.setAttribute("height", "300%");
        this.filterManager = filterManager1;
        var feGaussianBlur1 = createNS("feGaussianBlur");
        feGaussianBlur1.setAttribute("result", id1);
        filter1.appendChild(feGaussianBlur1);
        this.feGaussianBlur = feGaussianBlur1;
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(forceRender1) {
        if (forceRender1 || this.filterManager._mdf) {
            // Empirical value, matching AE's blur appearance.
            var kBlurrinessToSigma1 = 0.3;
            var sigma1 = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma1; // Dimensions mapping:
            //
            //   1 -> horizontal & vertical
            //   2 -> horizontal only
            //   3 -> vertical only
            //
            var dimensions1 = this.filterManager.effectElements[1].p.v;
            var sigmaX1 = dimensions1 == 3 ? 0 : sigma1; // eslint-disable-line eqeqeq
            var sigmaY1 = dimensions1 == 2 ? 0 : sigma1; // eslint-disable-line eqeqeq
            this.feGaussianBlur.setAttribute("stdDeviation", sigmaX1 + " " + sigmaY1); // Repeat edges mapping:
            //
            //   0 -> off -> duplicate
            //   1 -> on  -> wrap
            var edgeMode1 = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate"; // eslint-disable-line eqeqeq
            this.feGaussianBlur.setAttribute("edgeMode", edgeMode1);
        }
    };
    function TransformEffect() {}
    TransformEffect.prototype.init = function(effectsManager1) {
        this.effectsManager = effectsManager1;
        this.type = effectTypes.TRANSFORM_EFFECT;
        this.matrix = new Matrix();
        this.opacity = -1;
        this._mdf = false;
        this._opMdf = false;
    };
    TransformEffect.prototype.renderFrame = function(forceFrame1) {
        this._opMdf = false;
        this._mdf = false;
        if (forceFrame1 || this.effectsManager._mdf) {
            var effectElements1 = this.effectsManager.effectElements;
            var anchor1 = effectElements1[0].p.v;
            var position1 = effectElements1[1].p.v;
            var isUniformScale1 = effectElements1[2].p.v === 1;
            var scaleHeight1 = effectElements1[3].p.v;
            var scaleWidth1 = isUniformScale1 ? scaleHeight1 : effectElements1[4].p.v;
            var skew1 = effectElements1[5].p.v;
            var skewAxis1 = effectElements1[6].p.v;
            var rotation1 = effectElements1[7].p.v;
            this.matrix.reset();
            this.matrix.translate(-anchor1[0], -anchor1[1], anchor1[2]);
            this.matrix.scale(scaleWidth1 * 0.01, scaleHeight1 * 0.01, 1);
            this.matrix.rotate(-rotation1 * degToRads);
            this.matrix.skewFromAxis(-skew1 * degToRads, (skewAxis1 + 90) * degToRads);
            this.matrix.translate(position1[0], position1[1], 0);
            this._mdf = true;
            if (this.opacity !== effectElements1[8].p.v) {
                this.opacity = effectElements1[8].p.v;
                this._opMdf = true;
            }
        }
    };
    function SVGTransformEffect(_1, filterManager1) {
        this.init(filterManager1);
    }
    extendPrototype([
        TransformEffect
    ], SVGTransformEffect);
    function CVTransformEffect(effectsManager1) {
        this.init(effectsManager1);
    }
    extendPrototype([
        TransformEffect
    ], CVTransformEffect);
    registerRenderer("canvas", CanvasRenderer);
    registerRenderer("html", HybridRenderer);
    registerRenderer("svg", SVGRenderer); // Registering shape modifiers
    ShapeModifiers.registerModifier("tm", TrimModifier);
    ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier);
    ShapeModifiers.registerModifier("rp", RepeaterModifier);
    ShapeModifiers.registerModifier("rd", RoundCornersModifier);
    ShapeModifiers.registerModifier("zz", ZigZagModifier);
    ShapeModifiers.registerModifier("op", OffsetPathModifier); // Registering expression plugin
    setExpressionsPlugin(Expressions);
    setExpressionInterfaces(getInterface);
    initialize$1();
    initialize(); // Registering svg effects
    registerEffect$1(20, SVGTintFilter, true);
    registerEffect$1(21, SVGFillFilter, true);
    registerEffect$1(22, SVGStrokeEffect, false);
    registerEffect$1(23, SVGTritoneFilter, true);
    registerEffect$1(24, SVGProLevelsFilter, true);
    registerEffect$1(25, SVGDropShadowEffect, true);
    registerEffect$1(28, SVGMatte3Effect, false);
    registerEffect$1(29, SVGGaussianBlurEffect, true);
    registerEffect$1(35, SVGTransformEffect, false);
    registerEffect(35, CVTransformEffect);
    return lottie;
});


/***/ })

};
;