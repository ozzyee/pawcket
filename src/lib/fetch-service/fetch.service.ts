import { FetchContract } from "./fetch.contract";

export class FetchService implements FetchContract {
   FetchParams: RequestInit = {
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
         "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
   };

   async get(url: string): Promise<unknown> {
      const response = await fetch(url, {
         method: "GET",
         mode: "cors",
         cache: "default",
      });
      return response.json();
   }

   async post(url: string, data?: unknown) {
      const response = await fetch(url, {
         method: "post",
         ...this.FetchParams,
         body: JSON.stringify(data),
      });

      return response.json();
   }

   async put(url: string, data?: unknown) {
      const response = await fetch(url, {
         method: "put",
         ...this.FetchParams,
         body: JSON.stringify(data),
      });

      return response.json();
   }

   async delete(url: string) {
      const response = await fetch(url, {
         method: "DELETE",
         mode: "cors",
         cache: "default",
      });
      return response.json();
   }
}
