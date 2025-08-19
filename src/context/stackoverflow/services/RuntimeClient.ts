// only for client services
import { Layer, ManagedRuntime } from "effect";

const MainLayer = Layer.empty;

export const RuntimeClient = ManagedRuntime.make(MainLayer);