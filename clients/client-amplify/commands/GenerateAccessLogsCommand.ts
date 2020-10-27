import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { GenerateAccessLogsRequest, GenerateAccessLogsResult } from "../models/models_0";
import {
  deserializeAws_restJson1GenerateAccessLogsCommand,
  serializeAws_restJson1GenerateAccessLogsCommand,
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

export type GenerateAccessLogsCommandInput = GenerateAccessLogsRequest;
export type GenerateAccessLogsCommandOutput = GenerateAccessLogsResult & __MetadataBearer;

export class GenerateAccessLogsCommand extends $Command<
  GenerateAccessLogsCommandInput,
  GenerateAccessLogsCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateAccessLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateAccessLogsCommandInput, GenerateAccessLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "AmplifyClient",
      commandName: "GenerateAccessLogsCommand",
      inputFilterSensitiveLog: GenerateAccessLogsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateAccessLogsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateAccessLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GenerateAccessLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateAccessLogsCommandOutput> {
    return deserializeAws_restJson1GenerateAccessLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
