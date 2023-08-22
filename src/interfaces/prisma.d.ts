
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>
/**
 * Model User_Artist
 * 
 */
export type User_Artist = $Result.DefaultSelection<Prisma.$User_ArtistPayload>
/**
 * Model Tracks
 * 
 */
export type Tracks = $Result.DefaultSelection<Prisma.$TracksPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs>;

  /**
   * `prisma.user_Artist`: Exposes CRUD operations for the **User_Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_Artists
    * const user_Artists = await prisma.user_Artist.findMany()
    * ```
    */
  get user_Artist(): Prisma.User_ArtistDelegate<ExtArgs>;

  /**
   * `prisma.tracks`: Exposes CRUD operations for the **Tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.tracks.findMany()
    * ```
    */
  get tracks(): Prisma.TracksDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Artist: 'Artist',
    User_Artist: 'User_Artist',
    Tracks: 'Tracks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'artist' | 'user_Artist' | 'tracks'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
          }
        }
      }
      User_Artist: {
        payload: Prisma.$User_ArtistPayload<ExtArgs>
        fields: Prisma.User_ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.User_ArtistFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User_ArtistFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>
          }
          findFirst: {
            args: Prisma.User_ArtistFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User_ArtistFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>
          }
          findMany: {
            args: Prisma.User_ArtistFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>[]
          }
          create: {
            args: Prisma.User_ArtistCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>
          }
          createMany: {
            args: Prisma.User_ArtistCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.User_ArtistDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>
          }
          update: {
            args: Prisma.User_ArtistUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>
          }
          deleteMany: {
            args: Prisma.User_ArtistDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.User_ArtistUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.User_ArtistUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$User_ArtistPayload>
          }
          aggregate: {
            args: Prisma.User_ArtistAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser_Artist>
          }
          groupBy: {
            args: Prisma.User_ArtistGroupByArgs<ExtArgs>,
            result: $Utils.Optional<User_ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.User_ArtistCountArgs<ExtArgs>,
            result: $Utils.Optional<User_ArtistCountAggregateOutputType> | number
          }
        }
      }
      Tracks: {
        payload: Prisma.$TracksPayload<ExtArgs>
        fields: Prisma.TracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findFirst: {
            args: Prisma.TracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findMany: {
            args: Prisma.TracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>[]
          }
          create: {
            args: Prisma.TracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          createMany: {
            args: Prisma.TracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          update: {
            args: Prisma.TracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          deleteMany: {
            args: Prisma.TracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          aggregate: {
            args: Prisma.TracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTracks>
          }
          groupBy: {
            args: Prisma.TracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TracksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TracksCountArgs<ExtArgs>,
            result: $Utils.Optional<TracksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    follows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    follows?: boolean | UserCountOutputTypeCountFollowsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: User_ArtistWhereInput
  }



  /**
   * Count Type ArtistCountOutputType
   */

  export type ArtistCountOutputType = {
    followers: number
    tracks: number
  }

  export type ArtistCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    followers?: boolean | ArtistCountOutputTypeCountFollowersArgs
    tracks?: boolean | ArtistCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: User_ArtistWhereInput
  }


  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    first_name: string | null
    last_name: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    follows?: boolean | User$followsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    follows?: boolean | User$followsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      follows: Prisma.$User_ArtistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      email: string
      first_name: string | null
      last_name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    follows<T extends User$followsArgs<ExtArgs> = {}>(args?: Subset<T, User$followsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.follows
   */
  export type User$followsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    where?: User_ArtistWhereInput
    orderBy?: User_ArtistOrderByWithRelationInput | User_ArtistOrderByWithRelationInput[]
    cursor?: User_ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_ArtistScalarFieldEnum | User_ArtistScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    artist_name: string | null
    external_url: string | null
    image_url: string | null
    genre: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    artist_name: string | null
    external_url: string | null
    image_url: string | null
    genre: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    artist_name: number
    external_url: number
    image_url: number
    genre: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    artist_name?: true
    external_url?: true
    image_url?: true
    genre?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    artist_name?: true
    external_url?: true
    image_url?: true
    genre?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    artist_name?: true
    external_url?: true
    image_url?: true
    genre?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    artist_name: string
    external_url: string | null
    image_url: string | null
    genre: string | null
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artist_name?: boolean
    external_url?: boolean
    image_url?: boolean
    genre?: boolean
    followers?: boolean | Artist$followersArgs<ExtArgs>
    tracks?: boolean | Artist$tracksArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    artist_name?: boolean
    external_url?: boolean
    image_url?: boolean
    genre?: boolean
  }

  export type ArtistInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    followers?: boolean | Artist$followersArgs<ExtArgs>
    tracks?: boolean | Artist$tracksArgs<ExtArgs>
    _count?: boolean | ArtistCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {
      followers: Prisma.$User_ArtistPayload<ExtArgs>[]
      tracks: Prisma.$TracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      artist_name: string
      external_url: string | null
      image_url: string | null
      genre: string | null
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }


  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ArtistFindManyArgs, 'select' | 'include'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends ArtistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>
    ): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    followers<T extends Artist$followersArgs<ExtArgs> = {}>(args?: Subset<T, Artist$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findMany'> | Null>;

    tracks<T extends Artist$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Artist$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artist model
   */ 
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly artist_name: FieldRef<"Artist", 'String'>
    readonly external_url: FieldRef<"Artist", 'String'>
    readonly image_url: FieldRef<"Artist", 'String'>
    readonly genre: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }


  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }


  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }


  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist.followers
   */
  export type Artist$followersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    where?: User_ArtistWhereInput
    orderBy?: User_ArtistOrderByWithRelationInput | User_ArtistOrderByWithRelationInput[]
    cursor?: User_ArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_ArtistScalarFieldEnum | User_ArtistScalarFieldEnum[]
  }


  /**
   * Artist.tracks
   */
  export type Artist$tracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude<ExtArgs> | null
  }



  /**
   * Model User_Artist
   */

  export type AggregateUser_Artist = {
    _count: User_ArtistCountAggregateOutputType | null
    _min: User_ArtistMinAggregateOutputType | null
    _max: User_ArtistMaxAggregateOutputType | null
  }

  export type User_ArtistMinAggregateOutputType = {
    user_id: string | null
    artist_id: string | null
  }

  export type User_ArtistMaxAggregateOutputType = {
    user_id: string | null
    artist_id: string | null
  }

  export type User_ArtistCountAggregateOutputType = {
    user_id: number
    artist_id: number
    _all: number
  }


  export type User_ArtistMinAggregateInputType = {
    user_id?: true
    artist_id?: true
  }

  export type User_ArtistMaxAggregateInputType = {
    user_id?: true
    artist_id?: true
  }

  export type User_ArtistCountAggregateInputType = {
    user_id?: true
    artist_id?: true
    _all?: true
  }

  export type User_ArtistAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Artist to aggregate.
     */
    where?: User_ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Artists to fetch.
     */
    orderBy?: User_ArtistOrderByWithRelationInput | User_ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User_ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User_Artists
    **/
    _count?: true | User_ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_ArtistMaxAggregateInputType
  }

  export type GetUser_ArtistAggregateType<T extends User_ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_Artist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_Artist[P]>
      : GetScalarType<T[P], AggregateUser_Artist[P]>
  }




  export type User_ArtistGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: User_ArtistWhereInput
    orderBy?: User_ArtistOrderByWithAggregationInput | User_ArtistOrderByWithAggregationInput[]
    by: User_ArtistScalarFieldEnum[] | User_ArtistScalarFieldEnum
    having?: User_ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_ArtistCountAggregateInputType | true
    _min?: User_ArtistMinAggregateInputType
    _max?: User_ArtistMaxAggregateInputType
  }

  export type User_ArtistGroupByOutputType = {
    user_id: string
    artist_id: string
    _count: User_ArtistCountAggregateOutputType | null
    _min: User_ArtistMinAggregateOutputType | null
    _max: User_ArtistMaxAggregateOutputType | null
  }

  type GetUser_ArtistGroupByPayload<T extends User_ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], User_ArtistGroupByOutputType[P]>
        }
      >
    >


  export type User_ArtistSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    artist_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_Artist"]>

  export type User_ArtistSelectScalar = {
    user_id?: boolean
    artist_id?: boolean
  }

  export type User_ArtistInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }


  export type $User_ArtistPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User_Artist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      user_id: string
      artist_id: string
    }, ExtArgs["result"]["user_Artist"]>
    composites: {}
  }


  type User_ArtistGetPayload<S extends boolean | null | undefined | User_ArtistDefaultArgs> = $Result.GetResult<Prisma.$User_ArtistPayload, S>

  type User_ArtistCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<User_ArtistFindManyArgs, 'select' | 'include'> & {
      select?: User_ArtistCountAggregateInputType | true
    }

  export interface User_ArtistDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User_Artist'], meta: { name: 'User_Artist' } }
    /**
     * Find zero or one User_Artist that matches the filter.
     * @param {User_ArtistFindUniqueArgs} args - Arguments to find a User_Artist
     * @example
     * // Get one User_Artist
     * const user_Artist = await prisma.user_Artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends User_ArtistFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, User_ArtistFindUniqueArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User_Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {User_ArtistFindUniqueOrThrowArgs} args - Arguments to find a User_Artist
     * @example
     * // Get one User_Artist
     * const user_Artist = await prisma.user_Artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends User_ArtistFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, User_ArtistFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User_Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistFindFirstArgs} args - Arguments to find a User_Artist
     * @example
     * // Get one User_Artist
     * const user_Artist = await prisma.user_Artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends User_ArtistFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, User_ArtistFindFirstArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User_Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistFindFirstOrThrowArgs} args - Arguments to find a User_Artist
     * @example
     * // Get one User_Artist
     * const user_Artist = await prisma.user_Artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends User_ArtistFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, User_ArtistFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more User_Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_Artists
     * const user_Artists = await prisma.user_Artist.findMany()
     * 
     * // Get first 10 User_Artists
     * const user_Artists = await prisma.user_Artist.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_ArtistWithUser_idOnly = await prisma.user_Artist.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends User_ArtistFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, User_ArtistFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User_Artist.
     * @param {User_ArtistCreateArgs} args - Arguments to create a User_Artist.
     * @example
     * // Create one User_Artist
     * const User_Artist = await prisma.user_Artist.create({
     *   data: {
     *     // ... data to create a User_Artist
     *   }
     * })
     * 
    **/
    create<T extends User_ArtistCreateArgs<ExtArgs>>(
      args: SelectSubset<T, User_ArtistCreateArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many User_Artists.
     *     @param {User_ArtistCreateManyArgs} args - Arguments to create many User_Artists.
     *     @example
     *     // Create many User_Artists
     *     const user_Artist = await prisma.user_Artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends User_ArtistCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, User_ArtistCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_Artist.
     * @param {User_ArtistDeleteArgs} args - Arguments to delete one User_Artist.
     * @example
     * // Delete one User_Artist
     * const User_Artist = await prisma.user_Artist.delete({
     *   where: {
     *     // ... filter to delete one User_Artist
     *   }
     * })
     * 
    **/
    delete<T extends User_ArtistDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, User_ArtistDeleteArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User_Artist.
     * @param {User_ArtistUpdateArgs} args - Arguments to update one User_Artist.
     * @example
     * // Update one User_Artist
     * const user_Artist = await prisma.user_Artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends User_ArtistUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, User_ArtistUpdateArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more User_Artists.
     * @param {User_ArtistDeleteManyArgs} args - Arguments to filter User_Artists to delete.
     * @example
     * // Delete a few User_Artists
     * const { count } = await prisma.user_Artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends User_ArtistDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, User_ArtistDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_Artists
     * const user_Artist = await prisma.user_Artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends User_ArtistUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, User_ArtistUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_Artist.
     * @param {User_ArtistUpsertArgs} args - Arguments to update or create a User_Artist.
     * @example
     * // Update or create a User_Artist
     * const user_Artist = await prisma.user_Artist.upsert({
     *   create: {
     *     // ... data to create a User_Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_Artist we want to update
     *   }
     * })
    **/
    upsert<T extends User_ArtistUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, User_ArtistUpsertArgs<ExtArgs>>
    ): Prisma__User_ArtistClient<$Result.GetResult<Prisma.$User_ArtistPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of User_Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistCountArgs} args - Arguments to filter User_Artists to count.
     * @example
     * // Count the number of User_Artists
     * const count = await prisma.user_Artist.count({
     *   where: {
     *     // ... the filter for the User_Artists we want to count
     *   }
     * })
    **/
    count<T extends User_ArtistCountArgs>(
      args?: Subset<T, User_ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_ArtistAggregateArgs>(args: Subset<T, User_ArtistAggregateArgs>): Prisma.PrismaPromise<GetUser_ArtistAggregateType<T>>

    /**
     * Group by User_Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends User_ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User_ArtistGroupByArgs['orderBy'] }
        : { orderBy?: User_ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, User_ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_ArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User_Artist model
   */
  readonly fields: User_ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User_Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User_ArtistClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User_Artist model
   */ 
  interface User_ArtistFieldRefs {
    readonly user_id: FieldRef<"User_Artist", 'String'>
    readonly artist_id: FieldRef<"User_Artist", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User_Artist findUnique
   */
  export type User_ArtistFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * Filter, which User_Artist to fetch.
     */
    where: User_ArtistWhereUniqueInput
  }


  /**
   * User_Artist findUniqueOrThrow
   */
  export type User_ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * Filter, which User_Artist to fetch.
     */
    where: User_ArtistWhereUniqueInput
  }


  /**
   * User_Artist findFirst
   */
  export type User_ArtistFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * Filter, which User_Artist to fetch.
     */
    where?: User_ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Artists to fetch.
     */
    orderBy?: User_ArtistOrderByWithRelationInput | User_ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Artists.
     */
    cursor?: User_ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Artists.
     */
    distinct?: User_ArtistScalarFieldEnum | User_ArtistScalarFieldEnum[]
  }


  /**
   * User_Artist findFirstOrThrow
   */
  export type User_ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * Filter, which User_Artist to fetch.
     */
    where?: User_ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Artists to fetch.
     */
    orderBy?: User_ArtistOrderByWithRelationInput | User_ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User_Artists.
     */
    cursor?: User_ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User_Artists.
     */
    distinct?: User_ArtistScalarFieldEnum | User_ArtistScalarFieldEnum[]
  }


  /**
   * User_Artist findMany
   */
  export type User_ArtistFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * Filter, which User_Artists to fetch.
     */
    where?: User_ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User_Artists to fetch.
     */
    orderBy?: User_ArtistOrderByWithRelationInput | User_ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User_Artists.
     */
    cursor?: User_ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User_Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User_Artists.
     */
    skip?: number
    distinct?: User_ArtistScalarFieldEnum | User_ArtistScalarFieldEnum[]
  }


  /**
   * User_Artist create
   */
  export type User_ArtistCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * The data needed to create a User_Artist.
     */
    data: XOR<User_ArtistCreateInput, User_ArtistUncheckedCreateInput>
  }


  /**
   * User_Artist createMany
   */
  export type User_ArtistCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User_Artists.
     */
    data: User_ArtistCreateManyInput | User_ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User_Artist update
   */
  export type User_ArtistUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * The data needed to update a User_Artist.
     */
    data: XOR<User_ArtistUpdateInput, User_ArtistUncheckedUpdateInput>
    /**
     * Choose, which User_Artist to update.
     */
    where: User_ArtistWhereUniqueInput
  }


  /**
   * User_Artist updateMany
   */
  export type User_ArtistUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User_Artists.
     */
    data: XOR<User_ArtistUpdateManyMutationInput, User_ArtistUncheckedUpdateManyInput>
    /**
     * Filter which User_Artists to update
     */
    where?: User_ArtistWhereInput
  }


  /**
   * User_Artist upsert
   */
  export type User_ArtistUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * The filter to search for the User_Artist to update in case it exists.
     */
    where: User_ArtistWhereUniqueInput
    /**
     * In case the User_Artist found by the `where` argument doesn't exist, create a new User_Artist with this data.
     */
    create: XOR<User_ArtistCreateInput, User_ArtistUncheckedCreateInput>
    /**
     * In case the User_Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User_ArtistUpdateInput, User_ArtistUncheckedUpdateInput>
  }


  /**
   * User_Artist delete
   */
  export type User_ArtistDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
    /**
     * Filter which User_Artist to delete.
     */
    where: User_ArtistWhereUniqueInput
  }


  /**
   * User_Artist deleteMany
   */
  export type User_ArtistDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User_Artists to delete
     */
    where?: User_ArtistWhereInput
  }


  /**
   * User_Artist without action
   */
  export type User_ArtistDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_Artist
     */
    select?: User_ArtistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: User_ArtistInclude<ExtArgs> | null
  }



  /**
   * Model Tracks
   */

  export type AggregateTracks = {
    _count: TracksCountAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  export type TracksMinAggregateOutputType = {
    id: string | null
    track_name: string | null
    release_date: string | null
    track_type: string | null
    external_url: string | null
    preview_url: string | null
    track_image: string | null
    artist_id: string | null
  }

  export type TracksMaxAggregateOutputType = {
    id: string | null
    track_name: string | null
    release_date: string | null
    track_type: string | null
    external_url: string | null
    preview_url: string | null
    track_image: string | null
    artist_id: string | null
  }

  export type TracksCountAggregateOutputType = {
    id: number
    track_name: number
    release_date: number
    track_type: number
    external_url: number
    preview_url: number
    track_image: number
    all_artists: number
    artist_id: number
    _all: number
  }


  export type TracksMinAggregateInputType = {
    id?: true
    track_name?: true
    release_date?: true
    track_type?: true
    external_url?: true
    preview_url?: true
    track_image?: true
    artist_id?: true
  }

  export type TracksMaxAggregateInputType = {
    id?: true
    track_name?: true
    release_date?: true
    track_type?: true
    external_url?: true
    preview_url?: true
    track_image?: true
    artist_id?: true
  }

  export type TracksCountAggregateInputType = {
    id?: true
    track_name?: true
    release_date?: true
    track_type?: true
    external_url?: true
    preview_url?: true
    track_image?: true
    all_artists?: true
    artist_id?: true
    _all?: true
  }

  export type TracksAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to aggregate.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksMaxAggregateInputType
  }

  export type GetTracksAggregateType<T extends TracksAggregateArgs> = {
        [P in keyof T & keyof AggregateTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracks[P]>
      : GetScalarType<T[P], AggregateTracks[P]>
  }




  export type TracksGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithAggregationInput | TracksOrderByWithAggregationInput[]
    by: TracksScalarFieldEnum[] | TracksScalarFieldEnum
    having?: TracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksCountAggregateInputType | true
    _min?: TracksMinAggregateInputType
    _max?: TracksMaxAggregateInputType
  }

  export type TracksGroupByOutputType = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url: string | null
    track_image: string
    all_artists: JsonValue[]
    artist_id: string
    _count: TracksCountAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  type GetTracksGroupByPayload<T extends TracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksGroupByOutputType[P]>
            : GetScalarType<T[P], TracksGroupByOutputType[P]>
        }
      >
    >


  export type TracksSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    track_name?: boolean
    release_date?: boolean
    track_type?: boolean
    external_url?: boolean
    preview_url?: boolean
    track_image?: boolean
    all_artists?: boolean
    artist_id?: boolean
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectScalar = {
    id?: boolean
    track_name?: boolean
    release_date?: boolean
    track_type?: boolean
    external_url?: boolean
    preview_url?: boolean
    track_image?: boolean
    all_artists?: boolean
    artist_id?: boolean
  }

  export type TracksInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistDefaultArgs<ExtArgs>
  }


  export type $TracksPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Tracks"
    objects: {
      artist: Prisma.$ArtistPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      track_name: string
      release_date: string
      track_type: string
      external_url: string
      preview_url: string | null
      track_image: string
      all_artists: Prisma.JsonValue[]
      artist_id: string
    }, ExtArgs["result"]["tracks"]>
    composites: {}
  }


  type TracksGetPayload<S extends boolean | null | undefined | TracksDefaultArgs> = $Result.GetResult<Prisma.$TracksPayload, S>

  type TracksCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TracksFindManyArgs, 'select' | 'include'> & {
      select?: TracksCountAggregateInputType | true
    }

  export interface TracksDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tracks'], meta: { name: 'Tracks' } }
    /**
     * Find zero or one Tracks that matches the filter.
     * @param {TracksFindUniqueArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TracksFindUniqueArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TracksFindUniqueOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindFirstArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.tracks.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.tracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tracksWithIdOnly = await prisma.tracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tracks.
     * @param {TracksCreateArgs} args - Arguments to create a Tracks.
     * @example
     * // Create one Tracks
     * const Tracks = await prisma.tracks.create({
     *   data: {
     *     // ... data to create a Tracks
     *   }
     * })
     * 
    **/
    create<T extends TracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksCreateArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tracks.
     *     @param {TracksCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const tracks = await prisma.tracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tracks.
     * @param {TracksDeleteArgs} args - Arguments to delete one Tracks.
     * @example
     * // Delete one Tracks
     * const Tracks = await prisma.tracks.delete({
     *   where: {
     *     // ... filter to delete one Tracks
     *   }
     * })
     * 
    **/
    delete<T extends TracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TracksDeleteArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tracks.
     * @param {TracksUpdateArgs} args - Arguments to update one Tracks.
     * @example
     * // Update one Tracks
     * const tracks = await prisma.tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpdateArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TracksDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracks.
     * @param {TracksUpsertArgs} args - Arguments to update or create a Tracks.
     * @example
     * // Update or create a Tracks
     * const tracks = await prisma.tracks.upsert({
     *   create: {
     *     // ... data to create a Tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracks we want to update
     *   }
     * })
    **/
    upsert<T extends TracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpsertArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.tracks.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TracksCountArgs>(
      args?: Subset<T, TracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksAggregateArgs>(args: Subset<T, TracksAggregateArgs>): Prisma.PrismaPromise<GetTracksAggregateType<T>>

    /**
     * Group by Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksGroupByArgs['orderBy'] }
        : { orderBy?: TracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tracks model
   */
  readonly fields: TracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TracksClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artist<T extends ArtistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistDefaultArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tracks model
   */ 
  interface TracksFieldRefs {
    readonly id: FieldRef<"Tracks", 'String'>
    readonly track_name: FieldRef<"Tracks", 'String'>
    readonly release_date: FieldRef<"Tracks", 'String'>
    readonly track_type: FieldRef<"Tracks", 'String'>
    readonly external_url: FieldRef<"Tracks", 'String'>
    readonly preview_url: FieldRef<"Tracks", 'String'>
    readonly track_image: FieldRef<"Tracks", 'String'>
    readonly all_artists: FieldRef<"Tracks", 'Json[]'>
    readonly artist_id: FieldRef<"Tracks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tracks findUnique
   */
  export type TracksFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks findUniqueOrThrow
   */
  export type TracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks findFirst
   */
  export type TracksFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks findFirstOrThrow
   */
  export type TracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks findMany
   */
  export type TracksFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks create
   */
  export type TracksCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tracks.
     */
    data: XOR<TracksCreateInput, TracksUncheckedCreateInput>
  }


  /**
   * Tracks createMany
   */
  export type TracksCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TracksCreateManyInput | TracksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tracks update
   */
  export type TracksUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tracks.
     */
    data: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
    /**
     * Choose, which Tracks to update.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks updateMany
   */
  export type TracksUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TracksWhereInput
  }


  /**
   * Tracks upsert
   */
  export type TracksUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tracks to update in case it exists.
     */
    where: TracksWhereUniqueInput
    /**
     * In case the Tracks found by the `where` argument doesn't exist, create a new Tracks with this data.
     */
    create: XOR<TracksCreateInput, TracksUncheckedCreateInput>
    /**
     * In case the Tracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
  }


  /**
   * Tracks delete
   */
  export type TracksDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter which Tracks to delete.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks deleteMany
   */
  export type TracksDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TracksWhereInput
  }


  /**
   * Tracks without action
   */
  export type TracksDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    artist_name: 'artist_name',
    external_url: 'external_url',
    image_url: 'image_url',
    genre: 'genre'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const User_ArtistScalarFieldEnum: {
    user_id: 'user_id',
    artist_id: 'artist_id'
  };

  export type User_ArtistScalarFieldEnum = (typeof User_ArtistScalarFieldEnum)[keyof typeof User_ArtistScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    id: 'id',
    track_name: 'track_name',
    release_date: 'release_date',
    track_type: 'track_type',
    external_url: 'external_url',
    preview_url: 'preview_url',
    track_image: 'track_image',
    all_artists: 'all_artists',
    artist_id: 'artist_id'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    follows?: User_ArtistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    follows?: User_ArtistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    follows?: User_ArtistListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    artist_name?: StringFilter<"Artist"> | string
    external_url?: StringNullableFilter<"Artist"> | string | null
    image_url?: StringNullableFilter<"Artist"> | string | null
    genre?: StringNullableFilter<"Artist"> | string | null
    followers?: User_ArtistListRelationFilter
    tracks?: TracksListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    artist_name?: SortOrder
    external_url?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    followers?: User_ArtistOrderByRelationAggregateInput
    tracks?: TracksOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    artist_name?: StringFilter<"Artist"> | string
    external_url?: StringNullableFilter<"Artist"> | string | null
    image_url?: StringNullableFilter<"Artist"> | string | null
    genre?: StringNullableFilter<"Artist"> | string | null
    followers?: User_ArtistListRelationFilter
    tracks?: TracksListRelationFilter
  }, "id" | "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    artist_name?: SortOrder
    external_url?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    artist_name?: StringWithAggregatesFilter<"Artist"> | string
    external_url?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Artist"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Artist"> | string | null
  }

  export type User_ArtistWhereInput = {
    AND?: User_ArtistWhereInput | User_ArtistWhereInput[]
    OR?: User_ArtistWhereInput[]
    NOT?: User_ArtistWhereInput | User_ArtistWhereInput[]
    user_id?: StringFilter<"User_Artist"> | string
    artist_id?: StringFilter<"User_Artist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }

  export type User_ArtistOrderByWithRelationInput = {
    user_id?: SortOrder
    artist_id?: SortOrder
    user?: UserOrderByWithRelationInput
    artist?: ArtistOrderByWithRelationInput
  }

  export type User_ArtistWhereUniqueInput = Prisma.AtLeast<{
    user_id_artist_id?: User_ArtistUser_idArtist_idCompoundUniqueInput
    AND?: User_ArtistWhereInput | User_ArtistWhereInput[]
    OR?: User_ArtistWhereInput[]
    NOT?: User_ArtistWhereInput | User_ArtistWhereInput[]
    user_id?: StringFilter<"User_Artist"> | string
    artist_id?: StringFilter<"User_Artist"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }, "user_id_artist_id">

  export type User_ArtistOrderByWithAggregationInput = {
    user_id?: SortOrder
    artist_id?: SortOrder
    _count?: User_ArtistCountOrderByAggregateInput
    _max?: User_ArtistMaxOrderByAggregateInput
    _min?: User_ArtistMinOrderByAggregateInput
  }

  export type User_ArtistScalarWhereWithAggregatesInput = {
    AND?: User_ArtistScalarWhereWithAggregatesInput | User_ArtistScalarWhereWithAggregatesInput[]
    OR?: User_ArtistScalarWhereWithAggregatesInput[]
    NOT?: User_ArtistScalarWhereWithAggregatesInput | User_ArtistScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User_Artist"> | string
    artist_id?: StringWithAggregatesFilter<"User_Artist"> | string
  }

  export type TracksWhereInput = {
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    id?: StringFilter<"Tracks"> | string
    track_name?: StringFilter<"Tracks"> | string
    release_date?: StringFilter<"Tracks"> | string
    track_type?: StringFilter<"Tracks"> | string
    external_url?: StringFilter<"Tracks"> | string
    preview_url?: StringNullableFilter<"Tracks"> | string | null
    track_image?: StringFilter<"Tracks"> | string
    all_artists?: JsonNullableListFilter<"Tracks">
    artist_id?: StringFilter<"Tracks"> | string
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }

  export type TracksOrderByWithRelationInput = {
    id?: SortOrder
    track_name?: SortOrder
    release_date?: SortOrder
    track_type?: SortOrder
    external_url?: SortOrder
    preview_url?: SortOrderInput | SortOrder
    track_image?: SortOrder
    all_artists?: SortOrder
    artist_id?: SortOrder
    artist?: ArtistOrderByWithRelationInput
  }

  export type TracksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    track_name?: StringFilter<"Tracks"> | string
    release_date?: StringFilter<"Tracks"> | string
    track_type?: StringFilter<"Tracks"> | string
    external_url?: StringFilter<"Tracks"> | string
    preview_url?: StringNullableFilter<"Tracks"> | string | null
    track_image?: StringFilter<"Tracks"> | string
    all_artists?: JsonNullableListFilter<"Tracks">
    artist_id?: StringFilter<"Tracks"> | string
    artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }, "id" | "id">

  export type TracksOrderByWithAggregationInput = {
    id?: SortOrder
    track_name?: SortOrder
    release_date?: SortOrder
    track_type?: SortOrder
    external_url?: SortOrder
    preview_url?: SortOrderInput | SortOrder
    track_image?: SortOrder
    all_artists?: SortOrder
    artist_id?: SortOrder
    _count?: TracksCountOrderByAggregateInput
    _max?: TracksMaxOrderByAggregateInput
    _min?: TracksMinOrderByAggregateInput
  }

  export type TracksScalarWhereWithAggregatesInput = {
    AND?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    OR?: TracksScalarWhereWithAggregatesInput[]
    NOT?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tracks"> | string
    track_name?: StringWithAggregatesFilter<"Tracks"> | string
    release_date?: StringWithAggregatesFilter<"Tracks"> | string
    track_type?: StringWithAggregatesFilter<"Tracks"> | string
    external_url?: StringWithAggregatesFilter<"Tracks"> | string
    preview_url?: StringNullableWithAggregatesFilter<"Tracks"> | string | null
    track_image?: StringWithAggregatesFilter<"Tracks"> | string
    all_artists?: JsonNullableListFilter<"Tracks">
    artist_id?: StringWithAggregatesFilter<"Tracks"> | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    follows?: User_ArtistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    first_name?: string | null
    last_name?: string | null
    follows?: User_ArtistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    follows?: User_ArtistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    follows?: User_ArtistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    first_name?: string | null
    last_name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistCreateInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
    followers?: User_ArtistCreateNestedManyWithoutArtistInput
    tracks?: TracksCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
    followers?: User_ArtistUncheckedCreateNestedManyWithoutArtistInput
    tracks?: TracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: User_ArtistUpdateManyWithoutArtistNestedInput
    tracks?: TracksUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: User_ArtistUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type User_ArtistCreateInput = {
    user: UserCreateNestedOneWithoutFollowsInput
    artist: ArtistCreateNestedOneWithoutFollowersInput
  }

  export type User_ArtistUncheckedCreateInput = {
    user_id: string
    artist_id: string
  }

  export type User_ArtistUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFollowsNestedInput
    artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type User_ArtistUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    artist_id?: StringFieldUpdateOperationsInput | string
  }

  export type User_ArtistCreateManyInput = {
    user_id: string
    artist_id: string
  }

  export type User_ArtistUpdateManyMutationInput = {

  }

  export type User_ArtistUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    artist_id?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateInput = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url?: string | null
    track_image: string
    all_artists?: TracksCreateall_artistsInput | InputJsonValue[]
    artist: ArtistCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateInput = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url?: string | null
    track_image: string
    all_artists?: TracksCreateall_artistsInput | InputJsonValue[]
    artist_id: string
  }

  export type TracksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
    artist?: ArtistUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
    artist_id?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateManyInput = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url?: string | null
    track_image: string
    all_artists?: TracksCreateall_artistsInput | InputJsonValue[]
    artist_id: string
  }

  export type TracksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
  }

  export type TracksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
    artist_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type User_ArtistListRelationFilter = {
    every?: User_ArtistWhereInput
    some?: User_ArtistWhereInput
    none?: User_ArtistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type User_ArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TracksListRelationFilter = {
    every?: TracksWhereInput
    some?: TracksWhereInput
    none?: TracksWhereInput
  }

  export type TracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    artist_name?: SortOrder
    external_url?: SortOrder
    image_url?: SortOrder
    genre?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    artist_name?: SortOrder
    external_url?: SortOrder
    image_url?: SortOrder
    genre?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    artist_name?: SortOrder
    external_url?: SortOrder
    image_url?: SortOrder
    genre?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArtistRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type User_ArtistUser_idArtist_idCompoundUniqueInput = {
    user_id: string
    artist_id: string
  }

  export type User_ArtistCountOrderByAggregateInput = {
    user_id?: SortOrder
    artist_id?: SortOrder
  }

  export type User_ArtistMaxOrderByAggregateInput = {
    user_id?: SortOrder
    artist_id?: SortOrder
  }

  export type User_ArtistMinOrderByAggregateInput = {
    user_id?: SortOrder
    artist_id?: SortOrder
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TracksCountOrderByAggregateInput = {
    id?: SortOrder
    track_name?: SortOrder
    release_date?: SortOrder
    track_type?: SortOrder
    external_url?: SortOrder
    preview_url?: SortOrder
    track_image?: SortOrder
    all_artists?: SortOrder
    artist_id?: SortOrder
  }

  export type TracksMaxOrderByAggregateInput = {
    id?: SortOrder
    track_name?: SortOrder
    release_date?: SortOrder
    track_type?: SortOrder
    external_url?: SortOrder
    preview_url?: SortOrder
    track_image?: SortOrder
    artist_id?: SortOrder
  }

  export type TracksMinOrderByAggregateInput = {
    id?: SortOrder
    track_name?: SortOrder
    release_date?: SortOrder
    track_type?: SortOrder
    external_url?: SortOrder
    preview_url?: SortOrder
    track_image?: SortOrder
    artist_id?: SortOrder
  }

  export type User_ArtistCreateNestedManyWithoutUserInput = {
    create?: XOR<User_ArtistCreateWithoutUserInput, User_ArtistUncheckedCreateWithoutUserInput> | User_ArtistCreateWithoutUserInput[] | User_ArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutUserInput | User_ArtistCreateOrConnectWithoutUserInput[]
    createMany?: User_ArtistCreateManyUserInputEnvelope
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
  }

  export type User_ArtistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<User_ArtistCreateWithoutUserInput, User_ArtistUncheckedCreateWithoutUserInput> | User_ArtistCreateWithoutUserInput[] | User_ArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutUserInput | User_ArtistCreateOrConnectWithoutUserInput[]
    createMany?: User_ArtistCreateManyUserInputEnvelope
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type User_ArtistUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_ArtistCreateWithoutUserInput, User_ArtistUncheckedCreateWithoutUserInput> | User_ArtistCreateWithoutUserInput[] | User_ArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutUserInput | User_ArtistCreateOrConnectWithoutUserInput[]
    upsert?: User_ArtistUpsertWithWhereUniqueWithoutUserInput | User_ArtistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_ArtistCreateManyUserInputEnvelope
    set?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    disconnect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    delete?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    update?: User_ArtistUpdateWithWhereUniqueWithoutUserInput | User_ArtistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_ArtistUpdateManyWithWhereWithoutUserInput | User_ArtistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_ArtistScalarWhereInput | User_ArtistScalarWhereInput[]
  }

  export type User_ArtistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<User_ArtistCreateWithoutUserInput, User_ArtistUncheckedCreateWithoutUserInput> | User_ArtistCreateWithoutUserInput[] | User_ArtistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutUserInput | User_ArtistCreateOrConnectWithoutUserInput[]
    upsert?: User_ArtistUpsertWithWhereUniqueWithoutUserInput | User_ArtistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: User_ArtistCreateManyUserInputEnvelope
    set?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    disconnect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    delete?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    update?: User_ArtistUpdateWithWhereUniqueWithoutUserInput | User_ArtistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: User_ArtistUpdateManyWithWhereWithoutUserInput | User_ArtistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: User_ArtistScalarWhereInput | User_ArtistScalarWhereInput[]
  }

  export type User_ArtistCreateNestedManyWithoutArtistInput = {
    create?: XOR<User_ArtistCreateWithoutArtistInput, User_ArtistUncheckedCreateWithoutArtistInput> | User_ArtistCreateWithoutArtistInput[] | User_ArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutArtistInput | User_ArtistCreateOrConnectWithoutArtistInput[]
    createMany?: User_ArtistCreateManyArtistInputEnvelope
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
  }

  export type TracksCreateNestedManyWithoutArtistInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type User_ArtistUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<User_ArtistCreateWithoutArtistInput, User_ArtistUncheckedCreateWithoutArtistInput> | User_ArtistCreateWithoutArtistInput[] | User_ArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutArtistInput | User_ArtistCreateOrConnectWithoutArtistInput[]
    createMany?: User_ArtistCreateManyArtistInputEnvelope
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type User_ArtistUpdateManyWithoutArtistNestedInput = {
    create?: XOR<User_ArtistCreateWithoutArtistInput, User_ArtistUncheckedCreateWithoutArtistInput> | User_ArtistCreateWithoutArtistInput[] | User_ArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutArtistInput | User_ArtistCreateOrConnectWithoutArtistInput[]
    upsert?: User_ArtistUpsertWithWhereUniqueWithoutArtistInput | User_ArtistUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: User_ArtistCreateManyArtistInputEnvelope
    set?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    disconnect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    delete?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    update?: User_ArtistUpdateWithWhereUniqueWithoutArtistInput | User_ArtistUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: User_ArtistUpdateManyWithWhereWithoutArtistInput | User_ArtistUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: User_ArtistScalarWhereInput | User_ArtistScalarWhereInput[]
  }

  export type TracksUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutArtistInput | TracksUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutArtistInput | TracksUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutArtistInput | TracksUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type User_ArtistUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<User_ArtistCreateWithoutArtistInput, User_ArtistUncheckedCreateWithoutArtistInput> | User_ArtistCreateWithoutArtistInput[] | User_ArtistUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: User_ArtistCreateOrConnectWithoutArtistInput | User_ArtistCreateOrConnectWithoutArtistInput[]
    upsert?: User_ArtistUpsertWithWhereUniqueWithoutArtistInput | User_ArtistUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: User_ArtistCreateManyArtistInputEnvelope
    set?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    disconnect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    delete?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    connect?: User_ArtistWhereUniqueInput | User_ArtistWhereUniqueInput[]
    update?: User_ArtistUpdateWithWhereUniqueWithoutArtistInput | User_ArtistUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: User_ArtistUpdateManyWithWhereWithoutArtistInput | User_ArtistUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: User_ArtistScalarWhereInput | User_ArtistScalarWhereInput[]
  }

  export type TracksUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutArtistInput | TracksUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutArtistInput | TracksUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutArtistInput | TracksUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFollowsInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput
    connect?: ArtistWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowsNestedInput = {
    create?: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowsInput
    upsert?: UserUpsertWithoutFollowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowsInput, UserUpdateWithoutFollowsInput>, UserUncheckedUpdateWithoutFollowsInput>
  }

  export type ArtistUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput
    upsert?: ArtistUpsertWithoutFollowersInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutFollowersInput, ArtistUpdateWithoutFollowersInput>, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type TracksCreateall_artistsInput = {
    set: InputJsonValue[]
  }

  export type ArtistCreateNestedOneWithoutTracksInput = {
    create?: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTracksInput
    connect?: ArtistWhereUniqueInput
  }

  export type TracksUpdateall_artistsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ArtistUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTracksInput
    upsert?: ArtistUpsertWithoutTracksInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<XOR<ArtistUpdateToOneWithWhereWithoutTracksInput, ArtistUpdateWithoutTracksInput>, ArtistUncheckedUpdateWithoutTracksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type User_ArtistCreateWithoutUserInput = {
    artist: ArtistCreateNestedOneWithoutFollowersInput
  }

  export type User_ArtistUncheckedCreateWithoutUserInput = {
    artist_id: string
  }

  export type User_ArtistCreateOrConnectWithoutUserInput = {
    where: User_ArtistWhereUniqueInput
    create: XOR<User_ArtistCreateWithoutUserInput, User_ArtistUncheckedCreateWithoutUserInput>
  }

  export type User_ArtistCreateManyUserInputEnvelope = {
    data: User_ArtistCreateManyUserInput | User_ArtistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type User_ArtistUpsertWithWhereUniqueWithoutUserInput = {
    where: User_ArtistWhereUniqueInput
    update: XOR<User_ArtistUpdateWithoutUserInput, User_ArtistUncheckedUpdateWithoutUserInput>
    create: XOR<User_ArtistCreateWithoutUserInput, User_ArtistUncheckedCreateWithoutUserInput>
  }

  export type User_ArtistUpdateWithWhereUniqueWithoutUserInput = {
    where: User_ArtistWhereUniqueInput
    data: XOR<User_ArtistUpdateWithoutUserInput, User_ArtistUncheckedUpdateWithoutUserInput>
  }

  export type User_ArtistUpdateManyWithWhereWithoutUserInput = {
    where: User_ArtistScalarWhereInput
    data: XOR<User_ArtistUpdateManyMutationInput, User_ArtistUncheckedUpdateManyWithoutUserInput>
  }

  export type User_ArtistScalarWhereInput = {
    AND?: User_ArtistScalarWhereInput | User_ArtistScalarWhereInput[]
    OR?: User_ArtistScalarWhereInput[]
    NOT?: User_ArtistScalarWhereInput | User_ArtistScalarWhereInput[]
    user_id?: StringFilter<"User_Artist"> | string
    artist_id?: StringFilter<"User_Artist"> | string
  }

  export type User_ArtistCreateWithoutArtistInput = {
    user: UserCreateNestedOneWithoutFollowsInput
  }

  export type User_ArtistUncheckedCreateWithoutArtistInput = {
    user_id: string
  }

  export type User_ArtistCreateOrConnectWithoutArtistInput = {
    where: User_ArtistWhereUniqueInput
    create: XOR<User_ArtistCreateWithoutArtistInput, User_ArtistUncheckedCreateWithoutArtistInput>
  }

  export type User_ArtistCreateManyArtistInputEnvelope = {
    data: User_ArtistCreateManyArtistInput | User_ArtistCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type TracksCreateWithoutArtistInput = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url?: string | null
    track_image: string
    all_artists?: TracksCreateall_artistsInput | InputJsonValue[]
  }

  export type TracksUncheckedCreateWithoutArtistInput = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url?: string | null
    track_image: string
    all_artists?: TracksCreateall_artistsInput | InputJsonValue[]
  }

  export type TracksCreateOrConnectWithoutArtistInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
  }

  export type TracksCreateManyArtistInputEnvelope = {
    data: TracksCreateManyArtistInput | TracksCreateManyArtistInput[]
    skipDuplicates?: boolean
  }

  export type User_ArtistUpsertWithWhereUniqueWithoutArtistInput = {
    where: User_ArtistWhereUniqueInput
    update: XOR<User_ArtistUpdateWithoutArtistInput, User_ArtistUncheckedUpdateWithoutArtistInput>
    create: XOR<User_ArtistCreateWithoutArtistInput, User_ArtistUncheckedCreateWithoutArtistInput>
  }

  export type User_ArtistUpdateWithWhereUniqueWithoutArtistInput = {
    where: User_ArtistWhereUniqueInput
    data: XOR<User_ArtistUpdateWithoutArtistInput, User_ArtistUncheckedUpdateWithoutArtistInput>
  }

  export type User_ArtistUpdateManyWithWhereWithoutArtistInput = {
    where: User_ArtistScalarWhereInput
    data: XOR<User_ArtistUpdateManyMutationInput, User_ArtistUncheckedUpdateManyWithoutArtistInput>
  }

  export type TracksUpsertWithWhereUniqueWithoutArtistInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutArtistInput, TracksUncheckedUpdateWithoutArtistInput>
    create: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutArtistInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutArtistInput, TracksUncheckedUpdateWithoutArtistInput>
  }

  export type TracksUpdateManyWithWhereWithoutArtistInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutArtistInput>
  }

  export type TracksScalarWhereInput = {
    AND?: TracksScalarWhereInput | TracksScalarWhereInput[]
    OR?: TracksScalarWhereInput[]
    NOT?: TracksScalarWhereInput | TracksScalarWhereInput[]
    id?: StringFilter<"Tracks"> | string
    track_name?: StringFilter<"Tracks"> | string
    release_date?: StringFilter<"Tracks"> | string
    track_type?: StringFilter<"Tracks"> | string
    external_url?: StringFilter<"Tracks"> | string
    preview_url?: StringNullableFilter<"Tracks"> | string | null
    track_image?: StringFilter<"Tracks"> | string
    all_artists?: JsonNullableListFilter<"Tracks">
    artist_id?: StringFilter<"Tracks"> | string
  }

  export type UserCreateWithoutFollowsInput = {
    id: string
    email: string
    first_name?: string | null
    last_name?: string | null
  }

  export type UserUncheckedCreateWithoutFollowsInput = {
    id: string
    email: string
    first_name?: string | null
    last_name?: string | null
  }

  export type UserCreateOrConnectWithoutFollowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
  }

  export type ArtistCreateWithoutFollowersInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
    tracks?: TracksCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutFollowersInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
    tracks?: TracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowsInput = {
    update: XOR<UserUpdateWithoutFollowsInput, UserUncheckedUpdateWithoutFollowsInput>
    create: XOR<UserCreateWithoutFollowsInput, UserUncheckedCreateWithoutFollowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowsInput, UserUncheckedUpdateWithoutFollowsInput>
  }

  export type UserUpdateWithoutFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutFollowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUpsertWithoutFollowersInput = {
    update: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtistUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutFollowersInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateWithoutTracksInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
    followers?: User_ArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutTracksInput = {
    id: string
    artist_name: string
    external_url?: string | null
    image_url?: string | null
    genre?: string | null
    followers?: User_ArtistUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutTracksInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
  }

  export type ArtistUpsertWithoutTracksInput = {
    update: XOR<ArtistUpdateWithoutTracksInput, ArtistUncheckedUpdateWithoutTracksInput>
    create: XOR<ArtistCreateWithoutTracksInput, ArtistUncheckedCreateWithoutTracksInput>
    where?: ArtistWhereInput
  }

  export type ArtistUpdateToOneWithWhereWithoutTracksInput = {
    where?: ArtistWhereInput
    data: XOR<ArtistUpdateWithoutTracksInput, ArtistUncheckedUpdateWithoutTracksInput>
  }

  export type ArtistUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: User_ArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutTracksInput = {
    id?: StringFieldUpdateOperationsInput | string
    artist_name?: StringFieldUpdateOperationsInput | string
    external_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: User_ArtistUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type User_ArtistCreateManyUserInput = {
    artist_id: string
  }

  export type User_ArtistUpdateWithoutUserInput = {
    artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type User_ArtistUncheckedUpdateWithoutUserInput = {
    artist_id?: StringFieldUpdateOperationsInput | string
  }

  export type User_ArtistUncheckedUpdateManyWithoutUserInput = {
    artist_id?: StringFieldUpdateOperationsInput | string
  }

  export type User_ArtistCreateManyArtistInput = {
    user_id: string
  }

  export type TracksCreateManyArtistInput = {
    id: string
    track_name: string
    release_date: string
    track_type: string
    external_url: string
    preview_url?: string | null
    track_image: string
    all_artists?: TracksCreateall_artistsInput | InputJsonValue[]
  }

  export type User_ArtistUpdateWithoutArtistInput = {
    user?: UserUpdateOneRequiredWithoutFollowsNestedInput
  }

  export type User_ArtistUncheckedUpdateWithoutArtistInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type User_ArtistUncheckedUpdateManyWithoutArtistInput = {
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
  }

  export type TracksUncheckedUpdateWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
  }

  export type TracksUncheckedUpdateManyWithoutArtistInput = {
    id?: StringFieldUpdateOperationsInput | string
    track_name?: StringFieldUpdateOperationsInput | string
    release_date?: StringFieldUpdateOperationsInput | string
    track_type?: StringFieldUpdateOperationsInput | string
    external_url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    track_image?: StringFieldUpdateOperationsInput | string
    all_artists?: TracksUpdateall_artistsInput | InputJsonValue[]
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistDefaultArgs instead
     */
    export type ArtistArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use User_ArtistDefaultArgs instead
     */
    export type User_ArtistArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = User_ArtistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksDefaultArgs instead
     */
    export type TracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TracksDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}