import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetSendStatisticsResponse } from "../models/models_0";
import {
  deserializeAws_queryGetSendStatisticsCommand,
  serializeAws_queryGetSendStatisticsCommand,
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

export type GetSendStatisticsCommandInput = {};
export type GetSendStatisticsCommandOutput = GetSendStatisticsResponse & __MetadataBearer;

export class GetSendStatisticsCommand extends $Command<
  GetSendStatisticsCommandInput,
  GetSendStatisticsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSendStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "SESClient",
      commandName: "GetSendStatisticsCommand",
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: GetSendStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSendStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSendStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSendStatisticsCommandOutput> {
    return deserializeAws_queryGetSendStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
