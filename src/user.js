import { p } from "../framework/element";
import { onClick } from "../framework/event";

export const User = ({ firstName, lastName }) => p`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`