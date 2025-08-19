import { Config, Data, Effect, Schema } from "effect";

/** Schema **/
class Pokemon extends Schema.Class<Pokemon>("Pokemon")({
    id: Schema.Number,
    order: Schema.Number,
    name: Schema.String,
    height: Schema.Number,
    weight: Schema.Number,
}) {}

/** Configuration **/
export const config = Config.string("StackExhangeAPIKey");

/** Errors **/
export class FetchError extends Data.TaggedError("FetchError")<{}> {}
export class JsonError extends Data.TaggedError("JsonError")<{}> {}

/** Implementation **/
/** Fetching and decoding Pokémon data **/
export const fetchRequest = (baseUrl: string) =>
    Effect.tryPromise({
        try: () => fetch(`${baseUrl}/api/v2/pokemon/garchomp/`),
        catch: () => new FetchError(),
    });

/** Parsing JSON response **/
export const jsonResponse = (response: Response) =>
    Effect.tryPromise({
        try: () => response.json(),
        catch: () => new JsonError(),
    });

/** Decoding Pokémon data using previously generated schema **/
export const decodePokemon = Schema.decodeUnknown(Pokemon);