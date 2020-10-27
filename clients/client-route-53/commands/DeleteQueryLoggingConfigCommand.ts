import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteQueryLoggingConfigRequest, DeleteQueryLoggingConfigResponse } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteQueryLoggingConfigCommand,
  serializeAws_restXmlDeleteQueryLoggingConfigCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type DeleteQueryLoggingConfigCommandInput = DeleteQueryLoggingConfigRequest;
export type DeleteQueryLoggingConfigCommandOutput = DeleteQueryLoggingConfigResponse & __MetadataBearer;

export class DeleteQueryLoggingConfigCommand extends $Command<
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteQueryLoggingConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteQueryLoggingConfigCommandInput, DeleteQueryLoggingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "Route53Client",
      commandName: "DeleteQueryLoggingConfigCommand",
      inputFilterSensitiveLog: DeleteQueryLoggingConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteQueryLoggingConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteQueryLoggingConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteQueryLoggingConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteQueryLoggingConfigCommandOutput> {
    return deserializeAws_restXmlDeleteQueryLoggingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
