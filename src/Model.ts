//left component
export type arrayType = {
  id: number;
  text: string;
};

export let list: arrayType[] = [
  {
    id: 1,
    text: "Your Info",
  },
  {
    id: 2,
    text: "Select Plan",
  },
  {
    id: 3,
    text: "Add-ons",
  },
  {
    id: 4,
    text: "Summary",
  },
];

//button component
export type buttonType = {
  plan_id: number;
  plan_url:
    | "src/assets/icon-arcade.svg"
    | "src/assets/icon-advanced.svg"
    | "src/assets/icon-pro.svg";
  plan_name: string;
  plan_price: number;
  plan_time: "yearly" | "monthly";
};

export let button_list: buttonType[] = [
  {
    plan_id: 1,
    plan_url: "src/assets/icon-arcade.svg",
    plan_name: "Arcade",
    plan_price: 9,
    plan_time: "monthly",
  },
  {
    plan_id: 2,
    plan_url: "src/assets/icon-advanced.svg",
    plan_name: "Advanced",
    plan_price: 12,
    plan_time: "monthly",
  },
  {
    plan_id: 3,
    plan_url: "src/assets/icon-pro.svg",
    plan_name: "Pro",
    plan_price: 15,
    plan_time: "monthly",
  },
  {
    plan_id: 4,
    plan_url: "src/assets/icon-arcade.svg",
    plan_name: "Arcade",
    plan_price: 90,
    plan_time: "yearly",
  },
  {
    plan_id: 5,
    plan_url: "src/assets/icon-advanced.svg",
    plan_name: "Advanced",
    plan_price: 120,
    plan_time: "yearly",
  },
  {
    plan_id: 6,
    plan_url: "src/assets/icon-pro.svg",
    plan_name: "Pro",
    plan_price: 150,
    plan_time: "yearly",
  },
];

//checkbox type
export type checkboxType = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  timeline: "yearly" | "monthly";
  checked: boolean;
};

export let checkbox_list: checkboxType[] = [
  {
    id: 1,
    title: "Online service",
    subtitle: " Access to multiplayer games",
    price: 10,
    timeline: "yearly",
    checked: false,
  },
  {
    id: 2,
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 20,
    timeline: "yearly",
    checked: false,
  },
  {
    id: 3,
    title: "Customizable profile",
    subtitle: "Custom them on your profile",
    price: 20,
    timeline: "yearly",
    checked: false,
  },
  {
    id: 4,
    title: "Online service",
    subtitle: " Access to multiplayer games",
    price: 1,
    timeline: "monthly",
    checked: false,
  },
  {
    id: 5,
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 2,
    timeline: "monthly",
    checked: false,
  },
  {
    id: 6,
    title: "Customizable profile",
    subtitle: "Custom them on your profile",
    price: 2,
    timeline: "monthly",
    checked: false,
  },
];
