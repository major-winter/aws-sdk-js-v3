// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateSigninDelegateGroupsFromAccountRequest,
  DisassociateSigninDelegateGroupsFromAccountResponse,
} from "../models/models_0";
import {
  de_DisassociateSigninDelegateGroupsFromAccountCommand,
  se_DisassociateSigninDelegateGroupsFromAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateSigninDelegateGroupsFromAccountCommand}.
 */
export interface DisassociateSigninDelegateGroupsFromAccountCommandInput
  extends DisassociateSigninDelegateGroupsFromAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSigninDelegateGroupsFromAccountCommand}.
 */
export interface DisassociateSigninDelegateGroupsFromAccountCommandOutput
  extends DisassociateSigninDelegateGroupsFromAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DisassociateSigninDelegateGroupsFromAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DisassociateSigninDelegateGroupsFromAccountRequest
 *   AccountId: "STRING_VALUE", // required
 *   GroupNames: [ // NonEmptyStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateSigninDelegateGroupsFromAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSigninDelegateGroupsFromAccountCommandInput - {@link DisassociateSigninDelegateGroupsFromAccountCommandInput}
 * @returns {@link DisassociateSigninDelegateGroupsFromAccountCommandOutput}
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateSigninDelegateGroupsFromAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class DisassociateSigninDelegateGroupsFromAccountCommand extends $Command
  .classBuilder<
    DisassociateSigninDelegateGroupsFromAccountCommandInput,
    DisassociateSigninDelegateGroupsFromAccountCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "DisassociateSigninDelegateGroupsFromAccount", {})
  .n("ChimeClient", "DisassociateSigninDelegateGroupsFromAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateSigninDelegateGroupsFromAccountCommand)
  .de(de_DisassociateSigninDelegateGroupsFromAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSigninDelegateGroupsFromAccountRequest;
      output: {};
    };
    sdk: {
      input: DisassociateSigninDelegateGroupsFromAccountCommandInput;
      output: DisassociateSigninDelegateGroupsFromAccountCommandOutput;
    };
  };
}
