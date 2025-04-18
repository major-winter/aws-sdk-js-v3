// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCloudDirectoryHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddFacetToObjectCommandInput, AddFacetToObjectCommandOutput } from "./commands/AddFacetToObjectCommand";
import { ApplySchemaCommandInput, ApplySchemaCommandOutput } from "./commands/ApplySchemaCommand";
import { AttachObjectCommandInput, AttachObjectCommandOutput } from "./commands/AttachObjectCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "./commands/AttachPolicyCommand";
import { AttachToIndexCommandInput, AttachToIndexCommandOutput } from "./commands/AttachToIndexCommand";
import { AttachTypedLinkCommandInput, AttachTypedLinkCommandOutput } from "./commands/AttachTypedLinkCommand";
import { BatchReadCommandInput, BatchReadCommandOutput } from "./commands/BatchReadCommand";
import { BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import { CreateFacetCommandInput, CreateFacetCommandOutput } from "./commands/CreateFacetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreateObjectCommandInput, CreateObjectCommandOutput } from "./commands/CreateObjectCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "./commands/CreateTypedLinkFacetCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import { DeleteFacetCommandInput, DeleteFacetCommandOutput } from "./commands/DeleteFacetCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "./commands/DeleteTypedLinkFacetCommand";
import { DetachFromIndexCommandInput, DetachFromIndexCommandOutput } from "./commands/DetachFromIndexCommand";
import { DetachObjectCommandInput, DetachObjectCommandOutput } from "./commands/DetachObjectCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "./commands/DetachPolicyCommand";
import { DetachTypedLinkCommandInput, DetachTypedLinkCommandOutput } from "./commands/DetachTypedLinkCommand";
import { DisableDirectoryCommandInput, DisableDirectoryCommandOutput } from "./commands/DisableDirectoryCommand";
import { EnableDirectoryCommandInput, EnableDirectoryCommandOutput } from "./commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "./commands/GetAppliedSchemaVersionCommand";
import { GetDirectoryCommandInput, GetDirectoryCommandOutput } from "./commands/GetDirectoryCommand";
import { GetFacetCommandInput, GetFacetCommandOutput } from "./commands/GetFacetCommand";
import { GetLinkAttributesCommandInput, GetLinkAttributesCommandOutput } from "./commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "./commands/GetObjectInformationCommand";
import { GetSchemaAsJsonCommandInput, GetSchemaAsJsonCommandOutput } from "./commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "./commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "./commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "./commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "./commands/ListDevelopmentSchemaArnsCommand";
import { ListDirectoriesCommandInput, ListDirectoriesCommandOutput } from "./commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "./commands/ListFacetAttributesCommand";
import { ListFacetNamesCommandInput, ListFacetNamesCommandOutput } from "./commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "./commands/ListIncomingTypedLinksCommand";
import { ListIndexCommandInput, ListIndexCommandOutput } from "./commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "./commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "./commands/ListObjectAttributesCommand";
import { ListObjectChildrenCommandInput, ListObjectChildrenCommandOutput } from "./commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "./commands/ListObjectParentPathsCommand";
import { ListObjectParentsCommandInput, ListObjectParentsCommandOutput } from "./commands/ListObjectParentsCommand";
import { ListObjectPoliciesCommandInput, ListObjectPoliciesCommandOutput } from "./commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "./commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "./commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "./commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "./commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "./commands/ListTypedLinkFacetNamesCommand";
import { LookupPolicyCommandInput, LookupPolicyCommandOutput } from "./commands/LookupPolicyCommand";
import { PublishSchemaCommandInput, PublishSchemaCommandOutput } from "./commands/PublishSchemaCommand";
import { PutSchemaFromJsonCommandInput, PutSchemaFromJsonCommandOutput } from "./commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "./commands/RemoveFacetFromObjectCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFacetCommandInput, UpdateFacetCommandOutput } from "./commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "./commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "./commands/UpdateObjectAttributesCommand";
import { UpdateSchemaCommandInput, UpdateSchemaCommandOutput } from "./commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "./commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "./commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "./commands/UpgradePublishedSchemaCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddFacetToObjectCommandInput
  | ApplySchemaCommandInput
  | AttachObjectCommandInput
  | AttachPolicyCommandInput
  | AttachToIndexCommandInput
  | AttachTypedLinkCommandInput
  | BatchReadCommandInput
  | BatchWriteCommandInput
  | CreateDirectoryCommandInput
  | CreateFacetCommandInput
  | CreateIndexCommandInput
  | CreateObjectCommandInput
  | CreateSchemaCommandInput
  | CreateTypedLinkFacetCommandInput
  | DeleteDirectoryCommandInput
  | DeleteFacetCommandInput
  | DeleteObjectCommandInput
  | DeleteSchemaCommandInput
  | DeleteTypedLinkFacetCommandInput
  | DetachFromIndexCommandInput
  | DetachObjectCommandInput
  | DetachPolicyCommandInput
  | DetachTypedLinkCommandInput
  | DisableDirectoryCommandInput
  | EnableDirectoryCommandInput
  | GetAppliedSchemaVersionCommandInput
  | GetDirectoryCommandInput
  | GetFacetCommandInput
  | GetLinkAttributesCommandInput
  | GetObjectAttributesCommandInput
  | GetObjectInformationCommandInput
  | GetSchemaAsJsonCommandInput
  | GetTypedLinkFacetInformationCommandInput
  | ListAppliedSchemaArnsCommandInput
  | ListAttachedIndicesCommandInput
  | ListDevelopmentSchemaArnsCommandInput
  | ListDirectoriesCommandInput
  | ListFacetAttributesCommandInput
  | ListFacetNamesCommandInput
  | ListIncomingTypedLinksCommandInput
  | ListIndexCommandInput
  | ListManagedSchemaArnsCommandInput
  | ListObjectAttributesCommandInput
  | ListObjectChildrenCommandInput
  | ListObjectParentPathsCommandInput
  | ListObjectParentsCommandInput
  | ListObjectPoliciesCommandInput
  | ListOutgoingTypedLinksCommandInput
  | ListPolicyAttachmentsCommandInput
  | ListPublishedSchemaArnsCommandInput
  | ListTagsForResourceCommandInput
  | ListTypedLinkFacetAttributesCommandInput
  | ListTypedLinkFacetNamesCommandInput
  | LookupPolicyCommandInput
  | PublishSchemaCommandInput
  | PutSchemaFromJsonCommandInput
  | RemoveFacetFromObjectCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFacetCommandInput
  | UpdateLinkAttributesCommandInput
  | UpdateObjectAttributesCommandInput
  | UpdateSchemaCommandInput
  | UpdateTypedLinkFacetCommandInput
  | UpgradeAppliedSchemaCommandInput
  | UpgradePublishedSchemaCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddFacetToObjectCommandOutput
  | ApplySchemaCommandOutput
  | AttachObjectCommandOutput
  | AttachPolicyCommandOutput
  | AttachToIndexCommandOutput
  | AttachTypedLinkCommandOutput
  | BatchReadCommandOutput
  | BatchWriteCommandOutput
  | CreateDirectoryCommandOutput
  | CreateFacetCommandOutput
  | CreateIndexCommandOutput
  | CreateObjectCommandOutput
  | CreateSchemaCommandOutput
  | CreateTypedLinkFacetCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteFacetCommandOutput
  | DeleteObjectCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteTypedLinkFacetCommandOutput
  | DetachFromIndexCommandOutput
  | DetachObjectCommandOutput
  | DetachPolicyCommandOutput
  | DetachTypedLinkCommandOutput
  | DisableDirectoryCommandOutput
  | EnableDirectoryCommandOutput
  | GetAppliedSchemaVersionCommandOutput
  | GetDirectoryCommandOutput
  | GetFacetCommandOutput
  | GetLinkAttributesCommandOutput
  | GetObjectAttributesCommandOutput
  | GetObjectInformationCommandOutput
  | GetSchemaAsJsonCommandOutput
  | GetTypedLinkFacetInformationCommandOutput
  | ListAppliedSchemaArnsCommandOutput
  | ListAttachedIndicesCommandOutput
  | ListDevelopmentSchemaArnsCommandOutput
  | ListDirectoriesCommandOutput
  | ListFacetAttributesCommandOutput
  | ListFacetNamesCommandOutput
  | ListIncomingTypedLinksCommandOutput
  | ListIndexCommandOutput
  | ListManagedSchemaArnsCommandOutput
  | ListObjectAttributesCommandOutput
  | ListObjectChildrenCommandOutput
  | ListObjectParentPathsCommandOutput
  | ListObjectParentsCommandOutput
  | ListObjectPoliciesCommandOutput
  | ListOutgoingTypedLinksCommandOutput
  | ListPolicyAttachmentsCommandOutput
  | ListPublishedSchemaArnsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTypedLinkFacetAttributesCommandOutput
  | ListTypedLinkFacetNamesCommandOutput
  | LookupPolicyCommandOutput
  | PublishSchemaCommandOutput
  | PutSchemaFromJsonCommandOutput
  | RemoveFacetFromObjectCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFacetCommandOutput
  | UpdateLinkAttributesCommandOutput
  | UpdateObjectAttributesCommandOutput
  | UpdateSchemaCommandOutput
  | UpdateTypedLinkFacetCommandOutput
  | UpgradeAppliedSchemaCommandOutput
  | UpgradePublishedSchemaCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CloudDirectoryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudDirectoryClient class constructor that set the region, credentials and other options.
 */
export interface CloudDirectoryClientConfig extends CloudDirectoryClientConfigType {}

/**
 * @public
 */
export type CloudDirectoryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
 */
export interface CloudDirectoryClientResolvedConfig extends CloudDirectoryClientResolvedConfigType {}

/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 * @public
 */
export class CloudDirectoryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudDirectoryClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudDirectoryClient class. This is resolved and normalized from the {@link CloudDirectoryClientConfig | constructor configuration interface}.
   */
  readonly config: CloudDirectoryClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudDirectoryClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCloudDirectoryHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudDirectoryClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
