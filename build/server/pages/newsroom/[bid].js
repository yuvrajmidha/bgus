module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+luA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "react-flickity-component"
var external_react_flickity_component_ = __webpack_require__("ZHLg");
var external_react_flickity_component_default = /*#__PURE__*/__webpack_require__.n(external_react_flickity_component_);

// CONCATENATED MODULE: ./src/pageBuilder/pricing/GPUPricing.jsx
var __jsx = external_react_default.a.createElement;





const GPUS = [{
  name: "V100",
  featureList: ["1 GPUs/Board (Volta)", "5120 CUDA Cores", "640 Tensor Cores", "32GB/16GB HBM2 Memory", "(1,2,4,8,16,32) GB vGPU Profiles", "PCIe 3.0 Dual Slot & SXM2 (rack servers)", "250W/300W", "Passive Thermal", "GRID vPC/vApps, Quadro vDWS Software"]
}, {
  name: "RTX 8000",
  featureList: ["1 GPUs/Board (Turing)", "4608 CUDA Cores", "576 Tensor Cores", "72 RT Cores", "48GB GDDR6 Memory", "(1,2,3,4,6,8,12,16,24,48) GB vGPU Profiles", "PCIe 3.0 Dual Slot ", "295W", "Active Thermal", "Quadro vDWS Software"]
}, {
  name: "RTX 6000",
  featureList: ["1 GPUs/Board (Turing)", "4608 CUDA Cores", "576 Tensor Cores", "72 RT Cores", "24GB GDDR6 Memory", "(1,2,3,4,6,8,12,24) GB vGPU Profiles", "PCIe 3.0 Dual Slot", "295W", "Active Thermal", "Quadro vDWS Software"]
}, {
  name: "P40",
  featureList: ["1 GPUs/Board (Pascal)", "3840 CUDA Cores", "24GB GDDR5 Memory", "(1,2,3,4,6,8,12,24) GB vGPU Profiles", "PCIe 3.0 Dual Slot (rack servers)", "250W", "Passive Thermal", "GRID vPC/vApps, Quadro vDWS Software"]
}, {
  name: "T4",
  featureList: ["1 GPUs/Board (Turing)", "2560 CUDA Cores", "320 Tensor Cores", "40 RT Cores", "16GB GDDR6 Memory", "(1,2,4,8,16) GB vGPU Profiles", "PCIe 3.0 Single Slot (rack servers)", "70W", "Passive Thermal", "GRID vPC/vApps, Quadro vDWS Software"]
}, {
  name: "M10",
  featureList: ["1 GPUs/Board (Maxwell)", "2560 Total CUDA Cores", "32GB GDDR5 Total Memory", "(0.5,1,2,4,8) GB vGPU Profiles", "PCIe 3.0 Dual Slot (rack servers)", "225W", "Passive Thermal", "GRID vPC/vApps, Quadro vDWS Software"]
}, {
  name: "P6",
  featureList: ["1 GPUs/Board (Pascal)", "2048 CUDA Cores", "16GB GDDR5 Memory", "(1,2,4,8,16) GB vGPU Profiles", "MXM (blade servers)", "90W", "Bare Board Thermal", "GRID vPC/vApps, Quadro vDWS Software"]
}];

function Carousel() {
  return __jsx(external_react_flickity_component_default.a, {
    options: {
      initialIndex: 0,
      contain: true,
      pageDots: false
    }
  }, GPUS.map((x, index) => __jsx(react_["Box"], {
    key: index,
    minHeight: "100%",
    transition: "0.3s",
    maxW: "350px",
    width: "100%"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: x.name,
    icon: "/assets/images/icons/theme/gpu.svg",
    featureList: x.featureList
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "GPU As A Service",
    serviceDescription: `GPU : NVIDIA ${x.name}`
  })))));
}

function GPUPricing(props) {
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => setShow(true);

  const [value, setValue] = external_react_default.a.useState(1);

  const handleChange = value => setValue(value);

  const [restorePoints, setRestorePoints] = external_react_default.a.useState("");
  const [geoLocations, setGeoLocations] = external_react_default.a.useState("");
  const [hourlyBackups, setHourlyBackups] = external_react_default.a.useState(false);

  const handleHourlyBackups = hourlyBackups => hourlyBackups ? ",Enabled Hourly Backups" : "";

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Carousel, null));
}

/* harmony default export */ var pricing_GPUPricing = (GPUPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/gpu.jsx

var gpu_jsx = external_react_default.a.createElement;

/* harmony default export */ var gpu = __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/gpuBody.jpg"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Harness the power of GPU",
      titleSize: [28, 28, 28, 32],
      text: gpu_jsx("span", null, "You get direct access to one of the most flexible server-selection processes in the industry and seamless integration. GPU delivers extreme performance and industry-leading hybrid cloud data management capabilities. To provide customer enablement (if required), we can provide tools to detect GPUs and make them available automatically. To maximize this powerful resource's utilization, IT administrators can configure, scale, and allow fine-grained access control of GPU resources to end-users.")
    }]
  }]
}, {
  py: 0,
  gap: 0,
  containerWidth: "100%",
  body: [{
    width: "100%",
    type: "pricing",
    data: gpu_jsx(pricing_GPUPricing, null)
  }]
}, {
  my: 0,
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "BGUS GPU-As-A-Service",
      textAlign: "left",
      fontSize: ["lg", "xl"],
      titleSize: [25, 25, 32],
      my: [2, 4, 8],
      text: "With GPUaaS, you also get access to our AI expertise, extensive training, and technical capabilities that can jump-start your projects. Our dedicated team can assist with prescriptive guidance and design expertise. Our technical team ensures your AI applications are fully supported."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/sending.svg",
        mt: 4,
        title: "Rapid Workspeed"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/clock.svg",
        mt: 4,
        title: "High Availability"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/flower-2.svg",
        mt: 4,
        title: "Varied Usage"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/air-ballon.svg",
        mt: 4,
        title: "Seamless"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/duplicate.svg",
        mt: 4,
        title: "Hybrid Management"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Maximum Utilization"
      }
    }]
  }]
}, {
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 4, 4],
    width: ["70%", "60%", "60%", "33%"],
    type: "imageGroup",
    data: {
      images: ["/assets/images/illustrations/network.svg"],
      px: 4
    }
  }, {
    width: ["100%", "100%", "100%", 2 / 3],
    type: "content",
    data: [{
      title: "GPU: Diversified Applications",
      fontSize: ["lg", "xl"],
      titleSize: [32, 36, 40, 48],
      my: [2, 4, 8],
      text: gpu_jsx(external_react_default.a.Fragment, null, gpu_jsx("span", null, "Graphical Processing Unit does not cater to a single domain. In the present-day scenario, where technology proves to be the backbone of every industry, the importance of GPUs has grown exponentially."), gpu_jsx("br", null), gpu_jsx("br", null), gpu_jsx("span", null, " From refining and mining data to analyzing it. From Scientific Researches to Health Sector. From finance to educational institutions. Graphical Processing Unit has become an essential resource for every industry."), ",")
    }, {
      list: ["Healthcare Services", "Big Data Analytics", "Scientific Research Operations", "Deep Learning and Machine Learning"],
      spacing: 2,
      styleType: "none",
      icon: "check",
      iconColor: "green.500"
    }]
  }]
}]);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "07JK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "OVERVIEW",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "Hosted in NEXTDC and EQUINIX, consisting of 18 UCS Server, C Series & B Series in the farm. Each UCS Server is running ESX version 5.5 with updated VMWARE tools. ",
    textAlign: "justify"
  }, {
    text: "The solution is protected by three layers of firewalls and any traffic coming in & out of the DC being scanned by a different firewall and IPS technologies including Cisco ASA with SourceFire, Palo Alto and Cisco ASA with IPS.",
    textAlign: "justify"
  }, {
    text: "The core of the network exists on a pair of Nexus 93128TX Switches with a high speed Nimble or NetApp Storage. In addition, BGUS hosted solution is offering a hosted Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, so as to support Wireless Phones in any of the client’s environments.",
    textAlign: "justify"
  }, {
    text: "SOLUTION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "The WAN Edge Devices are running in Active/Standby mode and are usually Cisco 2921 Routers. The primary internet-facing device is a Cisco ASA with SourceFire and is configured to provide connectivity to remote workers. All traffic destined for any part of the UC Solution has to traverse through three different layers of firewalls and all traffic activity is being logged using SPLUNK. ",
    textAlign: "justify"
  }, {
    text: "An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data center, SRST will still be able to provide basic inbound and outbound calling facilities. This option is not included in the proposal costs but can be quoted if required.",
    textAlign: "justify"
  }, {
    text: "Any of the networking infrastructure currently deployed in production, have a cold standby in stock with BG Unified Solutions and its supplier.",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "07hB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroup; });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const RadioCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const {
    getInputProps,
    getCheckboxProps
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useRadio"])(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    onClick: props.onClick,
    my: 0,
    as: "label"
  }, __jsx("input", input), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], _extends({}, checkbox, {
    cursor: "pointer",
    borderWidth: "1px",
    borderRadius: "md",
    fontSize: ["13px", "14px", "16px"],
    _checked: {
      bg: 'primary.500',
      color: 'white'
    },
    _focus: {
      boxShadow: 'outline'
    },
    px: 5,
    py: 3
  }), props.children));
});
function RadioGroup(_ref) {
  let {
    name = 'options',
    options,
    defaultIndex,
    setValue,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "options", "defaultIndex", "setValue", "onChange"]);

  const {
    getRootProps,
    getRadioProps
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["useRadioGroup"])({
    name,
    defaultValue: options[defaultIndex]
  });
  const group = getRootProps();
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["HStack"], _extends({
    align: "center"
  }, group), options.map((value, index) => {
    const radio = getRadioProps({
      value: value.render ? value.value : value
    });
    return __jsx(RadioCard, _extends({
      key: index,
      onClick: () => {
        setValue(value.render ? value.value : value);
        if (onChange) onChange();
      },
      key: value.render ? value.value : value
    }, radio), value.render ? value.render : value);
  }));
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "2UJ4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FHnF");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SVG({
  color,
  hex = "#fff",
  size = 12,
  src
}) {
  const {
    colors,
    sizes
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const [c, setColor] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(colors["black"][500]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (color) {
      const col = colors[color.split(".")[0]][color.split(".")[1]] || colors["black"][500];
      setColor(col);
    } else {
      setColor(hex);
    }
  }, [color]);
  return __jsx(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    src: src,
    beforeInjection: svg => {
      svg.setAttribute('style', `fill: ${c};width: ${sizes[size] || size};height:${sizes[size] || size};`);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (SVG);

/***/ }),

/***/ "3Jmb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "An enterprise-level solution for any small to medium size organization with single or multiple sites.",
    textAlign: "justify"
  }, {
    text: "This solution includes:",
    textAlign: "justify"
  }, {
    text: "-A Cisco ASA / PaloAlto Firewall (5512X / 220PA) fully managed by 24x7 NOC. 36 months of warranty support.",
    textAlign: "justify"
  }, {
    text: "-Cisco 3700/3800 Access Points (5) managed centrally by a highly redundant Cisco WLC Infrastructure hosted in multiple DC locations. Corporate wireless included.",
    textAlign: "justify"
  }, {
    text: "-Cisco Switch Stack fully managed by the 24x7 NOC. 36 months of warranty support.",
    textAlign: "justify"
  }, {
    text: "-20 Cisco 7965G handsets for 20 users. 36 months of warranty support.",
    textAlign: "justify"
  }, {
    text: "-Unlimited calls including local, national, mobile, 13, 1300 and 1800.",
    textAlign: "justify"
  }, {
    text: "-DID for 20 users.",
    textAlign: "justify"
  }, {
    text: "-1 x Hosted File Server / Application Server with 8 vCPU's, 8GB RAM and 1TB T1 Storage with Daily Backups. Windows Licenses included.",
    textAlign: "justify"
  }, {
    text: "-U1 x Hosted SQL Server with 12 vCPU's, 16GB RAM and 1TB T1 Storage with Daily Backups. Windows Licenses included.",
    textAlign: "justify"
  }, {
    text: "-5TB T3 Backup Storage.",
    textAlign: "justify"
  }, {
    text: "-Email Filtering for 5 Domains using highly redundant Email Filtering Gateways for unlimited users.",
    textAlign: "justify"
  }, {
    text: "Staying Strong during these hard times..  We are progressing at a rapid rate!!",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EQfX");


/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6dXB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_CloudExchangePricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SJ5o");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Express Routes to Office 365, AWS, Azure, and many more",
  titleStyle: {
    fontSize: ["3xl", "4xl"],
    px: "10px"
  },
  description: "We ensure reliability, integrity, security, as well as scalability for our cloud exchange connectivity solutions. The traffic is not sent over the internet only; instead, the exchange provider connects the exchange’s network directly to the cloud provider’s network. We give you the power to quickly deploy, efficiently monitor, and transparently scale the applications that your business requires to run and interact with customers and partners while also mitigating the risk of security breaches.",
  descriptionStyle: {
    px: [4, 6]
  }
}, {
  title: "Our Pricing Plans",
  my: 0,
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_CloudExchangePricing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)
  }],
  bg: 'light.400'
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  py: 16,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Reliable and Secure",
        description: "Complete security on our end while connecting to these cloud platforms. Improve the experience of users throughout the extended enterprise providing significant benefits and reliability.",
        image: "/assets/images/illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
      }, {
        title: "Scalable",
        description: "Traffic increased or decreased is handled with no difficulty at all. Avoiding vendor lock-in and meeting data-sovereignty requirements. Geo-redundant for improved performance.",
        image: "/assets/images/illustrations/scalabilty.svg"
      }, {
        title: "Integration",
        description: "Simplified usage and integration of new technology services. On-demand communication and connectivity. Multi-cloud operations with a complex structure are handled efficiently.",
        image: "/assets/images/illustrations/sip.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "6rki":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/ContactCenterPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    fontSize: ["13px", "14px", "16px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function ContactCenterPricing(props) {
  const features = ["Includes 5 CSQ", "Connectivity to end customer*", "Complete Call Recording", "On-Demand Call Recording", "Fully Managed Service"];

  const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

  const [planIndex, setPlanIndex] = external_react_default.a.useState(1);
  const [planName, setPlanName] = external_react_default.a.useState("");
  const [RDSType, setRDSType] = external_react_default.a.useState("");
  const [wfm, setWfm] = external_react_default.a.useState(0);
  const [complianceQM, setComplianceQM] = external_react_default.a.useState(0);
  const [advancedQM, setAdvancedQM] = external_react_default.a.useState(0);
  const [failOverNode, setFailOverNode] = external_react_default.a.useState(false);

  const handleFailOverNode = failOverNode => failOverNode ? ",Add Fail-Over Node" : "";

  const [value, setValue] = external_react_default.a.useState(1);

  const handleChange = value => setValue(value);

  const [tbSpace, setTbSpace] = external_react_default.a.useState(1);

  const handleTbSpace = tbSpace => setTbSpace(tbSpace);

  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row no-gutters px-lg-5"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Standard",
    icon: "/assets/images/icons/theme/origami.svg",
    featureList: features
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlanName("CAGENT Standard Plan");
      setPlanIndex(1);
      setWfm(0);
      setAdvancedQM(0);
      setComplianceQM(0);
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Professional",
    icon: "/assets/images/icons/theme/paper-plane.svg",
    featureList: features
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlanName("CAGENT Professional Plan");
      setPlanIndex(2);
      setRDSType("");
      setValue(0);
      setTbSpace(0);
      setFailOverNode(false);
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Business",
    icon: "/assets/images/icons/theme/airplane.svg",
    featureList: features
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlanName("CAGENT Business Plan");
      setPlanIndex(3);
      setRDSType("");
      setValue(0);
      setTbSpace(0);
      setFailOverNode(false);
    }
  }, "View Options")))), __jsx("div", null, __jsx("div", {
    id: "collapse-1"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, planName), __jsx("div", {
    className: "row justify-content-between px-3"
  }, planIndex === 1 && __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "col-lg-10 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Additional CSQ"), __jsx(react_["Slider"], {
    color: "primary",
    my: "24px",
    max: 30,
    defaultValue: 1,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value
  }))), __jsx("div", {
    className: "col-lg-10 offset-lg-1 mt-2"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a type"), __jsx(react_["RadioGroup"], {
    onChange: value => setRDSType(value),
    mt: 4,
    isInline: true
  }, __jsx(CustomRadio, {
    value: ",RDS SERVER WITH CAD"
  }, "RDS SERVER WITH CAD"), __jsx(CustomRadio, {
    value: ",RDS SERVER WITH TOOLS"
  }, "RDS SERVER WITH TOOLS"), __jsx(CustomRadio, {
    value: ",RDS SERVER CALL RECORDING"
  }, "RDS SERVER CALL RECORDING"))), __jsx("div", {
    className: "col-lg-10 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "TB Space"), __jsx(react_["Slider"], {
    color: "primary",
    my: "24px",
    max: 30,
    defaultValue: 1,
    value: tbSpace,
    onChange: handleTbSpace
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: tbSpace
  }))), __jsx("div", {
    className: "my-1 col-lg-10 offset-lg-1 mt-3 d-flex justify-content-between"
  }, __jsx(react_["Flex"], {
    py: "12px",
    justify: "left",
    width: "100%",
    align: "center"
  }, __jsx(react_["Switch"], {
    onChange: e => {
      setFailOverNode(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "failOverNode"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node"
  }, "Add Fail-Over Node")))), (planIndex === 2 || planIndex === 3) && __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "my-1 col-lg-10 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "WFM"), __jsx(react_["Slider"], {
    color: "primary",
    my: "24px",
    defaultValue: 0,
    max: "64",
    value: wfm,
    onChange: setWfm
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: wfm
  }))), __jsx("div", {
    className: "col-lg-12 text-center justify-content-center text-secondary"
  }, "(The sum value of Advance QM and Compliance QM cannot be greater than WFM)"), __jsx("div", {
    className: "my-1 col-lg-4 offset-lg-1 mt-4 pl-lg-4"
  }, __jsx("div", {
    className: "d-flex"
  }, " ", __jsx("div", {
    className: "h6"
  }, "ADVANCED QM"), " ", __jsx(react_["Popover"], {
    usePortal: true,
    trigger: "hover"
  }, __jsx(react_["PopoverTrigger"], null, __jsx(fa_["FaQuestion"], {
    className: "ml-2 pb-1 mb-2",
    size: "28px",
    color: "primary.500"
  })), __jsx(react_["PopoverContent"], {
    zIndex: 4
  }, __jsx(react_["PopoverArrow"], null), __jsx(react_["PopoverHeader"], {
    className: "h6"
  }, "Advanced QM"), __jsx(react_["PopoverBody"], null, "Advanced Quality Management solution gives you the tools to continuously measure and monitor agent performance, assess the quality and depth of your customer interactions, and drive constant improvement. In essence, an effective contact center quality management program is directly connected to the success of your business."))), " "), __jsx(react_["NumberInput"], {
    maxWidth: "200px",
    min: 0,
    max: wfm - complianceQM,
    value: advancedQM,
    onChange: value => {
      value <= wfm - complianceQM ? setAdvancedQM(value) : setAdvancedQM(wfm - complianceQM);
    }
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "my-1 col-lg-4 mt-4 pr-lg-5"
  }, __jsx("div", {
    className: "d-flex"
  }, " ", __jsx("div", {
    className: "h6"
  }, "Compliance QM"), " ", __jsx(react_["Popover"], {
    usePortal: true,
    trigger: "hover"
  }, __jsx(react_["PopoverTrigger"], null, __jsx(fa_["FaQuestion"], {
    className: "ml-2 pb-1 mb-2",
    size: "28px",
    color: "primary.500"
  })), __jsx(react_["PopoverContent"], {
    zIndex: 4
  }, __jsx(react_["PopoverArrow"], null), __jsx(react_["PopoverHeader"], {
    className: "h6"
  }, "Compliance QM"), __jsx(react_["PopoverBody"], null, "Quality Management or Monitoring combined automatically scored calls via speech analytics; reconfigured QM evaluation; agent self-evaluation; and direct customer feedback. Customers don\u2019t want a \u201Cmanaged\u201D experience\u2014they want a genuine experience and to speak to real people with real personalities. Call quality monitoring is all about refining agent behaviour and aligning it with business goals."))), " "), __jsx(react_["NumberInput"], {
    maxWidth: "200px",
    min: 0,
    max: wfm - advancedQM,
    value: complianceQM,
    onChange: value => {
      value <= wfm - advancedQM ? setComplianceQM(value) : setComplianceQM(wfm - advancedQM);
    }
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null))))), __jsx("div", {
    className: "col-lg-12 mt-5 d-flex justify-content-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Contact Center As A Service",
    serviceDescription: `${planName}${verifyNotEmpty(value, "Additional CSQ")}${RDSType}${verifyNotEmpty(tbSpace, "TB Space")}${verifyNotEmpty(wfm, "WFM")}${verifyNotEmpty(advancedQM, "Advanced QM")}${verifyNotEmpty(complianceQM, "Compliance QM")}${handleFailOverNode(failOverNode)}`,
    button: true
  }))))))));
}

/* harmony default export */ var pricing_ContactCenterPricing = (ContactCenterPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/contact-center.jsx

var contact_center_jsx = external_react_default.a.createElement;

/* harmony default export */ var contact_center = __webpack_exports__["default"] = ([{
  pb: 0,
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/contact-center.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: "lg",
      title: "Why Contact center for your Business?",
      titleSize: 32,
      text: contact_center_jsx("span", null, "Collaboration or Customer Service involves so much more than voice. With a full range of video and web conferencing solutions, Unified Communications, and workspace applications, the adoption of Customer Service Technology is widespread across organizations and affects multiple lines of business. Positive customer experience through a suite of advanced Contact center Tools.")
    }]
  }]
}, {
  width: "100%",
  my: 0,
  py: [0, 8, 12],
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: contact_center_jsx(pricing_ContactCenterPricing, null)
  }]
}, {
  my: 0,
  py: ["24px", "30px", "48px"],
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "Customers above anything - OUR MOTTO",
      textAlign: "left",
      fontSize: "lg",
      titleSize: 36,
      text: "BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools. We have deep contracts with all significant Telcos, including AAPT, Telstra, and Optus. We help organizations reduce their risks by offering solutions for creating, sharing, and store the information, to protect, detect, and respond to external and internal incidents and threats."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/shopping/dollar.svg",
        mt: 4,
        title: "Affordable"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/time-schedule.svg",
        mt: 4,
        title: "Speed Efficient"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/thunder-move.svg",
        mt: 4,
        title: "Consistent"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Enhanced Productivity"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/flag.svg",
        mt: 4,
        title: "Competitive"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/settings-4.svg",
        mt: 4,
        title: "Optimized Agent Functions"
      }
    }]
  }]
}, {
  title: "Why BG Unified Solutions?",
  body: [{
    type: "image&text",
    data: {
      title: "Profitable Customer Experience",
      description: "We help organizations to develop and improve communication channels and deliver lasting customer relationships at a lower cost. Our objective is to maximize the value of information within an organization while minimizing the cost.",
      image: "/assets/images/illustrations/analytics.svg",
      flexDirection: ["column", "column", "row"]
    }
  }, {
    type: "image&text",
    data: {
      title: "Employee Productivity",
      description: "We help organizations improve employee and partner collaboration to deliver greater employee productivity, improved information sharing, and knowledge management.",
      image: "/assets/images/illustrations/productivity.svg",
      flexDirection: ["column", "column", "row-reverse"]
    }
  }, {
    type: "image&text",
    data: {
      title: "Securing Data",
      description: "We help organizations reduce their risks by offering solutions for creating, sharing, and store the information, to protect, detect, and respond to external and internal incidents and threats.",
      image: "/assets/images/illustrations/security_lock_firewall.svg",
      flexDirection: ["column", "column", "row"]
    }
  }]
}]);

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7f4z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _consultel = _interopRequireDefault(__webpack_require__("vpFP"));

var _covid = _interopRequireDefault(__webpack_require__("aBqX"));

var _datacom = _interopRequireDefault(__webpack_require__("j0KW"));

var _itInfra = _interopRequireDefault(__webpack_require__("3Jmb"));

var _vdiaas = _interopRequireDefault(__webpack_require__("J/xW"));

var _businessop = _interopRequireDefault(__webpack_require__("Ck/c"));

var _networkinfra = _interopRequireDefault(__webpack_require__("vKFw"));

var _dcdesign = _interopRequireDefault(__webpack_require__("ZWSN"));

var _hosteduc = _interopRequireDefault(__webpack_require__("07JK"));

var _f5top = _interopRequireDefault(__webpack_require__("wKbz"));

var _radware = _interopRequireDefault(__webpack_require__("BSqL"));

var _cybersecurity = _interopRequireDefault(__webpack_require__("kCVN"));

var _huawei = _interopRequireDefault(__webpack_require__("t/oH"));

var _sdwan = _interopRequireDefault(__webpack_require__("IuqZ"));

var _pops = _interopRequireDefault(__webpack_require__("zks1"));

var _ai = _interopRequireDefault(__webpack_require__("L8C3"));

var _india = _interopRequireDefault(__webpack_require__("BgyO"));

var _forcepoint = _interopRequireDefault(__webpack_require__("fZbZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.consultel = _consultel.default;
module.exports.covid19 = _covid.default;
module.exports.datacom = _datacom.default;
module.exports.itInfra = _itInfra.default;
module.exports.vdiaas = _vdiaas.default;
module.exports.businessop = _businessop.default;
module.exports.networkinfra = _networkinfra.default;
module.exports.dcdesign = _dcdesign.default;
module.exports.hosteduc = _hosteduc.default;
module.exports.f5top = _f5top.default;
module.exports.radware = _radware.default;
module.exports.cybersecurity = _cybersecurity.default;
module.exports.huawei = _huawei.default;
module.exports.sdwan = _sdwan.default;
module.exports.pops = _pops.default;
module.exports.ai = _ai.default;
module.exports.india = _india.default;
module.exports.forcepoint = _forcepoint.default;

/***/ }),

/***/ "8AVj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/cdr-2.svg"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Connecting the World for Better Solving ",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", null, "A call detail record (CDR) provides information about calls made over phone service. A CDR report can offer businesses exact answers about where, when, and how markets are made for reporting and billing purposes. Get the insight you need into key call quality metrics, including network jitter, packet loss, and latency. Sort and filter CDRs based on-call status, call time, termination reason, phone IP, phone number, and more.")
    }]
  }]
}, {
  my: 0,
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "BGUS CDR-As-A-Service",
      textAlign: "left",
      fontSize: ["lg", "xl"],
      titleSize: [25, 25, 32],
      my: [2, 4, 8],
      text: "BG Unified Solutions' CDR As A Service extensively covers every aspect and parameter of call detail records. We bring you a comprehensive and thorough call data records that are customizable according to your needs, lets you filter logs and data as per your requirements."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/clock.svg",
        mt: 4,
        title: "Call Time"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/active-call.svg",
        mt: 4,
        title: "Call Status"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/iphone-x.svg",
        mt: 4,
        title: "Phone IP"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/spam.svg",
        mt: 4,
        title: "Termination Reason"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/clipboard-check.svg",
        mt: 4,
        title: "Featured QoS"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/clipboard-list.svg",
        mt: 4,
        title: "Customized Reports"
      }
    }]
  }]
}, {
  rowDistance: 8,
  gap: 6,
  body: [{
    width: ["100%", "100%", "100%", 2 / 3],
    type: "content",
    data: [{
      title: "CDR: Diversified Applications",
      fontSize: ["lg", "xl"],
      titleSize: [32, 36, 40, 48],
      my: [2, 4, 8],
      text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, "Call Detail Records does not cater to a single domain. In the present-day scenario, where technology and telephony prove to be the backbone of every industry, the importance of CDRs has grown exponentially."), __jsx("br", null), __jsx("br", null), __jsx("span", null, " Call detail records serve a valuable purpose of revenue generation for telephone service providers and are critical for law enforcement, whenever required. CDR is also used for VOIP and is a file containing all usage details such as the source of origin and destination point of the call, usage period of the IP, and the total amount charged during the billing period."))
    }, {
      list: ["Call Metadata", "Analyze calling patterns", "Billable communications transmission", "Identify calling trends"],
      spacing: 2,
      styleType: "none",
      icon: "check",
      iconColor: "green.500"
    }]
  }]
}]);

/***/ }),

/***/ "9Nel":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/WafPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    fontSize: ["12px", "14px", "15px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function WafPricing(props) {
  const [type, setType] = external_react_default.a.useState("Radware");
  const [applications, setApplications] = external_react_default.a.useState(1);
  const [value, setValue] = external_react_default.a.useState(10);

  const handleChange = value => setValue(value);

  const [bot, setBot] = external_react_default.a.useState(false);
  const [redundancy, setRedundancy] = external_react_default.a.useState(false);

  const handleBot = swi => swi ? ",Enable BOT Protection" : "";

  const handleRedundancy = swi => swi ? ",Enable Redundancy" : "";

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "px-lg-4 py-5 rounded-8 shadow-lg"
  }, __jsx("div", {
    className: "display5 text-center"
  }, "WAF Options"), __jsx("div", {
    className: "row px-3 justify-content-center px-lg-4"
  }, __jsx("div", {
    className: "col-lg-10 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a type"), __jsx(RadioGroup["a" /* default */], {
    setValue: setType,
    options: ["Radware", "F5", "Fortinet"]
  })), __jsx("div", {
    className: "col-lg-5 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "How many applications?")), __jsx("div", {
    className: "offset-lg-1 col-lg-4 mt-3"
  }, __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setApplications(value) : setApplications(20);
    },
    value: applications,
    min: 1,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-10 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Bandwidth per Application (in Mbps)"), __jsx(react_["Slider"], {
    color: "primary",
    my: 2,
    min: 1,
    max: 80,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value * 5
  }))), __jsx("div", {
    className: "col-lg-10 mt-4 d-flex justify-content-between"
  }, __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setBot(e.target.checked);
    },
    isChecked: bot,
    id: "license"
  }), __jsx(react_["FormLabel"], {
    ml: [0, 3],
    htmlFor: "license"
  }, "BOT Protection")), __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setRedundancy(e.target.checked);
    },
    isChecked: redundancy,
    id: "license"
  }), __jsx(react_["FormLabel"], {
    ml: [0, 3],
    htmlFor: "license"
  }, "Redundancy"))), __jsx("div", {
    className: "col-lg-12 mt-4 d-flex justify-content-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "WAF As A Service",
    serviceDescription: `${type} ${verifyNotEmpty(applications, "Application")} ${verifyNotEmpty(value * 5, "Mbps Bandwidth/App")} ${handleBot(bot)} ${handleRedundancy(redundancy)}`,
    button: true
  }))))));
}

/* harmony default export */ var pricing_WafPricing = (WafPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/wafaas.jsx

var wafaas_jsx = external_react_default.a.createElement;

/* harmony default export */ var wafaas = __webpack_exports__["default"] = ([{
  mb: 0,
  gap: 0,
  containerWidth: "100%",
  body: [{
    width: "100%",
    type: "pricing",
    data: wafaas_jsx(pricing_WafPricing, null)
  }]
}, {
  title: "Web Application Firewall: How it works?",
  rowDistance: 8,
  body: [{
    width: "100%",
    type: "imageGroup",
    data: {
      images: ["/assets/images/vectors/waf.svg"],
      objectFit: "contain",
      px: "15%"
    }
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "80%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "Why Choose Us?",
      textAlign: "left",
      fontSize: ["lg", "xl"],
      titleSize: [40, 40, 48],
      my: [2, 4, 8],
      text: "Benefit your business from the expert knowledge of our experts who offer practical solutions. Our modular SLAs are tailored to your individual needs – so support is always flexible and transparent in terms of cost."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/lock-circle.svg",
        mt: 4,
        title: "Dedicated Firewall"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/design/line.svg",
        mt: 4,
        title: "Flexible"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/tools/swiss-knife.svg",
        mt: 4,
        title: "Robust"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/thunder-move.svg",
        mt: 4,
        title: "Consistent"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/diagnostics.svg",
        mt: 4,
        title: "Minimized Liability Risk"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/navigation/arrows-h.svg",
        mt: 4,
        title: "Modular SLAs"
      }
    }]
  }]
}, {
  px: 2,
  title: "BGUS' Managed Web Application Firewall",
  description: "Our Dedicated Web App Firewall uses a single code base, for you can consistently apply and enforce security policies across any environment. It’s easy to deploy and available at a single license, giving you simplified configuration, bot management, and holistic visibility and control with a single pane of glass.",
  descriptionStyle: {
    fontSize: ["lg", "lg", "xl"],
    opacity: 0.7,
    px: "10px"
  },
  gap: 10,
  rowDistance: 8,
  body: [{
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/tags.svg",
      title: "Breadth of offerings",
      align: "left",
      size: "50px",
      description: "Offering a broad suite of security services to customers enables an MSSP to meet the needs of more current and potential customers. This potentially increases ARPU through the opportunity to upsell in specific accounts. It also enables the organization to compete for business from potential new customers that are looking for a comprehensive set of services under one umbrella."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/mobile.svg",
      title: "Visibility",
      align: "left",
      size: "50px",
      description: "Providing end-to-end visibility is an essential capability for MSSPs seeking to meet the service expectations of their target customers. In the absence of visibility, fast-moving intrusions may cause harm before a response can occur, negating all efforts to maintain an effective security posture. To deliver a value add to customers, MSSPs need to achieve end-to-end visibility across each customer’s environment and provide that visibility to them via a customer portal."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/lock.svg",
      title: "Threat intelligence and analytics",
      align: "left",
      size: "50px",
      description: "In today’s advanced threat landscape, customers need real-time access to robust threat intelligence to counter attacks that move at machine speed. In addition to a customer’s own security logs, many subscribe to threat-intelligence feeds pulled from large networks of firewalls around the world, but it is a challenge to aggregate this data across a fragmented security architecture in time to deliver adequate speed of response."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/agile.svg",
      title: "Operational efficiency",
      align: "left",
      size: "50px",
      description: "Lack of integration across different security elements and architectural fragmentation increase operational inefficiencies. Without integration and automation, many security workflows must be managed manually. End-to-end integration, on the other hand, enables the MSSP to deliver broad services while optimizing staff time and budgetary resources, maximizing margins and potentially increasing ARPU."
    }
  }]
}]);

/***/ }),

/***/ "9yP4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/svg/SVG.jsx
var SVG = __webpack_require__("2UJ4");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/cards/CardWithIcon.jsx
var __jsx = external_react_default.a.createElement;




 //props.icon is an element (can be image,icon etc.)

function CardWithIcon(props) {
  var iconbox = __jsx(react_["Box"], {
    className: "text-white d-flex justify-content-center shadow-lg align-items-center",
    rounded: "12px",
    w: "128px",
    h: "128px",
    bg: props.iconBg || "Blue"
  }, __jsx(SVG["a" /* default */], {
    size: "40px",
    color: "light.500",
    src: props.icon
  }));

  if (props.fullIcon) {
    iconbox = __jsx(react_["Box"], {
      className: "text-white",
      rounded: "12px",
      w: "48px",
      h: "48px"
    }, props.fullIcon);
  }

  return __jsx(link_default.a, {
    href: "/solutions/[name]",
    as: `${props.link}`
  }, __jsx(react_["Box"], {
    pt: "64px",
    h: "100%"
  }, __jsx(react_["Box"], {
    h: "100%",
    className: "card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3"
  }, __jsx("div", {
    className: "row iconbox mb-3"
  }, iconbox), __jsx("div", {
    className: "row display6 py-3 text-center mx-2"
  }, props.title), __jsx("div", {
    className: "row cardContent flex-fill py-2 mx-3 text-center"
  }, props.children), __jsx("div", {
    className: "row mx-3 my-3"
  }, __jsx(link_default.a, {
    href: "/solutions/[name]",
    as: `${props.link}`
  }, __jsx(react_["Button"], {
    py: 8,
    px: 12,
    bg: "dark.500",
    color: "white",
    _hover: {
      color: "white",
      bg: "dark.400"
    },
    borderRadius: "0px 12px",
    rightIcon: __jsx(fa_["FaArrowRight"], null)
  }, "Learn More"))))));
}

/* harmony default export */ var cards_CardWithIcon = (CardWithIcon);
// EXTERNAL MODULE: ./src/database/services.jsx
var services = __webpack_require__("sdzU");

// CONCATENATED MODULE: ./src/components/cards/Service.jsx
var Service_jsx = external_react_default.a.createElement;




function Service(props) {
  var service = Object.entries(services["a" /* default */]).filter(s => s[1].title === props.service)[0];
  return Service_jsx(external_react_default.a.Fragment, null, service && Service_jsx(cards_CardWithIcon, {
    title: service[1].title,
    iconBg: service[1].color,
    link: "/solutions/" + service[0],
    icon: service[1].icon
  }, service[1].description));
}

/* harmony default export */ var cards_Service = __webpack_exports__["a"] = (Service);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BPdO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/socaas.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Security Operations center As A Service",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", null, "As data theft became evident and safeguarding sensitive data became a necessity for businesses everywhere, we developed a portfolio of leading cybersecurity solutions and built on the facility and internal processes we already had in place for our NOC to create a top-notch SOC staffed with certified security analysts ready to provide proactive, exceptional support to our clients. We also created new workflows, processes, and automation specific to cybersecurity/SOC services.")
    }]
  }]
}, {
  title: "Ensure Cyber Security with Advanced Intelligence",
  description: "The service architecture for our Security Operations Center as a Service (SOCaaS) program integrates best-of-breed products with proven processes and highly-skilled staff, increasing visibility into the network, speeding up alert response, and resolution times, and providing proactive risk modeling and risk mitigation.",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/visible.svg",
      mt: 4,
      title: "In-depth risk visibility"
    }
  }, {
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/magic.svg",
      mt: 4,
      title: "Compliance Demonstrated"
    }
  }, {
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/numbered-information.svg",
      mt: 4,
      title: "Prioritizing issues resolution"
    }
  }, {
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/sending.svg",
      mt: 4,
      title: "Rapid Response"
    }
  }, {
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/shield-check.svg",
      mt: 4,
      title: "Next-gen Managed Firewall"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: __jsx("span", null, "Our SOC solution goes beyond simply installing a SIEM product and sending your team members an overwhelming number of alerts to review. Our Security Engineers use analytic software to conduct the in-depth analysis required to provide you with actionable remediation recommendations."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}]);

/***/ }),

/***/ "BSqL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "OVERVIEW",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: __jsx("span", null, "BG Unified Solutions Pty. Ltd. is an Australian hosting services and solutions provider that helps clients plan, build, and manage their IT. Founded in 2014, they provide international IT services, including infrastructure architecture, network optimization and disaster recovery, to leading companies around the world."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "As part of these services, BG Unified also provides managed security services to help organizations safeguard sensitive data, keep PII secure and stay in compliance with stringent government regulations."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "Several of BG Unified customer\u2019s experienced website performance issues where firewalls couldn\u2019t provide sufficient protection. To provide its customers with the highest level of security, BG Unified began to evaluate the marketplace for effective web application security and bot management solutions."),
    textAlign: "justify"
  }, {
    text: "THE CHALLENGES",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: __jsx("span", null, "As part of its evaluation of a cloud web application security solution, BG Unified Solutions decided to use a production environment and persuaded a long-term customer to participate in the proof of concept."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "The customer provided online educational services and needed to ensure that it could protect its customers\u2019 PII. The Australian government enforces strict data privacy regulations. Besides loss of reputation, non-compliance can lead to penalties costing more than 4 million AUD. To keep their business and reputation in good standing, the customer trusts BG Unified to provide and support their inbound and outbound infrastructure and to recommend best security practices to remain compliant."),
    textAlign: "justify"
  }, {
    text: "THE SOLUTION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: __jsx("span", null, "BG Unified selected several web application protection vendors, including Radware, to participate in the proof of concept. The local Radware engineer delivered real-time support to resolve issues during testing, since the Radware Emergency Response Team was in a different time zone. Testing showed that Radware\u2019s Cloud WAF Service provided key differentiators from the competition, including superior network visibility, customized reporting and a user-friendly portal."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "As the educational services customer continued to trial Radware\u2019s Cloud WAF Service to protect its website, BG Unified noticed blocked IP addresses in the customer\u2019s website logs and saw the customer\u2019s website performance decrease, negatively impacting the user experience. There was increased activity on the website but no corresponding increase in orders, evidence that the website was experiencing bot attacks. Although the Cloud WAF Service could protect against application vulnerability exploits, such as SQL injections and cross site scripting, it couldn\u2019t defend against sophisticated bots that mimic human behavior."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "The educational services customer\u2019s average number of transactions dropped from 250 orders per hour to 100 orders per day. With an average order of 50 AUD, the customer was losing over 95,000 AUD per day due to payment bot attacks."),
    textAlign: "justify"
  }, // image 1
  {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/newsroom/radware/BGUS2.png"
    }),
    imageJustify: "center"
  }, //image 2
  {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/newsroom/radware/BGUS3.png"
    }),
    imageJustify: "center"
  }, {
    text: __jsx("span", null, "To prevent future revenue and data loss, the customer expedited installation of Radware\u2019s Bot Manager. After activating Radware Bot Manager, the customer saw a 79% decrease in website bot activity and an 80% decrease in payment section bot hits."),
    textAlign: "justify"
  }, // image 3
  {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/newsroom/radware/BGUS4.png"
    }),
    imageJustify: "center"
  }, {
    mt: "32px",
    text: __jsx("p", null, __jsx("em", null, "\u201CTo solve performance problems with our customers\u2019 web applications, the Radware SMEs proposed using their cloud-based Bot Manager solution. Bot Manager worked very well from Day One, fixing attack issues so our customers were back in business.\u201D")),
    textAlign: "center"
  }, {
    text: __jsx("p", null, "\u2014 ", __jsx("b", null, "Saurabh Sareen, Co-Founder and Managing Director, BG Unified Solutions")),
    textAlign: "center"
  }, {
    text: "BENEFITS",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: __jsx("span", null, "Radware\u2019s integrated Cloud WAF and Bot Manager solved the photography customer\u2019s application and data security issues by protecting against application vulnerability exploitations, automatically identifying and blocking malicious bots and protecting sensitive data. The customer was able to remain compliant, provide a quality website user experience and process orders."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "After their customer\u2019s successful evaluation, BG Unified Solutions purchased these services to protect their own environment and recommended them to other customers. Radware\u2019s application security services are easy to manage, with high visibility into attacks, enhanced reporting and automated protection. BG Unified Solutions can provide better network management for their enterprise and government customers. These services are also cost effective, providing BG Unified with monthly billing that correlates with their customer offering. Radware\u2019s extensive SLAs guarantee service delivery and provides exceptional emergency support through the Emergency Response Team and TAC."),
    textAlign: "justify"
  }, {
    mt: "32px",
    text: __jsx("span", null, "Courtesy: ", __jsx("a", {
      href: "https://www.radware.com"
    }, "www.radware.com"))
  }]
}]);

/***/ }),

/***/ "BgyO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: __jsx("span", null, "We are very proud to announce that a brand new office in the Delhi NCR, India will be fully operational in the next few months."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "This office will be fully equipped with high end Cisco Voice Solution(s) including a full suite of Cisco Collaboration offering Contact Center As A Service, UCAAS and lot more."),
    textAlign: "justify"
  }, // {
  //     image:<Image justifySelf="center" src="/assets/images/services/sdwan.jpg"/>,
  //     imageJustify: "center",
  // },
  {
    text: __jsx("span", null, "The same office will have a team who will provide SOCAAS - Security Operations Center as a service to all of the BGUS existing and prospective clients.")
  }, {
    text: "If your company is looking for offshore agents, please contact me. We can provide you highly skilled agents to support your business operations. Any data sovereignty requirements will be met as all of these agents will use high performance VDI's located within Australian DC's.",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CJBh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/SipPricing.jsx
var __jsx = external_react_default.a.createElement;





const ChannelSelector = props => __jsx(react_["Select"], {
  my: 5,
  onChange: props.change,
  focusBorderColor: "primary.500",
  value: props.channel
}, __jsx("option", {
  value: "SIP-10"
}, "SIP-10"), __jsx("option", {
  value: "SIP-20"
}, "SIP-20"), __jsx("option", {
  value: "SIP-50"
}, "SIP-50"), __jsx("option", {
  value: "SIP-100"
}, "SIP-100"), __jsx("option", {
  value: "SIP-200"
}, "SIP-200"), __jsx("option", {
  value: "SIP-250"
}, "SIP-250"), __jsx("option", {
  value: "SIP-300"
}, "SIP-300"));

function SipPricing(props) {
  const [channel, setChannel] = external_react_default.a.useState("SIP-20");

  const handleChange = e => {
    setChannel(e.target.value);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx(react_["Tabs"], {
    align: "center"
  }, __jsx(react_["TabList"], null, __jsx(react_["Tab"], {
    className: "py-4 px-5 display6"
  }, "Single"), __jsx(react_["Tab"], {
    className: "py-4 px-5 display6"
  }, "Cluster")), __jsx(react_["TabPanels"], null, __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/SIP.svg",
    title: "Single Cube",
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"]
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Single Cube, " + channel
  })))))), __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6 col-md-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/SIP.svg",
    title: "Cluster Cube",
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"]
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Cluster Cube, " + channel
  }))), __jsx("div", {
    className: "col-lg-4 col-sm-6 col-md-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/SIP.svg",
    title: "Cluster Cube DEH",
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"]
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Cluster Cube DEH, " + channel
  }))), __jsx("div", {
    className: "col-lg-4 col-sm-6 col-md-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/SIP.svg",
    title: __jsx("div", {
      className: "text-center"
    }, " Cluster Cube DEH ", __jsx("br", null), " ", __jsx("small", null, " (with Multiple DC) "), " "),
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"]
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Cluster Cube with Multiple DC, " + channel
  })))))))))));
}

/* harmony default export */ var pricing_SipPricing = (SipPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/sip.jsx

var sip_jsx = external_react_default.a.createElement;

/* harmony default export */ var sip = __webpack_exports__["default"] = ([{
  title: 'Expertise to address challenges by designing and delivering complete collaboration solutions',
  titleStyle: {
    fontSize: ["3xl", "32px", "4xl"],
    px: "10px"
  },
  rowDistance: 10,
  body: [{
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    px: 4,
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/theme/cloud-computing.svg",
      title: "1600+ SIP channels",
      align: "center"
    }
  }, {
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    px: 4,
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/library/devices/cpu-1.svg",
      title: "Multiple Data centers",
      align: "center"
    }
  }, {
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    px: 4,
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/color/encryption.svg",
      title: "100% Data Security",
      align: "center"
    }
  }]
}, {
  my: 0,
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: sip_jsx(pricing_SipPricing, null)
  }],
  bg: 'light.400'
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  py: 16,
  body: [{
    type: "image&text",
    data: {
      spacing: 0,
      image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
      title: "Mobile access",
      flexDirection: ["column", "column", "row"],
      description: "Multiple data center locations allow access to your website anytime, anywhere. Improved operational efficiencies, Reduced communication-related delays, and enhanced collaboration."
    }
  }, {
    type: "image&text",
    data: {
      spacing: 0,
      image: "/assets/images/illustrations/PlatformDiversity_Firewall.svg",
      title: "Our collaborative tools",
      flexDirection: ["column", "column", "row-reverse"],
      description: "Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint), Interactive and transactional applications such as VMware VDI, and SQL."
    }
  }, {
    type: "image&text",
    data: {
      spacing: 0,
      image: "/assets/images/illustrations/DataProtection_Wireless.svg",
      title: "Secure Channels",
      flexDirection: ["column", "column", "row"],
      description: "We ensure a completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto /Checkpoint / Fortinet Firewall, DDOS Protection."
    }
  }]
}]);

/***/ }),

/***/ "Ck/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with substantial and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.",
    textAlign: "justify"
  }, {
    text: "THE HELP WE OFFER...",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "As a leader of BGUS, I am delighted to offer free services* for the next three months to any business(s) related to the Health and Safety of Australians. You need Remote Phone System, Virtual Desktops, Bare Metal Servers to host your VM's, Database Servers, Telepresence/VCS Solution or anything which we can offer with the current solutions in BGUS service offerings. No charges at all for the next three months. Let us help you if you have limited budgets, and because of COVID, your current infrastructure can't handle the load. Dial my direct line +61 2 9095 0000. We will get things in motion very quickly.",
    textAlign: "justify"
  }, {
    text: "We have noticed a big jump in the number of remote users from 20 or 30 on average to 275 as per the latest reports.",
    textAlign: "justify"
  }, {
    text: "READY FOR THE CHALLENGE!!",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "Keeping an eye on the current situation, we have introduced more compute and storage to our VDI clusters across all DC locations. We are ready to give you a complete VDI/RDSaaS solution running Windows 10 / Windows Server 2016 with all necessary applications to carry on your work from home. The solution can support a maximum of 15000 VDI instances.",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "EQfX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _database_newsroom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XErZ");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pageBuilder_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TJ6B");
/* harmony import */ var _pageBuilder_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("J595");
/* harmony import */ var _pageBuilder_Body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FPvR");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











 //  Gets id of blog (bid) from url and use that bid to get blog content from BLOGS array.
//  url basic : /blogs/bid
//  example   : /blogs/covid-19

function Blogs() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    bid
  } = router.query; //get blog id from url

  var blog = _database_newsroom__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].filter(blog => {
    if (blog.link == bid) {
      return blog;
    }
  })[0] || {
    content: ""
  }; //Filter and get the current blog object

  const imgalt = blog.imgalt;
  return __jsx("div", {
    className: "article"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
  }), __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8"
  }), __jsx("meta", {
    name: "description",
    content: blog.description
  }), __jsx("meta", {
    property: "og:title",
    content: blog.title,
    key: "title"
  }), __jsx("meta", {
    property: "og:description",
    content: blog.description,
    key: "description"
  }), __jsx("meta", {
    name: "keywords",
    content: blog.tags.map(x => x)
  }), __jsx("title", null, blog.title || ""), __jsx("link", {
    rel: "shortcut icon",
    href: "../assets/images/icons/favicon/bg.ico",
    type: "image/x-icon"
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    zIndex: "10",
    pos: "relative",
    bg: "dark.500"
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    position: "absolute",
    height: "100%",
    zIndex: "0",
    top: 0,
    left: 0,
    opacity: ".3",
    objectFit: "cover",
    width: "100%",
    src: blog.image
  }), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    distance: "5%",
    duration: 500,
    top: true
  }, __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    position: "relative",
    textAlign: "center",
    color: "white",
    py: [24, 32],
    my: 0
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `/newsroom?tab=${blog.category}`
  }, __jsx("a", null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    width: "fit-content",
    rounded: 8,
    zIndex: "100",
    size: "xs",
    textAlign: "center",
    color: "white",
    bg: "primary.500",
    py: 1,
    px: 2,
    mb: 4
  }, blog.category))), __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    textAlign: "left",
    zIndex: "100",
    fontSize: ["24px", "48px"]
  }, blog.title)))), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    mt: 6,
    py: 0
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    fontWeight: ["400"],
    lineHeight: 1.6,
    color: "gray.700",
    width: ["100%", "100%", "72%"]
  }, blog.overview && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "gray.200",
    textAlign: "center",
    my: 6,
    rounded: 8,
    p: 12
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "md"
  }, "Overview"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mt: 4
  }, blog.overview)), blog.solution && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "dark.500",
    color: "white",
    textAlign: "center",
    my: 6,
    rounded: 8,
    p: 12
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "md"
  }, "Solution"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    mt: 4
  }, blog.solution)), blog.content && blog.content.map((body, index) => __jsx(_pageBuilder_Body__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _extends({
    key: index
  }, body)))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    width: ["100%", "100%", "28%"],
    mt: 6,
    display: ["none", "none", "flex"],
    alignItems: "center",
    direction: "column"
  }, blog.logo && __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mb: 4,
    borderRadius: 8,
    mx: 8,
    p: 12,
    shadow: "lg"
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    w: "100%",
    src: blog.logo
  })), blog.sideContent && blog.sideContent.map((cont, index) => __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    key: index,
    mb: 4
  }, cont)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    minW: "250px",
    width: ["0%", "0%", "80%"],
    fontWeight: "500"
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "dark.500",
    pos: "relative",
    rounded: 8,
    p: 8,
    overflow: "hidden",
    boxShadow: "xl",
    height: "100%"
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    zIndex: "0",
    opacity: ".7",
    className: "bg-image",
    src: "/assets/images/backgrounds/card.png"
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    height: "100%",
    direction: "column",
    justify: "space-between"
  }, __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    zIndex: "10",
    textAlign: "left",
    fontSize: "3xl",
    color: "white"
  }, "Get Started"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/solutions"
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    mt: 8,
    as: "a",
    variant: "solid",
    className: "primary-btn",
    py: 4,
    colorScheme: "primary",
    rightIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaChevronRight"], null),
    size: "md"
  }, "Explore Solutions")))))))));
}

async function getStaticPaths() {
  return {
    paths: _database_newsroom__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].map(x => ({
      params: {
        bid: x.link
      }
    })),
    fallback: false // See the "fallback" section below

  };
}
async function getStaticProps() {
  return {
    props: {}
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Blogs);

/***/ }),

/***/ "FHnF":
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "FPvR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// CONCATENATED MODULE: ./src/pageBuilder/components/Content.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Content(props) {
  return __jsx(external_react_default.a.Fragment, null, props.data.map(_ref => {
    let {
      fontSize = "lg",
      image,
      title,
      titleSize = "lg",
      titleFont,
      styleType = "disc",
      stylePos = "outside",
      opacity = 1,
      spacingY = 2,
      icon,
      iconColor,
      list,
      text
    } = _ref,
        props = _objectWithoutProperties(_ref, ["fontSize", "image", "title", "titleSize", "titleFont", "styleType", "stylePos", "opacity", "spacingY", "icon", "iconColor", "list", "text"]);

    return __jsx(external_react_default.a.Fragment, null, title && __jsx(react_["Heading"], {
      fontFamily: titleFont,
      my: 4,
      fontSize: titleSize
    }, title), image && __jsx(react_["Flex"], {
      justifyContent: props.imageJustify
    }, image), text && __jsx(react_["Text"], _extends({
      fontSize: fontSize,
      opacity: opacity,
      my: spacingY
    }, props), text), list && __jsx(react_["List"], _extends({
      fontSize: fontSize,
      opacity: opacity,
      px: 4,
      my: spacingY,
      styleType: styleType,
      stylePos: stylePos
    }, props), list.map((item, index) => __jsx(react_["ListItem"], {
      key: index
    }, icon && __jsx(react_["ListIcon"], {
      icon: icon,
      mr: 4,
      color: iconColor
    }), item))));
  }));
}

/* harmony default export */ var components_Content = (Content);
// CONCATENATED MODULE: ./src/pageBuilder/components/Video.jsx
var Video_jsx = external_react_default.a.createElement;



function Video({
  data
}) {
  return Video_jsx(external_react_default.a.Fragment, null, Video_jsx("iframe", {
    src: data.url,
    width: "100%",
    height: data.height,
    frameBorder: "0",
    allow: "accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    style: {
      borderRadius: "3px",
      border: "none"
    }
  }), Video_jsx(react_["Text"], {
    mt: 3,
    textAlign: "center",
    opacity: "0.7"
  }, data.description));
}

/* harmony default export */ var components_Video = (Video);
// CONCATENATED MODULE: ./src/pageBuilder/components/ImageGroup.jsx
var ImageGroup_jsx = external_react_default.a.createElement;

function ImageGroup_extends() { ImageGroup_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ImageGroup_extends.apply(this, arguments); }

function ImageGroup_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ImageGroup_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ImageGroup_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ImageGroup(_ref) {
  let {
    images,
    captionStyles,
    spacing,
    maxW,
    width = "100%"
  } = _ref,
      data = ImageGroup_objectWithoutProperties(_ref, ["images", "captionStyles", "spacing", "maxW", "width"]);

  var allImages = ImageGroup_jsx("div", null);

  if (images.length === 1) {
    allImages = images.map((url, index) => ImageGroup_jsx(react_["Image"], ImageGroup_extends({
      alt: "",
      src: url,
      width: width,
      key: "image-" + index
    }, data)));
  } else {
    allImages = images.map((url, index) => ImageGroup_jsx(react_["Image"], ImageGroup_extends({
      alt: "",
      src: url,
      mx: spacing || "16px",
      width: width,
      maxW: maxW || ["80px", "135.5px", "175px", "231px", "283px"],
      key: "image-" + index
    }, data)));
  }

  return ImageGroup_jsx(react_["Flex"], {
    justify: "center",
    wrap: "wrap",
    flexGrow: 1,
    textAlign: "center"
  }, allImages);
}

/* harmony default export */ var components_ImageGroup = (ImageGroup);
// CONCATENATED MODULE: ./src/pageBuilder/components/MyList.jsx
var MyList_jsx = external_react_default.a.createElement;



function MyList({
  data
}) {
  //Ex - <Lists title="Lorem ipsum dolor sit amet, consectetur adipiscing elit" items={["tempor incididunt u" ,"dolore magna aliqua."]}/>
  return MyList_jsx(external_react_default.a.Fragment, null, MyList_jsx(react_["Heading"], {
    fontSize: data.fontSize || "28px"
  }, data.title), MyList_jsx(react_["List"], {
    mt: 4,
    styleType: data.styleType,
    spacing: 2
  }, data.items.map((item, index) => {
    return MyList_jsx(react_["ListItem"], {
      key: index
    }, data.styleType ? "" : MyList_jsx(react_["ListIcon"], {
      icon: data.icon || "check",
      color: data.color || "primary.500"
    }), item);
  })));
}

/* harmony default export */ var components_MyList = (MyList);
// EXTERNAL MODULE: external "react-svg"
var external_react_svg_ = __webpack_require__("FHnF");

// EXTERNAL MODULE: ./src/components/svg/SVG.jsx
var SVG = __webpack_require__("2UJ4");

// CONCATENATED MODULE: ./src/pageBuilder/components/Feature.jsx
var Feature_jsx = external_react_default.a.createElement;

function Feature_extends() { Feature_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feature_extends.apply(this, arguments); }

function Feature_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Feature_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Feature_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function Feature(_ref) {
  let {
    image,
    icon,
    size = "48px",
    title,
    iconColor = "dark.500",
    color = "dark.500",
    svg,
    titleSize = "lg",
    description,
    align = "center",
    textOpacity,
    titleFont,
    titleColor
  } = _ref,
      props = Feature_objectWithoutProperties(_ref, ["image", "icon", "size", "title", "iconColor", "color", "svg", "titleSize", "description", "align", "textOpacity", "titleFont", "titleColor"]);

  return Feature_jsx(react_["Flex"], Feature_extends({
    direction: "column",
    align: align
  }, props), svg && Feature_jsx(SVG["a" /* default */], {
    src: svg,
    color: iconColor,
    size: size
  }), image && Feature_jsx(react_["Image"], {
    alt: "",
    src: image,
    objectFit: "cover",
    h: size,
    w: size
  }), icon && Feature_jsx(react_["Box"], {
    as: icon,
    size: size
  }), Feature_jsx(react_["Heading"], {
    fontFamily: titleFont,
    fontWeight: "600",
    mt: 4,
    size: titleSize,
    textAlign: align
  }, title), description && Feature_jsx(react_["Text"], {
    opacity: textOpacity,
    mt: 4,
    textAlign: "justify",
    style: {
      textAlignLast: align
    }
  }, description));
}

/* harmony default export */ var components_Feature = (Feature);
// CONCATENATED MODULE: ./src/pageBuilder/components/Feature2.jsx
var Feature2_jsx = external_react_default.a.createElement;

function Feature2_extends() { Feature2_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feature2_extends.apply(this, arguments); }

function Feature2_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Feature2_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Feature2_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function Feature2(_ref) {
  let {
    image,
    icon,
    size = "48px",
    title,
    imageWidth = "96px",
    iconColor = "dark.500",
    color = "dark.500",
    svg,
    titleSize = "lg",
    description,
    align = "center",
    textOpacity,
    titleFont = "Nexa Bold",
    titleColor
  } = _ref,
      props = Feature2_objectWithoutProperties(_ref, ["image", "icon", "size", "title", "imageWidth", "iconColor", "color", "svg", "titleSize", "description", "align", "textOpacity", "titleFont", "titleColor"]);

  return Feature2_jsx(react_["Grid"], Feature2_extends({
    align: align,
    templateColumns: [`${imageWidth} auto`]
  }, props), svg && Feature2_jsx(SVG["a" /* default */], {
    src: svg,
    color: iconColor,
    size: size
  }), Feature2_jsx(react_["Flex"], {
    textAlign: "right",
    justifyContent: ["start", "start", "center"]
  }, image && Feature2_jsx(react_["Image"], {
    alt: "",
    src: image,
    objectFit: "cover",
    h: size,
    w: size
  })), icon && Feature2_jsx(react_["Box"], {
    as: icon,
    size: size
  }), Feature2_jsx(react_["Box"], null, Feature2_jsx(react_["Heading"], {
    fontFamily: titleFont,
    fontSize: props.titleFontSize,
    size: titleSize,
    textAlign: align
  }, title), Feature2_jsx(react_["Text"], {
    fontSize: props.textSize,
    opacity: textOpacity,
    mt: 2,
    textAlign: "justify",
    style: {
      textAlignLast: align
    }
  }, description)));
}

/* harmony default export */ var components_Feature2 = (Feature2);
// EXTERNAL MODULE: ./src/components/Countup/main.jsx
var main = __webpack_require__("aIaH");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// CONCATENATED MODULE: ./src/pageBuilder/components/NumberCount.jsx
var NumberCount_jsx = external_react_default.a.createElement;

function NumberCount_extends() { NumberCount_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NumberCount_extends.apply(this, arguments); }

function NumberCount_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NumberCount_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NumberCount_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function NumberCount(_ref) {
  let {
    count,
    digitColor = "primary.500",
    prefix,
    suffix,
    duration = 2,
    fontSize = ["30px", "36px", "40px"],
    title,
    titleSize = ["18px", "20px", "22px"],
    description,
    align = "center"
  } = _ref,
      props = NumberCount_objectWithoutProperties(_ref, ["count", "digitColor", "prefix", "suffix", "duration", "fontSize", "title", "titleSize", "description", "align"]);

  return NumberCount_jsx(react_["Flex"], NumberCount_extends({
    direction: "column",
    align: align
  }, props), NumberCount_jsx(react_["Text"], {
    fontSize: fontSize,
    fontFamily: "Nexa Bold",
    color: digitColor
  }, NumberCount_jsx(main["a" /* default */], {
    endPoint: count,
    prefix: prefix,
    suffix: suffix,
    duration: duration
  })), NumberCount_jsx(react_["Heading"], {
    my: 2,
    fontSize: titleSize,
    textAlign: align
  }, title), NumberCount_jsx(react_["Text"], {
    textAlign: align
  }, description));
}

/* harmony default export */ var components_NumberCount = (NumberCount);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/pageBuilder/components/AccordionWithImage.jsx
var AccordionWithImage_jsx = external_react_default.a.createElement;

function AccordionWithImage_extends() { AccordionWithImage_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AccordionWithImage_extends.apply(this, arguments); }

function AccordionWithImage_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AccordionWithImage_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AccordionWithImage_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function AccordionWithImage(_ref) {
  let {
    content
  } = _ref,
      props = AccordionWithImage_objectWithoutProperties(_ref, ["content"]);

  const [current, setCurrent] = external_react_default.a.useState(0);
  return AccordionWithImage_jsx(react_["Grid"], AccordionWithImage_extends({
    templateColumns: ["auto", "auto", "50% 50%"]
  }, props), AccordionWithImage_jsx(react_["Box"], null, AccordionWithImage_jsx(react_["Accordion"], {
    onChange: index => setCurrent(index)
  }, content && content.map((data, index) => AccordionWithImage_jsx(react_["AccordionItem"], null, ({
    isExpanded
  }) => AccordionWithImage_jsx(external_react_default.a.Fragment, null, AccordionWithImage_jsx(react_["AccordionButton"], null, AccordionWithImage_jsx(react_["Box"], {
    py: 2,
    flex: "1",
    textAlign: "left"
  }, AccordionWithImage_jsx(react_["Heading"], {
    size: "md"
  }, data.title)), !isExpanded && AccordionWithImage_jsx(fa_["FaPlus"], {
    name: "add"
  })), AccordionWithImage_jsx(react_["AccordionPanel"], {
    pb: 4
  }, data.description)))))), AccordionWithImage_jsx(react_["Box"], {
    display: ["none", "none", "block"],
    p: 6
  }, content && content.map((data, index) => {
    if (data.image) return AccordionWithImage_jsx(external_react_default.a.Fragment, null, current === index && AccordionWithImage_jsx(react_["Image"], {
      key: index,
      alt: data.title,
      h: "280px",
      m: "auto",
      src: data.image
    }));
  })));
}

/* harmony default export */ var components_AccordionWithImage = (AccordionWithImage);
// EXTERNAL MODULE: ./src/components/cards/Service.jsx + 1 modules
var Service = __webpack_require__("9yP4");

// CONCATENATED MODULE: ./src/pageBuilder/components/AlternateRow.jsx
var AlternateRow_jsx = external_react_default.a.createElement;

function AlternateRow_extends() { AlternateRow_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AlternateRow_extends.apply(this, arguments); }

function AlternateRow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AlternateRow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AlternateRow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function AlternateRow(_ref) {
  let {
    align,
    justify,
    wrap,
    rowDistance,
    direction,
    content,
    imageStyles,
    descriptionStyles,
    textWidth,
    titleStyles
  } = _ref,
      props = AlternateRow_objectWithoutProperties(_ref, ["align", "justify", "wrap", "rowDistance", "direction", "content", "imageStyles", "descriptionStyles", "textWidth", "titleStyles"]);

  return AlternateRow_jsx(react_["Flex"], AlternateRow_extends({
    align: align || "flex-end",
    direction: direction || "row",
    mt: rowDistance,
    wrap: wrap || "wrap",
    justify: justify || "space-around"
  }, props), AlternateRow_jsx(react_["Box"], {
    maxWidth: textWidth
  }, AlternateRow_jsx(react_["Box"], titleStyles, content.title), AlternateRow_jsx(react_["Box"], descriptionStyles, content.description)), AlternateRow_jsx(react_["Image"], AlternateRow_extends({
    alt: ""
  }, imageStyles, {
    src: content.image
  })));
}

/* harmony default export */ var components_AlternateRow = (AlternateRow);
// EXTERNAL MODULE: ./src/pageBuilder/Container.jsx
var Container = __webpack_require__("SiTN");

// EXTERNAL MODULE: ./src/pageBuilder/Row.jsx
var Row = __webpack_require__("WqJp");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");

// CONCATENATED MODULE: ./src/pageBuilder/components/ImageAndText.jsx
var ImageAndText_jsx = external_react_default.a.createElement;

function ImageAndText_extends() { ImageAndText_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ImageAndText_extends.apply(this, arguments); }

function ImageAndText_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ImageAndText_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ImageAndText_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function ImageAndText(_ref) {
  let {
    image,
    maxH = "280px",
    spacing = "24px",
    px = "16px",
    description,
    title,
    titleStyle,
    descriptionStyle,
    imageProps
  } = _ref,
      props = ImageAndText_objectWithoutProperties(_ref, ["image", "maxH", "spacing", "px", "description", "title", "titleStyle", "descriptionStyle", "imageProps"]);

  return ImageAndText_jsx(react_["Flex"], ImageAndText_extends({
    px: px,
    my: spacing,
    width: "100%",
    align: "center"
  }, props), ImageAndText_jsx(react_["Image"], ImageAndText_extends({
    alt: "",
    padding: ["20px", "15px", "12px"],
    width: ["100%", "100%", "50%"],
    maxH: maxH,
    src: image
  }, imageProps)), ImageAndText_jsx(react_["Box"], {
    width: ["100%", "100%", "50%"],
    px: ["10px", "10px", "0"]
  }, ImageAndText_jsx(react_["Heading"], ImageAndText_extends({
    mb: "16px",
    fontFamily: "Nexa Bold"
  }, titleStyle), title), ImageAndText_jsx(react_["Text"], ImageAndText_extends({
    textAlign: "justify",
    fontSize: "lg"
  }, descriptionStyle), description)));
}

/* harmony default export */ var components_ImageAndText = (ImageAndText);
// CONCATENATED MODULE: ./src/pageBuilder/Body.jsx
var Body_jsx = external_react_default.a.createElement;

function Body_extends() { Body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Body_extends.apply(this, arguments); }

function Body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



















function Body(_ref) {
  let {
    gap = 4,
    type,
    data,
    width = "100%"
  } = _ref,
      props = Body_objectWithoutProperties(_ref, ["gap", "type", "data", "width"]);

  function giveMeComponent(type, data) {
    switch (type) {
      case "content":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_Content, {
          data: data
        }));

      case "video":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_Video, {
          data: data
        }));

      case "list":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_MyList, {
          data: data
        }));

      case "imageGroup":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_ImageGroup, data));

      case "feature":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_Feature, data));

      case "feature2":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_Feature2, data));

      case "numberCount":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_NumberCount, data));

      case "accordion":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(components_AccordionWithImage, data));

      case "service":
        return Body_jsx(react_["Box"], Body_extends({
          px: [3, 3, gap / 2],
          my: 4,
          w: width
        }, props), Body_jsx(Service["a" /* default */], {
          service: data
        }));

      case "pricing":
        return Body_jsx(react_["Box"], Body_extends({
          px: 0,
          my: 4,
          w: width
        }, props), data);

      case "altrow":
        return Body_jsx(components_AlternateRow, data);

      case "image&text":
        return Body_jsx(react_["Box"], Body_extends({
          px: 0,
          w: width
        }, props), Body_jsx(components_ImageAndText, data));

      case "container":
        return Body_jsx(react_["Box"], Body_extends({
          px: 0,
          my: 4,
          w: width
        }, props), Body_jsx(Row["a" /* default */], null, props.containerData.map((dat, key) => Body_jsx(react_["Box"], {
          key: index,
          px: [6, 6, gap / 2],
          my: 4,
          w: dat.width
        }, giveMeComponent(dat.type, dat.data), " "))));
    }
  }

  return Body_jsx(external_react_default.a.Fragment, null, giveMeComponent(type, data));
}

/* harmony default export */ var pageBuilder_Body = __webpack_exports__["a"] = (Body);

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "IuqZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: __jsx("span", null, " ", __jsx("b", null, "BG Unified Solutions"), " and ", __jsx("b", null, "Fortinet"), " working collaboratively on offering highly secured ", __jsx("b", null, "SDWANaaS"), " services in addition to WAFaaS, BOTaaS and DDOSaaS to the end customer."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "Give us an opportunity to provide you with a HIGHLY SECURED SDWANaaS, Internet Bandwidth with a fully Managed Firewall (Redundant/Dedicated VDOM/VSYS) in addition to the three fully UTM enabled layers of Firewall complimentary for the first 6 months. Not a bad deal ! ! ! !"),
    textAlign: "justify",
    mt: "32px"
  }, {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/services/sdwan.jpg"
    }),
    imageJustify: "center"
  }, {
    text: __jsx("span", null, "One point to connect to all other public clouds including AWS/AZURE/GOOGLE. We will provide you with a high speed backbone! ! !"),
    mt: "32px"
  }, {
    text: __jsx("span", null, "We will be doing a POC for one of the upcoming customer and demonstrate the benefits of Fortinet SDWAN offerings bundled with Fortinet Next Generation Firewall, Web Application Firewall and BOTaaS."),
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "J/xW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using VMWARE, Parallels and Acronis Cyber Infrastructure.",
    textAlign: "justify"
  }, {
    text: "The solution will be tailored to your requirements. We have done an extensive POC using Parallels and VMWARE using different clients including Windows 10, iPhone, iPad and Android from different locations in Australia, NZ, UAE and China.",
    textAlign: "justify"
  }, {
    text: "SOE engineers will work with you to create a golden image for VDI deployment. Session-based RDS will be deployed using high-performance RDS servers (24vCPU's / 128GB RAM / 10G Network Connectivity).",
    textAlign: "justify"
  }, {
    text: "Daily / Hourly backups using Acronis will give you peace of mind.",
    textAlign: "justify"
  }, {
    text: " The Solution is fully integrated with other Microsoft Office products like teams and office 365.",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "J595":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Title(_ref) {
  let {
    fontSize = ["3xl", "32px", "34px", "4xl"],
    px = "5px",
    children = "Lorem Ipsum"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fontSize", "px", "children"]);

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], _extends({
    textAlign: "center",
    fontFamily: "Nexa Bold",
    fontSize: fontSize,
    px: px
  }, props), children);
}

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "L0dh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./src/pageBuilder/pricing/StoragePricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? x + " " + text : "";

function StoragePricing(props) {
  const [tier, setTier] = external_react_default.a.useState(",Storage Tier One SSD Per TB");
  const [type, setType] = external_react_default.a.useState(",Single Copy");
  const [value, setValue] = external_react_default.a.useState(10);

  const handleChange = value => setValue(value);

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "px-lg-4 py-5 rounded-8 shadow-lg"
  }, __jsx("div", {
    className: "display5 text-center"
  }, "Storage Options"), __jsx("div", {
    className: "row px-3 justify-content-center px-lg-4"
  }, __jsx("div", {
    className: "col-lg-10 mt-4"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 10,
    min: 1,
    max: 200,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value + "TB"
  }))), __jsx("div", {
    className: "col-lg-5 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Select Tier "), __jsx(react_["Select"], {
    onChange: e => {
      setTier(e.target.value);
    },
    variant: "outline"
  }, __jsx("option", {
    value: ",Storage Tier One SSD Per TB"
  }, "Storage Tier One SSD Per TB"), __jsx("option", {
    value: ",Storage Tier Two Per TB"
  }, "Storage Tier Two Per TB"), __jsx("option", {
    value: ",Storage Archive Only Per TB"
  }, "Storage Archive Only Per TB"))), __jsx("div", {
    className: "col-lg-5 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Select Type "), __jsx(react_["Select"], {
    onChange: e => {
      setType(e.target.value);
    },
    variant: "outline"
  }, __jsx("option", {
    value: ",Single Copy"
  }, "Single Copy"), __jsx("option", {
    value: ",Redundant - Two Copies - Single Geo Location"
  }, "Redundant - Two Copies - Single Geo Location"), __jsx("option", {
    value: ",Redundant - Three Copies - Two Geo Locations"
  }, "Redundant - Three Copies - Two Geo Locations"))), __jsx("div", {
    className: "col-lg-12 mt-4 d-flex justify-content-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Storage As A Service",
    serviceDescription: `${verifyNotEmpty(value, "TB Storage")} ${tier} ${type}`,
    button: true
  }))))));
}

/* harmony default export */ var pricing_StoragePricing = (StoragePricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/storage.jsx

var storage_jsx = external_react_default.a.createElement;

/* harmony default export */ var storage = __webpack_exports__["default"] = ([{
  mb: 0,
  title: "Get your quote now!",
  description: "Our storage infrastructure includes more than 900TB of Tier1/Tier2/Tier3 Storage",
  rowDistance: 4,
  gap: 0,
  containerWidth: "100%",
  body: [{
    width: "100%",
    type: "pricing",
    data: storage_jsx(pricing_StoragePricing, null)
  }]
}, {
  title: "The Storage Challenge",
  py: 12,
  rowDistance: 8,
  body: [{
    width: ["100%", "100%", "100%", "50%"],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/storage_challenge.jpg"],
      borderRadius: 8,
      width: ["100%", "100%", '90%'],
      height: ["300px", "300px", "400px"],
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "lg"],
      text: storage_jsx("span", null, "Today\u2019s dynamic data center\u2019s present some unique storage challenges. How do you best manage explosive storage capacity requirements and multiple storage silos\u2014as well as consolidation into internal clouds to provide storage as a service? Add complex backup and recovery plans, and their integration into your disaster recovery plans and storage becomes even more complicated. And while there are commonalities that allow for pre-packaged solutions, every data center is different.", storage_jsx("br", null), storage_jsx("br", null), "Each one requires knowledgeable professionals to help define the correct solution, often across multiple manufacturers, to combine and collaborate to create the optimal solution for your organization.")
    }]
  }]
}, {
  title: "STaaS for your Business",
  titleStyle: {
    fontSize: ["32px", "40px"],
    fontWeight: "800"
  },
  description: "Secure, scalable, cost-effective, platform adaptive storage options customized as per your needs.",
  descriptionStyle: {
    px: ["5%", "10%", "15%", "24%"],
    fontSize: ["lg", "xl"],
    opacity: 1,
    mt: 2
  },
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: [4, 8, 12],
  gap: 8,
  body: [{
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/dollar.svg",
      mt: 4,
      title: "Pay Per Use"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/line.svg",
      mt: 4,
      title: "Rapid Elasticity"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/keyboard.svg",
      mt: 4,
      title: "Ubiquitous Access"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/diagnostics.svg",
      mt: 4,
      title: "High Asset Utilization"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/folder-cloud.svg",
      mt: 4,
      title: "Dynamic Resources"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/navigation/arrows-h.svg",
      mt: 4,
      title: "Total Interoperibility"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/sd-card.svg",
      mt: 4,
      title: "Multi-protocol Storage"
    }
  }]
}, {
  pt: 16,
  pb: 0,
  title: "Meeting your Storage needs at Affordable Prices.",
  titleStyle: {
    fontSize: ["3xl", "4xl"],
    px: "10px"
  },
  body: [{
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["lg", "xl"],
      text: "Our staff are trained and experienced across top storage manufacturer offerings, enabling us to design complex, multi-vendor solutions. We’ll show you how to tame explosive storage capacity growth and put management products in place to support your specific virtualized computing and storage environments. From assessments to design, architecture, and implementation, we can help you transform your legacy application environments to “cloud-based” data centres."
    }]
  }]
}, {
  py: 0,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "lg",
      content: [{
        title: "Pay per Use",
        description: "Pay only for the storage you require and use, bundling it up with Data Link. Transparent pricing and costing schedule. Dynamic as per your needs.",
        image: "/assets/images/illustrations/low_pricing.svg"
      }, {
        title: "Efficient and Agile",
        description: "Boost up your operational efficiency and improve your organization’s agility. Also, Real-time monitoring of your storage resources.",
        image: "/assets/images/illustrations/EfficientAndAgile_Stass.svg"
      }, {
        title: "Highly available infrastructure",
        description: "Cutting edge SAN array which intelligently uses caching, Solid State Disks(SSDs), and traditional hard disk spindles. Scaling up or down your storage capacity as and when required.",
        image: "/assets/images/illustrations/HighlyAvailaibleInfra_Stass.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "L8C3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: __jsx("span", null, " Something coming in the next few months which will be one of the best as a service offering of BG Unified Solutions in the AI - Artificial Intelligence space. I am still evaluating the idea but it is a combination of #Cybersecurity and Artificial intelligence. I am excited and tirelessly working to take this company to the next level."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "A great start of a partnership between BG Unified Solutions and Forcepoint will become the basis of this service offering. Keen to work with the Forcepoint team but a brand new team of cyber security professionals to be built within BG Unified Solutions."),
    textAlign: "justify"
  }, // {
  //     image:<Image justifySelf="center" src="/assets/images/services/sdwan.jpg"/>,
  //     imageJustify: "center",
  // },
  {
    text: __jsx("span", null, "We are no one in this industry yet but it doesn't mean we can't be. We come and conquer. Dare to compete with me in DELIVERABILITY.")
  }, {
    text: __jsx("span", null, "Less than 24 hours for the 100% UPTIME for 2 years. YES! You are hearing it right.... I am very loud and clear in saying 100% UPTIME..."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "The next milestone will be 5 years of 100% UPTIME!!"),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "BG WILL COME AND CONQUER"),
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "LZ34":
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "Mc19":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/UcaasPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    fontSize: ["12px", "14px", "15px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "blue",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function UcaasPricing(props) {
  const {
    0: node,
    1: setNode
  } = Object(external_react_["useState"])("");
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])("20-10 SIP");
  const {
    0: additionalUcaas,
    1: setadditionalUcaas
  } = Object(external_react_["useState"])(0);
  const {
    0: hunts,
    1: setHunts
  } = Object(external_react_["useState"])(0);
  const {
    0: addPhones,
    1: setAddPhones
  } = Object(external_react_["useState"])(0);
  const {
    0: num10,
    1: setNum10
  } = Object(external_react_["useState"])(0);
  const {
    0: num50,
    1: setNum50
  } = Object(external_react_["useState"])(0);
  const {
    0: num100,
    1: setNum100
  } = Object(external_react_["useState"])(0);
  const {
    0: extraVM,
    1: setExtraVM
  } = Object(external_react_["useState"])(0);
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [value, setValue] = external_react_default.a.useState(0);

  const handleChange = value => {
    setValue(value);
    setExtraVM(value);
  };

  const {
    0: showSIP,
    1: setShowSIP
  } = Object(external_react_["useState"])(false);
  const {
    0: addSIP,
    1: setAddSIP
  } = Object(external_react_["useState"])(0);
  const {
    0: advancedOptions,
    1: setAdvancedOptions
  } = Object(external_react_["useState"])(false);
  const {
    0: dx650,
    1: setdx650
  } = Object(external_react_["useState"])(0);
  const {
    0: dx80,
    1: setdx80
  } = Object(external_react_["useState"])(0);
  const {
    0: dx70,
    1: setdx70
  } = Object(external_react_["useState"])(0);
  const {
    0: p9951,
    1: setp9951
  } = Object(external_react_["useState"])(0);
  const {
    0: p8845,
    1: setp8845
  } = Object(external_react_["useState"])(0);
  const {
    0: p7965g,
    1: setp7965g
  } = Object(external_react_["useState"])(0);
  var totalPhones = parseInt(type == "100-50 SIP" ? type.slice(0, 3) : type.slice(0, 2)) + additionalUcaas + addPhones;
  const [confSwitch, setconfSwitch] = external_react_default.a.useState(false);

  const handleSwitch = swi => swi ? ",Add Conference Phone" : "";

  const {
    0: aj179,
    1: setaj179
  } = Object(external_react_["useState"])(0);
  const {
    0: a1408,
    1: seta1408
  } = Object(external_react_["useState"])(0);
  const {
    0: a9608,
    1: seta9608
  } = Object(external_react_["useState"])(0);
  const {
    0: fanvilc400,
    1: setfanvilc400
  } = Object(external_react_["useState"])(0);
  const {
    0: fanvilc600,
    1: setfanvilc600
  } = Object(external_react_["useState"])(0);

  const resetOnCardChange = () => {
    setNum10(0);
    setNum50(0);
    setNum100(0);
    setAddSIP(0);
    setValue(0);
    setExtraVM(0);
    setadditionalUcaas(0);
    setAddPhones(0);
    setHunts(0);
    resetPhones();
    setType("20-10 SIP");
  };

  const resetPhones = () => {
    setdx650(0);
    setdx80(0);
    setdx70(0);
    setp9951(0);
    setp8845(0);
    setp7965g(0);
    setaj179(0);
    seta1408(0);
    seta9608(0);
    setfanvilc400(0);
    setfanvilc600(0);
    setconfSwitch(false);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(react_["Tabs"], {
    onChange: () => {
      setShow(false);
      resetPhones();
    },
    align: "center"
  }, __jsx(react_["TabList"], null, __jsx(react_["Tab"], {
    className: "py-4 px-lg-5 display6"
  }, "Cisco"), __jsx(react_["Tab"], {
    className: "py-4 px-lg-5 display6"
  }, "Avaya IP Office"), __jsx(react_["Tab"], {
    className: "py-4 px-lg-5 display6"
  }, "3CX")), __jsx(react_["TabPanels"], null, __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Single Node CUCM",
    icon: "/assets/images/icons/theme/fax.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Cisco / Single Node CUCM");
      resetOnCardChange();
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Dual Node CUCM",
    icon: "/assets/images/icons/theme/fax.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Cisco / Dual Node CUCM");
      resetOnCardChange();
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    className: "hover-effect",
    title: "Multiple Nodes CUCM",
    icon: "/assets/images/icons/theme/fax.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Cisco / Multiple Nodes CUCM");
      resetOnCardChange();
    }
  }, "View More"))))))), __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Single Node",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Complete Mobility", "Cost-Effective", "Flexibly Deployed", "Highly Scalable"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Avaya IP Office / Single Node");
      resetOnCardChange();
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Dual Node",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Complete Mobility", "Cost-Effective", "Flexibly Deployed", "Highly Scalable"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Avaya IP Office / Dual Node");
      resetOnCardChange();
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    className: "hover-effect",
    title: "Multiple Nodes",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Complete Mobility", "Cost-Effective", "Flexibly Deployed", "Highly Scalable"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Avaya IP Office / Multiple Nodes");
      resetOnCardChange();
    }
  }, "View More"))))))), __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Single Node CX",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Scalable"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("3CX / Single Node CX");
      resetOnCardChange();
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Dual Node CX",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Scalable"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("3CX / Dual Node CX");
      resetOnCardChange();
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    className: "hover-effect",
    title: "Multiple Nodes CX",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Scalable"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("3CX / Multiple Nodes CX");
      resetOnCardChange();
    }
  }, "View More"))))))))), __jsx("div", {
    id: "collapse-1",
    className: "collapse-target"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-lg-4  py-5 border-top border-bottom "
  }, __jsx("div", {
    className: "display5 text-center"
  }, node), __jsx("div", {
    className: "row justify-content-center px-3"
  }, __jsx("div", {
    className: "mt-4 col-12"
  }), __jsx("div", {
    className: "col-lg-11 mt-2"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a type"), __jsx(RadioGroup["a" /* default */], {
    onChange: () => {
      setAddSIP(0);
      setShowSIP(false);
      resetPhones();
    },
    setValue: setType,
    options: ["10-5 SIP", "20-10 SIP", "30-20 SIP", "50-30 SIP", "100-50 SIP"],
    mt: 4,
    isInline: true
  })), __jsx("div", {
    className: "mt-2 col-lg-11"
  }, __jsx("p", {
    className: " NunitoSans-Bold "
  }, " ", "Includes", " ", type == "100-50 SIP" ? type.slice(0, 3) : type.slice(0, 2), " UCaaS users and", " ", type == "10-5 SIP" ? type.slice(-5) : type.slice(-6), " ", "channels.", " ")), __jsx("div", {
    className: "col-lg-11 mt-4"
  }, __jsx(react_["Accordion"], {
    defaultIndex: [0],
    allowMultiple: true
  }, __jsx(react_["AccordionItem"], null, __jsx(react_["AccordionButton"], null, __jsx(react_["Box"], {
    flex: "1",
    fontSize: "lg",
    className: "NunitoSans-Bold",
    textAlign: "left"
  }, "Add-ons"), __jsx(react_["AccordionIcon"], null)), __jsx(react_["AccordionPanel"], {
    pb: 4
  }, __jsx("div", {
    className: "row my-1 "
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Additional SIP"), __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 30,
    value: addSIP,
    onChange: value => {
      setAddSIP(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "12px",
    borderRadius: "6px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "12px",
    borderRadius: "6px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "6px",
    height: "22px",
    children: addSIP
  })))), __jsx("div", {
    className: "row my-3 "
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Extra VMs"), __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 30,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "12px",
    borderRadius: "6px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "12px",
    borderRadius: "6px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "6px",
    height: "22px",
    children: value
  })))), __jsx("div", {
    className: "row my-1 justify-content-between"
  }, __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Additional UCaaS"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setadditionalUcaas(value) : setadditionalUcaas(20);
    },
    value: additionalUcaas,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Additional Phones"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setAddPhones(value) : setAddPhones(20);
    },
    value: addPhones,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Additional Hunt Groups"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setHunts(value) : setHunts(20);
    },
    value: hunts,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null))))))), __jsx(react_["AccordionItem"], null, __jsx(react_["AccordionButton"], null, __jsx(react_["Box"], {
    flex: "1",
    fontSize: "lg",
    className: "NunitoSans-Bold",
    textAlign: "left"
  }, "Advanced Options"), __jsx(react_["AccordionIcon"], null)), __jsx(react_["AccordionPanel"], {
    pb: 4
  }, __jsx("div", {
    className: "row justify-content-between"
  }, __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "NUM-10"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setNum10(value) : setNum10(20);
    },
    value: num10,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "NUM-50"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setNum50(value) : setNum50(20);
    },
    value: num50,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-3"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "NUM-100"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setNum100(value) : setNum100(20);
    },
    value: num100,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null))))))), __jsx(react_["AccordionItem"], null, __jsx(react_["AccordionButton"], null, __jsx(react_["Box"], {
    flex: "1",
    fontSize: "lg",
    className: "NunitoSans-Bold",
    textAlign: "left"
  }, "Customize Phones"), __jsx(react_["AccordionIcon"], null)), node.slice(0, 5) == "Cisco" && __jsx(react_["AccordionPanel"], {
    pb: 4
  }, __jsx("div", {
    className: "row justify-content-between"
  }, __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Cisco DX650"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (dx80 + dx70 + p9951 + p8845 + p7965g) ? setdx650(value) : setdx650(totalPhones - (dx80 + dx70 + p9951 + p8845 + p7965g));
    },
    value: dx650,
    min: 0,
    max: totalPhones - (dx80 + dx70 + p9951 + p8845 + p7965g)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Cisco DX80"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (dx650 + dx70 + p9951 + p8845 + p7965g) ? setdx80(value) : setdx80(totalPhones - (dx650 + dx70 + p9951 + p8845 + p7965g));
    },
    value: dx80,
    min: 0,
    max: totalPhones - (dx650 + dx70 + p9951 + p8845 + p7965g)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Cisco DX70"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (dx650 + dx80 + p9951 + p8845 + p7965g) ? setdx70(value) : setdx70(totalPhones - (dx650 + dx80 + p9951 + p8845 + p7965g));
    },
    value: dx70,
    min: 0,
    max: totalPhones - (dx650 + dx80 + p9951 + p8845 + p7965g)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Cisco 9951"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (dx650 + dx80 + dx70 + p8845 + p7965g) ? setp9951(value) : setp9951(totalPhones - (dx650 + dx80 + dx70 + p8845 + p7965g));
    },
    value: p9951,
    min: 0,
    max: totalPhones - (dx650 + dx80 + dx70 + p8845 + p7965g)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Cisco 8845"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (dx650 + dx80 + dx70 + p9951 + p7965g) ? setp8845(value) : setp8845(totalPhones - (dx650 + dx80 + dx70 + p9951 + p7965g));
    },
    value: p8845,
    min: 0,
    max: totalPhones - (dx650 + dx80 + dx70 + p9951 + p7965g)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Cisco 7965G"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (dx650 + dx80 + dx70 + p9951 + p8845) ? setp7965g(value) : setp7965g(totalPhones - (dx650 + dx80 + dx70 + p9951 + p8845));
    },
    value: p7965g,
    min: 0,
    max: totalPhones - (dx650 + dx80 + dx70 + p9951 + p8845)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-12 mt-3 d-flex align-items-center"
  }, __jsx(react_["FormLabel"], {
    ml: 1,
    htmlFor: "license"
  }, "Add Conference Phone?"), __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setconfSwitch(e.target.checked);
    },
    isChecked: confSwitch,
    id: "license"
  })))), node.slice(0, 5) == "Avaya" && __jsx(react_["AccordionPanel"], {
    pb: 4
  }, __jsx("div", {
    className: "row justify-content-between"
  }, __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Avaya J179"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (a1408 + a9608) ? setaj179(value) : setaj179(totalPhones - (a1408 + a9608));
    },
    value: aj179,
    min: 0,
    max: totalPhones - (a1408 + a9608)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Avaya 1408"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (aj179 + a9608) ? seta1408(value) : seta1408(totalPhones - (aj179 + a9608));
    },
    value: a1408,
    min: 0,
    max: totalPhones - (aj179 + a9608)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Avaya 9608"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - (aj179 + a1408) ? seta9608(value) : seta9608(totalPhones - (aj179 + a1408));
    },
    value: a9608,
    min: 0,
    max: totalPhones - (aj179 + a1408)
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-12 mt-3  d-flex align-items-center"
  }, __jsx(react_["FormLabel"], {
    ml: 1,
    htmlFor: "license"
  }, "Add Conference Phone?"), __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setconfSwitch(e.target.checked);
    },
    isChecked: confSwitch,
    id: "license"
  })))), node.slice(0, 3) == "3CX" && __jsx(react_["AccordionPanel"], {
    pb: 4
  }, __jsx("div", {
    className: "row justify-content-between"
  }, __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Fanvil C400"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - fanvilc600 ? setfanvilc400(value) : setfanvilc400(totalPhones - fanvilc600);
    },
    value: fanvilc400,
    min: 0,
    max: totalPhones - fanvilc600
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-5 my-1"
  }, __jsx("div", {
    className: "NunitoSans-SemiBold"
  }, "Fanvil C600"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= totalPhones - fanvilc400 ? setfanvilc600(value) : setfanvilc600(totalPhones - fanvilc400);
    },
    value: fanvilc600,
    min: 0,
    max: totalPhones - fanvilc400
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-12 mt-3 d-flex align-items-center"
  }, __jsx(react_["FormLabel"], {
    ml: 1,
    htmlFor: "license"
  }, "Add Conference Phone?"), __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setconfSwitch(e.target.checked);
    },
    isChecked: confSwitch,
    id: "license"
  }))))))), __jsx("div", {
    className: "col-lg-12 mt-4 d-flex justify-content-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "Unified Communications As A Service",
    serviceDescription: `${node},${type}
                                                    ${verifyNotEmpty(addSIP, "Additional SIP")}
                                                    ${verifyNotEmpty(additionalUcaas, "Additional UCaaS")}
                                                    ${verifyNotEmpty(addPhones, "Additonal Phones")}${verifyNotEmpty(hunts, "Additonal Hunts")}
                                                    ${verifyNotEmpty(extraVM, "Extra VMs")}${verifyNotEmpty(num10, "NUM-10")}${verifyNotEmpty(num50, "NUM-50")}${verifyNotEmpty(num100, "NUM-100")}
                                                    
                                                    ${verifyNotEmpty(dx650, "Cisco DX650")}
                                                    ${verifyNotEmpty(dx80, "Cisco DX80")}
                                                    ${verifyNotEmpty(dx70, "Cisco DX70")}
                                                    ${verifyNotEmpty(p9951, "Cisco 9951")}
                                                    ${verifyNotEmpty(p8845, "Cisco 8845")}
                                                    ${verifyNotEmpty(p7965g, "Cisco 7965G")}
                                                    ${verifyNotEmpty(aj179, "Avaya AJ179")}
                                                    ${verifyNotEmpty(a1408, "Avaya A1408")}
                                                    ${verifyNotEmpty(a9608, "Avaya A9608")}
                                                    ${verifyNotEmpty(fanvilc400, "3CX Fanvil C400")}
                                                    ${verifyNotEmpty(fanvilc600, "3CX Fanvil C600")}
                                                    ${handleSwitch(confSwitch)}
                                                    `
  })))))));
}

/* harmony default export */ var pricing_UcaasPricing = (UcaasPricing);
// EXTERNAL MODULE: external "react-flickity-component"
var external_react_flickity_component_ = __webpack_require__("ZHLg");
var external_react_flickity_component_default = /*#__PURE__*/__webpack_require__.n(external_react_flickity_component_);

// CONCATENATED MODULE: ./src/pageBuilder/components/Slider.jsx
var Slider_jsx = external_react_default.a.createElement;





function SliderC({
  sliderInfo
}) {
  return Slider_jsx("div", {
    className: " position-relative"
  }, Slider_jsx(external_react_flickity_component_default.a, {
    options: {
      autoPlay: false,
      groupCells: true,
      adaptiveHeight: true,
      imagesLoaded: true,
      pageDots: false,
      draggable: true,
      pauseAutoPlayOnHover: true,
      prevNextButtons: true,
      wrapAround: true
    }
  }, sliderInfo.map((info, index) => Slider_jsx(react_["Flex"], {
    key: index,
    justifyContent: "center",
    w: ["50%", "32%", "25%", "20%"]
  }, Slider_jsx(react_["Box"], {
    p: "15px",
    mx: "10px",
    my: 2,
    shadow: "md",
    overflow: "hidden"
  }, Slider_jsx(react_["Image"], {
    src: info.imgSrc,
    h: "130px",
    w: "200px"
  }), Slider_jsx(react_["Box"], {
    textAlign: "center",
    mt: "3",
    fontWeight: "semibold",
    as: "h4"
  }, info.title))))));
}

/* harmony default export */ var Slider = (SliderC);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/ucaas.jsx

var ucaas_jsx = external_react_default.a.createElement;


const ucaas_sliderInfo = [{
  title: ucaas_jsx("span", null, "Cisco 7965G"),
  imgSrc: "/assets/images/phones/cisco/7965G.png"
}, {
  title: ucaas_jsx("span", null, "Avaya 1408"),
  imgSrc: "/assets/images/phones/Avaya/avaya1408.png"
}, {
  title: ucaas_jsx("span", null, "Cisco 8845"),
  imgSrc: "/assets/images/phones/cisco/8845.png"
}, {
  title: ucaas_jsx("span", null, "Avaya 9608"),
  imgSrc: "/assets/images/phones/Avaya/avaya9608.png"
}, {
  title: ucaas_jsx("span", null, "Cisco 9951"),
  imgSrc: "/assets/images/phones/cisco/9951.png"
}, {
  title: ucaas_jsx("span", null, "Avaya J179"),
  imgSrc: "/assets/images/phones/Avaya/avayaJ179.png"
}, {
  title: ucaas_jsx("span", null, "Cisco DX70"),
  imgSrc: "/assets/images/phones/cisco/DX70.png"
}, {
  title: ucaas_jsx("span", null, "Fanvil C400"),
  imgSrc: "/assets/images/phones/3CX/fanvilC400.png"
}, {
  title: ucaas_jsx("span", null, "Cisco DX80"),
  imgSrc: "/assets/images/phones/cisco/DX80.png"
}, {
  title: ucaas_jsx("span", null, "Fanvil C600"),
  imgSrc: "/assets/images/phones/3CX/fanvilC600.png"
}, {
  title: ucaas_jsx("span", null, "Cisco DX650"),
  imgSrc: "/assets/images/phones/cisco/DX650.png"
}];
/* harmony default export */ var ucaas = __webpack_exports__["default"] = ([{
  typeWriter_title: {
    before: "",
    typed: ["Capture", "Live Stream", "Repurpose"],
    after: " Your Application on the Cloud"
  },
  titleStyle: {
    fontSize: ["3xl", "4xl"],
    px: "5px"
  },
  description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization, and Quality Monitoring. N+N Redundant components are fulfilling all Unified Collaboration requirements of your business. Expertise to address these challenges by designing and delivering complete collaboration solutions that maximize your capabilities and investments while minimizing your technology footprint",
  descriptionStyle: {
    textAlign: "left"
  },
  rowDistance: 8,
  gap: 10,
  body: [{
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/microphone.svg",
      title: "Voice Integration",
      align: "left",
      description: "The extended capability of your telephony solutions for a better output with the same resource."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/chat.svg",
      title: "Unified Messaging",
      align: "left",
      description: "Different forms of media (E-Mail, SMS, video, voicemail), integrated into a single system."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/learn.svg",
      title: "Collaboration Experts",
      align: "left",
      description: "We offer business and technology assessments to help identify any barriers for your collaborative Goals to succeed."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/cloud.svg",
      title: "Backup over Cloud",
      align: "left",
      description: "The business keeps running smoothly, with everything backed up on the cloud, while taking measures for potential threats."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/headphones.svg",
      title: "Excellent Customer Support",
      align: "left",
      description: "BGUS's friendly and skilled customer support service is available 24X7X365, with significantly less response time. Our policies ensure rapid and satisfactory resolution of issues."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/user.svg",
      title: "Hot Desking",
      align: "left",
      description: "Log onto any device on your system, and have your user profile, populate on that particular system."
    }
  }]
}, {
  py: 8,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: ucaas_jsx(Slider, {
      sliderInfo: ucaas_sliderInfo
    })
  }]
}, {
  bg: "light.400",
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: ucaas_jsx(pricing_UcaasPricing, null)
  }]
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  py: [8, 16],
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Flexibility / Scalability",
        description: "For any of your organization departments, our UCaaS offering provides a simplified IT management and a highly scalable platform. Irrespective of the end-user, everyone gets access to the latest and the most incredible collaboration tools.",
        image: "/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg"
      }, {
        title: "Cost-Effectiveness",
        description: "For your business, we are offering and providing a flat billing structure. It's designed for pay as you go model that shifts your costs from capex to opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one-off expenses into your monthly payment.",
        image: "/assets/images/illustrations/Value_for_Money.svg"
      }, {
        title: "Wide range of services",
        description: "Employees get access to voice and video, voicemail and integrated messaging, instant messaging and presence, web conferencing and desktop collaboration, mobility service.",
        image: "/assets/images/illustrations/platforms.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Nk4L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/ProxyPricing.jsx
var __jsx = external_react_default.a.createElement;




function ProxyPricing(props) {
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center px-lg-2"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, " Single Shared Proxy ", __jsx("br", null), " ", __jsx("small", null, " (Per Mbps) "), " "),
    icon: "/assets/images/icons/theme/security.svg",
    featureList: ["Single Copy", "Single Location", "Reliable & Secure", "Multi-Layered", "Network Filtered", "Cost-Effective"]
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Proxy As A Service",
    serviceDescription: "Single Shared Proxy"
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, " Cluster Shared Proxy ", __jsx("br", null), " ", __jsx("small", null, " (Per Mbps) "), " "),
    icon: "/assets/images/icons/theme/security.svg",
    featureList: ["Multiple Copies", "Single Location", "Reliable & Secure", "Multi-Layered", "Network Filtered", "Cost-Effective"]
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Proxy As A Service",
    serviceDescription: "Cluster Shared Proxy"
  }))))));
}

/* harmony default export */ var pricing_ProxyPricing = (ProxyPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/proxy.jsx

var proxy_jsx = external_react_default.a.createElement;

/* harmony default export */ var proxy = __webpack_exports__["default"] = ([{
  title: "Connect with Proxy",
  gap: 0,
  body: [{
    type: "content",
    data: [{
      text: proxy_jsx("span", null, "Proxy as a Service refers to proxy servers that act as intermediate nodes or connecting points between an end-user and the internet. Proxy as a Service allows you to connect to a different server and provides you with access to web pages, files, etc. Proxy servers facilitate administrative, authoritative, security issues in the enterprise world."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center",
      opacity: .7
    }]
  }, {
    width: "100%",
    type: "pricing",
    data: proxy_jsx(pricing_ProxyPricing, null)
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  gap: 6,
  body: [{
    width: "100%",
    type: "container",
    containerData: [{
      width: ["50%", "33.33%", "33.33%", "50%", "33.33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Secure"
      }
    }, {
      width: ["50%", "33.33%", "33.33%", "50%", "33.33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/time-schedule.svg",
        mt: 4,
        title: "Low Latency"
      }
    }, {
      width: ["50%", "33.33%", "33.33%", "50%", "33.33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/key.svg",
        mt: 4,
        title: "Authoritative"
      }
    }, {
      width: ["50%", "33.33%", "33.33%", "50%", "33.33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/diagnostics.svg",
        mt: 4,
        title: "Administrative"
      }
    }, {
      width: ["50%", "33.33%", "33.33%", "50%", "33.33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/stack.svg",
        mt: 4,
        title: "Multi-Layered"
      }
    }, {
      width: ["50%", "33.33%", "33.33%", "50%", "33.33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/navigation/arrows-h.svg",
        mt: 4,
        title: "Remote Connectivity"
      }
    }]
  }]
}, {
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Firewall ",
        description: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC",
        image: "/assets/images/illustrations/firewall.svg"
      }, {
        title: "Network Filtering",
        description: "Multiple IP types globally, in a clustered or isolated environment. Enhanced proxy service by isolating the private network from the web, thus allowing limiting access of private network users to Internet-based resources.",
        image: "/assets/images/illustrations/security_lock_firewall.svg"
      }, {
        title: "Fast speed with minimum bandwidth usage",
        description: "Use proxy servers at a faster speed and limiting the bandwidth utilization, by filtering traffic, caching files and web pages accessed. Highly advanced, available and multiple data center locations.",
        image: "/assets/images/illustrations/sip.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "S63P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/LoadBalancerPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    fontSize: ["12px", "14px", "15px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function LoadBalancerPricing(props) {
  const [type, setType] = external_react_default.a.useState("Single");
  const [applications, setApplications] = external_react_default.a.useState(1);
  const [connections, setConnections] = external_react_default.a.useState(1);
  const [IP, setIP] = external_react_default.a.useState(1);
  const [value, setValue] = external_react_default.a.useState(10);

  const handleChange = value => setValue(value);

  const [bot, setBot] = external_react_default.a.useState(false);
  const [redundancy, setRedundancy] = external_react_default.a.useState(false);

  const handleBot = swi => swi ? ",Enable GTM" : "";

  const handleRedundancy = swi => swi ? ",Enable WAF" : "";

  return __jsx("div", {
    id: "pricing"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "px-lg-4 py-5 bg-white rounded-8 shadow-lg"
  }, __jsx("div", {
    className: "row px-3  px-lg-4"
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1 d-flex mt-4"
  }, __jsx(react_["Image"], {
    h: "40px",
    mr: 4,
    src: "/assets/images/brands/Icons/F5_Networks.png"
  }), __jsx("div", {
    className: "display5"
  }, "F5 Load Balancing")), __jsx("div", {
    className: "col-lg-10 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a type"), __jsx(RadioGroup["a" /* default */], {
    setValue: setType,
    options: ["Single", "Cluster"]
  })), __jsx("div", {
    className: "col-lg-4 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Applications"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setApplications(value) : setApplications(20);
    },
    value: applications,
    min: 1,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-4 offset-lg-2 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Connections / Application"), __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setConnections(value) : setConnections(20);
    },
    value: connections,
    min: 1,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-10 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Bandwidth per Application (in Mbps)"), __jsx(react_["Slider"], {
    color: "primary",
    my: 2,
    min: 1,
    max: 80,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value * 5
  }))), __jsx("div", {
    className: "col-lg-10 offset-lg-1 mt-4 d-flex justify-content-between"
  }, __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setBot(e.target.checked);
    },
    isChecked: bot,
    id: "license"
  }), __jsx(react_["FormLabel"], {
    ml: [0, 3],
    htmlFor: "license"
  }, "GTM Enabled")), __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setRedundancy(e.target.checked);
    },
    isChecked: redundancy,
    id: "license"
  }), __jsx(react_["FormLabel"], {
    ml: [0, 3],
    htmlFor: "license"
  }, "WAF Enabled"))), __jsx("div", {
    className: "col-lg-5 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "How many Public IP's?")), __jsx("div", {
    className: "offset-lg-1 col-lg-4 mt-3"
  }, __jsx(react_["NumberInput"], {
    onChange: value => {
      value <= 20 ? setIP(value) : setIP(20);
    },
    value: IP,
    min: 1,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-12 mt-4 d-flex justify-content-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Load Balancer As A Service",
    serviceDescription: ` F5, ${type} ${verifyNotEmpty(applications, "Application")} ${verifyNotEmpty(connections, "Connections/App")} ${verifyNotEmpty(value * 5, "Mbps Bandwidth/App")} ${handleBot(bot)} ${handleRedundancy(redundancy)} ${verifyNotEmpty(IP, "Public IP's")}`,
    button: true
  }))))));
}

/* harmony default export */ var pricing_LoadBalancerPricing = (LoadBalancerPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/loadBalancer.jsx

var loadBalancer_jsx = external_react_default.a.createElement;

/* harmony default export */ var loadBalancer = __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/lb-2.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Load Balancing Solutions for your Application Servers",
      titleSize: [28, 28, 28, 32],
      text: loadBalancer_jsx("span", null, "Load balancing is the most scalable methodology for handling many requests from modern multi-application, multi-device workflows. When traffic runs at normal levels, global (geographic) load balancers direct traffic to dedicated optimized application servers, rapidly redirect traffic from a data center suffering from an outage to an available server.")
    }]
  }]
}, {
  py: [0, 4],
  gap: 0,
  mt: 0,
  mb: 0,
  px: 0,
  bg: "light.400",
  body: [{
    width: "100%",
    type: "pricing",
    data: loadBalancer_jsx(pricing_LoadBalancerPricing, null)
  }]
}, {
  title: "Manage your Traffic with Our Load Balancers",
  description: "BG Unified Solutions provide F5 topology for your Load Balancing needs to manage traffic asserted on your servers and applications.",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/chart-line-1.svg",
      mt: 4,
      title: "High Availability"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/line.svg",
      mt: 4,
      title: "Flexibility Assured"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/git-4.svg",
      mt: 4,
      title: "Multiple Features"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/headphones.svg",
      mt: 4,
      title: "Personalized Support"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/clock.svg",
      mt: 4,
      title: "Designed for Uptime"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/size.svg",
      mt: 4,
      title: "Scalability Guaranteed"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/chair-1.svg",
      mt: 4,
      title: "Easy Deployment"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: loadBalancer_jsx("span", null, "High traffic sites need resources to serve large amounts of unique visitors quickly and efficiently. To scale to meet those needs, several web servers, commonly known as a farm, need to be implemented and route traffic across them in a balanced way."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}]);

/***/ }),

/***/ "SJ5o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r/2C");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CloudExchangePricing(props) {
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingCard */ "a"], {
    icon: "/assets/images/icons/theme/cloud_exchange.svg",
    title: "VC Bandwidth 100M"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "1G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 100M, 1G Port"
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "10G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 100M, 10G Port"
  }))), __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingCard */ "a"], {
    icon: "/assets/images/icons/theme/cloud_exchange.svg",
    title: "VC Bandwidth 200M"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "1G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 200M, 1G Port"
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "10G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 200M, 10G Port"
  })))), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingCard */ "a"], {
    icon: "/assets/images/icons/theme/cloud_exchange.svg",
    title: "VC Bandwidth 500M"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "1G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 500M, 1G Port"
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "10G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 500M, 10G Port"
  }))), __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingCard */ "a"], {
    icon: "/assets/images/icons/theme/cloud_exchange.svg",
    title: "VC Bandwidth 1G"
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "1G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 1G, 1G Port"
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__[/* PricingQuote */ "b"], {
    title: "10G Port",
    serviceName: "CEX As A Service",
    serviceDescription: "VC Bandwidth 1G, 10G Port"
  }))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (CloudExchangePricing);

/***/ }),

/***/ "SiTN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Container(_ref) {
  let {
    width = ["100%", "100%", "720px", "960px", "1140px"],
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["width", "children"]);

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    px: 4,
    mx: "auto",
    width: width
  }, props), children);
}

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "T+MD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/CloudLoggingPricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + text : "";

function CloudLoggingPricing(props) {
  const [logs1, setLogs1] = external_react_default.a.useState(0);
  const [logs2, setLogs2] = external_react_default.a.useState(0);
  const [logs3, setLogs3] = external_react_default.a.useState(0);
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters px-lg-5"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, "Single Node", __jsx("br", null), "Single DC"),
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["ML, Customized Pattern", "Log Retention Periods", "Customizable", "Portal access provided.", "Troubleshooting", "Fully Managed Service"]
  }, __jsx("div", {
    className: "w-100 px-3 text-center my-2 NunitoSans-Bold"
  }, __jsx(react_["Divider"], {
    mb: "4"
  }), "Extra Logs"), __jsx("div", {
    className: "w-100 px-3 mb-2"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs1,
    max: 20,
    onChange: value => {
      setLogs1(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "10px",
    borderRadius: "5px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: `${logs1}G`
  }))), __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Logging Cloud Connect",
    serviceDescription: `Single Node Single DC ${verifyNotEmpty(logs1, "G Extra Logs")}`
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, "Multiple Nodes", __jsx("br", null), "Single DC"),
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["ML, Customized Pattern", "Log Retention Periods", "Customizable", "Portal access provided.", "Troubleshooting", "Fully Managed Service"]
  }, __jsx("div", {
    className: "w-100 px-3 text-center my-2 NunitoSans-Bold"
  }, __jsx(react_["Divider"], {
    mb: "4"
  }), "Extra Logs"), __jsx("div", {
    className: "w-100 px-3 mb-2"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs2,
    max: 20,
    onChange: value => {
      setLogs2(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "10px",
    borderRadius: "5px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: `${logs2}G`
  }))), __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Logging Cloud Connect",
    serviceDescription: `Multiple Nodes Single DC ${verifyNotEmpty(logs2, "G Extra Logs")}`
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, "Multiple Nodes", __jsx("br", null), "Multiple DC"),
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["ML, Customized Pattern", "Log Retention Periods", "Customizable", "Portal access provided.", "Troubleshooting", "Fully Managed Service"]
  }, __jsx("div", {
    className: "w-100 px-3 text-center my-2 NunitoSans-Bold"
  }, __jsx(react_["Divider"], {
    mb: "4"
  }), "Extra Logs"), __jsx("div", {
    className: "w-100 px-3 mb-2"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs3,
    max: 20,
    onChange: value => {
      setLogs3(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "10px",
    borderRadius: "5px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: `${logs3}G`
  }))), __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Logging Cloud Connect",
    serviceDescription: `Multiple Nodes Multiple DC ${verifyNotEmpty(logs3, "G Extra Logs")}`
  }))))));
}

/* harmony default export */ var pricing_CloudLoggingPricing = (CloudLoggingPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/logging.jsx

var logging_jsx = external_react_default.a.createElement;

/* harmony default export */ var logging = __webpack_exports__["default"] = ([{
  typeWriter_title: {
    before: "",
    typed: ["Collect", "Store", "Report"],
    after: "the various data and underlying threats."
  },
  description: "Cloud Logging allows the ingestion of system log data and applications from numerous VMs and analyzes real-time data. The data analysis is done through logs, which are managed and simplified over the cloud, with BG Unified Solutions Cloud Logging as a Service, Log central services over the internet. Add the shield to protect your business reputation—application and system log ingestions.",
  descriptionStyle: {
    textAlign: "left"
  },
  body: [{
    width: "100%",
    type: "pricing",
    data: logging_jsx(pricing_CloudLoggingPricing, null)
  }]
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Completeness",
        description: "Completely integrated service performing at scale can ingest system log data from multiple VMs. Reduction in need for on-site storage. Download archives on-demand.",
        image: "/assets/images/illustrations/Completeness_CloudLogging.svg"
      }, {
        title: "Simplified log management",
        description: "Collecting and managing logs from numerous endpoints, servers, and cloud-based resources with ease. Management and monitoring your logs and queries live.",
        image: "/assets/images/illustrations/SimplifiedLogManagment_CloudLogging.svg"
      }, {
        title: "Proactive Troubleshooting",
        description: "  Dynamic field explorer enhancing your troubleshooting experience. Easy troubleshooting in advanced and modern environments, with appropriate tools and resources.",
        image: "/assets/images/illustrations/ProactiveTroubleShooting_CloudLogging.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "TJ6B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("SiTN");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Section(_ref) {
  let {
    my = 8,
    py = 8,
    blend,
    align = "center",
    bgAttachment,
    containerWidth,
    children = "Section"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["my", "py", "blend", "align", "bgAttachment", "containerWidth", "children"]);

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({
    my: my,
    py: py,
    width: "100%",
    justify: align,
    direction: "column",
    backgroundPosition: "center",
    backgroundAttachment: bgAttachment,
    backgroundSize: "cover",
    style: {
      backgroundBlendMode: blend
    }
  }, props), __jsx(_Container__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    width: containerWidth
  }, children));
}

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),

/***/ "TzDg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  typeWriter_title: {
    before: "",
    typed: ["Collaborative", "Automated", "Affordable"],
    after: "Help Desk Services."
  },
  gap: 10,
  py: [8, 16],
  rowDistance: 8,
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/sdaas.svg"],
      borderRadius: 8,
      width: ['100%', "100%", "80%"],
      height: "240px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      text: __jsx("span", null, "We believe that Service / Help Desk should be more than just a resource for solving problems \u2013 it should be a hotbed of innovation and discoveries. So when you outsource to BGUS, you aren\u2019t just getting a partner who\u2019ll provide round the clock support to users all over the world, but one who\u2019ll strive tirelessly to improve the way they work. We give entirely customer-centric solutions, always upgrading and updating\u2026")
    }]
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "80%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "Aim to strengthen and enhance internal resources",
      textAlign: "left",
      fontSize: ["lg", "xl"],
      titleSize: [40, 40, 48],
      my: [2, 4, 8],
      text: "Through our Sense and Respond methodology, we empower our experts to develop preventative solutions to recurring problems and, in turn, enable users to self-serve wherever possible."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/commit.svg",
        mt: 4,
        title: "Single Point of Contact"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/clipboard-check.svg",
        mt: 4,
        title: "Expert Management"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/tools/swiss-knife.svg",
        mt: 4,
        title: "Standalone Service"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/communication/group.svg",
        mt: 4,
        title: "Responsive, Reliable team"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/shopping/dollar.svg",
        mt: 4,
        title: "Priced Per Ticket"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/thunder-move.svg",
        mt: 4,
        title: "Rapid Service Delivery"
      }
    }]
  }]
}, {
  title: "BG Unified Solutions as your HelpDesk Partner",
  py: 4,
  body: [{
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
      flexDirection: ["column", "column", "row-reverse"],
      description: "Your time is valuable. Consequently, a qualified support crew answering the call helps us identify the issue faster. Responsive and reliable support services are delivered by a highly trained, Australia based team. For infrastructure, networking, security, cloud-based service, end-user, or any other facet of IT support, BGUS can deliver a world-class technical support solution. Get back on track fast. You can count on our responsive, reliable team to provide cost-effective expertise on-demand !!!"
    }
  }]
}, {
  gap: 10,
  my: 0,
  body: [{
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/color/headphones.svg",
      title: "Complete Australian Support and Helpdesk Staff",
      description: "",
      align: "center"
    }
  }, {
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/color/map-pin.svg",
      title: "Location Independent Help Desk Solutions",
      description: "",
      align: "center"
    }
  }, {
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/color/24-hours.svg",
      title: "24X7 Highly Available Help-Desk Staff",
      description: "",
      align: "center"
    }
  }]
}]);

/***/ }),

/***/ "UcTW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/SdwanPricing.jsx
var __jsx = external_react_default.a.createElement;





function SdwanPricing(props) {
  const features = ["High-performance routes", "Fully Managed Service"];
  const [switch1, setSwitch1] = external_react_default.a.useState(false);
  const [switch2, setSwitch2] = external_react_default.a.useState(false);

  const handleSwitch = swi => swi ? ",Virtual" : ",Physical";

  const fortnietFeatures = ["One WAN Link", "3G/4G Failover Configuration", "Multi-Path Controller & Link Health Monitoring", "Dual WAN", "Load-balancing & Bandwidth Sharing", "Preferential Policy Routes", "QoS Provisioning", "Application Prioritization", "VPN Failover to data center", "Performance SLA", "Traffic Shaping"];
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    featureList: fortnietFeatures.slice(0, 3),
    excludingList: fortnietFeatures.slice(3, 11),
    icon: "/assets/images/icons/theme/origami.svg",
    title: "Standard"
  }, __jsx("div", {
    className: "d-flex btn align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SD-WAN As A Service",
    serviceDescription: "Fortinet, Standard"
  })))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    featureList: fortnietFeatures.slice(0, 6),
    excludingList: fortnietFeatures.slice(6, 11),
    icon: "/assets/images/icons/theme/paper-plane.svg",
    title: "Professional"
  }, __jsx("div", {
    className: "d-flex btn align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SD-WAN As A Service",
    serviceDescription: "Fortinet, Professional"
  })))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    featureList: fortnietFeatures.slice(0, 11),
    icon: "/assets/images/icons/theme/airplane.svg",
    title: "Business"
  }, __jsx("div", {
    className: "d-flex btn align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "SD-WAN As A Service",
    serviceDescription: "Fortinet, Business"
  })))))), __jsx("div", null))));
}

/* harmony default export */ var pricing_SdwanPricing = (SdwanPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/sdwan.jsx

var sdwan_jsx = external_react_default.a.createElement;

/* harmony default export */ var sdwan = __webpack_exports__["default"] = ([{
  px: 2,
  title: "Secure Connectivity with SD-WAN",
  description: "As distributed enterprises and small and midsize businesses (SMBs) embrace digital innovation (DI), legacy networking and security infrastructures often fail to deliver sufficient performance and protection. Software-defined wide-area networking (SD-WAN) and SD-Branch solutions can help organizations consolidate traditional infrastructure and facilitate adoption of the latest business-enabling technologies.",
  descriptionStyle: {
    fontSize: ["xl", "lg"],
    opacity: 0.7
  }
}, {
  py: 0,
  gap: 0,
  my: 0,
  bg: "light.400",
  body: [{
    width: "100%",
    type: "pricing",
    data: sdwan_jsx(pricing_SdwanPricing, null)
  }]
}, {
  gap: 0,
  mt: "-32px",
  bg: "light.400",
  pt: 0,
  body: [{
    width: "100%",
    type: "imageGroup",
    data: {
      images: ["/assets/images/sponsors/fortinet.png"],
      height: "64px",
      objectFit: "contain"
    }
  }]
}, {
  px: 2,
  title: "Find out How Fortinet SD-WAN will improve your network:",
  description: "Managed SD-WAN services that are powered by a fully featured, integrated solution lay the groundwork for adding SD-Branch capabilities. This gives service providers the ability to grow revenue with customers while significantly reducing additional infrastructure complexity, cost, and overall onboarding churn.",
  descriptionStyle: {
    px: "10px"
  },
  gap: 10,
  rowDistance: 8,
  body: [{
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/mobile.svg",
      title: "Application Awareness",
      align: "left",
      size: "50px",
      description: "With applications, users, and devices varying in their level of priority. in addition to reliable connectivity. Increasing WAN bandwidth demands can carry high costs while also failing to meet the designated SLA. Intelligent application awareness capabilities with link resiliency can address this issue."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/tags.svg",
      title: "Multitenant by Design",
      align: "left",
      size: "50px",
      description: "Fortinet solutions are designed to be multitenant. Multiple customers managed from the same console. Offering shared, isolated SD-WAN infrastructure increases average revenue per user."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/team.svg",
      title: "Professional Development",
      align: "left",
      size: "50px",
      description: "Fortinet offers multiple training formats for MSPs and MSSPs. This enables MSPs and MSSPs to quickly ramp and deploy SD-WAN and other value-added services like SD-Branch."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/lock.svg",
      title: "Improved security",
      align: "left",
      size: "50px",
      description: "A solution that integrates advanced SD-WAN networking capabilities within a next-generation firewall (NGFW) provides a foundational element for a managed SD-WAN service. This consolidation reduces risk along with CapEx and OpEx costs."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/agile.svg",
      title: "Flexible Consumption Models",
      align: "left",
      size: "50px",
      description: "Managed SD-WAN services are available with multiple pricing and product consumption options. SD-WAN deployments and value-added services can be scoped to a customer’s needs."
    }
  }, {
    py: 4,
    width: ["100%", "100%", "50%"],
    type: "feature2",
    data: {
      titleFontSize: ["lg", "xl"],
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/software.svg",
      title: "Comprehensive Visibility",
      align: "left",
      size: "50px",
      description: "Integrated application visibility enables threat prevention, detection, and response. Automated monitoring and reporting decreases overhead associated with regulatory compliance."
    }
  }]
}]);

/***/ }),

/***/ "Uexg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/DNSPricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

function DNSPricing(props) {
  const [show, setShow] = external_react_default.a.useState(false);
  const [plan, setPlan] = external_react_default.a.useState("");

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop + 850);
  };

  const [type, setType] = external_react_default.a.useState("Windows");
  const [zones, setZone] = external_react_default.a.useState(0);
  const [dailyBackups, setDailyBackups] = external_react_default.a.useState(false);

  const handledailyBackups = dailyBackups => dailyBackups ? ",Add Daily Backups" : "";

  const [redundantDNS, setRedundantDNS] = external_react_default.a.useState(false);

  const handleRedundantDNS = redundantDNS => redundantDNS ? ",Include Redundant DNS" : "";

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1"
  }, __jsx(react_["Flex"], {
    justify: "center",
    my: 4
  }, __jsx(react_["Button"], {
    bg: "light.500",
    rounded: 0,
    borderBottomWidth: 2,
    borderBottomColor: type === "Windows" ? "primary.500" : "light.400",
    onClick: () => {
      setShow(false);
      setZone(0);
      setType("Windows");
    },
    className: "py-4 px-5 display6"
  }, "Windows"), __jsx(react_["Button"], {
    bg: "light.500",
    rounded: 0,
    borderBottomWidth: 2,
    borderBottomColor: type === "BIND" ? "primary.500" : "light.400",
    onClick: () => {
      setShow(false);
      setZone(0);
      setType("BIND");
    },
    className: "py-4 px-5 display6"
  }, "BIND"), __jsx(react_["Button"], {
    bg: "light.500",
    rounded: 0,
    borderBottomWidth: 2,
    borderBottomColor: type === "Infoblox" ? "primary.500" : "light.400",
    onClick: () => {
      setShow(false);
      setZone(0);
      setType("Infoblox");
    },
    className: "py-4 px-5 display6"
  }, "Infoblox")), __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/paper-plane.svg",
    title: "Standard DNS (BlackBox)",
    featureList: ["Includes 5 Zones", "Low Latency", "High Availability", "BlackBox Service", "Cost-Effective"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Standard DNS (BlackBox)");
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/rocket.svg",
    title: "Premium DNS (BlackBox)",
    featureList: ["Includes 5 Zones", "Low Latency", "High Availability", "BlackBox Service", "Cost-Effective"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Premium DNS (BlackBox)");
    }
  }, "View options"))))), __jsx("div", null, __jsx("div", {
    id: "collapse-1"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, plan), __jsx("div", {
    className: "row px-3"
  }, __jsx("div", {
    className: "col-lg-12 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Extra Zones"), __jsx(react_["Slider"], {
    color: "primary",
    my: "24px",
    max: 30,
    defaultValue: 1,
    value: zones,
    onChange: value => {
      setZone(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: zones
  }))), __jsx("div", {
    className: "my-1 col-lg-6 mt-3 d-flex justify-content-between"
  }, __jsx(react_["Flex"], {
    py: "12px",
    justify: "left",
    width: "100%",
    align: "center"
  }, __jsx(react_["Switch"], {
    onChange: e => {
      setRedundantDNS(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "failOverNode"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node"
  }, "Include Redundant DNS"))), __jsx("div", {
    className: "my-1 col-lg-6 mt-3 d-flex justify-content-between"
  }, __jsx(react_["Flex"], {
    py: "12px",
    justify: "center",
    align: "center"
  }, __jsx(react_["Switch"], {
    onChange: e => {
      setDailyBackups(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "failOverNode"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node"
  }, "Add Daily Backup"))), __jsx("div", {
    className: "col-lg-12 mt-5 d-flex justify-content-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "DNS As A Service",
    serviceDescription: `${type},${plan} ${verifyNotEmpty(zones, "Extra Zones")} ${handleRedundantDNS(redundantDNS)} ${handledailyBackups(dailyBackups)}`,
    button: true
  }))))))))));
}

/* harmony default export */ var pricing_DNSPricing = (DNSPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/dns.jsx

var dns_jsx = external_react_default.a.createElement;

/* harmony default export */ var dns = __webpack_exports__["default"] = ([{
  title: "Hosting with Freedom Built-In",
  titleStyle: {
    fontSize: ["3xl", "4xl"],
    px: "10px"
  },
  description: dns_jsx("span", null, "Delivering a scalable, reliable, and managed authoritative Domain Name System (DNS) As A Service. With our assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users.", dns_jsx("br", null), dns_jsx("br", null), "The main functionality of DNS is to convert domain names into IP addresses for the web browsers to identify a website for them to load the required resources. Domain Name System Service allows you to host the website over the web and maintain and monitor it in real-time."),
  descriptionStyle: {
    px: 6
  },
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: dns_jsx(pricing_DNSPricing, null)
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "Mark your Presence over the Web",
      textAlign: "left",
      fontSize: ["lg", "xl"],
      titleSize: [40, 40, 48],
      my: [2, 4, 8],
      text: "BG Unified Solutions gives you the power to quickly deploy, efficiently monitor, and transparently scale the applications that your business requires to run and interact with customers and partners—while also mitigating the risk of security breaches."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Scalable Solutions"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/time-schedule.svg",
        mt: 4,
        title: "Low Latency"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/key.svg",
        mt: 4,
        title: "Authoritative"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/diagnostics.svg",
        mt: 4,
        title: "High Asset Utilization"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/shield-check.svg",
        mt: 4,
        title: "Security Ensured"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/navigation/arrows-h.svg",
        mt: 4,
        title: "Total Interoperibility"
      }
    }]
  }]
}, {
  pb: 0,
  title: "Why BG Unified Solutions?",
  body: [{
    width: "100%",
    type: "content",
    data: [{
      textAlign: "center",
      fontSize: "xl",
      text: "BG Solutions has gained an excellent reputation in designing and implementing IP technology and significant experience in DNS services design and performance for several clients and distributed environments and locations. BG Unified Solutions provides national and international IT Services to some of Australia's leading companies, who use Information Technology to improve their business results."
    }]
  }]
}, {
  py: 0,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Scalability",
        description: "Hierarchical nature of DNS, making it scalable. It allows every organization to manage its authoritative and operational data effectively, even with increased resources. Maintaining compatibility as DNS servers clients run on different hardware, different operating systems.",
        image: "/assets/images/illustrations/scalabilty.svg"
      }, {
        title: "Reliability",
        description: "The user or the end host need not dive into the technicality about root or TLD servers. Only need to know the basics of the functioning. Eliminating vulnerabilities like cache poisoning to reach a satisfactory level of security, making our DNS service extremely reliable",
        image: "/assets/images/illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
      }, {
        title: "Concurrency",
        description: "Allows and handles multiple requests simultaneously and manages data by distributing over a large number of hosts. Detects, isolates notifies, and corrects faults encountered in the network.",
        image: "/assets/images/illustrations/ConnectivityIntegration_CloudExchange.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "VJ98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/BackupPricing.jsx
var __jsx = external_react_default.a.createElement;





function BackupPricing(props) {
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => setShow(true);

  const [value, setValue] = external_react_default.a.useState(1);

  const handleChange = value => setValue(value);

  const [restorePoints, setRestorePoints] = external_react_default.a.useState("");
  const [geoLocations, setGeoLocations] = external_react_default.a.useState("");
  const [hourlyBackups, setHourlyBackups] = external_react_default.a.useState(false);

  const handleHourlyBackups = hourlyBackups => hourlyBackups ? ",Enabled Hourly Backups" : "";

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Standard",
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["Single Copy", "Single Location", "Reliable & Secure", "Cost-Effective", "Recovery Planning"]
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Backup As A Service",
    serviceDescription: "Standard, Single Copy, Single Location"
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Professional",
    icon: "/assets/images/icons/theme/work.svg",
    featureList: ["Multiple Copies", "Single Location", "Reliable & Secure", "Cost-Effective", "Recovery Planning"]
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Backup As A Service",
    serviceDescription: "Professional, Multiple Copies, Single Location"
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Business",
    icon: "/assets/images/icons/theme/town.svg",
    featureList: ["Multiple Copies", "Multiple Location", "Reliable & Secure", "Cost-Effective", "Recovery Planning"]
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red"
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: openControls
  }, "View Options")))))), __jsx("div", {
    id: "collapse-1",
    className: "collapse-target"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 12,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, "Customize Your Business Plan"), __jsx("div", {
    className: "row px-3"
  }, __jsx("div", {
    className: "col-lg-12 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Number of Copies"), __jsx(react_["Slider"], {
    color: "primary",
    my: "24px",
    min: 1,
    max: 4,
    defaultValue: 1,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value
  }))), __jsx("div", {
    className: "col-lg-5 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Number of Restore Points"), __jsx(react_["Select"], {
    onChange: e => setRestorePoints(e.target.value),
    my: "24px",
    placeholder: "Select option",
    size: "lg"
  }, __jsx("option", {
    value: ",5 Restore Points"
  }, "5"), __jsx("option", {
    value: ",10 Restore Points"
  }, "10"), __jsx("option", {
    value: ",15 Restore Points"
  }, "15"), __jsx("option", {
    value: ",20 Restore Points"
  }, "20"), __jsx("option", {
    value: ",25 Restore Points"
  }, "25"), __jsx("option", {
    value: ",30 Restore Points"
  }, "30"))), __jsx("div", {
    className: "col-lg-5 offset-lg-1 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Number of Geo-Locations"), __jsx(react_["Select"], {
    onChange: e => setGeoLocations(e.target.value),
    my: "24px",
    placeholder: "Select option",
    size: "lg"
  }, __jsx("option", {
    value: ",1 Geo Location"
  }, "1"), __jsx("option", {
    value: ",2 Geo Location"
  }, "2"))), __jsx("div", {
    className: "col-lg-12 mt-3 d-flex justify-content-between"
  }, __jsx(react_["Flex"], {
    py: "12px",
    justify: "left",
    align: "center",
    width: "100%"
  }, __jsx(react_["Switch"], {
    onChange: e => {
      setHourlyBackups(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "hourly-backup"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "hourly-backup"
  }, "Hourly Backups")), __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Backup As A Service",
    serviceDescription: `${value} Copy${restorePoints}${geoLocations}${handleHourlyBackups(hourlyBackups)}`,
    button: true
  })))))));
}

/* harmony default export */ var pricing_BackupPricing = (BackupPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/backup.jsx

var backup_jsx = external_react_default.a.createElement;

/* harmony default export */ var backup = __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/backup-2.jpg"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Protecting your Data is the New Normal!!",
      titleSize: [28, 28, 28, 32],
      text: backup_jsx("span", null, "BG Unified Solutions provides reliable, secure & cost-effective managed services for backup and recovery of all data types. We handle protection and management for all of your structured and unstructured data while enabling your teams\u2019 self-service restoration capability. We\u2019ll create a realistic roadmap and provide continual service so you can capture the promise of tomorrow\u2019s data center, cloud, and backup\u2014today.")
    }]
  }]
}, {
  title: "Our Pricing Plans",
  backgroundColor: "light.400",
  width: "100%",
  my: 0,
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: backup_jsx(pricing_BackupPricing, null)
  }]
}, {
  title: "Why BG Unified Solutions?",
  body: [{
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/productivity.svg",
      title: "Flexible and Scalable Service",
      flexDirection: ["column", "column", "row"],
      description: "Our BaaS offering provides a simplified IT management and a highly scalable platform concerning any department of your organization. Irrespective of the end-user, everyone gets access to the latest and the most excellent backup technology stack—customized and tailor-made solutions to meet client needs with Local end-market support services and Local language capabilities."
    }
  }, {
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/Sound_and_Efficient_Planning.svg",
      title: "Cost-Effective Solution",
      flexDirection: ["column", "column", "row-reverse"],
      description: "To your business, we are offering and providing a flat billing structure. It’s designed for pay as you go model that shifts your costs from Capex to Opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one-off fees into your monthly payment."
    }
  }, {
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/Completeness_CloudLogging.svg",
      title: "Back it Up",
      flexDirection: ["column", "column", "row"],
      description: "Geographically sound, quick, and efficient, increasing your backup by 60%. Highly advanced, available, and multiple data center locations offer multiple IP types globally, in a clustered or isolated environment."
    }
  }]
}]);

/***/ }),

/***/ "WqJp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Row(_ref) {
  let {
    justify,
    flexWrap = "wrap",
    rowDistance
  } = _ref,
      props = _objectWithoutProperties(_ref, ["justify", "flexWrap", "rowDistance"]);

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], _extends({
    display: "inline-flex",
    w: "100%",
    mt: rowDistance,
    flexWrap: flexWrap,
    direction: props.direction,
    justify: justify || "center"
  }, props));
}

/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XErZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/pageBuilder/pages/newsroom/index.jsx
var newsroom = __webpack_require__("7f4z");
var newsroom_default = /*#__PURE__*/__webpack_require__.n(newsroom);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/cards/CardSideVideo.jsx
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function CardSideVideo(_ref) {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data"]);

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(react_["useDisclosure"])();

  const OnClickModal = () => {
    return __jsx(external_react_default.a.Fragment, null, __jsx(react_["Modal"], {
      isOpen: isOpen,
      onClose: onClose
    }, __jsx(react_["ModalOverlay"], null), __jsx(react_["ModalContent"], {
      minW: data.minW,
      minH: data.minW,
      width: data.width,
      height: data.height
    }, __jsx(react_["ModalHeader"], null, data.title), __jsx(react_["ModalCloseButton"], null), __jsx(react_["ModalBody"], {
      marginBottom: 3
    }, data.body))));
  };

  return __jsx("div", null, __jsx(react_["Box"], {
    cursor: "pointer",
    onClick: onOpen,
    height: "340px",
    minW: "250px",
    fontWeight: "500"
  }, __jsx(react_["Box"], {
    pos: "relative",
    rounded: 8,
    p: 12,
    overflow: "hidden",
    height: "100%"
  }, __jsx(react_["Image"], {
    zIndex: "0",
    style: {
      filter: "blur(3px)",
      border: "none"
    },
    className: "bg-image",
    src: data.thumbnail
  }), __jsx(react_["Flex"], {
    height: "100%",
    direction: "column",
    alignItems: "center",
    justifyContent: "center"
  }, __jsx(react_["Button"], {
    borderRadius: "100%",
    p: 3
  }, " ", __jsx(fa_["FaPlay"], null), " "), __jsx(react_["Box"], {
    mt: 3,
    zIndex: 10,
    color: "White"
  }, "Watch Video")))), __jsx(OnClickModal, null));
}

/* harmony default export */ var cards_CardSideVideo = (CardSideVideo);
// CONCATENATED MODULE: ./src/database/newsroom.jsx

var newsroom_jsx = external_react_default.a.createElement;


const blogs = [{
  title: "BG Unified Solutions and Forcepoint working collaboratively!",
  headertitle: " BG Unified Solutions and Forcepoint working collaboratively",
  headerIcon: "/assets/images/newsroom/forcepoint.jpg",
  description: "A start of a new journey where BG Unified Solutions and Forcepoint collaboratively offer...",
  date: "February 2022",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/forcepoint.jpg",
  imgalt: " BG Unified Solutions and Forcepoint working collaboratively",
  category: "Updates",
  tags: ["Forcepoint", "SD-WAN", "BOTaaS", "DDOS", "BGUS", "WAFaaS", "VDOM", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
  link: "BG-Unified-Solutions-and-Forcepoint-working-collaboratively",
  content: newsroom_default.a.forcepoint,
  logo: "/assets/images/brands/forcepoint.png"
}, {
  title: "BG Unified Solutions and Forcepoint in AI Space",
  headertitle: "BG Unified Solutions and Forcepoint in AI Space",
  headerIcon: "/assets/images/newsroom/ai.jpg",
  description: "Something coming in the next few months which will be one of the best as a service...",
  date: "February 2022",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/ai.jpg",
  imgalt: "BG Unified Solutions and Forcepoint in AI Space",
  category: "Updates",
  tags: ["India", "POPs", "Singapore", "Indians", "BGUS", "Expansion", "Offices", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
  link: "BG-Unified-Solutions-and-Forcepoint-in-AI-Space",
  content: newsroom_default.a.ai
}, {
  title: "4 new POPs to be installed in India",
  headertitle: "4 new POPs to be installed in India",
  headerIcon: "/assets/images/newsroom/data_centers.jpg",
  description: "Things are moving very fast in India and Singapore. Last week in the company meeting...",
  date: "February 2022",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/data_centers.jpg",
  imgalt: "4 new POPs to be installed in India",
  category: "Updates",
  tags: ["India", "POPs", "Singapore", "Indians", "BGUS", "Expansion", "Offices", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
  link: "4-new-pops-to-be-installed-in-India",
  content: newsroom_default.a.pops
}, {
  title: "BG Unified Solutions Services are now in India",
  headertitle: "BG Unified Solutions Services are now in India",
  headerIcon: "/assets/images/newsroom/india.jpg",
  description: "We are very proud to announce that a brand new office in the Delhi NCR...",
  date: "February 2022",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/india.jpg",
  imgalt: "BG Unified Solutions Services are now in India.",
  category: "Updates",
  tags: ["India", "SO-CAAS", "VDIs", "Indians", "BGUS", "Expansion", "Offices", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
  link: "BG-Unified-Solutions-services-are-now-in-India",
  content: newsroom_default.a.india
}, {
  title: "BG Unified Solutions and Fortinet working collaboratively!",
  headertitle: " BG Unified Solutions and Fortinet working collaboratively",
  headerIcon: "/assets/images/newsroom/fortinet.jpg",
  description: "BG Unified Solutions and Fortinet working collaboratively on offering highly secured...",
  date: "October 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/fortinet.jpg",
  imgalt: " BG Unified Solutions and Fortinet working collaboratively",
  category: "Updates",
  tags: ["Fortinet", "SD-WAN", "BOTaaS", "DDOS", "BGUS", "WAFaaS", "VDOM", "VSYS", "Sareen", "infrastructure", "racks", "Network"],
  link: "BG-Unified-Solutions-and-Fortinet-working-collaboratively",
  content: newsroom_default.a.sdwan,
  logo: "/assets/images/brands/fortinet.png"
}, {
  title: "Consultel Group with BG Unified Solutions - Enhancing Excellence, Reaching Perfection!",
  headertitle: "Consultel Group with BG Unified Solutions",
  headerIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlYAAAFCCAMAAAAE1GM9AAAAPFBMVEX+/v7v8fMpU4JAQj8TQnQIOG0kJiMxMzEyNDH////L0dhvjKxbXFqxwNDe4eVGa5OdnZyVqsK1tbR5eXfkFQiMAAAACHRSTlPu////////7ikgQ5MAABFLSURBVHja7J2LuqOoEoUbBSdBwdv7v+t4i6GKi2xjpu3pVd3zndNugon8WVUUBfvXL9jXbPznb7Vfv56wL5l4/K0GrL6JVQmsYMAKWAErYAWsgBUMWAErYAWsgBWwggErYAWsgBWwAlYwYAWsgBWwAlbACgasgBWwAlbACljBgBWwAlbAClgBKxiwAlbAClgBK2AFA1bAClgBK2AFrGDAClh90+wDWMGgVsAKWAErYAWsYMAKWAErYAWsgBUMWAErYAWsgBWwggErYAWsgBWwAlYwYAWsgBWwAlbACgasgBWwAlbACljBUlg1FbCCXW7ACga1AlZQK2AFtQJWMKgVsIJaASuoFbCCQa2AFdQKWEGtgBUMagWsoFbA6v+NFSoYYMAKWAErYAWsgBUMWAErYAWsgBWwggErYAWsgBWwAlYwYAWsgBWwAlbACgasgBWwAlbACljBgBWwAlbAClgBKxiwAlbAClgBK2AFA1bAClgBK2AFrGDAClgBK2AFrIAVDFjBgBWwAlbAClgBKxiwAlbAClgBK2AFA1bAClgBK2AFrGDnDQdow76gVsAKBrUCVlArYAW1AlYwqBWwgloBK6gVsIJBrYAV1ApYQa2AFQxqBaygVsAKagWsYFArYAW1AlZQK2AFg1oBK6gVsIJaASsY1ApYQa2AFdQKWMGgVsAKagWsoFbACga1AlZQK2AFtQJWMKgVDGoFrKBWwApqBaxgUCtgBbUCVlArYAWDWgErqBWwgloBKxjUClhBrYAV1ApYwaBWwApqBax+38gbx3rt/dz+qDfdO50ZqNXfi1WhHKs5VG39o95qtzMpgNVfjJXcjWPVe1cOsXI6K4AVsPKx0m1Av4AVsPoEK1FLJT9RKwknCKw4Vv16HWoFrK7DavZ/ElgBqyuxWv0fsAJWV2JlnEufxFbACli9IUqmHBCyA6vfixWcILACVsDqD3GCwApYIbYCVn+iE6w2yx4Zv3n1tgsJ+EKX38BKWKtnsyLZbG110MjpdG6c+Nn849zODhIMGVjZyA1jWFVVOXbdMHRjU24DWBFIqooxUz3Gpf2r+dTi0Sx9DJ3Tiw8cAYRf95tVVbPcqGse1W2xEqZuiz22aGsTJsH2ezPeiNQ/bT+wr9ZtzfvTfevccO5MhDoyOnwDYylW7XytkPzKZIK8+dANE1hVzbC3sl1ZLVccG6vR/ef0qqrRbvNpyJuOPKZhLB0M3FcP3ft6R67zm85QjZq+sRtiZeu5eGl5pOuDVapojddM13IpR1paLf+vfo+69sqf5pz33ljWziiKvt16emXF5zv2awsrw4VU5AbKEG2Sr+7Ylenaa0zNcsvtR+sNHdaDsVX16Oh3bxrQanSvdBVpMVbuj6fm1U6Z+7TfGJRENe17dOn1qnH/OUzvoiSjY8fqhlj1kg/J8thbzdiTgVbta2isZB5Is3HfW74X7nhfesMq6Ms0acyxipqN3tJlPaRWVekh0VUHWDX0n+UQ/hpvGFQlEXH9Hl16nWNVNdZ7Y3fDSgQHeflOu18JEx5GJXt/1GcYNIdQtWKnWCZuaKW8HKvILSfF0lGs2Ji/hi+NlQui8Ef//cI1IDqJVSkCb+xeWNn48CjVvxVNxZptjZha6YC01Qc9TS/RX8GqTtzRxPJWlQk9rqZJYNVQ5prEYx8Wrk5h1VUhWi9KiVyElU2Ozs5VH2+1xT9ErXoR6FYp/XyGeKNCcT1WdeqOK1e+WlFgHP+VUisiVl1yfjtUp51g8J3Za+L2a7CaPGBqTBb5mD1gulXP1aoPjuTCyMEN6+ux6tN3LGwQqzIChUhgRfRNHGRNZrd1Cisb7+8uWNUHY6NaL4qOwEdGvYi0sxTQbbJGMRDXYiV0zkf0sepyHl+X1yxsk9s6hVXMLpGrS7Ayh0OzKFGbMTJ01KOdtSTb1BvT0xmDqq/FqrDszfskzx+Rx1ZlKb6OlT3pBFPydw+svKHxsz/TM+79Vj4vOmOMJ2ZIpZ0IzDELXVyqVlSPlaz7npM8fUSetyrH59exmhMQV2IlyptgxXlRsmgL6X2X2QBOrbxGBQ2Joqqm6WhumklcYn8tVjKUPDPk/U8fkTvBSMLpPFbCDAMPigTH5zOsnlckRa/AquXfZC2EsD0dsLbnrawQmuVGlbGBmZ8nfW5fa9i2vQ+1LAe1dW+0PpUOjWbZg6kz1lnrx1YcgWFsxiETq4D/HMp5La/zODiNle3GTgcmlzfASkeynyw/XlBd0kRi3jLgxeftvAZHx7WoZQgrPeP0Wv49NRMs6skKya+wazK2WmNZbCVGD4DZGpGBVdeUdBlwzc4vWfWRJ6/OYtUti8/d9V7wAqzYNNAERtAXARP2oIUpZAA/Bp+LlXSSreR7eAKraAVDrLMnnRj09MMI0QXdi8dVAKsVwCEoIxwE0ZzEao3OPa4uSIlegFWrIs98/snqQoq2jraiLpTpwksYGHw184laXIdVqN6K3l5HPryqmRMUwzO4BszH0cdqGXCe9NqHu6K80PxpPlZ2r4WxV88FP8eKZcItTTwUc6AzO6Y6NjI0BdUWwfQ8uwmFT223IXBdihVPHISnK6rlWOnwcHFeOt8PVb6zc2Ie1n44h9Uem8dv9Puw0n7ec386TpkerWuKYynDUQyl0rShwFq65U+XYtXG3jz9UhQtTaEKG3EuzLt5WK0Dy646MzQGiD7lBMWe+OTd3QEro44DnUR0ksqSOiNI3JDSkbT+Uv6kL8fK8mSF2P+QNcyi4AuT4WHkwHhYrQQx+NyQh2aq6AJPLlZOXVY05v99WNEBNzFNi8OXKAyoY1jpRL3EmlW6Eis61y3a95+2SK53x8rrmNfxsFoBJPUxbIKmP8fKdar63lhJm6VpJpVNPcZqmke2R+UE38Nq8bfbf0olF5+jWDVJrGyICkuK1xN51jNYDbfDiqcAc+DTmVj1UU1MVuLMFV5XYmVOZOLndcRnTEUOsHoNeNw1XYFVd2us+v8eq1mNTLLgSmrx27GS4jOs4kt9fwNW8cn3N9XqiKv2zFLzpVh5IXs+Vh3UKlOtzNVqNR9DLBOFx3UEKx7kfRMrEYu5D0L2sboktmLpsT8XK1lcG7L36fmmntiJRc2FvA4r7RX0OH/Jmdksb2VieasuCytNy4FdrHJmglX5/L/MBHVW0jQ3wZBUqzXh2rdxtEJY1R9jNacVSI7h/ZflrdjizTufWekcrKiGCFK2mZW3apJY6VvnrRI69DR7SUHiZIP2tFrtaNVtGi0nr3oGK35JuH+cv3xWzJaaTSSrHcUqnmUvE1n23dmy1yey7KW4HVY6nj+fxkwtO8prYzIXb4qfqdXbRZi6TYC1x3z0bp8v3iSTLWIUQTD4Ji+O1WuP/RiNhdgiXniRiGli9prgLRZvSAaJxuxGRTYwqNhSs6R+JEut3j0l9irqIJ6fLzWnZ8Vsj7tt1vM1umceVtHFFhaxj8ElbU6Rh5V+hDEfblgY0+e4t3hhTJ+F1f4YhXUdgD70glqewiovfvTPYCh5ZcJYPspmeOZhxQtW3upCC7ZYvdX2i8G87dSxeiuvLPAWhTEsWnEeemqzabiMj1Spp5yg1aafIqo5XG8zV63tXAnO6+kPsWo31xlz9FP06JxH5NWyB8p8g3vnw1EUX9MpX4cHMe/2YKDbcWo1eqfrBKpDg9Wq4y2wosu+eznxwX7NjaueqZjNCtmLQu5TetehJreMTRB6zjhUHeqrr2D1084BN/IVPfbGaOHvE8z6xXExtfLq7sr1YKqBY+Dppw0cBhaqZdeB2npR3gKr4BYJy0qiVMEAmlpZ6xW42CysSBrUkStRJLMMKiSaB1hJ6VWybzuY33Hli3BaHbqewTB+ghUPup9irnDnMjRhkLXBJ3fnjb7JzpvAhq6CC8M0Yq2/octvlIdVOFAjW/ZpYXLcFx9itSDT0glksVQLCrq5SCkbODHGfoSVT2XolJe8/WB/2oYu3/f4G0v5BvdQq7mR/jlW85F5dt5BRuvKc1ZcglgF0rOKb0dTRV1znzq9OnC0x3gCKydvag5fLMpHniZmbz+9C1b6eLN8/cw4qaF/ZqoV90pTsFVQSpUR0eqGA6xCBBfieLM829X8Ot8q6KB0nlrxg/Yi4lJl7cnPxGq4zWb5jKM9xPOgan0LkvLUqi9Uenf+3Fckfm+PsNLBdKqW6lD5wueyB/IRQ5OL1aEQLRTEgisSuOdhJe5ztMfhuUDyVV+ePJTKrxWOYaXTs8z1hiZ8ipF7OYhVgH51fBDR8l5DZ4cGjuMzVTZWj4O4aU1pRoCxzc+xutNBROkDrpyNznGutsREllopfcRxH2F98kz6CKsgQPpAkv2wbD/pmB38uhyhN2bGVgc1ME/9SmWFz/wjZ9JmYWVudRrf07bqmCpvA70/ac9TK5Pk+HWqpA/xfJdDtQrKlZmPXE7sy6ifUazmo46Fm6usqgOs6LbihF69qPI3Sq90lim1GnSiw9scSVvHjqQtNMUvfDyxSBfQeGuC0SNw5+n//iLlv5VjrKYmKih/0Y/4OlA39jtvqrJb98YKPc5e60dYTa0jEXn3PqI/EION7Dw1r4zPj/quourKA7SX38Tu5xBq9kx6P9et3qe3zwozZxaX/6Fn2W5X5XKc+tZR8Djr97MkhcnbTi+jlHI6Ktx+6wiPL+DCH/Hf9u5FOU0gCgPwEDKUKFCi7/+uZb3ucknIRBiL39+ZdhrNEscvB8Qj536N8H38U8Yzb4ruKa6O1XX6w092gieVYzvCOjkE69vLqv4rxJHu0Hawd37GKRL1/v6myvnv4dyH+1X6r0lGAjRvcT6j7oQ4u+tCb8nmwhsp+7TRMdrUZbVkpfrjb/zfffIrEi/7eX+Ity2+D7a4f49XS0cpxXNDhqyyOINraxRF/+oxzaHqjalJ7GXnWQB5E6060h2ajBHYHYtnvNz/taUuvAPcJVxmauq9/tAddb5TuEJDukKciS9naQvfdXthg4PdxWl8Sfhh7mNLkoUmFv4IC18fRm98yuf9Efa32FusGpuINMYqTzI68Kis2sOuCdkd2v7Qm8sBVns4334blZMsO9LLHlatw/fUjx16s8yErizLZt3rgdvLltjQ9LLZnIeYVXUwcKw6KQmu4SdtZjylpwXy7k85NU8rfD2fur0oR3vZL9/z4BFdrz74bdFk131MdtKVT7bhzX5Ki9/c5YtP3pQPDlZrsBq0BjRfvfJbKtOfvCmx+n9Z3d4X6R1aPeTawnNSLXA+Hav10zsxsCvPvey9c5eHlUbvFlhthFXvxFBz6mVvH9/kayf4SjvB4eX+s2Ev+2r7QNVqK9VqTiNUu9r4edVqG6lmdJlneaFayY9eCc7oRTmuVqyw2ky1+vbTC/Vqqhyyb6dald/sBnfleqyct9pMterU1M+iSrXaTrXq9Yamt7drqnJstaFqde4NHfsQatPma6JSrTZVrc4dAqEVKmoTaw6hv2ldVWWZV3GWPAuL1fLV6tbW1D2Xxy7hGS1WN3XpuQpHe5d/sPrPq1XcdzzWLbq5YLVOtXqxYLVitcJKVCusVCusVCus5BfVKi+xEqywwgorrLASrLDCCiussBKssMIKK6ywEqywwgorrLASrLDCCiussBKssMIKK6ywEqywwgorrLASrLDCCiussBKssMIKK6ywwgorwQorrLDCCivBCiussMIKK8EKK6ywwgorwQorrLDCCivBCiussMIKK8EKK6ywwgorwQorrLDCCivBCiussMIKK8EKK6ywwgorwUqwwgorrLDCSrDCCiussMJKsMIKK6ywwkqwwgorrLDCSrDCCiussMJKsMIKK6ywwkqwwgorrLDCSrDCCiussMJKsMIKK6ywwkqwEqywwgorrLASrLDCCiussBKssMIKK6ywEqywwuppWMli+fOy+Qd+DIVBBndwkAAAAABJRU5ErkJggg==",
  description: "Consultel Group coming together with BGUS, for efficient and intelligent business solutions with authentic integrity...",
  date: "October 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/consultelgroup.png",
  imgalt: "Consultel Group with BG Unified Solutions",
  category: "Updates",
  tags: ["Consultel Group", "Consultel", "Consultel AI", "Consultel Managed Services", "BGUS", "Consultel Networks", "Consultel Cloud", "Saurabh", "Sareen", "infrastructure", "racks", "Network"],
  link: "Consultel-Group-with-BG-Unified-Solutions",
  content: newsroom_default.a.consultel,
  logo: "/assets/images/brands/consultelgroup.png"
}, {
  title: "Business Operations during COVID-19 Pandemic",
  headerIcon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QEORXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAZKGAAcAAADYAAAALAAAAABVTklDT0RFAABNAGEAcwBzACAASQBtAGEAZwBlACAAQwBvAG0AcAByAGUAcwBzAG8AcgAgAEMAbwBtAHAAcgBlAHMAcwBlAGQAIAB0AGgAaQBzACAAaQBtAGEAZwBlAC4AIABoAHQAdABwAHMAOgAvAC8AcwBvAHUAcgBjAGUAZgBvAHIAZwBlAC4AbgBlAHQALwBwAHIAbwBqAGUAYwB0AHMALwBpAGMAbwBtAHAAcgBlAHMAcwAvACAAdwBpAHQAaAAgAFEAdQBhAGwAaQB0AHkAOgAzADcAAP/bAEMAFg8RExEOFhMSExkXFhohNyQhHh4hRDAzKDdQRlRTT0ZNTFhjf2xYXnhfTE1ulnB4g4eOkI5Wapynm4qmf4uOif/bAEMBFxkZIR0hQSQkQYlbTVuJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJif/CABEIAHEA5QMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB9MVICBhmaPgxX0ubn6JcXupVrAVNzLhh05WY3S1m7ipbz0DNw9ZslxZIvY/MwT1OXHWaye1TSpuUopB1Vma3qznvRp55omcjVTqrlhLSPHabIJNZskOW4edba8zmuqua5dejl3ueli1hk5G5y5nXfD3GGfTysjZnsk1AhDJLDHoizEC552iausWdF8u01ppEp6bT1jz9N5I0xherXh7kOLt5nPKpWfRakgE6mblKUlM7hnxahrVxpLK3gYrPQ05+jWMHrgZbTmu23n96VNBxTnjNdRhUtw0MAjs8/wBO51EWeG5a1UVKwa2SR19vnejrD4+tnLroGOlAee9kyy7eCWopTeS1mxOWi9Hy+iz0yQ8VDUGxWnK3Aa+t4ft3LAAAPPXQh0gp5HseZrGKgx0tQ6dQFZ1R0nEWICWkC0wi4Aj2wubYCkDyvXCwYSrhDWONhjrDCyQLJ0CABf/EACUQAAEEAQMEAwEBAAAAAAAAAAEAAgMREBIgIQQTIjEwMjMjQf/aAAgBAQABBQLF7i5rU7qAu5I9dpCMBUFRXKcnYGBg+9l4pXjlGRjUepRdK9CJBoCq1pXkFwuEUVSoLjFoFHkbeTgzRtR6glEyPQjQAGL3dtace1SpcKgqQCIva7qHleTkGBaaQV7KWlaVWx/DuMUqVLnJ22gc8KgmtCrcHA4l9UqVY4yMEL1t5xatQusYsVqt7HO1R/pF4uThYb8HvB2WtS4VYh4fg+KhCja69AVN1Yd4u1K/mBQKtAgSYeQE5zhGSS135gOE2Jc8q1avFKk23EAAZ4qkMEpp4U356fBrHaQzxc5uSLDvE3kjNolQimZtWuFS9IqL88GQCN7naiXdxmoIesSyBNca1K1exyb9N946f1hrBocxxGnz7YTWhuJpLQhpgAVItzatFRG4/hgPnvllsxRaFL9NhxSKgfR3WrxGf6bpZbUUWjB5C52go4ZMK+D/AEbZZdRii0DMwqSzsvF4recFN+uXfXpv02dR7O8Y/8QAHREAAgIDAQEBAAAAAAAAAAAAAREAIAIhMBADMf/aAAgBAwEBPwGii9MXhqovXHHPmSWDQ2NRrPg4DDXPW+KuDQ8wdrvlrffP8gr/AP/EABwRAAICAgMAAAAAAAAAAAAAAAEwESAAMQIQQP/aAAgBAgEBPwGk0CJyaR0VCp0oeWHl4fx3b//EACoQAAECBAQFBAMAAAAAAAAAAAEAEQIhMDEQEiBBIkBRYXETQoGRMlJy/9oACAEBAAY/Ar0JlcIddFOeMircldXXDCrsp4WUtV9T6rMplX+lwhTOFqU6spKZ5TflpHvSaocX2UjIB1C5/IWX2/dEHcsOZ9I2JkowfCGb2hl8um3M8TyYOIJDzkicrFZT+2V1FCfaUDF/OL0mFIYHtNEOS6b5n1UWb3IbnZqr9auYLh2Dp4ZysoAGeYU74y+8b6ofFIjGMZZzQaRZin7Mp9XUhhkhRzXoik1DJAnN6WU70hryQJzfBqXFXyQLvo88mNB8L40w0v/EACQQAAIBBAICAwEBAQAAAAAAAAABERAhMUFRYXGBIJGhwTDh/9oACAEBAAE/IbiFxNF+iOWYViZx9kPovS17E7MEqJj0XOXfmMla3Ytceho/od09EPAl5LjRZqVwZcxAgsommTJrIg5lTBAgstEt4X2RtDwZ1fR3Xk4A6L03moGuSElsiUXUoTniOqej/S7d/A7uFJaMXTQmQh9MVAx8Z4DsatNv6OYC3R+TIMEbvc/4AlaQhNIpE6/Do4FbdjhMOB2IishiDqMTj6EJwx2fwwFFyy9+WbRxkowmJNyTLJEJnpibcCTkSLXwW77FLRC5PMjzPswoS+R8rYkjsSSJi6UE3yJqRdiRkaW2xIsL5MkpG19KJaxI0rH1JLuqO2PgwEEg1L4JMXYTE4jciw6NwpeEbvCZLPZXc4HHSJz6D43TyPuefg8apIowis6pHo6lEtXSJhJd8izZ5GmiSRBJiBS6EGoGbVOVZC7pjxb1m6Hrhv6QIRoUC+SJy3xl1ngv4BGUj7Ejg7THMUnuCX5GqRSBqhBhndGyUizmiqRaOSyEcuSWF7yWlCy5du+4IJ3o1vuqYEJkRiUfYfJEDAcPRDkcNiTb2RpITMiLoGBKRShmUrkjIyqJeWbHovnVcsgU6Xhshj2WvGhfF5luFi6iioGJY0cIJpJojhsllmZp9oqQoZEnVHDZLyINSO4JOY3R4JwLEpMUuKLNrJPTpFnQDPJKEk9oq84XFghy/gk8HWhJnOC3JkfkUjusEeRSSeUW5gZNd4u6wIlyTAx2WTcCjDjEN83OeiBFESo17r042LYuZfQgrjVkA1BfkToSjkl4tWRQez3RDLzksixb5uyLe0KwG/4LL9Ca7J7TGySHBCHSm8GHkmsEOioSRfsL5PfLNpWxSZHoknIhptPQ2JZLJPQzB4DRbZytrdZJEQm3cjqisrnDGm/xdk5y1sVI7vl/CS6TQh0UkqIRwOjRqiHg08GmYn4Ph+9/lIWzY8VM/9oADAMBAAIAAwAAABBgzAwFoz7AVnQxIK1ABT2ZhrxyhHNwzMRKYQAEgABYrUXNpq4aDGwlfjLR1wEJtOuC0x0DhPcY/wAxrQDxYcs7OD2bZNYxDdp88reEP5ICAcAdc9gihi9+c8j8/8QAHhEAAwADAQEAAwAAAAAAAAAAAAERECAhMVFBgbH/2gAIAQMBAT8Qyk2IwsIS4SHWiVE4lWG0NBmi4OpkINCXKEyj8LiYf9i/mrSIdKKC80ZwS/hidVyxsomIfwNcwsMl4xHiKi6KJ5eqy4NHRlxBFH7r0XyUpT3VjysvjKx//8QAHBEAAwEAAwEBAAAAAAAAAAAAAAERECAhMDFB/9oACAECAQE/ENoxbkOjLcWQmNBtkEsRCztF1OaxognFLianC5ENH1xXfXBZMZRfeVEIQWvwRynYvXumiZD5wfgfuvP/xAAnEAEAAgEEAQUAAgMBAAAAAAABABEhMUFRYXEQgZGhsdHwIMHh8f/aAAgBAQABPxBKYqcARANa8OqQGjl4qGeKDzqS7qvjEovAVrRMYBXpiC4aHAXNPFs2fiWy/lKJjQfhDWU1sxeCj4MQVIVQUbCWTM8oUN5dkSpRspmXczbDlUsUEugaEbL+RoVxbEMygy/QgVAwAzY6wbOUdlalyhVteY5OlvhcsNBwK+4XV42VsJURcupqbXbAlthXNzRxiYJBHMueVIe2dvF5pciULdL8zdnvZi2K+jGRdrVUaLFeljWoMClJrZwzAJRAf00nBxiyNqoMGXLxLJnqWi/iU2PuBDaAzAC/uOUe2bE3xRg+pkDB2AEdB7wDUSAglYuOF0XzKOCXGtOrQWrSONrzUaQVTVkQVa8OYC6QvOJmsuyX0TzUXpXtEtwm1bh0WWxPygamDBg4lqDchb8+kLDVa72/7MV3Dsv8lFgnJBOAe4CwyQDWorFebl1SPiLyBBmV8wbHyz6D6YVo6OYgsqucRdLZ5/7Ljw8fxOT6E4geKZQwX9kbjI7Zg6Fc4vMUZD2llTCDCANUJBuykDCX4lYLVKzqWLkcQxQD1iV7HTLpNDDwf4rQrtrBaUKvt6Xh2afDGrLE31du5yvhT9R01vyXCmuF7qWHY+ZpsjDbW2SONYlOqBjUMvErJiB5IzRgLiH10eoTSIF5IguK79AZKC14Ig669KuZcNFzP6MCyjEjQqqVXswgVDntWiuajDdWWfZ1w2c+nZ5GrtptczQDg2Yu9YiEtZEvWnisTIysOSzJy/zLNHHHEtRurq7gFgXtZNOFO8xSkgoQAawtIPmUhEUs7loLS+YgwlXgzctWi+oglJYwJsNk5f0fyBEyN+RQ+mLApsW1mesBCxtj2KUqpW4F2zZKLOND16oW/ZjrCuaxG1Ng4gLcQ4tVKzbHvMsVh8Sw2p7hqtQbj8mHrVe0axbHgSm8yy2RQtx3KNNHaMbxcMLEr0pQVWl4lBGTrV+jKKwRm35KtqlAYXVtTV/gXkKcNYjsLGvuiN8g/UXdG9g0vhp60p+GJ7avZuZLXTMEyZRTXDkl1V9awLlTKeVEtBnnEp38iXBA67A5laXamWOOsSlwF5I6hcDkbckApddx93NTfLYJMnLK62x6IrVWnCrjkgOXkxXEGShr2bLTeGtW8XgUAD7Ri2hwpdLxjfeJQ2EyXdeiIbIC+YuJrJWvUL1ZnmWpw88weB5GKHIIWai+aiwAHkuE4Mc1COmW3xtDSV0yxozmP2Pc5S0GcbwCu5dZhUBT4gCL7eJUW2ivPpS1llacw6SoTpq848R8WGrGvS9sSwjsrhGyzsafmE81qvWEdoyBAyFF+llW6R+JQ5PkP5lQVpobdIJ0YBrl+IdsncW5Ro7jSEUNwi0Q1SwrzMQNP9ENIbi0L3L8QR3lNUL4SZ5wiOiJ4lQArzFrYlHJ2hO3/wAhph9HpJPRbqmfcj0jR5gv3IRNQGLhsZR2CmlsSkslD11obsxNVo9hwddxkDKu3jAKNTc/3AdcyhjP1FW8EaZTVoozY7zJYjD3QX8kHEtIMitkgl4RcLusob39kSH9ZosWZ2ajTemV6DEH1x6iLGU7nR1ywB3iTToS50ohadorSkauPMibDXmyDukK8S2ykEXNeYtWZgSCorXcf9QFSipX9ZerH4gHcvm5wfxKUpWDFzRj3qNXcLWzEQmk31ldT6n3PaZqJW+gddzTZsvHR6G5oEYt7KpJYpBnRXvORSLprMVThBGVeYs0xVkhOPqLpKKxCzSaM4hhQ7SphMQJGAbxxyszG2a+Y0KlDb0yiAwlkzxPmF8TMzcsr6A67mJYvB0entC46goqeYqg/cX1/Yjco0+43Ul+Jd7YlDTkY3LyHaZMYjo+g1T+ZqZoz8cPsmrPo/ybkI6z+849Iaf4fWf9TSeYax195+U3zWhrNJ5muf/Z",
  headertitle: "Business Operations during COVID-19 Pandemic",
  description: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia...",
  date: "7th September 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/businessop.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Updates",
  tags: ["Huawei", "virtual desktop", "bare metal", "VM", "VCS", "free services", "Remote Phone System", "Contact center", "DC", "RDSaaS", "ConstantEFG", "Uplink", "E-mail Filtering"],
  link: "1-businessop-during-covid",
  content: newsroom_default.a.businessop
}, {
  title: "Radware collaborating with BGUS, providing Cybersecurity Solutions",
  headertitle: "Radware collaborating with BGUS",
  headerIcon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QFSRXhpZgAATU0AKgAAAAgABgMBAAUAAAABAAAAVgMDAAEAAAABAAAAAFEQAAEAAAABAQAAAFERAAQAAAABAAASdFESAAQAAAABAAASdIdpAAQAAAABAAAAXgAAAAAAAYagAACxjwABkoYABwAAANgAAABwAAAAAFVOSUNPREUAAE0AYQBzAHMAIABJAG0AYQBnAGUAIABDAG8AbQBwAHIAZQBzAHMAbwByACAAQwBvAG0AcAByAGUAcwBzAGUAZAAgAHQAaABpAHMAIABpAG0AYQBnAGUALgAgAGgAdAB0AHAAcwA6AC8ALwBzAG8AdQByAGMAZQBmAG8AcgBnAGUALgBuAGUAdAAvAHAAcgBvAGoAZQBjAHQAcwAvAGkAYwBvAG0AcAByAGUAcwBzAC8AIAB3AGkAdABoACAAUQB1AGEAbABpAHQAeQA6ADYANQAA/9sAQwAMCAkKCQcMCgkKDQwMDhEdExEQEBEjGRsVHSolLCspJSgoLjRCOC4xPzIoKDpOOj9ER0pLSi03UVdRSFZCSUpH/9sAQwEMDQ0RDxEiExMiRzAoMEdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dH/8IAEQgApAGTAwEiAAIRAQMRAf/EABoAAQACAwEAAAAAAAAAAAAAAAADBAIFBgH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAwIE/9oADAMBAAIQAxAAAAHqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPPaJeQYmUnC38dHUTcT22+cAAA1npsgAAAAAAAAAAAAAAAAAAAULVW3CmE8Ut58judf0JrdRlCdLzl24aXYXRjo5cTptdqNoR189cbT2PpTS1qN0m33OdGAAAAAAAAAAAAAQYWhxHYZS5iGrc1vspTknTjWarrIzmtzdzOI7P2U4HodxKaHU9ZkaDpYpTm7G8qFPb4ZgAAAAAAAAAAAAAAAGg2OM5TmymIfY7JUxkzPPMhhXv1y3BYgMXuBhlLmQbCldAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/xAApEAACAgEDAgQHAQAAAAAAAAACAwEEBQASExARFDQ1UBUhIiMxQIAg/9oACAEBAAEFAv4979ZcuDIhAVtW2Pbfn3Z37B37FEwWTF3hMPB+L/3kvIY3yHs8t+qSjYuY6IF95lWqxDLdVr2OG5RibERTQu5ei1ScquuCLCYxstpXLZjkXM2V8Vu8Iyg8mKbZqXMixk2fh79XrLAL4ayYovbD/wByVxvkPpEe3TDflhbFo8ddi6i0us30LF+n5LyGO+ePx7PDSivLMWyzuwr2zRxwV77Aetyrt71TToceY4spqvUtRe/aZoO+p77kbuHphvy8ORGPurrKyF0LFcFy7EULwVlXro2K2N8hkwILyVwtMJmMjmFkdRWUr8Vl/iL971TWQWxNkcrWka98bFj9yVhJdQWC+hKWc8S9kRAwalnriXsEYESWBFrjDk1wJ7ypZSSwIuk1a8yIiMewVdhKl8xDLm0ocZtB+/Vh0qgrO1cW+4S1iw5jCQee5jWnXcziVysXENZBQ+ZQVhkDvbFqu8mz7AtDFgSYl5IncK9jKwfcYBFqKvYZRJBwbh4JmeGNeFnY0IavgktCid0Vp1NeJVKvugieX+c//8QAHBEAAQMFAAAAAAAAAAAAAAAAAwESQAIhQmBw/9oACAEDAQE/AdVKFBol5VbcZQxs4r//xAAbEQACAQUAAAAAAAAAAAAAAAABEUADEhNgcP/aAAgBAgEBPwHVQXKpZGbpQHFf/8QANhAAAgEDAgMFBAkFAQAAAAAAAQIRAAMSITEEE1EQIjJBcUJQYYEUM0BygJGhsfAgMDRDYpL/2gAIAQEABj8C/CBgXXLpNZOQo6mptuG9Pd3xoUYohvFVjKYHi9alfDHe/sXatenuicRXWagAD07LrfSXTE7Ciz8Q1wRsaDW75twNhQuc/mJOs19I8scqN03yizTu3Es4HlXdJBCzpSyZI0NZKWwtkA09zos1m7Fix8zTMvFsJMxrSWOIfmK+xqzYt3Cgfciv825ScPw/1r/pUtxb50/C8QZddj1+2xmKjp23/vUzn2RNG4t7lrNFrvEZr0ofcFW/n+9Xf551bHwrirbexrV5z43OX5Uo85wq2F8WgoOeKxnyrhxfu8wyI/OuF+X79jiwwV/KfSvr0/nypb99lPWPthiiW3pM947b/wB6nQe0pFGzflSD0opZDETLGNqFsbm3pXJvhlxPSmt2AxG7HpVr0o4/7BS2+givo3s8zagVE4mTS5kho10qw6qQkgAnz1rhfl+/YnGWhMeIVJyU9Irl20aI8R+25FFnrH9BwQLO8Dsl7at6isOWuPSKhRArv21b1FYYLj0isVAA6CgzIpI2JHZngufWOyeUn/mgSinHbTagzICw2Mdsmyk+lQqgD4e4ULW7zMfak1c7vfVsQOvSnjCE3BbU0y20ELBkmrULq+/wpYA1PiOwpScAzGB3u761oFZ8sRB0NNzEE6BYO9FbqrOJYQat5oAtwaa7VzAoCMRGuu9F4mPKma8gxCzKmk5qKA+gg7UlzHxNH607hBhbaDrvV3SVVAYHzr2Ij2TqPX3CEW/3R/zQuzt5U2FwoG3EU7z4oq5dgjI90HyoYuUIrR4fLLKK71wlpyDdKbmXCxPntFE3LmRxxGkRVrX6v9dK5fNPLBkLFFG2NHnXC8rjG1Kbl0vh4dKC804K2QEVcTLxmaLhyMlxIpXe5mVEDSPw6f/EACkQAQACAQMCBQQDAQAAAAAAAAEAESExQVFhoRBxgZGxUMHR8CBAgDD/2gAIAQEAAT8h/wAe0urLjjWCOkohQOgnVKIxFmtrr6a6SsGYHQbwbVjHnAqcsjrcvNg+jZcerqu23T/h2R8k7p8v0fQgNb1umZWNU2Mq+XRjwqsaSyt+sWrqZffWGp6Mme8DqKgS/MxRwvtMCFAFPYINcsu8584JuKFU4biAy1lmCNkOHn7wjXCB9MQu6ijdjSBcWGx01miQSNz3rmFqftP5mYrd4T1yZdX7zXDXjf3NSCwt7LmAg42S/a2+HYvvB0gi9IgbjATOrwc8z9TyQhR+rTtj4QC2ijuzrxn0x+ILdqL+vOZN036Z+KgUmI3s1ay+EN9EvKzLiO+8AqBMuFJ+wRUnxEs6Vx/bvRxMfSx5xtBzyutxJtnd+PYvvG1YB7QDH7BVkE0I0TV6oweJT8GY8aWUC/zO6fLDO5Vg3/UgO0OBtmtvJr8REmjOJVAwBnmDVkk8xnfeBth/9ukuTyFpq5Jf7ZrArSW2PWfw9OUF+F0FyLF9RcdQyQMAGkXtrkWZGV1qpgYb0Cgm7icE8PyovfwWsd5pGlmqj2TV6SZHjc75VnRSQr6DuNxgOddYbUo2d1W79pVs7VFz0R2wMEuyyUtMqV2698TaQT3WKdRJxcozFJ63Jd37+0cHF0E1qukcuBOJrUic9qlnC8w1ZbGMplgJLYG7oERSqzWm2YfM+pKq6ZWJZ1vS6S8TF2Q6QJIMGb8nVqZ2NW3XgP0F9WyJlvljOxc0+lssjnZBb5HaGAna4oiij8jG/u3Lm4cWPmQDuBEDVw44lIruhVjg4ix0XQ2clHnLrnSYA645mRX4+xGgDBQYpur4lshuGpDAimClOvrCmHQQZ0t5YIxJpubpd5cdTp4uXmCgetI7awaZLDWeef8AOn//2gAMAwEAAgADAAAAEPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPNAPtPPPCPPPPPPPPPPPPAPPPPPLKKfHNLICCFPFPPPPPPPAPPPPPPMN/LGGILCDHNHPPPPPPAPPPPPPPPPKFHPPIACKNPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPPAPPPPPPPPPPPPPPPPPPPPPPPPPAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAGBEBAQEBAQAAAAAAAAAAAAAAARFAYHD/2gAIAQMBAT8Q5VgKupsNREq2+K//xAAZEQACAwEAAAAAAAAAAAAAAAABQBFgYXD/2gAIAQIBAT8QqpyawLUHFf/EACcQAQEAAgIBBAIBBQEAAAAAAAERACExQVFhcYGREKFQIECAscEw/9oACAEBAAE/EP8AD39PLvECoDy4BUJ5MPLzKA3x75x0RAPlxUhRHT18f+CgVQPXBEoien8JVTmazqtnzcYzsdPOMZ7MTx4YMfcNtW/dwRKUPNAr4Uvm+cMYmdi8Pex+H+O3EoWzf4UR4DAPBBwPv1jUkOg0nrgEVNgD6fjaStYCwACSYwJJ1Bo8l4/eXK16Cq3Q8/rBigDG/JUHijiQNkL2qU+zMob4UKc0Gjirh0xKpsHaO8MX5+CuieQT5y694yo0r7Jm0tRiWwhqunxgw0bd8vtrLYzAQNAvqOHn7aAqpp19svDZSCsEXfOkcaChQjYOEdTi4AjTOBEX6192O+gcLMMqyH7P9ZGkKWujS96RHmW/3mvIOBCha4n27xLNEWC1gTjj8tj7SryC/wDMFJXruOgCoXlcWjszsXXPhxJDsMvMBT74ILZgo1MeRyBVoie7V95Z5JLbS/t/fERt+Rmr9PtnGybUVQfD8uQNzNaHcYBfbEobENYE37flEoIyeG1yPS9fhBYPtAFjQDx/dsmLbvEObHDx4ZvId8w385Tm07rO/X+hv9n1Cgwu8Rt5lENiI4oFEgro32syYjILyNh9hi3CiTK1DkRv3gCVoUROe2PwSk7P9Sgn0OC+Lj1ht+W46oA9HumYgjAVJRfimbm9C0EYnWADc1MiB4rPj84oCiAOgSs6VF6hh2KbTD6JrA04GyTgAvPq/wB2gIgj04AgA8GDAndB+39CSt7FT1nPL+PXQKPtMWK0LsU4ZJh/f04HgM9f1I+0yJz4QveJM16BA9gGN4CgbN0vG/wsGgIS1k9XGs5I53ZGlf8AWRL1RMNOGvjIXsjMWket/jkjiNW2rd+sl9uiPo/gTHQTVvJrPjFC3D73iaE28VgLEmxgDpdWF5TrnFmdHAOATm/AfWMTxDCZ70Z8shJGZTVageeDg9ce1NQoCseoaJaz1whwEtBNOgBJKUY9UI49Ntwpb1vfGHJNPOvWlEpvs9sthCuo16TYPHGXtCQJkEkTodD3vIZkCIsnoKoZRyBgHkwDfDw+mU+iFphULQdnZ85FEj4xs2fOIs0lkSokNPfM+cRZRk3hEnAd9GCSwdXS1Q3fM6f4EVIIhZbLiLGMQihPUS9/TF7zPQAKtpA872TGmYpb4RHu5Ek8E5LnVVH0y65nQOkROf8AmasLwgodaNT5t3jAFJAGh0kUTdrvFzyxgTruBNq2961gMF8PJQOVDfp1gFRCCHJb/dxYi5UhD5ITRzxvWKUTKxBoj5EH4wIx8CfIhyob66DFqWsRhpOAU65WY6kM4InnAqzjrmYmRi0rRo+sUs2KDryBF/rEbkGgAKzlD0O5/jp//9k=",
  description: "A very big step from Radware to work closely with BG Unified Solutions to offer a redundant, highly stable...",
  date: "October 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/radware.jpg",
  imgalt: "Radware collaborating with BGUS, providing Cybersecurity Solutions",
  category: "Updates",
  tags: ["Radware", "DDOS", "WAF", "BGUS", "Cybersecurity", "Alteon 6024", "NSW", "VIctoria State Government", "Saurabh", "Sareen"],
  link: "Radware-collaborating-with-BGUS",
  content: newsroom_default.a.cybersecurity,
  logo: "/assets/images/brands/radware.png"
}, {
  title: "Helping Hands during COVID-19 Pandemic",
  headertitle: "",
  description: "COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just...",
  date: "23rd August 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/coronavirus.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Updates",
  tags: ["B2B", "VPNHEADEND", "Firewall", "covid", "10G", "Paloalto", "Fortinet", "ASA", "UTM", "ALLFLASH", "RDSaaS", "Workstation", "Cisco", "UCaaS", "Avaya"],
  link: "2-helping-hands-during-covid",
  content: newsroom_default.a.covid19
}, {
  title: "Huawei collaborating with BGUS ",
  description: "Empowering business growth - we will aggressively follow our vision to help our clients to grow...",
  date: "September 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/huawei.png",
  imgalt: "Huawei collaboration with BGUS",
  category: "Updates",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  link: "Huawei-and-BGUS",
  content: newsroom_default.a.huawei,
  logo: "/assets/images/brands/huawei.png"
}, {
  title: "Peace of mind and 60% cost savings with Datacom@AirTrunk",
  headertitle: "",
  description: "It was towards the end of 2019 and the staff at Australian data and applications hosting specialist BG Unified Solutions were looking...",
  date: "23rd August 2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/datacom.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Updates",
  tags: ["infrastructure", "iaas", "BGU", "DDOS", "SYD1", "MEL1", "AirTrunk", "Datacom", "Saurabh", "Sareen", "data hosting", "infrastructure", "racks", "Network"],
  link: "3-collaboration-with-datacom-and-huawei",
  content: newsroom_default.a.datacom
}, {
  title: "A complete Office IT Infrastructure",
  headertitle: "",
  description: "An enterprise level solution for any small to medium size organization with single or multiple sites. This solution includes...",
  date: "23rd October 2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/it-infra.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Updates",
  tags: ["cisco", "DID", "Firewall", "WLC", "Apllication Server", "Backup", "Paloalto", "NOC", "CPU", "RAM", "SQL", "Backup", "Storage", "Warranty"],
  link: "4-Infra-for-medium-businesses",
  content: newsroom_default.a.itInfra
}, {
  title: "Launching a complete VDI/RDS as a Solution",
  headertitle: "",
  description: "We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using...",
  date: "September 2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/complete_vdi.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Updates",
  tags: ["RDS", "VDI", "POC", "SOE", "Office 365", "ConstantVDI", "VMWARE", "Acronis", "Backup", "Microsoft"],
  link: "5-VDI-as-a-Service",
  content: newsroom_default.a.vdiaas
}, {
  title: "Network Infrastructure Redesign | BG Unified Solutions",
  headertitle: "Network Infrastructure Redesign",
  description: "The primary purpose of the project was to redesign the network to achieve the following design criteria: ....",
  date: "2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/infra_redesign.jpg",
  imgalt: "Network Infrastructure Redesign | BG unified Solutions",
  category: "Case Study",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  link: "6-Network-Infrastructure-Redesign",
  content: newsroom_default.a.networkinfra
}, {
  title: "Data Center Design and Implementation",
  headertitle: "",
  description: "A client had a requirement to consolidate a distributed environment into a single highly available data center...",
  date: "2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/infra_redesign.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Case Study",
  tags: ["dispersed sites", "infrastructure", "dual-site", "dual-core", "network topology", "Enterprsie", "Storage Assesment", "data center", "Palo Alto", "Huawei 10G"],
  link: "7-Data-Center-Design-and-Implementation",
  content: newsroom_default.a.dcdesign
}, {
  title: "BG Unified Solutions Hosted UC Solution",
  description: "Hosted in NEXTDC, consisting of 18 UCS Server, C Series & B Series in the farm. Each UCS Server is running...",
  headertitle: "",
  date: "2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/infra.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Case Study",
  tags: ["Nimble", "WLC", "Nexus", "SourceFire", "Cisco ASA", "DC", "VMWARE", "ESX", "UCS", "NEXTDC", "NetApp", "SPLUNK", "CUBE", "SRST", "UC"],
  link: "8-BG-Unified-Solutions-Hosted-UC-Solution",
  content: newsroom_default.a.hosteduc
}, {
  title: "F5 Topology Redesign",
  headertitle: "",
  description: "F5 Configuration was redesigned and implemented in a recommended way. A lot of IRULES/POOLS defined to achieve the desired...",
  date: "2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/f5_redesign.png",
  imgalt: "Business Operations during COVID-19 Pandemic",
  category: "Case Study",
  tags: ["ASM", "PCI", "iApps", "TOMCAT", "IPs", "POOLS", "IRULES", "Load Balancer", "F5", "routers", "WAN"],
  link: "9-F5-Topology-Redesign",
  content: newsroom_default.a.f5top
}, {
  title: "Radware's Cloud WAF enhancing BGUS' Application Security",
  headertitle: "Radware's Cloud WAF enhancing Application Security",
  description: "Radware’s Cloud WAF Service to protect its website, BG Unified noticed blocked IP addresses in the...",
  date: "2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/radware/BGUS1.png",
  imgalt: "Radware's Cloud WAF enhancing BGUS' Application Security",
  category: "Case Study",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  link: "Radware-Cloud-WAF",
  content: newsroom_default.a.radware,
  logo: "/assets/images/brands/radware.png",
  sideContent: [newsroom_jsx(cards_CardSideVideo, {
    data: {
      title: "Radware Case Study",
      thumbnail: "/assets/images/videoThumbnails/radware.png",
      height: "80%",
      minW: "50%",
      body: newsroom_jsx("iframe", {
        src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6705379682822578176?compact=1",
        height: "100%",
        width: "100%",
        frameborder: "0",
        allowfullscreen: "",
        title: "Embedded post"
      })
    }
  })]
}, {
  title: "Consolidation of the disparate distributed environment to a single managed platform",
  category: "Case Study",
  image: "/assets/images/newsroom/platform.jpg",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: "Through various acquisitions, a client environment consisted of over 17 Active Directory forests, each with a discrete workstation SOE and operational procedures. The client brief was to consolidate the environment into a single platform (Microsoft AD) to realize operational and support advantages. A single SOE was also a requirement.",
  solution: "Analysis into the existing environment allowed a current-state picture to be drawn up which informed the target-state architecture. Transitional steps were developed with the client and implementation realized the end-state as required.",
  redirectStatus: false,
  link: "Consolidation-of-the-disparate-distributed-environment-to-a-single-managed-platform"
}, {
  title: "Storage architecture and deployment of the replacement storage platform",
  category: "Case Study",
  image: "/assets/images/newsroom/storage.jpg",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: "Constant storage performance issues and capacity concerns led to an engagement to investigate and remediate the technical challenges currently being faced.",
  solution: "Investigations into the existing storage fabric highlighted a SAN that was not suited to the multiple workloads being run against it. The recommendation was to uplift the SAN storage array to one that was capable to support the IOPS and multiple workloads. Other valued technologies were storage tiering and reporting.A tendering process and subsequent recommendation to the client led to the acquisition of an HP 3Par array.The implementation of the array was scoped and we were further engaged to develop a technical architecture for implementation and migration.",
  redirectStatus: false,
  link: "Storage-architecture-and-deployment-of-the-replacement-storage-platform"
}, {
  title: "Aligning technology spend using strategic road mapping",
  category: "Case Study",
  image: "/assets/images/newsroom/plan.jpg",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: "After an approach from a client complaining about ballooning technology budgets, we were tasked with producing a roadmap for the environment that would facilitate discussions with the business when allocating funds for IT.",
  solution: "A deep dive into the environment highlighted oversubscription in some areas and functional overlap in others which realized immediate significant savings. This deep dive included cross-matching with vendor roadmaps which allowed the client to forecast on a 3 monthly basis where budget (staff, licenses, infrastructure) would be allocated..",
  redirectStatus: false,
  link: "Aligning-technology-spend-using-strategic-road-mapping"
}, {
  title: "Mobility Strategy definition",
  category: "Case Study",
  image: "/assets/images/newsroom/mobile.jpg",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: "An increasing level of staff bringing their personal devices and connecting them to the corporate network led to a client tasking us with developing a mobility strategy for the enterprise. A principal concern was security (network and data) where the devices were uncontrolled and each one potentially a source of a data breach.",
  solution: "Analysis into the requirements led to the development of a corporate strategy, teamed with the deployment of Mobile Device Manager technology which immediately addressed the concerns of the business.",
  redirectStatus: false,
  link: "Mobility-Strategy-definition"
}, {
  title: "Disaster Recovery Planning",
  image: "/assets/images/newsroom/dr.jpg",
  category: "Case Study",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: "When it was realized that some critical business systems had no capacity for recovery in the event of a disaster, we were engaged to develop not only a DR plan but to incorporate rollback.",
  solution: " From a technology perspective, a cloud IaaS provider was selected to host the DR infrastructure.",
  redirectStatus: false,
  link: "Disaster-Recovery-Planning"
}, {
  title: "Public Internet Access System",
  image: "/assets/images/newsroom/access.jpg",
  category: "Case Study",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: "With many facilities open to the public, a business initiative was to provide a public internet access system to increase reputation.Requirements included wireless access and a secure desktop for those without computing devices.",
  solution: "A combination of technologies (Aruba, Citrix ThinClient, Google ChromeBox) was deployed to meet the customer’s requirements.",
  redirectStatus: false,
  link: "Public-Internet-Access-System"
}, {
  title: "QoS Design and Implementation",
  category: "Case Study",
  image: "/assets/images/newsroom/qos.jpg",
  tags: ["Network", "Complexity", "Security", "Architecture", "vendor", "throughput", "flexible architecture", "Cisco IPS", "Cisco L3", "AIP-SSM"],
  overview: " Design and Implement QoS across DC and more than 400 sites.",
  solution: "Designing the standard QoS template for the service providers to implement on PE Routers. Designing of the standard QoS template to be implemented on CE Routers.Commissioning and implementation of QoS on PE and CE Routers and investigating if QoS is working properly using various tools like Wireshark / nMetrics.",
  redirectStatus: false,
  link: "QoS-Design-and-Implementation"
}];
/* harmony default export */ var database_newsroom = __webpack_exports__["a"] = (blogs);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Ywt+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/snb-2.jpg"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Smart Business Solutions",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", null, "If you plan to promote your business using the 1300 numbers, you should consider the range of smart numbers with high impact numeric patterns. And apart from being able to use the number to promote your business in various ways, it becomes your business asset that can be on-sold or traded. Promoting your business by just being displayed, Smart Numbers have also proven to be more memorable. And that means more calls leading to more business.")
    }]
  }]
}, {
  my: 0,
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "BGUS SNB-As-A-Service",
      textAlign: "left",
      fontSize: ["lg", "xl"],
      titleSize: [25, 25, 32],
      my: [2, 4, 8],
      text: "BGUS offers you a complete package for your business. Get your Smart Numbers hosted by our telco vendors; we’ll provide you with the full billing logs and statistics. We ensure to be a completely trustworthy partner for your inbound calls. Give your business a boost with BGUS Smart Number Billing."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/lock-circle.svg",
        mt: 4,
        title: "Secure Hosting"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/tools/compass.svg",
        mt: 4,
        title: "Flexible"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/iphone-x.svg",
        mt: 4,
        title: "Portable"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/map/marker-1.svg",
        mt: 4,
        title: "Relocatable"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/size.svg",
        mt: 4,
        title: "Scalable"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Maximum Utilization"
      }
    }]
  }]
}, {
  rowDistance: 8,
  gap: 6,
  body: [{
    width: ["100%", "100%", "100%", 2 / 3],
    type: "content",
    data: [{
      title: "SNB: Seamless Inbound Service",
      fontSize: ["lg", "xl"],
      titleSize: [32, 36, 40, 48],
      my: [2, 4, 8],
      text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, "Being unique to your business, Smart Numbers make it much easier for customers to remember your number and more accessible for them to reach you. Research shows they are a very successful marketing tool for creating more sales leads phone calls to your business."), __jsx("br", null), __jsx("br", null), __jsx("span", null, " Smart Numbers aren\u2019t limited to your local area, so your business can reach all of Australia. Whether you\u2019re ready to expand now\u2026or down the track, a Smart Number gives your business more options. BGUS provide diversified solutions for smart number integration for your business."))
    }, {
      list: ["Buy New Smart Numbers", "Host Existing Smart Numbers", "Get a Smart Number Billing Service", "Reports and complete billing logs."],
      spacing: 2,
      styleType: "none",
      icon: "check",
      iconColor: "green.500"
    }]
  }]
}]);

/***/ }),

/***/ "ZHLg":
/***/ (function(module, exports) {

module.exports = require("react-flickity-component");

/***/ }),

/***/ "ZWSN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "OVERVIEW",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "A client had a requirement to consolidate a distributed environment into a single highly available data center. Analysis into the current-state highlighted over 50 geographically dispersed sites hosting 250+ separate pieces of infrastructure.",
    textAlign: "justify"
  }, {
    text: "METHODOLOGY",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "A dual-site, dual-core Data center model was developed to provide a highly available central repository for this infrastructure with security overlay providing defined zones for controlled and internet-facing services.",
    textAlign: "justify"
  }, {
    text: "Some 24x7 workloads were protected by the deployment of self-healing network topologies and highly available virtualized infrastructure.",
    textAlign: "justify"
  }, {
    text: "Optimizing storage resources was essential to controlling the cost of data growth. The Enterprise Storage Assessment provided in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings were linked to their specific risks and benefits—so that they can scale their storage systems to successfully serve the growing needs of their business. ",
    textAlign: "justify"
  }, {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/services/storage.jpg"
    }),
    imageJustify: "center"
  }, {
    text: "And while there are commonalities that allow for pre-packaged solutions, every data center is different.",
    textAlign: "justify",
    mt: "32px"
  }, {
    text: "CONCLUSION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "Our experienced, certified storage professionals and data center practice team are adept and helped customers manage change and transform their data center's to enable next-generation computing models.",
    textAlign: "justify"
  }, {
    text: "RESOURCES USED",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "Major technologies used :",
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, " PaloAlto 5060"), " in multiple layers"),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Huawei 10G"), " switches "),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Cisco 5508 WLC")),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "F5 Viprion LTM(s)")),
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "aBqX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just enjoying the comfort of staying at home. How is it possible for us to streamline everything and hit our goals? Working on bringing more clients on board, what investments are aligned with the business goals, what’s the company vision, where we want to take this company, what we can do better for our clients, give them more love. Technology has given us enough opportunity to make time out of time and make BG more profitable. B2B calls or working on highly sensitive projects - this technology just made it easy for us to make the company’s profits exponential and we surely hope to learn more with this opportunity to work from home.",
    textAlign: "justify"
  }, {
    text: "BG Unified Solutions has now upgraded all of the VPNHEADEND firewalls, where all of the remote users / remote phones / any other secure remote connectivity terminates into 10G Firewalls with each firewall having a capacity of 2 million concurrent connections.",
    textAlign: "justify"
  }, {
    text: "We have increased our firewalls capacity to 10G firewalls in all DC locations. Now we have PaloAlto 5K, Fortinet 3700D’s and ASA 5585X with full UTM capabilities to provide you with secure internet access.",
    textAlign: "justify"
  }, {
    text: "We have increased our core capabilities in all DC locations to 40G devices with ALLFLASH storage for VDI/RDSaaS. We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS.",
    textAlign: "justify"
  }, {
    text: "All of the firewalls in production are now 10G firewalls.",
    textAlign: "justify"
  }, {
    text: " We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS. We will compile the golden image for you and get all the necessary software for you to work remotely. We can provide you with UCaaS using CISCO or Avaya.",
    textAlign: "justify"
  }, {
    text: "We can make Contact Center scripts for you without any professional services costs.",
    textAlign: "justify"
  }, {
    text: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with reliable and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.",
    textAlign: "justify"
  }, {
    text: "We are here to help in this chellenging time. Please do not hesitate to ask for help, whether you need VDI, UC, Storage, Managed Firewall or anything that will help you to keep carrying on your work remotely and keep you & your family safe in this time!!! Anything you need starting from storage, DR, Contact Center, Compute, VDI, RDS, DNS, SIP, Email Filtering or DB, don’t hesitate to contact us!!.",
    textAlign: "justify"
  }, {
    text: "WE ARE HERE TO HELP!!!",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }]
}]);

/***/ }),

/***/ "aIaH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NHP8");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iwtP");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const MyCount = _ref => {
  let {
    endPoint,
    startPoint = 0,
    duration = 1.7
  } = _ref,
      props = _objectWithoutProperties(_ref, ["endPoint", "startPoint", "duration"]);

  const {
    0: viewPortEntered,
    1: setViewPortEntered
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    end: endPoint,
    start: viewPortEntered ? null : startPoint,
    useEasing: true,
    duration: duration
  }, props), ({
    countUpRef
  }) => {
    return __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      active: !viewPortEntered,
      onChange: isVisible => {
        if (isVisible) {
          setViewPortEntered(true);
        }
      }
    }, __jsx("span", _extends({
      ref: countUpRef,
      className: "mb-0 text-primary"
    }, props)));
  }), __jsx("span", {
    className: "display6"
  }, props.subtext || ""), __jsx("span", {
    className: "text-secondary"
  }, props.description || ""));
};

/* harmony default export */ __webpack_exports__["a"] = (MyCount);

/***/ }),

/***/ "bXHZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: ./src/pageBuilder/Container.jsx
var Container = __webpack_require__("SiTN");

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/DbaasPricing.jsx
var __jsx = external_react_default.a.createElement;







const plans = [{
  index: 1,
  name: "Professional",
  icon: "/assets/images/icons/theme/paper-plane.svg",
  feature: ["4vCPU", "80GB SSD Storage", "6GB RAM", "Hourly Backup", "Desktop Virtualization", "High Availability", "High Clustering"],
  popular: false,
  cpu: 4,
  storage: 80,
  ram: 6
}, {
  index: 2,
  name: "Business",
  icon: "/assets/images/icons/theme/airplane.svg",
  feature: ["6vCPU", "80GB SSD Storage", "8GB RAM", "Hourly Backup", "Live Replica", "Desktop Virtualization", "High Availability", "High Clustering"],
  popular: true,
  cpu: 6,
  storage: 80,
  ram: 8
}, {
  index: 3,
  name: "Enterprise",
  icon: "/assets/images/icons/theme/rocket.svg",
  feature: ["8vCPU", "80GB SSD Storage", "16GB RAM", "Hourly Backup", "Live Replica", "Desktop Virtualization", "High Availability", "High Clustering"],
  popular: false,
  cpu: 8,
  storage: 80,
  ram: 16
}];

function DbaasPricing(props) {
  const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

  const [type, setType] = external_react_default.a.useState(""); //Hooks

  const [planName, setPlan] = external_react_default.a.useState("Standard");

  const handlePlan = name => setPlan(name);

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(react_["useDisclosure"])();
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [storage, setStorage] = external_react_default.a.useState(0);

  const handleStorage = storage => setStorage(storage);

  const [ram, setRam] = external_react_default.a.useState(0);

  const handleRam = ram => setRam(ram);

  const [cpu, setCPU] = external_react_default.a.useState(0);
  const [dailybackup, setDailyBackup] = external_react_default.a.useState(false);

  const handleDailyBackup = dailybackup => dailybackup ? ",Enabled Daily Backup" : "";

  const [windowLicense, setWindowLicense] = external_react_default.a.useState(false);

  const handleWindowLicense = windowLicense => windowLicense ? ",I have a Windows License" : "";

  const resetOnCardChange = () => {
    setWindowLicense(false);
    setDailyBackup(false);
    setType("");
    setCPU(0);
    setRam(0);
    setStorage(0);
  };

  const options = ['Daily Backups', 'Hourly Snapshots'];
  return __jsx("div", {
    className: "container-fluid",
    id: "pricing"
  }, __jsx(Container["a" /* default */], {
    py: 4
  }, __jsx(Fade_default.a, {
    cascade: true,
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, plans.map(plan => {
    return __jsx("div", {
      key: plan.index,
      className: "col-lg-4 col-sm-6 my-3"
    }, __jsx(PricingCard["a" /* PricingCard */], {
      icon: plan.icon,
      title: plan.name,
      popular: plan.popular,
      featureList: plan.feature
    }, __jsx(react_["Button"], {
      className: "mt-3 btn-block primary-btn",
      variant: "solid",
      size: "lg",
      colorScheme: "primary",
      onClick: () => {
        handlePlan(plan.name);
        openControls();
        resetOnCardChange();
      }
    }, "Get Started")));
  })))), __jsx("div", {
    id: "collapse-1",
    className: "container"
  }, __jsx(react_["Collapse"], {
    id: "quoteForm",
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, "Customize Your ", planName, " Plan"), __jsx("div", {
    className: "row px-3"
  }, __jsx("div", {
    className: "col-lg-12 mt-2"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a Type"), __jsx(RadioGroup["a" /* default */], {
    options: options,
    defaultIndex: 0,
    setValue: setType
  })), __jsx("div", {
    className: "col-lg-12 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Extend SSD Storage (in GB)"), __jsx(react_["Slider"], {
    color: "primary",
    my: "18px",
    defaultValue: 0,
    min: 0,
    max: 256 - 80,
    value: storage,
    onChange: handleStorage
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: 80 + storage
  }))), __jsx("div", {
    className: "col-lg-12 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Additional Memory (in GB)"), __jsx(react_["Slider"], {
    color: "primary",
    my: "18px",
    defaultValue: 0,
    max: "64",
    value: ram,
    onChange: handleRam
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: ram * 2
  }))), __jsx("div", {
    className: "col-md-6 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Additional vCPUs"), __jsx(react_["NumberInput"], {
    maxWidth: "160px",
    min: 0,
    max: 60,
    value: cpu,
    onChange: value => {
      value <= 60 ? setCPU(value) : setCPU(60);
    },
    step: cpu < 2 ? 1 : 2
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-6 mt-4 pt-md-4 pb-1 d-flex justify-content-md-end align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Database As A Service",
    serviceDescription: `${planName} , ${type} ${verifyNotEmpty(storage, "GB Additional Storage")} ${verifyNotEmpty(ram * 2, "GB Additional Memory")}
                
                ${verifyNotEmpty(cpu, "Additional vCPUs")}`,
    button: true
  })))))));
}

/* harmony default export */ var pricing_DbaasPricing = (DbaasPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/dbaas.jsx

var dbaas_jsx = external_react_default.a.createElement;

/* harmony default export */ var dbaas = __webpack_exports__["default"] = ([{
  mt: 0,
  py: 0,
  containerWidth: "100%",
  body: [{
    type: "pricing",
    data: dbaas_jsx(pricing_DbaasPricing, null)
  }, {
    width: ["100%"],
    mt: 8,
    type: "imageGroup",
    data: {
      images: ["/assets/images/icons/brands/mongodb.svg", "/assets/images/icons/brands/MySQL-Logo.png", "/assets/images/icons/brands/azure_sql_server_posted.svg", "/assets/images/icons/brands/microsoft-sql-server.svg"],
      px: 3,
      height: "80px",
      objectFit: "contain",
      maxW: ["135.5px", "175px", "231px", "283px"]
    }
  }]
}, {
  gap: 10,
  body: [{
    width: ["100%", "100%", "50%"],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/dbaas.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Managed databases for your Businesses -",
      titleSize: [28, 28, 28, 32],
      text: dbaas_jsx("span", null, "Database-as-a-Service (DBaaS) refers to software that enables users to set up, operate and scale databases using a standard set of abstractions (primitives) without either understanding or care about the exact implementations of those abstractions for the specific database.")
    }]
  }]
}, {
  title: "BG Unified Solutions providing Databases for your Enterprise Needs:-",
  titleStyle: {
    mt: 8
  },
  description: "BG Unified Solutions Remote DBA service will manage your database infrastructure, no matter how big or small it may be. You’ll be able to focus more on your business while our experts work on your database platform 24 x 7.",
  my: 0,
  py: 16,
  bg: "light.400",
  color: "dark.500",
  rowDistance: 8,
  gap: 8,
  descriptionStyle: {
    fontSize: ["lg", "lg", "xl"]
  },
  body: [{
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/headphones.svg",
      mt: 4,
      title: "Expert Consultation"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/display-1.svg",
      mt: 4,
      title: "Daily Monitoring Assured"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/downloaded-file.svg",
      mt: 4,
      title: "Backup and Install"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/server.svg",
      mt: 4,
      title: "Server Patching"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/tools/tools.svg",
      mt: 4,
      title: "Performance Tuning"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/shift.svg",
      mt: 4,
      title: "Upgrade and Migration"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/downloads-folder.svg",
      mt: 4,
      title: "Server Installation"
    }
  }]
}, {
  py: [8, 12],
  description: "We offer 24 x 7 managed database services. We’ll monitor database infrastructure, handle incidents, respond to events/alarms, follow change management processes, improve overall performance, and reduce vulnerabilities.",
  descriptionStyle: {
    fontSize: ["lg", "lg", "xl"],
    opacity: 0.7,
    textAlign: "left"
  }
}]);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "csPl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "We help you in new Application Development, Modernizing, and to Support existing applications.",
  pt: 10,
  pb: 0,
  mb: 0
}, {
  rowDistance: 8,
  my: 0,
  pt: 5,
  pb: 10,
  gap: 10,
  body: [{
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/world-wide-web.svg",
      title: "Diversified Domains",
      align: "left",
      description: "We help you build applications for a broad domain - We help you build applications for a wide range of platforms and fields, including mobile, web, enterprise, startups, and much more."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/target-audience.svg",
      title: "Client-Centric",
      align: "left",
      description: "We make sure that our Application Development Service is precisely in agreement with our clients' vision and what they expect from us."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/money.svg",
      title: "Affordable",
      align: "left",
      description: "We tend to provide our customers with the full value of the money they pay. We make sure that every penny spent is fully utilized."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/user-engagement.svg",
      title: "User-Engagement",
      align: "left",
      description: "Applications developed for mobiles and web help your clients and customers to use the application at their ease."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/turn.svg",
      title: "Low Turn-Around Time",
      align: "left",
      description: "We plan, design, start and deliver without wasting any single second, always providing the results before the deadlines."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/headphones.svg",
      title: "Excellent Customer Support",
      align: "left",
      description: "We are available 24X7X365, at your disposal. Be it installation, deployment, consultation, we are there to help you."
    }
  }]
}, {
  title: "An application built on the platform of your choice is maintained and monitored in real-time.",
  body: [{
    type: "image&text",
    data: {
      title: "Platform Independence",
      description: "Build applications for a range of digital platforms like mobile, desktop, smartwatch, AR, etc. User-interactivity, responsiveness, user-friendly interfaces kept into consideration.",
      image: "/assets/images/illustrations/diversity.svg",
      flexDirection: ["column", "column", "row"]
    }
  }, {
    type: "image&text",
    data: {
      title: "Client Specific",
      description: "A highly talented team of professionals and technology experts, to build customized solutions as per the client’s needs. Customer satisfaction is the prime motto, and we ensure to deliver every requirement expected.",
      image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
      flexDirection: ["column", "column", "row-reverse"]
    }
  }, {
    type: "image&text",
    data: {
      title: "Flexibility and Scalability",
      description: "Digital transformation, App modernization and up-gradation, and Application Integration Services. The agile software development model is followed to provide better results.",
      image: "/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg",
      flexDirection: ["column", "column", "row"]
    }
  }]
}]);

/***/ }),

/***/ "dM+Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/FirewallPricing.jsx
var __jsx = external_react_default.a.createElement;





function FirewallPricing(props) {
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1"
  }, __jsx(react_["Tabs"], {
    align: "center"
  }, __jsx(react_["TabList"], null, __jsx(react_["Tab"], {
    className: "p-3 px-4 display6"
  }, "Physical"), __jsx(react_["Tab"], {
    className: "p-3 px-4 display6"
  }, "Virtual")), __jsx(react_["TabPanels"], null, __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/firewall_physical.svg",
    title: "Physical 1G"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Single Location",
    serviceName: "Firewall As A Service",
    serviceDescription: "Physical 1G, Single Location"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Multihomed",
    serviceName: "Firewall As A Service",
    serviceDescription: "Physical 1G, Multihomed"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "On Premise",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  }))), __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/physical_cluster.svg",
    title: "Physical Cluster 1G"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Single Location",
    serviceName: "Firewall As A Service",
    serviceDescription: "Physical Cluster 1G, Single Location"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Multihomed",
    serviceName: "Firewall As A Service",
    serviceDescription: "Physical Cluster 1G, Multihomed"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "On Premise",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  })))))), __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    title: "Virtual 1G"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Single Location",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual 1G, Single Location"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Multihomed",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual 1G, Multihomed"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "On Premise",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  }))), __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/virtual_cluster.svg",
    title: "Virtual Cluster 1G"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Single Location",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Single Location"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Multihomed",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "On Premise",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  })))), __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    title: "Virtual 10G"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Single Location",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual 10G, Single Location"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Multihomed",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual 10G, Multihomed"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "On Premise",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  }))), __jsx("div", {
    className: "col-lg-5 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/virtual_cluster.svg",
    title: "Virtual Cluster 10G"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Single Location",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 10G, Single Location"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "Multihomed",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 10G, Multihomed"
  }), __jsx(PricingCard["b" /* PricingQuote */], {
    title: "On Premise",
    serviceName: "Firewall As A Service",
    serviceDescription: "Virtual Cluster 1G, Multihomed"
  })))))))))));
}

/* harmony default export */ var pricing_FirewallPricing = (FirewallPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/firewall.jsx

var firewall_jsx = external_react_default.a.createElement;

/* harmony default export */ var firewall = __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/firewall.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: "lg",
      title: "Your Security Needs Meet Our Expertise",
      titleSize: 32,
      text: firewall_jsx("span", null, "At BG Unified Solutions, we tend to offer the best-in-class Security for your business around the globe. With our team of experts, the experience we\u2019ve gained ensures you can provide customizable security to your network, prevent any security breach, and secure data flowing through your system. We offer you solutions that especially suit your business model; whether small, medium, or large, we\u2019ve got it covered.")
    }]
  }]
}, {
  title: "Firewall Technologies",
  mt: 0,
  containerWidth: "100%",
  body: [{
    width: ["100%"],
    mt: 8,
    type: "imageGroup",
    data: {
      images: ["/assets/images/brands/cisco.png", "/assets/images/brands/fortinet.png", "/assets/images/brands/paloalto.png"],
      px: 3,
      height: "90px",
      objectFit: "contain",
      maxW: ["175px", "231px", "283px"]
    }
  }]
}, {
  title: "Protect Your Network With BG Unified Solutions",
  description: "BG Unified solutions provide you firewalls for a single location system, or a multi-homed network, as per your needs and requirements. We have On-premise or cloud-based that helps secure your IT environment quickly.",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/thunder-move.svg",
      mt: 4,
      title: "Smooth and Efficient Performance"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/group.svg",
      mt: 4,
      title: "Experienced Team of Experts"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/upload.svg",
      mt: 4,
      title: "Proven Deployment Methodology"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/shield-user.svg",
      mt: 4,
      title: "Extended Security Infrastructure"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/chat-5.svg",
      mt: 4,
      title: "Consultation and Customer Support"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/dollar.svg",
      mt: 4,
      title: "Cost-Efficient Service"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/lock-circle.svg",
      mt: 4,
      title: "Secure Data Flow"
    }
  }]
}, {
  title: "Our Pricing Plans",
  width: "100%",
  my: 0,
  pt: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: firewall_jsx(pricing_FirewallPricing, null)
  }]
}, {
  title: firewall_jsx("div", {
    className: "d-block d-sm-none"
  }, "We Offer"),
  pt: 0,
  pb: 10,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "lg",
      content: [{
        title: "Platform Diversity",
        description: "On-premise or cloud-based, that helps secure your IT environment quickly. The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.",
        image: "/assets/images/illustrations/diversity.svg"
      }, {
        title: "Fast and Easy Deployment",
        description: "Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure without Capex.",
        image: "/assets/images/illustrations/FastAndEasyDevelopment_Firewall.svg"
      }, {
        title: "Advanced Technology Stack",
        description: "Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, User-Based Policy and Advanced Logging facilities, SSL Virtual Private Network included.",
        image: "/assets/images/illustrations/data_protection.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fZbZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: __jsx("span", null, " A start of a new journey where BG Unified Solutions and Forcepoint collaboratively offer CDR Zero Trust Content to the end customers in a bundled offering for Managed Firewall As A Service. It was very exciting to hear the benefits of the Forcepoint CDR Zero Trust Content and its advantages to the end customers."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "Rather than identifying known malware, Zero Trust CDR takes the data and extracts useful information from it. The extracted information is transformed into an intermediary format and verified. This advanced threat protection process makes sure no threats or attacks can reach the next stage. The original data is stored or discarded along with malware, known or unknown. Brand new data is then built in a normalized way, containing the verified information. The new data replicates the original data, without the threat of embedded malware and is now guaranteed safe."),
    textAlign: "justify",
    mb: "32px"
  }, {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      rounded: "xl",
      height: "400px",
      width: "100%",
      objectFit: "cover",
      src: "https://media-exp1.licdn.com/dms/image/C5622AQHhpF1R9lqHdA/feedshare-shrink_800/0/1644544777727?e=1649289600&v=beta&t=ut32JXmonGlN0vumhJjwVBU8PTVf7mlD6mBLxaf72Tc"
    }),
    imageJustify: "center"
  }, {
    text: __jsx("span", null, "A mind-blowing concept of Zero Trust CDR bundled with multi-layered firewall protection in addition to the F5 Web Application Firewall protection, what else a customer can expect from the service provider.", __jsx("br", null), "A big thanks to the team at Forcepoint especially Yusuf M. for spending some time with the BG Unified Solutions team this morning and highlighting the advantages of Zero Trust CDR."),
    mt: "32px"
  }, {
    text: __jsx("span", null, "A big step towards the upcoming IRAP Assessment for multiple service offerings this year. A highly secured multi-tenanted solution(s) maintaining all requirements of data sovereignty and protection, with extensive vendor support to go the extra mile to provide each customer with a robust solution."),
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iMpC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _storage = _interopRequireDefault(__webpack_require__("L0dh"));

var _infra = _interopRequireDefault(__webpack_require__("zU2+"));

var _ddos = _interopRequireDefault(__webpack_require__("kgmI"));

var _logging = _interopRequireDefault(__webpack_require__("T+MD"));

var _backup = _interopRequireDefault(__webpack_require__("VJ98"));

var _dns = _interopRequireDefault(__webpack_require__("Uexg"));

var _platform = _interopRequireDefault(__webpack_require__("j0hc"));

var _firewall = _interopRequireDefault(__webpack_require__("dM+Q"));

var _contactCenter = _interopRequireDefault(__webpack_require__("6rki"));

var _wireless = _interopRequireDefault(__webpack_require__("yt2v"));

var _proxy = _interopRequireDefault(__webpack_require__("Nk4L"));

var _hosting = _interopRequireDefault(__webpack_require__("skeJ"));

var _cex = _interopRequireDefault(__webpack_require__("6dXB"));

var _tpaas = _interopRequireDefault(__webpack_require__("qKqI"));

var _snb = _interopRequireDefault(__webpack_require__("Ywt+"));

var _cdr = _interopRequireDefault(__webpack_require__("8AVj"));

var _sip = _interopRequireDefault(__webpack_require__("CJBh"));

var _ucaas = _interopRequireDefault(__webpack_require__("Mc19"));

var _appdev = _interopRequireDefault(__webpack_require__("csPl"));

var _sdwan = _interopRequireDefault(__webpack_require__("UcTW"));

var _dr = _interopRequireDefault(__webpack_require__("mE3L"));

var _architecturalConsultancy = _interopRequireDefault(__webpack_require__("zecf"));

var _loadBalancer = _interopRequireDefault(__webpack_require__("S63P"));

var _workstation = _interopRequireDefault(__webpack_require__("nk7+"));

var _socaas = _interopRequireDefault(__webpack_require__("BPdO"));

var _wafaas = _interopRequireDefault(__webpack_require__("9Nel"));

var _dbaas = _interopRequireDefault(__webpack_require__("bXHZ"));

var _webdev = _interopRequireDefault(__webpack_require__("lMRE"));

var _sdaas = _interopRequireDefault(__webpack_require__("TzDg"));

var _gpu = _interopRequireDefault(__webpack_require__("+luA"));

var _kubernetes = _interopRequireDefault(__webpack_require__("sNPH"));

var _networkFinance = _interopRequireDefault(__webpack_require__("sTXT"));

var _serverFinance = _interopRequireDefault(__webpack_require__("oPr6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports.storage = _storage.default;
module.exports.infra = _infra.default;
module.exports.ddos = _ddos.default;
module.exports.logging = _logging.default;
module.exports.backup = _backup.default;
module.exports.dns = _dns.default;
module.exports.platform = _platform.default;
module.exports.firewall = _firewall.default;
module.exports.callcenter = _contactCenter.default;
module.exports.wireless = _wireless.default;
module.exports.proxy = _proxy.default;
module.exports.hosting = _hosting.default;
module.exports.cex = _cex.default;
module.exports.tpaas = _tpaas.default;
module.exports.snb = _snb.default;
module.exports.cdr = _cdr.default;
module.exports.sip = _sip.default;
module.exports.ucaas = _ucaas.default;
module.exports.appdev = _appdev.default;
module.exports.sdwan = _sdwan.default;
module.exports.dr = _dr.default;
module.exports.architecture = _architecturalConsultancy.default;
module.exports.loadBalancer = _loadBalancer.default;
module.exports.workstation = _workstation.default;
module.exports.socaas = _socaas.default;
module.exports.wafaas = _wafaas.default;
module.exports.dbaas = _dbaas.default;
module.exports.webdev = _webdev.default;
module.exports.sdaas = _sdaas.default;
module.exports.gpu = _gpu.default;
module.exports.kubernetes = _kubernetes.default;
module.exports.networkFinance = _networkFinance.default;
module.exports.serverFinance = _serverFinance.default;

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "j0KW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "It was towards the end of 2019, and the staff at Australian data and applications hosting specialist BG Unified Solutions were looking forward to closing out another busy and successful year.",
    textAlign: "justify"
  }, {
    text: "Then, disaster hit.",
    textAlign: "justify"
  }, {
    text: "“We started facing frequent and unexplained network outages,” explains BGU’s co-founder and managing director, Saurabh Sareen.",
    textAlign: "justify"
  }, {
    text: " “These resulted in direct and significant financial impacts for the business and our customers. Unable to get adequate technical and management attention applied to their network failures, they remained exposed and frustrated. ",
    textAlign: "justify"
  }, {
    text: "With BGU’s reputation for high up-time and quality of service on the line, Saurabh made the call to look for a new data hosting infrastructure provider. That was a daunting task: BGU has experienced massive growth in recent years, with its infrastructure footprint expanding to 15 racks of equipment. It also has dozens of clients with mission-critical applications and voice calling services reliant on its infrastructure.",
    textAlign: "justify"
  }, {
    text: "It needed a partner that was flexible, scalable and could move fast to ease the pain of BGU’s customers who were suffering network outages.",
    textAlign: "justify"
  }, {
    text: " The answer was a migration to Datacom@AirTrunk, our dedicated hosting infrastructure based on state-of-the-art hyper-scale facilities in Sydney (SYD1) and Melbourne (MEL1). With Datacom@AirTrunk, we offer hosting and co-location services as well as state-to-state and trans-Tasman interconnectivity via our dedicated network.",
    textAlign: "justify"
  }, {
    text: "We went to work with BGU, laying the groundwork for a migration that would hopefully cause no further disruption to BG’s customers.",
    textAlign: "justify"
  }, {
    text: "“There were some tense moments given the high stakes involved,” admits Saurabh. “But the migration outage was no more than the travel time transferring our equipment between facilities and the time between power off and power on again. The transition was completely successful.”",
    textAlign: "justify"
  }, {
    text: "Using the Datacom National Network, we were able to interconnect with BGU’s existing hosting provider via high capacity links to undertake the migration of data and applications. The whole process took just two weeks.",
    textAlign: "justify"
  }, {
    text: "With its infrastructure now powered by Datacom@AirTrunk, BG Unified Solutions now enjoys all of the benefits the service has to offer, including flexible commercial terms, diverse distributed denial of service (DDOS) protected internet services and on-floor technicians, who are available 24/7.",
    textAlign: "justify"
  }, {
    text: "With Datacom's consumption-based hosting model, customers only pay for what they use, not high fixed monthly costs.",
    textAlign: "justify"
  }, {
    text: "By consolidating BGU’s racks from 15 down to 11 (seven production and four reserve racks) combined with on consumption usage has resulted in some big savings.That has reduced my monthly hosting costs by 60 per cent,says Saurabh.",
    textAlign: "justify"
  }, {
    text: "For Karan Lokhande, Sydney-based Business Development Manager at Datacom, the pay-as-you-go model represents a fairer approach that gives customers tangible savings. They can typically lower their costs by 40 per cent. In the case of BGU it was 60 per cent. People are quite taken aback by this as the market is still getting used to it. With a successful migration behind it, BGU is back in the business of focusing on the needs of its growing customer base. Most importantly, Sareen and the team have a hosting provider they can put their trust in.",
    textAlign: "justify"
  }, {
    text: "Courtesy: datacom.com/au",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "j0hc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  typeWriter_title: {
    before: "",
    typed: ["Deploy", "Run", "Manage"],
    after: " your Application on the Cloud Platform"
  },
  rowDistance: 8,
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/platform (2).jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "400px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "left",
      fontSize: "xl",
      opacity: .7,
      text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", null, "End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. 10G/40G core switching offering a high-speed spine and leaf network."), __jsx("br", null), __jsx("br", null), __jsx("span", null, "With BG Unified Solutions Platform as a Service, we provide you with End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. Huawei 10G core switching offering a high-speed spine and leaf network. Scaling up your project has never been this easy. BGUS, PaaS  provides you with limitless resources of computing."))
    }]
  }]
}, {
  gap: 10,
  py: 12,
  my: 0,
  bg: "light.400",
  body: [{
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/theme/cloud-computing.svg",
      title: "User-Oriented Cloud Platforms",
      description: "Solutions for a diverse range of platforms, as and what suits you the most!",
      align: "center"
    }
  }, {
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/library/devices/cpu-1.svg",
      title: "Infinite Computing Resources",
      description: "We are delivering all the necessary resources required at minimal time and cost!",
      align: "center"
    }
  }, {
    width: ["100%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/color/pie-chart.svg",
      title: "Monitor on-the-go",
      description: "Maintain, monitor, and manage your application anytime, anywhere!",
      align: "center"
    }
  }]
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: [4, 8],
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Load Balancing",
        description: "Meet the needs of your business—today and as you grow—with innovative, flexible, and scalable load balancing solutions—platform-oriented cloud platforms.",
        image: "/assets/images/illustrations/data_points.svg"
      }, {
        title: "Easy execution",
        description: "Enabling clients to develop, run, and manage business applications without building authentic software infrastructure. Platform-oriented cloud platforms obtain a higher level of abstraction.",
        image: "/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg"
      }, {
        title: "Cost-effective scalability",
        description: " Scale up your project on demand by purchasing just the amount of hardware or storage you require at affordable prices—platform as a service cloud providing you with limitless computing resources.",
        image: "/assets/images/illustrations/productivity.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "kCVN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: __jsx("span", null, "A very big step from ", __jsx("b", null, "Radware"), " to work closely with ", __jsx("b", null, "BG Unified Solutions"), " to offer a redundant, highly stable, fully managed and highly secured ", __jsx("b", null, "WAF"), " and ", __jsx("b", null, "DDOS"), " Solutions to the end customers collaboratively."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "The evidence of this common goal is the first step of introducing ", __jsx("b", null, "Radware Alteon 6024"), " devices into BG Unified Solutions primary data center location. We will offer ", __jsx("b", null, "WAFaaS"), " and ", __jsx("b", null, "DDOSaaS"), " from this location."),
    textAlign: "justify"
  }, {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/services/wafaas.jpg"
    }),
    imageJustify: "center"
  }, {
    text: "As a leader of BG Unified Solutions, I can see the growth in the cybersecurity services to the end customers especially when BG Unified Solutions is very close to be on the Defence Panel in addition to NSW and Victorian State Government Panel",
    textAlign: "justify",
    mt: "32px"
  }, {
    text: __jsx("span", null, "A big thanks to ", __jsx("b", null, "Yaniv Hoffman, Kash Sharma, Steve Dikshteyn"), " and rest of the Radware team to work towards common goals of high customer satisfaction."),
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "kUGF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Description(_ref) {
  let {
    mt = 4,
    opacity = .7,
    fontSize = ["lg", "xl"],
    px = ["6.17%", "8.17%"],
    textAlign = "center",
    children = ""
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mt", "opacity", "fontSize", "px", "textAlign", "children"]);

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], _extends({
    style: {
      textAlignLast: textAlign
    },
    fontSize: fontSize,
    px: px,
    mt: mt,
    textAlign: "justify",
    opacity: opacity
  }, props), children);
}

/* harmony default export */ __webpack_exports__["a"] = (Description);

/***/ }),

/***/ "kgmI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/firewall-2.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Your Security Needs Meet our Expertise",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", null, "Distributed Denial of Service Attacks have become more frequent and more hazardous in recent times. This situation has triggered the need for DDoS protection at a tremendous rate. With the growing availability of attack tools and global botnets, BGUS tackles all your worries from a security perspective and practice to provide the best-in-class security service to your business.")
    }]
  }]
}, {
  title: "Get your Business Secured with our DDoS Protection",
  description: "BG Unified Solutions provides optimal DDoS protection as a  service with the most accurate detection and feasible solution.",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/stack.svg",
      mt: 4,
      title: "Multi-Layered Protection"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/bucket.svg",
      mt: 4,
      title: "Comprehensive"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/headphones.svg",
      mt: 4,
      title: "Competent and Responsive Team"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/shield-check.svg",
      mt: 4,
      title: "Extremely Reliable"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/git-4.svg",
      mt: 4,
      title: "Variety of domains"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/thunder-move.svg",
      mt: 4,
      title: "Fast mitigation"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/chart-line-1.svg",
      mt: 4,
      title: "Geographically Distributed"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: __jsx("span", null, "Our global DDoS mitigation network comprises centers located strategically worldwide to protect Internet-facing infrastructures against all known types of DDoS attacks at the network, transport, and application layers. Our DDoS filtering techniques, advanced routing, and anti-DoS hardware devices remove DDoS traffic close to the botnet activity source."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}]);

/***/ }),

/***/ "lMRE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/WebDevPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function Description(_ref) {
  let {
    mt = 4,
    opacity = .7,
    fontSize = ["lg", "xl"],
    px = ["6.17%", "8.17%"],
    textAlign = "center",
    children = ""
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mt", "opacity", "fontSize", "px", "textAlign", "children"]);

  return __jsx(react_["Text"], _extends({
    style: {
      textAlignLast: textAlign
    },
    fontSize: fontSize,
    px: px,
    mt: mt,
    textAlign: "justify",
    opacity: opacity
  }, props), children);
}

const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    flexDirection: "column",
    padding: 16,
    color: isChecked ? "white" : "gray.400",
    fontSize: ["13px", "14px", "16px"],
    ref: ref,
    borderRadius: 12,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function WebDevPricing(props) {
  const [page, setPage] = external_react_default.a.useState(1);
  const [phase, setPhase] = external_react_default.a.useState(null);
  const [mobile, setMobile] = external_react_default.a.useState(false);
  const [web, setWeb] = external_react_default.a.useState(false);
  const [ai, setAi] = external_react_default.a.useState(false);
  const [functionalities, setFunctionalities] = external_react_default.a.useState([""]);

  const handleFunctionalities = fun => {
    if (fun.length == 1) {
      return "Choose functionalities";
    } else {
      return fun.slice(1).toString();
    }
  };

  const [industry, setIndustry] = external_react_default.a.useState(",Industry : IVS & Product Companies");
  return __jsx(react_["Box"], {
    overflow: "hidden",
    boxShadow: "xl",
    rounded: 12,
    id: "pricing"
  }, page == 1 && __jsx("div", {
    className: "px-lg-4 py-5 rounded-8 shadow-lg"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "display5 text-center"
  }, "Project Phase?"), __jsx("div", {
    className: "row px-3 justify-content-center px-lg-4"
  }, __jsx("div", {
    className: "col-lg-10 my-3 d-flex justify-content-center"
  }, __jsx(RadioGroup["a" /* default */], {
    setValue: setPhase,
    options: [{
      value: "Planning",
      render: __jsx(react_["VStack"], {
        width: "120px",
        p: 6
      }, __jsx(react_["Box"], {
        as: fa_["FaPencilRuler"],
        boxSize: "48px"
      }), __jsx(react_["Box"], null, "Planning"))
    }, {
      value: "Design",
      render: __jsx(react_["VStack"], {
        width: "120px",
        p: 6
      }, __jsx(react_["Box"], {
        as: fa_["FaDrawPolygon"],
        boxSize: "48px"
      }), __jsx(react_["Box"], null, "Design"))
    }, {
      value: "Development",
      render: __jsx(react_["VStack"], {
        width: "120px",
        p: 6
      }, __jsx(react_["Box"], {
        as: fa_["FaCode"],
        boxSize: "48px"
      }), __jsx(react_["Box"], null, "Development"))
    }]
  })), __jsx("div", {
    className: "col-lg-12 d-flex justify-content-center my-3"
  }, __jsx(react_["Button"], {
    rightIcon: "chevron-right",
    isDisabled: phase == null ? true : false,
    onClick: () => {
      setPage(2);
    },
    variant: "solid",
    className: "primary-btn",
    colorScheme: "primary",
    size: "lg"
  }, "Next"))))), page == 2 && __jsx("div", {
    className: "px-lg-4 py-5 rounded-8 shadow-lg"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    right: true
  }, __jsx("div", {
    className: "display5 text-center"
  }, "Choose Project Domain"), __jsx("div", {
    className: "row px-3 justify-content-center px-lg-4"
  }, __jsx("div", {
    className: "col-lg-10 my-3"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx(react_["Button"], {
    className: "my-1 mx-2",
    p: 16,
    flexDirection: "column",
    rounded: 12,
    color: mobile ? "white" : "gray.400",
    fontSize: ["13px", "14px", "16px"],
    onClick: () => {
      setMobile(!mobile);
    },
    variant: mobile ? "solid" : "outline",
    colorScheme: mobile ? "primary" : "gray.300",
    "aria-checked": mobile
  }, __jsx("span", {
    className: "d-flex pb-2 justify-content-center text-center"
  }, __jsx(fa_["FaMobileAlt"], {
    size: "48px"
  })), "Mobile"), __jsx(react_["Button"], {
    className: "my-1 mx-2",
    p: 16,
    flexDirection: "column",
    rounded: 12,
    color: web ? "white" : "gray.400",
    fontSize: ["13px", "14px", "16px"],
    onClick: () => {
      setWeb(!web);
    },
    variant: web ? "solid" : "outline",
    colorScheme: web ? "primary" : "gray.300",
    "aria-checked": web
  }, __jsx("span", {
    className: "d-flex pb-2 justify-content-center text-center"
  }, __jsx(fa_["FaGlobe"], {
    size: "48px"
  })), "Web"), __jsx(react_["Button"], {
    className: "my-1 mx-2",
    p: 16,
    flexDirection: "column",
    color: ai ? "white" : "gray.400",
    rounded: 12,
    variant: ai ? "solid" : "outline",
    fontSize: ["13px", "14px", "16px"],
    onClick: () => {
      setAi(!ai);
    },
    colorScheme: ai ? "primary" : "gray.300",
    "aria-checked": ai
  }, __jsx("span", {
    className: "d-flex pb-2 justify-content-center text-center"
  }, __jsx(fa_["FaRobot"], {
    size: "48px"
  })), "AI/ML"))), __jsx("div", {
    className: "col-lg-12 d-flex justify-content-center my-3"
  }, __jsx(react_["Button"], {
    rightIcon: "chevron-right",
    isDisabled: mobile == false && web == false && ai == false ? true : false,
    onClick: () => {
      setPage(3);
    },
    variant: "solid",
    className: "primary-btn",
    colorScheme: "primary",
    size: "lg"
  }, "Next"))))), page == 3 && __jsx("div", {
    className: "px-lg-4 py-5 rounded-8 shadow-lg"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    right: true
  }, __jsx("div", {
    className: "row text-center px-3 px-lg-5 justify-content-center"
  }, __jsx(react_["Box"], {
    w: ["90%", "80%", "72%"]
  }, __jsx("div", {
    className: "h6 mt-4 d-flex justify-content-start"
  }, "Functionalities "), __jsx(react_["Menu"], {
    closeOnSelect: false
  }, __jsx("div", null, __jsx(react_["MenuButton"], {
    marginY: 3,
    w: ["100%"],
    fontWeight: "normal",
    overflow: "hidden",
    justifyContent: "space-between",
    bg: "white",
    borderWidth: 1,
    padding: 4,
    as: react_["Button"],
    rightIcon: "chevron-down"
  }, handleFunctionalities(functionalities)), __jsx(react_["MenuList"], {
    w: ["50%"],
    zIndex: 100,
    placement: "bottom"
  }, __jsx(react_["MenuOptionGroup"], {
    value: functionalities,
    onChange: setFunctionalities,
    type: "checkbox"
  }, __jsx(react_["MenuItemOption"], {
    value: " CMS"
  }, "CMS"), __jsx(react_["MenuItemOption"], {
    value: " Frontend"
  }, "Frontend"), __jsx(react_["MenuItemOption"], {
    value: " Server-Side"
  }, "Server-Side"), __jsx(react_["MenuItemOption"], {
    value: " Responsiveness"
  }, "Responsiveness"), __jsx(react_["MenuItemOption"], {
    value: " E-Commerce"
  }, "E-Commerce"), __jsx(react_["MenuItemOption"], {
    value: " Digital-Marketing"
  }, "Digital-Marketing"), __jsx(react_["MenuItemOption"], {
    value: " SEO"
  }, "SEO"), __jsx(react_["MenuItemOption"], {
    value: " Chatbot"
  }, "Chatbot"))))), __jsx("div", {
    className: "h6 mt-4 d-flex justify-content-start"
  }, "Industry "), __jsx(react_["Select"], {
    value: industry,
    marginY: 3,
    variant: "filled",
    bg: "white",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    fontSize: "16px",
    fontWeight: "semi-bold",
    onChange: e => {
      setIndustry(e.target.value);
    },
    type: "checkbox"
  }, __jsx("option", {
    value: ",Industry : IVS & Product Companies"
  }, "IVS & Product Companies"), __jsx("option", {
    value: ",Industry : Digital & Marketing Agencies"
  }, "Digital & Marketing Agencies"), __jsx("option", {
    value: ",Industry : Banking & Finance"
  }, "Banking & Finance"), __jsx("option", {
    value: ",Industry : Retailt & E-Commerce"
  }, "Retailt & E-Commerce"), __jsx("option", {
    value: ",Industry : Healthcare"
  }, "Healthcare"), __jsx("option", {
    value: ",Industry : Education and E-Learning"
  }, "Education and E-Learning"), __jsx("option", {
    value: ",Industry : Logistics & Transportation"
  }, "Logistics & Transportation"), __jsx("option", {
    value: ",Industry : Media & Entertainment"
  }, "Media & Entertainment"), __jsx("option", {
    value: ",Industry : Automotive"
  }, "Automotive"), __jsx("option", {
    value: ",Industry : Travel & Tourism"
  }, "Travel & Tourism"), __jsx("option", {
    value: ",Industry : Technology"
  }, "Technology"), __jsx("option", {
    value: ",Industry : Publishing & Advertising"
  }, "Publishing & Advertising")), __jsx("div", {
    className: "d-flex justify-content-center mt-5"
  }, __jsx(react_["Button"], {
    rightIcon: "chevron-right",
    onClick: () => {
      setPage(4);
    },
    variant: "solid",
    className: "primary-btn",
    colorScheme: "primary",
    size: "lg"
  }, "Next")))))), page == 4 && __jsx("div", {
    className: "px-lg-4 py-5 rounded-8 shadow-lg"
  }, __jsx(Fade_default.a, {
    className: "px-lg-5 ",
    duration: 500,
    right: true
  }, __jsx("div", {
    className: "display5 mt-3 text-center"
  }, "Your Idea, Our Execution!!"), __jsx("div", {
    className: "row px-3 justify-content-center px-lg-4"
  }, __jsx(Description, {
    my: 5,
    children: "Share your ideas with us, then sit back and relax. Let us transform your idea into your desired end-product, specifically tailored and designed according to your needs and specifications. Experts in our domains, we are committed to client-satisfaction and deliverability."
  }), __jsx("div", {
    className: "col-lg-12 d-flex justify-content-center mb-3 mt-4"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Web Development As A Service",
    serviceDescription: `${phase}, ${mobile ? " Mobile" : ""} ${web ? " Web" : ""} ${ai ? " AI&ML" : ""} ${functionalities.length > 1 ? ",Functionalities : " + functionalities.slice(1).join(";") : ""} ${industry} `,
    button: true
  }))))));
} //<PricingQuote serviceName="Web Hosting As A Service" serviceDescription={`${phase}, ${mobile?"Mobile /":""} ${web?"Web /":""} ${ai?"AI & ML ":""} `} button ></PricingQuote>


/* harmony default export */ var pricing_WebDevPricing = (WebDevPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/webdev.jsx

var webdev_jsx = external_react_default.a.createElement;

/* harmony default export */ var webdev = __webpack_exports__["default"] = ([{
  py: 0,
  body: [{
    type: "pricing",
    data: webdev_jsx(pricing_WebDevPricing, null)
  }]
}, {
  title: "Establish your Brand Online",
  description: "We have the right team, with expertise in their respective domains to develop and turn any business into an online giant.",
  rowDistance: 4,
  gap: 4,
  body: [{
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/monitor.svg",
      size: "96px",
      title: "E-Commerce",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/speaker.svg",
      size: "96px",
      title: "Advertising",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/technology-products.svg",
      size: "96px",
      title: "Products",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/software.svg",
      size: "96px",
      title: "SaaS",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }]
}, {
  title: "Our Development Process",
  description: "We follow the famous UX Design Process for designing and developing interfaces.",
  rowDistance: 8,
  body: [{
    width: ["50%", "33%"],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/communication/group.svg",
      iconColor: "primary.500",
      title: "Meet to Discover"
    }
  }, {
    type: "feature",
    width: ["50%", "33%"],
    data: {
      svg: "/assets/images/icons/library/communication/clipboard-list.svg",
      iconColor: "primary.500",
      title: "Plan & Sketch"
    }
  }, {
    type: "feature",
    width: ["50%", "33%"],
    data: {
      svg: "/assets/images/icons/library/design/bezier-curve.svg",
      iconColor: "primary.500",
      title: "Design Mockups"
    }
  }, {
    type: "feature",
    width: ["50%", "33%"],
    data: {
      svg: "/assets/images/icons/library/code/code.svg",
      iconColor: "primary.500",
      title: "Coding & Development"
    }
  }, {
    type: "feature",
    width: ["50%", "33%"],
    data: {
      svg: "/assets/images/icons/library/code/done-circle.svg",
      iconColor: "primary.500",
      title: "Quality Assurance"
    }
  }, {
    type: "feature",
    width: ["50%", "33%"],
    data: {
      svg: "/assets/images/icons/library/general/thunder-move.svg",
      iconColor: "primary.500",
      title: "Launch & Optimization"
    }
  }]
}, {
  my: 16,
  py: "48px",
  bg: "light.400",
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 4, 4],
    width: ["70%", "60%", "60%", "33%"],
    type: "imageGroup",
    data: {
      images: ["/assets/images/icons/color/user-engagement.svg"],
      mx: "16%"
    }
  }, {
    my: [0, 0, 4, 4],
    width: ["100%", "100%", "100%", 2 / 3],
    type: "content",
    data: [{
      title: "We build great experiences.",
      fontSize: ["lg", "xl"],
      titleSize: [32, 36, 40, 48],
      my: [2, 4, 8],
      text: webdev_jsx(external_react_default.a.Fragment, null, webdev_jsx("span", null, "We not only build great websites but focus on user interactivity as well. This is where new business comes. If your website is old-fashioned or outdated, you tend to lose your customers within 5 seconds."), webdev_jsx("br", null), webdev_jsx("br", null), webdev_jsx("span", null, " We are the solution to this problem:- A completely customized website designed strategically, regularly updated, and maintained. This is how you can convert your website into a valuable asset for your business."), ",")
    }, {
      list: ["Built for fast loading speeds.", "Platform Independence is a necessity.", "Easy to Update, Manage, and Maintain.", "SEO Friendly Content."],
      spacing: 2,
      styleType: "none",
      icon: "check",
      iconColor: "green.500"
    }]
  }]
}, {
  title: "Some add-ons we offer...",
  rowDistance: 4,
  body: [{
    width: ["80%", "50%", "33%", "25%"],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/tools/tools.svg",
      size: "80px",
      title: "Regular Website Maintenance Plans",
      titleSize: "md"
    }
  }, {
    width: ["80%", "50%", "33%", "25%"],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/design/pen-tool-vector.svg",
      size: "80px",
      title: "Logo Creation & Branding Design",
      titleSize: "md"
    }
  }, {
    width: ["80%", "50%", "33%", "25%"],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/general/shield-protected.svg",
      size: "80px",
      title: "Website Security & Protection Plans",
      titleSize: "md"
    }
  }, {
    width: ["80%", "50%", "33%", "25%"],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/home/picture.svg",
      size: "80px",
      title: "Ads, Brochures, Posters, and much more...",
      titleSize: "md"
    }
  }]
}]);

/***/ }),

/***/ "mE3L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/pageBuilder/pricing/CloudExchangePricing.jsx
var CloudExchangePricing = __webpack_require__("SJ5o");

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/DRPricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

function DRPricing(props) {
  const [show, setShow] = external_react_default.a.useState(false);
  const [plan, setPlan] = external_react_default.a.useState("");

  const openControls = name => {
    setShow(true);
    setPlan(name);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [value, setValue] = external_react_default.a.useState(1);

  const handleChange = value => setValue(value);

  const [veeam, setVeeam] = external_react_default.a.useState(0);
  const [IP, setIP] = external_react_default.a.useState(0);
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center px-lg-5"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, " Two ", __jsx("br", null), " Geo Locations "),
    icon: "/assets/images/icons/theme/property-2.svg",
    featureList: ["Includes One Yearly Drill"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls("Two Geo Locations");
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: __jsx("div", {
      className: "text-center"
    }, " Three ", __jsx("br", null), " Geo Locations "),
    icon: "/assets/images/icons/theme/property-3.svg",
    featureList: ["Includes One Yearly Drill"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls("Three Geo Locations");
    }
  }, "View Options"))))), __jsx("div", {
    id: "collapse-1"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, plan), __jsx("div", {
    className: "row justify-content-center px-3"
  }, __jsx("div", {
    className: "col-lg-10 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "No. of VMs"), __jsx(react_["Slider"], {
    color: "primary",
    my: "24px",
    max: 20,
    defaultValue: 1,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value
  }))), __jsx("div", {
    className: "col-lg-5 mt-2 mb-4"
  }, __jsx("div", {
    className: "h6"
  }, "VEEAMs"), __jsx(react_["NumberInput"], {
    onChange: value => setVeeam(value),
    defaultValue: 0,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-5 mt-2 mb-4"
  }, __jsx("div", {
    className: "h6"
  }, "Public IPs"), __jsx(react_["NumberInput"], {
    onChange: value => setIP(value),
    defaultValue: 0,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-12 d-flex justify-content-center mt-3"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "DR As A Service",
    serviceDescription: `${plan} ${verifyNotEmpty(value, "VMs")} ${verifyNotEmpty(veeam, "VEEAM")} ${verifyNotEmpty(IP, "Public IPs")} `,
    button: true
  })))))));
}

/* harmony default export */ var pricing_DRPricing = (DRPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/dr.jsx

var dr_jsx = external_react_default.a.createElement;


/* harmony default export */ var dr = __webpack_exports__["default"] = ([{
  mt: "-96px",
  mb: 0,
  py: 0,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: dr_jsx(pricing_DRPricing, null)
  }]
}, {
  gap: 10,
  py: 8,
  body: [{
    width: ["100%", "100%", "50%"],
    type: "imageGroup",
    data: {
      images: ["/assets/images/services/dr.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: "lg",
      title: "Always stay aware and prepared.",
      titleSize: 32,
      text: dr_jsx("span", null, "Disaster Recovery Management as a Service is preparing your organization for a failure or situation that you cannot predict. The circumstances may be a catastrophic failure, a natural calamity, data loss, server not functioning correctly, data centers compromised, and so on. We predict the most unlikely events that may cause data loss, data breach, and hinder an organization\u2019s functioning, finding and installing solutions.")
    }]
  }]
}, {
  title: "Assist in DR strategy, evaluate threat models and much more...",
  titleStyle: {
    mt: 8
  },
  my: 0,
  py: 16,
  bg: "light.400",
  color: "dark.500",
  rowDistance: 8,
  gap: 8,
  body: [{
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/weather/cloudy.svg",
      mt: 4,
      title: "Multisite or Multi-Cloud"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/tools/swiss-knife.svg",
      mt: 4,
      title: "Robust"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/display-1.svg",
      mt: 4,
      title: "Regular Monitoring"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/navigation/check.svg",
      mt: 4,
      title: "Quality Ensured"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/size.svg",
      mt: 4,
      title: "Scalable"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/key.svg",
      mt: 4,
      title: "Reliable"
    }
  }, {
    width: ["50%", "33.33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/time-schedule.svg",
      mt: 4,
      title: "Low Redundant Time"
    }
  }]
}, {
  title: "Why BG Unified Solutions?",
  py: 12,
  body: [{
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/deploy.svg",
      title: "Simplified Deployment",
      flexDirection: ["column", "column", "row"],
      description: "An additional redundancy option is possible by implementing a CUBE at the client site so that in the event of any catastrophic failure in our data center, SRST will still provide basic inbound and outbound calling facilities."
    }
  }, {
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/Completeness_CloudLogging.svg",
      title: "Non - Disruptive Testing",
      flexDirection: ["column", "column", "row-reverse"],
      description: "We’ve got it covered under all circumstances, whether natural calamities, forecasted events, confound events. The time taken to restore normal conditions becomes significantly less, thanks to our team of experts, who take precautionary measures from the starting."
    }
  }, {
    type: "image&text",
    data: {
      image: "/assets/images/illustrations/ClientSpecific_AppDev.svg",
      title: "Flexible Solutions",
      flexDirection: ["column", "column", "row"],
      description: "In-place upgrades reduce downtime and maximize operational efficiencies. And you can customize how you intercept, inspect, transform, and direct inbound or outbound application traffic with powerful, flexible Rules."
    }
  }]
}]);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nghD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Toast(props) {
  const toast = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useToast"])();

  if (props.response == "TypeError: Failed to fetch" || props.response.status != 200) {
    var status = "error";
    var description = "Error encountered";
  } else {
    status = "success";
    description = "Response recorded";
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, toast({
    title: "Submission Status",
    description: description,
    status: status,
    duration: 2400,
    delay: 400,
    isClosable: true,
    position: "bottom-left"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (Toast);

/***/ }),

/***/ "nk7+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/VdiPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    fontSize: ["13px", "14px", "16px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function VdiPricing(props) {
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [plan, setPlan] = external_react_default.a.useState("");
  const [tab, setTab] = external_react_default.a.useState("Dedicated VDI");
  const [os, setOS] = external_react_default.a.useState(`,Windows 10`);
  const [goldenImage, setGoldenImage] = external_react_default.a.useState(false);

  const handleGoldenImage = goldenImage => goldenImage ? ",Include Golden Image Creation" : "";

  const [value, setValue] = external_react_default.a.useState(1);

  const handleChange = value => setValue(value);

  const resetOnCardChange = () => {
    setGoldenImage(false);
    setOS(`,Windows 10`);
    setValue(1);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(react_["Tabs"], {
    align: "center"
  }, __jsx(react_["TabList"], null, __jsx(react_["Tab"], {
    onClick: () => {
      setTab('Dedicated VDI');
      setShow(false);
      resetOnCardChange();
    },
    className: "py-4 px-5 display6 "
  }, "Dedicated VDI"), __jsx(react_["Tab"], {
    onClick: () => {
      setTab('RDS');
      setShow(false);
      resetOnCardChange();
    },
    className: "py-4 px-5 display6"
  }, "RDS")), __jsx(react_["TabPanels"], null, __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters px-lg-5 px-3"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Standard",
    icon: "/assets/images/icons/theme/paper-plane.svg",
    featureList: ["Include 2vCPU", "Includes 4 GB RAM", "Include 80 GB Storage"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Standard");
      resetOnCardChange();
    }
  }, "View More"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Professional",
    popular: true,
    icon: "/assets/images/icons/theme/airplane.svg",
    featureList: ["Include 4vCPU", "Includes 6 GB RAM", "Include 80 GB Storage"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Professional");
      resetOnCardChange();
    }
  }, "View More"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Business",
    icon: "/assets/images/icons/theme/rocket.svg",
    featureList: ["Include 6vCPU", "Includes 8 GB RAM", "Include 80 GB Storage"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Business");
      resetOnCardChange();
    }
  }, "View More")))))), __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters px-lg-5 px-3"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Professional",
    icon: "/assets/images/icons/theme/paper-plane.svg",
    featureList: ["Include 8vCPU", "Includes 16 GB RAM", "Include 500 GB Storage"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Professional");
      resetOnCardChange();
    }
  }, "View More"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Business",
    popular: true,
    icon: "/assets/images/icons/theme/airplane.svg",
    featureList: ["Include 16vCPU", "Includes 32 GB RAM", "Include 1TB Storage"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Business");
      resetOnCardChange();
    }
  }, "View More"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Enterprise",
    icon: "/assets/images/icons/theme/rocket.svg",
    featureList: ["Include 32vCPU", "Includes 64 GB RAM", "Include 2TB Storage"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Enterprise");
      resetOnCardChange();
    }
  }, "View More")))))))), __jsx("div", null, __jsx("div", {
    id: "collapse-1"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, tab, " / ", plan, " Plan"), __jsx("div", {
    className: "row px-3"
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1 my-lg-4 my-3"
  }, __jsx("div", {
    className: "h6"
  }, "Choose an OS"), __jsx(RadioGroup["a" /* default */], {
    setValue: setOS,
    options: ["WIndows 10", "Windows 2016 Standard"]
  })), __jsx("div", {
    className: "col-lg-10 offset-lg-1 my-lg-4 my-3"
  }, __jsx("div", {
    className: "h6 mb-3"
  }, "Shared Storage"), __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 1,
    min: 1,
    max: 100,
    value: value,
    onChange: handleChange
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value + "TB"
  }))), __jsx("div", {
    className: "col-lg-10 offset-lg-1 d-flex align-items-center my-lg-4 my-3"
  }, __jsx(react_["Switch"], {
    isChecked: goldenImage,
    onChange: e => {
      setGoldenImage(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "golden-image-creation"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "golden-image-creation"
  }, "Include Golden Image Creation")), __jsx("div", {
    className: "col-lg-10 offset-lg-1 text-center mt-lg-4 mt-3"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Workstation As A Service",
    serviceDescription: `${tab} ,${plan} ,${os} ${handleGoldenImage(goldenImage)} ,${value + "TB Shared Storage"}`,
    button: true
  }))))))));
}

/* harmony default export */ var pricing_VdiPricing = (VdiPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/workstation.jsx

var workstation_jsx = external_react_default.a.createElement;

/* harmony default export */ var workstation = __webpack_exports__["default"] = ([{
  title: "Workstation for your Business",
  description: workstation_jsx("span", null, "Virtual Desktop Infrastructure is when we serve virtual desktops through on-site technology solutions. IT administrators maintain a hardware stack and are usually located on-site. This is mainly the traditional approach to how virtual desktops are deployed. This allows IT resources to be reallocated for managing virtual desktops, clients, and applications."),
  gap: 10,
  py: [8, 16],
  body: [{
    width: "100%",
    type: "pricing",
    data: workstation_jsx(pricing_VdiPricing, null)
  }]
}, {
  title: "BG Unified Solution’s Workstations",
  description: "This is an ideal solution for highly sensitive computing environments with full control over hardware, software, and data. This greater degree of control also lends itself well to customization.",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/lock-circle.svg",
      mt: 4,
      title: "Secure"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/compiling.svg",
      mt: 4,
      title: "Virtualized"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/dollar.svg",
      mt: 4,
      title: "Pay per Use"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/display-2.svg",
      mt: 4,
      title: "Platform Independent"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/line.svg",
      mt: 4,
      title: "Flexible"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/size.svg",
      mt: 4,
      title: "Scalable"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/chair-1.svg",
      mt: 4,
      title: "Easy Deployment"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: workstation_jsx("span", null, "By BG Unified Solutions\u2019 Workstation As A Service, we give an organization the freedom to deploy virtual desktops from its own on-premises data centers. In-house IT teams are responsible for deploying virtual desktops and purchasing, managing, and upgrading the infrastructure."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}, {
  py: 5,
  body: [{
    width: ["100%"],
    px: [6, 8, "20%"],
    type: "feature2",
    data: {
      align: "left",
      titleFontSize: ["18px", "18px", "20px", "24px"],
      textSize: ["14px", "14px", "16px"],
      size: "96px",
      imageWidth: "128px",
      image: "/assets/images/icons/color/agile.svg",
      maxH: 200,
      spacing: 12,
      title: "Flexible migration to the cloud for Remote Desktop Services",
      description: "Optimize your experience with affordable costs for your server desktop and apps. Get all the resources, tools, and infrastructure; you need to migrate your apps."
    }
  }, {
    width: ["100%"],
    px: [6, 8, "20%"],
    type: "feature2",
    data: {
      align: "left",
      titleFontSize: ["18px", "18px", "20px", "24px"],
      textSize: ["14px", "14px", "16px"],
      size: "96px",
      imageWidth: "128px",
      image: "/assets/images/icons/color/user-engagement.svg",
      maxH: 200,
      spacing: 12,
      title: "Estimate end-user experience quality",
      description: "Estimator used to experience or predict your end-user experience’s quality by the Virtual Desktop Infrastructure Service provided by you. Determine your bandwidth requirement and constant health checker."
    }
  }, {
    width: ["100%"],
    px: [6, 8, "20%"],
    type: "feature2",
    data: {
      align: "left",
      titleFontSize: ["18px", "18px", "20px", "24px"],
      textSize: ["14px", "14px", "16px"],
      size: "96px",
      imageWidth: "128px",
      image: "/assets/images/icons/color/desktop.svg",
      maxH: 200,
      spacing: 12,
      title: "Virtualize both Desktops and Apps",
      description: "According to your requirements, flexibility and adaptability are needed to get your desktop infrastructure virtualized or virtualization of applications."
    }
  }]
}]);

/***/ }),

/***/ "oPr6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sdzU");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const set = ["Data Management", "Cluster Management", "File Transfer Management", "Configuration and Change Management", "Asset and Inventory Management", "Backup and Archiving", "Batch Processing", "Disaster Recovery", "Security Management", "Storage Management", "Performance Testing", "Web Systems Management"];

const OperationSet = props => __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
  justify: "center",
  wrap: "wrap",
  width: "100%"
}, set.map((feature, index) => __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  key: index,
  px: 1,
  my: 1,
  width: ["100%", 6 / 12, 4 / 12]
}, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  className: "hover-effect",
  textAlign: "center",
  bg: "white",
  boxShadow: "xl",
  rounded: 8,
  p: 4
}, __jsx("b", null, feature)))));

/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/illustrations/data_center.svg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "What is Server Infrastructure?",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", null, "The server infrastructure of an association can be recognized as the foundation that holds the system together. It includes physical and virtual resources, including a comprehensive set of hardware, software, network resources, and services. These resources can help in supporting the storage, flow, processing, and data analysis.")
    }]
  }]
}, {
  title: "Why BGUS as your Server Infrastructure provider?",
  description: "BG Unified Solutions provide a complete set of operations through its Server Infrastructure.",
  rowDistance: 8,
  my: 0,
  pt: 5,
  pb: 10,
  gap: 10,
  body: [{
    type: "pricing",
    data: __jsx(OperationSet, null)
  }]
}, {
  title: "OUR TRUSTED SYSTEM INFRASTRUCTURE SUPPORTED VENDORS",
  my: 0,
  py: 16,
  titleStyle: {
    fontSize: "2xl",
    opacity: .7
  },
  rowDistance: 8,
  body: [{
    width: "100%",
    type: "imageGroup",
    data: {
      images: ["/assets/images/brands/cisco-1.png", "/assets/images/brands/huawei-1.png", "/assets/images/brands/nutanix.png", "/assets/images/brands/hp.png", "/assets/images/brands/dell.png"],
      height: "128px",
      mx: "32px",
      width: "160px",
      objectFit: "contain"
    }
  }]
}]);

/***/ }),

/***/ "pErt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const keys = {
  ContactUs: "x4v24007l0UuqqFXOYV8_",
  GetaQuote: "HwvQq44klK7IYDZpWh-Ck",
  Feedback: "OZkDMO1c8Plmf-19ixTIf",
  ErrorReport: "H1Fa61Wr1GzrKiD8vFFOA"
};
/* unused harmony default export */ var _unused_webpack_default_export = (keys);

/***/ }),

/***/ "qKqI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/TpaasPricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

function TpaasPricing(props) {
  const [units1, setUnits1] = external_react_default.a.useState(0);
  const [units2, setUnits2] = external_react_default.a.useState(0);
  const [units3, setUnits3] = external_react_default.a.useState(0);
  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx(react_["Tabs"], {
    align: "center"
  }, __jsx(react_["TabList"], null, __jsx(react_["Tab"], {
    pointerEvents: "none",
    style: {
      cursor: "default"
    },
    className: "py-4 px-5 display6"
  }, "Cisco Telepresence")), __jsx(react_["TabPanels"], null, __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    featureList: ["Cisco DX 70", " Cisco DX 80", "5 B2B Calls", "5 units ", "H323/SIP", "VCS Expressway - E & C included", "10 Concurrent SIP calls"],
    icon: "/assets/images/icons/theme/origami.svg",
    title: "Standard"
  }, __jsx("div", {
    className: "w-100 px-3 text-center mb-2 NunitoSans-Bold"
  }, __jsx(react_["Divider"], {
    mt: 0,
    mb: 4
  })), __jsx(react_["Flex"], {
    mb: 6,
    direction: "column",
    alignItems: "center"
  }, __jsx(react_["Box"], {
    className: "h6"
  }, "Additional Units"), __jsx(react_["NumberInput"], {
    min: 0,
    max: 50,
    value: units1,
    onChange: value => {
      value <= 50 ? setUnits1(value) : setUnits1(50);
    }
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "d-flex btn align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "Telepresence As A Service",
    serviceDescription: `Cisco Telepresence, Standard ${verifyNotEmpty(units1, "Additional Units")}`
  })))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    featureList: ["Cisco MX 200", "Cisco MX 300", "10 B2B calls", "5 units +", "H323/SIP", "VCS Expressway - E & C included", "20 Concurrent SIP calls"],
    icon: "/assets/images/icons/theme/paper-plane.svg",
    title: "Professional"
  }, __jsx("div", {
    className: "w-100 px-3 text-center mb-2 NunitoSans-Bold"
  }, __jsx(react_["Divider"], {
    mt: 0,
    mb: 4
  })), __jsx(react_["Flex"], {
    mb: 6,
    direction: "column",
    alignItems: "center"
  }, __jsx(react_["Box"], {
    className: "h6"
  }, "Additional Units"), __jsx(react_["NumberInput"], {
    min: 0,
    max: 50,
    value: units2,
    onChange: value => {
      value <= 50 ? setUnits2(value) : setUnits2(50);
    }
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "d-flex btn align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "Telepresence As A Service",
    serviceDescription: `Cisco Telepresence, Professional ${verifyNotEmpty(units2, "Additional Units")}`
  })))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    featureList: ["Cisco SX", "Cisco SX Codec", "20 B2B Calls", "5 units +", "H323/SIP", "VCS Expressway - E & C included", "50 Concurrent SIP calls"],
    icon: "/assets/images/icons/theme/airplane.svg",
    title: "Business"
  }, __jsx("div", {
    className: "w-100 px-3 text-center mb-2 NunitoSans-Bold"
  }, __jsx(react_["Divider"], {
    mt: 0,
    mb: 4
  })), __jsx(react_["Flex"], {
    mb: 6,
    direction: "column",
    alignItems: "center"
  }, __jsx(react_["Box"], {
    className: "h6"
  }, "Additional Units"), __jsx(react_["NumberInput"], {
    min: 0,
    max: 50,
    value: units3,
    onChange: value => {
      value <= 50 ? setUnits3(value) : setUnits3(50);
    }
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "d-flex btn align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    button: true,
    serviceName: "Telepresence As A Service",
    serviceDescription: `Cisco Telepresence, Business ${verifyNotEmpty(units3, "Additional Units")}`
  }))))))))))));
}

/* harmony default export */ var pricing_TpaasPricing = (TpaasPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/tpaas.jsx

var tpaas_jsx = external_react_default.a.createElement;

/* harmony default export */ var tpaas = __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/sdaasBG.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Experience Telepresence Solutions like never before",
      titleSize: [28, 28, 28, 32],
      text: tpaas_jsx("span", null, "BGUS' TelePresence Services provide comprehensive service offerings to help enterprises prepare, plan, and design their networks. These services combine extensive engineering expertise in converged networks, proven networking methodologies and tools, and support to help enterprises realize the full benefits of the solution.")
    }]
  }]
}, {
  py: [0, 4],
  gap: 0,
  mt: 0,
  mb: 0,
  bg: "light.400",
  body: [{
    width: "100%",
    type: "pricing",
    data: tpaas_jsx(pricing_TpaasPricing, null)
  }]
}, {
  title: "Fully Managed Video Conferencing Solutions by BGUS",
  description: "Realize the full business value of your technology investments with smart, personalized services from BGUS and our partners. Backed by deep networking expertise and a broad ecosystem of partners, BGUS Services enable you to successfully plan, build, and run your network as a powerful business platform",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/chart-line-1.svg",
      mt: 4,
      title: "Improved Business Agility"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/line.svg",
      mt: 4,
      title: "Flexibility Assured"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/group.svg",
      mt: 4,
      title: "In-Person Experience"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/headphones.svg",
      mt: 4,
      title: "Personalized Support"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/clock.svg",
      mt: 4,
      title: "Optimized Results"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/size.svg",
      mt: 4,
      title: "Scalability Guaranteed"
    }
  }, {
    width: ["50%", "33%", "25%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/chair-1.svg",
      mt: 4,
      title: "Easy Deployment"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: tpaas_jsx("span", null, "Whether you are looking to quickly seize new opportunities to meet rising customer expectations, improve operational efficiency to lower costs, mitigate risk, or accelerate growth, we have a service that can help you."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}]);

/***/ }),

/***/ "r/2C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PricingCard; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ PricingQuote; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: ./src/apiKeys.js
var apiKeys = __webpack_require__("pErt");

// EXTERNAL MODULE: ./src/components/Toast/main.jsx
var main = __webpack_require__("nghD");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/pageBuilder/Description.jsx
var Description = __webpack_require__("kUGF");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/GetaQuote/main.jsx
var __jsx = external_react_default.a.createElement;








function GetaQuoteForm(props) {
  const {
    isOpen,
    onOpen,
    onClose
  } = Object(react_["useDisclosure"])();
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(external_react_["useState"])('');
  const {
    0: screenWidth,
    1: setScreenWidth
  } = Object(external_react_["useState"])(1000);
  let form = {
    name: name,
    email: email,
    description: message,
    contactNumber: phone,
    serviceName: props.serviceName,
    serviceString: props.serviceDescription
  };
  const {
    0: isLoading,
    1: loadingState
  } = Object(external_react_["useState"])(false);
  const {
    0: formResponse,
    1: setResponse
  } = Object(external_react_["useState"])('');

  const onChange = event => {
    const target = event.target;
    const fieldname = target.name;
    const value = target.value;

    switch (fieldname) {
      case 'name':
        setName(value);
        break;

      case 'message':
        setMessage(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const refreshForm = res => {
    loadingState(false);
    console.log(res);
    setResponse(res);
    setResponse('');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');

    if (res.status == 200) {
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  const formClose = () => {
    setResponse('');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    onClose();
  };

  const onSubmit = event => {
    event.preventDefault();
    loadingState(true);
    external_axios_default.a.post('/api/service/submit', form).then(response => refreshForm(response), error => refreshForm(error));
  };

  var description = props.serviceDescription.split(',');

  const updateWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  external_react_default.a.useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return __jsx(external_react_default.a.Fragment, null, !props.button && __jsx("div", {
    className: "mt-3 w-100 px-3 d-flex justify-content-between"
  }, props.title && __jsx("p", null, props.title), __jsx("a", {
    className: "link",
    onClick: onOpen
  }, "Get a quote")), props.button && __jsx(react_["Button"], {
    size: "lg",
    className: props.buttonStyle,
    variant: "outline",
    colorScheme: "primary",
    onClick: onOpen
  }, props.children || "Get a Quote"), __jsx(react_["Modal"], {
    isOpen: isOpen,
    onClose: formClose,
    isCentered: screenWidth > 420 ? true : false,
    scrollBehavior: screenWidth > 420 ? "inside" : "outside"
  }, __jsx(react_["ModalOverlay"], null), __jsx(react_["ModalContent"], {
    maxWidth: ["400px", "400px", "600px"],
    maxHeight: screenWidth > 420 ? "800px" : "",
    minHeight: screenWidth > 420 ? "" : "100vh",
    mb: screenWidth <= 420 ? 0 : "",
    mt: screenWidth <= 420 ? 0 : ""
  }, __jsx(react_["ModalBody"], null, __jsx(react_["ModalHeader"], {
    style: {
      zIndex: "3",
      position: "sticky",
      top: 0,
      backgroundColor: "white"
    }
  }, " ", __jsx(react_["Button"], {
    verticalAlign: "middle",
    leftIcon: __jsx(fa_["FaArrowLeft"], null),
    color: "primary.500",
    variant: "link",
    onClick: formClose
  }), __jsx("span", {
    className: "display5"
  }, props.serviceName)), __jsx("div", {
    className: "d-flex flex-wrap px-3"
  }, description.map((service, index) => {
    return __jsx("div", {
      className: "rounded-8 hover-effect bg-light m-2 py-2 px-3",
      key: index
    }, service);
  })), __jsx(react_["Box"], {
    mb: 4,
    className: "container contact-form"
  }, __jsx(react_["Popover"], {
    trigger: "hover"
  }, __jsx(react_["PopoverTrigger"], null, __jsx(react_["Button"], {
    variant: "link",
    colorScheme: "primary",
    mb: 6,
    mt: 2
  }, "Whats this?")), __jsx(react_["PopoverContent"], {
    zIndex: 4
  }, __jsx(react_["PopoverBody"], null, "We're working on automating our sign-up process to make it easier for you to buy and use our services. In the meantime, please fill out and submit the form. We will have one of our qualified account managers contact you about system availability for the configuration you desire. We look forward to speaking with you."))), __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("input", {
    type: "hidden",
    name: "_redirect",
    value: "false"
  }), __jsx("input", {
    type: "hidden",
    name: "serviceName",
    value: form.serviceName
  }), __jsx("input", {
    type: "hidden",
    name: "serviceDescription",
    value: form.serviceString
  }), __jsx(react_["FormControl"], {
    isRequired: true
  }, __jsx(react_["FormLabel"], {
    htmlFor: "name"
  }, "Name:"), __jsx(react_["Input"], {
    variant: "flushed",
    type: "text",
    name: "name",
    value: form.name,
    onChange: onChange
  })), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_["FormControl"], {
    mt: "14%",
    isRequired: true
  }, __jsx(react_["FormLabel"], {
    htmlFor: "email"
  }, "Email:"), __jsx(react_["Input"], {
    variant: "flushed",
    type: "email",
    name: "email",
    value: form.email,
    onChange: onChange
  }))), __jsx("div", {
    className: "col-md-6"
  }, __jsx(react_["FormControl"], {
    mt: "14%",
    isRequired: true
  }, __jsx(react_["FormLabel"], {
    htmlFor: "phone"
  }, "Contact No."), __jsx(react_["Input"], {
    type: "tel",
    pattern: "[0-9]{10}",
    variant: "flushed",
    name: "phone",
    value: form.contactNumber,
    onChange: onChange
  })))), __jsx(react_["FormControl"], {
    mt: "9%",
    isRequired: true
  }, __jsx(react_["FormLabel"], null, "Details:"), __jsx(react_["Textarea"], {
    resize: "vertical",
    variant: "flushed",
    size: "lg",
    name: "message",
    value: form.description,
    onChange: onChange
  })), __jsx("div", null, __jsx(react_["Button"], {
    mt: 10,
    type: "submit",
    size: "lg",
    colorScheme: "primary",
    className: "primary-btn"
  }, "Submit", isLoading && __jsx(react_["Spinner"], {
    thickness: "4px",
    speed: "1s",
    emptyColor: "gray.200",
    color: "blue.500",
    size: "sm"
  }))))), formResponse && __jsx(main["a" /* default */], {
    response: formResponse
  })))));
}

/* harmony default export */ var GetaQuote_main = (GetaQuoteForm);
// CONCATENATED MODULE: ./src/components/cards/PricingCard.jsx
var PricingCard_jsx = external_react_default.a.createElement;




function PricingQuote(props) {
  return PricingCard_jsx(GetaQuote_main, {
    serviceName: props.serviceName,
    serviceDescription: props.serviceDescription,
    button: props.button,
    buttonStyle: props.buttonStyle,
    title: props.title
  }, props.children);
}

function PricingCard(props) {
  return PricingCard_jsx(react_["Box"], {
    pt: "32px",
    height: "100%"
  }, PricingCard_jsx(react_["Box"], {
    bg: "white",
    h: "100%",
    mx: 1,
    borderColor: props.popular ? "red.500" : "black.200",
    boxShadow: props.popular && "xl",
    borderWidth: 1
  }, PricingCard_jsx(react_["Flex"], {
    align: "center",
    direction: "column",
    justify: "center",
    bg: props.popular ? "primary.500" : "white",
    p: 8,
    mt: "-32px",
    mx: "32px",
    boxShadow: "lg"
  }, PricingCard_jsx(react_["Image"], {
    alt: "",
    style: {
      filter: props.popular && "brightness(8) saturate(0)"
    },
    src: props.icon,
    padding: "8px",
    height: "64px"
  }), PricingCard_jsx(react_["Heading"], {
    color: props.popular && "white",
    size: "md",
    mt: 4
  }, props.title)), props.featureList && PricingCard_jsx("div", null, PricingCard_jsx(react_["List"], {
    p: 8,
    spacing: 3
  }, props.featureList.map((feature, index) => {
    return PricingCard_jsx(react_["ListItem"], {
      key: index
    }, PricingCard_jsx(react_["ListIcon"], {
      icon: "check",
      color: "green.500"
    }), feature);
  }), props.excludingList && props.excludingList.map((feature, index) => {
    return PricingCard_jsx(react_["ListItem"], {
      key: index
    }, PricingCard_jsx(react_["ListIcon"], {
      p: "2px",
      icon: "close",
      color: "Red"
    }), feature);
  }))), PricingCard_jsx(react_["Box"], {
    px: 8,
    pb: 8,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }, props.children)));
}



/***/ }),

/***/ "sNPH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  typeWriter_title: {
    before: "",
    typed: ["Integration", "Interaction", "Innovation"],
    after: "achieved with Kubernetes."
  },
  description: "Groups containers, making up an application into logical units for easy management and discovery. Kubernetes builds upon years of experience running production workloads, combined with best-of-breed ideas and community practices. Positioned VMs to deliver the most comprehensive, enterprise-grade Kubernetes-based portfolio for modern applications.",
  descriptionStyle: {
    textAlign: "left"
  },
  body: [{
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/cluster-computing.svg",
      title: "Clustering",
      align: "left",
      description: "Troubleshooting the container applications outside Kubernetes clusters (ports, node ports, service ports, external load balancers). Managing and creating POC."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/multiple.svg",
      title: "Application Multiplicity",
      align: "left",
      description: "Troubleshooting creates a private /global registry and deploys stateful and stateless applications in Kubernetes containers like Jupyter notebook, Drupal, etc. "
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/package.svg",
      title: "Container Management",
      align: "left",
      description: "Managing containers using different container tools like dockers, cri-o other than orchestrating containers with Kubernetes. Troubleshooting the container applications."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/learn.svg",
      title: "Skilled Experts",
      align: "left",
      description: "Sufficient knowledge and troubleshooting skills in using different API-plugins used by users or developers. We are managing services in Kubernetes by using operators."
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/secure.svg",
      title: "Completely Secure",
      align: "left",
      description: "Adding users and setting permission for application users inside containers using Pod security standards. Managing TLS and CA certificate for Kubernetes. "
    }
  }, {
    py: 4,
    width: ["95%", "50%", "33.33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/fix.svg",
      title: "On-Demand Hardware",
      align: "left",
      description: "Get the required CPU and VM's along with different flavors of Linux like Redhat, CentOS, Ubuntu, and installing and configuring Kubernetes."
    }
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 6, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "Comprehensive Kubernetes Administrator",
      textAlign: "justify",
      fontSize: ["lg", "xl"],
      titleSize: [40, 40, 48],
      my: [2, 4, 8],
      text: "We help customers go serverless and operating code in a more granular, scalable, and cost-effective way. We are managing containers using different container tools like dockers,cri-o, and managing cluster applications and configuring CNI."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/size.svg",
        mt: 4,
        title: "Scalable Service"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/сommode-1.svg",
        mt: 4,
        title: "Persistent Storage"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/shopping/box-3.svg",
        mt: 4,
        title: "Containerized"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/map/marker-1.svg",
        mt: 4,
        title: "Remote Access"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/usb-storage.svg",
        mt: 4,
        title: "Micromanaged"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/router-1.svg",
        mt: 4,
        title: "Traffic Routing"
      }
    }]
  }]
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Rigorous Troubleshooting",
        description: "Troubleshooting the container applications outside Kubernetes clusters ( ports, node ports, service ports, external load balancers). Troubleshooting and managing high computing storage, persistent / non-persistent volume, volume claims, and volume claim policies related to Kubernetes. Troubleshooting skills on using different API-plugins used by users or developers.",
        image: "/assets/images/illustrations/deploy.svg"
      }, {
        title: "Efficient Resources",
        description: "Kubernetes knows the compute, memory, and storage resources each application needs and schedules instances across the cluster to maximize resource efficiency. Rapid development and iteration with the ease of application deployment and apps and service management.",
        image: "/assets/images/illustrations/Completeness_CloudLogging.svg"
      }, {
        title: "Scalability",
        description: "Adding users and setting permission for application users inside containers using Pod security standards (like security contexts). Customizable and requirement based VMs and CPUs. Add on-demand instances to your application to meet the predictive and desired outcomes.",
        image: "/assets/images/illustrations/ClientSpecific_AppDev.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "sTXT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", "50%"],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/illustrations/network.svg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "contain"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "What is Network Infrastructure?",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", null, "Network infrastructure relates to all network resources that make network or internet connectivity, management, business operations, and communication possible. Anything incorporated in the network, from servers to wireless routers, comes together to make up a system\u2019s network infrastructure. Network infrastructure allows for efficient communication and services between applications, users, devices, services.")
    }]
  }]
}, {
  title: "Why BGUS as your Network Infrastructure provider?",
  description: "In this digital generation, an organization’s dexterity and potency depend on more than plainly superior tools and hardworking craftsmen. Administering a smooth transaction also demands a robust, reliable, and secure network infrastructure.",
  rowDistance: 8,
  my: 0,
  pt: 5,
  pb: 10,
  gap: 10,
  body: [{
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/desktop.svg",
      title: "Device Monitoring",
      align: "left",
      description: "Monitor your devices to identify potential issues and system bottlenecks proactively."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/lock.svg",
      title: "Network Security",
      align: "left",
      description: "Network Security is ensured by using several different cybersecurity tools and providers."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/stack.svg",
      title: "Documentation",
      align: "left",
      description: "Complete list of instruments included from routers, switches, and wireless devices, etc."
    }
  }]
}, {
  title: "OUR TRUSTED NETWORK INFRASTRUCTURE SUPPORTED VENDORS",
  my: 0,
  py: 16,
  titleStyle: {
    fontSize: "2xl",
    opacity: .7
  },
  rowDistance: 8,
  body: [{
    width: "100%",
    type: "imageGroup",
    data: {
      images: ["/assets/images/brands/cisco-1.png", "/assets/images/brands/huawei-1.png", "/assets/images/brands/radware.png", "/assets/images/brands/fortinet.png", "/assets/images/brands/paloalto.png", "/assets/images/brands/f5.png", "/assets/images/brands/hp.png", "/assets/images/brands/juniper.png"],
      height: "128px",
      mx: "32px",
      width: "160px",
      objectFit: "contain"
    }
  }]
}]);

/***/ }),

/***/ "sdzU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("iMpC");
/* harmony import */ var _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0__);

const services = {
  "appdev": {
    title: "Application Development As A Service",
    slogan: "Developing Your Needs",
    bgImage: "/assets/images/services/appdev.jpg",
    category: "Professional Services",
    icon: "/assets/images/icons/monotone/AppDev.svg",
    color: "#ED1C24",
    tags: ["application", "app", "dev", "development", "scalability", "platform", "independence", "client", "flexibility"],
    description: "BG Unified Solutions provides services in the area of Web, Mobile, and Enterprise Application Development. Our team....",
    illustration: "",
    relatedService: ["Web Development As A Service", "Contact Center As A Service", "Architectural Consultancy As A Service"],
    conclusion: "User-interactivity, responsiveness, user-friendly interfaces kept into consideration.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.appdev
  },
  "architectural-consultancy": {
    title: "Architectural Consultancy As A Service",
    slogan: "Spirit of Expertise",
    bgImage: "/assets/images/services/arch.jpg",
    category: "Professional Services",
    icon: "/assets/images/icons/monotone/architectural.svg",
    color: "#235789",
    tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
    description: "BG Unified Solutions has a team of practicing multi-disciplinary architects to baseline current architecture and its.... ",
    illustration: "",
    relatedService: ["Contact Center As A Service", "Application Development As A Service", "Service Desk As A Service"],
    conclusion: "Achieve Higher Business Efficiency through increased agility, cost containment, and lowered risk.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.architecture
  },
  "backup": {
    title: "Backup As A Service",
    slogan: "Backup for your Digital System",
    category: "IT Infrastructural Services",
    bgImage: "/assets/images/services/backup.jpg",
    icon: "/assets/images/icons/monotone/BackupAsAService.svg",
    color: "#0267C1",
    tags: ["backup"],
    description: "BG Unified Solutions provides reliable, secure & cost-effective managed service for backup and recovery of all types of data....",
    illustration: "",
    relatedService: ["Database As A Service", "Storage As A Service", "DR As A Service"],
    conclusion: "Customizable Data Protection for your Business",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.backup,
    image_below_title: '/assets/images/brands/pb_seagate.svg'
  },
  "kubernetes": {
    title: "Kubernetes Administrator As A Service",
    slogan: "Empowered by Automation",
    category: "Collaborative Services",
    bgImage: "/assets/images/services/kubernetesBG.jpg",
    icon: "/assets/images/icons/monotone/kubernetes.svg",
    color: "#326ce5",
    tags: ["backup"],
    description: "BG Unified Solutions provides reliable, secure & cost-effective managed service for Kubernetes Administrator....",
    illustration: "",
    relatedService: ["Contact Center As A Service", "Service Desk As A Service", "Architectural Consultancy As A Service"],
    conclusion: "Get Persistent Storage with Highly available features.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.kubernetes
  },
  "cex": {
    title: "CEX As A Service",
    slogan: "The Cloud Service at its Best",
    bgImage: "/assets/images/services/cex.jpg",
    category: "Network Services",
    icon: "/assets/images/icons/monotone/CEX.svg",
    color: "#F1D302",
    tags: ["cloud exchange connectivity", "exchange", "connectivity", "express routes", "office 365", "AWS", "azure"],
    description: "Express Routes to office 365, AWS, Azure. Advanced Solution provides private, seamless, and on-demand connections....",
    illustration: "",
    relatedService: ["Logging Cloud Connect", "Proxy As A Service", "SIP As A Service"],
    conclusion: "Proactively manages your service components to adhere to quality standards",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.cex
  },
  "logging": {
    title: "Logging Cloud Connect",
    slogan: "Cloud Computing is the new future",
    bgImage: "/assets/images/services/logging.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/CloudLogging.svg",
    color: "#020100",
    tags: ["cloud", "logging", "log", "threats", "log management", "troubleshooting"],
    description: "Log central services over the internet. Collect, Store, and report the various data and underlying threats....",
    illustration: "",
    relatedService: ["Platform As A Service", "Backup As A Service", "CEX As A Service"],
    conclusion: "Add the shield to protect your business reputation",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.logging
  },
  "contact-center": {
    title: "Contact Center As A Service",
    slogan: "Service Truly Different.",
    bgImage: "/assets/images/services/support.jpg",
    category: "Collaborative Services",
    icon: "/assets/images/icons/monotone/ContactCenterAsAService.svg",
    color: "#6A041D",
    tags: ["customer", "Support", "CSaaS", "Customer Experience", "Productivity", "Securing", "Data"],
    description: "BG Unified Solution’s CCaaS helps you provide a positive customer experience through a suite of advanced contact center tools....",
    illustration: "",
    relatedService: ["Architectural Consultancy As A Service", "Application Development As A Service", "Service Desk As A Service"],
    conclusion: "We help organizations who are looking for an IT Partner known for quality and consistency of service.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.callcenter
  },
  "dbaas": {
    title: "Database As A Service",
    slogan: "Professional Remote Database Solutions",
    bgImage: "/assets/images/services/database.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/dbaas.svg",
    color: "#E4572E",
    tags: ["wireless", "wifi", "clusters", "networks"],
    description: " It’s easy to deploy and available at a single license, giving you simplified configuration, bot management, and holistic visibility....",
    illustration: "",
    relatedService: ["Backup As A Service", "Storage As A Service", "DR As A Service"],
    conclusion: "Professional, Flexible and Reliable Database Services for your Business.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.dbaas,
    popular: true
  },
  "dns": {
    title: "DNS As A Service",
    slogan: "For a stronger Web Identity",
    category: "Network Services",
    bgImage: "/assets/images/services/dns.jpg",
    icon: "/assets/images/icons/monotone/DNSasAService.svg",
    color: "#06BCC1",
    popluar: true,
    tags: ["dns", "DNS", "domain", "name", "cost", "effective", "Concurrency", "Scalability", "TLD servers"],
    description: "Deliver a scalable, reliable and managed authoritative Domain Name System (DNS) service. With assured low latency and high availability....",
    illustration: "",
    relatedService: ["Web Hosting As A Service", "Logging Cloud Connect", "Infrastructure As A Service"],
    conclusion: "Try our Concurrent DNS Service with superior IP Technology.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.dns
  },
  "dr": {
    title: "DR As A Service",
    slogan: "Tackle stagnancy better",
    bgImage: "/assets/images/services/backup.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/DRAsAService.svg",
    color: "#3B3561",
    tags: ["Disaster", "Recovery", "Management", "Deployment", "Flexible", "Non-Disruptive"],
    description: "Assist in DR strategy, evaluate threat models, select technologies, prototype multisite or multi-cloud DR strategies. Test rollback mechanisms....",
    illustration: "",
    relatedService: ["Backup As A Service", "Storage As A Service", "Infrastructure As A Service"],
    conclusion: "Recognizes, isolates notifies and corrects faults encountered in the network",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.dr
  },
  "snb": {
    title: "Smart Number Billing As A Service",
    slogan: "Communicating Effectively",
    bgImage: "/assets/images/services/sbn.jpg",
    category: "Collaborative Services",
    icon: "/assets/images/icons/library/communication/dial-numbers.svg",
    color: "#6A0136",
    tags: ["Smart Number", "Billing", "1300"],
    description: "Promoting your business by just being displayed, Smart Numbers have also proven to be more memorable. And that means more calls leading to more business.....",
    illustration: "",
    relatedService: ["Unified Communications As A Service", "Contact Center As A Service", "Service Desk As A Service"],
    conclusion: "Get ready to enjoy more new business calls, thus expanding your business exponentially!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.snb
  },
  "firewall": {
    title: "Firewall As A Service",
    slogan: "Redefining Security Needs",
    bgImage: "/assets/images/services/firewall-2.jpg",
    category: "Network Services",
    icon: "/assets/images/icons/monotone/Firewall.svg",
    color: "#6A0136",
    tags: ["Firewall", "Security", "protection"],
    description: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA....",
    illustration: "",
    relatedService: ["Proxy As A Service", "SOC As A Service", "WAF As A Service"],
    conclusion: "Multi-Layered Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.firewall
  },
  "infra": {
    title: "Infrastructure As A Service",
    slogan: "Store your data with our Security and Reliability.",
    bgImage: "/assets/images/services/infra.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/InfrastructureIcon.svg",
    color: "#51CB20",
    tags: ["computing", "infrastructure", "asset", "utilization", "server", "consolidation", "virtualization", "Geographical Redundant Storage"],
    description: "Server consolidation and virtualization, high availability & clustering, desktop virtualization, and server management....",
    illustration: "",
    relatedService: ["Storage As A Service", "Platform As A Service", "Workstation As A Service"],
    conclusion: "We can help if you have questions regarding Infrastructure As A Service",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.infra,
    popular: true
  },
  "load-balancer": {
    title: "Load Balancer As A Service",
    slogan: "Simplified Load Balancing",
    bgImage: "/assets/images/services/loadbalancer.jpg",
    category: "Network Services",
    icon: "/assets/images/icons/monotone/balancer.svg",
    color: "#235789",
    tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
    description: "Load balancing is the most scalable methodology for handling many requests from modern multi-application....",
    illustration: "",
    relatedService: ["Firewall As A Service", "DDoS Protection As A Service", "WAF As A Service"],
    conclusion: "Load Balancing is the solution you’ve been looking for.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.loadBalancer,
    popular: true
  },
  "workstation": {
    title: "Workstation As A Service",
    slogan: "Digitalize your Workspace",
    bgImage: "/assets/images/services/workstation.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/workstation.svg",
    color: "#235789",
    tags: ["architectural", "consultancy", "architects", "technology", "stack", "future-proof", "planning", "engineering"],
    description: "Virtual Desktop Infrastructure is when we serve virtual desktops through on-site technology solutions.....",
    illustration: "",
    relatedService: ["GPU As A Service", "Infrastructure As A Service", "Platform As A Service"],
    conclusion: "An ideal workstation solution for highly sensitive computing environments.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.workstation,
    popular: true
  },
  "cdr": {
    title: "CDR As A Service",
    slogan: "Where every call counts",
    bgImage: "/assets/images/services/cdr.jpg",
    category: "Collaborative Services",
    icon: "/assets/images/icons/library/communication/active-call.svg",
    color: "#235789",
    tags: ["call", "details", "records", "technology", "stack", "future-proof", "planning", "engineering", "logs"],
    description: "Call detail records serve a valuable purpose of revenue generation for telephone service providers, whenever required. CDR is also used for VOIP...",
    illustration: "",
    relatedService: ["Service Desk As A Service", "Smart Number Billing As A Service", "Unified Communications As A Service"],
    conclusion: "A CDR for a phone number gives you more of a bird's eye view!!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.cdr,
    popular: true
  },
  "platform": {
    title: "Platform As A Service",
    slogan: "Diversified Expertise",
    bgImage: "/assets/images/services/platform.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/PlatformAsAServiceIcon.svg",
    color: "#F76F8E",
    tags: ["cloud", "platform", "service", "infrastructure", "DC Interconnect"],
    description: "End-to-End DC network infrastructure encompassing server switching, storage switching, and DC Interconnect Solutions. 10G/40G core switching....",
    illustration: "",
    relatedService: ["Workstation As A Service", "Infrastructure As A Service", "GPU As A Service"],
    conclusion: "We give you the power to deploy, efficiently monitor, and scale the applications quickly.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.platform
  },
  "proxy": {
    title: "Proxy As A Service",
    slogan: "Our Proxy, Your Way!!",
    bgImage: "/assets/images/services/proxy.jpg",
    popular: true,
    category: "Cyber Security Services",
    icon: "/assets/images/icons/monotone/proxy.svg",
    color: "#451F55",
    tags: ["proxy", "servers", "low-latency", "services"],
    description: "Just redirect your traffic to our Proxy Service either by DNS or other custom solutions to our public Proxy....",
    illustration: "",
    relatedService: ["Firewall As A Service", "WAF As A Service", "SOC As A Service"],
    conclusion: "Enhanced proxy service by isolating the private network from the web",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.proxy
  },
  "sd-wan": {
    title: "SD-WAN As A Service",
    slogan: "Simple Solutions for Complex Connections!!",
    documentHeading: "Best SD-WAN Optimization",
    bgImage: "/assets/images/services/sdwan.jpg",
    category: "Network Services",
    icon: "/assets/images/icons/monotone/SD-Wan.svg",
    color: "#3B0086",
    tags: ["SD-WAN", "sd wan", "Optimization", " VMware VDI"],
    description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Cloud Exchange....",
    illustration: "",
    relatedService: ["Wireless As A Service", "DNS As A Service", "SIP As A Service"],
    conclusion: "SD-WAN transforms the way a network supports and interacts with enterprise applications.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.sdwan
  },
  "sip": {
    title: "SIP As A Service",
    slogan: "High Performance Delivered",
    bgImage: "/assets/images/services/sip.jpg",
    category: "Network Services",
    icon: "/assets/images/icons/monotone/SIP.svg",
    color: "#290628",
    tags: ["SIP", "Connectivity", "Service Infrastructure", "cisco unified"],
    description: "SIP As A Service Infrastructure includes more than 15 Cisco Unified Border Elements with 1600 SIP channels....",
    illustration: "",
    relatedService: ["SD-WAN As A Service", "DNS As A Service", "Wireless As A Service"],
    conclusion: "Our Infrastructure includes more than 15 Cisco Unified border Elements with 1600 SIP channels.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.sip
  },
  "storage": {
    title: "Storage As A Service",
    slogan: "Storage Made Simple.",
    bgImage: "/assets/images/services/storage.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/StorageAsAServiceIcon.svg",
    color: "#0091AD",
    tags: ["storage", "blocks", "consolidation", "virtualization", "backup", "recovery", "archive"],
    description: "Storage consolidation and virtualization, backup and recovery, archiving, and disaster recovery and storage management. The storage....",
    illustration: "",
    relatedService: ["Infrastructure As A Service", "Database As A Service", "Backup As A Service"],
    conclusion: "Ready to get Storage?",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.storage
  },
  "socaas": {
    title: "SOC As A Service",
    slogan: "Cyber Security Experts",
    bgImage: "/assets/images/services/soc.jpg",
    category: "Cyber Security Services",
    icon: "/assets/images/icons/monotone/security.svg",
    color: "#0091AD",
    tags: ["storage", "blocks", "consolidation", "virtualization", "backup", "recovery", "archive"],
    description: "BG Unified Solutions' Security Operations Center As A Service tends to provide you with reliable and flexible cybersecurity....",
    illustration: "",
    relatedService: ["Proxy As A Service", "Firewall As A Service", "WAF As A Service"],
    conclusion: "Win the battle against Cyber Threats with our SOCaaS",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.socaas,
    popular: true
  },
  "ucaas": {
    title: "Unified Communications As A Service",
    slogan: "Professional Communication at your fingertips",
    bgImage: "/assets/images/services/ucaas_cover.jpg",
    category: "Collaborative Services",
    icon: "/assets/images/icons/monotone/UCAsAService.svg",
    color: "#B2ABF2",
    tags: ["UCaaS", "unified", "communications", "cisco", "avaya", "unity", "collaboration", "telepresence", "workforce", "optimisation"],
    description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring....",
    illustration: "",
    relatedService: ["Contact Center As A Service", "Infrastructure As A Service", "SIP As A Service"],
    conclusion: "We tailor a solution with the best products and technologies from top firms with expert service.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.ucaas
  },
  "hosting": {
    title: "Web Hosting As A Service",
    slogan: "Trendsetting Web Hosting Solutions",
    bgImage: "/assets/images/services/webhosting.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/WebHosting.svg",
    color: "#06D6A0",
    tags: ["web", "hosting", "host", "web server", "APACHE", "website"],
    description: "Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included....",
    illustration: "",
    relatedService: ["DNS As A Service", "Logging Cloud Connect", "Backup As A Service"],
    conclusion: "Web Hosting services design and implementation in distributed environments.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.hosting
  },
  "ddos": {
    title: "DDoS Protection As A Service",
    slogan: "For your Utmost Security",
    bgImage: "/assets/images/services/ddos.jpg",
    category: "Cyber Security Services",
    icon: "/assets/images/icons/monotone/ddos.svg",
    color: "#E4572E",
    tags: ["wireless", "wifi", "clusters", "networks"],
    description: "BG Unified Soutions provides optimal DDoS protection as a  service with most accurate detection and feasible solution....",
    illustration: "",
    relatedService: ["WAF As A Service", "SOC As A Service", "Firewall As A Service"],
    conclusion: " Be DDoS protected in a rapid and reliable way.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.ddos
  },
  "wafaas": {
    title: "WAF As A Service",
    slogan: "Robust Security with a Dedicated Web App Firewall",
    bgImage: "/assets/images/services/wafaas.jpg",
    category: "Cyber Security Services",
    icon: "/assets/images/icons/monotone/app.svg",
    color: "#E4572E",
    tags: ["wireless", "wifi", "clusters", "networks"],
    description: " Protect your Web Application with our Web Application Firewall Services, protecting your enterprise online with full durability....",
    illustration: "",
    relatedService: ["SOC As A Service", "Firewall As A Service", "DR As A Service"],
    conclusion: "Protect your web applications with our web application firewall.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.wafaas
  },
  "sdaas": {
    title: "Service Desk As A Service",
    slogan: "The Perfect Customer Service",
    bgImage: "/assets/images/services/sdaasBG.jpg",
    category: "Collaborative Services",
    icon: "/assets/images/icons/monotone/serviceDesk.svg",
    color: "#E4572E",
    tags: ["wireless", "wifi", "clusters", "networks"],
    description: "We give entirely customer-centric solutions, always upgrading and updating....",
    illustration: "",
    relatedService: ["Contact Center As A Service", "Unified Communications As A Service", "CEX As A Service"],
    conclusion: " Customer-centric Solutions, delivered by experts, to enhance your business.",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.sdaas
  },
  "gpu": {
    title: "GPU As A Service",
    slogan: "Powerful Yet Simple",
    bgImage: "/assets/images/services/gpuBG.jpg",
    category: "IT Infrastructural Services",
    icon: "/assets/images/icons/monotone/gpu.svg",
    color: "#E4572E",
    tags: ["wireless", "wifi", "clusters", "networks"],
    description: "GPU delivers extreme performance and industry-leading hybrid cloud data management capabilities.....",
    illustration: "",
    relatedService: ["Backup As A Service", "Platform As A Service", "Infrastructure As A Service"],
    conclusion: "Maximized Utilization, a highly scalable, powerful resource for high-end workloads!!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.gpu
  },
  "webdev": {
    title: "Web Development As A Service",
    slogan: "Design that speeds up performance",
    bgImage: "/assets/images/services/webdev.jpg",
    category: "Professional Services",
    icon: "/assets/images/icons/monotone/webdev.svg",
    color: "#E4572E",
    tags: ["webdev", "web", "design", "development", "reactjs"],
    description: "Get your website ready with high speed performance, and attractive motion + visual design....",
    illustration: "",
    relatedService: ["Application Development As A Service", "Web Hosting As A Service", "DNS As A Service"],
    conclusion: "Ready to discuss your project?",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.webdev,
    popular: true
  },
  "wireless": {
    title: "Wireless As A Service",
    slogan: "Wireless Technology Made Simple",
    bgImage: "/assets/images/services/wireless.jpg",
    category: "Network Services",
    icon: "/assets/images/icons/monotone/WirelessAsAService.svg",
    color: "#E4572E",
    popular: true,
    tags: ["wireless", "wifi", "clusters", "networks"],
    description: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters of Cisco WLC 5508....",
    illustration: "",
    relatedService: ["SIP As A Service", "DNS As A Service", "SD-WAN As A Service"],
    conclusion: "Let us make your campus wireless for you!!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.wireless
  },
  "tpaas": {
    title: "Telepresence As A Service",
    slogan: "Creating Customer Connections",
    bgImage: "/assets/images/services/tpaas.jpg",
    category: "Collaborative Services",
    icon: "/assets/images/icons/monotone/InfrastructureIcon.svg",
    color: "#E4572E",
    popular: true,
    tags: ["telepresence", "video", "conferencing", "collaboration"],
    description: "BGUS' TelePresence Services provide comprehensive service offerings to help enterprises prepare, plan, and design their networks. These services combine extensive engineering expertise in converged networks,",
    illustration: "",
    relatedService: ["Unified Communications As A Service", "Service Desk As A Service", "Contact Center As A Service"],
    conclusion: "Video Conferencing Experience like never before with BGUS TPaaS!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.tpaas
  },
  "server-finance": {
    title: "Equipment Finance",
    slogan: "Server Infrastructure",
    bgImage: "/assets/images/services/server.jpg",
    category: "Equipment Finance",
    icon: "/assets/images/icons/library/devices/server.svg",
    color: "#E4572E",
    popular: true,
    tags: ["telepresence", "video", "conferencing", "collaboration"],
    description: "BGUS' TelePresence Services provide comprehensive service offerings to help enterprises prepare, plan, and design their networks. These services combine extensive engineering expertise in converged networks,",
    illustration: "",
    relatedService: ["Unified Communications As A Service", "Service Desk As A Service", "Contact Center As A Service"],
    conclusion: "Video Conferencing Experience like never before with BGUS TPaaS!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.serverFinance
  },
  "network-finance": {
    title: "Equipment Finance",
    slogan: "Network Infrastructure",
    bgImage: "/assets/images/services/logging.jpg",
    category: "Equipment Finance",
    icon: "/assets/images/icons/library/devices/lte-1.svg",
    color: "#E4572E",
    popular: true,
    tags: ["telepresence", "video", "conferencing", "collaboration"],
    description: "BGUS' TelePresence Services provide comprehensive service offerings to help enterprises prepare, plan, and design their networks. These services combine extensive engineering expertise in converged networks,",
    illustration: "",
    relatedService: ["Unified Communications As A Service", "Service Desk As A Service", "Contact Center As A Service"],
    conclusion: "Video Conferencing Experience like never before with BGUS TPaaS!",
    sections: _pageBuilder_pages_solutions_index__WEBPACK_IMPORTED_MODULE_0___default.a.networkFinance
  }
};
/* harmony default export */ __webpack_exports__["a"] = (services);

/***/ }),

/***/ "skeJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/WebHostingPricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

function WebHostingPricing(props) {
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [plan, setPlan] = external_react_default.a.useState("");
  const types = [{
    name: "Non resilient (APACHE)",
    icon: ""
  }, {
    name: "Non resilient (APACHE) with MYSQL DB",
    icon: ""
  }, {
    name: "Non resilient WINDOWS 2016 STD",
    icon: ""
  }, {
    name: "Non resilient WINDOWS 2016 STD WITH DB ATTACHED",
    icon: ""
  }, {
    name: "Resilient (APACHE)",
    icon: ""
  }, {
    name: "Resilient (APACHE) with MYSQL DB",
    icon: ""
  }, {
    name: "Resilient WINDOWS 2016 STD",
    icon: ""
  }, {
    name: "Resilient WINDOWS 2016 STD WITH DB ATTACHED",
    icon: ""
  }, {
    name: "Dedicated DB Server (Windows 2016 Standard with SQL Server) with daily backups.",
    icon: ""
  }, {
    name: "Dedicated DB Server (Windows 2016 Standard with SQL Server) with hourly snapshots.",
    icon: ""
  }];
  const [type, setType] = external_react_default.a.useState(`,${types[0].name}`);
  const [dailyBackups, setDailyBackups] = external_react_default.a.useState(false);

  const handledailyBackups = dailyBackups => dailyBackups ? ",Enabled Daily Backups" : "";

  const [UTMSwitch, setUTMSwitch] = external_react_default.a.useState(false);

  const handleUTMSwitch = UTMSwitch => UTMSwitch ? ",Enabled UTM Firewall Protection" : "";

  const [UTM, setUTM] = external_react_default.a.useState(0);
  const [showUTMSlider, setShowUTMSlider] = external_react_default.a.useState(false);
  const [IP, setIP] = external_react_default.a.useState(0);

  const resetOnCardChange = () => {
    setIP(0);
    setDailyBackups(false);
    setUTM(0);
    setType(`,${types[0].name}`);
    setShowUTMSlider(false);
    setUTMSwitch(false);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters px-lg-5"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Standard",
    icon: "/assets/images/icons/theme/paper-plane.svg",
    featureList: ["Include 2vCPU", "Includes 4 GB RAM", "Include 80 GB Storage", "Complete website monitoring"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Standard");
      resetOnCardChange();
    }
  }, "View More"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "Professional",
    icon: "/assets/images/icons/theme/airplane.svg",
    featureList: ["Include 4vCPU", "Includes 6 GB RAM", "Include 80 GB Storage", "Complete website monitoring"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Professional");
      resetOnCardChange();
    }
  }, "View More"))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    className: "hover-effect",
    title: "Business",
    icon: "/assets/images/icons/theme/rocket.svg",
    featureList: ["Include 6vCPU", "Includes 8 GB RAM", "Include 80 GB Storage", "Complete website monitoring"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Business");
      resetOnCardChange();
    }
  }, "View More"))))), __jsx("div", {
    id: "collapse-1"
  }, __jsx(react_["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, plan), __jsx("div", {
    className: "row px-3"
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1 my-3"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a type : "), __jsx(react_["Select"], {
    value: type,
    onChange: e => {
      setType(e.target.value);
    },
    variant: "outline"
  }, types.map(x => __jsx("option", {
    key: x.name,
    value: `,${x.name}`
  }, x.name)))), __jsx("div", {
    className: "col-lg-12 d-flex align-items-center offset-lg-1 my-3"
  }, __jsx(react_["Switch"], {
    isChecked: dailyBackups,
    onChange: e => {
      setDailyBackups(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "daily-backups"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "hourly-backup"
  }, "Daily Backups")), __jsx("div", {
    className: "col-lg-11 d-flex align-items-center offset-lg-1 mt-2"
  }, __jsx(react_["Switch"], {
    isChecked: UTMSwitch,
    onChange: e => {
      setUTMSwitch(e.target.checked);

      if (e.target.checked == false) {
        setShowUTMSlider(false);
        setUTM(0);
      }
    },
    color: "primary",
    mb: 0,
    id: "UTM-switch"
  }), __jsx(react_["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "UTM-Firewall"
  }, " UTM Enabled Firewall Protection")), UTMSwitch && __jsx("div", {
    className: "col-lg-11 offset-lg-1 mt-2"
  }, __jsx("p", {
    className: " NunitoSans-Bold "
  }, " ", "This type includes maximum 2 web servers for UTM Firewall Protection.", __jsx("a", {
    className: "text-primary",
    onClick: () => {
      setShowUTMSlider(!showUTMSlider);
      setUTM(0);
    }
  }, "  ", "Add Additional Web Servers", " "), " ")), __jsx("div", {
    className: "col-lg-10 offset-lg-1"
  }, __jsx(react_["Collapse"], {
    className: "mt-3",
    in: showUTMSlider
  }, __jsx(react_["FormLabel"], {
    htmlFor: "UTM-Firewall"
  }, "Additional Web Servers for UTM Firewall Protection :"), __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: UTM,
    max: 20,
    onChange: value => {
      setUTM(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "14px",
    borderRadius: "7px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "14px",
    borderRadius: "7px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "28px",
    children: UTM
  })))), __jsx("div", {
    className: "col-lg-4 offset-lg-1 mt-4 mb-2"
  }, __jsx("div", {
    className: "h6"
  }, "Public IPs"), __jsx(react_["NumberInput"], {
    value: IP,
    onChange: value => {
      value <= 20 ? setIP(value) : setIP(20);
    },
    defaultValue: 0,
    min: 0,
    max: 20
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-lg-6 mt-4 py-2 d-flex justify-content-end align-items-end"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Web Hosting As A Service",
    serviceDescription: `${plan} ${type} ${handledailyBackups(dailyBackups)} ${handleUTMSwitch(UTMSwitch)} ${verifyNotEmpty(UTM, "Additional UTM Firewall Web Servers")} ${verifyNotEmpty(IP, "Public IPs")}`,
    button: true
  })))))));
}

/* harmony default export */ var pricing_WebHostingPricing = (WebHostingPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/hosting.jsx

var hosting_jsx = external_react_default.a.createElement;

/* harmony default export */ var hosting = __webpack_exports__["default"] = ([{
  title: "Hosting that you want to choose",
  description: hosting_jsx("span", null, "Web Hosting as a Service includes deploying, maintaining, managing, and securing your website over the world wide web with a unique domain name for your website. The main functionality of Hosting is to make your website live to be accessed or viewed by users all around the globe, for them to load the required resources.", hosting_jsx("br", null), hosting_jsx("br", null), " Web Hosting as a Service allows you to host the website over the web and maintain and monitor in real-time. The current age is what you witness over the web, because of which Web Hosting Services have gained tremendous fame over the past few years."),
  descriptionStyle: {
    fontSize: "lg",
    px: 6
  },
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: hosting_jsx(pricing_WebHostingPricing, null)
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  containerWidth: ["100%", "100%", "88%", "72%"],
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 4],
    width: ["100%", "100%", "100%", "50%", 5 / 12],
    type: "content",
    data: [{
      title: "We are delivering a scalable, reliable, and well-managed authoritative Web Hosting Service.",
      textAlign: "left",
      fontSize: "lg",
      titleSize: 32,
      text: "Dedicated Web Server running APACHE with full redundancy and daily backups. A complete website monitoring is included in the package. Load balancing can also be added as an option if required. With assured low latency and high availability, it is a cost-effective way to make your applications and services available to your users."
    }]
  }, {
    width: ["100%", "100%", "100%", "50%", 7 / 12],
    type: "container",
    containerData: [{
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Redundant"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/thunder-circle.svg",
        mt: 4,
        title: "Low Latency"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/display-1.svg",
        mt: 4,
        title: "Monitor On-the-Go"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/user.svg",
        mt: 4,
        title: "Authoritative"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/general/shield-check.svg",
        mt: 4,
        title: "Daily Backups"
      }
    }, {
      width: ["50%", "33%", "33%", "50%", "33%"],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/shopping/chart-pie.svg",
        mt: 4,
        title: "Load Balancing"
      }
    }]
  }]
}, {
  pb: 0,
  title: "Why BG Unified Solutions as your Hosting Partners?",
  body: [{
    width: "100%",
    type: "content",
    data: [{
      textAlign: "center",
      fontSize: "xl",
      text: "A complete website monitoring is included in the package. Load balancing can also be added as an option if required."
    }]
  }]
}, {
  py: 0,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Varied Web Hosting Solutions",
        description: "WordPress hosting, cloud hosting, dedicated server, AWS cloud, and digital ocean cloud are all under one roof. Multiple data center locations allow access to your website anytime, anywhere.",
        image: "/assets/images/illustrations/Varied_Web_Hosting_Solutions.svg"
      }, {
        title: "Sound and Efficient Planning",
        description: "We can help you choose the best path to embrace this transformation at all levels—from your base infrastructure to achieve your strategic vision and goals. Your website's migratory process onto our platform is super easy with fast, secure, and reliable hosting.",
        image: "/assets/images/illustrations/Sound_and_Efficient_Planning.svg"
      }, {
        title: "Value for Money",
        description: "Reduced costs, pay for what you want, no hidden fees, and completely transparent process. Costing and pricing are discussed and negotiated at the starting of the job only.",
        image: "/assets/images/illustrations/Value_for_Money.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "t/oH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: __jsx("span", null, "Huawei working collaboratively with BG to extend BG\u2019s offerings to lot of their end customers who are facing issues with their existing solutions in place."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "We also had a discussion with the Huawei team to have BG on their Technical Advisory Board for the existing and future customers."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "It is exciting to see a complete partner profile for BG Unified Solutions on the Huawei Global Website.", __jsx("br", null), __jsx("a", {
      href: "https://partner.huawei.com/web/worldwide/channelpartnerprofiles-bg"
    }, "www.huawei.com"))
  }, {
    text: "As a leader of BG Unified Solutions, I can see the growth in the BG's services to the end customers especially when BG Unified Solutions is enhancing its services and productivity at a tremendous rate.",
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "It was very exciting to be interviewed by Huawei Australia for the different solutions in place within BGUS Datacenter\u2019s and how Huawei can work collaboratively to extend the benefits to the actual end customers."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "Empowering business growth - we will aggressively follow our vision to help our clients to grow and sustain their business during this COVID circumstances."),
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "vKFw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "OVERVIEW",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "The primary purpose of the project was to redesign the network to achieve the following design criteria: ",
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Reduced Network Complexity"), " \u2013 Reducing network complexity and management overhead was one of the primary goals of this project."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Security"), " \u2013 Network security and compliance were to be addressed as a key outcome."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Reliability"), " \u2013 Providing redundancy/failover for key networking equipment."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Flexibility & Scalability"), " \u2013 Network architecture which lays the foundation for growth and expansion."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Visibility"), " \u2013 Ease of monitoring for performance, audit and troubleshooting purposes."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Performance"), " \u2013 Optimising network performance throughput."),
    textAlign: "justify"
  }, {
    image: __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      justifySelf: "center",
      src: "/assets/images/services/database.jpg"
    }),
    imageJustify: "center"
  }, {
    text: "SOLUTION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "From legacy production systems support a wide technology lens and multi-vendor solutions, we did help them implement a flexible, agile architecture designed specifically to meet their unique needs.",
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Technologies involved"), " - Cisco ASA 5585 + ASA 5510 with AIP-SSM-10 Cisco IPS 4260 Big IP F5 3900 Cisco L3 Switches"),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "Project Deliverables"), " were: High Availability Reduced Network Complexity Optimized Performance-Optimised Routing PCI Compliance"),
    textAlign: "justify"
  }, {
    text: "CONCLUSION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "Designed the whole solution to reduce the overall complexity and remove bottlenecks. We worked cohesively with our in-house team and brought great technical skills & expertise on Cisco switches, routers, firewalls, content switches, IPS etc. We ensured that the project is completed with minimum end-user impact.",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "vpFP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "Consultel Group is coming together with BGUS for efficient and intelligent business solutions with authentic integrity.",
    textAlign: "justify"
  }, {
    text: "Consultel Group is a global IT consultancy that delivers scalable, secure technology solutions to businesses worldwide, including brands such as Consultel Cloud, Consultel AI, Consultel Networks, and Consultel Managed Solutions.",
    textAlign: "justify"
  }, {
    text: "The four brands are dedicated to and focused on four different areas of Information Technology",
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "1) Consultel Cloud"), " - Consultel Cloud delivers private cloud to businesses either as a standalone solution or centralize data and complement an organization\u2019s hybrid, multi-cloud strategy."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "2) Consultel AI"), " - Consultel AI provides automation tools, quality checking, compliance checking, safety controls, and facial recognition technologies to businesses across Australia."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "3) Consultel Managed Services"), " - Consultel Managed Services brings the best of breed security solutions and delivers real-time security protection, which helps organizations establish compliance and reduce overall security risk."),
    textAlign: "justify"
  }, {
    text: __jsx("span", null, __jsx("b", null, "4) Consultel Networks"), " - Consultel Networks designs, configures, and deploys cost-effective network solutions that meet organizations\u2019 interconnection needs in a continually evolving technology landscape."),
    textAlign: "justify"
  }, {
    text: "Consultel Group and BG Unified Solutions, working on the principles of customer satisfaction, cost-effectiveness, and reliability, are advancing through to provide high-end expert solutions for your enterprise.",
    textAlign: "justify"
  }, {
    text: "Mutual Vision... Partners in Growth!!",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }]
}]);

/***/ }),

/***/ "wKbz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "F5 Configuration was redesigned and implemented in a recommended way. A lot of IRULES/POOLS defined to achieve the desired configuration requirements. Health Monitors were rewritten to provide the best monitor for the servers in different pools.",
    textAlign: "justify"
  }, {
    text: "OVERVIEW",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "The project involved the integration of Big IPs to the newly implemented DC. Design a Load Balancing topology for web servers running multiple instances of TOMCAT. A couple of applications are SSL based and others are Non-SSL based. Implementation of advanced features of F5 including Application Monitoring, Intrusion Prevention, Application Inspection and dynamically powering on the VMs based on the load or other criteria.",
    textAlign: "justify"
  }, {
    text: "F5 load balancing solutions employ F5 iApps that help them deploy 10x to 100x faster with 95 per cent fewer configuration mistakes.",
    textAlign: "justify"
  }, {
    text: "THE SOLUTION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "The F5 application-centric view allowed us to set up customized network services with ease. And by managing application services rather than the individual networking components and configurations, we could dramatically speed deployment, lower operational expenses, and streamline IT operations.",
    textAlign: "justify"
  }, {
    text: "CONCLUSION",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
  }, {
    text: "F5 application-centric load balancing solutions ensured that our customers and partners have access to the applications they need—whenever they need them—by monitoring the health and performance of individual servers in real-time.",
    textAlign: "justify"
  }, {
    text: "Implementation of PCI Compliance and configuration of ASM to protect applications from different attacks.",
    textAlign: "justify"
  }]
}]);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yt2v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/WirelessPricing.jsx
var __jsx = external_react_default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + text : "";

function WirelessPricing(props) {
  const [logs1, setLogs1] = external_react_default.a.useState(0);
  const [logs2, setLogs2] = external_react_default.a.useState(0);
  const [logs3, setLogs3] = external_react_default.a.useState(0);
  const [guest1, setGuest1] = external_react_default.a.useState(false);
  const [guest2, setGuest2] = external_react_default.a.useState(false);
  const [guest3, setGuest3] = external_react_default.a.useState(false);

  const handleGuestSwitch = bool => bool ? ",Guest-10M Included" : "";

  return __jsx("div", {
    id: "pricing",
    className: "container"
  }, __jsx(Fade_default.a, {
    duration: 500,
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters"
  }, __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "LAP-5",
    icon: "/assets/images/icons/theme/wifi.svg",
    featureList: ["Suitable for small offices with capacity of less than 100 users", "Each AP handles an average of 20-30 users with full application visibility", "Included 1 Corporate SSID", "Cisco Wi-Fi and Aruba Wi-Fi", "Limit Utilization per device", "Limit Utilization per user", "Guest SSID available on request", "Fully Managed Service"]
  }, __jsx("div", {
    className: " my-2 NunitoSans-Bold"
  }, "Extra SSID"), __jsx("div", {
    className: "w-100 px-3"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs1,
    max: 20,
    onChange: value => {
      setLogs1(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "10px",
    borderRadius: "5px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: logs1
  }))), __jsx(react_["Checkbox"], {
    className: "my-2",
    value: guest1,
    onChange: e => setGuest1(e.target.checked)
  }, "Guest-10M"), " ", __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Wireless As A Service",
    serviceDescription: `LAP-5 ${verifyNotEmpty(logs1, " Extra SSID")} ${handleGuestSwitch(guest1)}`
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "LAP-10",
    icon: "/assets/images/icons/theme/wifi.svg",
    featureList: ["Suitable for medium sized businesses with capacity of upto 300 users with seamless coverage", "Each AP handles an average of 20-30 users with full application visibility", "Included 1 Corporate SSID", "Cisco Wi-Fi and Aruba Wi-Fi", "Limit Utilization per device", "Limit Utilization per user", "Guest SSID available on request", "Maximum SSID included - 5", "Fully Managed Service"]
  }, __jsx("div", {
    className: " my-2 NunitoSans-Bold"
  }, "Extra SSID"), __jsx("div", {
    className: "w-100 px-3"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs2,
    max: 20,
    onChange: value => {
      setLogs2(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "10px",
    borderRadius: "5px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: logs2
  }))), __jsx(react_["Checkbox"], {
    className: "my-2",
    value: guest2,
    onChange: e => setGuest2(e.target.checked)
  }, "Guest-10M"), " ", __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Wireless As A Service",
    serviceDescription: `LAP-10 ${verifyNotEmpty(logs2, " Extra SSID")} ${handleGuestSwitch(guest2)}`
  }))), __jsx("div", {
    className: "col-lg-4 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    title: "LAP-20",
    icon: "/assets/images/icons/theme/wifi.svg",
    featureList: ["Suitable for large businesses with capacity of 600 users with seamless coverage", "Each AP handles an average of 20-30 users with full application visibility", "Included 1 Corporate SSID", "Cisco Wi-Fi and Aruba Wi-Fi", "Limit Utilization per device", "Limit Utilization per user", "Guest SSID available on request", "Maximum SSID included - 10", "Fully Managed Service"]
  }, __jsx("div", {
    className: " my-2 NunitoSans-Bold"
  }, "Extra SSID"), __jsx("div", {
    className: "w-100 px-3"
  }, __jsx(react_["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs3,
    max: 20,
    onChange: value => {
      setLogs3(value);
    }
  }, __jsx(react_["SliderTrack"], {
    h: "10px",
    borderRadius: "5px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: logs3
  }))), __jsx(react_["Checkbox"], {
    className: "my-2",
    value: guest3,
    onChange: e => setGuest3(e.target.checked)
  }, "Guest-10M"), " ", __jsx(PricingCard["b" /* PricingQuote */], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Wireless As A Service",
    serviceDescription: `LAP-20 ${verifyNotEmpty(logs3, " Extra SSID")} ${handleGuestSwitch(guest3)}`
  }))))));
}

/* harmony default export */ var pricing_WirelessPricing = (WirelessPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/wireless.jsx

var wireless_jsx = external_react_default.a.createElement;

/* harmony default export */ var wireless = __webpack_exports__["default"] = ([{
  pt: 0,
  mt: "-96px",
  body: [{
    type: "pricing",
    data: wireless_jsx(pricing_WirelessPricing, null)
  }, {
    type: "content",
    data: [{
      text: "Cisco Wi-Fi and Aruba Wi-Fi. The hosted wireless solution includes multiple clusters and isolated Data centers of Cisco WLC 5508, 2504, and Aruba controllers.",
      textAlign: "center",
      opacity: 0.7,
      px: [0, 4, 8, 16]
    }]
  }]
}, {
  title: "Wireless for your Business",
  titleStyle: {
    fontSize: ["32px", "40px"]
  },
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: [4, 8, 12],
  gap: 8,
  body: [{
    width: ["50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/display-1.svg",
      mt: 4,
      title: "Real-Time Monitoring"
    }
  }, {
    width: ["50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/lte-2.svg",
      mt: 4,
      title: "Reduced Congestion Problems"
    }
  }, {
    width: ["50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/cpu-2.svg",
      mt: 4,
      title: "Optimizing Infrastructural Resources"
    }
  }, {
    width: ["50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/thunder-move.svg",
      mt: 4,
      title: "Increased Productivity"
    }
  }, {
    width: ["50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/shield-thunder.svg",
      mt: 4,
      title: "Completely Redundant"
    }
  }, {
    width: ["50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/lte-1.svg",
      mt: 4,
      title: "Collaborative and Streamlined"
    }
  }]
}, {
  title: "Why BG Unified Solutions?",
  description: "Wireless plays an integral part in collaborating and streamlining an organization's resources and increases productivity at a tremendous rate.",
  rowDistance: 8,
  mb: 0,
  py: 45,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Clustering of Devices",
        description: "Wireless Solution with Cisco 5508 WLC in Cluster and 4404 WLC in Cluster, to support Wireless Phones in any environment. We reduce traffic and congestion problems significantly.",
        image: "/assets/images/illustrations/ClusteringOfDevices_Wireless.svg"
      }, {
        title: "Unified and Efficient",
        description: "Improved operational efficiencies, Reduced communication-related delays, and enhanced collaboration. Completely redundant and efficient transmission.",
        image: "/assets/images/illustrations/unified_and_efficient.svg"
      }, {
        title: "Network Security",
        description: "Ensuring a completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto / Checkpoint / Fortinet Firewall, DDOS Protection.",
        image: "/assets/images/illustrations/security_lock_firewall.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "zU2+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__("LZ34");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./src/components/cards/PricingCard.jsx + 1 modules
var PricingCard = __webpack_require__("r/2C");

// EXTERNAL MODULE: ./src/components/inputs/RadioGroup.jsx
var RadioGroup = __webpack_require__("07hB");

// CONCATENATED MODULE: ./src/pageBuilder/pricing/InfraPricing.jsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const tabs = [{
  index: 0,
  title: "Base Server",
  icon: fa_["FaServer"]
}, {
  index: 1,
  title: "Windows 10",
  icon: fa_["FaWindows"]
}, {
  index: 2,
  title: "Windows 2016 Standard",
  icon: fa_["FaWindows"]
}, {
  index: 3,
  title: "Windows 2016 DC",
  icon: fa_["FaWindows"]
}, {
  index: 4,
  title: "Dedicated DB Server",
  icon: fa_["FaDatabase"]
}];
const plans = [{
  index: 0,
  name: "Standard",
  icon: "/assets/images/icons/theme/origami.svg",
  feature: ["2vCPU", "80GB SSD Storage", "4GB RAM", "Desktop Virtualization", "High Availability", "High Clustering"],
  cpu: 2,
  popular: false,
  storage: 80,
  ram: 4
}, {
  index: 1,
  name: "Professional",
  icon: "/assets/images/icons/theme/paper-plane.svg",
  feature: ["4vCPU", "80GB SSD Storage", "6GB RAM", "Desktop Virtualization", "High Availability", "High Clustering"],
  popular: false,
  cpu: 4,
  storage: 80,
  ram: 6
}, {
  index: 2,
  name: "Business",
  icon: "/assets/images/icons/theme/airplane.svg",
  feature: ["6vCPU", "80GB SSD Storage", "8GB RAM", "Desktop Virtualization", "High Availability", "High Clustering"],
  popular: true,
  cpu: 6,
  storage: 80,
  ram: 8
}, {
  index: 3,
  name: "Enterprise",
  icon: "/assets/images/icons/theme/rocket.svg",
  feature: ["8vCPU", "80GB SSD Storage", "16GB RAM", "Desktop Virtualization", "High Availability", "High Clustering"],
  popular: false,
  cpu: 8,
  storage: 80,
  ram: 16
}];
const CustomRadio = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = _objectWithoutProperties(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(react_["Button"], _extends({
    className: "my-1",
    fontSize: ["13px", "14px", "16px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    colorScheme: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest));
});

function InfraPricing(props) {
  const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

  const [type, setType] = external_react_default.a.useState(""); //Hooks

  const [planName, setPlan] = external_react_default.a.useState("Standard");

  const handlePlan = name => setPlan(name);

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(react_["useDisclosure"])();
  const [show, setShow] = external_react_default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [storage, setStorage] = external_react_default.a.useState(0);

  const handleStorage = storage => setStorage(storage);

  const [ram, setRam] = external_react_default.a.useState(0);

  const handleRam = ram => setRam(ram);

  const [cpu, setCPU] = external_react_default.a.useState(0);
  const [tabIndex, setTabIndex] = external_react_default.a.useState(0);

  const handleTabsChange = index => {
    setTabIndex(index);
    setShow(false);
  };

  const [dailybackup, setDailyBackup] = external_react_default.a.useState(false);

  const handleDailyBackup = dailybackup => dailybackup ? ",Enabled Daily Backup" : "";

  const [windowLicense, setWindowLicense] = external_react_default.a.useState(false);

  const handleWindowLicense = windowLicense => windowLicense ? ",I have a Windows License" : "";

  const resetOnCardChange = () => {
    setWindowLicense(false);
    setDailyBackup(false);
    setType("");
    setCPU(0);
    setRam(0);
    setStorage(0);
  }; //Panels


  const tabPanel = __jsx(react_["TabPanel"], {
    mx: "auto",
    width: ["100%", "100%", "100%", "90%", "82%"],
    className: "py-2"
  }, __jsx(Fade_default.a, {
    cascade: true,
    duration: 500,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, plans.map(plan => {
    return __jsx("div", {
      key: plan.index,
      className: "col-xl-3 col-lg-4 col-sm-6 my-3"
    }, __jsx(PricingCard["a" /* PricingCard */], {
      icon: plan.icon,
      title: plan.name,
      popular: plan.popular,
      featureList: plan.feature
    }, __jsx(react_["Button"], {
      className: "mt-3 btn-block primary-btn",
      variant: "solid",
      size: "lg",
      colorScheme: "primary",
      onClick: () => {
        handlePlan(plan.name);
        openControls();
        resetOnCardChange();
      }
    }, "Get Started")));
  }))));

  return __jsx("div", {
    className: "container-fluid",
    id: "pricing"
  }, __jsx("div", {
    className: "row justify-content-center"
  }, __jsx(react_["Button"], {
    onClick: onOpen,
    className: "tab-dropdown",
    size: "lg",
    py: "32px",
    mb: "12px",
    px: "48px",
    rightIcon: __jsx(fa_["FaChevronDown"], null)
  }, __jsx(react_["Box"], {
    as: tabs[tabIndex].icon,
    size: "32px",
    mr: "12px"
  }), tabs[tabIndex].title), __jsx(react_["Drawer"], {
    placement: "bottom",
    size: "lg",
    onClose: onClose,
    isOpen: isOpen
  }, __jsx(react_["DrawerOverlay"], null), __jsx(react_["DrawerContent"], null, __jsx(react_["DrawerHeader"], {
    borderBottomWidth: "1px"
  }, "Choose an Operating System"), __jsx(react_["DrawerBody"], null, tabs.map(tab => {
    return __jsx(external_react_default.a.Fragment, null, __jsx(react_["Button"], {
      key: tab.index,
      onClick: () => {
        setTabIndex(tab.index);
        onClose();
      },
      colorScheme: "white",
      py: "32px",
      className: "box-none text-dark justify-content-start hover-effect w-100 display6"
    }, __jsx(react_["Box"], {
      as: tab.icon,
      size: "32px",
      mr: "12px"
    }), " ", tab.title));
  }))))), __jsx(react_["Tabs"], {
    align: "center",
    index: tabIndex,
    onChange: handleTabsChange
  }, __jsx(react_["TabList"], null, tabs.map(tab => {
    return __jsx(external_react_default.a.Fragment, null, __jsx(react_["Tab"], {
      key: tab.index,
      onClick: () => {
        setTabIndex(tab.index);
        setWindowLicense(false);
        setDailyBackup(false);
        setType("");
        setShow(false);
      },
      className: "box-none tab display6 " + (tabIndex === tab.index && "tab-selected")
    }, __jsx(react_["Box"], {
      as: tab.icon,
      size: "32px",
      mr: "12px"
    }), " ", tab.title));
  })), __jsx(react_["TabPanels"], null, __jsx(react_["TabPanel"], {
    className: "py-2"
  }, __jsx(Fade_default.a, {
    duration: 500,
    cascade: true,
    distance: "30%",
    bottom: true
  }, __jsx("div", {
    className: "row no-gutters justify-content-center"
  }, __jsx("div", {
    className: "col-xl-3 col-lg-4 col-sm-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/origami.svg",
    title: "Standard",
    featureList: ["2vCPU", "80GB SSD Storage", "4GB RAM", "Desktop Virtualization", "High Availability", "High Clustering"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      handlePlan("Standard");
      resetOnCardChange();
    }
  }, "Get Started"))), __jsx("div", {
    className: "col-xl-3 col-lg-4 col-sm-6 my-3"
  }, __jsx(PricingCard["a" /* PricingCard */], {
    icon: "/assets/images/icons/theme/paper-plane.svg",
    title: "Business",
    popular: true,
    featureList: ["4vCPU", "80GB SSD Storage", "6GB RAM", "Desktop Virtualization", "High Availability", "High Clustering"]
  }, __jsx(react_["Button"], {
    className: "mt-3",
    colorScheme: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      handlePlan("Business");
      resetOnCardChange();
    }
  }, "Get Started")))))), tabPanel, tabPanel, tabPanel, tabPanel)), __jsx("div", {
    id: "collapse-1",
    className: "container"
  }, __jsx(react_["Collapse"], {
    id: "quoteForm",
    className: "px-lg-5",
    mt: 6,
    in: show
  }, __jsx("div", {
    className: "px-4 py-5 border"
  }, __jsx("div", {
    className: "display5 text-center"
  }, tabs[tabIndex].title, " (", planName, ")"), __jsx("div", {
    className: "row px-3"
  }, tabIndex === 4 && __jsx("div", {
    className: "col-lg-12 mt-2"
  }, __jsx("div", {
    className: "h6"
  }, "Choose a Type"), __jsx(RadioGroup["a" /* default */], {
    options: ["Daily Backups", "Hourly Snapshots"],
    setValue: setType,
    default: 4
  })), __jsx("div", {
    className: "col-lg-12 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Extend SSD Storage (in GB)"), __jsx(react_["Slider"], {
    color: "primary",
    my: "18px",
    defaultValue: 0,
    min: 0,
    max: 256 - 80,
    value: storage,
    onChange: handleStorage
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: 80 + storage
  }))), __jsx("div", {
    className: "col-lg-12 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Additional Memory (in GB)"), __jsx(react_["Slider"], {
    color: "primary",
    my: "18px",
    defaultValue: 0,
    max: "64",
    value: ram,
    onChange: handleRam
  }, __jsx(react_["SliderTrack"], {
    h: "16px",
    borderRadius: "8px"
  }, __jsx(react_["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px"
  })), __jsx(react_["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: ram * 2
  }))), tabIndex < 4 && __jsx("div", {
    className: "col-lg-6 mt-4"
  }, __jsx("div", {
    className: "d-flex d-flex align-items-center"
  }, __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setDailyBackup(e.target.checked);
    },
    isChecked: dailybackup,
    id: "daily-backups"
  }), __jsx(react_["FormLabel"], {
    ml: "12px",
    htmlFor: "daily-bakups"
  }, "Enable Daily Backups"))), tabIndex < 4 && __jsx("div", {
    className: "col-lg-6 mt-4"
  }, __jsx("div", {
    className: "d-flex d-flex align-items-center"
  }, __jsx(react_["Switch"], {
    color: "primary",
    onChange: e => {
      setWindowLicense(e.target.checked);
    },
    isChecked: windowLicense,
    id: "license"
  }), __jsx(react_["FormLabel"], {
    ml: "12px",
    htmlFor: "license"
  }, "I have a Windows license"))), __jsx("div", {
    className: "col-md-6 mt-4"
  }, __jsx("div", {
    className: "h6"
  }, "Additional vCPUs"), __jsx(react_["NumberInput"], {
    maxWidth: "160px",
    min: 0,
    max: 60,
    value: cpu,
    onChange: value => {
      value <= 60 ? setCPU(value) : setCPU(60);
    },
    step: cpu < 2 ? 1 : 2
  }, __jsx(react_["NumberInputField"], {
    className: "bg-light"
  }), __jsx(react_["NumberInputStepper"], null, __jsx(react_["NumberIncrementStepper"], null), __jsx(react_["NumberDecrementStepper"], null)))), __jsx("div", {
    className: "col-md-6 mt-4 pt-md-4 pb-1 d-flex justify-content-md-end align-items-center"
  }, __jsx(PricingCard["b" /* PricingQuote */], {
    serviceName: "Infrastructure As A Service",
    serviceDescription: `${tabs[tabIndex].title} (${planName})${verifyNotEmpty(storage, "GB Additional Storage")} ${verifyNotEmpty(ram * 2, "GB Additional Memory")}${handleDailyBackup(dailybackup)}${handleWindowLicense(windowLicense)} ${verifyNotEmpty(cpu, "Additional vCPUs")},${type}`,
    button: true
  })))))));
}

/* harmony default export */ var pricing_InfraPricing = (InfraPricing);
// CONCATENATED MODULE: ./src/pageBuilder/pages/solutions/infra.jsx

var infra_jsx = external_react_default.a.createElement;

/* harmony default export */ var infra = __webpack_exports__["default"] = ([{
  my: 0,
  pt: 0,
  containerWidth: "100%",
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: infra_jsx(pricing_InfraPricing, null)
  }]
}, {
  title: "Supported Operating System",
  my: 0,
  py: 16,
  bg: "light.400",
  titleStyle: {
    fontSize: "2xl",
    opacity: .7
  },
  rowDistance: 8,
  body: [{
    width: "100%",
    type: "imageGroup",
    data: {
      images: ["/assets/images/os/redhat.png", "/assets/images/os/windows10.png", "/assets/images/os/windowsServer.png"],
      height: "96px",
      width: "128px",
      objectFit: "contain"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: infra_jsx("span", null, "Optimizing infrastructural resources is essential to controlling the cost of data growth. The Enterprise Infrastructure Assessment provides in-depth reports and recommendations for improving storage efficiency, performance, and availability. Findings linked to your specific risks and benefits\u2014so you can scale your infra systems to serve the growing needs of your business successfully. We can address your heterogeneous data center environment and provide data and recommendations across all assets."),
      fontSize: ["lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}, {
  rowDistance: 8,
  my: 0,
  pt: 5,
  pb: 10,
  gap: 10,
  body: [{
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/ui.svg",
      title: "Scale Up On-Demand",
      align: "left",
      description: "With BG Unified Solutions, you create a combination of CPU, memory, bandwidth, and storage as per your requirements. Enjoy the freedom to scale up your infrastructure as and when required."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/agile.svg",
      title: "Stay Agile",
      align: "left",
      description: "Resources are not bundled together, and there is undoubtedly no standard server size. Combine long-term subscriptions for predictable workloads and on-time delivery with regular updates."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/globe.svg",
      title: "Enjoy Superior performance",
      align: "left",
      description: "Choose the most appropriate and most suitable framework to run your cloud infrastructure. Give your customers the pleasure to enjoy low latency and faster loading speeds."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/headphones.svg",
      title: "Excellent Customer Support",
      align: "left",
      description: "BGUS's friendly and skilled customer support service is available 24X7X365 with significantly less response time. Our policies ensure rapid and satisfactory resolution of issues."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/api.svg",
      title: "Migration made easy",
      align: "left",
      description: "Use our seamless live migration tool to get you up and running in the cloud without any modifications to your existing infrastructure."
    }
  }, {
    py: 4,
    width: ["100%", "50%", "33%"],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/fix.svg",
      title: "No Vendor lock-in",
      align: "left",
      description: "At BGUS's infrastructure, you can develop or deploy your application in the cloud without being forced to use any vendor-specific tools."
    }
  }]
}, {
  py: 16,
  bg: "light.400",
  body: [{
    width: "33%",
    type: "numberCount",
    data: {
      title: "Core CPUs",
      count: 10000,
      suffix: "+"
    }
  }, {
    width: "33%",
    type: "numberCount",
    data: {
      title: "TBs of Memory",
      count: 900,
      suffix: "+"
    }
  }, {
    width: "33%",
    type: "numberCount",
    data: {
      title: "Infrastructural Components",
      count: 250,
      suffix: "+"
    }
  }]
}, {
  py: 0,
  body: [{
    width: "100%",
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["lg", "xl"],
      text: "With BG Unified Solutions Infrastructure as a Service, not only do you pay only for the data storage you use, but we provide you with a geographical redundant storage infrastructure and ready access to experts in Infrastructure Technologies who will be eager to understand your storage requirements. Initial setup is rapid, adding or removing capacity is even faster and without any downtime."
    }]
  }, {
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "The Choice between On-Premises & Cloud",
        description: "On-premise or cloud-based, that helps secure your IT environment quickly. The mainstay of Enterprise Security. Blocks malicious traffic and allows legitimate traffic to flow without any hindrance.",
        image: "/assets/images/illustrations/Varied_Web_Hosting_Solutions.svg"
      }, {
        title: "Fast and easy Deployment",
        description: "Rapid evolvement, easily deployable with tremendous speed. Proven deployment methodology that integrates and extends your existing security infrastructure without Capex.",
        image: "/assets/images/illustrations/FlexibilityAndScalabilty_AppDev.svg"
      }, {
        title: "Advanced Technology Stack",
        description: "Advanced Malware Protection, Anti-Virus Detection, Uniform resource Locator Filtering, User-Based Policy, and Advanced Logging facilities, SSL Virtual Private Network’s included.",
        image: "/assets/images/illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "zecf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  body: [{
    width: ["100%", "100%", "50%"],
    type: "imageGroup",
    my: [0, 2],
    data: {
      images: ["/assets/images/services/arch_consul.jpg"],
      borderRadius: 8,
      width: ['100%', "100%", "90%"],
      height: "300px",
      objectFit: "cover"
    }
  }, {
    mt: [0, 3],
    width: ["100%", "100%", "50%"],
    type: "content",
    data: [{
      textAlign: "justify",
      title: "Achieve Higher Business Efficiency with BG Unified Solutions",
      titleSize: [30, 32],
      text: __jsx("span", null, "As the name suggests, Architectural Consultancy Services is accessing users' needs about their organization and providing them with the best solutions tailored according to their requirements. Monitoring and measuring various aspects of the network environment so that overall performance can be maintained and optimized. Knowing what\u2019s best for you is the primary criterion for optimizing your resources and using them to the fullest.")
    }]
  }]
}, {
  my: 0,
  title: "Architectural Consultancy Service - Quality Assured",
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  rowDistance: 8,
  gap: 6,
  body: [{
    width: ["50%", "33%", "33%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "primary.500",
      svg: "/assets/images/icons/library/tools/tools.svg",
      mt: 4,
      title: "Increase Agility"
    }
  }, {
    width: ["50%", "33%", "33%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "primary.500",
      svg: "/assets/images/icons/library/media/equalizer.svg",
      mt: 4,
      title: "High Resource Utilization"
    }
  }, {
    width: ["50%", "33%", "33%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "primary.500",
      svg: "/assets/images/icons/library/communication/chat-smile.svg",
      mt: 4,
      title: "Customer-Centric"
    }
  }, {
    width: ["50%", "33%", "33%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "primary.500",
      svg: "/assets/images/icons/library/code/settings-4.svg",
      mt: 4,
      title: "Advanced Technologies"
    }
  }, {
    width: ["50%", "33%", "33%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "primary.500",
      svg: "/assets/images/icons/library/communication/flag.svg",
      mt: 4,
      title: "Competitive"
    }
  }, {
    width: ["50%", "33%", "33%", "50%", "33%"],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "primary.500",
      svg: "/assets/images/icons/library/code/shift.svg",
      mt: 4,
      title: "Increased Business Efficiency"
    }
  }]
}, {
  title: __jsx("div", {
    className: "d-block d-sm-none"
  }, "Why BG Unified Solutions for your Business?"),
  pt: 0,
  pb: 10,
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "lg",
      content: [{
        title: "Performance Optimized",
        description: "Monitors and measures various aspects of the network environment so that overall performance can be maintained and optimized.",
        image: "/assets/images/illustrations/analytics.svg"
      }, {
        title: "Configuration Management",
        description: "Configures network devices, performs inventory management and software management. Local end-market support services and Local language capabilities.",
        image: "/assets/images/illustrations/SimplifiedLogManagment_CloudLogging.svg"
      }, {
        title: "Wide Expert Range",
        description: "Weather System Architecture, Technology Roadmap, or optimization solutions for your business, we’ve got it all covered. Customized and tailor solutions to meet client needs",
        image: "/assets/images/illustrations/infrastructure_city.svg"
      }]
    }
  }]
}]);

/***/ }),

/***/ "zks1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LZ34");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "Things are moving very fast in India and Singapore. Last week in the company meeting, it was decided to have 4 POP's in India. Now it's a good question where will be those POP's and who will be our technology partner. We anticipate having 2 racks in each POP in the next 12-18 months.",
    textAlign: "justify"
  }, {
    text: __jsx("span", null, "A very good friend of mine ", __jsx("b", null, "Shane Fisher"), " once said that \"You surely delivering your promises Sunny\". It made me feel so proud that my friends vote for me and think highly of me but certainly, I will go not only the extra mile but miles to support my clients who are a very crucial part of the ", __jsx("b", null, "BG Unified Solutions"), " family."),
    textAlign: "justify",
    mt: "32px"
  }, // {
  //     image:<Image justifySelf="center" src="/assets/images/services/sdwan.jpg"/>,
  //     imageJustify: "center",
  // },
  {
    text: __jsx("span", null, "As a leader of BG Unified Solutions, I would like to take this opportunity to give another update - BG Unified Solutions will be ready in stepping into Colocation Services within this year. Exciting times ahead! ! ! !"),
    mt: "32px"
  }]
}]);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });