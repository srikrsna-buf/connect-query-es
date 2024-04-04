// Copyright 2021-2023 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export * from "@connectrpc/connect-query-core";
export { useTransport, TransportProvider } from "./use-transport.js";
export type { CreateInfiniteQueryOptions as UseInfiniteQueryOptions } from "./create-use-infinite-query-options.js";
export {
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from "./use-infinite-query.js";
export type { CreateQueryOptions as UseQueryOptions } from "./create-use-query-options.js";
export { useQuery, useSuspenseQuery } from "./use-query.js";
export type { UseMutationOptions } from "./use-mutation.js";
export { useMutation } from "./use-mutation.js";
export { defaultOptions } from "./default-options.js";
export { createUseInfiniteQueryOptions as createInfiniteQueryOptions } from "./create-use-infinite-query-options.js";
export { createUseQueryOptions as createQueryOptions } from "./create-use-query-options.js";
