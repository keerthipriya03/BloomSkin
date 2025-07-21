const products = [
  {
    id: 1,
    name: "Aloe Vera Gel",
    brand: "Nature's Touch",
    price: "$6.99",
    image: "https://www.netmeds.com/images/product-v1/600x600/994206/boro_plus_body_gel_aloe_vera_60_ml_0_0.jpg",
    description: "Hydrating aloe vera gel for all skin types."
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    brand: "GlowSkin",
    price: "$14.99",
    image: "https://www.netmeds.com/images/product-v1/600x600/1156569/alziba_cares_20_vitamin_c_glowing_face_serum_50_ml_800416_0_0.jpg",
    description: "Brightens skin and reduces pigmentation."
  },
  {
    id: 4,
    name: "Sunscreen SPF 50",
    brand: "SunBlocker",
    price: "$11.25",
    image: "https://www.netmeds.com/images/product-v1/600x600/1149490/dermistry_natural_mineral_sunscreen_spf_50_uva_uvb_pa_protection_sensitive_skin_50_ml_1_hyaluronic_acid_hydra_nourishing_sunscreen_spf_50_uva_uvb_pa_protection_50_ml_780801_0_0.jpg",
    description: "Protects skin from harmful UV rays."
  },
  {
    id: 5,
    name: "Retinol Night Cream",
    brand: "Skin Renew",
    price: "$19.99",
    image: "https://i.notino.com/view/retinol/rtnanaw_kncr11__13.jpg",
    description: "Reduces wrinkles and boosts collagen."
  },
  {
    id: 6,
    name: "Charcoal Peel-Off Mask",
    brand: "PureChar",
    price: "$7.75",
    image: "https://tse1.mm.bing.net/th/id/OIP.CCwONG_MAGbN7HF1F7XAFwHaIp?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Removes blackheads and impurities."
  },
  {
    id: 8,
    name: "Cucumber Eye Gel",
    brand: "Soothing Naturals",
    price: "$8.45",
    image: "https://tse1.mm.bing.net/th/id/OIP.YjQwpmQJYpoaFqBaopd1PQHaIE?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Reduces puffiness and dark circles."
  },
  {
    id: 9,
    name: "Collagen Day Cream",
    brand: "YouthGlow",
    price: "$16.30",
    image: "https://tse1.mm.bing.net/th/id/OIP.C_QyT_uYJPLLdkJSwhmfigHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Boosts elasticity and firms skin."
  },
  {
    id: 10,
    name: "Micellar Water Cleanser",
    brand: "AquaSkin",
    price: "$6.20",
    image: "https://i5.walmartimages.com/asr/5088ff05-8b94-45b6-925d-1ed95952db6c_1.7e61da143e91186cb689353e3ecc4a4f.jpeg",
    description: "Gentle cleansing without drying."
  },
  {
    id: 11,
    name: "Rose Water Spray",
    brand: "FloralMist",
    price: "$4.50",
    image: "https://www.netmeds.com/images/product-v1/600x600/986344/dr_morepen_pure_natural_rose_water_spray_120_ml_0_0.jpg",
    description: "Soothes and tones irritated skin."
  },
  {
    id: 14,
    name: "Gentle Exfoliating Scrub",
    brand: "SmoothTouch",
    price: "$7.30",
    image: "https://th.bing.com/th/id/R.b9e7cb098b6bfab43865fd022de4df6b?rik=tQhRAabhKxQlMQ&riu=http%3a%2f%2fcdn1.feelunique.com%2fimg%2fproducts%2f32652%2fPalmer__039_s_Cocoa_Butter_Formula_Gentle_Exfoliating_Facial_Scrub_150g_1366705012.png&ehk=e1Osi%2fNbOl4UPH3FgjgBDSnXqrlXa8F77wwtwmpBQBc%3d&risl=&pid=ImgRaw&r=0",
    description: "Removes dead skin cells gently."
  },
  {
    id: 15,
    name: "Night Repair Oil",
    brand: "GlowRepair",
    price: "$17.50",
    image: "https://tse2.mm.bing.net/th/id/OIP.x6k4Nu7I-yzQQE5fk-8-gAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Rejuvenates skin overnight."
  },
  {
    id: 19,
    name: "Niacinamide Booster",
    brand: "EvenTone",
    price: "$15.99",
    image: "https://tse4.mm.bing.net/th/id/OIP.743Zve4zF3jV7K5a85ZnAAHaJk?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Improves texture and tone."
  },
  {
    id: 20,
    name: "Lavender Face Mist",
    brand: "AromaFresh",
    price: "$5.80",
    image: "https://th.bing.com/th/id/R.41d3af55cf41ca66afcf2d21cc0b915d?rik=sEFdNIepVvXYRg&riu=http%3a%2f%2fmoontouch.co%2fcdn%2fshop%2fproducts%2fLavenderMist.jpg%3fv%3d1686491816&ehk=KRIdRZ1Q8T%2fcLh3oRustzwPTdZh7aBxZ7pGS62PuJG4%3d&risl=&pid=ImgRaw&r=0",
    description: "Calms and refreshes the skin."
  },
  {
    id: 21,
    name: "Cocoa Butter Cream",
    brand: "SoftNourish",
    price: "$6.45",
    image: "https://www.netmeds.com/images/product-v1/600x600/831402/bakson_s_cocoa_butter_cream_125_gm_0.jpg",
    description: "Deeply moisturizing body and face."
  },
  {
    id: 22,
    name: "Glycolic Acid Toner",
    brand: "SmoothBase",
    price: "$11.50",
    image: "https://tse2.mm.bing.net/th/id/OIP.edFfCKgmVXbeb-sOAeskOgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Exfoliates and smooths the skin."
  },
  {
    id: 23,
    name: "Green Tea Face Mask",
    brand: "ZenSkin",
    price: "$8.90",
    image: "https://tse1.mm.bing.net/th/id/OIP.jXMzfQ8b-rWnM84dEbiPrwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Rich in antioxidants for detox."
  },
  {
    id: 24,
    name: "Oatmeal Cleanser",
    brand: "CalmClean",
    price: "$7.20",
    image: "https://richardbrentsalon.com/wp-content/uploads/2024/04/so_coconut_1.jpg",
    description: "Gentle cleanser for sensitive skin."
  },
  {
    id: 25,
    name: "Shea Butter Balm",
    brand: "ButterBloom",
    price: "$6.00",
    image: "https://tse4.mm.bing.net/th/id/OIP.IzaKVGvaFRbk3F9VzAxT9AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Ultra moisturizing skin balm."
  },
  {
    id: 26,
    name: "Foaming Facial Cleanser",
    brand: "BubblePure",
    price: "$9.00",
    image: "https://www.netmeds.com/images/product-v1/600x600/860219/nioglow_foaming_face_wash_60ml_114960_0_1.jpg",
    description: "Deep cleansing and oil control."
  },
  {
    id: 28,
    name: "Coconut Water Toner",
    brand: "TropicMist",
    price: "$4.99",
    image: "https://tse3.mm.bing.net/th/id/OIP.VLm-pqjTlCWqby16Wp__fAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Refreshes and hydrates instantly."
  },
  {
    id: 29,
    name: "Deep Pore Cleansing Pads",
    brand: "ClearIt",
    price: "$8.80",
    image: "https://tse3.mm.bing.net/th/id/OIP.SPSoonK5dQkDJBqvkDriRwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Quick acne-clearing wipes."
  },
];

export default products;
