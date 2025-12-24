import React from "react";
import ReactDOM from "react-dom/client";
const element = <h1>This is React Element</h1>;
const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const restaurantList =   [
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
          "collectionId": "80471",
          "title": "Pancake",
          "description": "Blaze through the day with the help of a delicious pancake treat.",
          "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/1/1631948f-2cde-47ea-ac54-76dcedb11fe1_pic",
          "aspectRatio": "3.44",
          "cta": {
            "link": "swiggy://collectionV2?collection_id=80471&tags=layout_BAU_Contextual,pancake",
            "type": "collectionv2"
          },
          "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
          "count": "26 restaurants",
          "navBarConfig": {}
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
          "sortConfigs": [
            {
              "key": "relevance",
              "title": "Relevance (Default)",
              "selected": true,
              "defaultSelection": true
            },
            {
              "key": "deliveryTimeAsc",
              "title": "Delivery Time"
            },
            {
              "key": "modelBasedRatingDesc",
              "title": "Rating"
            },
            {
              "key": "costForTwoAsc",
              "title": "Cost: Low to High"
            },
            {
              "key": "costForTwoDesc",
              "title": "Cost: High to Low"
            }
          ],
          "restaurantCount": 26,
          "facetList": [
            {
              "label": "10 Mins Delivery",
              "id": "isRestaurantBolt",
              "selection": "SELECT_TYPE_SINGLESELECT",
              "facetInfo": [
                {
                  "label": "10 Mins Delivery",
                  "id": "isRestaurantBoltfacetquery0",
                  "analytics": {},
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_FLATTENED",
              "subLabel": "Filterby",
              "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
            },
            {
              "label": "Veg/Non-Veg",
              "id": "isVeg",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Non Veg",
                  "id": "isVegfacetquery0",
                  "analytics": {},
                  "openFilter": true
                },
                {
                  "label": "Pure Veg",
                  "id": "isVegfacetquery1",
                  "analytics": {},
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            },
            {
              "label": "Ratings",
              "id": "rating",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Ratings",
                  "id": "ratingfacetquery0",
                  "analytics": {},
                  "openFilter": true
                },
                {
                  "label": "Ratings 4.0+",
                  "id": "ratingfacetquery1",
                  "analytics": {},
                  "openFilter": true
                },
                {
                  "label": "Ratings 4.5+",
                  "id": "ratingfacetquery2",
                  "analytics": {},
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            },
            {
              "label": "Delivery Time",
              "id": "deliveryTime",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Less than 30 mins",
                  "id": "deliveryTimefacetquery0",
                  "analytics": {},
                  "openFilter": true
                },
                {
                  "label": "Less than 45 mins",
                  "id": "deliveryTimefacetquery1",
                  "analytics": {},
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            },
            {
              "label": "Cost For Two",
              "id": "costForTwo",
              "selection": "SELECT_TYPE_MULTISELECT",
              "facetInfo": [
                {
                  "label": "Less than Rs. 300",
                  "id": "costForTwofacetquery0",
                  "analytics": {},
                  "openFilter": true
                },
                {
                  "label": "Rs.300 - Rs.600",
                  "id": "costForTwofacetquery1",
                  "analytics": {},
                  "openFilter": true
                },
                {
                  "label": "Greater than Rs. 600",
                  "id": "costForTwofacetquery2",
                  "analytics": {},
                  "openFilter": true
                }
              ],
              "viewType": "VIEW_TYPE_HALF_CARD",
              "subLabel": "Filterby",
              "openFilter": true
            }
          ],
          "widgetId": "inlineFacetFilter"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          "layout": {
            "rows": 1,
            "widgetPadding": {
              "left": 16,
              "right": 16
            },
            "widgetTheme": {
              "defaultMode": {
                "backgroundColour": "#FFFFFF",
                "theme": "THEME_TYPE_LIGHT"
              },
              "darkMode": {
                "backgroundColour": "#1B3028",
                "theme": "THEME_TYPE_DARK"
              }
            }
          },
          "id": "restaurantCountWidget",
          "gridElements": {
            "infoWithStyle": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
              "text": "Restaurants to explore",
              "headerStyling": {
                "textSize": 15,
                "textColor": "text_color_highest_emphasis",
                "textFontName": "FONT_NAME_HEADER_H5",
                "maxLines": 1
              }
            }
          }
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "187384",
            "name": "Blue Tokai Coffee Roasters",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/d264b29f-2cd0-4c1f-acf2-a8770d27a7e1_187384.JPG",
            "locality": "Infantry Road",
            "areaName": "Central Bangalore",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Cafe",
              "Coffee",
              "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "2682",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.3K+",
            "promoted": true,
            "adTrackingId": "cid=3e912810-5e95-4207-a7af-43a927ee7d8b~p=3~adgrpid=3e912810-5e95-4207-a7af-43a927ee7d8b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=187384~plpr=COLLECTION~eid=e36ff26a-5b84-48bd-a9df-e5644410d03f~srvts=1766544976251~collid=80471",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 20:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹75 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "278"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "3e912810-5e95-4207-a7af-43a927ee7d8b"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=187384&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "448012",
            "name": "Third Wave Coffee",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/acf72ba5-41a4-42f6-ad68-4cea2208ef46_d07838fb-562e-40a7-898e-ea6ecfbc8fe9.jpg_compressed",
            "locality": "Vasanth Nagar",
            "areaName": "Vasanth Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Bakery",
              "Continental"
            ],
            "avgRating": 4.6,
            "parentId": "274773",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.2K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-25 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                        "description": "Delivery!"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹106",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.6",
                "ratingCount": "719"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=448012&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "792448",
            "name": "Suchali's Artisan Bakehouse",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/5/66e6c588-442c-4a20-bb75-a2dc87e46c1f_792448.JPG",
            "locality": "Shivajinagara",
            "areaName": "Central Bangalore",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Bakery",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "196351",
            "avgRatingString": "4.4",
            "totalRatingsString": "154",
            "promoted": true,
            "adTrackingId": "cid=821b2dbb-416c-469c-bd38-20973b446986~p=7~adgrpid=821b2dbb-416c-469c-bd38-20973b446986#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=792448~plpr=COLLECTION~eid=6b6a6cac-05e0-4739-8447-9bd34b0547e7~srvts=1766544976251~collid=80471",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 20:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹75 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "821b2dbb-416c-469c-bd38-20973b446986"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=792448&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "577056",
            "name": "SMOOR",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/8/e9c3648c-2b5a-415b-bb3c-ec322f9a7c72_577056.JPG",
            "locality": "Armane Nagar",
            "areaName": "Malleshwaram",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Asian",
              "Burgers",
              "Italian",
              "Thai",
              "Sushi",
              "Salads",
              "Pastas",
              "Pizzas",
              "Mexican",
              "Chinese"
            ],
            "avgRating": 4.6,
            "parentId": "3506",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.3K+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 3.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-25 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=577056&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "418475",
            "name": "NOTO Ice Cream and Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/12/00f56d7b-3246-4f28-a11b-43b53ecdbeca_418475.jpg",
            "locality": "Kacharakanahalli",
            "areaName": "Lingrajapuram",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts",
              "Healthy Food"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "492773",
            "avgRatingString": "4.6",
            "totalRatingsString": "947",
            "promoted": true,
            "adTrackingId": "cid=c7b6d590-f7ad-410b-b98b-f0f6a8bac962~p=10~adgrpid=c7b6d590-f7ad-410b-b98b-f0f6a8bac962#ag2~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=418475~plpr=COLLECTION~eid=3cd00b33-95a5-4795-89c6-84b18eccde91~srvts=1766544976251~collid=80471",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 7.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-25 02:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹69",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "c7b6d590-f7ad-410b-b98b-f0f6a8bac962"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=418475&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "1003268",
            "name": "Uncle Peter's Pancakes",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/29/20379995-b549-4660-8d0a-42cffc3f4131_0098a429-a535-4ab7-bfc1-afa8b95a6680.png_compressed",
            "locality": "Yeshwanthpur",
            "areaName": "New BEL Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Waffle",
              "Desserts",
              "American",
              "Continental",
              "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "11863",
            "avgRatingString": "4.4",
            "totalRatingsString": "493",
            "sla": {
              "deliveryTime": 35,
              "lastMileTravel": 6.4,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-25 00:30:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹129",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=1003268&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "168880",
            "name": "Chainaama",
            "cloudinaryImageId": "b6c5922b9d9a417797c94186e6bb041a",
            "locality": "2nd stage",
            "areaName": "Indiranagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
              "Snacks",
              "Bakery",
              "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "57267",
            "avgRatingString": "4.1",
            "totalRatingsString": "1.2K+",
            "promoted": true,
            "adTrackingId": "cid=3872779b-525e-43d7-9536-afb1989398c6~p=11~adgrpid=3872779b-525e-43d7-9536-afb1989398c6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=168880~plpr=COLLECTION~eid=232d9652-06f6-4f4d-9d92-c011afdf7753~srvts=1766544976251~collid=80471",
            "sla": {
              "deliveryTime": 58,
              "lastMileTravel": 8.8,
              "serviceability": "SERVICEABLE",
              "slaString": "55-65 mins",
              "lastMileTravelString": "8.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 23:59:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "3872779b-525e-43d7-9536-afb1989398c6"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=168880&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "327748",
            "name": "The Hole in the wall cafe",
            "cloudinaryImageId": "aduuzyfpu72fiz1wiheq",
            "locality": "3rd Block - Hrbr Layout",
            "areaName": "Kammanahalli/Kalyan Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "American"
            ],
            "avgRating": 4.6,
            "parentId": "11538",
            "avgRatingString": "4.6",
            "totalRatingsString": "8.7K+",
            "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 6.8,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "6.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 21:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=327748&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "709394",
            "name": "Foyer",
            "cloudinaryImageId": "qaxuqvgbvee7vo6iaboa",
            "locality": "Frazer Town",
            "areaName": "Frazer Town",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Indian",
              "South Indian",
              "Chinese",
              "Fast Food",
              "Pastas",
              "Pizzas",
              "Burgers",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.6,
            "parentId": "423873",
            "avgRatingString": "4.6",
            "totalRatingsString": "134",
            "promoted": true,
            "adTrackingId": "cid=a5844dd9-9632-4d4e-bd84-0dfa1a9c3a66~p=30~adgrpid=a5844dd9-9632-4d4e-bd84-0dfa1a9c3a66#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=709394~plpr=COLLECTION~eid=421ac70a-fb96-4e72-b0b1-db3e9e074a14~srvts=1766544976251~collid=80471",
            "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 22:15:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹80 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "176"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "a5844dd9-9632-4d4e-bd84-0dfa1a9c3a66"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=709394&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "17407",
            "name": "Cafe Terra",
            "cloudinaryImageId": "modmzswfet0ubojfrtfs",
            "locality": "Shanthinagara",
            "areaName": "Indiranagar",
            "costForTwo": "₹299 for two",
            "cuisines": [
              "Continental"
            ],
            "avgRating": 4.6,
            "parentId": "195",
            "avgRatingString": "4.6",
            "totalRatingsString": "12K+",
            "sla": {
              "deliveryTime": 50,
              "lastMileTravel": 7.4,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "7.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 22:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "2.4K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=17407&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "5596",
            "name": "Dolci - Cunningham Road",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/6/2ce40960-879b-4991-ad9d-b12a7f2fc32b_244194ed-4f80-4252-983d-45ec65fa5fde.jpg",
            "locality": "Cunningham Road",
            "areaName": "Central Bangalore",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Desserts",
              "Bakery",
              "Pizzas",
              "Salads",
              "Pastas"
            ],
            "avgRating": 4.2,
            "parentId": "628094",
            "avgRatingString": "4.2",
            "totalRatingsString": "5.1K+",
            "promoted": true,
            "adTrackingId": "cid=6d2a2eca-bc97-4c77-a5df-d2e2832dd484~p=31~adgrpid=6d2a2eca-bc97-4c77-a5df-d2e2832dd484#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=5596~plpr=COLLECTION~eid=da3eded7-ea62-4c44-8e16-5ecb954949c4~srvts=1766544976251~collid=80471",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 23:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹40 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.3",
                "ratingCount": "1.0K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "6d2a2eca-bc97-4c77-a5df-d2e2832dd484"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=5596&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "370442",
            "name": "ARAKU Coffee",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/26/d32f0e0a-1cd4-4b12-9092-bbf310cf5a4d_370442 (1).jpg",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Bakery",
              "Beverages",
              "Continental",
              "Desserts",
              "Healthy Food",
              "European"
            ],
            "avgRating": 4.4,
            "parentId": "35616",
            "avgRatingString": "4.4",
            "totalRatingsString": "649",
            "sla": {
              "deliveryTime": 59,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "slaString": "55-65 mins",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2025-12-24 22:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {},
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL",
              "logoCtx": {
                "text": "BENEFITS"
              }
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {},
              "commsStyling": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "maxDuration": "3000",
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
              "aggregatedRating": {
                "rating": "4.1",
                "ratingCount": "2.2K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {},
          "cta": {
            "link": "swiggy://menu?restaurant_id=370442&source=collection&query=pancakes",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
  ]

const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, avgRating, cuisines, sla } = props?.resData?.info;

    console.log(props?.resData);
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="restaurant-logo" />
            <div className="name">{name}</div>
            <div className="star rating" >{avgRating}⭐</div>
            <div className="cuisine">{cuisines?.join(", ")}</div>
            <div className="delivery-time">{sla?.deliveryTime} mins</div>
        </div>
    );
}

const BodyComponent = () => {
    return (
        <div className="restaurant-container">
            <div className="search-container">
                <input type="text" className="search-box" />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => {
                    if(restaurant?.card?.card?.info){
                       return <RestaurantCard key={restaurant.card.card.info?.id} resData={restaurant.card.card} />
                    }
                })}
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);