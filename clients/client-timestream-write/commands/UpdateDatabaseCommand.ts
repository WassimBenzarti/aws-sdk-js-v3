import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { UpdateDatabaseRequest, UpdateDatabaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateDatabaseCommand,
  serializeAws_json1_0UpdateDatabaseCommand,
} from "../protocols/Aws_json1_0";
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

export type UpdateDatabaseCommandInput = UpdateDatabaseRequest;
export type UpdateDatabaseCommandOutput = UpdateDatabaseResponse & __MetadataBearer;

export class UpdateDatabaseCommand extends $Command<
  UpdateDatabaseCommandInput,
  UpdateDatabaseCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "TimestreamWriteClient",
      commandName: "UpdateDatabaseCommand",
      inputFilterSensitiveLog: UpdateDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatabaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatabaseCommandOutput> {
    return deserializeAws_json1_0UpdateDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
