/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'ClickBelow',
                            type: 'rect',
                            rect: ['343px', '14px', '491px', '322px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'ClickBelowTxt',
                            type: 'text',
                            rect: ['356px', '24px', '464px', '79px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Verdana, Geneva, sans-serif; font-size: 58px;\">Click below to</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [29, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'twitchpage',
                            display: 'none',
                            type: 'image',
                            rect: ['343px', '14px', '491px', '322px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"twitchpage.jpg",'0px','0px']
                        },
                        {
                            id: 'Chiv',
                            display: 'none',
                            type: 'image',
                            rect: ['345px', '16px', '615px', '344px', 'auto', 'auto'],
                            clip: 'rect(0px 494.31005859375px 319.862060546875px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"Chiv.jpg",'0px','0px'],
                            transform: [[],[],[],['1.00608']]
                        },
                        {
                            id: 'RL',
                            display: 'none',
                            type: 'image',
                            rect: ['343px', '14px', '615px', '349px', 'auto', 'auto'],
                            clip: 'rect(0px 490.86181640625px 321.413818359375px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"RL.jpg",'0px','0px']
                        },
                        {
                            id: 'CSGO',
                            display: 'block',
                            type: 'image',
                            rect: ['118px', '-8px', '740px', '344px', 'auto', 'auto'],
                            clip: 'rect(22.413818359375px 727.9306640625px 344px 222.41357421875px)',
                            fill: ["rgba(0,0,0,0)",im+"CSGO.jpg",'0px','0px']
                        },
                        {
                            id: 'WoW',
                            display: 'block',
                            type: 'image',
                            rect: ['177px', '14px', '839px', '322px', 'auto', 'auto'],
                            clip: 'rect(0px 686.37060546875px 322px 153.4482421875px)',
                            fill: ["rgba(0,0,0,0)",im+"WoW.jpg",'0px','0px']
                        },
                        {
                            id: 'twitchLogo',
                            type: 'image',
                            rect: ['-87px', '12px', '84px', '337px', 'auto', 'auto'],
                            opacity: '0.49593495934959',
                            fill: ["rgba(0,0,0,0)",im+"twitch3.png",'0px','0px']
                        },
                        {
                            id: 'followLink',
                            symbolName: 'followLink',
                            type: 'rect',
                            rect: ['605', '269', '230', '40', 'auto', 'auto']
                        },
                        {
                            id: 'Clicker',
                            type: 'image',
                            rect: ['546px', '-102px', '85px', '86px', 'auto', 'auto'],
                            clip: 'rect(0px 84.743362426758px 85.5px 8px)',
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"piq_145176_400x400.png",'0px','0px'],
                            transform: [[],[],[],['1.04987','1.04987']]
                        },
                        {
                            id: 'EnjoyTxt',
                            type: 'text',
                            rect: ['100px', '38px', '123px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Verdana, Geneva, sans-serif; font-size: 40px;\">Enjoy</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'experiencingTxt',
                            display: 'none',
                            type: 'text',
                            rect: ['30px', '150px', '263px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Verdana, Geneva, sans-serif; font-size: 40px;\">experiencing</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'playingTxt',
                            display: 'none',
                            type: 'text',
                            rect: ['85px', '150px', '153px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: Verdana, Geneva, sans-serif; font-size: 40px;\">playing</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'watchingTxt',
                            display: 'block',
                            type: 'text',
                            rect: ['63px', '150px', '185px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: Verdana, Geneva, sans-serif;\">watching</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'newGamesTxt',
                            type: 'text',
                            rect: ['33px', '258px', '256px', '51px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 40px; font-family: Verdana, Geneva, sans-serif;\">new games?</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '875px', '350px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(129,95,192,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5872,
                    autoPlay: true,
                    data: [
                        [
                            "eid168",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${Chiv}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid91",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${Chiv}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Chiv}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${twitchpage}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${twitchpage}",
                            'block',
                            'none'
                        ],
                        [
                            "eid180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${watchingTxt}",
                            'block',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${watchingTxt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${watchingTxt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${WoW}",
                            'block',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            750,
                            0,
                            "linear",
                            "${WoW}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${RL}",
                            '343px',
                            '343px'
                        ],
                        [
                            "eid227",
                            "location",
                            3750,
                            1000,
                            "linear",
                            "${Clicker}",
                            [[588.5, -59, 0, 0, 0, 0,0],[729.88, 318.4, 0, 0, 0, 0,403.01]]
                        ],
                        [
                            "eid233",
                            "opacity",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            '1',
                            '1'
                        ],
                        [
                            "eid234",
                            "opacity",
                            5500,
                            372,
                            "linear",
                            "${Clicker}",
                            '1',
                            '0'
                        ],
                        [
                            "eid167",
                            "scaleX",
                            2250,
                            0,
                            "linear",
                            "${Chiv}",
                            '1.00608',
                            '1.00608'
                        ],
                        [
                            "eid166",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${Chiv}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid182",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${playingTxt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid183",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${playingTxt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "width",
                            0,
                            4500,
                            "linear",
                            "${twitchLogo}",
                            '84px',
                            '397px'
                        ],
                        [
                            "eid232",
                            "scaleY",
                            5250,
                            250,
                            "linear",
                            "${Clicker}",
                            '1.04987',
                            '0.7659'
                        ],
                        [
                            "eid106",
                            "location",
                            0,
                            4500,
                            "linear",
                            "${twitchLogo}",
                            [[160.01, 168.84, 0, 0, 0, 0,0],[170.12, 126.98, 0, 0, 0, 0,43.06]]
                        ],
                        [
                            "eid174",
                            "location",
                            4500,
                            250,
                            "linear",
                            "${twitchLogo}",
                            [[170.12, 126.98, 0, 0, 0, 0,0],[168.78, 131.67, 0, 0, 0, 0,4.88]]
                        ],
                        [
                            "eid130",
                            "top",
                            750,
                            0,
                            "linear",
                            "${CSGO}",
                            '-8px',
                            '-8px'
                        ],
                        [
                            "eid226",
                            "-webkit-transform-origin",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid246",
                            "-moz-transform-origin",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid247",
                            "-ms-transform-origin",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid248",
                            "msTransformOrigin",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid249",
                            "-o-transform-origin",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid250",
                            "transform-origin",
                            3750,
                            0,
                            "linear",
                            "${Clicker}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${CSGO}",
                            'block',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            750,
                            0,
                            "linear",
                            "${CSGO}",
                            'block',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${CSGO}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "location",
                            3750,
                            750,
                            "linear",
                            "${ClickBelowTxt}",
                            [[588, 63.96, 0, 0, 0, 0,0],[588, 214.05, 0, 0, 0, 0,150.09]]
                        ],
                        [
                            "eid112",
                            "height",
                            0,
                            4500,
                            "linear",
                            "${twitchLogo}",
                            '72px',
                            '325px'
                        ],
                        [
                            "eid245",
                            "height",
                            4500,
                            500,
                            "linear",
                            "${twitchLogo}",
                            '325px',
                            '337px'
                        ],
                        [
                            "eid139",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${RL}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid121",
                            "left",
                            0,
                            0,
                            "linear",
                            "${WoW}",
                            '177px',
                            '177px'
                        ],
                        [
                            "eid122",
                            "top",
                            0,
                            0,
                            "linear",
                            "${WoW}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid213",
                            "display",
                            0,
                            0,
                            "linear",
                            "${experiencingTxt}",
                            'none',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${experiencingTxt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${experiencingTxt}",
                            'block',
                            'block'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            5250,
                            250,
                            "linear",
                            "${Clicker}",
                            '1.04987',
                            '0.7659'
                        ],
                        [
                            "eid103",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${twitchLogo}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid251",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${twitchLogo}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid252",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${twitchLogo}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid253",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${twitchLogo}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid254",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${twitchLogo}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid255",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${twitchLogo}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid89",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${RL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${RL}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "twitchLink": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '230px', '40px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(100,65,165,1.00)'],
                            id: 'FollowButtonBckg',
                            stroke: [5, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 5, 5, 10, 3, 'rgba(129,95,192,0.76)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '230px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "width",
                            3000,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '230px',
                            '225px'
                        ],
                        [
                            "eid39",
                            "width",
                            3250,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '225px',
                            '230px'
                        ],
                        [
                            "eid46",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid44",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "left",
                            3000,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid43",
                            "left",
                            3250,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid38",
                            "height",
                            3000,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '40px',
                            '36px'
                        ],
                        [
                            "eid40",
                            "height",
                            3250,
                            250,
                            "linear",
                            "${FollowButtonBckg}",
                            '36px',
                            '40px'
                        ]
                    ]
                }
            },
            "followLink": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '230', '40', 'auto', 'auto'],
                            id: 'twitchLink',
                            symbolName: 'twitchLink',
                            type: 'rect'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'FollowMeText',
                            text: '<p style=\"margin: 0px;\">​Follow Me</p>',
                            type: 'text',
                            rect: ['61px', '6px', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '230px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid49",
                            "color",
                            3000,
                            250,
                            "linear",
                            "${FollowMeText}",
                            'rgba(255,255,255,1)',
                            'rgba(129,95,192,1.00)'
                        ],
                        [
                            "eid50",
                            "color",
                            3250,
                            250,
                            "linear",
                            "${FollowMeText}",
                            'rgba(129,95,192,1)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("TwitchWebBanner_edgeActions.js");
})("EDGE-50165037");
