import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListRemoteAccessSessionsCommand,
  serializeAws_json1_1ListRemoteAccessSessionsCommand,
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

export type ListRemoteAccessSessionsCommandInput = ListRemoteAccessSessionsRequest;
export type ListRemoteAccessSessionsCommandOutput = ListRemoteAccessSessionsResult & __MetadataBearer;

export class ListRemoteAccessSessionsCommand extends $Command<
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRemoteAccessSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRemoteAccessSessionsCommandInput, ListRemoteAccessSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "DeviceFarmClient",
      commandName: "ListRemoteAccessSessionsCommand",
      inputFilterSensitiveLog: ListRemoteAccessSessionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRemoteAccessSessionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRemoteAccessSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRemoteAccessSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRemoteAccessSessionsCommandOutput> {
    return deserializeAws_json1_1ListRemoteAccessSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
