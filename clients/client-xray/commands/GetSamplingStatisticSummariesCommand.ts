import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetSamplingStatisticSummariesRequest, GetSamplingStatisticSummariesResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetSamplingStatisticSummariesCommand,
  serializeAws_restJson1GetSamplingStatisticSummariesCommand,
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

export type GetSamplingStatisticSummariesCommandInput = GetSamplingStatisticSummariesRequest;
export type GetSamplingStatisticSummariesCommandOutput = GetSamplingStatisticSummariesResult & __MetadataBearer;

export class GetSamplingStatisticSummariesCommand extends $Command<
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSamplingStatisticSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSamplingStatisticSummariesCommandInput, GetSamplingStatisticSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "XRayClient",
      commandName: "GetSamplingStatisticSummariesCommand",
      inputFilterSensitiveLog: GetSamplingStatisticSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSamplingStatisticSummariesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSamplingStatisticSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSamplingStatisticSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSamplingStatisticSummariesCommandOutput> {
    return deserializeAws_restJson1GetSamplingStatisticSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
