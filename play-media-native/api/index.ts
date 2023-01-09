import { getSelectedConnection } from "../helpers/connections";
import { store } from "../store";

type GraphQLResponseWithErrors = {
  errors: unknown[];
};

export type FetchOptions = {
  apiKey: string;
  previewUrl: string;
};

export async function fetchGraphQL(
  query: string,
  options: FetchOptions
): Promise<unknown> {
  const apiKey =
    "SlVLNUQzSGFCY0lmekdJekFlSWZITU92MnlhUldYL0VaME1BVHh5ZUljMD18aGMtZGVtby10ZWFtLXBsYXktbWVkaWEtZWE1YmE=";
  const endpointUrl =
    "https://content-api.sitecorecloud.io/api/content/v1/preview/graphql/";

  console.log("store.getState()", store.getState());

  try {
    return await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-GQL-Token": apiKey,
      },
      body: JSON.stringify({ query }),
    })
      .then((response: Response) => {
        const jsonResponsePromise = response.json();
        jsonResponsePromise.then((jsonResponse: unknown) => {
          const responseWithErrors = jsonResponse as GraphQLResponseWithErrors;
          if (
            responseWithErrors.errors &&
            responseWithErrors.errors.length > 0
          ) {
            console.error(
              "An error was returned by a GraphQL query. See the associated logged object for details.",
              responseWithErrors
            );
          }
        });
        return jsonResponsePromise;
      })
      .catch((error) => {
        return console.log(error);
      });
  } catch (error) {
    return console.log(error);
  }
}