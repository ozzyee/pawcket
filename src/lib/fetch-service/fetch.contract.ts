/* eslint-disable no-unused-vars */
export interface FetchContract {
   get(url: string): Promise<unknown>;
   post(url: string, data?: unknown): Promise<unknown>;
   put(url: string, data?: unknown): Promise<unknown>;
   delete(url: string): Promise<unknown>;
}
