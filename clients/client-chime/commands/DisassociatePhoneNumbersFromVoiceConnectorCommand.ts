import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DisassociatePhoneNumbersFromVoiceConnectorRequest,
  DisassociatePhoneNumbersFromVoiceConnectorResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand,
  serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand,
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

export type DisassociatePhoneNumbersFromVoiceConnectorCommandInput = DisassociatePhoneNumbersFromVoiceConnectorRequest;
export type DisassociatePhoneNumbersFromVoiceConnectorCommandOutput = DisassociatePhoneNumbersFromVoiceConnectorResponse &
  __MetadataBearer;

export class DisassociatePhoneNumbersFromVoiceConnectorCommand extends $Command<
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "ChimeClient",
      commandName: "DisassociatePhoneNumbersFromVoiceConnectorCommand",
      inputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociatePhoneNumbersFromVoiceConnectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> {
    return deserializeAws_restJson1DisassociatePhoneNumbersFromVoiceConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
