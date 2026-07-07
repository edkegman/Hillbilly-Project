
const factsOverlay = document.getElementById("factsOverlay");

const broadbandPlans = {
    "fiber-value": {
        name: "Fiber Value Plan",
        price: "$49.99/mo",
        download: "100 Mbps",
        upload: "100 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "fiber-extra-value": {
        name: "Fiber Extra Value Plan",
        price: "$79.99/mo",
        download: "200 Mbps",
        upload: "200 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "fiber-select": {
        name: "Fiber Select Plan",
        price: "$99.99/mo",
        download: "500 Mbps",
        upload: "500 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "fiber-pro": {
        name: "Fiber Pro Plan",
        price: "$149.99/mo",
        download: "1 Gbps",
        upload: "1 Gbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-value": {
        name: "Wireless Value Plan",
        price: "$39.99/mo",
        download: "25 Mbps",
        upload: "5 Mbps",
        latency: "20-60ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-select": {
        name: "Wireless Select Plan",
        price: "$49.99/mo",
        download: "27 Mbps",
        upload: "5 Mbps",
        latency: "20-60ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-pro": {
        name: "Wireless Pro Plan",
        price: "$69.99/mo",
        download: "30 Mbps",
        upload: "8 Mbps",
        latency: "20-60ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-gamers": {
        name: "Wireless Gamers Plan",
        price: "$89.99/mo",
        download: "35 Mbps",
        upload: "10 Mbps",
        latency: "20-60ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-ultra": {
        name: "Wireless Ultra Plan",
        price: "$139.99/mo",
        download: "40 Mbps",
        upload: "10 Mbps",
        latency: "20-60ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "wireless-supercharged": {
        name: "Wireless Supercharged Plan",
        price: "$189.99/mo",
        download: "45 Mbps",
        upload: "10 Mbps",
        latency: "20-60ms",
        data: "Unlimited",
        equipment: "$10/mo"
    },

    "biz-fiber-basic": {
        name: "Business Fiber Basic Plan",
        price: "$79.99/mo",
        download: "100 Mbps",
        upload: "100 Mbps",
        latency: "18–28 ms",
        data: "Unlimited",
        equipment: "$10/mo",
        install: "None",
        id: "HBW-BIZ-FIBER-BASIC"
},

"biz-fiber-silver": {
    name: "Business Fiber Silver Plan",
    price: "$149.99/mo",
    download: "200 Mbps",
    upload: "200 Mbps",
    latency: "18–28 ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-FIBER-SILVER"
},

"biz-fiber-gold": {
    name: "Business Fiber Gold Plan",
    price: "$249.99/mo",
    download: "500 Mbps",
    upload: "500 Mbps",
    latency: "18–28 ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-FIBER-GOLD"
},

"biz-fiber-platinum": {
    name: "Business Fiber Platinum Plan",
    price: "$349.99/mo",
    download: "1000 Mbps",
    upload: "1000 Mbps",
    latency: "18–28 ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-FIBER-PLATINUM"
},

"biz-wireless-1": {
    name: "Business Wireless Biz-1 Plan",
    price: "$79.99/mo",
    download: "18 Mbps",
    upload: "5 Mbps",
    latency: "20-60ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "$200",
    id: "HBW-BIZ-WIRELESS-1"
},

"biz-wireless-2": {
    name: "Business Wireless Biz-2 Plan",
    price: "$99.99/mo",
    download: "20 Mbps",
    upload: "5 Mbps",
    latency: "20-60ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-WIRELESS-2"
},

"biz-wireless-3": {
    name: "Business Wireless Biz-3 Plan",
    price: "$149.99/mo",
    download: "22 Mbps",
    upload: "5 Mbps",
    latency: "20-60ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-WIRELESS-3"
},

"biz-wireless-4": {
    name: "Business Wireless Biz-4 Plan",
    price: "$199.99/mo",
    download: "25 Mbps",
    upload: "5 Mbps",
    latency: "20-60ms",
    data: "Unlimited",
    equipment: "$10/mo",
    install: "None",
    id: "HBW-BIZ-WIRELESS-4"
}
};


