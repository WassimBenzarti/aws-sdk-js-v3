import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBParameterGroupDetails, DescribeDBParametersMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBParametersCommand,
  serializeAws_queryDescribeDBParametersCommand,
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

export type DescribeDBParametersCommandInput = DescribeDBParametersMessage;
export type DescribeDBParametersCommandOutput = DBParameterGroupDetails & __MetadataBearer;

export class DescribeDBParametersCommand extends $Command<
  DescribeDBParametersCommandInput,
  DescribeDBParametersCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBParametersCommandInput, DescribeDBParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "RDSClient",
      commandName: "DescribeDBParametersCommand",
      inputFilterSensitiveLog: DescribeDBParametersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBParameterGroupDetails.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBParametersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBParametersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBParametersCommandOutput> {
    return deserializeAws_queryDescribeDBParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
