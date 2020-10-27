import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutAccountSendingAttributesRequest, PutAccountSendingAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountSendingAttributesCommand,
  serializeAws_restJson1PutAccountSendingAttributesCommand,
} from "../protocols/Aws_restJson1";
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

export type PutAccountSendingAttributesCommandInput = PutAccountSendingAttributesRequest;
export type PutAccountSendingAttributesCommandOutput = PutAccountSendingAttributesResponse & __MetadataBearer;

export class PutAccountSendingAttributesCommand extends $Command<
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountSendingAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountSendingAttributesCommandInput, PutAccountSendingAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "PinpointEmailClient",
      commandName: "PutAccountSendingAttributesCommand",
      inputFilterSensitiveLog: PutAccountSendingAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountSendingAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountSendingAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountSendingAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAccountSendingAttributesCommandOutput> {
    return deserializeAws_restJson1PutAccountSendingAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
