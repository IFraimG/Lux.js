import { init } from "./framework";
import { p } from "./framework/element";

const firstname = "Pushok"
const lastname = "Stanishkin"

init("#app", p`Hello ${firstname} ${lastname} !`)
