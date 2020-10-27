import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";
import {
  ListRequestedServiceQuotaChangeHistoryRequest,
  ListRequestedServiceQuotaChangeHistoryResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand,
  serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand,
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

export type ListRequestedServiceQuotaChangeHistoryCommandInput = ListRequestedServiceQuotaChangeHistoryRequest;
export type ListRequestedServiceQuotaChangeHistoryCommandOutput = ListRequestedServiceQuotaChangeHistoryResponse &
  __MetadataBearer;

export class ListRequestedServiceQuotaChangeHistoryCommand extends $Command<
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
  ServiceQuotasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRequestedServiceQuotaChangeHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "ServiceQuotasClient",
      commandName: "ListRequestedServiceQuotaChangeHistoryCommand",
      inputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRequestedServiceQuotaChangeHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListRequestedServiceQuotaChangeHistoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
