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
    | "../src/assets/icon-arcade.svg"
    | "../src/assets/icon-advanced.svg"
    | "../src/assets/icon-pro.svg"
    | "";
  plan_name: string;
  plan_price: number;
  plan_time: "yr" | "mo";
};

export let button_list: buttonType[] = [
  {
    plan_id: 1,
    plan_url: "../src/assets/icon-arcade.svg",
    plan_name: "Arcade",
    plan_price: 9,
    plan_time: "mo",
  },
  {
    plan_id: 2,
    plan_url: "../src/assets/icon-advanced.svg",
    plan_name: "Advanced",
    plan_price: 12,
    plan_time: "mo",
  },
  {
    plan_id: 3,
    plan_url: "../src/assets/icon-pro.svg",
    plan_name: "Pro",
    plan_price: 15,
    plan_time: "mo",
  },
  {
    plan_id: 4,
    plan_url: "../src/assets/icon-arcade.svg",
    plan_name: "Arcade",
    plan_price: 90,
    plan_time: "yr",
  },
  {
    plan_id: 5,
    plan_url: "../src/assets/icon-advanced.svg",
    plan_name: "Advanced",
    plan_price: 120,
    plan_time: "yr",
  },
  {
    plan_id: 6,
    plan_url: "../src/assets/icon-pro.svg",
    plan_name: "Pro",
    plan_price: 150,
    plan_time: "yr",
  },
];

//checkbox type
export type checkboxType = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  timeline: "yr" | "mo";
  checked: boolean;
};

export let checkbox_list: checkboxType[] = [
  {
    id: 1,
    title: "Online service",
    subtitle: " Access to multiplayer games",
    price: 10,
    timeline: "yr",
    checked: false,
  },
  {
    id: 2,
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 20,
    timeline: "yr",
    checked: false,
  },
  {
    id: 3,
    title: "Customizable profile",
    subtitle: "Custom them on your profile",
    price: 20,
    timeline: "yr",
    checked: false,
  },
  {
    id: 4,
    title: "Online service",
    subtitle: " Access to multiplayer games",
    price: 1,
    timeline: "mo",
    checked: false,
  },
  {
    id: 5,
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 2,
    timeline: "mo",
    checked: false,
  },
  {
    id: 6,
    title: "Customizable profile",
    subtitle: "Custom them on your profile",
    price: 2,
    timeline: "mo",
    checked: false,
  },
];

//the full data types
export type Data = {
  name: string;
  email: string;
  phone: string;
  plan_id: number;
  plan_url: string;
  plan_name: string;
  plan_price: number;
  plan_time: string;
  addon: checkboxType[];
};

let addon: checkboxType[] = [];

export let INITIAL_STATE: Data = {
  name: "",
  email: "",
  phone: "",
  plan_id: 1,
  plan_url: "../src/assets/icon-arcade.svg",
  plan_name: "Arcade",
  plan_price: 9,
  plan_time: "mo",
  addon: addon,
};

//check error
export type checkError = {
  new_name: boolean;
  new_email: boolean;
  new_phone: boolean;
};

export let ERROR: checkError = {
  new_name: true,
  new_email: true,
  new_phone: true,
};

//error messages
export type required = {
  msgName: string;
  msgEmail: string;
  msgPhone: string;
};

export let REQUIRED_STATE: required = {
  msgName: "",
  msgEmail: "",
  msgPhone: "",
};

//email pattern
export const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
