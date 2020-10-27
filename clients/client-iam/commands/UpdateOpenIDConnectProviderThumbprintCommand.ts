import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/models_0";
import {
  deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand,
  serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateOpenIDConnectProviderThumbprintCommandInput = UpdateOpenIDConnectProviderThumbprintRequest;
export type UpdateOpenIDConnectProviderThumbprintCommandOutput = __MetadataBearer;

export class UpdateOpenIDConnectProviderThumbprintCommand extends $Command<
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateOpenIDConnectProviderThumbprintCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "IAMClient",
      commandName: "UpdateOpenIDConnectProviderThumbprintCommand",
      inputFilterSensitiveLog: UpdateOpenIDConnectProviderThumbprintRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateOpenIDConnectProviderThumbprintCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> {
    return deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
