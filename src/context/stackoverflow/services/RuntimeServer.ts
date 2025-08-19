// import services from the folder

import { Layer, ManagedRuntime } from "effect";
import { Api } from "./Api";

const MainLayer = Layer.mergeAll(Api.Default);

export const RuntimeServer = ManagedRuntime.make(MainLayer);