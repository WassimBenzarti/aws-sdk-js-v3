import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/models_4";
import {
  deserializeAws_ec2ReplaceRouteTableAssociationCommand,
  serializeAws_ec2ReplaceRouteTableAssociationCommand,
} from "../protocols/Aws_ec2";
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

export type ReplaceRouteTableAssociationCommandInput = ReplaceRouteTableAssociationRequest;
export type ReplaceRouteTableAssociationCommandOutput = ReplaceRouteTableAssociationResult & __MetadataBearer;

export class ReplaceRouteTableAssociationCommand extends $Command<
  ReplaceRouteTableAssociationCommandInput,
  ReplaceRouteTableAssociationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplaceRouteTableAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName: "EC2Client",
      commandName: "ReplaceRouteTableAssociationCommand",
      inputFilterSensitiveLog: ReplaceRouteTableAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReplaceRouteTableAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceRouteTableAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceRouteTableAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceRouteTableAssociationCommandOutput> {
    return deserializeAws_ec2ReplaceRouteTableAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
