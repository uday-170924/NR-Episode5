import RestroCard from "./RestroCard";
import resObj from "../../utils/mockdata";
import { useState } from "react";
const Body = () => {
  //here listOfRestaurent is normal JS let variable but react needs to give superpowers to this js variable to get super powerful react variable (simply State Variable).
 //Normal JS Variable
  // let listOfRestaurents = [
  //   {
  //     info: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_334475.JPG",
  //       locality: "2nd Stage",
  //       areaName: "BTM Layout",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //       avgRating: 4.3,
  //       parentId: "547",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "9.1K+",
  //       sla: {
  //         deliveryTime: 25,
  //         lastMileTravel: 1.5,
  //         serviceability: "SERVICEABLE",
  //         slaString: "20-25 mins",
  //         lastMileTravelString: "1.5 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-11-05 02:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "40% OFF",
  //         subHeader: "UPTO ₹80",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //       externalRatings: {
  //         aggregatedRating: {
  //           rating: "--",
  //         },
  //       },
  //       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //     },
  //     analytics: {
  //       context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/city/bangalore/kfc-2nd-stage-btm-layout-rest334475",
  //       type: "WEBLINK",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "42060",
  //       name: "Sharief Bhai Biryani",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/7a62098a-6aad-4a11-8fe3-9c16a6d189ff_42060.jpg",
  //       locality: "Koramangala",
  //       areaName: "Koramangala",
  //       costForTwo: "₹400 for two",
  //       cuisines: [
  //         "Biryani",
  //         "Kebabs",
  //         "Mughlai",
  //         "Arabian",
  //         "South Indian",
  //         "Rolls & Wraps",
  //         "Street Food",
  //         "Fast Food",
  //         "Desserts",
  //         "Beverages",
  //       ],
  //       avgRating: 4.2,
  //       parentId: "469102",
  //       avgRatingString: "4.2",
  //       totalRatingsString: "51K+",
  //       sla: {
  //         deliveryTime: 26,
  //         lastMileTravel: 1.4,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "1.4 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-11-05 03:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "ITEMS",
  //         subHeader: "AT ₹199",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //       externalRatings: {
  //         aggregatedRating: {
  //           rating: "4.0",
  //           ratingCount: "4.6K+",
  //         },
  //         source: "GOOGLE",
  //         sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //       },
  //       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //     },
  //     analytics: {
  //       context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060",
  //       type: "WEBLINK",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "496612",
  //       name: "Wow! China",
  //       cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
  //       locality: "The Nexus Mall",
  //       areaName: "Koramangala",
  //       costForTwo: "₹300 for two",
  //       cuisines: [
  //         "Tibetan",
  //         "Chinese",
  //         "Asian",
  //         "Snacks",
  //         "Continental",
  //         "Desserts",
  //         "Beverages",
  //       ],
  //       avgRating: 4,
  //       parentId: "226836",
  //       avgRatingString: "4.0",
  //       totalRatingsString: "660",
  //       sla: {
  //         deliveryTime: 28,
  //         lastMileTravel: 1.6,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25-30 mins",
  //         lastMileTravelString: "1.6 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //       availability: {
  //         nextCloseTime: "2024-11-04 23:00:00",
  //         opened: true,
  //       },
  //       badges: {},
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {},
  //           textBased: {},
  //           textExtendedBadges: {},
  //         },
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "ITEMS",
  //         subHeader: "AT ₹129",
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           lottie: {},
  //           video: {},
  //         },
  //       },
  //       reviewsSummary: {},
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {},
  //       externalRatings: {
  //         aggregatedRating: {
  //           rating: "--",
  //         },
  //       },
  //       ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //     },
  //     analytics: {
  //       context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //     },
  //     cta: {
  //       link: "https://www.swiggy.com/city/bangalore/wow-china-the-nexus-mall-koramangala-rest496612",
  //       type: "WEBLINK",
  //     },
  //   },
  // ];

  //Local state variable -super powerful variable
  // let [listOfRestaurents,setlistOfRestaurents]=useState([
  // {
  //   info: {
  //     id: "334475",
  //     name: "KFC",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_334475.JPG",
  //     locality: "2nd Stage",
  //     areaName: "BTM Layout",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //     avgRating: 4.3,
  //     parentId: "547",
  //     avgRatingString: "4.3",
  //     totalRatingsString: "9.1K+",
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 1.5,
  //       serviceability: "SERVICEABLE",
  //       slaString: "20-25 mins",
  //       lastMileTravelString: "1.5 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 02:00:00",
  //       opened: true,
  //     },
  //     badges: {},
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {},
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "40% OFF",
  //       subHeader: "UPTO ₹80",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "--",
  //       },
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/kfc-2nd-stage-btm-layout-rest334475",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "42060",
  //     name: "Sharief Bhai Biryani",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/7a62098a-6aad-4a11-8fe3-9c16a6d189ff_42060.jpg",
  //     locality: "Koramangala",
  //     areaName: "Koramangala",
  //     costForTwo: "₹400 for two",
  //     cuisines: [
  //       "Biryani",
  //       "Kebabs",
  //       "Mughlai",
  //       "Arabian",
  //       "South Indian",
  //       "Rolls & Wraps",
  //       "Street Food",
  //       "Fast Food",
  //       "Desserts",
  //       "Beverages",
  //     ],
  //     avgRating: 4.2,
  //     parentId: "469102",
  //     avgRatingString: "4.2",
  //     totalRatingsString: "51K+",
  //     sla: {
  //       deliveryTime: 26,
  //       lastMileTravel: 1.4,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "1.4 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 03:00:00",
  //       opened: true,
  //     },
  //     badges: {},
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {},
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "ITEMS",
  //       subHeader: "AT ₹199",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "4.0",
  //         ratingCount: "4.6K+",
  //       },
  //       source: "GOOGLE",
  //       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "496612",
  //     name: "Wow! China",
  //     cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
  //     locality: "The Nexus Mall",
  //     areaName: "Koramangala",
  //     costForTwo: "₹300 for two",
  //     cuisines: [
  //       "Tibetan",
  //       "Chinese",
  //       "Asian",
  //       "Snacks",
  //       "Continental",
  //       "Desserts",
  //       "Beverages",
  //     ],
  //     avgRating: 4,
  //     parentId: "226836",
  //     avgRatingString: "4.0",
  //     totalRatingsString: "660",
  //     sla: {
  //       deliveryTime: 28,
  //       lastMileTravel: 1.6,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "1.6 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-04 23:00:00",
  //       opened: true,
  //     },
  //     badges: {},
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {},
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "ITEMS",
  //       subHeader: "AT ₹129",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "--",
  //       },
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/wow-china-the-nexus-mall-koramangala-rest496612",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "596949",
  //     name: "Olio - The Wood Fired Pizzeria",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/da31f33d-4eac-4452-a54f-47d76339af10_596949.jpg",
  //     locality: "Koramangala",
  //     areaName: "Koramangala",
  //     costForTwo: "₹300 for two",
  //     cuisines: ["Pizzas", "Italian"],
  //     avgRating: 4.3,
  //     parentId: "11633",
  //     avgRatingString: "4.3",
  //     totalRatingsString: "1.3K+",
  //     sla: {
  //       deliveryTime: 33,
  //       lastMileTravel: 2,
  //       serviceability: "SERVICEABLE",
  //       slaString: "30-35 mins",
  //       lastMileTravelString: "2.0 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 05:00:00",
  //       opened: true,
  //     },
  //     badges: {
  //       imageBadges: [
  //         {
  //           imageId: "newg.png",
  //           description: "Gourmet",
  //         },
  //       ],
  //     },
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {
  //           badgeObject: [
  //             {
  //               attributes: {
  //                 description: "Gourmet",
  //                 imageId: "newg.png",
  //               },
  //             },
  //           ],
  //         },
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "₹125 OFF",
  //       subHeader: "ABOVE ₹249",
  //       discountTag: "FLAT DEAL",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "3.7",
  //         ratingCount: "3",
  //       },
  //       source: "GOOGLE",
  //       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-koramangala-rest596949",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "718430",
  //     name: "The Pizza Bakery - Wood Fired Sourdough",
  //     cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
  //     locality: "BTM Layout",
  //     areaName: "Koramangala",
  //     costForTwo: "₹700 for two",
  //     cuisines: [
  //       "Pizzas",
  //       "Pastas",
  //       "Italian",
  //       "Desserts",
  //       "Continental",
  //       "Beverages",
  //     ],
  //     avgRating: 4.4,
  //     parentId: "522292",
  //     avgRatingString: "4.4",
  //     totalRatingsString: "1.7K+",
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 1.4,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "1.4 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-04 23:00:00",
  //       opened: true,
  //     },
  //     badges: {
  //       imageBadges: [
  //         {
  //           imageId: "Rxawards/_CATEGORY-Pizza.png",
  //           description: "Delivery!",
  //         },
  //       ],
  //     },
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {
  //           badgeObject: [
  //             {
  //               attributes: {
  //                 description: "Delivery!",
  //                 imageId: "Rxawards/_CATEGORY-Pizza.png",
  //               },
  //             },
  //           ],
  //         },
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "60% OFF",
  //       subHeader: "UPTO ₹120",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "--",
  //       },
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/the-pizza-bakery-wood-fired-sourdough-btm-layout-koramangala-rest718430",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "209557",
  //     name: "Subway",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/6591e288-b992-4aad-949b-9a874da06c50_209557.JPG",
  //     locality: "JNC College Road",
  //     areaName: "Koramangala",
  //     costForTwo: "₹350 for two",
  //     cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
  //     avgRating: 4.3,
  //     parentId: "2",
  //     avgRatingString: "4.3",
  //     totalRatingsString: "6.0K+",
  //     sla: {
  //       deliveryTime: 28,
  //       lastMileTravel: 1.3,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "1.3 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 01:00:00",
  //       opened: true,
  //     },
  //     badges: {
  //       imageBadges: [
  //         {
  //           imageId: "Rxawards/_CATEGORY-Sandwiches.png",
  //           description: "Delivery!",
  //         },
  //       ],
  //     },
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {
  //           badgeObject: [
  //             {
  //               attributes: {
  //                 description: "Delivery!",
  //                 imageId: "Rxawards/_CATEGORY-Sandwiches.png",
  //               },
  //             },
  //           ],
  //         },
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "ITEMS",
  //       subHeader: "AT ₹119",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "--",
  //       },
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/subway-jnc-college-road-koramangala-rest209557",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "307",
  //     name: "A2B - Adyar Ananda Bhavan",
  //     cloudinaryImageId: "gxe4mn4ubw70yx3flyar",
  //     locality: "BTM Layout",
  //     areaName: "Btm Layout",
  //     costForTwo: "₹300 for two",
  //     cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
  //     avgRating: 4.5,
  //     parentId: "22",
  //     avgRatingString: "4.5",
  //     totalRatingsString: "75K+",
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 1.4,
  //       serviceability: "SERVICEABLE",
  //       slaString: "20-25 mins",
  //       lastMileTravelString: "1.4 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-04 22:30:00",
  //       opened: true,
  //     },
  //     badges: {
  //       imageBadges: [
  //         {
  //           imageId: "Rxawards/_CATEGORY-South%20Indian.png",
  //           description: "Delivery!",
  //         },
  //       ],
  //     },
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {
  //           badgeObject: [
  //             {
  //               attributes: {
  //                 description: "Delivery!",
  //                 imageId: "Rxawards/_CATEGORY-South%20Indian.png",
  //               },
  //             },
  //           ],
  //         },
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "₹100 OFF",
  //       subHeader: "ABOVE ₹249",
  //       discountTag: "FLAT DEAL",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "4.1",
  //         ratingCount: "10K+",
  //       },
  //       source: "GOOGLE",
  //       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-btm-layout-rest307",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "819539",
  //     name: "MOJO Pizza - 2X Toppings",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/8e40a0af-a787-4729-816a-c9c6885b7278_819539.JPG",
  //     locality: "BTM Layout",
  //     areaName: "Madiwala",
  //     costForTwo: "₹250 for two",
  //     cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
  //     avgRating: 4.6,
  //     parentId: "11329",
  //     avgRatingString: "4.6",
  //     totalRatingsString: "437",
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 0.8,
  //       serviceability: "SERVICEABLE",
  //       slaString: "20-30 mins",
  //       lastMileTravelString: "0.8 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 02:00:00",
  //       opened: true,
  //     },
  //     badges: {},
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {},
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "₹100 OFF",
  //       subHeader: "ABOVE ₹299",
  //       discountTag: "FLAT DEAL",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "--",
  //       },
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-btm-layout-madiwala-rest819539",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "506324",
  //     name: "Louis Burger",
  //     cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
  //     locality: "6Th Block, Koramangala",
  //     areaName: "Koramangala",
  //     costForTwo: "₹600 for two",
  //     cuisines: ["Burgers", "American", "Fast Food"],
  //     avgRating: 4.3,
  //     parentId: "22485",
  //     avgRatingString: "4.3",
  //     totalRatingsString: "5.5K+",
  //     sla: {
  //       deliveryTime: 31,
  //       lastMileTravel: 2.1,
  //       serviceability: "SERVICEABLE",
  //       slaString: "30-35 mins",
  //       lastMileTravelString: "2.1 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 04:00:00",
  //       opened: true,
  //     },
  //     badges: {
  //       imageBadges: [
  //         {
  //           imageId: "newg.png",
  //           description: "Gourmet",
  //         },
  //       ],
  //     },
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {
  //           badgeObject: [
  //             {
  //               attributes: {
  //                 description: "Gourmet",
  //                 imageId: "newg.png",
  //               },
  //             },
  //           ],
  //         },
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "₹125 OFF",
  //       subHeader: "ABOVE ₹349",
  //       discountTag: "FLAT DEAL",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "--",
  //       },
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/louis-burger-6th-block-koramangala-rest506324",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "211192",
  //     name: "La Pino'z Pizza",
  //     cloudinaryImageId: "lczhp9lptdzbqn09nfns",
  //     locality: "2nd Stage",
  //     areaName: "BTM Layout",
  //     costForTwo: "₹250 for two",
  //     cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //     avgRating: 4.3,
  //     parentId: "4961",
  //     avgRatingString: "4.3",
  //     totalRatingsString: "11K+",
  //     sla: {
  //       deliveryTime: 27,
  //       lastMileTravel: 1.6,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "1.6 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 03:00:00",
  //       opened: true,
  //     },
  //     badges: {},
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {},
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "50% OFF",
  //       subHeader: "UPTO ₹100",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "4.2",
  //         ratingCount: "1.1K+",
  //       },
  //       source: "GOOGLE",
  //       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-2nd-stage-btm-layout-rest211192",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "65797",
  //     name: "Leon's - Burgers & Wings (Leon Grill)",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
  //     locality: "Koramangala",
  //     areaName: "Koramangala",
  //     costForTwo: "₹300 for two",
  //     cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
  //     avgRating: 4.5,
  //     parentId: "371281",
  //     avgRatingString: "4.5",
  //     totalRatingsString: "53K+",
  //     sla: {
  //       deliveryTime: 28,
  //       lastMileTravel: 2,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "2.0 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 04:00:00",
  //       opened: true,
  //     },
  //     badges: {},
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {},
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "₹125 OFF",
  //       subHeader: "ABOVE ₹299",
  //       discountTag: "FLAT DEAL",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "4.5",
  //         ratingCount: "4.0K+",
  //       },
  //       source: "GOOGLE",
  //       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
  //     type: "WEBLINK",
  //   },
  // },
  // {
  //   info: {
  //     id: "18973",
  //     name: "Nandhana Palace",
  //     cloudinaryImageId: "195876a3181ef63f76e45e3a7b49b585",
  //     locality: "Koramangala",
  //     areaName: "Koramangala",
  //     costForTwo: "₹500 for two",
  //     cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
  //     avgRating: 4.4,
  //     parentId: "2120",
  //     avgRatingString: "4.4",
  //     totalRatingsString: "37K+",
  //     sla: {
  //       deliveryTime: 30,
  //       lastMileTravel: 1.8,
  //       serviceability: "SERVICEABLE",
  //       slaString: "30-35 mins",
  //       lastMileTravelString: "1.8 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //     availability: {
  //       nextCloseTime: "2024-11-05 02:00:00",
  //       opened: true,
  //     },
  //     badges: {
  //       imageBadges: [
  //         {
  //           imageId: "Rxawards/_CATEGORY-Andhra.png",
  //           description: "Delivery!",
  //         },
  //       ],
  //     },
  //     isOpen: true,
  //     type: "F",
  //     badgesV2: {
  //       entityBadges: {
  //         imageBased: {
  //           badgeObject: [
  //             {
  //               attributes: {
  //                 description: "Delivery!",
  //                 imageId: "Rxawards/_CATEGORY-Andhra.png",
  //               },
  //             },
  //           ],
  //         },
  //         textBased: {},
  //         textExtendedBadges: {},
  //       },
  //     },
  //     aggregatedDiscountInfoV3: {
  //       header: "20% OFF",
  //       subHeader: "ABOVE ₹3000",
  //       discountTag: "FLAT DEAL",
  //     },
  //     differentiatedUi: {
  //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //       differentiatedUiMediaDetails: {
  //         lottie: {},
  //         video: {},
  //       },
  //     },
  //     reviewsSummary: {},
  //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //     restaurantOfferPresentationInfo: {},
  //     externalRatings: {
  //       aggregatedRating: {
  //         rating: "4.3",
  //         ratingCount: "8.1K+",
  //       },
  //       source: "GOOGLE",
  //       sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
  //     },
  //     ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //   },
  //   analytics: {
  //     context: "seo-data-70377232-808a-45da-aa91-0aa71a6cd9cd",
  //   },
  //   cta: {
  //     link: "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
  //     type: "WEBLINK",
  //   },
  // }])
  let [listOfRestaurents,setlistOfRestaurents]=useState(resObj);
  return (  
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          // onClick={() => {
          //   listOfRestaurents=listOfRestaurents.filter((res)=>res.info.avgRating>4.5)
          //   console.log(listOfRestaurents)
          // }}
          onClick={() => {
           const filteredLIst=listOfRestaurents  .filter(
            (res)=>res.info.avgRating>4
          );
            console.log(filteredLIst )
            setlistOfRestaurents(filteredLIst)
          }}
        >
          Top-rated Restaurant 
        </button>
      </div>
      <div className="restro-container">
        {listOfRestaurents.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
