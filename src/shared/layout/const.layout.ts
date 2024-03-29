import { About } from "~/pages/Invitation/sections/About";
import { DressCode } from "~/pages/Invitation/sections/DressCode";
import { Form } from "~/pages/Invitation/sections/Form";
import { Place } from "~/pages/Invitation/sections/Place";
import { Timing } from "~/pages/Invitation/sections/Timing";

export const SECTIONS_CONFIG = [
  {
    label: "О мероприятии",
    id: "about",
    Section: About,
    bgColor: "#6a6e59",
  },
  {
    label: "Расписание",
    id: "timing",
    Section: Timing,
    bgColor: "#c1ab9c",
  },
  {
    label: "Дресс-код",
    id: "dressCode",
    Section: DressCode,
    bgColor: "#6a6e59",
  },
  {
    label: "Место проведения",
    id: "place",
    Section: Place,
    bgColor: "#c1ab9c",
  },
  {
    label: "Анкета",
    id: "form",
    Section: Form,
    bgColor: "#c1ab9c",
  },
];
