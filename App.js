import React from 'react';
import ReactDOM from 'react-dom/client';

/*
FoodXpress
Components:
   header
      - logo
      - nav items
   body
     - search bar
     - search button
     - restaurant container
          - restaurant card
              - Img
              - name/title
              - rating
              - price for two
              - delivery time
              - cusine
   footer
      - copyright
      - links
      - address
      - contact
*/

const restaurants = [
  {
    info: {
      id: '554643',
      name: 'Third Wave Coffee',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpk2v4y846pWOhUF7YBaAWEQyCQhsQRZq-gacyDNx0Q&s',
      cloudinaryImageId: 'd96267738c19ec62acb5390e52faba41',
      locality: 'Connaught Place',
      areaName: 'Connaught Place',
      costForTwo: '₹400 for two',
      cuisines: ['Beverages', 'Pizzas'],
      avgRating: 4.5,
      parentId: '274773',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.5,
        serviceability: 'SERVICEABLE',
        slaString: '35-40 mins',
        lastMileTravelString: '4.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 20:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/third-wave-coffee-connaught-place-delhi-554643',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '330141',
      name: 'Love Poori Wala',
      url: 'https://media.istockphoto.com/id/928823336/photo/grilled-chicken-breast-fried-chicken-fillet-and-fresh-vegetable-salad-of-tomatoes-cucumbers.jpg?s=612x612&w=0&k=20&c=x6KbcglhT_oxKEzCoSM5E8abP3rlEZAt7jQhlAPZtoY=',
      cloudinaryImageId: 'ccspmmtwsj5gmeoxsicn',
      locality: 'Lala Jagan Nath Marg',
      areaName: 'Kamla Nagar',
      costForTwo: '₹100 for two',
      cuisines: ['North Indian', 'Snacks', 'Desserts'],
      avgRating: 4.1,
      veg: true,
      parentId: '13819',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.2,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '4.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/love-poori-wala-lala-jagan-nath-marg-kamla-nagar-delhi-330141',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '675567',
      name: 'Juggernaut',
      url: 'https://www.fastfoodmenuprices.com/wp-content/uploads/2018/06/Popeyes-Delivery.jpg',
      cloudinaryImageId: '1561318fb636d378666d71f4ef534272',
      locality: 'Barakhamba Road',
      areaName: 'Connaught Place',
      costForTwo: '₹1200 for two',
      cuisines: [
        'South Indian',
        'North Indian',
        'Fast Food',
        'Beverages',
        'Desserts',
        'Street Food',
      ],
      avgRating: 4.2,
      veg: true,
      parentId: '111778',
      avgRatingString: '4.2',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-16 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/juggernaut-barakhamba-road-connaught-place-delhi-675567',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '44972',
      name: 'Om di Hatti(Kamla Nagar)',
      url: 'https://www.forbesindia.com/media/images/2021/Dec/img_175063_whyisbiryanigettingbrandedalloverthecountry.jpg',
      cloudinaryImageId: 'ypoamjz9lkaxlsf6075j',
      locality: 'Shakti Nagar',
      areaName: 'Kamla Nagar',
      costForTwo: '₹150 for two',
      cuisines: ['North Indian', 'Fast Food', 'Snacks'],
      avgRating: 4.2,
      veg: true,
      parentId: '22243',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.8,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 20:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/om-di-hatti-kamla-nagar-shakti-nagar-kamla-nagar-delhi-44972',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '98352',
      name: 'Nagpal Di Hatti',
      url: 'https://icebergdriveinn.com/cdn/shop/articles/Fast-Food-How-It-Has-Evolved-in-the-Past-Decades.jpg?v=1625683335',
      cloudinaryImageId: 'tbprrdfgtamn6tnexyxp',
      locality: 'Geeta Colony',
      areaName: 'Geeta Colony',
      costForTwo: '₹200 for two',
      cuisines: ['North Indian'],
      avgRating: 4.4,
      parentId: '15569',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 20:45:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'UPTO ₹40',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/nagpal-di-hatti-geeta-colony-delhi-98352',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '45622',
      name: 'Gopal Sweets Corner (Kamla Nagar)',
      url: 'https://cdn0.weddingwire.in/article/1955/3_2/1280/jpg/65591-indian-sweets-binjal-pandya-lead-image.webp',
      cloudinaryImageId: 'ms0fyojyvisrduycbnby',
      locality: 'Kamla Nagar',
      areaName: 'GTB Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Sweets', 'Snacks', 'Street Food', 'Indian'],
      avgRating: 4.3,
      parentId: '89062',
      avgRatingString: '4.3',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.7,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 23:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/gopal-sweets-corner-kamla-nagar-kamla-nagar-gtb-nagar-delhi-45622',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '107452',
      name: 'Chaayos Chai+Snacks=Relax',
      url: 'https://madaboutkitchen.in/wp-content/uploads/2020/06/Nipattu-3-.jpg',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/1dbdf671-cbed-4fc1-8b43-faa0165112e9_107452.JPG',
      locality: 'Kashmiri Gate',
      areaName: 'Kashmiri Gate',
      costForTwo: '₹250 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Chaat',
        'Desserts',
        'Home Food',
        'Italian',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'Sweets',
      ],
      avgRating: 4.5,
      veg: true,
      parentId: '281782',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.9,
        serviceability: 'SERVICEABLE',
        slaString: '40-45 mins',
        lastMileTravelString: '2.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 23:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Cafe%20&%20Chai.png',
            description: 'Delivery!',
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Cafe%20&%20Chai.png',
                },
              },
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹90',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-kashmiri-gate-delhi-107452',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '253727',
      name: "McDonald's",
      url: 'https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg',
      cloudinaryImageId: '535fc9f9c135f7982317bbb6a64a1ffc',
      locality: 'Kashmere Gate Metro Station',
      areaName: 'Kashmiri Gate',
      costForTwo: '₹400 for two',
      cuisines: ['American'],
      avgRating: 4.2,
      parentId: '630',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.9,
        serviceability: 'SERVICEABLE',
        slaString: '35-40 mins',
        lastMileTravelString: '2.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-15 22:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Burger.png',
            description: 'Delivery!',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Burger.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '30% OFF',
        subHeader: 'UPTO ₹75',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/mcdonalds-kashmere-gate-metro-station-kashmiri-gate-delhi-253727',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '526516',
      name: 'Salad Days',
      url: 'https://www.eatingwell.com/thmb/sIf2Z1oNy9UjunVXOCBG5tHAav4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4518422-8b9bac307f7a4d7fb4379b8c647b806d.jpg',
      cloudinaryImageId: 'cfa1123ebf17413dc7d0a80c7361fab3',
      locality: 'Gole Market',
      areaName: 'Gole Market',
      costForTwo: '₹600 for two',
      cuisines: ['Salads'],
      avgRating: 4.6,
      parentId: '796',
      avgRatingString: '4.6',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.5,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '5.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2024-04-16 02:45:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-0cac5a13-ceb3-4d05-bab3-205dd4c9f44c',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/salad-days-gole-market-delhi-526516',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
];

const RestaurantCard = ({ info }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    url,
    sla: { deliveryTime },
  } = info;
  return (
    <div className="res-card">
      <img className="res-logo" src={url} alt="restaurant logo" />
      <div className="res-card-details">
        <h3 className="res-heading">{name}</h3>
        <div>
          <div className="eta-rating-container">
            <div className="rating">
              <img
                className="star-rating-logo"
                src="https://www.vhv.rs/dpng/d/502-5020339_circle-with-star-green-hd-png-download.png"
                alt="star rating logo"
              />
              <p>{avgRating}</p>
            </div>
            <p>ETA {deliveryTime} min</p>
            <p>{costForTwo}</p>
          </div>
        </div>
        <p className="cuisines">{cuisines.join(', ')}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} info={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-hot-food-logo-images-grill-stamp-bbq-vector-picture-image_10812270.png"
          alt="logo"
        />
        <p className="food-xpress">FoodXpress</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
