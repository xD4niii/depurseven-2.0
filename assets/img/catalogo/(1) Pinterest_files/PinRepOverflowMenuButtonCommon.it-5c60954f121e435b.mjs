"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[64618],{367065:(e,a,l)=>{var n,_,r,i,t,E,I;l.r(a),l.d(a,{default:()=>T});let s={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"OverflowMenu_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"adMatchReason",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageThumbnailUrl",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,concreteType:"Embed",kind:"LinkedField",name:"embed",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"src",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},n,{alias:null,args:null,kind:"ScalarField",name:"isDownstreamPromotion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromoted",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"explicitlyFollowedByMe",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[i,t],storageKey:null},{alias:null,args:null,concreteType:"PinRecommendationReason",kind:"LinkedField",name:"recommendationReason",plural:!1,selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[_,r],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reason",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reasonId",storageKey:null},{alias:null,args:null,concreteType:"PinThroughProperties",kind:"LinkedField",name:"throughProperties",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"data",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:I=[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:E=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:I,storageKey:null},{alias:null,args:null,concreteType:"Interest",kind:"LinkedField",name:"sourceInterest",plural:!1,selections:[n,_,{alias:null,args:null,kind:"ScalarField",name:"urlName",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"videos",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"duration",storageKey:null},{alias:null,args:null,concreteType:"VideoList",kind:"LinkedField",name:"videoList",plural:!1,selections:E,storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isThirdPartyAd",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedIsPersonalized",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPromotedPartnership",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAttributionName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAdvertiserName",storageKey:null},{args:null,kind:"FragmentSpread",name:"usePinImageUrls_pin"},{args:null,kind:"FragmentSpread",name:"useShowAdReasons_pin"},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"__id",storageKey:null}]}],type:"Pin",abstractKey:null};s.hash="3f77eeee2c2dcc99ce638b4d36af7151";let T=s},890030:(e,a,l)=>{var n;l.r(a),l.d(a,{default:()=>r});let _={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinImageUrls_pin",selections:[{alias:"imageSpec_60x60",args:[{kind:"Literal",name:"spec",value:"60x60"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:'images(spec:"60x60")'},{alias:"imageSpec_136x136",args:[{kind:"Literal",name:"spec",value:"136x136"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"136x136")'},{alias:"imageSpec_170x",args:[{kind:"Literal",name:"spec",value:"170x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"170x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"474x")'},{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:"imageSpec_600x315",args:[{kind:"Literal",name:"spec",value:"600x315"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"600x315")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"orig")'}],type:"Pin",abstractKey:null};_.hash="b7ea441f2c20a68b323088ebe3847835";let r=_},419036:(e,a,l)=>{l.r(a),l.d(a,{default:()=>_});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useShowAdReasons_pin",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"showAdReasons",storageKey:null}]}],type:"Pin",abstractKey:null};n.hash="7c11cbdf443199e9eb4a313024a4aaad";let _=n},857479:(e,a,l)=>{l.r(a),l.d(a,{default:()=>g});var n,_,r=l(667294),i=l(545007);l(167912);var t=l(883119),E=l(38430),I=l(674410);let s=void 0!==n?n:n=l(419036);var T=l(333739),o=l(807023),N=l(140017),d=l(391884),S=l(661428),R=l(5859),O=l(564855),u=l(852733),P=l(879977),m=l(409403),c=l(825784),A=l(785893);let D=void 0!==_?_:_=l(367065),p=e=>{let a;return{__id:e.node_id??"",adMatchReason:e.ad_match_reason??null,board:e.board?{entityId:e.board.id,imageThumbnailUrl:e.board.image_thumbnail_url??null,name:e.board.name??null,url:e.board.url??null}:null,category:e.category??null,description:e.description??null,embed:e.embed?{src:e.embed.src??null,type:e.embed.type??null}:null,entityId:e.id??"",isDownstreamPromotion:e.is_downstream_promotion??null,isPromoted:e.is_promoted??null,pinner:e.pinner?{entityId:e.pinner.id,explicitlyFollowedByMe:e.pinner.explicitly_followed_by_me??null,fullName:e.pinner.full_name??null,imageSmallUrl:e.pinner.image_small_url??null,username:e.pinner.username??null}:null,promoter:e.promoter?{fullName:e.promoter.full_name??null,username:e.promoter.username??null}:null,recommendationReason:e.recommendation_reason?{board:e.recommendation_reason.board?{name:e.recommendation_reason.board.name??null,url:e.recommendation_reason.board.url??null}:null,reason:e.recommendation_reason.reason??null,reasonId:e.recommendation_reason.reason_id??"",throughProperties:(a=e.recommendation_reason.through_properties)&&Object.keys(a).map(e=>({key:e,data:a[e]}))}:null,richMetadata:e.rich_metadata?{products:e.rich_metadata.products?.map(()=>({__typename:"RichPinProductMetadata"}))??null}:null,richSummary:e.rich_summary?{products:e.rich_summary.products?.map(()=>({__typename:"RichPinProductMetadata"}))??null}:null,sourceInterest:e.source_interest?{entityId:e.source_interest.id??"",name:e.source_interest.name??null,urlName:e.source_interest.url_name??null}:null,videos:e.videos?{duration:e.videos.duration??null,videoList:e.videos.video_list?{__typename:"VideoList"}:null}:null,isThirdPartyAd:e.is_third_party_ad??null,promotedIsPersonalized:e.promoted_is_personalized??null,isEligibleForPromotedPartnership:e.is_eligible_for_promoted_partnership??null,promotedPartnershipAttributionName:e.promoted_partnership_attribution_name??null,promotedPartnershipAdvertiserName:e.promoted_partnership_advertiser_name??null,...T.tx}};function g({clientTrackingParams:e,feedbackData:a,feedbackType:l,pinKey:n,pinTitle:_,focusableRef:T,setForcePrimary:g,transparentBackground:C}){var L;let{data:y,childDataKey__DEPRECATED:M}=(0,o.Q)(D,n,{useLegacyAdapter:p}),G=(0,S.Z)(M),B=y.entityId,U=(0,N.ZP)(),{isBot:F,isSocialBot:k}=(0,R.B)(),h=(0,i.I0)(),{viewParameter:H,viewType:b,contextLogData:x}=(0,P.E)(),{reportPin:K}=(0,c.f)(),[Y,V]=(0,r.useState)(!1),[v,f]=(0,r.useState)(),w=(0,I.Z)(s,y).showAdReasons??!1,W=(L=y.isPromoted?60:50,function(e){return(0,O.ZP)((e||"").trim(),L)})(y.description??""),X=!!y.videos?.videoList,Z=()=>{h((0,m.i0)({id:B,nodeId:y.__id})),T?.current?.focus()},j=(0,u.Z)(101,{component:0,element:981,object_id_str:B,aux_data:{feedback_type:l}}),z=()=>{w||(Z(),g(!1),V(!1))},Q={isThirdPartyAd:y.isThirdPartyAd,promotedIsPersonalized:y.promotedIsPersonalized,isEligibleForPromotedPartnership:y.isEligibleForPromotedPartnership,promotedPartnershipAttributionName:y.promotedPartnershipAttributionName,promotedPartnershipAdvertiserName:y.promotedPartnershipAdvertiserName};return(0,A.jsxs)(r.Fragment,{children:[(0,A.jsx)(t.xu,{ref:f,"data-test-id":"feedback-button",children:(0,A.jsx)(t.hU,{accessibilityLabel:U.bt("Maggiori informazioni", "More information", "accessibility label for overflow menu button", undefined, true),bgColor:C?"transparent":"white",icon:"ellipsis",iconColor:"darkGray",onClick:()=>{Y?z():(g(!0),V(!0)),j()},size:"sm"})}),Y&&(0,A.jsx)(t.xu,{onFocus:e=>e.stopPropagation(),children:(0,A.jsx)(E.Z,{ad_match_reason:y.adMatchReason,anchor:v,bestPinImgSrc:(0,d.Z)({imagesUrls:G,embedSrc:y.embed?.src,embedType:y.embed?.type,excludeOriginals:!F&&!k}),board:y.board&&{entityId:y.board.entityId,imageThumbnailUrl:y.board.imageThumbnailUrl,name:y.board.name,url:y.board.url},clientTrackingParams:e,contextLogData:x,feedbackData:a,feedbackType:l,hideDownload:X,isPromoted:y.isPromoted??!1,nodeId:y.__id,onDismiss:z,onDownloadHideFlyout:()=>{g(!1),V(!1)},onHide:z,onLinkClick:()=>{Y&&z()},pinCategory:y.category,pinDescription:W,pinId:B,pinner:y.pinner&&{explicitlyFollowedByMe:y.pinner.explicitlyFollowedByMe,entityId:y.pinner.entityId,fullName:y.pinner.fullName,imageSmallUrl:y.pinner.imageSmallUrl,username:y.pinner.username},pinTitle:_,promoter:y.promoter&&{fullName:y.promoter.fullName,username:y.promoter.username},recommendationReason:y.recommendationReason&&{board:y.recommendationReason.board&&{name:y.recommendationReason.board.name,url:y.recommendationReason.board.url},reason:y.recommendationReason.reason,reasonId:y.recommendationReason.reasonId,throughProperties:y.recommendationReason.throughProperties},reportPin:()=>{K({pinId:y.entityId,isDownstreamPromotion:!!y.isDownstreamPromotion,hasPromoter:!!y.promoter,isProduct:!!y.richMetadata?.products?.length||!!y.richSummary?.products?.length,firstVideoDuration:y.videos?.duration,viewParameter:H,viewType:b,isThirdPartyAd:!!y.isThirdPartyAd,nodeId:y.__id,auxData:{board_id:x?.board_id,board_session_id:x?.board_session_id}}),z()},sourceInterest:y.sourceInterest&&{entityId:y.sourceInterest.entityId??"",name:y.sourceInterest.name,urlName:y.sourceInterest.urlName},thirdPartyAdAttributes:Q,viewParameter:H,viewType:b})})]})}},771177:(e,a,l)=>{l.d(a,{Z:()=>_});let n={REPIN_BOARD:1,USER_ACTIVITY:4,CLICKTHROUGH:9,FRESH_REPIN_BOARD:47,FRESH_CLICKTHROUGH:48,FRESH_USER_ACTIVITY:49,LOCAL_REPIN_BOARD:13,LOCAL_CLICKTHROUGH:32,LOCAL_USER_ACTIVITY:33,P2P_CLICKTHROUGH:28,INSTANT_PFY_NON_MATERIALIZABLE:36,FOLLOWED_INTEREST:5,TOPIC_BEST_PINS:70,EMBEDDING_BASED_BEST_PINS:173,RECOMMENDED_TOPICS:65,RECOMMENDED_GEO_INTERESTS:192,USER_SEQUENCE_INTERESTS_PINS:193,U2I_DNN_INTERESTS_PINS:196,PINNERSAGE_INTERESTS_PINS:197,GRAPHSAGE_USER_EMBEDDINGS_TO_ORGANIC_PINS:109,NAVBOOST_PFY:89,NAVBOOST_P2P:88,NOTIFICATION_NEWS_HUB:138,GEMINI_INTERESTS_FRESH:104,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN:100,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN_ENGAGEMENT:175,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_VIDEO:95,INTENTIONAL_DISTRIBUTION_DOMAIN:86,INTENTIONAL_DISTRIBUTION_TOPICS_STORY_PINS:91,INTENTIONAL_DISTRIBUTION_TOPICS_VIDEO:98,GRAPHSAGE_MULTI_PINS_TO_CREATOR_PINS_REALTIME:135,GRAPHSAGE_MULTI_PINS_TO_VIDEO_PINS_REALTIME:139,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS_REALTIME:140,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGEED_INTERESTS_VIDEO:118,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGED_INTERESTS_STORY_PIN:130,CREATOR_DIRECT_INJECT:148,USER_INTERESTS_TO_LONGTERM_CREATOR_PINS:141,GRAPHSAGE_PRODUCT_PINS:97,GRAPHSAGE_TML_PRODUCT_PINS:212,GRAPHSAGE_USER_EMBEDDINGS_TO_PINS:108,PROMOTED_PIN:15,UNKNOWN:0,RECOMMENDED_CATEGORY:2,COOKIE_MONSTER:3,REALTIME_P2B:6,REALTIME_P2B_CLOSEUP:22,RECOMMENDED_INTEREST:7,VISUALLY_SIMILAR:8,BOARD_FOLLOW:35,USER_FOLLOW:45,RECOMMENDED_COMMERCE:10,EVERYTHING_FEED:11,RECOMMENDED_LOCAL_PIN:12,SEARCH:46,P2P_USER_COMMERCE:16,COMMERCE_EDUCATION:17,LANDING_PAGE_PINS:18,FOLLOWING_FEED:19,POPULAR_FEED:20,P2P_DYNAMIC_GRID:23,LANDING_PAGE_INTEREST_PINS:24,FRESH_PIN_FROM_PIN:25,FRESH_PIN_FROM_INTEREST:26,FRESH_PIN_FROM_BOARD:27,SIFTER_VIDEO_FROM_INTEREST:39,SIFTER_PRODUCTS:57,SIFTER_DISTRIBUTION_A:50,SIFTER_DISTRIBUTION_B:51,SIFTER_DISTRIBUTION_C:52,SIFTER_DISTRIBUTION_D:53,SIFTER_DISTRIBUTION_E:54,SIFTER_ACTIVATION_EXPERIMENT:58,SIFTER_FRESHMAKER_PIN_FROM_INTEREST:40,P2P_CLOSEUP:29,P2P_LIKE:30,P2P_PIN_CREATE:31,INSTANT_PFY:34,DYNAMIC_INSERTION:37,DYNAMIC_INSERTION_BOARD_FOLLOW:38,HYPERLOCAL_INTEREST_BOARD:41,NUX_BOARD_FOLLOW_P2P:42,INDIRECT_DOMAIN_PIN:43,PIXIE_PINS_FOR_BOARD:44,SCREENSHOT_SAVE:55,TEXT_EMBEDDINGS:56,FRESH_TEXT_EMBEDDINGS:67,PREFETCH_LOAD:60,DIVERSE_TOPICS:62,QUIZ_RESULTS:63,INTENTIONAL_DISTRIBUTION_TOPICS:64,INTENTIONAL_DISTRIBUTION_TOPICS_THIRD_PARTY:90,INTENTIONAL_DISTRIBUTION_GEMINI:73,INTENTIONAL_DISTRIBUTION_GEMINI_V5:120,INTENTIONAL_DISTRIBUTION_SHOP_STYLE_STL:74,INTENTIONAL_DISTRIBUTION_GRAPHSAGE:78,INTENTIONAL_DISTRIBUTION_REPIN_BOARD:80,INTENTIONAL_DISTRIBUTION_CLICKTHROUGH:81,INTENTIONAL_DISTRIBUTION_USER_ACTIVITY:82,INTENTIONAL_DISTRIBUTION_CREATOR_BASELINE:92,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS:102,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_STORY_PIN:103,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_DIVERSITY:105,PIXIE_RECENT_ACTION:66,NATIVE_CONTENT_TOPICS:68,BUBBLE_OPEN_TOPICS:69,TOPIC_BEST_PINS_V2:77,DAILY_BEST_PINS:79,TOPIC_BEST_PINS_V3:101,TOPIC_BEST_STORY_PINS:164,REC_SEQ_STORY_PIN_CLS:165,DARK_PROMOTED_PIN:71,POST_EXPLORE_TOPICS:72,GRAPHSAGE_EMBEDDINGS:75,DEMOGRAPHIC_PFY:76,SHOPPING_STL:83,UNAUTH_PIXIE_P2B:84,UNAUTH_PIXIE_P2P:85,VIDEO_EMBEDDINGS:87,VIDEO_EMBEDDINGS_GEMINI_V5:121,GEMINI_V5_EMBEDDINGS_STATIC:93,GEMINI_V5_EMBEDDINGS_FRESH:94,GEMINI_V5_EMBEDDINGS_REALTIME:106,GEMINI_V5_EMBEDDINGS_STORYPIN:107,CURATED_VIDEO_INTEREST:96,GRAPHSAGE_PRODUCT_PINS_LONGER_HISTORY:112,GRAPHSAGE_SHOPPABLE_INSPIRATION:126,GRAPHSAGE_PRODUCT_PINS_EXPERIMENTAL:134,NUX_GRAPHSAGE:99,GRAPHSAGE_USER_EMBEDDINGS_TO_PRODUCT_PINS:110,GRAPHSAGE_VIDEO_PINS:113,RECBOOST_REPIN_BOARD:114,RECBOOST_CLICKTHROUGH:115,RECBOOST_USER_ACTIVITY:116,RECBOOST_CREATOR_BOARDS:129,RECOMMENDED_BOARDS:117,RECOMMENDED_ANNOTATION_BOARDS:136,RECOMMENDED_GRAPHSAGE_BOARDS:153,INTENTIONAL_DISTRIBUTION_RECOMMENDED_GRAPHSAGE_BOARDS:191,RECOMMENDED_CREATOR_BOARDS:124,ANNOTATION_REC_CREATOR_BOARDS:127,INTENTIONAL_DISTRIBUTION_MANUAL_INTERESTS_VIDEO:119,INTENTIONAL_DISTRIBUTION_INTERESTS_VIDEO:143,INTENTIONAL_DISTRIBUTION_INTERESTS_STORY_PIN:144,REPIN_CREATOR_BOARD:122,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS:123,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS_REALTIME:131,FRESH_SIG_FROM_BOARD:125,RECENT_ENGAGED_CREATOR_BOARDS:128,RECENT_ENGAGED_BOARDS:132,SHOPPING_CREATOR_REALTIME:133,GRAPHSAGE_BASED_RECOMMENDED_CREATOR_BOARDS:137,PIXIE_P2P:142,NEW_USE_CASE_PINS:145,RECBOOST_NEW_USE_CASES:146,SEARCHSAGE_PFY:147,SEARCHSAGE_SHOPPING_PFY:155,INTEREST_EXPLORATION:149,INTEREST_EXPLORATION_TRENDY_QUERIES:150,INTEREST_EXPLORATION_RELATED_INTERESTS:151,RECBOOST_INTERESTS:152,HF_STORY_SHOPPING_RETARGETING:154,RECBOOST_STORY_PINS:156,RECBOOST_STORY_BOARDS:157,PINNABILITY_EMBEDDINGS:158,PINNABILITY_FRESH_STORY_EMBEDDINGS:159,PINNABILITY_STORY_EMBEDDINGS:160,PINNABILITY_PRODUCT_PIN_EMBEDDINGS:195,PINNABILITY_FRESH_PRODUCT_PIN_EMBEDDINGS:209,PINNABILITY_TML_PRODUCT_PIN_EMBEDDINGS:213,PINNABILITY_MULTI_EMBEDDINGS:210,EXPLORATION_STORY_PINS:161,EXPLORATION_STORY_PINS_BASELINE:162,EXPLOITATION_STORY_PINS:163,ANNOTATION_REC_CREATOR_STORY_PINS:166,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS:167,IDEASTREAM_GRAPHSAGE_STORY_PINS:168,HF_EDUCATION_PIN_INSERTION:169,RP_EDUCATION_PIN_INSERTION:170,USER_TO_CREATOR_STORY_PINS:171,USER_TO_CREATOR_STORY_PINS_ENGAGEMENT:176,COENGAGEMENT_STORY_PINS:172,ANNOTATION_STORY_PINS:177,DISCOVER_STREAM_DEMOGRAPHIC_FALLBACK:178,DISCOVER_STREAM_CELEBRITY:179,GRAPHSAGE_SHOPIFY_VMP_PRODUCT_PINS:180,CREATOR_BEST_IDEA_PINS:181,INTEREST_BEST_IDEA_PINS:182,NAVBOOST_STORY_PINS:183,SHOPPING_DISTRIBUTION_PINS:185,WATCH_TAB_EHQ_STORIES:186,NOTIF_LEARNED_RETRIEVAL:187,NOTIF_DIRECT_INJECT:207,LANDING_PAGE_PIN_RECOMMENDATIONS:188,PINNERSAGE_LEARNED_EMBEDDINGS:189,RECGPT_CG_USER_TO_PINS:206,TOPIC_FEED:190,ORGANIC_COENGAGEMENT:211,RECBOOST_SHOPPING:214,RTC_IMPROVEMENT_TEST_1:501,RTC_IMPROVEMENT_TEST_2:502,RTC_IMPROVEMENT_TEST_3:503,RTC_IMPROVEMENT_TEST_4:504,RTC_IMPROVEMENT_TEST_5:505,RTC_IMPROVEMENT_TEST_6:506,RTC_IMPROVEMENT_TEST_7:507,RTC_IMPROVEMENT_TEST_8:508,RTC_IMPROVEMENT_TEST_9:509,RTC_IMPROVEMENT_TEST_10:510,RTC_IMPROVEMENT_TEST_11:511,RTC_IMPROVEMENT_TEST_12:512,RTC_IMPROVEMENT_TEST_13:513,RTC_IMPROVEMENT_TEST_14:514,RTC_IMPROVEMENT_TEST_15:515,RTC_BLENDER_TEST:516,P2P_COMMERCE:21,P2P:14,LENS_CAMERA_VISUALLY_SIMILAR:111,RECENT_FOLLOWED_INTEREST:59,RECENT_FOLLOWED_BOARD:61,GRAPHSAGE_SHOPIFY_VMP_MERCHANT_ACTIVATION_PRODUCT_PINS:174,FOLLOWED_INTEREST_SEO_BESPIN_EXPORATION:184,XPIXIE_TO_PRODUCT_PINS:194,SHOPPING_RECENTLY_VIEWED_MODULE_PINS:198,SHOPPING_RECENTLY_SAVED_MODULE_PINS:199,SHOPPING_BEST_SELLING_RECOMMENDED_BRAND_MODULE_PINS:200,SHOPPING_SHOP_THE_BOARD_MODULE_PINS:203,SHOPPING_ON_SALE_MODULE_PINS:204,SHOPPING_RECONSIDERATION_MODULE_PINS:215,SHOPPING_PRODUCT_CATEGORY_BASED_MODULE_PINS:205,SHOPPING_PRODUCT_CATEGORY_ON_SALE_MODULE_PINS:216,SHOPPING_BEST_SELLING_PRODUCT_CATEGORY_MODULE_PINS:217,SHOPPING_SHOP_SEARCH_MODULE_PINS:208,RECENTLY_VIEWED_ORGANIC_MODULE_PINS:201,RECENTLY_SAVED_ORGANIC_MODULE_PINS:202};function _({feedbackData:e,feedbackType:a,pinId:l,pinFeedbackType:_,recommendationReason:r,complaintReason:i,clientTrackingParams:t,isThirdPartyAd:E}){switch(a){case"search":return{action:"unrelatedSearchPin",actionOptions:{query:e?.query,pin_id:l}};case"related":return{action:"relatedPinHide",actionOptions:{pin:l}};case"newsHub":return{action:"newsHubPinHide",actionOptions:{pin_id:l,news_id:e?.newsId}};default:var I;let s="promoted"===a,T=(I=r?.reason)&&n[I],o=r?.reasonId??r?.board?.entityId,N={complaint_reason:i||0,pin_id:l,feedback_type:_||1,promoted:s};return T&&(N.recommendation_reason_id=T),o&&(N.through_id=o),r?.throughProperties&&(N.through_properties=r.throughProperties.reduce((e,a)=>{let{key:l,data:n}=a;return l&&(e[l]=[...e[l]||[],...n||[]]),e},{})),t&&(N.client_tracking_params=t),E&&(N.is_third_party_ad=E),{action:s?"promotedComplaint":"complaint",actionOptions:N}}}},391884:(e,a,l)=>{l.d(a,{Z:()=>n});function n({embedSrc:e,embedType:a,imagesUrls:l,preferredResolution:n,excludeOriginals:_}){if(!e&&!a&&!l)return"";if("gif"===a)return e||"";if(!l)return"";if(n){let e="474x"===n&&l["474x"]||"236x"===n&&l["236x"]||l["736x"];if(e)return e}let r=Object.keys(l).reduce((e,a)=>{try{let n=a.split("x")[0];if(Number.isNaN(Number(n)))return{...e,[a]:l[a]};return{...e,[n]:l[a]}}catch(a){return e}},{}),i=Object.keys(r);return _&&"orig"===i[i.length-1]&&i.pop(),r[i.pop()]||""}},661428:(e,a,l)=>{l.d(a,{Z:()=>i}),l(167912);var n,_=l(674410);let r=void 0!==n?n:n=l(890030),i=e=>{let a=(0,_.Z)(r,e);return[["60x60",a?.imageSpec_60x60],["136x136",a?.imageSpec_136x136],["170x",a?.imageSpec_170x],["236x",a?.imageSpec_236x],["474x",a?.imageSpec_474x],["564x",a?.imageSpec_564x],["736x",a?.imageSpec_736x],["600x315",a?.imageSpec_600x315],["orig",a?.imageSpec_orig]].reduce((e,[a,l])=>l?{...e,[a]:l.url}:e,{})}},564855:(e,a,l)=>{l.d(a,{ZP:()=>_,mP:()=>n});let n="…";function _(e,a=80,l=n,r=!1){let i;if(!e)return"";if(e.length<=a)return e;if(" "!==e[a-1]&&" "===e[a]||r)i=e.substring(0,a);else{let l=e.lastIndexOf(" ",a);i=e.substring(0,l)}return(i=i.replace(/[\- _,.<>:;+=*&@~\/\|!]*$/,""))+l}},598228:(e,a,l)=>{l.d(a,{Ag:()=>r,C0:()=>E,L1:()=>o,Vi:()=>i,YD:()=>T,kS:()=>_,oo:()=>t,p3:()=>N,vC:()=>I,vI:()=>s});var n=l(244413);let _="https://www.pinterest.com/business/hub/",r="https://www.pinterest.com/homefeed/",i="www.pinterest.com",t="https://help.pinterest.com",E=`${(0,n.Z)({site:"www"})}`,I=(0,n.Z)({site:"developers"}),s=`${(0,n.Z)({site:"sterling"})}`,T=`${(0,n.Z)({site:"analytics"})}`,o=`${(0,n.Z)({site:"trends"})}`,N=`${(0,n.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},604625:(e,a,l)=>{l.d(a,{Cq:()=>s,Dk:()=>o,Fk:()=>_,fS:()=>I,km:()=>T,lI:()=>i,lJ:()=>r,mS:()=>E,qW:()=>t});var n=l(883119);let _=new n.Ry(1),r=3,i=new n.Ry(r),t=2,E=new n.Ry(t),I=3,s=4,T=new n.Ry(5),o=new n.Ry(100)},825784:(e,a,l)=>{l.d(a,{X:()=>s,f:()=>I});var n=l(667294),_=l(342513),r=l(558273);function i(e=null,a){switch(a.type){case"REPORT_CONTENT_SHOW":return{id:a.payload.id,auxData:a.payload.auxData,isProduct:a.payload.isProduct,isPromoted:a.payload.isPromoted,parentId:a.payload.parentId,videoDuration:a.payload.videoDuration,viewParameter:a.payload.viewParameter,viewType:a.payload.viewType,type:a.payload.type,isThirdPartyAd:a.payload.isThirdPartyAd,nodeId:a.payload.nodeId};case"REPORT_CONTENT_DISMISS":return null;default:return e}}var t=l(785893);let{Provider:E,useHook:I}=(0,_.Z)("ReportData");function s({children:e}){let[a,l]=(0,n.useReducer)(i,null),_=(0,n.useCallback)(()=>l({type:"REPORT_CONTENT_DISMISS"}),[]),I=(0,n.useCallback)((e,a,n)=>l({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,parentId:a,videoDuration:null,viewParameter:null,viewType:null,type:n,nodeId:null}}),[]),s=(0,n.useCallback)((e,a,n)=>l({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:a,viewType:n,type:"conversation",nodeId:null}}),[]),T=(0,n.useCallback)(({id:e,viewParameter:a,viewType:n,nodeId:_})=>l({type:"REPORT_CONTENT_SHOW",payload:{id:e,isProduct:!1,isPromoted:!1,videoDuration:null,viewParameter:a,viewType:n,type:"pin",nodeId:_}}),[]),o=(0,n.useCallback)(({pinId:e,isDownstreamPromotion:a,hasPromoter:n,firstVideoDuration:_,isProduct:i,viewParameter:t,viewType:E,isThirdPartyAd:I,nodeId:s,auxData:T})=>{l({type:"REPORT_CONTENT_SHOW",payload:{id:e,auxData:T,isProduct:i,isPromoted:(0,r.jL)(a,n),videoDuration:_,viewParameter:t,viewType:E,type:"pin",isThirdPartyAd:I,nodeId:s}})},[]),N=(0,n.useMemo)(()=>({reportData:a,dismiss:_,reportComment:I,reportConversation:s,reportImage:T,reportPin:o}),[a,_,I,s,T,o]);return(0,t.jsx)(E,{value:N,children:e})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/PinRepOverflowMenuButtonCommon.it-5c60954f121e435b.mjs.map