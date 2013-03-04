/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Rectangle',
            type:'rect',
            rect:['201px','168px','147px','64px','auto','auto'],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['-40px','194px','624px','13px','auto','auto'],
            fill:["rgba(31,255,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[],['-9']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Rectangle}": [
            ["style", "top", '168px'],
            ["style", "left", '201px'],
            ["style", "width", '147px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '194px'],
            ["transform", "rotateZ", '-9deg'],
            ["color", "background-color", 'rgba(31,255,0,1.00)'],
            ["style", "left", '-40px'],
            ["style", "width", '624px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-606259423");
