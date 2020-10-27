import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostAndUsageRequest, GetCostAndUsageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCostAndUsageCommand,
  serializeAws_json1_1GetCostAndUsageCommand,
} from "../protocols/Aws_json1_1";
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

export type GetCostAndUsageCommandInput = GetCostAndUsageRequest;
export type GetCostAndUsageCommandOutput = GetCostAndUsageResponse & __MetadataBearer;

export class GetCostAndUsageCommand extends $Command<
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCostAndUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "CostExplorerClient",
      commandName: "GetCostAndUsageCommand",
      inputFilterSensitiveLog: GetCostAndUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCostAndUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCostAndUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostAndUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostAndUsageCommandOutput> {
    return deserializeAws_json1_1GetCostAndUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
