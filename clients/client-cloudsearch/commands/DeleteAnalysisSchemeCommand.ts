import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteAnalysisSchemeRequest, DeleteAnalysisSchemeResponse } from "../models/models_0";
import {
  deserializeAws_queryDeleteAnalysisSchemeCommand,
  serializeAws_queryDeleteAnalysisSchemeCommand,
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

export type DeleteAnalysisSchemeCommandInput = DeleteAnalysisSchemeRequest;
export type DeleteAnalysisSchemeCommandOutput = DeleteAnalysisSchemeResponse & __MetadataBearer;

export class DeleteAnalysisSchemeCommand extends $Command<
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAnalysisSchemeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "CloudSearchClient",
      commandName: "DeleteAnalysisSchemeCommand",
      inputFilterSensitiveLog: DeleteAnalysisSchemeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAnalysisSchemeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAnalysisSchemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteAnalysisSchemeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnalysisSchemeCommandOutput> {
    return deserializeAws_queryDeleteAnalysisSchemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
