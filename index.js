import { init } from "./framework";
import { p } from "./framework/element";
import { User } from "./src/user";

const firstName = "Pushok"
const lastName = "Stanishkin"


init("#app", User({ firstName, lastName }))
