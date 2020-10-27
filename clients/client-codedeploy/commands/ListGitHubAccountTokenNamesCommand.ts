import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListGitHubAccountTokenNamesInput, ListGitHubAccountTokenNamesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListGitHubAccountTokenNamesCommand,
  serializeAws_json1_1ListGitHubAccountTokenNamesCommand,
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

export type ListGitHubAccountTokenNamesCommandInput = ListGitHubAccountTokenNamesInput;
export type ListGitHubAccountTokenNamesCommandOutput = ListGitHubAccountTokenNamesOutput & __MetadataBearer;

export class ListGitHubAccountTokenNamesCommand extends $Command<
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGitHubAccountTokenNamesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGitHubAccountTokenNamesCommandInput, ListGitHubAccountTokenNamesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "CodeDeployClient",
      commandName: "ListGitHubAccountTokenNamesCommand",
      inputFilterSensitiveLog: ListGitHubAccountTokenNamesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListGitHubAccountTokenNamesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGitHubAccountTokenNamesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGitHubAccountTokenNamesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGitHubAccountTokenNamesCommandOutput> {
    return deserializeAws_json1_1ListGitHubAccountTokenNamesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
