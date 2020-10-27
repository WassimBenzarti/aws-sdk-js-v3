import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";
import { ListApplicationDependenciesRequest, ListApplicationDependenciesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListApplicationDependenciesCommand,
  serializeAws_restJson1ListApplicationDependenciesCommand,
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

export type ListApplicationDependenciesCommandInput = ListApplicationDependenciesRequest;
export type ListApplicationDependenciesCommandOutput = ListApplicationDependenciesResponse & __MetadataBearer;

export class ListApplicationDependenciesCommand extends $Command<
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListApplicationDependenciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListApplicationDependenciesCommandInput, ListApplicationDependenciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "ServerlessApplicationRepositoryClient",
      commandName: "ListApplicationDependenciesCommand",
      inputFilterSensitiveLog: ListApplicationDependenciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListApplicationDependenciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApplicationDependenciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListApplicationDependenciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApplicationDependenciesCommandOutput> {
    return deserializeAws_restJson1ListApplicationDependenciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
