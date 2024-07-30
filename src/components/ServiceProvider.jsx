import React, { useState } from "react";
import ServiceContext from "./ServiceContext";
import codelabIcon from ".././assets/images/CodeLab.png";
import towerIcon from ".././assets/images/Towers.png";
import niraIcon from ".././assets/images/Nira.png";
import hexaIcon from ".././assets/images/HexLab.png";
const ServiceProvider = ({ children }) => {
  const [allCardsVerified, setAllCardsVerified] = useState(false);
  const [selectedcatCard, setSelectedCatCard] = useState(null);
  const [catcard, SetCatCard] = useState([
    {
      id: 1,
      logo: towerIcon,
      title: "Verizon Number Information API",
      update: "updated 4 days  ago",
      review: "(22 Reviews)",
      desc: "This API provides detailed information about a phone number, such as the carrier, line type, and call routing details. It can be used for validating phone numbers, routing calls, and more.",
      ms: "360 ms",
      upgrade: "9.5",
      arrow: "100%",
      status: "Inprogress",
      api: "",
    },
    {
      id: 2,
      logo: niraIcon,
      title: "Verizon Push-to-Talk API",
      update: "updated 6 days  ago",
      review: "(18 Reviews)",
      desc: "This API allows developers to integrate push-to-talk (PTT) functionality into their applications.",
      ms: "760 ms",
      upgrade: "9.9",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 3,
      logo: hexaIcon,
      title: "Verizon Messaging Toolkit API",
      update: "updated 2 days  ago",
      review: "(21 Reviews)",
      desc: "This API provides a set of tools and resources for sending and receiving SMS and MMS messages on the Verizon network.",
      ms: "740 ms",
      upgrade: "9.8",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 4,
      logo: codelabIcon,
      title: "Verizon IoT Platform APIs",
      update: "updated 6 days  ago",
      review: "(23 Reviews)",
      desc: "These APIs provide developers with access to the Verizon IoT platform, which enables them to manage and monitor IoT devices, as well as collect and analyze data from those devices.",
      ms: "760 ms",
      upgrade: "9.9",
      arrow: "100%",
      status: "Inprogress",
    },
  ]);
  const [catcard2, SetCatCard2] = useState([
    {
      id: 5,
      logo: codelabIcon,
      title: "Verizon SMS API",
      update: "updated 3 days  ago",
      review: "(20 Reviews)",
      desc: "The Verizon SMS API is a set of tools and resources provided by Verizon to enable developers to integrate call management features into their applications. ",
      ms: "460 ms",
      upgrade: "9.7",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 6,
      logo: towerIcon,
      title: "Verizon Call Management API",
      update: "updated 7 days  ago",
      review: "(16 Reviews)",
      desc: "The Verizon Call Management API is a set of tools and resources provided by Verizon to enable developers to integrate call management features into their applications. ",
      ms: "680 ms",
      upgrade: "9.8",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 7,
      logo: niraIcon,
      title: "Verizon Location API",
      update: "updated 4 days  ago",
      review: "(28 Reviews)",
      desc: "Provides access to location-based services, allowing developers to retrieve the location of Verizon mobile devices.",
      ms: "870 ms",
      upgrade: "9.7",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 8,
      logo: hexaIcon,
      title: "Verizon In-App Messaging API",
      update: "updated 5 days  ago",
      review: "(18 Reviews)",
      desc: "The Verizon In-App Messaging API is a set of tools and resources provided by Verizon to enable developers to integrate call management features into their applications. ",
      ms: "870 ms",
      upgrade: "9.9",
      arrow: "100%",
      status: "Inprogress",
    },
  ]);
  const [catcard3, SetCatCard3] = useState([
    {
      id: 1,
      logo: towerIcon,
      title: "Verizon Billing Account Management API",
      update: "updated 3 days  ago",
      review: "(25 Reviews)",
      desc: "The Verizon Billing Account Management API provides the ability to manage billing accounts, including creating, updating, and deleting accounts, and querying account information. ",
      ms: "430 ms",
      upgrade: "9.5",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 2,
      logo: niraIcon,
      title: "Verizon Usage Management API",
      update: "updated 6 days  ago",
      review: "(13 Reviews)",
      desc: "The Verizon Usage Management API provides the ability to manage usage data, including submitting usage records, querying usage data, and managing usage data aggregation. ",
      ms: "360 ms",
      upgrade: "8.9",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 3,
      logo: hexaIcon,
      title: "Verizon Charging and Rating API",
      update: "updated 2 days  ago",
      review: "(16 Reviews)",
      desc: "This API provides the ability to manage charging and rating for services, including calculating charges for usage events, managing rating plans, and applying discounts and promotions.",
      ms: "750 ms",
      upgrade: "9.7",
      arrow: "100%",
      status: "Inprogress",
    },
    {
      id: 4,
      logo: codelabIcon,
      title: "Verizon Invoicing and Payment API ",
      update: "updated 6 days  ago",
      review: "(21 Reviews)",
      desc: "The Verizon Invoicing and Payment API provides the ability to manage invoicing and payments, including generating invoices, managing payment methods, and processing payments.",
      ms: "770 ms",
      upgrade: "9.8",
      arrow: "100%",
      status: "Inprogress",
    },
  ]);

  const handleCardVerified = (id) => {
    if (selectedcatCard === "cartcard1") {
      var selectedApiIndex = catcard.findIndex((api) => api.id === id);
      if (selectedApiIndex > -1) {
        var verifiedcard = catcard;
        verifiedcard[selectedApiIndex].status = "Verified";
        SetCatCard(verifiedcard);
      }
    } else if (selectedcatCard === "cartcard2") {
      var selectedApiIndex = catcard2.findIndex((api) => api.id === id);
      if (selectedApiIndex > -1) {
        var verifiedcard = catcard2;
        verifiedcard[selectedApiIndex].status = "Verified";
        SetCatCard2(verifiedcard);
      }
    } else if (selectedcatCard === "cartcard3") {
      var selectedApiIndex = catcard3.findIndex((api) => api.id === id);
      if (selectedApiIndex > -1) {
        var verifiedcard = catcard3;
        verifiedcard[selectedApiIndex].status = "Verified";
        SetCatCard3(verifiedcard);
      }
    }
  };

  const handleSetSelectedCard = (selCard) => {
    setSelectedCatCard(selCard);
  };

  return (
    <ServiceContext.Provider
      value={{
        allCardsVerified,
        handleCardVerified,
        catcard,
        catcard2,
        catcard3,
        selectedcatCard,
        handleSetSelectedCard,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
