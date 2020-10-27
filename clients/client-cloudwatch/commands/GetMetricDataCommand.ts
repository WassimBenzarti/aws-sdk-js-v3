import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricDataInput, GetMetricDataOutput } from "../models/models_0";
import {
  deserializeAws_queryGetMetricDataCommand,
  serializeAws_queryGetMetricDataCommand,
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

export type GetMetricDataCommandInput = GetMetricDataInput;
export type GetMetricDataCommandOutput = GetMetricDataOutput & __MetadataBearer;

export class GetMetricDataCommand extends $Command<
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricDataCommandInput, GetMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "CloudWatchClient",
      commandName: "GetMetricDataCommand",
      inputFilterSensitiveLog: GetMetricDataInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMetricDataOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetMetricDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricDataCommandOutput> {
    return deserializeAws_queryGetMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
