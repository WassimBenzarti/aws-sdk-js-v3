import {
  CloudSearchDomainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudSearchDomainClient";
import { SuggestRequest, SuggestResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SuggestCommand,
  serializeAws_restJson1SuggestCommand,
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

export type SuggestCommandInput = SuggestRequest;
export type SuggestCommandOutput = SuggestResponse & __MetadataBearer;

export class SuggestCommand extends $Command<
  SuggestCommandInput,
  SuggestCommandOutput,
  CloudSearchDomainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SuggestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchDomainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SuggestCommandInput, SuggestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "CloudSearchDomainClient",
      commandName: "SuggestCommand",
      inputFilterSensitiveLog: SuggestRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SuggestResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SuggestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SuggestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuggestCommandOutput> {
    return deserializeAws_restJson1SuggestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
