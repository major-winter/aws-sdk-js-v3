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
  defaultGlobalAcceleratorHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "./commands/AddCustomRoutingEndpointsCommand";
import { AddEndpointsCommandInput, AddEndpointsCommandOutput } from "./commands/AddEndpointsCommand";
import { AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput } from "./commands/AdvertiseByoipCidrCommand";
import {
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
} from "./commands/AllowCustomRoutingTrafficCommand";
import { CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput } from "./commands/CreateAcceleratorCommand";
import {
  CreateCrossAccountAttachmentCommandInput,
  CreateCrossAccountAttachmentCommandOutput,
} from "./commands/CreateCrossAccountAttachmentCommand";
import {
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
} from "./commands/CreateCustomRoutingAcceleratorCommand";
import {
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
} from "./commands/CreateCustomRoutingEndpointGroupCommand";
import {
  CreateCustomRoutingListenerCommandInput,
  CreateCustomRoutingListenerCommandOutput,
} from "./commands/CreateCustomRoutingListenerCommand";
import {
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
} from "./commands/CreateEndpointGroupCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand";
import { DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput } from "./commands/DeleteAcceleratorCommand";
import {
  DeleteCrossAccountAttachmentCommandInput,
  DeleteCrossAccountAttachmentCommandOutput,
} from "./commands/DeleteCrossAccountAttachmentCommand";
import {
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
} from "./commands/DeleteCustomRoutingAcceleratorCommand";
import {
  DeleteCustomRoutingEndpointGroupCommandInput,
  DeleteCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DeleteCustomRoutingEndpointGroupCommand";
import {
  DeleteCustomRoutingListenerCommandInput,
  DeleteCustomRoutingListenerCommandOutput,
} from "./commands/DeleteCustomRoutingListenerCommand";
import {
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput,
} from "./commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand";
import {
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
} from "./commands/DenyCustomRoutingTrafficCommand";
import {
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import {
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput,
} from "./commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput,
} from "./commands/DescribeAcceleratorCommand";
import {
  DescribeCrossAccountAttachmentCommandInput,
  DescribeCrossAccountAttachmentCommandOutput,
} from "./commands/DescribeCrossAccountAttachmentCommand";
import {
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import {
  DescribeCustomRoutingAcceleratorCommandInput,
  DescribeCustomRoutingAcceleratorCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorCommand";
import {
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DescribeCustomRoutingEndpointGroupCommand";
import {
  DescribeCustomRoutingListenerCommandInput,
  DescribeCustomRoutingListenerCommandOutput,
} from "./commands/DescribeCustomRoutingListenerCommand";
import {
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput,
} from "./commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommandInput, DescribeListenerCommandOutput } from "./commands/DescribeListenerCommand";
import { ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput } from "./commands/ListAcceleratorsCommand";
import { ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput } from "./commands/ListByoipCidrsCommand";
import {
  ListCrossAccountAttachmentsCommandInput,
  ListCrossAccountAttachmentsCommandOutput,
} from "./commands/ListCrossAccountAttachmentsCommand";
import {
  ListCrossAccountResourceAccountsCommandInput,
  ListCrossAccountResourceAccountsCommandOutput,
} from "./commands/ListCrossAccountResourceAccountsCommand";
import {
  ListCrossAccountResourcesCommandInput,
  ListCrossAccountResourcesCommandOutput,
} from "./commands/ListCrossAccountResourcesCommand";
import {
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "./commands/ListCustomRoutingAcceleratorsCommand";
import {
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "./commands/ListCustomRoutingEndpointGroupsCommand";
import {
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "./commands/ListCustomRoutingListenersCommand";
import {
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsByDestinationCommand";
import {
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsCommand";
import { ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput } from "./commands/ListEndpointGroupsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "./commands/ListListenersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput } from "./commands/ProvisionByoipCidrCommand";
import {
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
} from "./commands/RemoveCustomRoutingEndpointsCommand";
import { RemoveEndpointsCommandInput, RemoveEndpointsCommandOutput } from "./commands/RemoveEndpointsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput,
} from "./commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput } from "./commands/UpdateAcceleratorCommand";
import {
  UpdateCrossAccountAttachmentCommandInput,
  UpdateCrossAccountAttachmentCommandOutput,
} from "./commands/UpdateCrossAccountAttachmentCommand";
import {
  UpdateCustomRoutingAcceleratorAttributesCommandInput,
  UpdateCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import {
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorCommand";
import {
  UpdateCustomRoutingListenerCommandInput,
  UpdateCustomRoutingListenerCommandOutput,
} from "./commands/UpdateCustomRoutingListenerCommand";
import {
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput,
} from "./commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "./commands/UpdateListenerCommand";
import { WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput } from "./commands/WithdrawByoipCidrCommand";
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
  | AddCustomRoutingEndpointsCommandInput
  | AddEndpointsCommandInput
  | AdvertiseByoipCidrCommandInput
  | AllowCustomRoutingTrafficCommandInput
  | CreateAcceleratorCommandInput
  | CreateCrossAccountAttachmentCommandInput
  | CreateCustomRoutingAcceleratorCommandInput
  | CreateCustomRoutingEndpointGroupCommandInput
  | CreateCustomRoutingListenerCommandInput
  | CreateEndpointGroupCommandInput
  | CreateListenerCommandInput
  | DeleteAcceleratorCommandInput
  | DeleteCrossAccountAttachmentCommandInput
  | DeleteCustomRoutingAcceleratorCommandInput
  | DeleteCustomRoutingEndpointGroupCommandInput
  | DeleteCustomRoutingListenerCommandInput
  | DeleteEndpointGroupCommandInput
  | DeleteListenerCommandInput
  | DenyCustomRoutingTrafficCommandInput
  | DeprovisionByoipCidrCommandInput
  | DescribeAcceleratorAttributesCommandInput
  | DescribeAcceleratorCommandInput
  | DescribeCrossAccountAttachmentCommandInput
  | DescribeCustomRoutingAcceleratorAttributesCommandInput
  | DescribeCustomRoutingAcceleratorCommandInput
  | DescribeCustomRoutingEndpointGroupCommandInput
  | DescribeCustomRoutingListenerCommandInput
  | DescribeEndpointGroupCommandInput
  | DescribeListenerCommandInput
  | ListAcceleratorsCommandInput
  | ListByoipCidrsCommandInput
  | ListCrossAccountAttachmentsCommandInput
  | ListCrossAccountResourceAccountsCommandInput
  | ListCrossAccountResourcesCommandInput
  | ListCustomRoutingAcceleratorsCommandInput
  | ListCustomRoutingEndpointGroupsCommandInput
  | ListCustomRoutingListenersCommandInput
  | ListCustomRoutingPortMappingsByDestinationCommandInput
  | ListCustomRoutingPortMappingsCommandInput
  | ListEndpointGroupsCommandInput
  | ListListenersCommandInput
  | ListTagsForResourceCommandInput
  | ProvisionByoipCidrCommandInput
  | RemoveCustomRoutingEndpointsCommandInput
  | RemoveEndpointsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAcceleratorAttributesCommandInput
  | UpdateAcceleratorCommandInput
  | UpdateCrossAccountAttachmentCommandInput
  | UpdateCustomRoutingAcceleratorAttributesCommandInput
  | UpdateCustomRoutingAcceleratorCommandInput
  | UpdateCustomRoutingListenerCommandInput
  | UpdateEndpointGroupCommandInput
  | UpdateListenerCommandInput
  | WithdrawByoipCidrCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddCustomRoutingEndpointsCommandOutput
  | AddEndpointsCommandOutput
  | AdvertiseByoipCidrCommandOutput
  | AllowCustomRoutingTrafficCommandOutput
  | CreateAcceleratorCommandOutput
  | CreateCrossAccountAttachmentCommandOutput
  | CreateCustomRoutingAcceleratorCommandOutput
  | CreateCustomRoutingEndpointGroupCommandOutput
  | CreateCustomRoutingListenerCommandOutput
  | CreateEndpointGroupCommandOutput
  | CreateListenerCommandOutput
  | DeleteAcceleratorCommandOutput
  | DeleteCrossAccountAttachmentCommandOutput
  | DeleteCustomRoutingAcceleratorCommandOutput
  | DeleteCustomRoutingEndpointGroupCommandOutput
  | DeleteCustomRoutingListenerCommandOutput
  | DeleteEndpointGroupCommandOutput
  | DeleteListenerCommandOutput
  | DenyCustomRoutingTrafficCommandOutput
  | DeprovisionByoipCidrCommandOutput
  | DescribeAcceleratorAttributesCommandOutput
  | DescribeAcceleratorCommandOutput
  | DescribeCrossAccountAttachmentCommandOutput
  | DescribeCustomRoutingAcceleratorAttributesCommandOutput
  | DescribeCustomRoutingAcceleratorCommandOutput
  | DescribeCustomRoutingEndpointGroupCommandOutput
  | DescribeCustomRoutingListenerCommandOutput
  | DescribeEndpointGroupCommandOutput
  | DescribeListenerCommandOutput
  | ListAcceleratorsCommandOutput
  | ListByoipCidrsCommandOutput
  | ListCrossAccountAttachmentsCommandOutput
  | ListCrossAccountResourceAccountsCommandOutput
  | ListCrossAccountResourcesCommandOutput
  | ListCustomRoutingAcceleratorsCommandOutput
  | ListCustomRoutingEndpointGroupsCommandOutput
  | ListCustomRoutingListenersCommandOutput
  | ListCustomRoutingPortMappingsByDestinationCommandOutput
  | ListCustomRoutingPortMappingsCommandOutput
  | ListEndpointGroupsCommandOutput
  | ListListenersCommandOutput
  | ListTagsForResourceCommandOutput
  | ProvisionByoipCidrCommandOutput
  | RemoveCustomRoutingEndpointsCommandOutput
  | RemoveEndpointsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAcceleratorAttributesCommandOutput
  | UpdateAcceleratorCommandOutput
  | UpdateCrossAccountAttachmentCommandOutput
  | UpdateCustomRoutingAcceleratorAttributesCommandOutput
  | UpdateCustomRoutingAcceleratorCommandOutput
  | UpdateCustomRoutingListenerCommandOutput
  | UpdateEndpointGroupCommandOutput
  | UpdateListenerCommandOutput
  | WithdrawByoipCidrCommandOutput;

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
export type GlobalAcceleratorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of GlobalAcceleratorClient class constructor that set the region, credentials and other options.
 */
export interface GlobalAcceleratorClientConfig extends GlobalAcceleratorClientConfigType {}

/**
 * @public
 */
export type GlobalAcceleratorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of GlobalAcceleratorClient class. This is resolved and normalized from the {@link GlobalAcceleratorClientConfig | constructor configuration interface}.
 */
export interface GlobalAcceleratorClientResolvedConfig extends GlobalAcceleratorClientResolvedConfigType {}

/**
 * <fullname>Global Accelerator</fullname>
 *          <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 		    Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
 * 	    	<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 *          <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
 * 			of your applications for local and global users. Depending on the type of accelerator you choose, you can
 * 			gain additional benefits. </p>
 *          <ul>
 *             <li>
 *                <p>By using a standard accelerator, you can improve availability of your internet applications
 * 			    that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services
 * 				global network. </p>
 *             </li>
 *             <li>
 *                <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
 * 				can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 		    	US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 		    	on Amazon Web Services CLI commands.</p>
 *          </important>
 *          <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses
 * 			are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack,
 * 			Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses.
 * 			With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure
 * 			these entry points to be IPv4 addresses from your own IP address ranges that you bring to Global Accelerator (BYOIP). </p>
 *          <p>For a standard accelerator,
 * 	        they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases
 * 			the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
 * 	    	Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing
 * 	        accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that
 * 			are virtual private cloud (VPC) subnets.</p>
 *          <important>
 *             <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you
 * 				disable the accelerator and it no longer accepts or routes traffic. However, when you
 * 					<i>delete</i> an accelerator, you lose the static IP addresses that
 * 				are assigned to it, so you can no longer route traffic by using them. You can use
 * 				IAM policies like tag-based permissions with Global Accelerator to limit the users who have
 * 				permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
 *          </important>
 *          <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based
 * 			on health, client location, and policies that you configure. The service reacts instantly to
 * 			changes in health or configuration to ensure that internet traffic from clients is always
 * 			directed to healthy endpoints.</p>
 *          <p>For more information about understanding and using Global Accelerator, see the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 * @public
 */
export class GlobalAcceleratorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlobalAcceleratorClientResolvedConfig
> {
  /**
   * The resolved configuration of GlobalAcceleratorClient class. This is resolved and normalized from the {@link GlobalAcceleratorClientConfig | constructor configuration interface}.
   */
  readonly config: GlobalAcceleratorClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GlobalAcceleratorClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultGlobalAcceleratorHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GlobalAcceleratorClientResolvedConfig) =>
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
