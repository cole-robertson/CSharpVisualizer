import { IStackTrace } from "./interfaces";

const HOSTNAME = "http://localhost:50006";

export async function postCodeToAPI(code: string): Promise<IStackTrace[]>{
    
      const body = JSON.stringify(code);
      const response = await fetch(HOSTNAME + "/api/Debug/", {
        body,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST"
      });
      const json = await response.json();
      console.log(json);
      return json;
    
}